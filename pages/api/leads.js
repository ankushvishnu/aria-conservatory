// pages/api/lead.js
/**
 * Updated Airtable handler using Personal Access Token (PAT).
 *
 * Required env vars:
 * - AIRTABLE_TOKEN       (Personal Access Token, starts with pat...)
 * - AIRTABLE_BASE_ID     (appXXXX...)
 * - AIRTABLE_TABLE_NAME  (e.g. Leads)
 *
 * Optional (for email notifications):
 * - SENDGRID_API_KEY
 * - SENDGRID_FROM
 * - ADMIN_EMAIL
 *
 * Notes on rate limiting: this uses an in-memory Map and is light-weight.
 * Serverless environments may not preserve memory across cold starts,
 * so treat this as a soft protection, not a foolproof rate limiter.
 */

const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || 'Leads';
// const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
// const SENDGRID_FROM = process.env.SENDGRID_FROM;
// const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

// Simple in-memory rate limiter map: { ip -> [timestamps...] }
const RATE_MAP = new Map();
const WINDOW_MS = 60 * 60 * 1000; // 1 hour window
const MAX_REQUESTS_PER_WINDOW = 10; // max submissions per IP per window

async function writeToAirtable(fields) {
  if (!AIRTABLE_TOKEN || !AIRTABLE_BASE_ID) {
    throw new Error('Airtable token/base not configured');
  }
  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`;
  const body = { records: [{ fields }] }; // use batch create for cleaner response
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${AIRTABLE_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const json = await res.json();
  if (!res.ok) {
    throw new Error(JSON.stringify(json));
  }
  // return first created record
  return json.records && json.records[0] ? json.records[0] : json;
}

async function sendEmailNotification({ name, phone, interest, source, notes }) {
  if (!SENDGRID_API_KEY || !SENDGRID_FROM || !ADMIN_EMAIL) return;
  const body = {
    personalizations: [{ to: [{ email: ADMIN_EMAIL }] }],
    from: { email: SENDGRID_FROM },
    subject: `New Lead: ${name} — ${interest || 'General'}`,
    content: [
      {
        type: 'text/plain',
        value: `Name: ${name}\nPhone: ${phone}\nInterest: ${interest}\nSource: ${source}\nNotes: ${notes || ''}`,
      },
    ],
  };

  await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${SENDGRID_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

// Helper: get client IP (best-effort; behind proxies)
function getClientIp(req) {
  return (
    req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    req.socket?.remoteAddress ||
    req.connection?.remoteAddress ||
    'unknown'
  );
}

// Rate-limiter: returns true if allowed, false if blocked
function rateCheck(ip) {
  const now = Date.now();
  const entry = RATE_MAP.get(ip) || [];
  // remove old timestamps
  const recent = entry.filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  RATE_MAP.set(ip, recent);
  return recent.length <= MAX_REQUESTS_PER_WINDOW;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  try {
    // Basic body parsing
    const { name, phone, interest, notes, source, bot_field } = req.body || {};

    // Honeypot check
    if (bot_field) return res.status(400).json({ error: 'spam_detected' });

    // Rate limiting
    const clientIp = getClientIp(req);
    const allowed = rateCheck(clientIp);
    if (!allowed) {
      return res.status(429).json({ error: 'rate_limited' });
    }

    // Basic validation
    if (!name || !phone) return res.status(400).json({ error: 'missing_name_or_phone' });

    const fields = {
      Name: name,
      Phone: phone,
      Interest: interest || '',
      Notes: notes || '',
      Source: source || 'Website',
      Timestamp: new Date().toISOString(),
    };

    const airtableRes = await writeToAirtable(fields);

    // optional email notify (fire-and-forget)
    sendEmailNotification({ name, phone, interest, source, notes }).catch((err) =>
      console.error('SendGrid notify error', err)
    );

    // Return success with Airtable record id if available
    const recordId = airtableRes.id || (airtableRes && airtableRes.records && airtableRes.records[0] && airtableRes.records[0].id);
    return res.status(200).json({ ok: true, id: recordId });
  } catch (err) {
    console.error('Lead handler error:', err);
    return res.status(500).json({ error: 'server_error', details: String(err) });
  }
}
