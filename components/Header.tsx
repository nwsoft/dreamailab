'use client'

import Link from 'next/link'
import { useState } from 'react'

const companyNavigation = [
  { name: '회사소개', href: '/about', meta: '우리는 누구인가' },
  { name: '철학·비전', href: '/vision', meta: '왜, 어디로 가는가' },
  { name: '기술', href: '/technology', meta: '어떻게 만드는가' },
  { name: '비즈니스', href: '/business', meta: '어떻게 가치가 되는가' },
  { name: 'Research', href: '/research', meta: '장기 기술 연구' },
]

const serviceNavigation = [
  { name: '서비스 전체', href: '/services', meta: '포트폴리오 허브' },
  { name: '자람이', href: '/services/jarame', meta: '발달장애' },
  { name: '시니어앤라이프', href: '/services/senior', meta: '시니어·돌봄' },
  { name: '글로벌커플케어', href: '/services/marriage', meta: '국제결혼·다문화' },
  { name: '토탈케어로그', href: '/services/healthcare', meta: '의료·헬스케어' },
  { name: '에듀케어로그', href: '/services/educarelog', meta: '교육' },
  { name: '베지케어', href: '/services/veggie', meta: '웰니스·라이프스타일' },
  { name: 'DAL Vibe Architect', href: '/services/vibe-architect', meta: '바이브코딩 신규 프로젝트' },
]

function DesktopDropdown({ label, href, items, wide = false }: { label: string; href: string; items: typeof companyNavigation; wide?: boolean }) {
  return (
    <div className="group relative">
      <Link href={href} className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-primary-600 focus:text-primary-600" aria-haspopup="true">
        {label}
        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z" clipRule="evenodd" /></svg>
      </Link>
      <div className={`invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 ${wide ? 'w-[560px]' : 'w-[330px]'}`}>
        <div className={`grid gap-1 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl ${wide ? 'grid-cols-2' : 'grid-cols-1'}`}>
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-xl px-4 py-3 transition hover:bg-blue-50 focus:bg-blue-50">
              <span className="block text-sm font-bold text-slate-900">{item.name}</span>
              <span className="mt-0.5 block text-xs text-slate-500">{item.meta}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="주요 메뉴">
        <div className="flex h-16 justify-between">
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="드림에이아이랩 로고" className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold text-gray-900">드림에이아이랩</span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            <Link href="/" className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-primary-600">홈</Link>
            <DesktopDropdown label="회사" href="/about" items={companyNavigation} />
            <DesktopDropdown label="서비스" href="/services" items={serviceNavigation} wide />
            <Link href="/public" className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-primary-600">공공</Link>
            <Link href="/ir" className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-primary-600">IR</Link>
            <Link href="/news" className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-primary-600">뉴스</Link>
            <Link href="/contact" className="ml-1 rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-700">문의하기</Link>
          </div>

          <div className="flex items-center lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500" aria-expanded={isMenuOpen}>
              <span className="sr-only">메뉴 열기</span>
              {!isMenuOpen ? <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg> : <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-t bg-white pb-4 lg:hidden">
            <Link href="/" className="block px-3 py-3 text-base font-bold text-slate-900" onClick={() => setIsMenuOpen(false)}>홈</Link>
            <div className="border-y border-slate-100 py-2">
              <Link href="/about" className="block px-3 py-2 text-base font-bold text-slate-900" onClick={() => setIsMenuOpen(false)}>회사</Link>
              <div className="grid gap-1 pl-3 sm:grid-cols-2">{companyNavigation.map((item) => <Link key={item.href} href={item.href} className="rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-primary-700" onClick={() => setIsMenuOpen(false)}><span className="font-semibold">{item.name}</span><span className="ml-2 text-xs text-slate-400">{item.meta}</span></Link>)}</div>
            </div>
            <div className="border-b border-slate-100 py-2">
              <Link href="/services" className="block px-3 py-2 text-base font-bold text-slate-900" onClick={() => setIsMenuOpen(false)}>서비스</Link>
              <div className="grid gap-1 pl-3 sm:grid-cols-2">{serviceNavigation.slice(1).map((item) => <Link key={item.href} href={item.href} className="rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-primary-700" onClick={() => setIsMenuOpen(false)}><span className="font-semibold">{item.name}</span><span className="ml-2 text-xs text-slate-400">{item.meta}</span></Link>)}</div>
            </div>
            <div className="grid grid-cols-2 gap-1 px-3 pt-3">
              {[['공공', '/public'], ['IR', '/ir'], ['뉴스', '/news'], ['문의하기', '/contact']].map(([label, href]) => <Link key={href} href={href} className="rounded-lg px-3 py-2 font-semibold text-slate-700 hover:bg-blue-50 hover:text-primary-700" onClick={() => setIsMenuOpen(false)}>{label}</Link>)}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
