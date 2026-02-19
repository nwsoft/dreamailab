import type { Metadata } from 'next'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '시니어앤라이프 | AI 시니어 돌봄 디지털케어로그 - 요양·재가복지 통합 플랫폼',
  description:
    '드림에이아이랩의 AI 디지털케어로그 기술 기반 시니어 돌봄 통합 플랫폼. 재가노인복지서비스, 요양원, 요양병원, 주야간보호, 의료보조기기, 요양보호사 구인구직을 하나로 연결하고, AI가 수면·활동·복약 패턴을 실시간 분석하여 이상 징후를 조기 감지합니다. 가족과 요양보호사가 함께 보는 개인 맞춤형 케어로 시니어 건강 관리의 새로운 표준을 제시합니다.',
  keywords: [
    '시니어앤라이프',
    'AI 시니어 돌봄',
    'AI 디지털케어로그',
    '시니어 케어 플랫폼',
    '재가노인복지서비스',
    '요양원 관리 시스템',
    '요양병원 디지털화',
    '주야간보호센터',
    '요양보호사 구인구직',
    '시니어 건강 모니터링',
    'AI 헬스케어',
    '고령자 돌봄 기술',
    '멀티모달 AI',
    '시계열 학습',
    '이상 패턴 탐지',
    '개인 맞춤 케어',
    'DAL AI',
    '드림에이아이랩',
    '시니어 AI 솔루션',
    '요양 산업 디지털 전환',
    '시니어 헬스테크',
    'AI 돌봄 로봇',
    '스마트 케어',
    '원격 건강 관리',
  ],
  openGraph: {
    title: '시니어앤라이프 | AI 시니어 돌봄 디지털케어로그',
    description: 'AI 기술로 시니어 돌봄의 품질을 높이고, 가족에게 안심을 제공하는 통합 플랫폼',
    type: 'website',
    images: [
      {
        url: '/images/senior-og.png',
        width: 1200,
        height: 630,
        alt: '시니어앤라이프 - AI 디지털케어로그 기반 시니어 돌봄 플랫폼',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '시니어앤라이프 | AI 시니어 돌봄 디지털케어로그',
    description: 'AI가 시니어 건강 패턴을 분석하고 이상 징후를 조기 감지하는 스마트 케어 플랫폼',
  },
  alternates: {
    canonical: 'https://dreamailab.com/services/senior',
  },
}

export default function SeniorService() {
  // 섹션 2: AI+디지털케어로그 핵심 가치
  const coreValues = [
    {
      title: '실시간 건강 모니터링과 기록',
      description: '하루의 상태를 간단히 기록하면, AI가 변화와 위험 신호를 자동으로 감지합니다.',
      icon: '📊',
    },
    {
      title: '가족과 요양보호사 간 원활한 소통',
      description:
        '가족은 앱으로 오늘 있었던 일과 건강 상태를 확인하고, 요양보호사·간호사와 동일한 정보를 기반으로 소통할 수 있습니다.',
      icon: '💬',
    },
    {
      title: '개인 맞춤 케어 계획 제공',
      description:
        '"모든 시니어에게 똑같은 프로그램"이 아닌, 개인별 질환·생활패턴·가족환경에 맞춘 케어 계획을 제안합니다.',
      icon: '🎯',
    },
    {
      title: '표준 행정 서식 자동 연계',
      description:
        '현장에서 사용하는 표준 서식과 자동 연계하여, 기록 → 청구·보고까지 한 번에 연결할 수 있는 구조를 제공합니다.',
      icon: '📑',
    },
  ]

  // 섹션 3: DAL AI 독자 기술
  const dalTech = [
    {
      title: '멀티모달 AI 분석',
      description:
        '음성·사진·문자 입력을 자동 분석하여, 단순한 숫자 기록이 아닌, 실제 일상을 이해할 수 있는 데이터로 변환합니다.',
      icon: '🎤',
    },
    {
      title: '시계열 학습 기반 이상 패턴 탐지',
      description:
        '수면, 활동량, 복약 시간, 정서 상태 등 시계열 데이터를 학습해 평소 패턴에서 벗어나는 위험 징후를 빠르게 발견합니다.',
      icon: '📈',
    },
    {
      title: '개인별 맞춤 모델',
      description:
        '시니어마다 다른 건강 상태·생활 습관을 반영한 맞춤형 모델로, 같은 변화라도 "누구에게서 나타났는가"를 기준으로 다르게 판단합니다.',
      icon: '👤',
    },
    {
      title: 'AI 기반 의사결정 지원 및 리스크 관리',
      description:
        '보호자·요양보호사·의료진이 "지금 무엇을 해야 하는가?"를 고민할 때 참고할 수 있는 실행 가능한 권고안과 리스크 관리 인사이트를 제공합니다.',
      icon: '🧠',
    },
  ]

  // 섹션 4: 왜 사용해야 할까요
  const whyUse = [
    {
      title: '케어 품질 향상으로 시니어 건강 개선',
      description: 'AI 기반 패턴 분석과 위험 예측으로, 더 빠르고 정확한 대응이 가능합니다.',
      icon: '💚',
    },
    {
      title: '가족의 마음 편함과 안심',
      description: '멀리 떨어져 있어도, 앱으로 매일의 상태를 확인하고 이상 징후 시 즉시 알림을 받을 수 있습니다.',
      icon: '🛡️',
    },
    {
      title: '효율적인 케어 시간 관리',
      description: '중요한 변화에 더 집중할 수 있도록, 반복적인 기록·보고 업무는 디지털케어로그가 대신합니다.',
      icon: '⏰',
    },
    {
      title: '안전하고 체계적인 케어 제공',
      description:
        '표준화된 기록과 데이터 기반 의사결정으로 "누가 돌봐도 흔들리지 않는" 케어 품질을 유지합니다.',
      icon: '🔒',
    },
  ]

  // 섹션 5: 시설별 서비스 효과
  const facilityEffects = [
    {
      name: '재가노인복지서비스',
      icon: '🏠',
      effects: [
        '가정에서 편안하게 서비스 이용',
        '개인별 맞춤 케어 계획',
        '가족과 함께하는 일상생활 유지',
        '시설 입소 대비 비용 효율적인 케어',
      ],
    },
    {
      name: '요양원',
      icon: '🏘️',
      effects: [
        '24시간 전문적인 돌봄 서비스',
        '체계적인 재활 및 인지 프로그램',
        '안전한 환경과 전문 장비',
        '가족의 돌봄·감정적 부담 완화',
      ],
    },
    {
      name: '요양병원',
      icon: '🏥',
      effects: [
        '의료진 상주 및 전문 치료',
        '만성질환 관리 및 약물 치료',
        '의학적 재활과 생활 돌봄 동시 제공',
        '응급상황 대응 및 의료적 안정성',
      ],
    },
    {
      name: '주야간보호센터',
      icon: '🌅',
      effects: [
        '주간 전문 케어 및 재활 프로그램',
        '야간 보호 및 안전 관리(야간형 포함 시)',
        '가족의 휴식·돌봄 부담 완화',
        '사회활동·여가 프로그램 제공',
      ],
    },
    {
      name: '의료·보조기기',
      icon: '🦽',
      effects: [
        '일상생활 독립성·자립성 향상',
        '안전한 이동과 활동 지원',
        '재활 치료 효과 증가',
        '가족·보호자의 육체적·정신적 부담 감소',
      ],
    },
    {
      name: 'AI 시니어 디지털케어로그',
      icon: '📱',
      effects: [
        'DAL AI 독자 기술 적용',
        '실시간 건강 상태 모니터링',
        '가족과 요양보호사 간 소통 강화',
        '데이터 기반 맞춤 케어 계획',
      ],
    },
    {
      name: 'AI 상담',
      icon: '🤖',
      effects: [
        '24시간 언제든 질문·상담 가능',
        '개인별 상황에 맞는 정보·케어 가이드 제공',
        '빠른 답변과 높은 접근성',
        '복잡한 제도·용어를 쉽게 설명',
      ],
    },
    {
      name: '구인/구직/매칭',
      icon: '👥',
      effects: [
        '요양보호사 및 전문간병인 구인구직',
        '재가서비스 1인 사업자 지원',
        '요양원·요양병원·주야간보호센터 전문인력 연계',
        'AI 기반 효율적인 매칭 시스템',
      ],
    },
  ]

  // 섹션 9: 구인/구직/매칭
  const recruitmentTargets = {
    seekers: [
      '재가노인복지서비스 1인 사업자',
      '요양원·요양병원·주야간보호센터',
      '홈케어 업체, 개인 간병 서비스 등',
    ],
    jobSeekers: ['요양보호사(1급, 2급)', '전문간병인', '간호조무사, 사회복지사, 물리치료사 등'],
  }

  // 섹션 10: 디지털케어로그 핵심 기능
  const carelogFeatures = [
    {
      title: '실시간 상태 기록',
      description: '하루의 상태를 간단히 기록하면, AI가 변화와 위험 신호를 자동 감지합니다.',
      icon: '✍️',
    },
    {
      title: 'AI 분석 및 예측',
      description: '축적된 데이터를 분석하여 건강 상태 변화를 예측하고 조기 경고를 제공합니다.',
      icon: '🔮',
    },
    {
      title: '가족 공유',
      description:
        '가족은 앱으로 오늘 있었던 일을 실시간 확인하고 메시지·통화 등으로 바로 소통할 수 있습니다.',
      icon: '👨‍👩‍👧‍👦',
    },
    {
      title: '의료진 연동',
      description:
        '필요 시 의료진과 데이터를 공유하여 더 정확한 진단과 맞춤 치료 계획에 활용할 수 있습니다.',
      icon: '⚕️',
    },
  ]

  // 섹션 10-2: 디지털케어로그 혜택
  const carelogBenefits = [
    { title: '조기 발견', description: '건강 상태 변화를 조기에 발견하여 적절한 대응 가능', icon: '🔍' },
    {
      title: '지속적 모니터링',
      description: '24시간에 가까운 연속 모니터링으로 안전한 일상 보장',
      icon: '📡',
    },
    {
      title: '즉시 알림',
      description: '위험 신호 감지 시 가족·의료진에 즉시 알림 전달',
      icon: '🔔',
    },
    {
      title: '데이터 분석',
      description: '장기간 데이터로 건강 트렌드와 위험 요인 파악',
      icon: '📊',
    },
  ]

  // 섹션 11: 현장별 케어 시나리오
  const careScenarios = [
    {
      facility: '요양병원',
      icon: '🏥',
      description:
        '간호사가 환자의 식사·투약·수면 패턴을 기록. AI가 수치 변화를 분석해 탈수 위험, 약물 부작용, 혈당 이상 등을 조기 경고. 병원 EMR과 연동해 의료진에게 자동 알림',
    },
    {
      facility: '재가재활센터',
      icon: '🏠',
      description:
        '물리치료 후 보행거리·균형 상태·통증 정도 기록. AI가 회복 속도 추세를 분석해 맞춤형 재활 목표를 자동 추천. 보호자는 앱으로 회복 진척도를 확인',
    },
    {
      facility: '요양원',
      icon: '🏘️',
      description:
        '생활지원사가 식사·배변·수면 상태를 간단 기록. AI가 "밤낮이 바뀌는 수면 패턴 → 치매 진행 위험" 등 위험 신호를 조기 포착. 가족에게 실시간 리포트 제공',
    },
    {
      facility: '주간보호센터',
      icon: '🌅',
      description:
        '낮 동안 활동 참여도와 정서 상태 기록. AI가 우울감·고립 위험 지수를 계산. 사회복지사가 맞춤 활동을 설계하고, 가족과 연계해 일상 변화를 함께 관리',
    },
  ]

  // 섹션 12: DAL AI 디지털케어로그 구조
  const dalStructure = [
    {
      step: '1',
      title: '표준 스키마 & 데이터 통합',
      description:
        '가정·현장·기관·앱·디바이스 등 출처마다 제각각인 데이터를 공통 스키마로 구조화. FHIR/HL7/Ed-Fi/xAPI 등 표준 스키마 변환·검증. 장기적인 추적과 기관 간 호환성 확보',
      icon: '🗂️',
    },
    {
      step: '2',
      title: '멀티모달 AI 분석',
      description:
        '텍스트·시계열·영상·센서 데이터를 결합 분석. NLP·시계열 분석·컴퓨터비전·강화학습 통합 구조. 개인 상태와 집단 패턴을 동시에 이해',
      icon: '🧩',
    },
    {
      step: '3',
      title: '권고·매칭·실행 엔진',
      description:
        '분석 결과를 바탕으로 실질적인 실행안 제시 (치료·운동·식단·생활습관·프로그램·전문가 매칭 등). 기관·전문가·가족을 연결하는 워크플로우 오케스트레이션',
      icon: '⚙️',
    },
    {
      step: '4',
      title: '피드백·학습 환류',
      description:
        '실제 실행 결과와 건강 변화를 다시 모델에 학습시켜, 시간이 지날수록 더 정교한 예측과 권고를 제공합니다. 지속적인 데이터 축적으로 개인별·집단별 케어 품질이 향상됩니다',
      icon: '🔁',
    },
  ]

  const innovations = [
    {
      problem: '데이터 분산·비표준화',
      solution: '표준 스키마 통합',
    },
    {
      problem: '연속성 없는 기록',
      solution: '타임라인·에피소드 기반 모델',
    },
    {
      problem: '개인화의 한계',
      solution: '개인별 맞춤 모델·멀티모달 분석',
    },
    {
      problem: '현장 검증 데이터 부족',
      solution: '실제 현장 중심 대규모 데이터 수집',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* 1. Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-emerald-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              시니어앤라이프 — AI 디지털케어로그, 시니어 삶의 케어 동반자
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto font-semibold text-green-100">
              재가노인복지·요양원·요양병원·주야간보호부터 <strong className="text-white">맞춤형 치료·맞춤형 약물·맞춤형 질병 관리</strong>까지
            </p>
            
            {/* 핵심 가치 강조 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-white mb-1">실시간 모니터링</p>
                  <p className="text-sm text-green-100">24시간 건강 상태 추적</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white mb-1">AI 분석</p>
                  <p className="text-sm text-green-100">위험 신호 조기 발견</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white mb-1">완전 통합</p>
                  <p className="text-sm text-green-100">가족·센터·병원 연결</p>
                </div>
              </div>
            </div>

            <p className="text-lg max-w-2xl mx-auto text-white/80">
              DAL AI 디지털케어로그가 일상 기록→AI 분석→병원/센터/가족 연계를 통합 제공합니다.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs">
              <span className="bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full">전 생애 케어</span>
              <span className="bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full">맞춤형 치료</span>
              <span className="bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full">AI 디지털케어로그</span>
            </div>
            <div className="mt-6">
              <span className="inline-block px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold">Pilot / In Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem Definition & 3. Solution */}
      {/* 섹션 1: 서비스 개요 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">시니어앤라이프란?</h2>
          <p className="text-xl text-gray-700 mb-8 text-center max-w-4xl mx-auto">
            시니어앤라이프는 고령자와 가족을 위한 <strong>시니어 돌봄 통합 플랫폼</strong>입니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <ServiceCard
              title="재가노인복지서비스"
              description="가정에서 받는 방문요양·방문간호·방문목욕"
              icon="🏠"
            />
            <ServiceCard
              title="요양원·노인요양시설"
              description="장기 입소를 위한 24시간 전문 돌봄"
              icon="🏘️"
            />
            <ServiceCard
              title="요양병원·노인전문병원"
              description="의료·재활 중심의 전문적인 치료"
              icon="🏥"
            />
            <ServiceCard
              title="주야간보호센터"
              description="낮·밤 시간대를 책임지는 보호 서비스"
              icon="🌅"
            />
            <ServiceCard
              title="의료·보조기기"
              description="독립적인 생활을 지원하는 장비"
              icon="🦽"
            />
            <ServiceCard
              title="구인/구직/매칭"
              description="요양보호사·전문간병인 연결"
              icon="👥"
            />
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              DAL AI 기술로 구현한 AI 시니어 디지털케어로그 · AI 상담
            </h3>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
              이 모든 요소를 하나의 플랫폼에서 <strong>검색·비교·매칭·기록·분석</strong>할 수 있도록 설계했습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Solution — 핵심 가치 */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">핵심 가치</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, idx) => (
              <FeatureCard key={idx} title={value.title} description={value.description} icon={value.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Technology Advantage (Short) */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">DAL AI 독자 기술</h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto">
            시니어앤라이프의 AI 시니어 디지털케어로그는 DAL이 자체 개발한{' '}
            <strong>AI 디지털케어로그 엔진</strong> 위에서 동작합니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dalTech.map((tech, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-8">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{tech.title}</h3>
                <p className="text-gray-700">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 섹션 4: 왜 사용해야 할까요 */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            왜 시니어앤라이프를 사용해야 할까요?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyUse.map((reason, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-700">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Business Impact */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">시설별 서비스 효과</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilityEffects.map((facility, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6">
                <div className="text-3xl mb-3 text-center">{facility.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">{facility.name}</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {facility.effects.map((effect, effectIdx) => (
                    <li key={effectIdx} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>{effect}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 섹션 6: 서비스별 상세 안내 - 재가노인복지서비스 */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            서비스별 상세 안내
          </h2>

          {/* 재가노인복지서비스 */}
          <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">재가노인복지서비스란?</h3>
            <p className="text-lg text-gray-700 mb-6">
              재가노인복지서비스는 장기요양등급이 인정된 노인이{' '}
              <strong>가정에서 전문 요양보호사의 방문 케어</strong>를 받는 서비스입니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">주요 특징</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• 가정에서 편안하게 서비스 이용</li>
                  <li>• 개인별 맞춤 케어 계획 수립</li>
                  <li>• 전문 요양보호사 방문 서비스</li>
                  <li>• 가족과 함께하는 일상생활 유지</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">제공 서비스</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• 방문요양: 신체·가사·인지·정서 지원</li>
                  <li>• 방문간호: 혈압·혈당·투약·상처 관리</li>
                  <li>• 방문목욕: 안전한 목욕·위생 케어</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">이용 자격</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• 장기요양등급 1~5등급</li>
                  <li>• 인지지원등급 인정자</li>
                  <li>• 가정 생활 가능, 가족 동의</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-3">이용 비용 (예시)</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-semibold">일반:</span> 약 15% 수준
                </div>
                <div>
                  <span className="font-semibold">경감 대상:</span> 6~9% 수준
                </div>
                <div>
                  <span className="font-semibold">기초생활수급자:</span> 본인부담 면제
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-3">* 실제 요율은 장기요양보험 기준에 따라 변동될 수 있습니다</p>
            </div>
          </div>
        </div>
      </section>

      {/* 섹션 7: 구인/구직/매칭 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">구인/구직/매칭 서비스</h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto">
            시니어앤라이프의 구인/구직/매칭 시스템은 요양보호사·전문간병인을 찾는 기관과 구직자를 연결하는
            플랫폼입니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">핵심 가치</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>전문 인력과 기관의 효율적인 매칭</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>자격·경력을 기반으로 한 품질 보장</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>빠르고 정확한 구인·구직 정보 제공</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>지역별 맞춤 서비스 연계</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">주요 기능</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span>조건에 맞는 인력/기관을 찾는 스마트 검색</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span>상세 프로필·경력·자격증 정보 확인</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span>지역·근무시간·급여 조건 필터링</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span>평가·리뷰 시스템으로 신뢰도 확보</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">구인 기관</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                {recruitmentTargets.seekers.map((seeker, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>{seeker}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">구직자</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                {recruitmentTargets.jobSeekers.map((jobSeeker, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-emerald-500 mr-2">•</span>
                    <span>{jobSeeker}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 섹션 7-2: 시니어 돌봄 행정 표준 SaaS */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              시니어 돌봄 행정, 이제 표준화된 SaaS로
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              재가재활부터 요양병원까지, 모든 기관을 하나의 체계로 연결합니다
            </p>
          </div>

          {/* 현재 문제점 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">현재 시니어 돌봄 기관의 문제점</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl p-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">⚠️</span>
                  비효율적인 행정
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>엑셀·워드·수기 기록에 의존</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>서비스 기록과 행정 문서 분리 → 중복 작성</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>데이터 검색 및 보관의 어려움</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>업무 시간의 상당 부분이 행정 처리에 소모</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">📋</span>
                  표준화 부재
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>기관별 양식이 달라 데이터 비교·분석 불가</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>정부 보고·심사·청구 과정이 복잡</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>서비스 품질 평가 기준이 없음</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">❓</span>
                  신뢰성 부족
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>보호자 입장에서 기관 선택 기준 불명확</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>투명한 돌봄 기록 확인 어려움</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>데이터 기반의 객관적 평가 불가능</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 솔루션 */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 md:p-12 mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              솔루션: 시니어앤라이프 표준 행정 SaaS
            </h3>
            <p className="text-lg text-gray-700 text-center mb-8 max-w-4xl mx-auto">
              클라우드 기반 SaaS로 설치 없이 웹/모바일에서 바로 사용할 수 있는 표준화된 행정 관리 시스템입니다.
              행정과 돌봄 일지를 통합하여 재가서비스, 요양원, 병원 모두 하나의 플랫폼에서 관리합니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 text-center shadow">
                <div className="text-4xl mb-3">☁️</div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">클라우드 기반</h4>
                <p className="text-sm text-gray-600">설치 없이 웹/모바일에서 바로 사용</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow">
                <div className="text-4xl mb-3">🔗</div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">통합 관리</h4>
                <p className="text-sm text-gray-600">행정 + 돌봄 일지를 하나의 플랫폼에서</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow">
                <div className="text-4xl mb-3">🤖</div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">자동 연동</h4>
                <p className="text-sm text-gray-600">디지털케어로그와 현장 기록 즉시 반영</p>
              </div>
            </div>
          </div>

          {/* 기관별 전용 기능 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">기관 유형별 전용 기능</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 재가재활 */}
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">🏠</div>
                  <h4 className="text-xl font-bold text-gray-900">재가재활 서비스 전용</h4>
                </div>
                <ul className="space-y-3 text-gray-700 mb-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>요양보호사/방문간호사 출퇴근·근무시간 자동 기록</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>어르신 돌봄 일지(식사, 복약, 운동, 상태변화) 실시간 입력</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>사업주(센터장) 급여·페이 자동 정산</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>돌봄 기록이 곧 행정 서류로 변환되어 청구·보고 가능</span>
                  </li>
                </ul>
                <div className="bg-white rounded-lg p-4 text-sm text-gray-700 border border-gray-200">
                  <strong>💡 재가재활의 특수성:</strong> 요양보호사-사업주-페이 구조, 방문 서비스 기록의 중요성,
                  돌봄 일지와 행정 통합
                </div>
              </div>

              {/* 주간보호/요양원/병원 */}
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">🏥</div>
                  <h4 className="text-xl font-bold text-gray-900">주간보호 / 요양원 / 요양병원</h4>
                </div>
                <ul className="space-y-3 text-gray-700 mb-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>일일 생활·재활 프로그램 기록 → 보호자 공유</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>의료·간호 기록과 행정 서류 자동 연결</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>기관별 평가 및 인증 기준 반영</span>
                  </li>
                </ul>
                <div className="bg-white rounded-lg p-4 text-sm text-gray-700 border border-gray-200">
                  <strong>💡 기관 운영의 핵심:</strong> 프로그램 운영 및 평가, 의료진과 요양보호사 관리, 정부 보고
                  및 인증 심사
                </div>
              </div>

              {/* 행정 표준화 */}
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">📑</div>
                  <h4 className="text-xl font-bold text-gray-900">행정 표준화</h4>
                </div>
                <ul className="space-y-3 text-gray-700 mb-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>인사·근태·급여 자동화</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>청구·재무 관리 표준 양식 변환</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>각종 행정 문서 원클릭 보고서 생성</span>
                  </li>
                </ul>
                <div className="bg-white rounded-lg p-4 text-sm text-gray-700 border border-gray-200">
                  <strong>💡 표준화의 효과:</strong> 업무 시간 최대 70%까지 절감 가능, 정부 보고 자동화, 기관 간 데이터 비교 가능
                </div>
              </div>

              {/* 디지털케어로그 연동 */}
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">📱</div>
                  <h4 className="text-xl font-bold text-gray-900">디지털케어로그 연동</h4>
                </div>
                <ul className="space-y-3 text-gray-700 mb-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>현장 돌봄 기록 → 실시간 클라우드 업로드</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>보호자 모바일에서 즉시 확인 (식사/혈압/활동/복약)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>AI 분석으로 위험 신호 알림</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>행정·임상·돌봄 데이터가 하나의 케어로그로 통합</span>
                  </li>
                </ul>
                <div className="bg-white rounded-lg p-4 text-sm text-gray-700 border border-gray-200">
                  <strong>💡 통합의 핵심:</strong> 환자 돌봄 데이터와 행정 데이터의 다리 역할, 실시간 모니터링 및
                  알림, AI 기반 예측 분석
                </div>
              </div>
            </div>
          </div>

          {/* 서비스 핵심 장점 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">서비스의 핵심 장점</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-2">⚡</div>
                <h4 className="font-bold text-gray-900 mb-1 text-sm">행정 효율성</h4>
                <p className="text-xs text-gray-600">업무 시간 최대 70% 절감</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-2">🏆</div>
                <h4 className="font-bold text-gray-900 mb-1 text-sm">경쟁력 확보</h4>
                <p className="text-xs text-gray-600">인증센터 마크</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-2">👁️</div>
                <h4 className="font-bold text-gray-900 mb-1 text-sm">투명한 관리</h4>
                <p className="text-xs text-gray-600">실시간 확인</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-2">🤖</div>
                <h4 className="font-bold text-gray-900 mb-1 text-sm">AI 기반 케어</h4>
                <p className="text-xs text-gray-600">맞춤형 리포트</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-2">🏛️</div>
                <h4 className="font-bold text-gray-900 mb-1 text-sm">정부 연계</h4>
                <p className="text-xs text-gray-600">청구·보고 자동화</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-2">🚀</div>
                <h4 className="font-bold text-gray-900 mb-1 text-sm">즉시 사용</h4>
                <p className="text-xs text-gray-600">설치 불필요</p>
              </div>
            </div>
          </div>

          {/* 인증센터 효과 */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 md:p-12 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">인증센터 효과</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">✅</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">"시니어앤라이프 인증센터" 마크 부여</h4>
                <p className="text-gray-700">보호자 선택 기준, 신뢰성 상징, 경쟁 우위 확보</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-4">인증센터 혜택</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>플랫폼 내에서 상위 노출 및 추천</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>보호자들의 신뢰도 및 선호도 증가</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>정부 지원 및 인증 심사에서 데이터 기반 운영 기관으로 경쟁력 확보</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>기관 간 서비스 품질 비교 우위</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>디지털케어로그 연동으로 경쟁력 확보</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 사용 설명서 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">사용 설명서</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h4 className="font-bold text-gray-900 mb-3">시작하기</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>기관 유형 선택</li>
                  <li>직원 계정 등록</li>
                  <li>서비스 항목 세팅</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h4 className="font-bold text-gray-900 mb-3">행정 관리</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>직원 근태 자동 기록</li>
                  <li>청구/재무 자동 변환</li>
                  <li>문서 원클릭 다운로드</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h4 className="font-bold text-gray-900 mb-3">돌봄 기록 입력</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>앱으로 돌봄 기록 작성</li>
                  <li>자동 연동 및 공유</li>
                  <li>AI 이상 징후 감지</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h4 className="font-bold text-gray-900 mb-3">인증센터 등록</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>기준 충족 시 인증 마크</li>
                  <li>상위 노출 & 추천</li>
                  <li>정기 인증 갱신</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 마무리 메시지 */}
          <div className="text-center">
            <p className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              "재가서비스에서 병원까지, 하나의 기록으로 모든 돌봄과 행정을 연결합니다."
            </p>
            <p className="text-lg text-gray-600">
              시니어앤라이프 표준 행정 SaaS – <strong>표준화가 곧 경쟁력</strong>입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 섹션 7-3: 보호자·가족과 센터·병원의 사용 방법 */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            누가, 어떻게 사용하나요?
          </h2>

          {/* 보호자·가족 사용 방법 */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">👨‍👩‍👧‍👦</div>
                <h3 className="text-2xl font-bold text-gray-900">보호자·가족은 이렇게 사용합니다</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-2">📱</span>
                    홈 화면
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>오늘의 건강 상태 요약 (컨디션 지수, 위험 알림)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>오늘 복약·식사·수면 체크 상태</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>최근 7일 변화 그래프</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-2">📋</span>
                    케어 타임라인
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>센터·요양병원에서 기록한 식사, 수면, 재활, 기분 변화를 시간순으로 확인</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>사진·음성 메모까지 함께 열람</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-2">🤖</span>
                    AI 리포트
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>"최근 2주간 수면 시간이 줄어들고 있습니다"</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>"낙상 위험이 증가하는 패턴이 보입니다" 등</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>보호자에게 이해하기 쉬운 문장으로 정리된 요약 리포트 제공</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-2">🔔</span>
                    알림·상담
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>위험 신호 감지 시 푸시 알림</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>궁금한 점은 AI 상담에게 바로 질문</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>24시간 언제든 답변 가능</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 센터·병원 사용 방법 */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">🏥</div>
                <h3 className="text-2xl font-bold text-gray-900">센터·병원은 이렇게 사용합니다</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-2xl mr-2">📱</span>
                    현장 기록 앱
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>요양보호사·간호사가 휴대폰/태블릿으로 사용</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>식사, 복약, 재활, 수면, 정서 상태를 간단 체크</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>아이콘/숫자/짧은 메모 형식으로 빠른 입력</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>사진·음성 메모 첨부 가능</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-2xl mr-2">💻</span>
                    기관 대시보드(웹)
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>오늘 출근한 직원과 배정된 어르신 현황</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>각 어르신의 오늘 케어 진행 상황 및 리스크 알림</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>일/주/월 단위 케어 통계 및 평가 리포트</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>한눈에 보는 전체 운영 현황</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-2xl mr-2">📊</span>
                    행정·청구 화면
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>입력된 케어 로그를 기반으로 자동 생성된 청구서·보고서</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>인사/근태/급여 데이터와 연동된 정산 화면</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>원클릭 문서 다운로드 및 제출</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>정부 보고 양식 자동 변환</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 섹션 8: 한눈에 보는 AI 디지털케어로그 */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">한눈에 보는 AI 디지털케어로그</h2>
            <p className="text-xl max-w-4xl mx-auto">
              "단순한 기록을 넘어, AI가 분석하고 예측하는 시니어 맞춤형 케어 플랫폼"
            </p>
            <p className="text-lg mt-4 text-green-100">
              DAL의 독자 기술인 <strong>AI 디지털케어로그</strong>를 시니어 서비스에 응용한 것이 바로
              시니어앤라이프의 <strong>시니어케어로그 서비스</strong>입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {carelogFeatures.map((feature, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-green-100">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">디지털케어로그의 혜택</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {carelogBenefits.map((benefit, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl mb-2">{benefit.icon}</div>
                  <h4 className="font-bold mb-1">{benefit.title}</h4>
                  <p className="text-sm text-green-100">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">간단한 3단계로 시작하세요</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white text-green-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h4 className="font-bold text-lg mb-2">앱 설치</h4>
                <p className="text-sm text-green-100">
                  스마트폰에 디지털케어로그 앱 설치 및 간단한 회원가입·가족·기관 연동
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white text-green-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h4 className="font-bold text-lg mb-2">상태 기록</h4>
                <p className="text-sm text-green-100">
                  식사, 수면, 활동, 기분 등 기본 상태 기록. 필요 시 사진·음성 메모도 함께 저장
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white text-green-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h4 className="font-bold text-lg mb-2">AI 분석</h4>
                <p className="text-sm text-green-100">
                  AI가 기록을 분석해 건강 변화를 감지. 이상 징후 발생 시 보호자·의료진에 알림
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 섹션 9: 현장별 케어 시나리오 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            활용 예시: 시니어 현장별 케어 시나리오
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {careScenarios.map((scenario, idx) => (
              <div key={idx} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{scenario.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{scenario.facility}</h3>
                </div>
                <p className="text-gray-700">{scenario.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 섹션 10: DAL AI 디지털케어로그 구조 & 혁신성 */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            DAL의 독자 기술: AI 디지털케어로그 구조
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto">
            AI 디지털케어로그는 <strong>표준 기록 → AI 분석 → 실행 연결 → 환류(학습)</strong> 4단계 선순환
            구조를 가지고 있습니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {dalStructure.map((structure, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                    {structure.step}
                  </div>
                  <div className="text-3xl">{structure.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{structure.title}</h3>
                <p className="text-gray-700">{structure.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">왜 혁신적인가?</h3>
            <p className="text-lg text-gray-700 mb-6 text-center">
              기존 시스템의 핵심 한계를 다음과 같이 해결합니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {innovations.map((innovation, idx) => (
                <div key={idx} className="text-center">
                  <div className="bg-red-100 text-red-700 rounded-lg p-3 mb-2 text-sm font-semibold">
                    {innovation.problem}
                  </div>
                  <div className="text-2xl my-2">↓</div>
                  <div className="bg-green-100 text-green-700 rounded-lg p-3 text-sm font-semibold">
                    {innovation.solution}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 섹션 11: 기대 효과 & 비전 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            시니어앤라이프 시니어케어로그의 기대 효과
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <ExpectCard
              title="비용 효율성 향상"
              description="불필요한 검사·진료·입원 감소. 예방 중심 관리로 장기 비용 부담 완화"
              icon="💰"
            />
            <ExpectCard
              title="EMR·공공 데이터 연동"
              description="병원 EMR, 공공 데이터와의 호환성을 고려한 구조. 임상 데이터와 생활 데이터를 통합한 새로운 인사이트 제공"
              icon="🔗"
            />
            <ExpectCard
              title="데이터 규모 확장"
              description="실제 생활 데이터를 기반으로 한 대규모 표본 확보. 다양한 질환·연령대·환경에서의 패턴 분석 가능"
              icon="📈"
            />
            <ExpectCard
              title="노인질환 혁신"
              description="치매·파킨슨병·노인성 우울증 등 주요 노인질환의 조기 발견과 맞춤 관리에 기여"
              icon="💡"
            />
          </div>

          <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-4 text-center">시니어앤라이프의 미래 비전</h3>
            <p className="text-center text-green-100 mb-8 max-w-3xl mx-auto">
              * 이는 시니어앤라이프가 지향하는 중장기 비전이며, 지자체·병원·연구기관과의 협력을 통해 단계적으로 확장해 나갈 계획입니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <VisionCard
                icon="🏛️"
                title="시니어 케어 표준화"
                description="요양병원·재가재활·요양원·주간보호센터가 함께 사용할 수 있는 공통 기록 포맷·지표 제시"
              />
              <VisionCard
                icon="🤖"
                title="개인 맞춤 AI 케어"
                description="치매 진행 단계·재활 속도·생활 패턴에 따른 완전 개인 맞춤형 케어 플랜 자동 생성"
              />
              <VisionCard
                icon="📊"
                title="Real-World Evidence (RWE) 기반 정책 지원"
                description="수많은 시니어의 실제 데이터를 바탕으로 예방의학·복지 정책·지역사회 서비스 설계에 기여"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Service Status */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold mb-4">Pilot / In Development</span>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">시니어앤라이프 서비스 현황</h2>
          <p className="text-gray-600">AI 디지털케어로그 기반 시니어 돌봄 통합 플랫폼. 재가·시설·의료·공공 연계를 위한 인프라 구축 중입니다.</p>
        </div>
      </section>

      {/* 8. Ecosystem Connection */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">DAL 생태계와의 연결</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">시니어앤라이프는 자람이·토탈케어로그와 동일한 AI 디지털케어로그 표준을 사용합니다. 발달장애→시니어→전 생애 케어로 DAL 플랫폼을 확장합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">🔗 자람이·토탈케어로그 연동</h3>
              <p className="text-sm text-gray-700">표준 스키마로 발달장애·헬스케어·시니어 케어 데이터가 하나의 생애 흐름으로 연결됩니다.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">📊 DAL AI 플랫폼</h3>
              <p className="text-sm text-gray-700">멀티모달 AI·시계열 학습·이상 패턴 탐지 등 DAL 독자 기술을 시니어 돌봄에 적용.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            시니어앤라이프와 함께 시니어 케어의 표준을 만듭니다
          </h2>
          <p className="text-xl text-gray-700 mb-6 max-w-4xl mx-auto">
            시니어앤라이프는 단순한 정보 제공 사이트가 아니라, 재가·시설·의료·공공이 함께 쓰는{' '}
            <strong>시니어 디지털케어로그 인프라</strong>를 지향합니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow">
              <div className="text-3xl mb-3">👨‍👩‍👧‍👦</div>
              <h3 className="font-bold text-gray-900 mb-2">보호자와 어르신</h3>
              <p className="text-gray-700 text-sm">안심과 이해</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="font-bold text-gray-900 mb-2">센터와 병원</h3>
              <p className="text-gray-700 text-sm">효율과 신뢰</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <div className="text-3xl mb-3">🏛️</div>
              <h3 className="font-bold text-gray-900 mb-2">지자체와 사회</h3>
              <p className="text-gray-700 text-sm">데이터 기반 정책과 혁신</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://seniorandlife.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              시니어앤라이프 서비스 둘러보기
            </a>
            <Link
              href="/contact"
              className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              센터/병원/지자체·파트너 제휴 문의
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// 헬퍼 컴포넌트
function ServiceCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  )
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  )
}

function ExpectCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}

function VisionCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
      <div className="text-4xl mb-3">{icon}</div>
      <h4 className="text-xl font-bold mb-3">{title}</h4>
      <p className="text-sm text-green-100">{description}</p>
    </div>
  )
}
