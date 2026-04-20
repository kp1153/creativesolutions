import { db } from "../../../db";
import { users } from "../../../db/schema";
import { eq, and, ne } from "drizzle-orm";
import { cookies } from "next/headers";
import { getSession } from "../../../lib/session";

// ─── GET — doctor + counter staff list ────────────────
export async function GET() {
  const cookieStore = await cookies();
  const session = await getSession(cookieStore.get("session")?.value);
  if (!session || session.role !== "owner") {
    return Response.json([], { status: 401 });
  }

  const rows = await db
    .select({
      id: users.id,
      name: users.name,
      email: users.email,
      role: users.role,
      pin: users.pin,
      status: users.status,
    })
    .from(users)
    .where(ne(users.role, "owner")); // owner को छोड़कर सब

  return Response.json(rows);
}

// ─── PUT — PIN set/update ──────────────────────────────
export async function PUT(request) {
  const cookieStore = await cookies();
  const session = await getSession(cookieStore.get("session")?.value);
  if (!session || session.role !== "owner") {
    return Response.json({}, { status: 401 });
  }

  const body = await request.json();
  const { userId, pin } = body;

  if (!userId) return Response.json({ error: "userId required" }, { status: 400 });
  if (!/^\d{4}$/.test(pin)) return Response.json({ error: "PIN must be 4 digits" }, { status: 400 });

  await db
    .update(users)
    .set({ pin })
    .where(eq(users.id, userId));

  return Response.json({ ok: true });
}