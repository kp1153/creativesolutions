const { createClient } = require("@libsql/client");

const db = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

async function setup() {
  await db.execute(`CREATE TABLE IF NOT EXISTS software_registry (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    software_key TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    turso_url TEXT NOT NULL,
    turso_token TEXT NOT NULL,
    redirect_url TEXT NOT NULL
  )`);

  await db.execute(`CREATE TABLE IF NOT EXISTS software_plans (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    software_key TEXT NOT NULL,
    plan_key TEXT NOT NULL,
    label TEXT NOT NULL,
    amount INTEGER NOT NULL
  )`);

  await db.execute({
    sql: `INSERT OR IGNORE INTO software_registry (software_key, name, turso_url, turso_token, redirect_url) VALUES (?, ?, ?, ?, ?)`,
    args: ["hardware", "Nishant Hardware Software", "libsql://amit-hardware-kamtatiwari.aws-ap-south-1.turso.io", "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzE2NTYwODAsImlkIjoiMWVjMDUxOTgtNjBiYy00NjFlLWI1ZTktM2JjMzkyNGQxYWFjIiwicmlkIjoiOGFmYWFmY2YtYTQ0OS00Y2MyLTk0YmMtZjJmODRiOWEwOGQzIn0.Tw7u6Dtc7lrnw3gEDB7QKKaq-2CHszfTa5N_TGzOV4J_DeEvGeTpgLWSk5iYqyIk7U8VDxEBeve13_TQ49zDA", "https://nishant-ten.vercel.app/login?success=1"],
  });

  await db.execute({
    sql: `INSERT OR IGNORE INTO software_registry (software_key, name, turso_url, turso_token, redirect_url) VALUES (?, ?, ?, ?, ?)`,
    args: ["school", "EduSaaS School Software", "libsql://school-saas-kamtatiwari.aws-ap-south-1.turso.io", "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzM4NDcyMjksImlkIjoiYWNhY2FiMDEtNmEwOS00ZTQ5LTlhZGYtOTE1YTA5NTU4OTRkIiwicmlkIjoiNDIxYmJkMjgtYWQxYy00NGQ4LWFhOTAtZTlmZWZlOTlmNzIzIn0.x7OpLPrXu5RElPchKz-beoC_9BSdDwEsSm6l0C_z7ljmCBKLkV0KBNq1jcFyjlxqpndVeFZo7H9QI0FGeB_hDg", "https://school-saas-azure.vercel.app/login?success=1"],
  });

  await db.execute({
    sql: `INSERT OR IGNORE INTO software_plans (software_key, plan_key, label, amount) VALUES (?, ?, ?, ?)`,
    args: ["hardware", "new", "New — First Time (1 year included)", 5500],
  });

  await db.execute({
    sql: `INSERT OR IGNORE INTO software_plans (software_key, plan_key, label, amount) VALUES (?, ?, ?, ?)`,
    args: ["hardware", "renew", "Renewal — Annual", 2500],
  });

  await db.execute({
    sql: `INSERT OR IGNORE INTO software_plans (software_key, plan_key, label, amount) VALUES (?, ?, ?, ?)`,
    args: ["school", "new", "New — First Time (1 year included)", 5500],
  });

  await db.execute({
    sql: `INSERT OR IGNORE INTO software_plans (software_key, plan_key, label, amount) VALUES (?, ?, ?, ?)`,
    args: ["school", "renew", "Renewal — Annual", 2500],
  });

  console.log("Done");
  process.exit(0);
}

setup().catch((e) => { console.error(e); process.exit(1); });