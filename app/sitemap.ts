import type { MetadataRoute } from 'next'

const BASE = 'https://jakwoun.me'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/blog',
    '/projects',
    '/hire',
    '/build',
    '/log',
    '/offer',
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }))

  return staticRoutes
}
