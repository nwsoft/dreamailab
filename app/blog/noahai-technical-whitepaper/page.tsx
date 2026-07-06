import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

const pageCanonical = 'https://dreamailab.com/blog/noahai-technical-whitepaper/'

export const metadata: Metadata = {
  title: '노아AI 기술백서 | 실데이터·KPI·알파아레나·연합학습 구조 (v3.8.9.27)',
  description:
    'Dream AI Lab 기술 기원과 Noah AI Labs 운영 기준을 함께 반영한 노아AI 기술백서입니다. v3.8.9.27 기준 쉬운 설명, 실제 작동 로그, 아키텍처 도표, KPI/AlphaArena, 가드레일 정책, 멀티 거래/자산 운영을 정리했습니다.',
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
    'Dream AI Lab',
    '노아에이아이랩스 독립법인',
    'v3.8.9.27',
  ],
  alternates: { canonical: pageCanonical },
  openGraph: {
    title: '노아AI 기술백서 | 실데이터·KPI·알파아레나·연합학습 구조',
    description:
      'Dream AI Lab 기술 기원 + Noah AI Labs 운영 기준 정합. 노아AI 최신 기술 구조(v3.8.9.27): 쉬운 설명, 실제 로그, 멀티 거래/자산 운영, KPI/AlphaArena, 가드레일 정책',
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
  const faqItems = [
    {
      question: '노아AI는 어떤 기술이며 누가 만들었나요?',
      answer:
        '노아AI는 판단·설명·기록·검증·환류 구조를 갖춘 AI 금융 의사결정 인프라입니다. 현재 제품과 운영 본체는 Noah AI Labs이며, 핵심 AI 디지털케어로그 기술의 기원과 독자 파이프라인은 Dream AI Lab(DAL)에서 출발했습니다. 이 페이지는 Dream AI Lab의 기술백서이면서, 현재 운영 기준은 Noah AI Labs와 정합되도록 유지됩니다.',
    },
    {
      question: '기존 자동매매나 일반 금융 AI와 무엇이 다른가요?',
      answer:
        '고정 규칙만 실행하는 봇과 달리, 노아AI는 시장 데이터와 사용자 맥락을 해석하고, 판단 근거와 실행 결과를 함께 기록하며, KPI·가드레일·복기 데이터를 다음 판단에 반영합니다. 멀티 거래소·멀티 자산 구조, XAI 로그, 공개 가능한 집계 KPI가 함께 묶인 점이 차별점입니다.',
    },
    {
      question: '왜 AI 디지털케어로그 기술을 금융에 이식했나요?',
      answer:
        '의료·돌봄처럼 금융도 한 번의 예측보다 판단 경로, 위험 경고, 사후 검토가 중요한 고위험 영역이기 때문입니다. NoahAI는 DAL의 Decision-Log-Review-Learning 폐루프를 금융 의사결정 운영으로 확장해, 판단을 남기고 검토하고 다시 학습하는 구조를 재테크에 적용했습니다.',
    },
    {
      question: 'AI가 재테크에 어떻게 이용되나요?',
      answer:
        '시장/종목 데이터를 수집하고, AI가 신호와 위험을 함께 판단한 뒤, 정책을 통과한 경우에만 주문 경로로 넘깁니다. 이후 체결 결과, 손익, 종료 사유, KPI, 설명 로그를 다시 저장해 다음 판단과 운영 정책 개선에 사용합니다.',
    },
    {
      question: '이 페이지에 실증과 검증 근거가 실제로 포함되어 있나요?',
      answer:
        '예. 공개 가능한 범위에서 실제 운영 로그 예시, 공개 안전 KPI 요약, AlphaArena 집계, 회귀 테스트·릴리즈 게이트 방식, 공개/비공개 경계를 함께 명시했습니다. 다만 개인식별정보, 원문 프롬프트, 내부 임계치, 보안 파라미터는 공개하지 않습니다.',
    },
    {
      question: '검색엔진이나 LLM이 이 페이지를 읽을 때 도움이 되나요?',
      answer:
        '도움이 됩니다. 이 페이지는 기술 정의, 개발 주체, 법인 이관 맥락, 차별점, 운영 흐름, 증거, 한계, FAQ를 명시적으로 분리했고, TechArticle와 FAQPage 구조화 데이터까지 포함해 검색과 LLM 질의 응답에 필요한 문맥을 직접 제공합니다.',
    },
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TechArticle',
        headline: '노아AI 기술백서 | 실데이터·KPI·알파아레나·연합학습 구조',
        description:
          'Dream AI Lab 기술 기원과 Noah AI Labs 최신 운영 기준(v3.8.9.27)을 함께 정리한 노아AI 기술백서. 쉬운 설명, 실데이터 운영, KPI/AlphaArena 지표, 연합학습, 가드레일 정책 포함',
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
        sourceOrganization: {
          '@type': 'Organization',
          name: 'Noah AI Labs',
          url: 'https://noahailabs.com',
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
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
      {
        '@type': 'Organization',
        name: 'Dream AI Lab',
        url: 'https://dreamailab.com',
        sameAs: ['https://noahailabs.com'],
      },
      {
        '@type': 'Organization',
        name: 'Noah AI Labs',
        url: 'https://noahailabs.com',
      },
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
          <p className="mt-4 text-sm text-slate-200 leading-6 max-w-3xl mx-auto">
            이 페이지는 Dream AI Lab의 노아AI 기술백서이며, 현재 운영 중인 Noah AI Labs 기준과 정합되도록 유지됩니다.
            노아AI 관련 서비스와 운영 공지는 Noah AI Labs 독립 법인 기준으로 이전·정리되는 흐름을 반영합니다.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">이 기술은 무엇이고, 누가 만들었고, 왜 다른가</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              검색 사용자와 LLM이 가장 먼저 찾는 질문에 맞춰 노아AI의 정체성, 개발 주체, 기존 대비 차별점을 먼저 정리합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
              <p className="text-xs font-semibold text-indigo-700 mb-2">기술 정체성</p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI 금융 의사결정 인프라</h3>
              <p className="text-sm text-gray-700 leading-6">
                노아AI는 단순 자동매매 봇이 아니라 판단, 설명, 기록, 검증, 환류를 하나의 루프로 묶은 재테크용 AI 운영 구조입니다.
                핵심은 수익률 한 줄이 아니라 왜 그런 판단을 했는지와 그 결과가 다음 판단에 어떻게 반영되는지까지 남기는 데 있습니다.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
              <p className="text-xs font-semibold text-indigo-700 mb-2">개발 주체</p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Noah AI Labs + DAL</h3>
              <p className="text-sm text-gray-700 leading-6">
                현재 제품과 운영 본체는 Noah AI Labs 기준으로 관리되고, 핵심 AI 디지털케어로그 기술의 기원과 독자 파이프라인은 Dream AI Lab(DAL)에서 출발했습니다.
                즉, 서비스 운영 주체는 Noah AI Labs, 기술 기원과 본 백서 맥락은 Dream AI Lab으로 구분해 출처 혼선을 줄였습니다.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
              <p className="text-xs font-semibold text-indigo-700 mb-2">기존 대비 차별점</p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">설명 가능성 + 검증 가능성</h3>
              <p className="text-sm text-gray-700 leading-6">
                일반 자동매매는 규칙 실행 중심이지만, 노아AI는 멀티 거래소·멀티 자산 환경에서 판단 근거, 리스크 정책, 실행 결과, KPI 복기를 함께 남깁니다.
                이 구조 덕분에 검색과 LLM도 단순 홍보 문구가 아니라 기술 문맥과 증거 문맥을 함께 읽을 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">왜 AI 디지털케어로그 기술을 금융에 이식했는가</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              이 기술의 핵심은 예측 하나를 더 잘 맞히는 것이 아니라, 고위험 의사결정에서 판단을 남기고 검토하고 다시 학습하는 운영 구조를 만드는 데 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <p className="text-xs font-semibold text-indigo-700 mb-2">이식 이유 1</p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">금융도 고위험 결정이기 때문</h3>
              <p className="text-sm text-gray-700 leading-6">
                의료와 돌봄처럼 금융도 한 번 잘못된 판단이 손실과 신뢰 붕괴로 이어질 수 있습니다.
                그래서 NoahAI는 단순 신호 예측보다 판단 이유, 경고, 중단 조건, 사후 복기를 함께 남기는 DAL 구조를 금융에 가져왔습니다.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <p className="text-xs font-semibold text-indigo-700 mb-2">이식 이유 2</p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">블랙박스를 줄이기 위해</h3>
              <p className="text-sm text-gray-700 leading-6">
                기존 재테크 AI는 무엇을 추천하는지는 보여줘도 왜 그런지, 언제 멈춰야 하는지, 무엇이 실패 원인인지 설명이 약한 경우가 많았습니다.
                DAL은 Decision-Log-Review-Learning 폐루프로 판단-실행-결과를 같은 체인에 남겨 설명 가능성과 감사 가능성을 높입니다.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <p className="text-xs font-semibold text-indigo-700 mb-2">이식 이유 3</p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">재테크를 운영 가능한 AI로 바꾸기 위해</h3>
              <p className="text-sm text-gray-700 leading-6">
                핵심은 AI가 대신 투자한다는 구호가 아니라, 사람이 이해하고 중단시키고 재검토할 수 있는 구조를 만드는 것입니다.
                이 점에서 NoahAI는 수익률 광고형 봇보다 운영 신뢰성 중심의 재테크 AI에 가깝습니다.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-slate-900 text-slate-100 p-6">
            <h3 className="text-xl font-bold mb-3">논문 관점에서의 정의</h3>
            <p className="text-sm leading-7 text-slate-200">
              2026 프리프린트 초안 NoahAI-DAL: A Governable Financial Decision Architecture with XAI and Risk Governance는
              노아AI를 수익률 홍보 시스템이 아니라 운영 통제 가능성, 설명 가능성, 리스크 거버넌스를 갖춘 금융 의사결정 아키텍처로 정의합니다.
              논문의 핵심 기여는 DAL 원리의 금융 확장, XAI 운영화, 정책 기반 리스크 거버넌스 분리, 재현 가능한 검증 프레임 제시입니다.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-200">
              이 백서는 해당 기술 기원을 Dream AI Lab 관점에서 설명하되, 현재 서비스 운영과 대외 기준은 Noah AI Labs 독립 법인 체계와 정합되도록 구성했습니다.
            </p>
          </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">AI가 재테크에 실제로 쓰이는 방식</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              노아AI는 투자 판단을 대신 선언하는 시스템이 아니라, 데이터 해석과 리스크 통제를 통해 사용자의 재테크 결정을 돕는 운영 엔진입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">판단 단계</h3>
              <ul className="space-y-3 text-sm text-gray-700 leading-6">
                <li>• 가격, 거래량, 변동성, 시장 국면, 자산군 맥락을 함께 읽습니다.</li>
                <li>• AI가 LONG, SHORT, HOLD 같은 방향성만이 아니라 신뢰도와 차단 사유를 함께 계산합니다.</li>
                <li>• 사용자 목표나 정책과 충돌하면 좋은 신호라도 실행하지 않고 보류하거나 차단합니다.</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">실행 이후 단계</h3>
              <ul className="space-y-3 text-sm text-gray-700 leading-6">
                <li>• 체결, 손익, 종료 사유, 보유 시간, 거래소별 상태를 로그로 남깁니다.</li>
                <li>• 승률, 손익비, MDD, no-trade 비율 같은 KPI를 복기 데이터로 집계합니다.</li>
                <li>• 이 복기 결과가 다음 판단의 임계값, 리스크 정책, 학습 보정에 다시 반영됩니다.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">기존 재테크를 어떻게 바꾸었는가</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              노아AI가 바꾸려는 것은 거래 버튼 자체보다, 재테크를 설명 가능하고 검증 가능한 AI 운영 프로세스로 재구성하는 방식입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">기존 방식</h3>
              <ul className="space-y-3 text-sm text-gray-700 leading-6">
                <li>• 고정 규칙 또는 블랙박스 신호 중심</li>
                <li>• 판단 이유와 실패 원인이 분리되기 쉬움</li>
                <li>• 손실 통제가 모델 확신도에 종속되기 쉬움</li>
                <li>• 사용자는 사후에 왜 손실이 났는지 추적하기 어려움</li>
              </ul>
            </div>
            <div className="bg-indigo-50 rounded-2xl border border-indigo-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">NoahAI 이후</h3>
              <ul className="space-y-3 text-sm text-gray-700 leading-6">
                <li>• 판단, 로그, 복기, 학습이 하나의 루프로 연결</li>
                <li>• 설명 문구가 부가 기능이 아니라 운영 기록으로 남음</li>
                <li>• 가드레일이 모델 밖 정책 계층으로 분리되어 강제됨</li>
                <li>• 사용자는 결과뿐 아니라 이유와 중단 조건까지 확인 가능</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">무엇이 도움이 되는가</h3>
              <p className="text-sm text-gray-700 leading-6">초보자에게는 왜 매수/매도를 보류하는지 설명이 남고, 숙련자에게는 로그와 KPI를 기반으로 전략을 복기할 수 있습니다.</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">무엇이 달라지는가</h3>
              <p className="text-sm text-gray-700 leading-6">재테크가 감과 감정 중심 판단에서, 기록과 정책과 반복 검증 중심 판단으로 이동합니다.</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">왜 AI 시대에 중요한가</h3>
              <p className="text-sm text-gray-700 leading-6">LLM과 자동화가 늘어날수록 잘 맞히는 것만큼 왜 그렇게 판단했는지와 언제 멈출 수 있는지가 더 중요해지기 때문입니다.</p>
            </div>
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

      <section className="py-16 lg:py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">실증 완결성, 신뢰도, 검증 근거</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              이 페이지는 말만 하는 소개가 아니라, 공개 가능한 범위의 운영 수치, 검증 방식, 공개 한계를 함께 적어 신뢰도를 판단할 수 있게 구성합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
              <p className="text-xs font-semibold text-indigo-700 mb-2">공개 안전 KPI</p>
              <h3 className="text-lg font-bold text-gray-900 mb-3">사용자 KPI 요약</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• AI 의사결정 3,063건</li>
                <li>• 종료 거래 4건</li>
                <li>• 승/패 2건 / 2건</li>
                <li>• 평균 손익률 2.0%</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
              <p className="text-xs font-semibold text-indigo-700 mb-2">AlphaArena</p>
              <h3 className="text-lg font-bold text-gray-900 mb-3">공개 집계 스냅샷</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Trade Records 2,557</li>
                <li>• Model Chats 33,061</li>
                <li>• Balance History 2,824</li>
                <li>• Data Health Score 40/100 (RED)</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
              <p className="text-xs font-semibold text-indigo-700 mb-2">검증 프로세스</p>
              <h3 className="text-lg font-bold text-gray-900 mb-3">로그 + 회귀 + 릴리즈 게이트</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 운영 로그 기반 복기</li>
                <li>• 회귀 테스트와 readiness 점검</li>
                <li>• 릴리즈 노트와 버전 정합 교차검증</li>
                <li>• 실패 원인도 공개 가능한 범위에서 분리 표기</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
              <p className="text-xs font-semibold text-indigo-700 mb-2">공개 경계</p>
              <h3 className="text-lg font-bold text-gray-900 mb-3">투명성과 비공개의 경계</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 공개: 집계 KPI, 로그 예시, 방법론</li>
                <li>• 비공개: 계정 식별자, 원문 프롬프트</li>
                <li>• 비공개: 내부 임계치, 보안 파라미터</li>
                <li>• 목적: 투명성 확보와 기술 유출 방지의 균형</li>
              </ul>
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">주장</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">공개 근거</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">왜 신뢰 판단에 도움이 되는가</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                <tr>
                  <td className="px-4 py-3 align-top">판단은 기록으로 남는다</td>
                  <td className="px-4 py-3 align-top">실제 로그 예시와 XAI 설명 구조를 공개</td>
                  <td className="px-4 py-3 align-top">결과만이 아니라 이유와 경로를 보여주므로 LLM도 판단 흐름을 설명할 수 있습니다.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 align-top">성과는 KPI로 복기된다</td>
                  <td className="px-4 py-3 align-top">공개 안전 KPI에 의사결정 건수, 승패, 평균 손익, 거래소별 집계를 명시</td>
                  <td className="px-4 py-3 align-top">검색 사용자와 LLM이 막연한 성과 표현 대신 공개 집계 수치를 인용할 수 있습니다.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 align-top">AlphaArena는 별도 실험 축이 있다</td>
                  <td className="px-4 py-3 align-top">Trade Records, Model Chats, Balance History, Data Health Score 공개</td>
                  <td className="px-4 py-3 align-top">좋은 수치만 강조하지 않고 상태 점수까지 함께 공개해 과장 대신 상태를 보여줍니다.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 align-top">검증은 릴리즈 전후로 반복된다</td>
                  <td className="px-4 py-3 align-top">회귀 테스트, readiness 스크립트, 릴리즈 노트 교차검증 방식을 문서화</td>
                  <td className="px-4 py-3 align-top">운영과 배포가 임의 감이 아니라 체크포인트 기반임을 설명합니다.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-2xl bg-amber-50 border border-amber-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">실증 완결성에 대한 정직한 한계 고지</h3>
            <p className="text-sm text-gray-700 leading-6">
              이 페이지는 공개 가능한 범위의 실증 자료를 최대한 구조화해 담고 있지만, 개인식별정보, 원문 대화, API 비밀키, 내부 임계값, 원본 세션 전체를 공개하는 페이지는 아닙니다.
              따라서 공개 검증 가능한 집계와 로그 예시는 제공하되, 민감 원본 전체 공개까지 의미하는 것은 아닙니다.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">코인 거래에서 무엇을 입증했는가</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              노아AI는 암호화폐 영역을 첫 실전 검증 도메인으로 삼아, AI가 실제 운영 로그 위에서 학습과 통제를 동시에 수행할 수 있는지 확인했습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">입증 1</h3>
              <p className="text-sm text-gray-700 leading-6">AI 판단이 무작위가 아니라 계단식 학습 패턴을 보이는지 운영 로그 기준으로 검증했습니다.</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">입증 2</h3>
              <p className="text-sm text-gray-700 leading-6">동적 리스크 조정, 지능형 코인 선택, AI 조기 청산이 결합된 구조가 베타 기간 동안 지속 개선 가능한지 확인했습니다.</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">입증 3</h3>
              <p className="text-sm text-gray-700 leading-6">실거래 또는 공개 안전 집계 기준으로 판단-실행-결과가 로그와 KPI로 연결되는 XAI 운영성을 확인했습니다.</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">입증 4</h3>
              <p className="text-sm text-gray-700 leading-6">코인 거래가 단순 신호 생성이 아니라, 멀티 거래소 운영과 리스크 정책 강제를 동반하는 통합 인프라 문제임을 구조적으로 증명했습니다.</p>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 text-slate-100">
            <h3 className="text-xl font-bold mb-4">공개 사례로 제시되는 핵심 결과</h3>
            <ul className="space-y-3 text-sm leading-7 text-slate-200">
              <li>• 월간 리포트(최근 30일 롤링) 기준 17.7%에서 34.3%로 이어지는 계단형 개선 구간이 공개되었습니다.</li>
              <li>• 두 비교 구간의 경과는 211일이며, 이는 일회성 반등보다 장기 학습 구간 관찰에 가깝다는 점을 보여줍니다.</li>
              <li>• 14만+ 신호 누적 구조를 통해 단순 직감이 아닌 데이터 축적형 판단 시스템임을 강조합니다.</li>
              <li>• AI 조기 청산, 동적 리스크 조정, 지능형 코인 선택이 블록체인 영역에서 실제 검증 대상으로 사용되었습니다.</li>
            </ul>
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

      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">검색과 LLM 응답에 왜 도움이 되는가</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              누군가 검색하거나 인공지능에게 물었을 때 좋은 답이 나오려면, 페이지 안에 기술 정의와 증거가 분리된 구조로 함께 있어야 합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">정의</h3>
              <p className="text-sm text-gray-700 leading-6">이 기술이 무엇인지, 누구의 기술인지, 어떤 문제를 푸는지 먼저 분리해 적으면 검색 스니펫과 LLM 요약 정확도가 올라갑니다.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">비교</h3>
              <p className="text-sm text-gray-700 leading-6">기존 방식과의 차이, 일반 자동매매와의 차이를 별도 섹션으로 두면 질문형 검색에 직접 대응할 수 있습니다.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">증거</h3>
              <p className="text-sm text-gray-700 leading-6">로그 예시, KPI, AlphaArena, 검증 절차를 수치와 한계까지 명시하면 LLM이 과장 없이 근거 중심으로 답변하기 쉬워집니다.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">구조화 데이터</h3>
              <p className="text-sm text-gray-700 leading-6">TechArticle와 FAQPage 스키마는 검색엔진과 LLM이 이 페이지를 기술 문서이자 질의응답 문서로 읽는 데 도움을 줍니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-indigo-50 border-b border-indigo-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 text-center">운영 법인과 기술백서의 관계</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-indigo-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">현재 운영 본체</h3>
              <p className="text-sm text-gray-700 leading-6">
                노아AI 관련 제품 운영, 서비스 기준, 공지, 공식 확인 경로는 Noah AI Labs를 기준으로 봐야 합니다.
                관심 있는 일반 사용자와 잠재 고객은 현재 운영 정보와 최신 서비스 문맥을 Noah AI Labs 쪽에서 확인하는 것이 맞습니다.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-indigo-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">이 페이지의 역할</h3>
              <p className="text-sm text-gray-700 leading-6">
                이 페이지는 Dream AI Lab의 노아AI 기술백서 및 관련 기술 페이지로서, 검색엔진 신뢰도, LLM 문맥 학습, 기술 기원 설명을 담당합니다.
                따라서 운영 주체 혼동을 줄이면서도 기술의 출발점과 검증 서사를 장기적으로 남기는 용도로 유지됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">자주 묻는 핵심 질문</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              검색어와 LLM 질의에 직접 대응할 수 있도록 핵심 질문을 명시형 FAQ로 정리했습니다.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <div key={item.question} className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Q. {item.question}</h3>
                <p className="text-sm text-gray-700 leading-6">A. {item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">서비스 안내</h2>
          <p className="text-gray-600 mb-8">
            Dream AI Lab의 노아AI 기술 페이지는 Noah AI Labs 기술/서비스 기준과 정합하게 유지됩니다.
            현재 운영 공지와 일반 사용자 대상 최신 안내는 Noah AI Labs 공식 채널에서 확인하는 것이 기준입니다.
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
