import type { Metadata } from 'next'
import type { NewsArticle, NewsEntityRef, NewsFaqItem } from '../app/news/data'
import { getCategoryName } from './news-categories'
import {
  DREAM_AI_LAB_ORGANIZATION_ID,
  DREAM_AI_LAB_URL,
} from './entities'

export const SITE_URL = 'https://dreamailab.com'
export const SITE_NAME = '드림에이아이랩'
export const SITE_NAME_EN = 'Dream AI Lab'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`

/** trailingSlash: true 와 맞춘 절대 URL (확장자 있는 정적 파일은 슬래시 없음) */
export function absoluteUrl(path: string): string {
  if (path === '/' || path === '') return `${SITE_URL}/`
  const normalized = path.startsWith('/') ? path : `/${path}`
  if (/\.[a-z0-9]+$/i.test(normalized)) {
    return `${SITE_URL}${normalized}`
  }
  return normalized.endsWith('/') ? `${SITE_URL}${normalized}` : `${SITE_URL}${normalized}/`
}

export const defaultOpenGraph = {
  siteName: SITE_NAME,
  locale: 'ko_KR' as const,
  type: 'website' as const,
  images: [
    {
      url: DEFAULT_OG_IMAGE,
      width: 1200,
      height: 630,
      alt: SITE_NAME,
    },
  ],
}

export const defaultTwitter = {
  card: 'summary_large_image' as const,
  images: [DEFAULT_OG_IMAGE],
}

function newsOgImageMeta(article: NewsArticle, locale: 'ko' | 'en') {
  if (!article.ogImage) return defaultOpenGraph.images
  const alt =
    locale === 'en' && article.ogImageAltEn
      ? article.ogImageAltEn
      : article.ogImageAlt ?? article.title
  return [
    {
      url: absoluteUrl(article.ogImage),
      width: 1200,
      height: 630,
      alt,
    },
  ]
}

function toJsonLdEntity(entity: NewsEntityRef) {
  return {
    '@type': entity.type,
    ...(entity.id ? { '@id': entity.id } : {}),
    name: entity.name,
    ...(entity.alternateName?.length
      ? { alternateName: entity.alternateName }
      : {}),
    url: entity.url,
    ...(entity.description ? { description: entity.description } : {}),
    ...(entity.sameAs?.length ? { sameAs: entity.sameAs } : {}),
  }
}

export function buildNewsMetadata(
  article: NewsArticle,
  options?: { locale?: 'ko' | 'en'; alternateLocales?: { ko?: string; en?: string } }
): Metadata {
  const locale = options?.locale ?? 'ko'
  const localized =
    locale === 'en' && article.i18n?.en
      ? {
          title: article.i18n.en.title,
          excerpt: article.i18n.en.excerpt,
        }
      : { title: article.title, excerpt: article.excerpt }

  const path =
    locale === 'en' ? `/en/news/${article.id}` : `/news/${article.id}`
  const canonical = absoluteUrl(path)
  const siteLabel = locale === 'en' ? SITE_NAME_EN : SITE_NAME

  const languages: Record<string, string> = {}
  if (options?.alternateLocales?.ko) languages['ko-KR'] = options.alternateLocales.ko
  if (options?.alternateLocales?.en) languages['en-US'] = options.alternateLocales.en

  return {
    title: `${localized.title} - ${siteLabel}`,
    description: localized.excerpt,
    alternates: {
      canonical,
      ...(Object.keys(languages).length > 0 ? { languages } : {}),
    },
    openGraph: {
      title: localized.title,
      description: localized.excerpt,
      url: canonical,
      siteName: siteLabel,
      locale: locale === 'en' ? 'en_US' : 'ko_KR',
      type: 'article',
      publishedTime: article.date,
      authors: article.author ? [article.author] : [siteLabel],
      images: newsOgImageMeta(article, locale),
    },
    twitter: {
      ...defaultTwitter,
      title: localized.title,
      description: localized.excerpt,
      images: newsOgImageMeta(article, locale).map((img) => img.url),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    ...(article.tags?.length ? { keywords: article.tags } : {}),
  }
}

export function buildNewsArticleJsonLd(
  article: NewsArticle,
  pageUrl: string,
  locale: 'ko' | 'en' = 'ko'
) {
  const localized =
    locale === 'en' && article.i18n?.en
      ? {
          title: article.i18n.en.title,
          excerpt: article.i18n.en.excerpt,
        }
      : { title: article.title, excerpt: article.excerpt }

  const authorName = article.author ?? (locale === 'en' ? SITE_NAME_EN : SITE_NAME)
  const ogImages = newsOgImageMeta(article, locale)
  const imageUrl = ogImages[0]?.url ?? DEFAULT_OG_IMAGE

  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: localized.title,
    description: localized.excerpt,
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: locale === 'en' ? 'en-US' : 'ko-KR',
    articleSection: getCategoryName(article.category),
    author: {
      '@type': 'Organization',
      name: authorName,
      ...(article.authorUrl ? { url: article.authorUrl } : {}),
    },
    publisher: {
      '@type': 'Organization',
      '@id': DREAM_AI_LAB_ORGANIZATION_ID,
      name: SITE_NAME,
      url: DREAM_AI_LAB_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${DREAM_AI_LAB_URL}/#website`,
      name: SITE_NAME,
      url: DREAM_AI_LAB_URL,
      publisher: { '@id': DREAM_AI_LAB_ORGANIZATION_ID },
    },
    image: [
      {
        '@type': 'ImageObject',
        url: imageUrl,
        width: 1200,
        height: 630,
      },
    ],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
    ...(article.about?.length
      ? { about: article.about.map(toJsonLdEntity) }
      : {}),
    ...(article.mentions?.length
      ? { mentions: article.mentions.map(toJsonLdEntity) }
      : {}),
    keywords: article.tags?.join(', '),
  }
}

export function buildFaqPageJsonLd(faq: NewsFaqItem[]) {
  if (!faq.length) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function buildBreadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/** 페이지 공통 metadata (canonical·OG·Twitter·robots) */
export function buildPageMetadata(options: {
  title: string
  description: string
  path: string
  ogTitle?: string
  ogDescription?: string
  ogImageAlt?: string
  type?: 'website' | 'article'
}): Metadata {
  const canonical = absoluteUrl(options.path)
  return {
    title: options.title,
    description: options.description,
    alternates: { canonical },
    openGraph: {
      title: options.ogTitle ?? options.title,
      description: options.ogDescription ?? options.description,
      url: canonical,
      siteName: defaultOpenGraph.siteName,
      images: options.ogImageAlt
        ? [{ ...defaultOpenGraph.images[0], alt: options.ogImageAlt }]
        : defaultOpenGraph.images,
      locale: defaultOpenGraph.locale,
      type: options.type ?? 'website',
    },
    twitter: {
      ...defaultTwitter,
      title: options.ogTitle ?? options.title,
      description: options.ogDescription ?? options.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export function buildWebPageJsonLd(options: {
  name: string
  description: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: options.name,
    description: options.description,
    url: options.url,
    inLanguage: 'ko-KR',
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
  }
}
