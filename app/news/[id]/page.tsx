import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import { newsArticles, formatDate, getCategoryName } from '../data'

// 정적 생성을 위한 함수 추가
export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    id: article.id.toString(),
  }))
}

interface Props {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = newsArticles.find(article => article.id === parseInt(params.id))
  
  if (!article) {
    return {
      title: '기사를 찾을 수 없습니다 - 드림에이아이랩',
      description: '요청하신 뉴스 기사를 찾을 수 없습니다.'
    }
  }

  return {
    title: `${article.title} - 드림에이아이랩`,
    description: article.excerpt,
    keywords: article.tags?.join(', ') || '드림에이아이랩, 뉴스, AI기술',
  }
}

export default function NewsDetail({ params }: Props) {
  const article = newsArticles.find(article => article.id === parseInt(params.id))
  
  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-6">{article.image}</div>
            <div className="flex items-center justify-center mb-4">
              <span className="bg-white text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                {getCategoryName(article.category)}
              </span>
              <span className="text-gray-200 text-sm ml-4">{formatDate(article.date)}</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              {article.excerpt}
            </p>
            {article.author && (
              <p className="text-gray-200 mt-4">
                작성자: {article.author}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div 
              className="max-w-none text-gray-900 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">관련 태그</h4>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            관련 기사
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles
              .filter(relatedArticle => {
                if (relatedArticle.id === article.id) return false;
                // 같은 카테고리이거나 태그가 겹치는 경우
                const hasCommonTag = article.tags?.some(tag => 
                  relatedArticle.tags?.includes(tag)
                );
                return relatedArticle.category === article.category || hasCommonTag;
              })
              .slice(0, 3)
              .map((relatedArticle) => (
                <article key={relatedArticle.id} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                    <div className="text-6xl">{relatedArticle.image}</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-white text-gray-700 px-2 py-1 rounded text-xs font-medium border">
                        {getCategoryName(relatedArticle.category)}
                      </span>
                      <span className="text-gray-500 text-xs ml-3">{formatDate(relatedArticle.date)}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{relatedArticle.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{relatedArticle.excerpt}</p>
                    <Link 
                      href={`/news/${relatedArticle.id}`}
                      className="text-primary-600 hover:text-primary-700 text-sm font-semibold"
                    >
                      자세히 보기 →
                    </Link>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>

      {/* Back to News */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link 
            href="/news"
            className="inline-flex items-center bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            ← 뉴스 목록으로 돌아가기
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
} 