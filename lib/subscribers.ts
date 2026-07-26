import crypto from "crypto";

// Thin Supabase helpers built on the PostgREST endpoint so we don't pull in a new
// dependency. Configure with SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY (see .env.example).
const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Secret used to sign unsubscribe links. Falls back to the service role key so the
// feature still works if UNSUBSCRIBE_SECRET isn't set separately.
const UNSUBSCRIBE_SECRET =
  process.env.UNSUBSCRIBE_SECRET ?? SERVICE_ROLE_KEY ?? "";

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function supabaseConfigured(): boolean {
  return Boolean(SUPABASE_URL && SERVICE_ROLE_KEY);
}

// Low-level PostgREST call against the `subscribers` table.
async function subscribersRequest(
  query: string,
  init: RequestInit & { prefer?: string }
): Promise<Response> {
  if (!supabaseConfigured()) {
    throw new Error("Supabase is not configured");
  }
  const { prefer, headers, ...rest } = init;
  return fetch(`${SUPABASE_URL}/rest/v1/subscribers${query}`, {
    ...rest,
    headers: {
      apikey: SERVICE_ROLE_KEY as string,
      Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
      "Content-Type": "application/json",
      ...(prefer ? { Prefer: prefer } : {}),
      ...headers,
    },
  });
}

// Insert or re-activate a subscriber. On conflict (email is unique) we merge, which
// re-activates a previously unsubscribed email without resetting their sequence.
export async function upsertSubscriber(email: string, source: string) {
  const res = await subscribersRequest("?on_conflict=email", {
    method: "POST",
    prefer: "resolution=merge-duplicates,return=representation",
    body: JSON.stringify({
      email,
      source,
      subscribed: true,
      unsubscribed_at: null,
    }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Supabase upsert failed (${res.status}): ${text}`);
  }
  return res.json();
}

// Flip a subscriber to unsubscribed.
export async function unsubscribeEmail(email: string) {
  const res = await subscribersRequest(
    `?email=eq.${encodeURIComponent(email)}`,
    {
      method: "PATCH",
      prefer: "return=minimal",
      body: JSON.stringify({
        subscribed: false,
        unsubscribed_at: new Date().toISOString(),
      }),
    }
  );
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Supabase unsubscribe failed (${res.status}): ${text}`);
  }
}

// Deterministic HMAC token so unsubscribe links can't be forged. Emails/senders
// generate the same token from the same secret + email.
export function signUnsubscribeToken(email: string): string {
  return crypto
    .createHmac("sha256", UNSUBSCRIBE_SECRET)
    .update(email.toLowerCase())
    .digest("hex");
}

export function verifyUnsubscribeToken(email: string, token: string): boolean {
  const expected = signUnsubscribeToken(email);
  const a = Buffer.from(expected);
  const b = Buffer.from(token);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}
