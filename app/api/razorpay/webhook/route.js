import crypto from 'crypto'
import { NextResponse } from 'next/server'
import { createClient } from '@libsql/client'

const registry = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
})

export async function POST(req) {
  try {
    const body = await req.text()
    const signature = req.headers.get('x-razorpay-signature')

    const expected = crypto
      .createHmac('sha256', process.env.RAZORPAY_WEBHOOK_SECRET)
      .update(body)
      .digest('hex')

    if (signature !== expected) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
    }

    const event = JSON.parse(body)

    if (event.event !== 'payment.captured') {
      return NextResponse.json({ ok: true })
    }

    const notes = event.payload.payment.entity.notes
    const email = notes?.email
    const software = notes?.software

    if (!email || !software) {
      return NextResponse.json({ ok: true })
    }

    const reg = await registry.execute({
      sql: 'SELECT activate_url FROM software_registry WHERE software_key = ?',
      args: [software],
    })

    if (!reg.rows.length) return NextResponse.json({ ok: true })

    await fetch(reg.rows[0].activate_url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        secret: process.env.HUB_SECRET,
      }),
    })

    return NextResponse.json({ ok: true })

  } catch (err) {
    console.error('[webhook]', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}