import { createClient } from "@libsql/client";

const db = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

export async function GET() {
  await db.execute(`CREATE TABLE IF NOT EXISTS views (id INTEGER PRIMARY KEY, count INTEGER DEFAULT 0)`);
  await db.execute(`INSERT OR IGNORE INTO views (id, count) VALUES (1, 0)`);
  await db.execute(`UPDATE views SET count = count + 1 WHERE id = 1`);
  const result = await db.execute(`SELECT count FROM views WHERE id = 1`);
  return Response.json({ views: result.rows[0].count });
}