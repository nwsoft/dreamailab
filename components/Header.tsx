'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: '홈', href: '/' },
    { name: '회사소개', href: '/about' },
    { name: '비전', href: '/vision' },
    { name: '기술', href: '/technology' },
    { name: '비즈니스', href: '/business' },
    { name: '공공', href: '/public' },
    { name: 'IR', href: '/ir' },
    { name: '뉴스', href: '/news' },
  ]

  const serviceNavigation = [
    { name: '서비스 전체', href: '/services', meta: '포트폴리오 허브' },
    { name: '자람이', href: '/services/jarame', meta: '발달장애' },
    { name: '시니어앤라이프', href: '/services/senior', meta: '시니어·돌봄' },
    { name: '글로벌커플케어', href: '/services/marriage', meta: '국제결혼·다문화' },
    { name: '토탈케어로그', href: '/services/healthcare', meta: '의료·헬스케어' },
    { name: '에듀케어로그', href: '/services/educarelog', meta: '교육' },
    { name: '베지케어', href: '/services/veggie', meta: '웰니스·라이프스타일' },
    { name: 'DAL Vibe Architect', href: '/services/vibe-architect', meta: '신규 바이브코딩 프로젝트' },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <div className="flex items-center">
                <img src="/logo.png" alt="드림에이아이랩 로고" className="w-8 h-8" />
                <span className="ml-2 text-xl font-bold text-gray-900">드림에이아이랩</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-2">
            {navigation.slice(0, 5).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="group relative">
              <Link
                href="/services"
                className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-primary-600 focus:text-primary-600"
                aria-haspopup="true"
              >
                서비스
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z" clipRule="evenodd" />
                </svg>
              </Link>
              <div className="invisible absolute left-1/2 top-full z-50 w-[560px] -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="grid grid-cols-2 gap-1 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl">
                  {serviceNavigation.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="rounded-xl px-4 py-3 transition hover:bg-blue-50 focus:bg-blue-50"
                    >
                      <span className="block text-sm font-bold text-slate-900">{service.name}</span>
                      <span className="mt-0.5 block text-xs text-slate-500">{service.meta}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {navigation.slice(5).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-primary-600"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-700 transition-colors"
            >
              문의하기
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              <span className="sr-only">메뉴 열기</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="xl:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.slice(0, 5).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-y border-slate-100 py-2">
                <Link
                  href="/services"
                  className="block px-3 py-2 text-base font-bold text-slate-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  서비스
                </Link>
                <div className="grid grid-cols-1 gap-1 pl-3 sm:grid-cols-2">
                  {serviceNavigation.slice(1).map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-primary-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="font-semibold">{service.name}</span>
                      <span className="ml-2 text-xs text-slate-400">{service.meta}</span>
                    </Link>
                  ))}
                </div>
              </div>
              {navigation.slice(5).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
