import type { MetadataRoute } from 'next'
import { SITE_ROUTES, SITE_URL } from '@/data/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return SITE_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/contact' || route === '/reservation' ? 0.9 : 0.8,
  }))
}
