import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email } = body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  // If a webhook URL is configured (e.g. Zapier, Make.com), forward the submission
  const webhookUrl = process.env.WAITLIST_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          timestamp: new Date().toISOString(),
          source: "travel-architect",
        }),
      });
    } catch (err) {
      console.error("[Waitlist] Webhook delivery failed:", err);
    }
  } else {
    console.log(`[Waitlist] New signup: ${email}`);
  }

  return NextResponse.json({ ok: true });
}
