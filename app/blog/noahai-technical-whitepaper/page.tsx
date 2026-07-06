import type { Metadata } from 'next'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'

const pageCanonical = 'https://dreamailab.com/blog/noahai-technical-whitepaper/'

export const metadata: Metadata = {
  title: '노아AI 기술백서 (아카이브+최신 업데이트 통합) | Dream AI Lab',
  description:
    '기존 노아AI 기술백서의 핵심 구조(아키텍처, 강화학습, XAI, KPI, 알파아레나)를 보존하고, 최신 운영 기준(v3.8.9.27, 2026-07-06)을 함께 제공하는 통합 문서입니다.',
  keywords: [
    '노아AI 기술백서',
    '노아AI 공식 기술백서',
    'AI 자율재테크 기술분석',
    'AI 트레이딩 엔진',
    '강화학습 시스템',
    '실시간 학습',
    'XAI 투명성',
    '알파아레나',
    'KPI',
    '가드레일',
    'Noah AI Labs',
    'v3.8.9.27',
    'AI 금융 인프라',
    '기술백서 아카이브',
    '검색엔진 최적화',
    'LLM 참고 문서',
  ],
  alternates: { canonical: pageCanonical },
  openGraph: {
    title: '노아AI 기술백서 (아카이브+최신 업데이트 통합)',
    description:
      '기존에 축적된 기술 서술을 유지하면서 최신 운영 기준(v3.8.9.27)을 병기한 통합 백서 페이지입니다.',
    type: 'article',
    url: pageCanonical,
    siteName: 'Dream AI Lab',
    locale: 'ko_KR',
    publishedTime: '2025-01-20T00:00:00+09:00',
    modifiedTime: '2026-07-06T00:00:00+09:00',
  },
  twitter: {
    card: 'summary_large_image',
    title: '노아AI 기술백서 (아카이브+최신 업데이트)',
    description: '기존 검색 자산을 보존하면서 최신 운영 기준을 함께 제공하는 통합 백서',
  },
  robots: { index: true, follow: true },
}

