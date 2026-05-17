import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

const pageCanonical = 'https://dreamailab.com/services/finance'

export const metadata: Metadata = {
  title: '노아AI 이전 안내 | Noah AI Labs 분리 운영',
  description:
    '노아AI는 Dream AI Lab에서 Noah AI Labs로 기술이전·분리 운영 중입니다. AI디지털케어로그 기반 재테크·금융 플랫폼의 최신 업데이트와 VC/TIPS/R&D 관련 소식은 Noah AI Labs에서 확인하세요.',
  alternates: { canonical: pageCanonical },
  openGraph: {
    title: '노아AI 이전 안내 | Noah AI Labs',
    description:
      '노아AI는 별도 법인 Noah AI Labs로 이전되었습니다. 최신 업데이트와 공식 공지는 Noah AI Labs에서 확인 가능합니다.',
    url: pageCanonical,
    siteName: 'Dream AI Lab',
    type: 'website',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: '노아AI 이전 안내 | Noah AI Labs',
    description: '노아AI 기술이전·분리 운영 안내 페이지',
  },
  robots: { index: true, follow: true },
}

export default function FinanceServiceNoticePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: '노아AI 이전 안내',
    url: pageCanonical,
    description: '노아AI는 Noah AI Labs로 이전되어 별도 법인에서 운영 중입니다.',
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <section className="bg-gradient-to-br from-slate-700 to-indigo-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-200 text-xs sm:text-sm font-medium mb-6 tracking-wide">Service Status: Migrated</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">노아AI 이전 안내</h1>
          <p className="text-lg md:text-xl text-slate-100 leading-relaxed max-w-3xl mx-auto">
            노아AI는 Dream AI Lab 서비스 라인업에서 분리되어,
            <br />
            <strong>Noah AI Labs</strong>에서 독립적으로 운영·업데이트되고 있습니다.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">핵심 안내</h2>
            <ul className="space-y-2 text-gray-800 text-sm md:text-base">
              <li>• 노아AI는 기술이전 완료 후 Noah AI Labs에서 별도 법인으로 운영됩니다.</li>
              <li>• DAL 실시간 서비스 축(자람이·시니어앤라이프·토탈케어로그·에듀케어로그·글로벌커플케어·베지케어)과는 분리되어 있습니다.</li>
              <li>• 노아AI의 베타 테스트, 기능 업데이트, VC/TIPS/R&D 진행 현황은 Noah AI Labs 공지 기준으로 확인해 주세요.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">어디서 확인하면 되나요?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <a
              href="https://noahailabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-indigo-300 transition-colors"
            >
              <p className="text-xs font-semibold text-indigo-700 mb-2">공식 사이트</p>
              <h3 className="font-bold text-gray-900 mb-2">Noah AI Labs</h3>
              <p className="text-sm text-gray-600">서비스·업데이트·공지 확인</p>
            </a>
            <Link href="/blog/noahai-technical-whitepaper" className="bg-white rounded-xl p-6 border border-gray-200 hover:border-indigo-300 transition-colors">
              <p className="text-xs font-semibold text-indigo-700 mb-2">기술 문서</p>
              <h3 className="font-bold text-gray-900 mb-2">기술 백서</h3>
              <p className="text-sm text-gray-600">노아AI 기술 개요 참고</p>
            </Link>
            <Link href="/contact?type=general&service=platform" className="bg-white rounded-xl p-6 border border-gray-200 hover:border-indigo-300 transition-colors">
              <p className="text-xs font-semibold text-indigo-700 mb-2">일반 문의</p>
              <h3 className="font-bold text-gray-900 mb-2">Dream AI Lab</h3>
              <p className="text-sm text-gray-600">DAL 플랫폼·도메인 서비스 문의</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">DAL 서비스 라인업 보기</h2>
          <p className="text-gray-600 mb-8">현재 DAL 핵심 서비스 생태계는 `AI디지털케어로그` 기반 도메인 서비스 중심으로 운영됩니다.</p>
          <Link
            href="/services"
            className="inline-flex items-center justify-center bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            서비스 생태계 보기
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
