import type { Metadata } from 'next'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import Head from 'next/head'

export const metadata: Metadata = {
  title: '노아AI — 세계 최초 AI 자율 재테크 플랫폼 | AlphaArena 모드 | DreamAILab',
  description: 'DAL이 개발한 세계 최초 실시간 AI 학습형 재테크 어시스턴트. AlphaArena(알파아레나) 모드로 DeepSeek V3.1(+68.14%), GPT-4o, Claude Sonnet 4.5 등 AI 엔진 간 실제 거래 대결 비교. nof1.ai 영감을 받은 혁신적 AI 엔진 대결 시스템. BTC, ETH, SOL, XRP, DOGE, BNB 6개 코인 고정 거래. 의료 AI 기술을 금융에 적용한 혁신적 시스템으로 다양한 거래소 동시 운영, 강화학습 기반 자율 거래, XAI 투명성 보장.',
  keywords: [
    '노아AI','세계최초','AI 자율재테크','강화학습','실시간학습',
    'XAI','설명가능한AI','멀티거래소','다양한거래소동시운영',
    '의료AI금융적용','DAL','드림에이아이랩','정해성',
    'AI디지털케어로그','트레이딩케어로그','자율의사결정',
    '바이낸스','업비트','빗썸','바이빗','OKX','비트겟',
    '투명성','검증가능','실거래로그','패턴학습',
    '노아AI 기술백서','AI 트레이딩 엔진','멀티모달 AI 분석',
    '실시간 강화학습','동적 임계값','거래 파이프라인',
    'AI 학습 데이터','투명성 정책','기술 아키텍처',
    'AlphaArena','알파아레나','alphaarena','AI 엔진 대결',
    'AI 거래 대결','DeepSeek 트레이딩','DeepSeek V3.1','GPT-4o 트레이딩',
    'Claude 트레이딩','AI 트레이딩 비교','AI 엔진 성능 비교',
    '암호화폐 AI 거래','코인 AI 자동매매','AI 자동거래 비교',
    'nof1.ai','Alpha Arena','AI 실전 거래','AI 엔진 벤치마크',
    'DeepSeek 68퍼센트','AI 트레이딩 대결','AI 자율 거래 모드',
    'BTC ETH SOL AI 거래','메이저 코인 AI 거래','AI 엔진 선택',
    'Gemini 트레이딩','Grok 트레이딩','Qwen 트레이딩'
  ],
}

