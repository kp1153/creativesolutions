import { NextResponse } from "next/server";
import { createClient } from "@libsql/client";
import { Resend } from "resend";

const registry = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

export async function POST(req) {
  try {
    const authHeader = req.headers.get("authorization");
    if (authHeader !== `Bearer ${process.env.HUB_SECRET}`) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const { email, name, phone, plan, software } = await req.json();
    if (!email || !software) {
      return NextResponse.json({ success: false, message: "email and software required" }, { status: 400 });
    }

    const regResult = await registry.execute({
      sql: "SELECT * FROM software_registry WHERE software_key = ?",
      args: [software],
    });

    if (regResult.rows.length === 0) {
      return NextResponse.json({ success: false, message: "Software not found" }, { status: 404 });
    }

    const reg = regResult.rows[0];

    const softwareDb = createClient({
      url: reg.db_url,
      authToken: reg.db_token,
    });

    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 1);

    const existing = await softwareDb.execute({
      sql: "SELECT * FROM users WHERE email = ?",
      args: [email],
    });

    if (existing.rows.length > 0) {
      await softwareDb.execute({
        sql: "UPDATE users SET status = 'active', expiry_date = ?, name = ? WHERE email = ?",
        args: [expiryDate.toISOString(), name, email],
      });
    } else {
      await softwareDb.execute({
        sql: "INSERT INTO users (email, name, phone, status, expiry_date, reminder_sent) VALUES (?, ?, ?, 'active', ?, 0)",
        args: [email, name, phone, expiryDate.toISOString()],
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Nishant Software <no-reply@web-developer-kp.com>",
      to: ["hamaramorcha1153@gmail.com"],
      subject: `New payment — ${name} — ${reg.name}`,
      html: `<p>Software: ${reg.name}</p><p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Plan: ${plan}</p><p>Expiry: ${expiryDate.toDateString()}</p>`,
    });

    if (email) {
      await resend.emails.send({
        from: "Nishant Software <no-reply@web-developer-kp.com>",
        to: [email],
        subject: `${reg.name} — Payment Successful`,
        html: `<p>Thank you ${name}!</p><p>Your payment was successful.</p><p>Software: ${reg.name}</p><p>Plan: ${plan}</p><p>Expiry: ${expiryDate.toDateString()}</p>`,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}