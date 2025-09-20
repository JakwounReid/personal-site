
  import { allPosts, allProjects } from '@/lib/content'

  export const dynamic = 'force-static'

  export async function GET() {
    const site = process.env.SITE_URL || 'https://example.com'
    const pages = [
      '', 'blog', 'projects'
    ].map(p => `${site}/${p}`.replace(/\/$/, ''))

    const posts = allPosts.filter(p => p.status !== 'draft').map(p => `${site}/blog/${p.slug}`)
    const projs = allProjects.map(p => `${site}/projects/${p.slug}`)

    const urls = [...pages, ...posts, ...projs]
      .map(u => `<url><loc>${u}</loc></url>`)
      .join('\n')

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

    return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
  }