export default function FinanceService() {
  const features = [
    {
      title: '세계 최초 실시간 AI 학습형 재테크 어시스턴트',
      description: '거래할수록 더 똑똑해지는 진화형 AI 시스템. 매 거래마다 학습하여 성능을 지속적으로 개선하는 강화학습 기반 자율 거래',
      icon: '🧠'
    },
    {
      title: '의료 AI 기술의 금융 적용',
      description: 'DAL의 검증된 AI 디지털케어로그 기술을 금융 트레이딩에 적용. 환자 생체신호 분석 → 시장 데이터 분석으로 기술 전이',
      icon: '🏥'
    },
    {
      title: '다양한 거래소 통합 운영 시스템',
      description: '바이낸스·바이비트·OKX·비트겟·업비트·빗썸 등 주요 거래소를 동시에 운영하며 리스크 분산과 수익 기회 확대. 앞으로 더 많은 거래소 지원 예정',
      icon: '🌐'
    },
    {
      title: '멀티모달 AI 분석 엔진',
      description: '차트 이미지·수치 데이터·심리 데이터를 통합 분석. 텍스트·숫자·패턴 데이터를 융합 처리하는 고급 AI 시스템',
      icon: '📊'
    },
    {
      title: '실시간 강화학습 시스템',
      description: '거래 결과를 보상/패널티로 학습. 성공 패턴 강화, 실패 패턴 약화, 시장 변화에 실시간 적응하는 동적 시스템',
      icon: '🔄'
    },
    {
      title: '초단위 실시간 거래 시스템',
      description: '5-10초 간격으로 시장 분석·신호 생성·거래 실행. WebSocket 최적화로 46초 지연 문제 해결, 즉시 시작 가능',
      icon: '⚡'
    },
    {
      title: 'XAI(설명 가능한 AI) 철학',
      description: '모든 거래 결정 과정을 투명하게 공개. 실시간 로그, AI 호출 기록, 학습 데이터를 로컬에 저장하여 검증 가능',
      icon: '🔍'
    },
    {
      title: '투자 케어로그 표준화',
      description: '거래·포지션·리스크 지표를 표준 스키마로 기록. 개인별 맞춤형 분석과 모델 개선에 활용하는 데이터 자산화',
      icon: '🗂️'
    },
    {
      title: '자연어 대화 인터페이스',
      description: '"더 보수적으로 거래해줘" 같은 일상 대화로 설정 조정. 복잡한 파라미터 설정 없이 AI와 자연스럽게 소통',
      icon: '💬'
    },
    {
      title: '감정 없는 냉정한 판단',
      description: '인간의 공포/욕심 없이 순수 데이터 기반 거래. AI가 인간의 감정적 판단을 대체하는 합리적 의사결정 시스템',
      icon: '🎯'
    }
  ]

  const tradingVersions = [
    {
      name: '현재 지원 거래소',
      description: '세계 주요 거래소 동시 연동 및 독립 운영 (확장 예정)',
      icon: '🏦',
      features: [
        '바이낸스 (선물/현물 · 완전 연동)',
        '바이비트 · OKX · 비트겟 (선물 · 연동 중)',
        '업비트 · 빗썸 (현물 · 읽기 전용 분석)',
        '거래소별 독립 모니터링 스레드',
        '앞으로 더 많은 거래소 지원 예정'
      ]
    },
    {
      name: 'AI 기술 아키텍처',
      description: 'DAL의 의료 AI 기술을 금융에 적용한 혁신적 시스템',
      icon: '🧠',
      features: [
        'AI 디지털케어로그 → 트레이딩 케어로그 기술 전이',
        '강화학습 기반 실시간 패턴 인식',
        '멀티모달 데이터 융합 분석',
        'XAI(설명 가능한 AI) 투명성 보장',
        '실시간 학습 및 적응 시스템'
      ]
    }
  ]

  const howToUse = [
    {
      step: '01',
      title: '앱 실행 및 로그인',
      description: 'AITrading.exe 실행 후 사용자 계정으로 로그인. 대시보드에서 거래소 선택 및 API 키 설정'
    },
    {
      step: '02',
      title: 'AI 시스템 활성화',
      description: 'OpenAI API 키 입력으로 AI 기능 활성화. 초기 학습 단계(1-2주) 후 자체 AI 엔진으로 저비용 운영'
    },
    {
      step: '03',
      title: '자동거래 시작',
      description: '"▶️ 모두 시작" 버튼으로 선택한 거래소들을 동시 시작. AI가 자동으로 시장 분석·코인 선정·거래 실행'
    },
    {
      step: '04',
      title: 'AI 어시스턴트와 대화',
      description: '"더 보수적으로 거래해줘" 같은 자연어로 설정 조정. 실시간 로그로 모든 거래 과정 투명하게 확인'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
          <script type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: '노아AI (NoahAI)',
              applicationCategory: 'FinanceApplication',
              operatingSystem: 'Windows, macOS',
              description: 'DAL이 개발한 세계 최초 실시간 AI 학습형 재테크 어시스턴트. 의료 AI 기술을 금융에 적용한 혁신적 시스템으로 다양한 거래소 동시 운영, 강화학습 기반 자율 거래, XAI 투명성 보장.',
              url: 'https://noahai.net',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
              publisher: { '@type': 'Organization', name: 'DreamAILab' }
            }) }} />
          <script type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              'mainEntity': [
                {
                  '@type': 'Question',
                  'name': '노아AI는 투자자문 서비스인가요?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': '아닙니다. 노아AI는 리서치·분석 도구이며 투자자문이나 중개를 제공하지 않습니다. 정보는 참고용이며 최종 투자 결정과 결과는 이용자 책임입니다.'
                  }
                },
                {
                  '@type': 'Question',
                  'name': '자동매매 기능이 포함되어 있나요?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': '자동매매는 별도 클라이언트(베타)에서만 사용 가능하며 고위험입니다. 사용에 따른 모든 손실과 규제·세무 준수는 이용자 책임입니다.'
                  }
                },
                {
                  '@type': 'Question',
                  'name': '거래소 API 키는 안전한가요?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': '분석 목적의 읽기 전용 권한만 사용하며, 출금/주문 권한은 사용하지 않습니다. 키 보안 정책을 준수합니다.'
                  }
                },
                {
                  '@type': 'Question',
                  'name': '강화학습과 케어로그는 어떻게 동작하나요?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': '사용자 옵트인 시 익명화·비식별화된 거래/성과 로그를 표준 스키마로 수집하여 개인화 모델과 전략 정책을 점진적으로 개선합니다. 언제든 수집을 해제할 수 있습니다.'
                  }
                },
                {
                  '@type': 'Question',
                  'name': 'AlphaArena 모드란 무엇인가요? 알파아레나는 어떻게 사용하나요?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'AlphaArena(알파아레나)는 노아AI의 AI 엔진 실전 거래 대결 모드입니다. DeepSeek V3.1(+68.14%), GPT-4o, Claude Sonnet 4.5 등 여러 AI 엔진이 동일 조건에서 실제 시장에서 거래하며, 각 AI의 판단력, 리스크 관리, 타이밍 능력을 실시간으로 비교할 수 있습니다. 6개 메이저 코인(BTC, ETH, SOL, XRP, DOGE, BNB)에서 각 AI 엔진의 성능을 투명한 로그로 확인할 수 있습니다. nof1.ai의 Alpha Arena 프로젝트에서 영감을 받아 구현되었습니다.'
                  }
                },
                {
                  '@type': 'Question',
                  'name': 'AlphaArena 모드에서 어떤 AI 엔진을 선택해야 하나요?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'nof1.ai 실험 결과 DeepSeek Chat V3.1이 3일 만에 +68.14% 수익률을 달성하여 가장 높은 성과를 보였습니다. 그 외 GPT-4o, Claude Sonnet 4.5, Gemini 2.5 Pro, Grok 4, Qwen3 Max 등도 지원됩니다. 시장 상황에 따라 다르므로 여러 엔진을 비교 테스트해보는 것을 권장합니다.'
                  }
                },
                {
                  '@type': 'Question',
                  'name': 'AlphaArena 모드에서 어떤 코인을 거래하나요?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'AlphaArena 모드는 고정된 6개 메이저 코인만 거래합니다: BTC(비트코인), ETH(이더리움), SOL(솔라나), XRP(리플), DOGE(도지코인), BNB(바이낸스 코인). AI가 매 틱마다 이 6개 코인을 분석하여 진입/청산/보유를 결정합니다.'
                  }
                },
                {
                  '@type': 'Question',
                  'name': 'AlphaArena 모드는 위험한가요?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'AlphaArena 모드는 10~20배 레버리지를 사용하는 고위험 모드입니다. 손실 위험이 크므로 감당 가능한 자금만 사용해야 합니다. 모든 포지션은 TP(익절)와 SL(손절)이 필수이며, 손절매 제거가 금지됩니다. 처음에는 소액으로 시작하여 AI의 판단 과정을 관찰하고 학습하는 것을 권장합니다.'
                  }
                }
              ]
            }) }} />
        </Head>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold mb-6">
              🌟 세계 최초 AI 자율 재테크 플랫폼
            </div>
            <div className="text-6xl mb-6">📈</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">노아AI | AI가 사용자를 대신해 자산을 운용하는 재테크 어시스턴트</h1>
            <p className="text-lg md:text-xl mb-3 max-w-3xl mx-auto text-indigo-100">
              DAL의 의료 AI 기술을 금융에 적용한 혁신적 시스템 · 다양한 거래소 동시 운영 · 실시간 강화학습
            </p>
            <p className="text-lg max-w-2xl mx-auto text-indigo-100">
              XAI(설명 가능한 AI) 철학으로 모든 거래 결정 과정을 투명하게 공개 · 검증 가능한 실거래 로그 · AlphaArena 모드로 AI 엔진 간 실전 대결 비교
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                세계 최초 AI 자율 재테크 플랫폼
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                노아AI는 DAL(드림에이아이랩)이 개발한 <strong>세계 최초 실시간 AI 학습형 재테크 어시스턴트</strong>입니다. 
                단순한 자동매매 봇이 아닌, AI가 사용자를 대신해 자산을 분석·투자·운용하는 자율형 재테크 플랫폼입니다.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                DAL의 검증된 <strong>AI 디지털케어로그 기술</strong>을 금융 트레이딩에 적용했습니다. 
                환자 생체신호 분석 → 시장 데이터 분석, 치료 패턴 예측 → 거래 패턴 예측으로 기술을 전이하여 
                <strong>의료급 정확도로 금융 분석</strong>을 수행합니다.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                <strong>다양한 거래소 통합 운영</strong>으로 리스크를 분산하고 수익 기회를 확대합니다. 
                바이낸스·바이비트·OKX·비트겟·업비트·빗썸 등 주요 거래소를 동시에 운영하며, 
                <strong>실시간 강화학습</strong>으로 매 거래마다 성능을 개선합니다.
              </p>
              <p className="text-lg text-gray-600">
                <strong>XAI(설명 가능한 AI) 철학</strong>을 핵심으로 모든 거래 결정 과정을 투명하게 공개합니다. 
                실시간 로그, AI 호출 기록, 학습 데이터를 로컬에 저장하여 언제든 검증 가능합니다. 
                사용자 동의(옵트인) 시 익명화·비식별화된 투자 케어로그를 수집해 모델을 개선하고 개인화 정확도를 높입니다.
              </p>
              <p className="text-lg text-gray-600 mt-6">
                트레이딩 클라이언트(별도 앱, 베타)는 숙련 투자자 대상 옵션입니다. 
                자동매매 사용 시 고위험이며, 모든 손실은 이용자 본인 책임입니다.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">📈</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI 기반 재테크 분석</h3>
                  <p className="text-gray-600 mb-6">
                    다중 거래소·자산 데이터 융합
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-indigo-600">24/7</div>
                      <div className="text-gray-600">시장 모니터링</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">XAI</div>
                      <div className="text-gray-600">설명 가능한 인사이트</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's New */}
      <section id="whats-new" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">최근 업데이트 (2025 Q3–Q4)</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">사용자 피드백과 실거래 로그를 바탕으로 분석·시그널·성능을 대폭 개선했습니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">실질 수익률 모델 고도화</h3>
              <p className="text-gray-600">슬리피지·수수료·미실현손익을 반영한 전략 성과 평가 및 청산 기준 시뮬레이션을 개선.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">500+ 코인 24/7 감시</h3>
              <p className="text-gray-600">초단위 데이터 수집 파이프라인 최적화 및 급변 구간 탐지 민감도 향상.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">전략·시그널 엔진</h3>
              <p className="text-gray-600">추세/역추세/모멘텀 신호와 리스크 가이드를 통합, 시나리오 기반 설명(XAI) 추가.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">로그/모니터링 인프라</h3>
              <p className="text-gray-600">통합 로거·대시보드 개선으로 오류 진단 및 실시간 상태 가시성 강화.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">트레이딩 클라이언트(베타)</h3>
              <p className="text-gray-600">별도 앱으로 제공. 고위험 상품이며 자동매매 사용은 전적으로 이용자 책임.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">국내외 API 연동 확대</h3>
              <p className="text-gray-600">바이낸스·바이빗·비트겟 우선, 업비트·빗썸 읽기 전용, 증권사 API 테스트 진행.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">차트 이미지 분석</h3>
              <p className="text-gray-600">캔들/패턴/지지·저항 자동 인식 결과를 리포트 및 설명(XAI)에 반영.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">강화학습 루프(옵트인)</h3>
              <p className="text-gray-600">실거래 로그 기반 보상 설계를 개선해 전략 정책 업데이트 효율 향상.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">AlphaArena 모드 추가 (알파아레나)</h3>
              <p className="text-gray-600">
                AlphaArena(알파아레나)는 최고 수준의 AI 엔진들이 실제 시장에서 거래 능력을 겨루는 'AI 엔진 대결 모드'입니다. 
                DeepSeek, GPT-4o, Claude 등 다양한 AI의 판단력을 실시간 비교하며 거래 전략을 학습할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              주요 기능
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              노아AI가 제공하는 분석·리서치 기능입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              연동 자산·거래소
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              단일 시스템으로 코인·주식·선물 등 다양한 자산과 국내외 거래소를 읽기 전용 API로 연동해 분석합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tradingVersions.map((type, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{type.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.name}</h3>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                </div>
                <div className="space-y-3">
                  {type.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <span className="text-indigo-500 mr-3">•</span>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Optimization Loop */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">AI 최적화 루프</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Record → Normalize → Insight → Policy → Risk → Feedback → XAI로 이어지는 7단계 자동 최적화 파이프라인</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">1) Record</h3>
              <p className="text-gray-600">시세·체결·오더북·계정 로그를 5–10초 주기로 수집</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">2) Normalize</h3>
              <p className="text-gray-600">거래소별 심볼/수수료/틱 규칙을 표준 스키마로 정규화</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">3) Insight</h3>
              <p className="text-gray-600">추세·모멘텀·변동성 팩터 + 차트 이미지 인식으로 국면 판단</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">4) Policy</h3>
              <p className="text-gray-600">전략 가중·진입/보류/청산 규칙과 시나리오 기반 가이드 생성</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">5) Risk</h3>
              <p className="text-gray-600">슬리피지·수수료·최대낙폭·노출 한도로 방어 라인 설정</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">6) Feedback</h3>
              <p className="text-gray-600">실거래 PnL/실질수익률·슬리피지 피드백으로 보상 설계</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm lg:col-span-3">
              <h3 className="text-lg font-bold text-gray-900 mb-2">7) XAI</h3>
              <p className="text-gray-600">‘왜 이 신호인가’를 지표/패턴/시나리오 근거와 함께 설명</p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Carelog & Improvement Loop */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              데이터 케어로그 &amp; 개선 루프 (옵트인)
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              표준화된 투자 케어로그로 개인화 정확도를 높이고, 집단 지혜로 모델을 지속 개선합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">표준 스키마</h3>
              <p className="text-gray-600">거래·포지션·리스크 지표를 공통 포맷으로 기록하여 분석 가능성을 극대화합니다.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">익명화·비식별화</h3>
              <p className="text-gray-600">개인 식별 정보 없이 집계·학습에 활용되며, 사용자는 언제든 수집을 해제할 수 있습니다.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">개인화 향상</h3>
              <p className="text-gray-600">사용자별 성향·습관을 반영해 전략 아이디어와 리스크 가이드를 더 정밀하게 제안합니다.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">규모의 지혜</h3>
              <p className="text-gray-600">수백→수천→수만 사용자 데이터가 쌓일수록 시장 국면 분류와 이상 징후 탐지가 고도화됩니다.</p>
            </div>
          </div>
        </div>
      </section>


      {/* 기술적 혁신과 아키텍처 공개 */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              DAL이 직접 고안한 개념: AI가 사람을 대신해 자산을 운용하는 시스템
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              DAL이 세계 최초로 구현한 실시간 AI 학습형 재테크 어시스턴트의 실제 아키텍처와 거래 과정을 투명하게 공개합니다
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* 핵심 혁신 개념 */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">💡 세계 최초 개념</h3>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-3">AI 자율 재테크 어시스턴트</h4>
                <p className="text-gray-600 mb-3">인공지능이 사용자를 대신해 자산을 분석·투자·운용하는 시스템</p>
                <div className="text-sm text-gray-500">
                  <strong>기존:</strong> 사람이 직접 투자 결정<br/>
                  <strong>노아AI:</strong> AI가 인간의 감정을 대체하여 합리적 자산 운용
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-3">의료 AI → 금융 AI 기술 전이</h4>
                <p className="text-gray-600 mb-3">DAL의 검증된 AI 디지털케어로그 기술을 금융에 적용</p>
                <div className="text-sm text-gray-500">
                  환자 생체신호 분석 → 시장 데이터 분석<br/>
                  치료 패턴 예측 → 거래 패턴 예측<br/>
                  개인 맞춤 치료 → 개인 맞춤 거래
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-3">실시간 강화학습 시스템</h4>
                <p className="text-gray-600 mb-3">매 거래마다 학습하여 성능을 지속적으로 개선하는 진화형 AI</p>
                <div className="text-sm text-gray-500">
                  거래 결과 → 보상/패널티 신호<br/>
                  성공 패턴 강화, 실패 패턴 약화<br/>
                  시장 변화에 실시간 적응
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-3">멀티모달 AI 분석</h4>
                <p className="text-gray-600 mb-3">차트 이미지·수치 데이터·심리 데이터를 통합 분석</p>
                <div className="text-sm text-gray-500">
                  <strong>차트 이미지:</strong> 기술적 분석을 위한 시각적 패턴<br/>
                  <strong>수치 데이터:</strong> 가격, 거래량, 변동성 등 정량적 지표<br/>
                  <strong>심리 데이터:</strong> 시장 공포/탐욕 지수, 펀딩비 등 정성적 지표
                </div>
              </div>
            </div>

            {/* 시스템 아키텍처 */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🏗️ 시스템 아키텍처</h3>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-4">전체 시스템 구성도</h4>
                <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm">
                  <div>┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐</div>
                  <div>│   UI Dashboard  │◄──►│   Main Core     │◄──►│  UnifiedTrader  │</div>
                  <div>│  (Modern UI)    │    │  (Controller)   │    │ (Trading Engine)│</div>
                  <div>└─────────────────┘    └─────────────────┘    └─────────────────┘</div>
                  <div>         │                       │                       │</div>
                  <div>         ▼                       ▼                       ▼</div>
                  <div>┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐</div>
                  <div>│  AI Manager     │◄──►│   Evaluator     │◄──►│    Recorder     │</div>
                  <div>│ (AI Learning)   │    │ (Coin Selection)│    │ (Data Storage)  │</div>
                  <div>└─────────────────┘    └─────────────────┘    └─────────────────┘</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-3">핵심 모듈 역할 (v3.8.8.3)</h4>
                <div className="bg-black rounded-lg p-4 text-green-400 font-mono text-sm">
                  <div><strong>main.py:</strong> 메인 애플리케이션 진입점, 거래소별 라우팅</div>
                  <div><strong>trader.py:</strong> 바이낸스 전용 거래 엔진 (python-binance)</div>
                  <div><strong>unified_trader.py:</strong> CCXT 거래소 통합 거래 엔진</div>
                  <div><strong>analyzer.py:</strong> 시장 분석 및 AI 신호 생성</div>
                  <div><strong>evaluator.py:</strong> 코인 선정 알고리즘 (5가지 차원 종합 점수)</div>
                  <div><strong>ai_manager.py:</strong> AI 학습 및 패턴 강화</div>
                  <div><strong>recorder.py:</strong> 거래 기록 및 통계 관리</div>
                  <div><strong>exchange_manager.py:</strong> 거래소 통합 관리 및 잔고 조회</div>
                  <div><strong>unified_trading_manager.py:</strong> CCXT 거래소 통합 관리</div>
                  <div><strong>api/binance_client.py:</strong> 바이낸스 API 클라이언트 (WebSocket 포함)</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-3">거래소별 구조 차이</h4>
                <div className="space-y-3 text-sm">
                  <div><strong>바이낸스 전용 경로:</strong></div>
                  <div className="bg-gray-900 rounded p-2 text-green-400 font-mono text-xs">
                    main.py → trader.py → api/binance_client.py → 바이낸스 API
                  </div>
                  <div><strong>CCXT 거래소 전용 경로:</strong></div>
                  <div className="bg-gray-900 rounded p-2 text-green-400 font-mono text-xs">
                    main.py → unified_trader.py → CCXT 어댑터 → 각 거래소 API
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI 학습 데이터 스키마 & XAI 모듈 (백서 반영) */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">AI 학습 데이터 스키마 & XAI 모듈</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              기술백서의 정의를 요약해 학습 데이터 구조와 설명 가능한 의사결정(XAI) 방식을 명확히 공개합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 학습 데이터 스키마 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">학습 데이터 스키마 (ai_learning_data)</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li><strong>signal_history</strong>: 신호/결과 타임라인(진입·청산·PnL·슬리피지 포함)</li>
                <li><strong>pattern_analysis</strong>: 패턴 유형·유사도 임계치·컨텍스트(추세/변동성 등)</li>
                <li><strong>dynamic_thresholds</strong>: confid/volatility 등 동적 임계값(시장 상태별 자동 조정)</li>
                <li><strong>performance_metrics</strong>: 실질 수익률, MDD, 승률, 기대값, 체결 품질(수수료·슬리피지 반영)</li>
                <li><strong>exchange_specific</strong>: 거래소별 분리 저장(예: binance/bybit/okx 별 학습 버킷)</li>
                <li><strong>persistence</strong>: 로컬 영구 저장 및 재시작 후 복원(옵트인 시 집단 익명 집계 병행)</li>
              </ul>
            </div>

            {/* XAI 투명성 원칙 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">XAI 투명성 모듈</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li><strong>근거 설명</strong>: 신호 생성 시 사용된 지표·패턴·정책 가중치와 임계값을 근거로 제시</li>
                <li><strong>버전 추적</strong>: 모델/정책 버전·파라미터 해시·데이터 해시를 기록해 재현성 보장</li>
                <li><strong>의사결정 트레이스</strong>: [analysis]→[trade]→[order]→[monitor]→[exit] 풀 체인 로깅</li>
                <li><strong>로컬 보존</strong>: 모든 AI 호출·결정 로그를 로컬 저장(사용자 검증·내부감사 용이)</li>
                <li><strong>프롬프트 감사</strong>: 주요 질의/응답 요약 및 핵심 토큰 스냅샷 보관(민감정보 비식별화)</li>
              </ul>
            </div>

            {/* 로그 카테고리 & 예시 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">로그 카테고리 & 검증 예시</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li><strong>[analysis]</strong>: 팩터·지표·이미지 추론 요약, 시장 국면 판단</li>
                <li><strong>[trade]</strong>: LONG/SHORT/HOLD 결정, 신뢰도·근거 지표</li>
                <li><strong>[order]</strong>: 주문 파라미터·TP/SL 설정(workingType·틱 규칙 준수)</li>
                <li><strong>[monitor]</strong>: 포지션 상태·리스크 한도·슬리피지 관측</li>
                <li><strong>[exit]</strong>: 청산 사유·실질 수익률·보상 신호 반영 결과</li>
              </ul>
              <p className="text-gray-500 text-xs mt-4">
                ※ 모든 로그는 사용자 로컬에 저장되며, 옵트인 시 익명·비식별화되어 집단 학습에 사용됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI 거래 파이프라인 */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI가 어떻게 거래를 수행하는가? - 실제 거래 과정 공개
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              시장 분석부터 거래 실행까지 모든 과정이 실시간 로그로 기록되어 투명하게 공개됩니다
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 거래 파이프라인 */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🔄 AI 거래 파이프라인</h3>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-4">전체 거래 프로세스 (10초마다 반복)</h4>
                <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm">
                  <div>시작 → 시장 분석 → 코인 선정 → 신호 생성 → 거래 실행 → 모니터링 → 청산 → 학습 → DB 저장</div>
                  <div>  ↑                                                                                    ↓</div>
                  <div>  └─────────────────────── 실시간 피드백 루프 ──────────────────────────────────────┘</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4">
                  <h5 className="font-bold text-gray-900 mb-2">1. 시장 분석 단계</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 실시간 가격, 거래량, 변동성 수집</li>
                    <li>• 기술적 지표 계산 (RSI, MACD, 볼린저 밴드, 이동평균)</li>
                    <li>• 시장 심리 분석 (공포/탐욕 지수)</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4">
                  <h5 className="font-bold text-gray-900 mb-2">2. 시장판단 및 코인 선택</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 500+ 코인 중 최적 거래 대상 선정</li>
                    <li>• 5가지 차원 종합 점수 평가 (기술적/기본적/시장/리스크/AI)</li>
                    <li>• AI 학습 데이터 기반 패턴 유사성 검증</li>
                    <li>• 동적 임계값으로 진입/청산 시점 결정</li>
                    <li>• 최종 거래선택 결정 (LONG/SHORT/HOLD)</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-4">
                  <h5 className="font-bold text-gray-900 mb-2">3. 거래 실행</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 리스크 관리 검증</li>
                    <li>• AI 진입 전 분석</li>
                    <li>• 포지션 크기 자동 계산</li>
                    <li>• 주문 실행 및 TP/SL 설정</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 실제 로그 예시 */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">📊 실제 거래 로그 (검증 가능)</h3>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-4">실시간 거래 로그 시스템</h4>
                <div className="bg-black rounded-lg p-4 text-green-400 font-mono text-sm">
                  <div>2025-10-20 03:25:00 | INFO - [analysis] 시장 분석 시작 (ex=binance)</div>
                  <div>2025-10-20 03:25:01 | INFO - [trade] ADAUSDT 분석 시작 (ex=binance)</div>
                  <div>2025-10-20 03:25:02 | INFO - [analysis] ADAUSDT RSI: 61.50 (ex=binance)</div>
                  <div>2025-10-20 03:25:03 | INFO - [trade] ADAUSDT 시그널: SHORT (ex=binance)</div>
                  <div>2025-10-20 03:25:04 | INFO - [order] ADAUSDT 거래 실행 시작 (ex=binance)</div>
                  <div>2025-10-20 03:25:05 | INFO - [monitor] ADAUSDT 포지션 모니터링 시작 (ex=binance)</div>
                  <div>2025-10-20 03:25:06 | INFO - [exit] ADAUSDT 익절 청산 완료 (ex=binance)</div>
                </div>
                <p className="text-center text-gray-600 mt-4 text-sm">
                  모든 거래 과정이 실시간 로그로 기록되어 투명하게 공개됩니다
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-3">XAI(설명 가능한 AI) 구현</h4>
                <div className="bg-black rounded-lg p-4 text-green-400 font-mono text-sm">
                  <div><strong>완전한 로그 공개:</strong> [analysis], [trade], [order], [monitor], [exit]</div>
                  <div><strong>AI 결정 과정 투명화:</strong> 신호 생성 근거, 패턴 분석 결과, 동적 임계값</div>
                  <div><strong>실시간 대화 검증:</strong> "왜 그렇게 판단했어?" 질문에 대한 상세 설명</div>
                  <div><strong>검증 가능한 구조:</strong> 모든 AI 호출 기록과 학습 데이터를 로컬에 저장</div>
                  <div><strong>거래소별 분리:</strong> 바이낸스와 CCXT 거래소별 독립적인 학습 데이터 관리</div>
                  <div><strong>실시간 모니터링:</strong> 포지션 모니터링 전용 WebSocket, API 기반 분석으로 성능 최적화</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-3">AI 학습 데이터 구조 (v3.8.8.3)</h4>
                <div className="bg-black rounded-lg p-4 text-green-400 font-mono text-sm">
                  <div>{"{"}</div>
                  <div>  "ai_learning_data": {"{"}</div>
                  <div>    "signal_history": [...],</div>
                  <div>    "pattern_analysis": {"{"}</div>
                  <div>      "similarity_threshold": 0.7,</div>
                  <div>      "pattern_types": ["bullish", "bearish", "sideways"]</div>
                  <div>    {"}"},</div>
                  <div>    "dynamic_thresholds": {"{"}</div>
                  <div>      "confidence_threshold": 0.4,</div>
                  <div>      "volatility_threshold": 0.05</div>
                  <div>    {"}"},</div>
                  <div>    "exchange_specific": {"{"}</div>
                  <div>      "binance": {"{"} "learning_data": {"{"} ... {"}"} {"}"},</div>
                  <div>      "bybit": {"{"} "learning_data": {"{"} ... {"}"} {"}"},</div>
                  <div>      "okx": {"{"} "learning_data": {"{"} ... {"}"} {"}"}</div>
                  <div>    {"}"}</div>
                  <div>  {"}"}</div>
                  <div>{"}"}</div>
                </div>
                <div className="mt-4 space-y-2 text-sm">
                  <div><strong>거래소별 분리:</strong> 각 거래소마다 독립적인 학습 데이터 저장</div>
                  <div><strong>실시간 업데이트:</strong> 매 거래마다 패턴 학습 및 임계값 동적 조정</div>
                  <div><strong>영구 저장:</strong> 앱 재시작 후에도 학습 데이터 유지</div>
                  <div><strong>검증 가능:</strong> 모든 AI 호출 기록을 로컬에 저장하여 외부 검증 가능</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AlphaArena 모드 - 상세 섹션 */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 헤더 */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🏆 AlphaArena 모드 | 알파아레나 - AI 엔진 실전 거래 대결 시스템
            </h2>
            <p className="text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
              AlphaArena(알파아레나)는 최고 수준의 AI 엔진들이 실제 시장에서 거래 능력을 겨루는 혁신적인 거래 모드입니다. 
              nof1.ai의 Alpha Arena 프로젝트에서 영감을 받아, 노아AI에 특별히 구현된 고급 기능입니다.
            </p>
          </div>

          {/* AlphaArena란? */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">🤖 AlphaArena란?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">일반 모드 vs AlphaArena</h4>
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2">일반 모드:</p>
                    <p className="text-gray-600">노아AI의 자체 전략으로 다양한 코인 거래</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="font-semibold text-blue-900 mb-2">AlphaArena:</p>
                    <p className="text-blue-700">순수 AI 엔진의 판단만으로 고정된 6개 코인 거래</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">핵심 특징</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>AI 엔진을 직접 선택 (DeepSeek, GPT-4o, Claude 등)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>고정된 6개 메이저 코인만 거래 (BTC, ETH, SOL, XRP, DOGE, BNB)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>최소한의 프롬프트로 AI의 순수 판단력 테스트</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>실시간 성과 비교 및 학습</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 선택 가능한 AI 엔진 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">🧠 선택 가능한 AI 엔진</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border-2 border-yellow-400 rounded-xl p-6 bg-gradient-to-br from-yellow-50 to-orange-50">
                <div className="flex items-center mb-3">
                  <h4 className="text-lg font-bold text-gray-900">1. DeepSeek Chat V3.1</h4>
                  <span className="ml-2 text-yellow-600">⭐ 추천</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• nof1.ai 실험에서 3일 만에 +68.14% 수익률 달성</li>
                  <li>• 리스크 관리와 타이밍 판단이 뛰어남</li>
                  <li>• 일관성 있는 전략 실행력</li>
                </ul>
              </div>
              <div className="border rounded-xl p-6 bg-gray-50">
                <h4 className="text-lg font-bold text-gray-900 mb-3">2. GPT-4o</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• OpenAI의 최신 멀티모달 AI</li>
                  <li>• 시장 분석과 패턴 인식 능력 우수</li>
                  <li>• 복잡한 시장 상황에서도 안정적인 판단</li>
                </ul>
              </div>
              <div className="border rounded-xl p-6 bg-gray-50">
                <h4 className="text-lg font-bold text-gray-900 mb-3">3. Claude Sonnet 4.5</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Anthropic의 고성능 AI</li>
                  <li>• 리스크 관리에 보수적이고 신중한 접근</li>
                  <li>• 장기적 안정성 중시</li>
                </ul>
              </div>
              <div className="border rounded-xl p-6 bg-gray-50">
                <h4 className="text-lg font-bold text-gray-900 mb-3">4. Gemini 2.5 Pro</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Google의 최신 AI 모델</li>
                  <li>• 다양한 데이터 소스 통합 분석</li>
                  <li>• 실시간 시장 정보 활용</li>
                </ul>
              </div>
              <div className="border rounded-xl p-6 bg-gray-50">
                <h4 className="text-lg font-bold text-gray-900 mb-3">5. Grok 4</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• xAI의 실시간 정보 특화 AI</li>
                  <li>• 최신 뉴스와 트렌드 반영</li>
                  <li>• 빠른 시장 변화 대응</li>
                </ul>
              </div>
              <div className="border rounded-xl p-6 bg-gray-50">
                <h4 className="text-lg font-bold text-gray-900 mb-3">6. Qwen3 Max</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Alibaba의 최신 AI 엔진</li>
                  <li>• 아시아 시장 특화 분석</li>
                  <li>• 높은 데이터 처리 속도</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 거래 방식 및 규칙 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">📊 거래 방식 및 규칙</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">거래 대상 코인 (고정)</h4>
                <div className="grid grid-cols-2 gap-3">
                  {['BTC (비트코인)', 'ETH (이더리움)', 'SOL (솔라나)', 'XRP (리플)', 'DOGE (도지코인)', 'BNB (바이낸스 코인)'].map((coin, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-3 text-center">
                      <span className="text-xl mr-2">🪙</span>
                      <span className="text-sm font-semibold text-gray-700">{coin}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 text-sm mt-4">
                  → 이 6개 코인만 거래하며, AI가 매 틱마다 진입/청산/보유를 결정합니다.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">거래 규칙</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2 font-bold">•</span>
                    <span><strong>초기 자금:</strong> 사용자가 설정한 거래 가능 자금</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2 font-bold">•</span>
                    <span><strong>레버리지:</strong> 10~20배 (AI가 상황에 따라 자동 조절)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2 font-bold">•</span>
                    <span><strong>필수 조건:</strong> 모든 포지션은 TP(익절)와 SL(손절) 포함</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2 font-bold">•</span>
                    <span><strong>손절매 제거 금지:</strong> AI가 리스크 관리를 위해 반드시 SL 유지</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2 font-bold">•</span>
                    <span><strong>무효화 조건:</strong> AI가 판단한 무효화 조건 충족 시 즉시 청산</span>
                  </li>
                </ul>
                <div className="mt-4 bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>AI 판단 주기:</strong> 실시간 시장 데이터 수신 (틱마다) → AI가 6개 코인 모두 분석하여 진입/청산/보유 결정 → 모든 판단 근거와 전략을 로그에 기록
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 실제 사용된 프롬프트 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">🎯 실제 사용된 프롬프트 (nof1.ai 기반)</h3>
            <p className="text-gray-600 mb-4">AlphaArena는 다음과 같은 최소한의 프롬프트만 사용합니다:</p>
            <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm mb-4">
              <div className="space-y-2">
                <div>당신은 자율 거래 에이전트입니다.</div>
                <div>Hyperliquid에서 BTC, ETH, SOL, XRP, DOGE, BNB 영구 계약을 거래하세요.</div>
                <div>시작 자금: $10,000</div>
                <div className="mt-3">모든 포지션은 다음을 포함해야 합니다:</div>
                <div>• 이익 실현 목표 (Take Profit)</div>
                <div>• 손절매 또는 무효화 조건 (Stop Loss)</div>
                <div>• 10배~20배 레버리지 사용</div>
                <div className="mt-3">손절매를 제거하지 말고 다음 형식으로 보고하세요:</div>
                <div>방향 | 코인 | 레버리지 | 명목 | 종료 계획 | 미실현 손익</div>
                <div>무효화 조건이 충족되지 않으면 → 보유</div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              💡 이 최소한의 지침만으로 AI는 진입, 리스크, 타이밍을 스스로 판단해야 합니다 - 마치 인간 트레이더처럼!
            </p>
          </div>

          {/* 성과 비교 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">📈 성과 비교 (nof1.ai 실험 결과 참고)</h3>
            <p className="text-gray-600 mb-6">nof1.ai의 Alpha Arena 실험 결과 (실제 $10,000 자금으로 동일 조건 거래):</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-indigo-600 text-white">
                    <th className="border p-3 text-left">AI 엔진</th>
                    <th className="border p-3 text-right">최종 자금</th>
                    <th className="border p-3 text-right">수익률</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="bg-yellow-50">
                    <td className="border p-3 font-semibold">DeepSeek V3.1 🏆</td>
                    <td className="border p-3 text-right">$16,814</td>
                    <td className="border p-3 text-right text-green-600 font-bold">+68.14%</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Qwen3 Max</td>
                    <td className="border p-3 text-right">$11,847</td>
                    <td className="border p-3 text-right text-green-600">+18.47%</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Claude Sonnet 4.5</td>
                    <td className="border p-3 text-right">$8,764</td>
                    <td className="border p-3 text-right text-red-600">-12.36%</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Grok 4</td>
                    <td className="border p-3 text-right">$5,926</td>
                    <td className="border p-3 text-right text-red-600">-40.73%</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Gemini 2.5 Pro</td>
                    <td className="border p-3 text-right">$4,068</td>
                    <td className="border p-3 text-right text-red-600">-59.32%</td>
                  </tr>
                  <tr>
                    <td className="border p-3">GPT-5</td>
                    <td className="border p-3 text-right">$3,027</td>
                    <td className="border p-3 text-right text-red-600">-69.73%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-3">BTC Buy & Hold</td>
                    <td className="border p-3 text-right">$10,006</td>
                    <td className="border p-3 text-right">+0.06%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 text-sm mt-4">
              💡 DeepSeek Chat V3.1이 압도적인 성과를 보이며, 순수 AI 판단만으로도 시장을 이길 수 있음을 증명했습니다!
            </p>
          </div>

          {/* 사용 방법 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">⚙️ AlphaArena 사용 방법</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">모드 선택</h4>
                    <p className="text-gray-600 text-sm">대시보드 → 설정 → "AlphaArena 모드" 활성화</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">AI 엔진 선택</h4>
                    <p className="text-gray-600 text-sm">DeepSeek Chat V3.1 (추천), GPT-4o, Claude Sonnet 4.5, Gemini 2.5 Pro, Grok 4, Qwen3 Max 중 선택</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">초기 자금 설정</h4>
                    <p className="text-gray-600 text-sm">거래에 사용할 자금을 입력 (예: $10,000)</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">거래 시작</h4>
                    <p className="text-gray-600 text-sm">"시작" 버튼을 누르면 AI가 자율적으로 거래 시작</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">5</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">실시간 모니터링</h4>
                    <p className="text-gray-600 text-sm">대시보드에서 AI의 판단 과정과 거래 내역 확인, 포지션 상태, 수익률, 리스크 실시간 표시, AI의 판단 근거를 로그에서 확인 가능</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 평가 기준 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">🎓 평가 기준</h3>
            <p className="text-gray-600 mb-6">AlphaArena에서 AI는 다음 기준으로 평가됩니다:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">1. 일관성 (Consistency)</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 전략의 반복성과 논리적 연결성</li>
                  <li>• 시장 변화에 따른 전략 유지 능력</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">2. 실행력 (Execution)</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 전략을 실제 거래로 연결하는 능력</li>
                  <li>• 진입/청산 타이밍의 정확성</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">3. 규율 (Discipline)</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 손절매, 레버리지, 포지션 관리</li>
                  <li>• 리스크 통제 능력</li>
                  <li>• 감정 없는 냉정한 판단</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-6">
              💡 단순 수익률이 아닌, 리스크 조정 수익률(risk-adjusted returns)과 트레이더로서의 종합적인 능력을 평가합니다.
            </p>
          </div>

          {/* 주의사항 */}
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-red-900 mb-6">⚠️ 주의사항</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-red-900 mb-3">1. 높은 리스크</h4>
                <p className="text-gray-700 text-sm mb-4">AlphaArena는 10~20배 레버리지를 사용하는 고위험 모드입니다. 손실 위험이 크므로, 반드시 감당 가능한 자금만 사용하세요.</p>
                
                <h4 className="font-bold text-red-900 mb-3">2. 실험적 기능</h4>
                <p className="text-gray-700 text-sm mb-4">AI의 판단이 항상 정확하지는 않습니다. 특히 급격한 시장 변동 시 예상치 못한 손실 가능</p>
                
                <h4 className="font-bold text-red-900 mb-3">3. 자금 관리</h4>
                <p className="text-gray-700 text-sm">초기 자금의 10~20% 정도로 시작하는 것을 권장. 손실 한도를 미리 설정하고 엄격히 지키세요.</p>
              </div>
              <div>
                <h4 className="font-bold text-red-900 mb-3">4. 학습 목적</h4>
                <p className="text-gray-700 text-sm mb-4">처음에는 소액으로 AI의 판단 과정을 관찰하고 학습하세요. 각 AI 엔진의 특징과 성향을 파악한 후 본격 사용</p>
                
                <h4 className="font-bold text-red-900 mb-3">5. 책임</h4>
                <p className="text-gray-700 text-sm">AlphaArena 모드의 모든 거래 결과는 사용자 본인의 책임입니다. AI는 도구일 뿐, 최종 결정은 항상 본인이 해야 합니다.</p>
              </div>
            </div>
          </div>

          {/* 활용 팁 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">💡 활용 팁</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">1. AI 엔진 비교 테스트</h4>
                  <p className="text-gray-600 text-sm">동일한 자금으로 여러 AI 엔진의 성과를 비교해보세요. DeepSeek이 현재 가장 높은 성과를 보이지만, 시장 상황에 따라 다를 수 있습니다.</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">2. 시장 상황별 AI 선택</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• 강세장: 공격적인 GPT-4o 또는 DeepSeek</li>
                    <li>• 약세장: 보수적인 Claude Sonnet</li>
                    <li>• 변동성 높은 장: 빠른 판단의 Grok 4</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">3. 로그 분석</h4>
                  <p className="text-gray-600 text-sm">AI의 판단 근거를 꼼꼼히 읽어보세요. 어떤 상황에서 어떤 결정을 내렸는지 학습하면 트레이딩 실력 향상</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">4. 손절매 존중</h4>
                  <p className="text-gray-600 text-sm">AI가 설정한 손절매를 절대 수동으로 제거하지 마세요. 손절매는 리스크 관리의 핵심입니다.</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">5. 점진적 확대</h4>
                  <p className="text-gray-600 text-sm">소액으로 시작 → 성과 확인 → 점진적으로 자금 증액. 한 번에 큰 금액을 투입하지 마세요.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 향후 계획 */}
          <div className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">🔮 향후 계획</h3>
            <p className="text-indigo-100 mb-6">AlphaArena는 지속적으로 발전할 예정입니다:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold mb-3">✨ 추가 예정 AI 엔진</h4>
                <ul className="text-indigo-100 text-sm space-y-1">
                  <li>• Llama 4</li>
                  <li>• Mistral Large</li>
                  <li>• 기타 최신 AI 모델</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">✨ 향상된 기능</h4>
                <ul className="text-indigo-100 text-sm space-y-1">
                  <li>• AI 엔진 간 실시간 성과 비교 대시보드</li>
                  <li>• 커뮤니티 AI 전략 공유</li>
                  <li>• 백테스팅 시뮬레이션</li>
                  <li>• 클라우드 집단 학습 적용</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">✨ 확장 계획</h4>
                <ul className="text-indigo-100 text-sm space-y-1">
                  <li>• 거래 가능 코인 확대</li>
                  <li>• 주식, 선물 등 다양한 자산으로 확장</li>
                  <li>• 글로벌 시장 지원</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 참고 자료 */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📚 참고 자료</h3>
              <p className="text-gray-600 mb-4">
                AlphaArena는 다음 프로젝트에서 영감을 받았습니다:
              </p>
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">🔗 nof1.ai Alpha Arena</h4>
                <p className="text-gray-600 text-sm mb-4">
                  실제 자금으로 AI 모델의 투자 능력을 검증하는 세계 최초의 벤치마크 실험
                </p>
                <p className="text-gray-700">
                  💡 노아AI는 이 혁신적인 개념을 사용자 친화적인 형태로 구현하여, 
                  누구나 최고 수준의 AI 엔진을 활용한 거래를 경험할 수 있도록 했습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 실제 성과 및 벤치마크 */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              검증 가능한 기술 성과
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              실제 구현된 시스템의 성능 지표와 기술적 성취
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">성능 최적화</h3>
              <p className="text-gray-600 mb-3">99% 초기 로딩 시간 개선</p>
              <div className="text-sm text-gray-500">
                <strong>이전:</strong> 코인 선택 시 46초 지연<br/>
                <strong>현재:</strong> 즉시 시작<br/>
                <strong>기술:</strong> API 기반 분석으로 WebSocket 의존성 제거
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">AI 학습 성과</h3>
              <p className="text-gray-600 mb-3">지속 개선</p>
              <div className="text-sm text-gray-500">
                <strong>초기 승률:</strong> 50% (학습 데이터 없음)<br/>
                <strong>학습 후 승률:</strong> 65-75% (100회 거래 후)<br/>
                <strong>적응성:</strong> 시장 변화에 따른 자동 전략 조정
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">거래소 지원</h3>
              <p className="text-gray-600 mb-3">다양한 거래소</p>
              <div className="text-sm text-gray-500">
                <strong>현재:</strong> 바이낸스, 업비트, 빗썸, 바이빗, OKX, 비트겟<br/>
                <strong>확장 예정:</strong> 주식·증권·ETF·선물·옵션<br/>
                <strong>API 연동:</strong> 증권사 API 테스트 진행 중
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">거래 주기</h3>
              <p className="text-gray-600 mb-3">5-10초 초단위 트레이딩</p>
              <div className="text-sm text-gray-500">
                <strong>응답 속도:</strong> 실시간 시장 변화 대응<br/>
                <strong>안정성:</strong> 99% 이상 시스템 가동률<br/>
                <strong>메모리 효율:</strong> 최적화된 캐싱 시스템
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">실제 거래 로그 예시</h3>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-xs">
              <div>2025-10-20 03:25:00 | INFO - [analysis] 시장 분석 시작 (ex=binance)</div>
              <div>2025-10-20 03:25:01 | INFO - [trade] ADAUSDT 분석 시작 (ex=binance)</div>
              <div>2025-10-20 03:25:02 | INFO - [analysis] ADAUSDT RSI: 61.50 (ex=binance)</div>
              <div>2025-10-20 03:25:03 | INFO - [trade] ADAUSDT 시그널: SHORT (ex=binance)</div>
              <div>2025-10-20 03:25:04 | INFO - [order] ADAUSDT 거래 실행 시작 (ex=binance)</div>
              <div>2025-10-20 03:25:05 | INFO - [monitor] ADAUSDT 포지션 모니터링 시작 (ex=binance)</div>
              <div>2025-10-20 03:25:06 | INFO - [exit] ADAUSDT 익절 청산 완료 (ex=binance)</div>
            </div>
            <p className="text-center text-gray-600 mt-4 text-sm">
              모든 거래 과정이 실시간 로그로 기록되어 투명하게 공개됩니다
            </p>
          </div>
        </div>
      </section>

      {/* B2B 엔터프라이즈 도입 */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              B2B 엔터프라이즈 도입
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              노아AI 분석 엔진을 금융·핀테크·리서치 조직 환경에 맞춰 커스터마이징합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">엔터프라이즈 라이선스</h3>
              <p className="text-gray-600 mb-4">
                전용 대시보드·브랜딩, 맞춤 리포트·지표팩, KPI/ROI 목표에 맞춘 커스터마이징 제공.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 역할 기반 접근제어(RBAC)·SSO(SAML/OIDC)</li>
                <li>• 감사로그·권한 이력(감사/내부통제)</li>
                <li>• SLA/지원(업타임·응답/해결 시간)</li>
                <li>• API/SDK·기술 온보딩</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">보안·컴플라이언스</h3>
              <p className="text-gray-600 mb-4">
                클라우드/온프레미스/프라이빗 VPC 선택. 데이터는 읽기전용 API 기준으로 처리합니다.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 데이터 거버넌스(거래·지표·모델 아티팩트 분리)</li>
                <li>• 지역/보관 정책(데이터 레지던시) 적용</li>
                <li>• 비식별/마스킹·키 순환 정책</li>
                <li>• 감사·위험관리 프로세스 연계</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">배포 옵션</h3>
              <p className="text-gray-600 mb-4">
                운영 환경과 규제 요구에 맞춘 유연한 배포 모델.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• SaaS(멀티테넌트/싱글테넌트)</li>
                <li>• 온프렘(컨테이너/쿠버네티스)·프라이빗 클라우드</li>
                <li>• 하이브리드(데이터는 사내, 모델 서빙은 VPC)</li>
                <li>• PoC → 파일럿 → 단계적 확장</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-indigo-100 to-blue-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">협업·도입 문의</h3>
              <p className="text-lg text-gray-600 mb-6">
                노아AI 리서치/모니터링 엔진을 조직의 워크플로우에 맞게 통합합니다. 트레이딩 클라이언트는 별도 정책으로 안내합니다.
              </p>
              <Link 
                href="/contact"
                className="inline-block bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                비즈니스 문의하기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">로드맵</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">곧 공개될 기능과 지원 자산입니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI 애널리스트(대화형 리서치)</h3>
              <p className="text-gray-600">시장 이슈·재무지표·온체인·거시를 결합한 심층 리서치와 요약/근거 제시.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">차트 이미지 분석 강화</h3>
              <p className="text-gray-600">멀티모달 AI 분석으로 차트 패턴 인식 및 실시간 시장 분석 정확도 향상.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">부동산·기타 자산</h3>
              <p className="text-gray-600">부동산 지표/거래 데이터와 대체자산 신호 연동(순차 오픈).</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">AlphaArena 확장 (알파아레나 고도화)</h3>
              <p className="text-gray-600">
                AlphaArena 모드에 AI 엔진 간 실시간 성과 비교 대시보드, 커뮤니티 전략 공유, 
                클라우드 집단 학습 등 고급 기능이 단계적으로 도입됩니다. 더 많은 AI 엔진 지원 및 성능 분석 기능 강화 예정.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              이용 방법
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              간단한 4단계로 노아AI 분석을 시작하세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howToUse.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            AI가 사용자를 대신해 자산을 운용하는 시대의 시작
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-indigo-100">
            노아AI는 DAL의 의료 AI 기술을 금융에 적용한 세계 최초 실시간 AI 학습형 재테크 어시스턴트입니다.
            AI가 인간의 감정을 대체하여 합리적이고 투명한 자산 운용을 실현합니다.
          </p>
          <p className="text-lg max-w-2xl mx-auto">
            거래할수록 더 똑똑해지는 진화형 AI 시스템으로, 매 거래마다 학습하여 성능을 지속적으로 개선합니다. 
            XAI 철학으로 모든 거래 결정 과정을 투명하게 공개하며, 검증 가능한 실거래 로그를 제공합니다.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            지금 바로 노아AI 분석을 시작하세요
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            단일 플랫폼에서 코인·주식·선물·뉴스 데이터를 통합 분석합니다. 트레이딩 클라이언트(베타)는 별도 앱으로 제공됩니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://noahai.net"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              분석 시작하기
            </a>
            <Link 
              href="/blog/noahai-technical-whitepaper"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              📖 기술백서 보기
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              비즈니스 문의하기
            </Link>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-8 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-gray-600 space-y-1 text-center">
            <p>노아AI는 <strong>리서치·분석 도구</strong>이며 투자자문·중개 서비스를 제공하지 않습니다. 제공 정보는 참고용이며 최종 투자 결정과 결과는 이용자 책임입니다.</p>
            <p>자동매매는 <strong>별도 클라이언트(베타)</strong>에서만 제공되며 <strong>고위험</strong>입니다. 이용에 따른 모든 손실과 관할 규제·세무 준수는 이용자 책임입니다.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
} 