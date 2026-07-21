import { MetadataRoute } from 'next'
import { newsArticles, hasEnglishTranslation } from './news/data'

const baseUrl = 'https://dreamailab.com'

function url(path: string): string {
  if (path === '/' || path === '') return `${baseUrl}/`
  const normalized = path.startsWith('/') ? path : `/${path}`
  return normalized.endsWith('/') ? `${baseUrl}${normalized}` : `${baseUrl}${normalized}/`
}

export default function sitemap(): MetadataRoute.Sitemap {
  const newsUrls = newsArticles.flatMap((article) => {
    const entries: MetadataRoute.Sitemap = [
      {
        url: url(`/news/${article.id}`),
        lastModified: new Date(article.date),
        changeFrequency: 'weekly',
        priority: article.featured ? 0.8 : 0.6,
      },
    ]
    if (hasEnglishTranslation(article)) {
      entries.push({
        url: url(`/en/news/${article.id}`),
        lastModified: new Date(article.date),
        changeFrequency: 'weekly',
        priority: article.featured ? 0.75 : 0.55,
      })
    }
    return entries
  })

  return [
    {
      url: url('/'),
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: url('/services'),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: url('/services/jarame'),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: url('/services/senior'),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: url('/services/healthcare'),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: url('/services/marriage'),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: url('/services/veggie'),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: url('/about'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: url('/vision'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: url('/business'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: url('/public'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: url('/ir'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: url('/technology'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: url('/research'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: url('/research/pet-ai'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: url('/technology/platform'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: url('/technology/educarelog'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: url('/services/finance'),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: url('/services/educarelog'),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: url('/news'),
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: url('/en'),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: url('/en/about'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: url('/en/services'),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: url('/en/technology'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: url('/contact'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: url('/blog/veggiecare'),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: url('/resources/veggiecare'),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: url('/blog/noahai-technical-whitepaper'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...newsUrls,
  ]
}
