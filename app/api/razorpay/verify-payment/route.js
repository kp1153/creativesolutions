import crypto from 'crypto';
import { NextResponse } from 'next/server';
import { createClient } from '@libsql/client';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const registry = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

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
      software,
    } = await req.json();

    const sign = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(sign)
      .digest('hex');

    if (razorpay_signature !== expectedSign) {
      return NextResponse.json({ success: false, message: 'Invalid signature' }, { status: 400 });
    }

    const regResult = await registry.execute({
      sql: 'SELECT * FROM software_registry WHERE software_key = ?',
      args: [software],
    });

    if (regResult.rows.length === 0) {
      return NextResponse.json({ success: false, message: 'Software not found' }, { status: 404 });
    }

    const reg = regResult.rows[0];
    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 1);

    if (reg.activate_url) {
      const activateRes = await fetch(reg.activate_url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name,
          phone,
          plan,
          secret: process.env.HUB_SECRET,
        }),
      });

      const activateData = await activateRes.json();

      if (!activateData.success) {
        return NextResponse.json({ success: false, message: 'Activation failed' }, { status: 500 });
      }
    } else {
      const softwareDb = createClient({
        url: reg.turso_url,
        authToken: reg.turso_token,
      });

      await softwareDb.execute(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE,
        name TEXT,
        phone TEXT,
        trial_start TEXT DEFAULT CURRENT_TIMESTAMP,
        expiry_date TEXT,
        status TEXT NOT NULL DEFAULT 'trial',
        reminder_sent INTEGER DEFAULT 0
      )`);

      const existing = await softwareDb.execute({
        sql: 'SELECT * FROM users WHERE email = ?',
        args: [email],
      });

      if (existing.rows.length > 0) {
        await softwareDb.execute({
          sql: `UPDATE users SET status = 'active', expiry_date = ?, reminder_sent = 0 WHERE email = ?`,
          args: [expiryDate.toISOString(), email],
        });
      } else {
        await softwareDb.execute({
          sql: `INSERT INTO users (email, name, phone, status, expiry_date, reminder_sent) VALUES (?, ?, ?, 'active', ?, 0)`,
          args: [email, name, phone, expiryDate.toISOString()],
        });
      }
    }

    await resend.emails.send({
      from: 'Nishant Software <onboarding@resend.dev>',
      to: ['hamaramorcha1153@gmail.com'],
      subject: `New payment — ${name} — ${reg.name}`,
      html: `<p>Software: ${reg.name}</p><p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Plan: ${plan}</p><p>Payment ID: ${razorpay_payment_id}</p><p>Expiry: ${expiryDate.toDateString()}</p>`,
    });

    if (email) {
      await resend.emails.send({
        from: 'Nishant Software <onboarding@resend.dev>',
        to: [email],
        subject: `${reg.name} — Payment Successful`,
        html: `<p>Thank you ${name}!</p><p>Your payment was successful.</p><p>Software: ${reg.name}</p><p>Plan: ${plan}</p><p>Expiry: ${expiryDate.toDateString()}</p>`,
      });
    }

    return NextResponse.json({ success: true, redirectUrl: reg.redirect_url });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}