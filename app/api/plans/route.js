import { NextResponse } from 'next/server';
import { createClient } from '@libsql/client';

const registry = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const software = searchParams.get('software');

    if (!software) {
      return NextResponse.json({ success: false, message: 'software param required' }, { status: 400 });
    }

    const regResult = await registry.execute({
      sql: 'SELECT * FROM software_registry WHERE software_key = ?',
      args: [software],
    });

    if (regResult.rows.length === 0) {
      return NextResponse.json({ success: false, message: 'Software not found' }, { status: 404 });
    }

    const plansResult = await registry.execute({
      sql: 'SELECT * FROM software_plans WHERE software_key = ? ORDER BY amount ASC',
      args: [software],
    });

    return NextResponse.json({
      success: true,
      softwareName: regResult.rows[0].name,
      plans: plansResult.rows,
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}