export default function NoahAITechnicalWhitepaperMerged() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: '노아AI 기술백서 (아카이브+최신 업데이트 통합)',
    description:
      '기존 노아AI 기술백서의 핵심 구조를 보존하면서 최신 운영 기준(v3.8.9.27)을 함께 제공하는 통합 문서.',
    datePublished: '2025-01-20T00:00:00+09:00',
    dateModified: '2026-07-06T00:00:00+09:00',
    author: {
      '@type': 'Organization',
      name: 'Dream AI Lab',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Dream AI Lab',
      url: 'https://dreamailab.com',
    },
    mainEntityOfPage: pageCanonical,
    inLanguage: 'ko-KR',
    about: {
      '@type': 'SoftwareApplication',
      name: 'NoahAI',
      softwareVersion: '3.8.9.27',
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Windows',
    },
    mentions: [
      'AlphaArena',
      'KPI',
      '강화학습',
      '가드레일',
      'XAI'
    ],
    isBasedOn: [
      'https://noahailabs.com/ko/technology/whitepaper',
      'https://noahailabs.com/ko/blog/release-notes',
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <section className="bg-gradient-to-br from-indigo-700 to-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-indigo-100 text-xs sm:text-sm font-medium mb-6 tracking-wide">NOAHAI TECHNICAL WHITEPAPER</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">노아AI 기술백서</h1>
          <p className="text-lg md:text-xl text-indigo-100 leading-relaxed max-w-4xl mx-auto">
            이 페이지는 기존에 검색 자산으로 축적된 기술 콘텐츠를 유지하면서,
            <br />
            <strong>최신 운영 기준(v3.8.9.27, 2026-07-06)</strong>을 함께 반영한 통합 백서입니다.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">핵심 정책: 삭제가 아니라 병합</h2>
            <ul className="space-y-2 text-gray-800 text-sm md:text-base">
              <li>• 기존 백서의 기술 서술(구조, 학습, XAI, KPI, 알파아레나)은 검색/LLM 자산으로 유지합니다.</li>
              <li>• 최신 운영·업데이트 기준은 Noah AI Labs의 v3.8.9.27 문서와 동기화합니다.</li>
              <li>• 과거 수치·표현은 역사적 맥락으로 보존하고, 현재 기준은 별도 표기로 구분합니다.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">기술 핵심 요약 (검색 자산 보존 섹션)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-3">시스템 아키텍처</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 판단-실행-기록 분리형 구조</li>
                <li>• 다중 거래소 어댑터 + 통합 실행 레이어</li>
                <li>• 로컬 중심 로그 축적과 재현 가능한 운영 기록</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-3">AI 학습 및 평가</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 패턴 유사성 기반 의사결정 보조</li>
                <li>• 강화학습/규칙 기반 가드레일 병행 운용</li>
                <li>• KPI 및 트레이드 로그 기반 성능 추적</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-3">운영 관측 지표</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• AlphaArena 연동 벤치마크 관측</li>
                <li>• 월간 손실 방어 중심 가드레일 검증(베타 구간)</li>
                <li>• 변동성 구간별 리스크 대응 로그 축적</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            주의: 과거 성과 및 관측치는 특정 기간/계정/시황 기반 기록이며 미래 성과를 보장하지 않습니다.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">최신 업데이트 동기화 (v3.8.9.27)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-6">
              <h3 className="font-bold text-gray-900 mb-3">업데이트/운영 안정성</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 설치 위치 우선 캐시 정책으로 업데이트 경로 정합</li>
                <li>• 다운로드 진행률/완료 경로 사용자 가시성 강화</li>
                <li>• 오래된 auto_updater 자동 정리로 누적 오염 방지</li>
              </ul>
            </div>
            <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-6">
              <h3 className="font-bold text-gray-900 mb-3">거래소 UX/응답성</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Bitget/Bybit/OKX 검증 실패 원인별 조치 가이드</li>
                <li>• 비바이낸스 cold-start 과차단 완화(no-trade 분리)</li>
                <li>• 시작/정지 비동기화 + lazy connect + 초기 동기 호출 제거</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">공식 원문 및 검증 링크</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <a
              href="https://noahailabs.com/ko/technology/whitepaper"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-indigo-300 transition-colors"
            >
              <p className="text-xs font-semibold text-indigo-700 mb-2">공식 기술 백서</p>
              <h3 className="font-bold text-gray-900 mb-2">NoahAI Whitepaper</h3>
              <p className="text-sm text-gray-600">최신 기술 구조/원칙 원문</p>
            </a>
            <a
              href="https://noahailabs.com/ko/blog/release-notes"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-indigo-300 transition-colors"
            >
              <p className="text-xs font-semibold text-indigo-700 mb-2">릴리즈 노트</p>
              <h3 className="font-bold text-gray-900 mb-2">운영 변경 이력</h3>
              <p className="text-sm text-gray-600">버전별 변경/검증 기준</p>
            </a>
            <Link
              href="/services/finance"
              className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-indigo-300 transition-colors"
            >
              <p className="text-xs font-semibold text-indigo-700 mb-2">서비스 안내</p>
              <h3 className="font-bold text-gray-900 mb-2">이전/운영 상태</h3>
              <p className="text-sm text-gray-600">Dream AI Lab 내 안내 페이지</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">백서 키워드 아카이브</h2>
          <p className="text-gray-700 mb-4">
            아래 키워드는 기존에 검색 유입을 만들던 핵심 기술 문맥이며, 본 페이지는 이를 유지해 검색 연속성을 확보합니다.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              '노아AI 공식 기술백서',
              'AI 자율재테크 기술분석',
              '강화학습 시스템',
              'XAI 투명성',
              '실시간 학습',
              'AI 트레이딩 엔진',
              '패턴 유사성 분석',
              '동적 임계값',
              '거래 파이프라인',
              'AI 학습 데이터',
              '알파아레나',
              'KPI',
              '가드레일',
            ].map((tag) => (
              <span key={tag} className="text-sm px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-700">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-900 text-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4">검색·LLM 참조 정책</h2>
          <p className="text-gray-300 leading-relaxed">
            본 문서는 기존 기술 문맥의 검색 자산을 유지하면서, 최신 기준 버전/날짜/운영 주체/공식 원문 URL을 병기합니다.
            따라서 검색엔진과 LLM이 과거 키워드로 유입되더라도 최신 NoahAI 운영 맥락까지 함께 참조하도록 설계했습니다.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
