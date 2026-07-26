import { NextRequest, NextResponse } from "next/server";
import { EMAIL_RE, supabaseConfigured, upsertSubscriber } from "@/lib/subscribers";

export const runtime = "nodejs";

// Simple in-memory rate limit (per warm instance). Good enough to blunt abuse.
const submissions = new Map<string, number>();

const ALLOWED_SOURCES = new Set([
  "sitecheck",
  "footer",
  "teardown",
  "home",
  "unknown",
]);

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  const now = Date.now();
  const last = submissions.get(ip) ?? 0;
  if (now - last < 10_000) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }
  submissions.set(ip, now);

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { email, source } = (body ?? {}) as { email?: string; source?: string };

  const normalized = typeof email === "string" ? email.trim().toLowerCase() : "";
  if (!normalized || normalized.length > 254 || !EMAIL_RE.test(normalized)) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  const cleanSource =
    typeof source === "string" && ALLOWED_SOURCES.has(source) ? source : "unknown";

  if (!supabaseConfigured()) {
    // Don't hard-fail in environments without Supabase wired up yet.
    console.log(`[Subscribe] (no Supabase) ${normalized} via ${cleanSource}`);
    return NextResponse.json({ ok: true });
  }

  try {
    await upsertSubscriber(normalized, cleanSource);
  } catch (err) {
    console.error("[Subscribe] upsert failed:", err);
    return NextResponse.json({ error: "Could not subscribe" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
