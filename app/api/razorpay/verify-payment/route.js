import crypto from 'crypto';
import { NextResponse } from 'next/server';
import { createClient } from '@libsql/client';
import { Resend } from 'resend';

const turso = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      name,
      email,
      phone,
      plan,
    } = await req.json();

    const sign = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(sign)
      .digest('hex');

    if (razorpay_signature !== expectedSign) {
      return NextResponse.json({ success: false, message: 'Invalid signature' }, { status: 400 });
    }

    await turso.execute(`CREATE TABLE IF NOT EXISTS nishant_users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, phone TEXT, plan TEXT, payment_id TEXT, payment_date TEXT, expiry_date TEXT, status TEXT DEFAULT 'active')`);

    const paymentDate = new Date().toISOString();
    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 1);

    await turso.execute({
      sql: `INSERT INTO nishant_users (name, email, phone, plan, payment_id, payment_date, expiry_date, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      args: [name, email, phone, plan, razorpay_payment_id, paymentDate, expiryDate.toISOString(), 'active'],
    });

    await resend.emails.send({
      from: 'Nishant Software <onboarding@resend.dev>',
      to: ['hamaramorcha1153@gmail.com'],
      subject: `नया payment - ${name} - ${plan}`,
      html: `<p>नाम: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Plan: ${plan}</p><p>Payment ID: ${razorpay_payment_id}</p>`,
    });

    if (email) {
      await resend.emails.send({
        from: 'Nishant Software <onboarding@resend.dev>',
        to: [email],
        subject: 'निशांत सॉफ्टवेयर - Payment Successful',
        html: `<p>धन्यवाद ${name}!</p><p>आपका payment सफल रहा।</p><p>Expiry: ${expiryDate.toDateString()}</p>`,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Verification failed' }, { status: 500 });
  }
}