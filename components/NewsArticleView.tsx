import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'
import {
  newsArticles,
  formatDate,
  getCategoryName,
  type NewsArticle,
} from '../app/news/data'

type Locale = 'ko' | 'en'

const labels = {
  ko: {
    author: '작성자',
    tags: '관련 태그',
    related: '관련 기사',
    readMore: '자세히 보기 →',
    back: '← 뉴스 목록으로 돌아가기',
    newsList: '/news',
    newsPath: (id: number) => `/news/${id}`,
    langSwitch: 'English',
    langSwitchHref: (id: number) => `/en/news/${id}`,
  },
  en: {
    author: 'Author',
    tags: 'Related tags',
    related: 'Related articles',
    readMore: 'Read more →',
    back: '← Back to news',
    newsList: '/news',
    newsPath: (id: number) => `/en/news/${id}`,
    langSwitch: '한국어',
    langSwitchHref: (id: number) => `/news/${id}`,
  },
} as const

interface NewsArticleViewProps {
  article: NewsArticle
  locale?: Locale
  showLangSwitch?: boolean
}

export default function NewsArticleView({
  article,
  locale = 'ko',
  showLangSwitch = false,
}: NewsArticleViewProps) {
  const t = labels[locale]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {showLangSwitch && (
              <div className="mb-4">
                <Link
                  href={t.langSwitchHref(article.id)}
                  className="text-sm text-white/90 underline hover:text-white"
                  hrefLang={locale === 'ko' ? 'en' : 'ko'}
                >
                  {t.langSwitch}
                </Link>
              </div>
            )}
            <div className="text-6xl mb-6" aria-hidden="true">
              {article.image}
            </div>
            <div className="flex items-center justify-center mb-4 flex-wrap gap-2">
              <span className="bg-white text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                {getCategoryName(article.category)}
              </span>
              <time dateTime={article.date} className="text-gray-200 text-sm">
                {formatDate(article.date)}
              </time>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              {article.excerpt}
            </p>
            {article.author && (
              <p className="text-gray-200 mt-4">
                {t.author}: {article.author}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div
              className="max-w-none text-gray-900 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {article.tags && article.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  {t.tags}
                </h2>
                <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                  {article.tags.map((tag) => (
                    <li key={tag}>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        #{tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {t.related}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles
              .filter((relatedArticle) => {
                if (relatedArticle.id === article.id) return false
                const hasCommonTag = article.tags?.some((tag) =>
                  relatedArticle.tags?.includes(tag)
                )
                return (
                  relatedArticle.category === article.category || hasCommonTag
                )
              })
              .slice(0, 3)
              .map((relatedArticle) => (
                <article
                  key={relatedArticle.id}
                  className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                    <span className="text-6xl" aria-hidden="true">
                      {relatedArticle.image}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-white text-gray-700 px-2 py-1 rounded text-xs font-medium border">
                        {getCategoryName(relatedArticle.category)}
                      </span>
                      <time
                        dateTime={relatedArticle.date}
                        className="text-gray-500 text-xs ml-3"
                      >
                        {formatDate(relatedArticle.date)}
                      </time>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {relatedArticle.excerpt}
                    </p>
                    <Link
                      href={t.newsPath(relatedArticle.id)}
                      className="text-primary-600 hover:text-primary-700 text-sm font-semibold"
                    >
                      {t.readMore}
                    </Link>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href={t.newsList}
            className="inline-flex items-center bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            {t.back}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
