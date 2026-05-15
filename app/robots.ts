import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://dreamailab.com/sitemap.xml',
    host: 'https://dreamailab.com',
  }
}
