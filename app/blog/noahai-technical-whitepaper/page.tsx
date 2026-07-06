import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

const pageCanonical = 'https://dreamailab.com/blog/noahai-technical-whitepaper/'

export const metadata: Metadata = {
  title: '노아AI 기술백서 | 실데이터·KPI·알파아레나·연합학습 구조 (v3.8.9.27)',
  description:
    '노아AI 최신 기술 구조(v3.8.9.27)를 실데이터 운영, KPI/알파아레나 지표 체계, 연합학습 기반 고도화, 가드레일 운영 정책 중심으로 요약한 기술 백서입니다.',
  keywords: [
    '노아AI 기술백서',
    'AI 자율재테크 기술분석',
    '강화학습 시스템',
    'XAI 투명성',
    '멀티모달 AI 분석',
    '실시간 학습',
    '연합학습',
    '알파아레나',
    'KPI',
    '가드레일',
    'AI 트레이딩 엔진',
    '거래 파이프라인',
    'AI 학습 데이터',
    'Noah AI Labs',
    'v3.8.9.27',
  ],
  alternates: { canonical: pageCanonical },
  openGraph: {
    title: '노아AI 기술백서 | 실데이터·KPI·알파아레나·연합학습 구조',
    description:
      '노아AI 최신 기술 구조(v3.8.9.27): 실데이터 운영, KPI/알파아레나, 연합학습 고도화, 가드레일 정책 요약',
    type: 'article',
    url: pageCanonical,
    siteName: 'Dream AI Lab',
    locale: 'ko_KR',
    publishedTime: '2025-01-20T00:00:00Z',
    modifiedTime: '2026-07-06T00:00:00Z',
    tags: ['AI 기술백서', '재테크 AI', '강화학습', 'XAI', 'KPI', '알파아레나'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '노아AI 기술백서 (v3.8.9.27)',
    description: '실데이터·KPI·알파아레나·연합학습 기반 기술 구조 요약',
  },
  robots: { index: true, follow: true },
}

export default function NoahAITechnicalWhitepaperPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: '노아AI 기술백서 | 실데이터·KPI·알파아레나·연합학습 구조',
    description:
      '노아AI 최신 운영 기준(v3.8.9.27)의 기술 구조를 실데이터 운영, KPI/알파아레나 지표, 연합학습, 가드레일 정책 기준으로 정리한 백서',
    datePublished: '2025-01-20T00:00:00Z',
    dateModified: '2026-07-06T00:00:00Z',
    inLanguage: 'ko-KR',
    mainEntityOfPage: pageCanonical,
    author: {
      '@type': 'Organization',
      name: 'Dream AI Lab',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Dream AI Lab',
      url: 'https://dreamailab.com',
    },
    about: {
      '@type': 'SoftwareApplication',
      name: 'NoahAI',
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Windows',
      softwareVersion: '3.8.9.27',
    },
    isBasedOn: [
      'https://noahailabs.com/ko/technology/whitepaper',
      'https://noahailabs.com/ko/technology/kpi-details',
      'https://noahailabs.com/ko/blog/release-notes',
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <section className="bg-gradient-to-br from-slate-800 to-indigo-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-200 text-xs sm:text-sm font-medium mb-6 tracking-wide">NOAHAI WHITEPAPER: LIVE ENGINEERING VIEW</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">노아AI 기술백서</h1>
          <p className="text-lg md:text-xl text-slate-100 leading-relaxed max-w-3xl mx-auto">
            노아AI의 현재 기술을 실데이터 운영 관점에서 정리했습니다.
            <br />
            <strong>아키텍처 · KPI · AlphaArena · 연합학습 · 가드레일</strong>
          </p>
          <p className="mt-5 inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
            최신 기준: v3.8.9.27 · 기준일: 2026-07-06
          </p>
        </div>
      </section>

      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">현재 기술 상태 요약</h2>
            <ul className="space-y-2 text-gray-800 text-sm md:text-base">
              <li>• 판단-실행-기록 분리형 구조로 의사결정과 주문 경로를 분리 운영</li>
              <li>• 다중 거래소 어댑터 + 통합 실행 엔진으로 거래소 차이를 표준화 처리</li>
              <li>• 실거래 로그와 KPI 집계를 연결해 검증/복기/튜닝 루프를 운영</li>
              <li>• 규칙 기반 가드레일과 학습 기반 모델을 병행해 변동성 구간 리스크 제어</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">기술 구성 레이어</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">NoahAI Labs 기술/서비스 페이지와 동일 맥락으로 읽히도록 핵심 레이어를 정렬했습니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">판단 레이어</h3>
              <p className="text-sm text-gray-600">멀티소스 신호, 패턴 유사성, 동적 임계값으로 후보 시나리오를 생성합니다.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">실행 레이어</h3>
              <p className="text-sm text-gray-600">거래소별 API 차이를 흡수한 통합 실행 레이어에서 진입·청산·상태 추적을 처리합니다.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">기록/학습 레이어</h3>
              <p className="text-sm text-gray-600">판단-실행-결과 로그를 구조화 저장하고 KPI 복기 데이터를 학습에 반영합니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">실데이터 운영 완료 항목</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">아이디어 단계가 아닌 실제 운영 체인에서 완료된 항목들입니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">거래 실행 체인</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 다중 거래소 API 연결/주문/상태 추적 운영</li>
                <li>• 시작/정지 비동기 처리 및 lazy connect 운영</li>
                <li>• 거래소 검증 UX(원인별 조치 가이드) 반영</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">판단/로그 체인</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 판단 로그-실행 로그-결과 로그 연결 저장</li>
                <li>• 실거래 복기 스키마 및 추적 체계 운영</li>
                <li>• XAI 설명 가능성을 위한 근거 로그 노출 체계 적용</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">AlphaArena 및 KPI 체계</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">단일 수익률이 아니라 운영 품질 지표 묶음으로 성능을 평가합니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <p className="text-xs font-semibold text-indigo-700 mb-2">AlphaArena</p>
              <h3 className="font-bold text-gray-900 mb-2">벤치마크 비교</h3>
              <p className="text-sm text-gray-600">동일 구간 상대 성과를 관측해 우연 성과와 구조 성과를 구분합니다.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <p className="text-xs font-semibold text-indigo-700 mb-2">KPI</p>
              <h3 className="font-bold text-gray-900 mb-2">운영 품질 지표</h3>
              <p className="text-sm text-gray-600">승률, 손익비, MDD, no-trade 비율, 응답성 지표를 함께 관측합니다.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <p className="text-xs font-semibold text-indigo-700 mb-2">가드레일</p>
              <h3 className="font-bold text-gray-900 mb-2">리스크 제어</h3>
              <p className="text-sm text-gray-600">변동성 급등·유동성 부족·신뢰도 저하 구간에서 진입 억제 또는 비중 축소를 수행합니다.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <p className="text-xs font-semibold text-indigo-700 mb-2">트레이드 로그</p>
              <h3 className="font-bold text-gray-900 mb-2">복기 가능성</h3>
              <p className="text-sm text-gray-600">판단 근거부터 청산 결과까지 체인 로그를 남겨 사후 검증과 재현성을 확보합니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">연합학습 기반 고도화</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">환경별 데이터 특성을 유지하면서 학습 품질을 높이기 위한 구조입니다.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">적용 원칙</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 계정 원본 데이터 대신 요약 통계/모델 업데이트 신호 중심 학습</li>
                <li>• 환경별 차이를 보정하는 가중치 정책으로 편향 완화</li>
                <li>• 민감정보 노출을 최소화하는 로컬 우선 처리 원칙</li>
              </ul>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">완료/진행 상태</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 완료: 실데이터 기반 KPI 집계 및 트레이드 로그 복기 체계</li>
                <li>• 완료: 거래소 검증 UX, 응답성 개선, 업데이트 경로 정합</li>
                <li>• 진행: 연합학습 품질 지표 표준화 및 도메인별 확장</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gray-900 rounded-2xl p-6 text-gray-100">
            <h3 className="text-xl font-bold mb-3">현재 기술 상태 한 줄 요약</h3>
            <p className="text-sm leading-relaxed text-gray-300">
              노아AI는 실데이터 운영-지표 검증-KPI 복기-가드레일 제어가 연결된 운영형 기술 스택이며,
              NoahAI Labs의 기술/서비스 기준과 동일한 맥락으로 동기화되어 있습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">공식 확인 경로</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <a
              href="https://noahailabs.com/ko/technology/whitepaper"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-indigo-300 transition-colors"
            >
              <p className="text-xs font-semibold text-indigo-700 mb-2">공식 백서</p>
              <h3 className="font-bold text-gray-900 mb-2">NoahAI Whitepaper</h3>
              <p className="text-sm text-gray-600">기술 원칙·구조 상세</p>
            </a>
            <a
              href="https://noahailabs.com/ko/technology/kpi-details"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-indigo-300 transition-colors"
            >
              <p className="text-xs font-semibold text-indigo-700 mb-2">KPI 상세</p>
              <h3 className="font-bold text-gray-900 mb-2">운영 지표</h3>
              <p className="text-sm text-gray-600">KPI 기준 및 관측 항목</p>
            </a>
            <a
              href="https://noahailabs.com/ko/blog/release-notes"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-indigo-300 transition-colors"
            >
              <p className="text-xs font-semibold text-indigo-700 mb-2">릴리즈 노트</p>
              <h3 className="font-bold text-gray-900 mb-2">버전 이력</h3>
              <p className="text-sm text-gray-600">v3.8.9.27 기준 변경 사항</p>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">서비스 안내</h2>
          <p className="text-gray-600 mb-8">
            Dream AI Lab의 노아AI 안내는 NoahAI Labs 기술/서비스 기준과 정합하게 유지됩니다.
            운영 공지와 기술 상세는 공식 채널에서 동일한 기준으로 확인할 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/services/finance"
              className="inline-flex items-center justify-center bg-indigo-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              최신 운영 안내 보기
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-gray-700 px-7 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              기술 문의하기
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-gray-600 space-y-1 text-center">
            <p>본 페이지는 노아AI 최신 운영 기준(v3.8.9.27) 및 기술 구조를 기준으로 업데이트되었습니다.</p>
            <p>성과 및 운영 지표는 특정 기간/환경 기준으로 수집되며, 시장 상황에 따라 변동될 수 있습니다.</p>
            <p><strong>© 2026 DAL(드림에이아이랩). All Rights Reserved.</strong></p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
