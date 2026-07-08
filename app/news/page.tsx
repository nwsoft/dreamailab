'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { NewsCategoryIcon } from '../../components/NewsCategoryIcon'
import { useState, useEffect, useMemo } from 'react'
import { newsArticles, newsCategories, formatDate, getCategoryName } from './data'

export default function News() {
  // 필터링 상태
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [articlesPerPage] = useState(6)
  
  // 주요 소식 (featured 중 최신 3건)
  const featuredArticles = useMemo(() => {
    return [...newsArticles]
      .filter((article) => article.featured)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3)
  }, [])

  const featuredIds = useMemo(
    () => new Set(featuredArticles.map((article) => article.id)),
    [featuredArticles]
  )

  // 필터링된 기사들 (주요 소식 3건 제외, 전체 목록 노출)
  const filteredArticles = useMemo(() => {
    let filtered = newsArticles.filter((article) => !featuredIds.has(article.id))
    
    // 카테고리 필터링
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(article => article.category === selectedCategory)
    }
    
    // 최신순 정렬
    filtered.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    
    return filtered
  }, [selectedCategory, featuredIds])

  // 페이지네이션
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage)
  const currentArticles = filteredArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  )

  // 필터 변경 시 첫 페이지로 이동
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory])

  // 페이지 변경
  const goToPage = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }


  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section — 미디어 허브 */}
        <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/15 text-white/95 mb-6">
                Dream AI Lab Media
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                뉴스센터
              </h1>
              <p className="text-xl max-w-3xl mx-auto mb-8">
                회사 소식, 서비스 업데이트, 기술·인사이트, 창업자 이야기, 보도자료를
                목적별로 나누어 확인하세요.
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-sm text-white/90">
                {newsCategories
                  .filter((c) => c.value !== 'all')
                  .map((c) => (
                    <span
                      key={c.value}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10"
                    >
                      <NewsCategoryIcon category={c.value} className="h-4 w-4" />
                      {c.name}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles - 주요 소식 */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                주요 소식
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                최근 회사·서비스·기술 관련 핵심 글
              </p>
            </div>

            {/* 3개 카드 그리드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.slice(0, 3).map((article) => (
                <article key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                    <NewsCategoryIcon category={article.category} />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                        {getCategoryName(article.category)}
                      </span>
                      <span className="text-gray-500 text-sm ml-3">{formatDate(article.date)}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <Link 
                      href={`/news/${article.id}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-sm"
                    >
                      자세히 보기
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Categories and Articles */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* 카테고리 필터 */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-lg border transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-primary-600 text-white border-primary-600'
                      : 'border-gray-300 text-gray-700 hover:bg-primary-50 hover:border-primary-300'
                  }`}
                >
                  전체 ({filteredArticles.length})
                </button>
                {newsCategories.filter(cat => cat.value !== 'all').map((category) => {
                  const categoryCount = newsArticles.filter(
                    (article) =>
                      article.category === category.value && !featuredIds.has(article.id)
                  ).length
                  
                  return (
                    <button
                      key={category.value}
                      onClick={() => setSelectedCategory(category.value)}
                      className={`px-4 py-2 rounded-lg border transition-colors ${
                        selectedCategory === category.value
                          ? 'bg-primary-600 text-white border-primary-600'
                          : 'border-gray-300 text-gray-700 hover:bg-primary-50 hover:border-primary-300'
                      }`}
                    >
                      {category.name} ({categoryCount})
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Articles Grid */}
            {currentArticles.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentArticles.map((article) => (
                    <article key={article.id} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                        <NewsCategoryIcon category={article.category} className="h-14 w-14 text-primary-600" />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <span className="bg-white text-gray-700 px-2 py-1 rounded text-xs font-medium border">
                            {getCategoryName(article.category)}
                          </span>
                          <span className="text-gray-500 text-xs ml-3">{formatDate(article.date)}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {article.excerpt}
                        </p>
                        <Link 
                          href={`/news/${article.id}`}
                          className="text-primary-600 hover:text-primary-700 text-sm font-semibold"
                        >
                          자세히 보기 →
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>

                {/* 페이지네이션 */}
                {totalPages > 1 && (
                  <div className="flex justify-center mt-12">
                    <nav className="flex items-center space-x-2">
                      {/* 이전 페이지 */}
                      <button
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-3 py-2 text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      
                      {/* 페이지 번호들 */}
                      {(() => {
                        const pages = []
                        const maxVisiblePages = 5
                        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
                        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)
                        
                        if (endPage - startPage + 1 < maxVisiblePages) {
                          startPage = Math.max(1, endPage - maxVisiblePages + 1)
                        }
                        
                        for (let i = startPage; i <= endPage; i++) {
                          pages.push(i)
                        }
                        
                        return pages.map((page) => (
                          <button
                            key={page}
                            onClick={() => goToPage(page)}
                            className={`px-3 py-2 rounded-md ${
                              currentPage === page
                                ? 'bg-primary-600 text-white'
                                : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            {page}
                          </button>
                        ))
                      })()}
                      
                      {/* 다음 페이지 */}
                      <button
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-3 py-2 text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </nav>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <div className="flex justify-center mb-4">
                  <NewsCategoryIcon category={selectedCategory === 'all' ? 'press' : selectedCategory} className="h-16 w-16 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">해당 카테고리에 뉴스가 없습니다</h3>
                <p className="text-gray-600 mb-6">
                  다른 카테고리를 시도해보세요.
                </p>
                
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  전체 보기
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              최신 소식을 받아보세요
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
              드림에이아이랩의 최신 뉴스와 업데이트를 이메일로 받아보세요.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="이메일 주소를 입력하세요"
                  className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-primary-600 px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-100 transition-colors">
                  구독
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              언론 문의
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              보도자료나 인터뷰 요청이 있으시면 언제든 연락주세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                문의하기
              </Link>
              <a 
                href="mailto:contact@dreamailab.com"
                className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                contact@dreamailab.com
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
} 