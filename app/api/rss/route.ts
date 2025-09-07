
  import { allPosts, allLogs } from '@/lib/content'

  export const dynamic = 'force-static'

  export async function GET() {
    const site = process.env.SITE_URL || 'https://example.com'
    const items = [...allPosts, ...allLogs]
      .filter(p => p.status !== 'draft')
      .sort((a,b)=> new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
      .slice(0, 50)

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
  <title>Jakwoun Reid — Feed</title>
  <link>${site}</link>
  <description>Blog + Founder Daily</description>
  ${items.map(p => `
    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${site}/blog/${p.slug}</link>
      <pubDate>${new Date(p.publishDate).toUTCString()}</pubDate>
      <guid isPermaLink="true">${site}/blog/${p.slug}</guid>
      <description><![CDATA[${p.summary || ''}]]></description>
    </item>
  `).join('\n')}
</channel></rss>`

    return new Response(rss, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } })
  }
