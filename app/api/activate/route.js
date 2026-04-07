import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { eq } from "drizzle-orm";

export async function POST(request) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.ACTIVATION_SECRET}`) {
    return Response.json({ error: "unauthorized" }, { status: 401 });
  }

  const { email, months } = await request.json();
  if (!email) return Response.json({ error: "email required" }, { status: 400 });

  const existing = await db.select().from(users).where(eq(users.email, email));

  const expiry = new Date();
  expiry.setMonth(expiry.getMonth() + (months || 12));

  if (existing.length === 0) {
    await db.insert(users).values({
      email,
      status: "active",
      expiryDate: expiry,
      reminderSent: "no",
    });
  } else {
    await db.update(users).set({
      status: "active",
      expiryDate: expiry,
      reminderSent: "no",
    }).where(eq(users.email, email));
  }

  return Response.json({ ok: true, email, expiryDate: expiry });
}