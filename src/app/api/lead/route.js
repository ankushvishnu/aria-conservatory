// app/api/lead/route.js
import { NextResponse } from 'next/server';

const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || 'Leads';

async function writeToAirtable(fields) {
  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`;
  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${AIRTABLE_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ records: [{ fields }] }),
  });
  const json = await resp.json();
  if (!resp.ok) throw new Error(JSON.stringify(json));
  return json;
}

export async function OPTIONS() {
  return NextResponse.json({}, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { name, phone, interest, notes, source, bot_field } = body || {};

    // honeypot
    if (bot_field) return NextResponse.json({ error: 'spam' }, { status: 400 });

    if (!name || !phone) return NextResponse.json({ error: 'missing_name_or_phone' }, { status: 400 });

    const fields = {
      Name: name,
      Phone: phone,
      Interest: interest || '',
      Notes: notes || '',
      Source: source || 'Website',
      Timestamp: new Date().toISOString(),
    };

    const airtableRes = await writeToAirtable(fields);
    const recId = airtableRes?.records?.[0]?.id || null;

    return NextResponse.json({ ok: true, id: recId }, {
      headers: { 'Access-Control-Allow-Origin': '*' },
    });
  } catch (err) {
    console.error('app/api/lead error:', err);
    return NextResponse.json({ error: 'server_error', details: String(err) }, { status: 500 });
  }
}
