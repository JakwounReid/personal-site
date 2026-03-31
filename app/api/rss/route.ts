import { allPosts } from "@/lib/content";

export const dynamic = "force-static";

export async function GET() {
  const site = process.env.SITE_URL || "https://jakwoun.me";
  const items = [...allPosts]
    .filter((p) => p.status !== "draft")
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    )
    .slice(0, 50);

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>The Blueprint — Jakwoun Reid</title>
    <link>${site}</link>
    <description>Strategy for builders — software, side projects, career, and life.</description>
    <language>en-us</language>
    <atom:link href="${site}/api/rss" rel="self" type="application/rss+xml" />
    ${items
      .map(
        (p) => `
    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${site}/blog/${p.slug}</link>
      <pubDate>${new Date(p.publishDate).toUTCString()}</pubDate>
      <guid isPermaLink="true">${site}/blog/${p.slug}</guid>
      <description><![CDATA[${p.summary}]]></description>
      <content:encoded><![CDATA[${p.body.raw}]]></content:encoded>
    </item>`
      )
      .join("\n")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
