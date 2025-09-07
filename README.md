
# The Non‑Traditional Engineer — Portfolio/Blog Starter (Next.js + MDX)

A fast, minimal starter for a personal site with Projects, Blog, and a daily Founder Log. Content lives in MDX files; no external CMS needed.

## Stack
- Next.js 14 (App Router) + React 18
- Tailwind CSS (+ Typography)
- MDX via Contentlayer
- RSS (`/api/rss`) and sitemap (`/api/sitemap`)
- Beehiiv: paste your embed into `components/subscribe.tsx`
- Optional: add your Neon lead capture route later

## Getting Started

```bash
pnpm install # or npm i / yarn
pnpm dev
```

Visit http://localhost:3000

## Deploy
- Push to GitHub → Import into Vercel
- Set `SITE_URL` env var (e.g., `https://yourdomain.com`) for correct RSS/sitemap links

## Content
- Blog posts: `/content/blog/*.mdx`
- Founder daily logs: `/content/log/*.mdx`
- Projects: `/content/projects/*.mdx`

Frontmatter examples are in the sample files.

## Add beehiiv embed
In `components/subscribe.tsx`, paste your embed code from beehiiv (Publication → Grow → Embeds).

## Roadmap ideas
- Add `/api/lead` to capture emails to Neon
- OG image generation per post
- Search on blog index
- Giscus comments
