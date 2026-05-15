import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import NewsArticleView from '../../../../components/NewsArticleView'
import {
  newsArticles,
  getLocalizedArticle,
  hasEnglishTranslation,
} from '../../../news/data'
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildNewsArticleJsonLd,
  buildNewsMetadata,
} from '../../../../lib/seo'

export async function generateStaticParams() {
  return newsArticles
    .filter(hasEnglishTranslation)
    .map((article) => ({
      id: article.id.toString(),
    }))
}

interface Props {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = newsArticles.find((a) => a.id === parseInt(params.id))

  if (!article || !hasEnglishTranslation(article)) {
    return {
      title: 'Article not found - Dream AI Lab',
      description: 'The requested news article could not be found.',
    }
  }

  return buildNewsMetadata(article, {
    locale: 'en',
    alternateLocales: {
      ko: absoluteUrl(`/news/${article.id}`),
      en: absoluteUrl(`/en/news/${article.id}`),
    },
  })
}

export default function EnNewsDetail({ params }: Props) {
  const raw = newsArticles.find((a) => a.id === parseInt(params.id))

  if (!raw || !hasEnglishTranslation(raw)) {
    notFound()
  }

  const article = getLocalizedArticle(raw, 'en')
  const pageUrl = absoluteUrl(`/en/news/${article.id}`)
  const articleJsonLd = buildNewsArticleJsonLd(raw, pageUrl, 'en')
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Home', url: absoluteUrl('/') },
    { name: 'News', url: absoluteUrl('/news') },
    { name: article.title, url: pageUrl },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <NewsArticleView article={article} locale="en" showLangSwitch />
    </>
  )
}
