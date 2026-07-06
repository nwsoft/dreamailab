import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

const pageCanonical = 'https://dreamailab.com/blog/noahai-technical-whitepaper/'

export const metadata: Metadata = {
  title: '노아AI 기술백서 | 실데이터·KPI·알파아레나·연합학습 구조 (v3.8.9.27)',
  description:
    '노아AI 최신 기술 구조(v3.8.9.27)를 쉬운 설명, 실제 작동 로그, 아키텍처 도표, KPI/AlphaArena, 가드레일 정책, 멀티 거래/자산 운영 관점으로 정리한 기술 백서입니다.',
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
      '노아AI 최신 기술 구조(v3.8.9.27): 쉬운 설명, 실제 로그, 멀티 거래/자산 운영, KPI/AlphaArena, 가드레일 정책',
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
    description: '쉬운 설명 + 실제 로그 + KPI/AlphaArena + 가드레일 구조',
  },
  robots: { index: true, follow: true },
}

export default function NoahAITechnicalWhitepaperPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: '노아AI 기술백서 | 실데이터·KPI·알파아레나·연합학습 구조',
    description:
      '노아AI 최신 운영 기준(v3.8.9.27)의 기술 구조를 쉬운 설명, 실데이터 운영, KPI/AlphaArena 지표, 연합학습, 가드레일 정책 기준으로 정리한 백서',
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
            노아AI의 현재 기술을 "쉬운 설명 + 실제 운영 근거"로 정리했습니다.
            <br />
            <strong>아키텍처 · 실로그 · 멀티거래 · KPI/AlphaArena · 가드레일</strong>
          </p>
          <p className="mt-5 inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
            최신 기준: v3.8.9.27 · 기준일: 2026-07-06
          </p>
        </div>
      </section>

      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">쉽게 이해하는 노아AI 작동 순서</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-4"><p className="text-xs text-indigo-700 font-bold mb-1">STEP 1</p><p className="text-sm text-gray-700">시장/종목 데이터 수집</p></div>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-4"><p className="text-xs text-indigo-700 font-bold mb-1">STEP 2</p><p className="text-sm text-gray-700">AI 신호 + 리스크 체크</p></div>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-4"><p className="text-xs text-indigo-700 font-bold mb-1">STEP 3</p><p className="text-sm text-gray-700">조건 충족 시 주문 실행</p></div>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-4"><p className="text-xs text-indigo-700 font-bold mb-1">STEP 4</p><p className="text-sm text-gray-700">체결/포지션 모니터링</p></div>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-4"><p className="text-xs text-indigo-700 font-bold mb-1">STEP 5</p><p className="text-sm text-gray-700">로그/KPI 기록 후 학습 반영</p></div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">시스템 아키텍처 미리보기</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">기존에 잘 읽히던 도식형 설명을 유지하고 최신 운영 기준으로 정합했습니다.</p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 md:p-8 text-green-300 font-mono text-xs md:text-sm overflow-x-auto">
            <pre className="whitespace-pre">{`┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   UI Dashboard  │◄──►│   Main Core     │◄──►│ Unified Trader   │
│  (운영/제어 UI)  │    │ (판단 오케스트라) │    │ (실행 엔진)      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  AI Manager     │◄──►│   Evaluator     │◄──►│    Recorder     │
│ (학습/튜닝)      │    │ (신호/선정)      │    │ (로그/KPI 저장) │
└─────────────────┘    └─────────────────┘    └─────────────────┘`}</pre>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">판단 레이어</h3>
              <p className="text-sm text-gray-600">멀티소스 신호, 패턴 유사성, 동적 임계값으로 후보 시나리오를 생성합니다.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">실행 레이어</h3>
              <p className="text-sm text-gray-600">거래소/브로커별 API 차이를 흡수한 통합 실행 레이어에서 진입·청산·상태 추적을 처리합니다.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">기록/학습 레이어</h3>
              <p className="text-sm text-gray-600">판단-실행-결과 로그를 구조화 저장하고 KPI 복기 데이터를 학습에 반영합니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">실제 로그는 이렇게 남습니다</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">XAI(설명 가능성) 핵심은 결과가 아니라 근거와 과정이 함께 기록되는 것입니다.</p>
          </div>

          <div className="bg-black rounded-2xl p-6 text-green-400 font-mono text-xs md:text-sm overflow-x-auto">
            <pre className="whitespace-pre">{`2026-07-06 03:25:00 | INFO | [analysis] exchange=binance symbol=ADAUSDT regime=trend
2026-07-06 03:25:02 | INFO | [signal] side=SHORT confidence=0.74 reason=momentum+volume
2026-07-06 03:25:03 | INFO | [guardrail] risk_cap=PASS cooldown=PASS max_pos=PASS
2026-07-06 03:25:04 | INFO | [order] execution_mode=paper api_type=futures qty=120
2026-07-06 03:25:06 | INFO | [exit] tp_hit=true pnl=+0.83% hold_sec=122
2026-07-06 03:25:06 | INFO | [kpi] win_rate=update rr=update drawdown=update`}</pre>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">멀티 거래소/멀티 자산 운영</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">코인, 증권, ETF를 하나의 UI/로그 체계에서 다루되, 실행 경로와 안전정책은 분리합니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">블록체인(암호화폐)</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 선물/현물 다중 거래소 어댑터 운영</li>
                <li>• 멀티 거래소 동시 제어/로그 분리</li>
                <li>• Unified 경로로 실행/통계 일관화</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">증권/ETF</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 분석/설명/로그 경로 상시 운영</li>
                <li>• 브로커별 어댑터(신한/미래에셋/키움) 분리</li>
                <li>• 실주문은 정책 플래그 + 브로커 준비도 기반</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">동시 운용 방식</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 서비스 컨텍스트별 탭/상태 분리</li>
                <li>• 자산군별 정책/가드레일 별도 적용</li>
                <li>• 판단 결과는 공통 기록 스키마로 통합</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">AlphaArena 및 KPI 체계</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">성과를 단일 수익률이 아니라 운영 품질 지표 묶음으로 평가합니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <p className="text-xs font-semibold text-indigo-700 mb-2">AlphaArena</p>
              <h3 className="font-bold text-gray-900 mb-2">벤치마크 비교</h3>
              <p className="text-sm text-gray-600">동일 구간 상대 성과를 관측해 우연 성과와 구조 성과를 구분합니다.</p>
            </div>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <p className="text-xs font-semibold text-indigo-700 mb-2">KPI</p>
              <h3 className="font-bold text-gray-900 mb-2">운영 품질 지표</h3>
              <p className="text-sm text-gray-600">승률, 손익비, MDD, no-trade 비율, 응답성 지표를 함께 관측합니다.</p>
            </div>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <p className="text-xs font-semibold text-indigo-700 mb-2">가드레일</p>
              <h3 className="font-bold text-gray-900 mb-2">리스크 제어</h3>
              <p className="text-sm text-gray-600">연속손실, 일일손실, 쿨다운, 포지션 한도 정책으로 주문 경로를 차단/완화합니다.</p>
            </div>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <p className="text-xs font-semibold text-indigo-700 mb-2">검증</p>
              <h3 className="font-bold text-gray-900 mb-2">회귀 테스트</h3>
              <p className="text-sm text-gray-600">핵심 경로는 릴리즈 전 회귀 테스트와 readiness 스크립트로 점검합니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">연합학습 및 고도화 상태</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">현재 운영 안정성을 유지하면서 연합학습 고도화를 단계적으로 진행합니다.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">현재 운영(안정 모드)</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 연합학습 확장 경로는 사전 준비 구조 포함</li>
                <li>• 민감 기능은 안전 디폴트로 차단/명시적 허용 정책 적용</li>
                <li>• 실데이터 기반 로컬 로그/KPI 루프를 우선 운영</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">고도화 방향</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 연합학습 품질 지표 표준화</li>
                <li>• 자산군별(코인/증권/ETF) 모델 정책 세분화</li>
                <li>• 복기 데이터 기반 임계값 자동 보정 고도화</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">완료된 것과 진행 중인 것</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">완료/운영 중</h3>
              <ul className="space-y-2 text-sm text-gray-800">
                <li>• 암호화폐 자동 신호/주문/기록 운영 경로</li>
                <li>• 실거래 로그 및 KPI 집계/복기 체계</li>
                <li>• 거래소 검증 UX, 응답성, 업데이트 경로 정합(v3.8.9.27)</li>
                <li>• 증권/ETF 분석·설명·로그 연동 경로</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">진행/고도화 중</h3>
              <ul className="space-y-2 text-sm text-gray-800">
                <li>• 증권 자동주문 전 구간 완성도 추가 향상</li>
                <li>• 연합학습 품질 지표 표준화 및 운영 정책 확장</li>
                <li>• 다중 거래소 동시운용의 운영 가시성 고도화</li>
                <li>• 자산군별 리스크 가드레일 세분 정책 강화</li>
              </ul>
            </div>
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
            운영 공지와 기술 상세는 공식 채널에서 동일 기준으로 확인할 수 있습니다.
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
