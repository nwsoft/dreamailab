import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import NewsArticleView from '../../../components/NewsArticleView'
import {
  newsArticles,
  getLocalizedArticle,
  hasEnglishTranslation,
} from '../data'
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildFaqPageJsonLd,
  buildNewsArticleJsonLd,
  buildNewsMetadata,
} from '../../../lib/seo'

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    id: article.id.toString(),
  }))
}

interface Props {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const article = newsArticles.find((a) => a.id === parseInt(id))

  if (!article) {
    return {
      title: '기사를 찾을 수 없습니다 - 드림에이아이랩',
      description: '요청하신 뉴스 기사를 찾을 수 없습니다.',
    }
  }

  const alternates = hasEnglishTranslation(article)
    ? {
        ko: absoluteUrl(`/news/${article.id}`),
        en: absoluteUrl(`/en/news/${article.id}`),
      }
    : undefined

  return buildNewsMetadata(article, { locale: 'ko', alternateLocales: alternates })
}

export default async function NewsDetail({ params }: Props) {
  const { id } = await params
  const raw = newsArticles.find((a) => a.id === parseInt(id))

  if (!raw) {
    notFound()
  }

  const article = getLocalizedArticle(raw, 'ko')
  const pageUrl = absoluteUrl(`/news/${article.id}`)
  const articleJsonLd = buildNewsArticleJsonLd(raw, pageUrl, 'ko')
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: '홈', url: absoluteUrl('/') },
    { name: '뉴스', url: absoluteUrl('/news') },
    { name: article.title, url: pageUrl },
  ])
  const faqJsonLd = article.faq?.length ? buildFaqPageJsonLd(article.faq) : null

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
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <NewsArticleView
        article={article}
        locale="ko"
        showLangSwitch={hasEnglishTranslation(raw)}
      />
    </>
  )
}
