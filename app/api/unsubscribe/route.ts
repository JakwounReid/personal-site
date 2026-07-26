import { NextRequest } from "next/server";
import {
  EMAIL_RE,
  supabaseConfigured,
  unsubscribeEmail,
  verifyUnsubscribeToken,
} from "@/lib/subscribers";

export const runtime = "nodejs";

// Minimal branded confirmation page so unsubscribe links land somewhere friendly.
function page(title: string, message: string, status: number): Response {
  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex" />
    <title>${title} — Jakwoun Reid</title>
    <style>
      body { margin:0; min-height:100vh; display:flex; align-items:center; justify-content:center;
        background:#0a0a0a; color:#e5e5e5; font-family:ui-sans-serif,system-ui,-apple-system,sans-serif; }
      .card { max-width:28rem; padding:2.5rem; border:1px solid #262626; background:#0f0f0f; text-align:center; }
      h1 { font-size:1.5rem; font-weight:900; letter-spacing:-0.02em; margin:0 0 0.75rem; color:#fff; }
      p { font-size:0.95rem; color:#a3a3a3; line-height:1.6; margin:0 0 1.5rem; }
      a { display:inline-block; border:1px solid #60a5fa; background:#60a5fa; color:#000;
        padding:0.6rem 1.5rem; font-size:0.75rem; font-weight:700; text-transform:uppercase;
        letter-spacing:0.15em; text-decoration:none; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>${title}</h1>
      <p>${message}</p>
      <a href="https://jakwoun.me">Back to jakwoun.me</a>
    </div>
  </body>
</html>`;
  return new Response(html, {
    status,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const email = (url.searchParams.get("email") ?? "").trim().toLowerCase();
  const token = url.searchParams.get("token") ?? "";

  if (!email || !EMAIL_RE.test(email)) {
    return page("Invalid link", "That unsubscribe link doesn't look right.", 400);
  }

  if (!token || !verifyUnsubscribeToken(email, token)) {
    return page(
      "Invalid link",
      "This unsubscribe link is expired or invalid. Reply to any email and I'll remove you manually.",
      400
    );
  }

  if (supabaseConfigured()) {
    try {
      await unsubscribeEmail(email);
    } catch (err) {
      console.error("[Unsubscribe] failed:", err);
      return page(
        "Something went wrong",
        "I couldn't process that right now. Reply to any email and I'll remove you manually.",
        500
      );
    }
  } else {
    console.log(`[Unsubscribe] (no Supabase) ${email}`);
  }

  return page(
    "You're unsubscribed",
    "You won't receive any more emails from me. No hard feelings — the door's open if you change your mind.",
    200
  );
}
