import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

const pageCanonical = 'https://dreamailab.com/services/finance/'

export const metadata: Metadata = {
  title: '노아AI 최신 운영 안내 (v3.8.9.27) | Noah AI Labs 이전 완료',
  description:
    '노아AI는 Noah AI Labs로 이전 완료되었으며 최신 운영 기준은 v3.8.9.27(2026-07-06)입니다. 자동업데이트 경로/진행률 가시성, 거래소 검증 UX, 시작·정지 응답성 패치 반영 현황을 안내합니다.',
  keywords: [
    '노아AI',
    'Noah AI Labs',
    'v3.8.9.27',
    '자동업데이트',
    '거래소 검증 UX',
    'AI 금융 인프라',
    'dreamailab',
    'noahailabs',
  ],
  alternates: { canonical: pageCanonical },
  openGraph: {
    title: '노아AI 최신 운영 안내 (v3.8.9.27)',
    description:
      '노아AI는 Noah AI Labs로 이전되었고, 최신 운영 기준(v3.8.9.27)과 업데이트 핵심 변경사항을 이 페이지에서 요약합니다.',
    url: pageCanonical,
    siteName: 'Dream AI Lab',
    type: 'article',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: '노아AI 최신 운영 안내 (v3.8.9.27)',
    description: '이전 완료 후 최신 운영 기준과 공식 확인 경로를 제공합니다.',
  },
  robots: { index: true, follow: true },
}

export default function FinanceServiceNoticePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '노아AI 최신 운영 안내 (v3.8.9.27)',
    description:
      'Dream AI Lab의 노아AI 안내 페이지. Noah AI Labs 이전 완료 및 최신 운영 기준(v3.8.9.27) 요약.',
    datePublished: '2026-07-06T00:00:00+09:00',
    dateModified: '2026-07-06T00:00:00+09:00',
    inLanguage: 'ko-KR',
    mainEntityOfPage: pageCanonical,
    about: {
      '@type': 'SoftwareApplication',
      name: 'NoahAI',
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Windows',
      softwareVersion: '3.8.9.27',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Dream AI Lab',
      url: 'https://dreamailab.com',
    },
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <section className="bg-gradient-to-br from-slate-800 to-indigo-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-200 text-xs sm:text-sm font-medium mb-6 tracking-wide">NOAHAI STATUS: MIGRATED + UPDATED</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">노아AI 최신 운영 안내</h1>
          <p className="text-lg md:text-xl text-slate-100 leading-relaxed max-w-3xl mx-auto">
            노아AI는 Dream AI Lab 서비스 라인업에서 분리되어
            <br />
            <strong>Noah AI Labs</strong>에서 독립 운영되고 있습니다.
          </p>
          <p className="mt-5 inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
            최신 운영 기준: v3.8.9.27 · 기준일: 2026-07-06
          </p>
        </div>
      </section>

      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">이번 기준선 핵심 반영</h2>
            <ul className="space-y-2 text-gray-800 text-sm md:text-base">
              <li>• 자동업데이트 경로 정합: 설치 위치 우선 캐시 + LocalAppData/TEMP 폴백</li>
              <li>• 업데이트 진행률 가시성: 다운로드 진행률(%)·수신량(MB)·완료 경로 노출</li>
              <li>• 거래소 검증 UX 강화: Bitget/Bybit/OKX 실패 원인별 조치 가이드</li>
              <li>• 시작/정지 응답성 개선: 비동기 처리 + lazy connect + 초기 동기 수집 제거</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">공식 확인 경로</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <a
              href="https://noahailabs.com/ko"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-indigo-300 transition-colors"
            >
              <p className="text-xs font-semibold text-indigo-700 mb-2">공식 사이트</p>
              <h3 className="font-bold text-gray-900 mb-2">Noah AI Labs</h3>
              <p className="text-sm text-gray-600">최신 공지/서비스 구조/로드맵</p>
            </a>
            <a
              href="https://noahailabs.com/ko/blog/release-notes"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-indigo-300 transition-colors"
            >
              <p className="text-xs font-semibold text-indigo-700 mb-2">릴리즈 노트</p>
              <h3 className="font-bold text-gray-900 mb-2">운영 변경 이력</h3>
              <p className="text-sm text-gray-600">버전별 구조 변경·운영 원칙</p>
            </a>
            <Link href="/blog/noahai-technical-whitepaper" className="bg-white rounded-xl p-6 border border-gray-200 hover:border-indigo-300 transition-colors">
              <p className="text-xs font-semibold text-indigo-700 mb-2">백서 안내</p>
              <h3 className="font-bold text-gray-900 mb-2">기술 기준 요약</h3>
              <p className="text-sm text-gray-600">검색/LLM 참고용 최신 기술 맥락</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Dream AI Lab 안내</h2>
          <p className="text-gray-600 mb-8">
            Dream AI Lab은 AI디지털케어로그 기반 도메인 서비스(돌봄/의료/교육)를 중심으로 운영하며,
            노아AI는 Noah AI Labs 법인에서 독립 운영됩니다.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center justify-center bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            DAL 서비스 보기
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
