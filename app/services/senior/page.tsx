import type { Metadata } from 'next'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '시니어앤라이프 | AI 시니어 돌봄 디지털케어로그 - 요양·재가복지 통합 플랫폼',
  description:
    '드림에이아이랩의 AI 디지털케어로그 기술 기반 시니어 돌봄 통합 플랫폼. 재가노인복지서비스, 요양원, 요양병원, 주야간보호, 의료보조기기, 요양보호사 구인구직을 하나로 연결하고, AI가 수면·활동·복약 패턴을 실시간 분석하여 이상 징후를 조기 감지합니다. 가족과 요양보호사가 함께 보는 개인 맞춤형 케어로 시니어 건강 관리의 새로운 표준을 제시합니다.',
  keywords: [
    // 최근 검색 트렌드에 맞춘 핵심 키워드 위주 구성
    '시니어 돌봄 플랫폼',
    '시니어 디지털케어로그',
    '요양원 검색 매칭',
    '재가요양 서비스',
    '요양보호사 구인구직',
    '요양 행정 SaaS',
    'AI 시니어 헬스케어',
    'DAL AI',
    '드림에이아이랩',
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

      {/* SECTION 1: 서비스 소개 (Hero) */}
      <section className="bg-gradient-to-br from-green-600 to-emerald-600 text-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              AI 디지털케어로그 기반 시니어 돌봄 통합 플랫폼
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-green-100">
              재가서비스, 요양원, 요양병원, 주야간보호, 의료보조기기, 요양보호사 매칭까지<br />
              시니어 돌봄 전 과정을 하나의 플랫폼에서 연결합니다.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/10 px-4 py-2 rounded-full font-medium">AI 디지털케어로그</span>
              <span className="bg-white/10 px-4 py-2 rounded-full font-medium">시니어 돌봄 통합 플랫폼</span>
              <span className="bg-white/10 px-4 py-2 rounded-full font-medium">가족 / 기관 / 의료 / 공공 연결</span>
            </div>
            <div className="mt-8">
              <span className="inline-block px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold">Pilot / In Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* 대상 명확화: 이런 분들을 위한 서비스입니다 */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4 text-center">이런 분들을 위한 서비스입니다</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex gap-2">
              <span className="text-emerald-600 shrink-0">•</span>
              <span>부모님을 맡길 시설을 찾고 있는 <strong>보호자</strong></span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-600 shrink-0">•</span>
              <span>요양원·재가센터를 운영하는 <strong>기관 관리자</strong></span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-600 shrink-0">•</span>
              <span>환자의 생활 데이터를 기반으로 진료를 개선하려는 <strong>의료기관</strong></span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-600 shrink-0">•</span>
              <span>돌봄 데이터를 기반으로 정책을 운영하려는 <strong>지자체·공공기관</strong></span>
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 2: 왜 시니어 돌봄 플랫폼이 필요한가 */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">왜 시니어 돌봄 플랫폼이 필요한가</h2>
          <p className="text-center text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-1">한 줄 요약</p>
          <p className="text-center text-gray-800 font-medium text-sm mb-4 max-w-3xl mx-auto">
            시니어 돌봄은 &quot;어디를 찾을까&quot;보다 <strong>연결 이후의 기록·행정·가족 소통</strong>이 더 어렵습니다.
          </p>
          <p className="text-center text-gray-600 text-sm mb-3 max-w-3xl mx-auto">
            한국 시니어 돌봄 산업은 재가서비스, 요양원, 요양병원, 주야간보호, 간병, 복지기기 등으로 나뉘어 있지만
            정보를 찾는 과정과 돌봄 기록, 행정·운영 시스템은 여전히 제각각입니다.
          </p>
          <p className="text-center text-gray-600 text-xs mb-6 max-w-3xl mx-auto">
            보호자는 부모님을 위한 시설을 찾으려 해도 어떤 기관이 어떤 강점을 가지고 있는지 비교하기 어렵습니다.
            입소 후에도 오늘 식사는 하셨는지, 약은 드셨는지, 컨디션은 어떤지
            실시간으로 확인하기 어려운 경우가 많습니다. 많은 기관은 지금도 엑셀·수기·전화·메신저에 의존해
            운영과 행정을 처리하고 있습니다.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-red-50 rounded-xl p-5 border border-red-100">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">기관별 정보 분산</h3>
              <p className="text-xs text-gray-700">
                기관·서비스 정보가 포털·전단·입소 상담 등으로 흩어져 있어, 보호자가 한눈에 비교·선택하기 어렵습니다.
              </p>
            </div>
            <div className="bg-red-50 rounded-xl p-5 border border-red-100">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">보호자의 정보 부족</h3>
              <p className="text-xs text-gray-700">
                등급, 본인부담, 서비스 내용, 재가·시설·병원 중 무엇이 적절한지 스스로 판단하기 어려운 경우가 많습니다.
              </p>
            </div>
            <div className="bg-red-50 rounded-xl p-5 border border-red-100">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">돌봄 기록 비표준화</h3>
              <p className="text-xs text-gray-700">
                기관마다 수기·엑셀·내부 시스템 등 기록 방식이 달라, 다른 기관·의료기관과 데이터를 연결하기 어렵습니다.
              </p>
            </div>
            <div className="bg-red-50 rounded-xl p-5 border border-red-100">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">행정 업무 비효율</h3>
              <p className="text-xs text-gray-700">
                돌봄 기록과 청구·보고·정산이 분리되어 있어 같은 내용을 여러 번 입력해야 하고, 작은 기관일수록 운영 부담이 큽니다.
              </p>
            </div>
            <div className="bg-red-50 rounded-xl p-5 border border-red-100">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">가족과 기관 소통 단절</h3>
              <p className="text-xs text-gray-700">
                보호자는 전화나 가끔의 카톡·사진에 의존해 부모님의 상태를 짐작할 뿐, 실제 하루 기록을 구조적으로 보기 어렵습니다.
              </p>
            </div>
            <div className="bg-red-50 rounded-xl p-5 border border-red-100">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">데이터 기반 케어 부족</h3>
              <p className="text-xs text-gray-700">
                돌봄 기록은 쌓이지만, AI 분석·위험 예측·맞춤 케어 계획으로 이어지지 못해, 경험과 감에 의존한 운영이 반복됩니다.
              </p>
            </div>
          </div>
          <div className="mt-8 bg-emerald-50/80 rounded-xl p-4 border border-emerald-100 max-w-3xl mx-auto">
            <p className="text-xs font-semibold text-emerald-800 mb-1 text-center">결론 요약</p>
            <p className="text-sm text-gray-800 text-center">
              즉, 시니어 돌봄의 병목은 &quot;정보 부족&quot;이 아니라 <strong>연결 이후의 기록·행정·가족 소통이 끊기는 구조</strong>입니다.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 추가: 보호자 실제 경험 스토리 */}
      <section className="py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">보호자 현실: 시니어앤라이프 전과 후</h2>
          <p className="text-center text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-1">한 줄 요약</p>
          <p className="text-center text-gray-800 font-medium text-sm mb-4 max-w-3xl mx-auto">
            &quot;괜찮다&quot;는 말만으로는 안심할 수 없습니다. <strong>하루 기록</strong>이 있어야 부모님의 상태가 보입니다.
          </p>
          <p className="text-center text-gray-600 text-sm mb-6 max-w-3xl mx-auto">
            멀리 떨어져 사는 보호자가 부모님 상태를 매일 확인하기 어려운 현실, 그리고 시니어앤라이프를 쓰면 어떤 변화가 오는지 구체적인 장면으로 설명합니다.
          </p>

          <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100 mb-6 max-w-3xl mx-auto">
            <p className="text-xs font-semibold text-emerald-800 mb-3 text-center">핵심 변화 요약</p>
            <ul className="text-sm text-gray-800 space-y-2">
              <li className="flex gap-2"><span className="text-emerald-600 shrink-0">✔</span><span><strong>전화가 아닌 실제 기록</strong>으로 부모님 상태를 확인</span></li>
              <li className="flex gap-2"><span className="text-emerald-600 shrink-0">✔</span><span><strong>식사·복약·활동·수면</strong> 등 하루 전체 흐름을 한눈에 파악</span></li>
              <li className="flex gap-2"><span className="text-emerald-600 shrink-0">✔</span><span>이상 징후는 <strong>AI가 먼저 알림</strong>으로 전달</span></li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-100 space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm">현실: 전화와 &quot;괜찮다&quot;만으로는 부족합니다</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                보호자는 대부분 부모님과 떨어져 삽니다. 전화하면 항상 같은 말이 돌아옵니다. &quot;괜찮다.&quot; 하지만 보호자는 늘 궁금합니다.
              </p>
              <ul className="text-gray-700 text-sm space-y-1 mb-3">
                <li>오늘 식사는 잘 하셨을까</li>
                <li>약은 제 시간에 드셨을까</li>
                <li>오늘 산책이나 활동은 하셨을까</li>
                <li>요즘 잠은 잘 주무실까</li>
                <li>넘어지거나 아프신 적은 없을까</li>
              </ul>
              <p className="text-gray-700 text-sm leading-relaxed">
                서울에 사는 보호자는 부산에 계신 어머니의 상태를 매일 확인하기 어렵습니다. 지금까지 보호자는 전화, 카톡, 가끔 오는 사진으로만 부모님의 상태를 짐작해야 했습니다.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm">시니어앤라이프에서는</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                보호자가 앱을 열면 <strong>오늘 하루의 돌봄 기록이 시간 순으로</strong> 보입니다.
              </p>
              <ul className="text-gray-700 text-sm font-mono space-y-1 mb-3 bg-gray-50 rounded-lg p-4">
                <li>09:00 아침 식사</li>
                <li>09:30 복약</li>
                <li>10:10 산책 프로그램 참여</li>
                <li>12:30 점심 식사</li>
                <li>13:20 혈압 측정</li>
                <li>15:00 낮잠</li>
                <li>17:30 저녁 식사</li>
              </ul>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">AI는 다음과 같은 변화도 감지합니다.</p>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• 최근 활동량 감소</li>
                <li>• 수면 패턴 변화</li>
                <li>• 낙상 위험 증가</li>
                <li>• 복약 시간 지연</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm">결과적으로</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                보호자는 더 이상 &quot;괜찮다&quot;는 말만 듣는 것이 아니라, <strong>부모님의 하루를 실제 기록으로 이해</strong>하게 됩니다. 추측이 아니라 식사·복약·활동·수면·혈압·기분·특이사항까지 확인할 수 있는 구조로 바뀝니다.
              </p>
            </div>
          </div>
          <div className="mt-6 bg-emerald-50/80 rounded-xl p-4 border border-emerald-100 max-w-3xl mx-auto">
            <p className="text-xs font-semibold text-emerald-800 mb-1 text-center">결론 요약</p>
            <p className="text-sm text-gray-800 text-center">
              즉, 보호자는 더 이상 추측하지 않고 <strong>데이터를 기반으로 부모님 상태를 이해</strong>하게 됩니다.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: 시니어앤라이프 플랫폼 소개 */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">시니어앤라이프 플랫폼 구조</h2>
          <p className="text-center text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-1">한 줄 요약</p>
          <p className="text-center text-gray-800 font-medium text-sm mb-4 max-w-3xl mx-auto">
            이 플랫폼은 검색이 아니라 <strong>돌봄 데이터를 관리</strong>하는 인프라입니다.
          </p>
          <p className="text-center text-gray-600 text-sm mb-8 max-w-2xl mx-auto">
            시니어앤라이프는 단순한 요양원 검색 사이트가 아니라,{' '}
            <strong>검색 · 비교 · 매칭 · 돌봄 기록 · AI 분석 · 행정 관리</strong>를 한 흐름으로 묶는 시니어 돌봄 인프라 플랫폼입니다.
          </p>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
              <div className="p-4"><span className="text-2xl block mb-1">🔍</span><p className="text-sm font-medium text-gray-800">검색</p></div>
              <div className="p-4"><span className="text-2xl block mb-1">⚖️</span><p className="text-sm font-medium text-gray-800">비교</p></div>
              <div className="p-4"><span className="text-2xl block mb-1">🤝</span><p className="text-sm font-medium text-gray-800">매칭</p></div>
              <div className="p-4"><span className="text-2xl block mb-1">📒</span><p className="text-sm font-medium text-gray-800">돌봄 기록</p></div>
              <div className="p-4"><span className="text-2xl block mb-1">🤖</span><p className="text-sm font-medium text-gray-800">AI 분석</p></div>
              <div className="p-4"><span className="text-2xl block mb-1">📋</span><p className="text-sm font-medium text-gray-800">행정 관리</p></div>
            </div>
            <p className="mt-6 text-center text-sm text-gray-600">
              DAL <strong>AI 디지털케어로그</strong> 기반 서비스로, 표준 기록·다기관 연계·실시간 환류를 지원합니다.
            </p>
            <p className="mt-4 text-center text-sm font-semibold text-emerald-800 max-w-2xl mx-auto">
              👉 이 6가지 기능은 각각의 기능이 아니라 <strong>하나의 흐름으로 연결된 시스템</strong>입니다.
            </p>
          </div>
          <div className="mt-6 bg-emerald-50/80 rounded-xl p-4 border border-emerald-100 max-w-3xl mx-auto">
            <p className="text-xs font-semibold text-emerald-800 mb-1 text-center">결론 요약</p>
            <p className="text-sm text-gray-800 text-center">
              즉, 시니어앤라이프는 &quot;찾기&quot;에서 끝나지 않고 <strong>기록·분석·행정까지 이어지는 운영 체계</strong>를 지향합니다.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: 서비스 구성 */}
      <section className="py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">서비스 구성</h2>
          <p className="text-center text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-1">한 줄 요약</p>
          <p className="text-center text-gray-800 font-medium text-sm mb-4 max-w-3xl mx-auto">
            재가부터 인력 매칭까지, 시니어 돌봄의 <strong>전 과정을 한 플랫폼에서 연결</strong>합니다.
          </p>
          <p className="text-center text-gray-600 text-sm mb-8 max-w-2xl mx-auto">시니어 돌봄 전 영역을 하나의 플랫폼에서 연결합니다.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ServiceCard
              title="재가노인복지서비스"
              description="집에서 생활하는 어르신을 위한 방문요양·방문간호·방문목욕 서비스 연결"
              icon="🏠"
            />
            <ServiceCard
              title="요양원 / 노인요양시설"
              description="장기적인 생활 돌봄이 필요한 어르신을 위한 24시간 생활 지원 시설"
              icon="🏘️"
            />
            <ServiceCard
              title="요양병원 / 노인전문병원"
              description="치료·재활·건강관리 중심의 의료 연계 시설"
              icon="🏥"
            />
            <ServiceCard
              title="주야간보호센터"
              description="낮 시간 또는 일정 시간 동안 보호와 활동 지원이 필요한 어르신 대상 서비스"
              icon="🌅"
            />
            <ServiceCard
              title="의료 / 보조기기"
              description="이동·생활·일상 기능 유지를 돕는 의료·보조기기 연결"
              icon="🦽"
            />
            <ServiceCard
              title="요양보호사 / 간병인 구인구직 매칭"
              description="기관과 인력을 연결하는 구인·구직 매칭"
              icon="👥"
            />
          </div>
          <div className="mt-8 bg-emerald-50/80 rounded-xl p-4 border border-emerald-100 max-w-3xl mx-auto">
            <p className="text-xs font-semibold text-emerald-800 mb-1 text-center">결론 요약</p>
            <p className="text-sm text-gray-800 text-center">
              즉, 시니어앤라이프는 <strong>재가·시설·의료·인력</strong>을 같은 데이터 흐름으로 묶어, 역할마다 다른 도구를 쓰는 단절을 줄입니다.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 추가: 서비스 영역별 현실 문제와 변화 */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">서비스 영역별 현실 문제와 변화</h2>
          <p className="text-center text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-1">한 줄 요약</p>
          <p className="text-center text-gray-800 font-medium text-sm mb-4 max-w-3xl mx-auto">
            <strong>기록이 바뀌면</strong> 돌봄의 질·신뢰·진료·운영 판단이 함께 바뀝니다.
          </p>
          <p className="text-center text-gray-600 text-sm mb-8 max-w-3xl mx-auto">
            재가·요양원·요양병원·주야간보호·의료기기·구인구직 각 영역에서 어떤 문제를 해결하고, 도입 후 무엇이 달라지는지 정리했습니다.
          </p>

          <div className="space-y-6">
            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
              <div className="flex items-center mb-3"><span className="text-2xl mr-2">🏠</span><h3 className="font-bold text-gray-900">재가노인복지서비스</h3></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm text-gray-700">
                <div><h4 className="font-semibold text-gray-900 mb-1">현재 문제</h4><p>방문 일정 관리가 어렵고, 보호자에게 상태 공유가 부족하며, 장기요양보험 청구·행정이 번거롭습니다. 서비스 기록과 행정이 분리되어 같은 내용을 여러 번 입력해야 합니다.</p></div>
                <div><h4 className="font-semibold text-gray-900 mb-1">시니어앤라이프에서</h4><p>방문 일정·돌봄 기록·보호자 공유·정산·청구를 한 시스템에서 관리합니다.</p></div>
                <div><h4 className="font-semibold text-gray-900 mb-1">도입 후 변화</h4><p>일정·기록·보호자 공유·정산·청구가 한 흐름으로 연결되어 반복 입력이 줄고, 보호자 신뢰가 높아집니다.</p></div>
              </div>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100">
              <div className="flex items-center mb-3"><span className="text-2xl mr-2">🏘️</span><h3 className="font-bold text-gray-900">요양원 / 노인요양시설</h3></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm text-gray-700">
                <div><h4 className="font-semibold text-gray-900 mb-1">현재 문제</h4><p>보호자 문의가 반복되고, 생활기록은 쌓이지만 운영 데이터로 활용되지 않습니다. 평가·인증 대비 자료 준비도 수작업에 가깝습니다.</p></div>
                <div><h4 className="font-semibold text-gray-900 mb-1">시니어앤라이프에서</h4><p>돌봄 기록·보호자 공유·직원 근태·행정 문서를 표준화된 SaaS로 운영합니다.</p></div>
                <div><h4 className="font-semibold text-gray-900 mb-1">도입 후 변화</h4><p>돌봄 기록, 보호자 공유, 운영 지표, 평가·인증 대응이 표준화되고, 기록이 서비스 품질을 보여주는 데이터가 됩니다.</p></div>
              </div>
            </div>

            <div className="bg-sky-50 rounded-2xl p-6 border border-sky-100">
              <div className="flex items-center mb-3"><span className="text-2xl mr-2">🏥</span><h3 className="font-bold text-gray-900">요양병원 / 노인전문병원</h3></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm text-gray-700">
                <div><h4 className="font-semibold text-gray-900 mb-1">현재 문제</h4><p>병원은 재가·시설에서의 생활 데이터를 충분히 알기 어렵습니다. 입원·외래 정보와 생활시설 정보가 연결되지 않아 진료 판단이 단절되기 쉽습니다.</p></div>
                <div><h4 className="font-semibold text-gray-900 mb-1">시니어앤라이프에서</h4><p>수면·활동·복약·식사·낙상 등 생활 데이터가 요약된 리포트를 진료·치료에 참고합니다.</p></div>
                <div><h4 className="font-semibold text-gray-900 mb-1">도입 후 변화</h4><p>생활 패턴, 복약 순응도, 식사·낙상 등 실제 데이터를 참고한 진료·치료 판단이 가능해집니다.</p></div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
              <div className="flex items-center mb-3"><span className="text-2xl mr-2">🌅</span><h3 className="font-bold text-gray-900">주야간보호센터</h3></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm text-gray-700">
                <div><h4 className="font-semibold text-gray-900 mb-1">현재 문제</h4><p>낮 시간 활동 기록이 보호자에게 충분히 공유되지 않고, 프로그램 참여도와 상태 변화를 구조적으로 보여주기 어렵습니다.</p></div>
                <div><h4 className="font-semibold text-gray-900 mb-1">시니어앤라이프에서</h4><p>출석, 식사, 활동, 컨디션을 기록하고 보호자와 실시간 공유합니다.</p></div>
                <div><h4 className="font-semibold text-gray-900 mb-1">도입 후 변화</h4><p>출석·식사·활동·컨디션이 기록·공유·분석되어 보호자 신뢰와 프로그램 운영 개선에 도움이 됩니다.</p></div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center mb-3"><span className="text-2xl mr-2">🦽</span><h3 className="font-bold text-gray-900">의료 / 보조기기</h3></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm text-gray-700">
                <div><h4 className="font-semibold text-gray-900 mb-1">현재 문제</h4><p>어떤 기기가 필요한지 정보가 분산되어 있고, 단순 판매가 아니라 실제 생활 기능 유지와 연결되어야 합니다.</p></div>
                <div><h4 className="font-semibold text-gray-900 mb-1">시니어앤라이프에서</h4><p>돌봄 기록과 생활 상태를 바탕으로 필요한 기기·보조 장비 정보를 연결합니다.</p></div>
                <div><h4 className="font-semibold text-gray-900 mb-1">도입 후 변화</h4><p>생활 상태와 돌봄 기록을 바탕으로 필요한 의료·보조기기를 더 적절히 연결할 수 있습니다.</p></div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-center mb-3"><span className="text-2xl mr-2">👥</span><h3 className="font-bold text-gray-900">요양보호사 / 간병인 구인구직 매칭</h3></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm text-gray-700">
                <div><h4 className="font-semibold text-gray-900 mb-1">현재 문제</h4><p>단순 채용 공고 수준에 머물기 쉽고, 실제 기관 운영 흐름(기록·근태·행정)과 연결되지 않습니다.</p></div>
                <div><h4 className="font-semibold text-gray-900 mb-1">시니어앤라이프에서</h4><p>기관과 인력을 연결할 뿐 아니라, 기록·근태·행정이 같은 플랫폼에서 운영되도록 설계됩니다.</p></div>
                <div><h4 className="font-semibold text-gray-900 mb-1">도입 후 변화</h4><p>구인구직이 기관의 돌봄 기록·근태·운영 데이터와 연동되어 채용부터 현장 운영까지 한 흐름으로 이어집니다.</p></div>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-emerald-50/80 rounded-xl p-4 border border-emerald-100 max-w-3xl mx-auto">
            <p className="text-xs font-semibold text-emerald-800 mb-1 text-center">결론 요약</p>
            <p className="text-sm text-gray-800 text-center">
              즉, 영역마다 다른 pain point가 있어도 <strong>같은 표준 기록·공유·분석</strong>으로 연결될 때 운영과 신뢰가 함께 올라갑니다.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: 핵심 기능 */}
      <section className="py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">핵심 기능</h2>
          <p className="text-center text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-1">한 줄 요약</p>
          <p className="text-center text-gray-800 font-medium text-sm mb-4 max-w-3xl mx-auto">
            기록·분석·가족 연결·케어 계획이 <strong>끊기지 않고 한 사이클</strong>로 돌아갑니다.
          </p>
          <p className="text-center text-gray-600 text-sm mb-8 max-w-2xl mx-auto">
            단순 기능 나열이 아니라, 기록·분석·연결·케어 계획이 하나의 흐름으로 동작합니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="text-3xl mb-3">📒</div>
              <h3 className="font-bold text-gray-900 mb-2">AI 디지털케어로그</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 단순 메모가 아닌 표준화된 돌봄 기록 시스템</li>
                <li>• 시니어의 상태 변화를 시간 흐름에 따라 축적</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="text-3xl mb-3">🔮</div>
              <h3 className="font-bold text-gray-900 mb-2">AI 건강 분석</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 수면·활동·복약 등 시계열 패턴 분석</li>
                <li>• 평소와 다른 변화·위험 신호 조기 탐지</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="text-3xl mb-3">👨‍👩‍👧‍👦</div>
              <h3 className="font-bold text-gray-900 mb-2">가족 연결</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 보호자가 실시간으로 돌봄 기록을 확인</li>
                <li>• 전화·메신저 대신 기록 기반 소통</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold text-gray-900 mb-2">데이터 기반 케어 계획</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 누적 데이터를 바탕으로 개인 맞춤 케어 방향 제안</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 bg-emerald-50/80 rounded-xl p-4 border border-emerald-100 max-w-3xl mx-auto">
            <p className="text-xs font-semibold text-emerald-800 mb-1 text-center">결론 요약</p>
            <p className="text-sm text-gray-800 text-center">
              즉, 현장은 <strong>한 번 입력한 기록</strong>으로 보호자·AI·행정까지 동시에 살아나는 구조를 갖게 됩니다.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: 누가 어떻게 사용하는가 (역할별 시나리오) */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">누가 어떻게 사용하는가</h2>
          <p className="text-center text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-1">한 줄 요약</p>
          <p className="text-center text-gray-800 font-medium text-sm mb-4 max-w-3xl mx-auto">
            역할은 다르지만, 모두 <strong>같은 돌봄 데이터</strong>를 기준으로 움직입니다.
          </p>
          <p className="text-center text-gray-600 text-sm mb-8 max-w-3xl mx-auto">
            각 역할별로 현재 문제 → 시니어앤라이프에서의 사용 방식 → 도입 후 변화를 구체적으로 설명합니다.
          </p>

          <div className="space-y-6">
            {/* 보호자 / 가족 */}
            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
              <div className="flex items-center mb-3">
                <div className="text-3xl mr-3">👨‍👩‍👧‍👦</div>
                <h3 className="font-bold text-gray-900">보호자 / 가족</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm text-gray-700">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">현재</h4>
                  <p>멀리 떨어져 사는 보호자는 부모님 상태를 매일 알기 어렵습니다. 시설에 계시거나 재가서비스를 받아도 전화로는 &quot;괜찮다&quot;는 말만 들을 뿐, 식사·복약·활동·컨디션이 어땠는지 추측에 의존합니다. 카톡·가끔 오는 사진만으로는 실제 하루를 구조적으로 보기 어렵습니다.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">시니어앤라이프에서</h4>
                  <p>앱에서 식사, 복약, 활동, 수면, 혈압, 기분, 특이사항을 시간 순으로 확인하고, AI가 활동량 감소·수면 변화·낙상 위험·복약 지연 등을 감지하면 알림을 받습니다.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">도입 후 변화</h4>
                  <p>전화와 추측에 의존하던 확인 방식이, 실제 기록과 AI 리포트로 부모님 상태를 이해하는 방식으로 바뀝니다. &quot;괜찮다&quot;만 듣던 구조에서 식사·복약·활동·수면·혈압·기분·특이사항까지 보는 구조가 됩니다.</p>
                </div>
              </div>
            </div>

            {/* 요양보호사 / 현장 돌봄 종사자 */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-center mb-3">
                <div className="text-3xl mr-3">🧑‍⚕️</div>
                <h3 className="font-bold text-gray-900">요양보호사 / 현장 돌봄 종사자</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm text-gray-700">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">현재</h4>
                  <p>종이 기록지, 엑셀, 단체 채팅방, 전화 보고 등으로 업무가 분산되고, 기록이 남아도 분석·공유가 어렵습니다.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">시니어앤라이프에서</h4>
                  <p>현장 앱에서 식사, 복약, 활동, 정서 상태, 특이 사항을 아이콘·숫자·짧은 메모 형태로 빠르게 입력합니다.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">도입 후 변화</h4>
                  <p>한 번의 기록이 보호자 공유, 기관 관리, AI 분석, 행정 문서까지 연결되어, 반복 보고와 이중 입력 부담이 줄어듭니다.</p>
                </div>
              </div>
            </div>

            {/* 시설 운영자 / 센터 현실 장면 */}
            <div className="bg-amber-50/80 rounded-2xl p-6 border border-amber-100">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">시설·센터 운영자의 현실</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                재가센터나 요양시설을 운영하는 사람들의 하루는 매우 복잡합니다. <strong>보호자 전화, 직원 근태 관리, 방문 일정 조정, 돌봄 기록 정리, 장기요양보험 청구, 행정 보고</strong>—이 모든 일이 서로 다른 도구에서 이루어지는 경우가 많습니다.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                예를 들어 방문 기록은 종이에 남고, 근태는 엑셀에 기록되고, 보호자 소통은 단체 채팅방에서 이루어지고, 장기요양보험 청구는 또 다른 프로그램에서 처리됩니다. 같은 정보를 여러 번 입력해야 하고, 조금만 누락되어도 행정 오류가 발생할 수 있습니다.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                시니어앤라이프에서는 <strong>방문 일정 · 돌봄 기록 · 보호자 공유 · 직원 근태 · 급여 정산 · 청구 및 행정 보고</strong>가 하나의 흐름으로 연결됩니다.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                현장에서 입력된 기록이 보호자 공유, 기관 운영, 행정 보고까지 연결되면서, 기록은 단순 보고가 아니라 기관 서비스 품질을 보여주는 데이터로 바뀝니다.
              </p>
              <div className="bg-white rounded-xl p-4 border border-amber-200 mt-4">
                <h4 className="font-bold text-gray-900 mb-3 text-sm text-center">도입 후 실제 변화</h4>
                <ul className="text-sm text-gray-800 space-y-2">
                  <li className="flex gap-2"><span className="text-amber-600 shrink-0">✔</span><span><strong>행정 업무 시간 30~50% 감소</strong> 여지(중복 입력·반복 정리 축소)</span></li>
                  <li className="flex gap-2"><span className="text-amber-600 shrink-0">✔</span><span>반복 입력 및 이중 기록 제거</span></li>
                  <li className="flex gap-2"><span className="text-amber-600 shrink-0">✔</span><span>보호자 문의 감소(기록 공유로 대체)</span></li>
                  <li className="flex gap-2"><span className="text-amber-600 shrink-0">✔</span><span>신규 보호자 유입 증가(투명성 기반 신뢰)</span></li>
                  <li className="flex gap-2"><span className="text-amber-600 shrink-0">✔</span><span>평가·인증 대응 효율화</span></li>
                </ul>
                <p className="text-xs text-gray-500 mt-3 text-center">* 기관 규모·운영 방식에 따라 달라질 수 있습니다.</p>
              </div>
            </div>

            {/* 재가서비스 업체 / 개인 사업자 / 센터 운영자 */}
            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
              <div className="flex items-center mb-3">
                <div className="text-3xl mr-3">🏠</div>
                <h3 className="font-bold text-gray-900">재가서비스 업체 / 개인 사업자 / 센터 운영자</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm text-gray-700">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">현재</h4>
                  <p>방문 일정, 서비스 기록, 보호자 소통, 급여 정산, 청구·보고가 각각 다른 도구에서 운영되어 센터장·1인 사업자의 부담이 큽니다.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">시니어앤라이프에서</h4>
                  <p>일정·기록·보호자 공유·직원 근태·정산·청구 데이터를 하나의 시스템에서 관리합니다.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">도입 후 변화</h4>
                  <p>운영이 체계화되고, 보호자에게 투명한 기록을 제공하며, 행정 오류와 누락이 줄어듭니다.</p>
                </div>
              </div>
            </div>

            {/* 요양원 / 시설 운영자 */}
            <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100">
              <div className="flex items-center mb-3">
                <div className="text-3xl mr-3">🏘️</div>
                <h3 className="font-bold text-gray-900">요양원 / 시설 운영자</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm text-gray-700">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">현재</h4>
                  <p>직원 관리, 프로그램 기록, 보호자 응대, 평가·인증, 행정 보고가 서로 분리되어 있고, 기록은 쌓여도 운영 지표로 활용되기 어렵습니다.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">시니어앤라이프에서</h4>
                  <p>돌봄 기록·보호자 공유·직원 근태·행정 문서 생성을 표준화된 SaaS로 운영합니다.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">도입 후 변화</h4>
                  <p>현장 기록이 단순 보관이 아니라, 서비스 품질과 기관 신뢰도를 보여주는 운영 데이터가 됩니다.</p>
                </div>
              </div>
            </div>

            {/* 병원 / 의료기관 */}
            <div className="bg-sky-50 rounded-2xl p-6 border border-sky-100">
              <div className="flex items-center mb-3">
                <div className="text-3xl mr-3">🏥</div>
                <h3 className="font-bold text-gray-900">병원 / 의료기관</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm text-gray-700">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">현재</h4>
                  <p>외래·입원 시에는 상태를 볼 수 있지만, 재가·시설에서의 생활 패턴과 복약 순응도는 파편적인 진술에 의존하는 경우가 많습니다.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">시니어앤라이프에서</h4>
                  <p>수면·활동·복약·식사·낙상 등 생활 데이터가 요약된 리포트를 참고해 진료·치료 방향을 결정합니다.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">도입 후 변화</h4>
                  <p>진료실에서의 단편적인 정보가 아니라, 실제 생활 데이터까지 포함한 치료 의사결정이 가능해집니다.</p>
                </div>
              </div>
              <ul className="mt-4 space-y-1.5 text-sm text-gray-800 border-t border-sky-100 pt-4">
                <li className="flex gap-2"><span className="text-sky-600 shrink-0">✔</span><span><strong>생활 데이터 기반 진료</strong> 가능</span></li>
                <li className="flex gap-2"><span className="text-sky-600 shrink-0">✔</span><span><strong>복약 순응도·활동 패턴</strong>을 반영한 판단</span></li>
                <li className="flex gap-2"><span className="text-sky-600 shrink-0">✔</span><span><strong>입원 전</strong> 재가·시설에서의 상태를 데이터로 확인</span></li>
              </ul>
            </div>

            {/* 지자체 / 정부 / 공공 관리자 */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center mb-3">
                <div className="text-3xl mr-3">🏛️</div>
                <h3 className="font-bold text-gray-900">지자체 / 정부 / 공공 관리자</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm text-gray-700">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">현재</h4>
                  <p>기관을 관리·감독해야 하지만, 현장의 서비스 질과 운영 상태를 세밀하게 파악할 수 있는 데이터가 부족합니다.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">시니어앤라이프에서</h4>
                  <p>표준화된 기록과 운영 데이터를 기반으로 기관 현황, 서비스 이용 추이, 위험 신호를 모니터링합니다.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">도입 후 변화</h4>
                  <p>사후 민원·조사 중심이 아니라, 데이터 기반 사전 관리와 정책 개선이 가능해집니다.</p>
                </div>
              </div>
              <ul className="mt-4 space-y-1.5 text-sm text-gray-800 border-t border-gray-200 pt-4">
                <li className="flex gap-2"><span className="text-gray-600 shrink-0">✔</span><span><strong>지역 돌봄 데이터</strong> 실시간 모니터링</span></li>
                <li className="flex gap-2"><span className="text-gray-600 shrink-0">✔</span><span><strong>기관별 서비스 품질</strong> 비교 가능</span></li>
                <li className="flex gap-2"><span className="text-gray-600 shrink-0">✔</span><span><strong>낙상·건강 이상 패턴</strong> 조기 감지</span></li>
                <li className="flex gap-2"><span className="text-gray-600 shrink-0">✔</span><span><strong>사후 대응 → 사전 예방</strong> 정책 전환</span></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 bg-emerald-50/80 rounded-xl p-4 border border-emerald-100 max-w-3xl mx-auto">
            <p className="text-xs font-semibold text-emerald-800 mb-1 text-center">결론 요약</p>
            <p className="text-sm text-gray-800 text-center">
              즉, 기관은 <strong>기록이 아니라 운영 데이터</strong>를 갖게 되고, 공공은 <strong>현장을 추측이 아니라 지표로</strong> 돌볼 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 추가: 실제 돌봄 기록 예시 */}
      <section className="py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">실제 돌봄 기록 예시</h2>
          <p className="text-center text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-1">한 줄 요약</p>
          <p className="text-center text-gray-800 font-medium text-sm mb-4 max-w-3xl mx-auto">
            보호자가 보는 화면은 <strong>하루의 타임라인</strong>입니다. 말이 아니라 기록이 쌓입니다.
          </p>
          <p className="text-center text-gray-600 text-sm mb-6 max-w-3xl mx-auto">
            보호자는 앱에서 하루 돌봄 기록을 <strong>시간 순</strong>으로 확인할 수 있습니다. 디지털케어로그가 어떤 정보를 담는지 직관적으로 이해할 수 있습니다.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3 text-sm">하루 돌봄 기록 예시 (시간 순)</h3>
              <p className="text-xs text-gray-600 mb-3">식사·복약·활동·혈압·휴식·특이사항이 시간 순으로 쌓입니다. 보호자는 &quot;오늘 뭐 하셨지?&quot;가 아니라 이 기록으로 확인할 수 있습니다.</p>
              <ul className="space-y-2 text-sm text-gray-700 font-mono">
                <li>09:00 아침 식사 완료</li>
                <li>09:30 복약 기록</li>
                <li>10:10 산책 프로그램 참여</li>
                <li>12:30 점심 식사</li>
                <li>13:20 혈압 측정</li>
                <li>15:00 휴식 및 낮잠</li>
                <li>17:30 저녁 식사</li>
                <li>19:00 기분 안정 / 특이사항 없음</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-emerald-100">
              <h3 className="font-bold text-gray-900 mb-3 text-sm">AI 분석 알림 예시</h3>
              <p className="text-xs text-gray-600 mb-3">AI가 시간 흐름 속 패턴을 분석해 다음과 같은 알림을 제공할 수 있습니다.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 최근 활동량 감소</li>
                <li>• 수면 패턴 변화</li>
                <li>• 낙상 위험 증가</li>
                <li>• 복약 시간 지연</li>
              </ul>
            </div>
          </div>

          <p className="mt-6 text-center text-gray-600 text-sm max-w-3xl mx-auto">
            이러한 기록은 보호자가 부모님의 하루 상태를 <strong>전화나 추측이 아닌 실제 데이터</strong>로 이해할 수 있도록 돕습니다. &quot;아, 내가 이런 걸 보게 되는구나&quot;를 바로 떠올릴 수 있는 수준의 정보입니다.
          </p>
          <div className="mt-6 bg-emerald-50/80 rounded-xl p-4 border border-emerald-100 max-w-3xl mx-auto">
            <p className="text-xs font-semibold text-emerald-800 mb-1 text-center">결론 요약</p>
            <p className="text-sm text-gray-800 text-center">
              즉, 디지털케어로그는 <strong>보여주기용 리포트가 아니라</strong> 매일 쌓이는 <strong>돌봄의 원천 데이터</strong>입니다.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: 시니어 돌봄 행정 SaaS */}
      <section className="py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">시니어 돌봄 행정 SaaS</h2>
          <p className="text-center text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-1">한 줄 요약</p>
          <p className="text-center text-gray-800 font-medium text-sm mb-4 max-w-3xl mx-auto">
            현장 기록이 곧 <strong>청구·보고·근태·정산</strong>으로 이어지면, 행정은 &quot;따로 하는 일&quot;이 아닙니다.
          </p>
          <p className="text-center text-gray-600 text-sm mb-8 max-w-2xl mx-auto">
            돌봄 기록과 행정 시스템을 하나의 플랫폼에서 관리합니다.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center">
              <div className="text-2xl mb-2">🏢</div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">기관 운영 관리</h3>
              <p className="text-xs text-gray-600">재가·요양원·병원 통합</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center">
              <div className="text-2xl mb-2">⏱️</div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">직원 근태 관리</h3>
              <p className="text-xs text-gray-600">출퇴근·근무시간 자동 기록</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center">
              <div className="text-2xl mb-2">💰</div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">급여 정산</h3>
              <p className="text-xs text-gray-600">페이·정산 자동화</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center">
              <div className="text-2xl mb-2">📑</div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">행정 서류 자동 생성</h3>
              <p className="text-xs text-gray-600">돌봄 기록 → 청구·보고서</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center">
              <div className="text-2xl mb-2">🏛️</div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">정부 보고 자동화</h3>
              <p className="text-xs text-gray-600">표준 양식·원클릭 제출</p>
            </div>
          </div>
          <div className="mt-8 bg-emerald-50/80 rounded-xl p-4 border border-emerald-100 max-w-3xl mx-auto">
            <p className="text-xs font-semibold text-emerald-800 mb-1 text-center">결론 요약</p>
            <p className="text-sm text-gray-800 text-center">
              즉, 기관은 <strong>같은 데이터로 운영과 행정을 동시에</strong> 맞출 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 추가 1: AI 디지털케어로그 기술 응용 */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">AI 디지털케어로그 기술 응용</h2>
          <p className="text-center text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-1">한 줄 요약</p>
          <p className="text-center text-gray-800 font-medium text-sm mb-4 max-w-3xl mx-auto">
            기록은 끝이 아니라 <strong>분석·알림·케어 개선으로 이어지는 루프</strong>의 시작입니다.
          </p>
          <p className="text-center text-gray-600 text-sm mb-4 max-w-3xl mx-auto">
            AI 디지털케어로그는 단순 기록 시스템이 아니라, <strong>기록 → 분석 → 판단 → 피드백</strong>이 반복되는 의사결정 인프라 기술입니다.
          </p>
          <p className="text-center text-gray-600 text-xs mb-3 max-w-3xl mx-auto">
            기존 돌봄 기록은 단순한 기록 보관에 가깝습니다. <strong>AI 디지털케어로그는 의사결정 데이터 인프라</strong>입니다. 돌봄 현장에서 발생하는 기록이 수집되고, 분석되고, 패턴을 찾고, 위험을 감지하고, 케어 계획에 반영되는 <strong>Decision Log + Feedback Loop</strong> 구조로 작동합니다. 이 구조가 반복될수록 케어는 점점 더 개인 맞춤형으로 진화합니다.
          </p>
          <p className="text-center text-gray-600 text-xs mb-3 max-w-3xl mx-auto">
            DAL AI 디지털케어로그는 단순한 기록 시스템이 아니라, 사람의 상태 변화와 생활 데이터를 <strong>시간 흐름 속에서 이해하고</strong> 더 나은 돌봄 의사결정을 돕는 <strong>AI 기반 의사결정 인프라 기술</strong>입니다.
          </p>
          <p className="text-center text-gray-600 text-xs mb-8 max-w-3xl mx-auto">
            시니어앤라이프는 이 AI 디지털케어로그 기술을 시니어 돌봄 산업에 적용한 DAL 플랫폼 사례입니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <div className="text-xs font-semibold text-gray-500 mb-1">1</div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm">기록</h3>
              <p className="text-xs text-gray-700">
                돌봄 현장에서 발생하는 식사, 복약, 활동, 정서 상태, 건강 상태 등의 데이터를
                <strong> 표준화된 형태</strong>로 기록합니다.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <div className="text-xs font-semibold text-gray-500 mb-1">2</div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm">분석</h3>
              <p className="text-xs text-gray-700">
                AI가 시간 흐름 속에서 수면·활동·복약·기분 등의 패턴을 분석하고,
                평소와 다른 변화를 감지합니다.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <div className="text-xs font-semibold text-gray-500 mb-1">3</div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm">판단 보조</h3>
              <p className="text-xs text-gray-700">
                AI 리포트와 위험 신호 분석을 통해 보호자, 기관, 의료진이
                <strong> 상황을 더 빠르게 이해</strong>하도록 돕습니다.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <div className="text-xs font-semibold text-gray-500 mb-1">4</div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm">피드백</h3>
              <p className="text-xs text-gray-700">
                케어 계획과 대응 방식이 데이터 피드백을 통해 지속적으로 개선되며,
                시간이 지날수록 맞춤도가 높아집니다.
              </p>
            </div>
          </div>
          <div className="mt-8 bg-emerald-50/80 rounded-xl p-4 border border-emerald-100 max-w-3xl mx-auto">
            <p className="text-xs font-semibold text-emerald-800 mb-1 text-center">결론 요약</p>
            <p className="text-sm text-gray-800 text-center">
              즉, DAL AI 디지털케어로그는 <strong>쌓일수록 케어가 정교해지는 의사결정 인프라</strong>이며, 시니어앤라이프는 그 시니어 산업 응용 사례입니다.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 추가 2: 시니어 돌봄 산업 구조 변화 */}
      <section className="py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">시니어 돌봄 산업 구조 변화</h2>
          <p className="text-center text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-1">한 줄 요약</p>
          <p className="text-center text-gray-800 font-medium text-sm mb-4 max-w-3xl mx-auto">
            분절된 서비스를 <strong>데이터로 잇는 것</strong>이 산업 구조 전환의 출발점입니다.
          </p>
          <p className="text-center text-gray-600 text-sm mb-6 max-w-3xl mx-auto">
            기존 시니어 돌봄 산업은 재가서비스, 요양원, 요양병원, 주야간보호, 간병, 복지기기 등이{' '}
            <strong>서비스 단위로 분리</strong>되어 있고, 정보·기록·데이터·행정 시스템이 서로 연결되지 않는 구조입니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs md:text-sm text-gray-700">
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3 text-center">기존 구조</h3>
              <ul className="space-y-2">
                <li>• 재가서비스 / 요양원 / 요양병원 / 주야간보호 / 간병 / 복지기기가 각각 별개로 운영</li>
                <li>• 정보·기록·데이터·행정 시스템이 서로 연결되지 않음</li>
                <li>• 보호자는 서비스 선택이 어렵고, 기관은 운영 효율이 낮고, 의료기관은 생활 데이터를 알기 어렵습니다.</li>
                <li>• 정부와 지자체는 현장을 데이터로 모니터링하기 어려워, 사후 대응 중심의 구조가 반복됩니다.</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-emerald-100">
              <h3 className="font-bold text-gray-900 mb-3 text-center">시니어앤라이프 플랫폼 구조</h3>
              <ul className="space-y-2">
                <li>• <strong>검색</strong>: 시니어 돌봄 기관·서비스 정보를 한 곳에서 탐색</li>
                <li>• <strong>서비스 연결</strong>: 재가·시설·병원·인력 매칭까지 연결</li>
                <li>• <strong>돌봄 기록</strong>: 표준화된 디지털케어로그로 일상과 건강 상태를 기록</li>
                <li>• <strong>행정 관리</strong>: 근태·정산·청구·보고를 같은 데이터로 처리</li>
                <li>• <strong>AI 분석</strong>: 이상 패턴 감지, 위험 신호 탐지, 케어 계획 인사이트 제공</li>
              </ul>
              <p className="mt-3 text-xs text-gray-600">
                분절된 시니어 산업을 <strong>데이터 기반 돌봄 인프라 구조</strong>로 전환하는 것이 시니어앤라이프의 목표입니다.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-2xl p-6 border border-emerald-100">
            <p className="text-sm text-gray-700 leading-relaxed">
              이는 단순 디지털화가 아니라 <strong>돌봄의 표준화 + 데이터화 + AI 기반 판단 보조</strong>를 함께 이루는 전환입니다. 시니어앤라이프는 DAL AI 디지털케어로그 기술의 시니어 산업 응용 사례이며, 앞으로 복지 정책·공공 관리·의료 연계·서비스 품질 관리의 기반이 될 수 있는 구조를 지향합니다. 즉, &quot;좋은 서비스&quot;를 넘어 <strong>산업 구조 전환의 시작점</strong>으로서 자리하는 플랫폼입니다.
            </p>
          </div>
          <div className="mt-6 bg-emerald-50/80 rounded-xl p-4 border border-emerald-100 max-w-3xl mx-auto">
            <p className="text-xs font-semibold text-emerald-800 mb-1 text-center">결론 요약</p>
            <p className="text-sm text-gray-800 text-center">
              즉, 투자·정책 관점에서 시니어앤라이프는 <strong>단일 앱이 아니라 산업을 잇는 인프라 레이어</strong>로 읽힐 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 추가: 기존 서비스와 시니어앤라이프의 차이 */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">기존 서비스와 시니어앤라이프의 차이</h2>
          <p className="text-center text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-1">한 줄 요약</p>
          <p className="text-center text-gray-800 font-medium text-sm mb-4 max-w-3xl mx-auto">
            기존 도구는 <strong>연결 전(검색·행정)</strong>에 머무르고, 시니어앤라이프는 <strong>연결 이후의 돌봄 데이터</strong>까지 다룹니다.
          </p>
          <p className="text-center text-gray-600 text-sm mb-6 max-w-3xl mx-auto">
            현재 시장에는 다음과 같은 서비스들이 존재합니다. 각각 <strong>특정 역할만</strong> 수행합니다. 검색만 하거나, 매칭만 하거나, 행정만 관리합니다.
          </p>

          <div className="mb-6">
            <h3 className="font-bold text-gray-900 mb-2 text-sm">기존 시장의 서비스 유형</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• 요양원 검색 플랫폼</li>
              <li>• 간병인 매칭 플랫폼</li>
              <li>• 기관 운영 ERP</li>
              <li>• 장기요양 행정 프로그램</li>
            </ul>
          </div>

          <p className="text-gray-700 text-sm mb-6 max-w-3xl mx-auto">
            이 서비스들은 &quot;어디를 찾을 것인가&quot;, &quot;어떻게 운영할 것인가&quot;까지는 해결합니다. 하지만 서비스가 연결된 이후, 돌봄이 실제로 어떻게 이루어지고 어떤 변화와 위험이 나타나는지까지는 관리하지 않습니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm mb-6">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3">기존 서비스의 한계</h3>
              <ul className="space-y-1 text-xs text-gray-700">
                <li>• 각각 특정 역할만 수행 (검색만 / 매칭만 / 행정만)</li>
                <li>• 정보 제공 또는 행정 도구 수준에 머무름</li>
                <li>• 연결 이후의 돌봄 변화와 위험까지는 관리하지 못함</li>
              </ul>
            </div>
            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
              <h3 className="font-bold text-gray-900 mb-3">시니어앤라이프가 연결하는 것</h3>
              <p className="text-xs text-gray-700 mb-2">검색 · 서비스 연결 · 돌봄 기록 · 보호자 공유 · 행정 관리 · AI 분석까지 <strong>하나의 흐름</strong>으로 연결합니다.</p>
              <p className="text-xs text-gray-700">하나의 흐름으로 연결된 돌봄 데이터 인프라 플랫폼입니다.</p>
            </div>
          </div>

          <div className="bg-emerald-50/80 rounded-xl p-5 border border-emerald-200 space-y-3">
            <p className="text-sm text-gray-800">
              기존 서비스가 <strong>&quot;어디를 찾을 것인가&quot;</strong>를 해결한다면,
            </p>
            <p className="text-sm text-gray-800 font-medium">
              시니어앤라이프는 <strong>&quot;연결 이후 돌봄이 실제로 어떻게 이루어지고, 어떤 변화와 위험이 나타나는가&quot;</strong>까지 관리합니다.
            </p>
            <p className="text-sm text-gray-800 pt-2 border-t border-emerald-200">
              기존 서비스가 <strong>&quot;사람과 시설을 연결하는 플랫폼&quot;</strong>이라면, 시니어앤라이프는 <strong>&quot;돌봄 데이터를 관리하는 플랫폼&quot;</strong>입니다.
            </p>
          </div>
          <div className="mt-6 bg-emerald-50/80 rounded-xl p-4 border border-emerald-100 max-w-3xl mx-auto">
            <p className="text-xs font-semibold text-emerald-800 mb-1 text-center">결론 요약</p>
            <p className="text-sm text-gray-800 text-center">
              즉, 시니어앤라이프의 경쟁 상대는 &quot;다른 검색 사이트&quot;가 아니라 <strong>연결 이후에 남는 정보 공백</strong>입니다.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 추가 3: 정책 및 공공 관점에서의 의미 */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">정책 및 공공 관점에서의 의미</h2>
          <p className="text-center text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-1">한 줄 요약</p>
          <p className="text-center text-gray-800 font-medium text-sm mb-4 max-w-3xl mx-auto">
            표준 기록이 쌓이면, 공공은 <strong>민원 이후가 아니라 예방·품질·예산</strong>을 데이터로 설계할 수 있습니다.
          </p>
          <p className="text-center text-gray-600 text-sm mb-4 max-w-3xl mx-auto">
            시니어 돌봄은 장기요양보험, 복지 정책, 지역 돌봄 체계와 깊이 연결된 영역이지만,
            현재 정책 운영에는 다음과 같은 한계가 있습니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs md:text-sm text-gray-700 mb-6">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">현재 정책·공공 운영의 한계</h3>
              <ul className="space-y-1">
                <li>• 현장 데이터 부족으로, 실제 서비스 질과 이용자 상태를 세밀하게 파악하기 어려움</li>
                <li>• 기관 운영 데이터가 파편화되어 있어, 서비스 품질 평가와 비교가 어렵움</li>
                <li>• 위험 상황(낙상, 급격한 체중 변화 등)을 조기에 감지·예방하기 어려움</li>
                <li>• 민원·사후 조사 중심의 관리 구조가 반복됨</li>
              </ul>
            </div>
            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
              <h3 className="font-bold text-gray-900 mb-2">AI 디지털케어로그 기반 플랫폼의 가능성</h3>
              <ul className="space-y-1">
                <li>• 표준화된 돌봄 기록과 서비스 이용 패턴 데이터로, 지자체·공공기관이 현장을 데이터로 이해</li>
                <li>• 기관 운영 데이터(근태·정산·프로그램 참여 등)를 기반으로 서비스 품질 관리·인증 체계 고도화</li>
                <li>• 위험 신호(낙상 패턴, 급격한 체중 변화 등)를 조기에 감지해 예방 중심 정책 설계에 기여</li>
                <li>• 데이터 기반 복지 정책·서비스 설계·예산 배분 등으로 이어질 수 있는 인프라 역할</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-gray-600 text-xs max-w-3xl mx-auto">
            시니어앤라이프는 단일 서비스가 아니라, 장기적으로 <strong>데이터 기반 복지 정책, 서비스 품질 관리, 위험 상황 예방</strong>을
            뒷받침할 수 있는 AI 디지털케어로그 인프라를 지향합니다.
          </p>
          <div className="mt-6 bg-emerald-50/80 rounded-xl p-4 border border-emerald-100 max-w-3xl mx-auto">
            <p className="text-xs font-semibold text-emerald-800 mb-1 text-center">결론 요약</p>
            <p className="text-sm text-gray-800 text-center">
              즉, 지자체·공공에게 이 플랫폼은 <strong>정책 인프라(가시성·비교·예방)</strong>로 읽힐 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 추가 4: DAL 플랫폼 생태계 확장 */}
      <section className="py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">DAL 플랫폼 생태계 확장</h2>
          <p className="text-center text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-1">한 줄 요약</p>
          <p className="text-center text-gray-800 font-medium text-sm mb-4 max-w-3xl mx-auto">
            시니어앤라이프는 <strong>DAL 생태계 안의 시니어 축</strong>이며, 같은 기술 스택이 다른 산업에도 확장됩니다.
          </p>
          <p className="text-center text-gray-600 text-sm mb-3 max-w-3xl mx-auto">
            시니어앤라이프는 단순한 서비스가 아니라, <strong>DAL AI 디지털케어로그 기술의 시니어 산업 응용 사례</strong>입니다.
          </p>
          <p className="text-center text-gray-600 text-xs mb-6 max-w-3xl mx-auto">
            DAL 플랫폼은 발달장애, 시니어 돌봄, 헬스케어, 교육 등 다양한 영역에서 사람의 상태와 변화를 기록하고, AI 분석을 통해 더 나은 의사결정을 돕는 <strong>AI 의사결정 인프라 플랫폼</strong>을 구축하고 있습니다. 시니어앤라이프는 그 첫 번째 산업 응용 중 하나입니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white rounded-2xl p-6 border border-blue-100 text-center">
              <div className="text-3xl mb-2">🌱</div>
              <h3 className="font-bold text-gray-900 mb-1">자람이</h3>
              <p className="text-xs text-gray-600">발달장애 디지털케어 플랫폼</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-green-200 text-center">
              <div className="text-3xl mb-2">👴</div>
              <h3 className="font-bold text-gray-900 mb-1">시니어앤라이프</h3>
              <p className="text-xs text-gray-600">시니어 돌봄 플랫폼</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-indigo-100 text-center">
              <div className="text-3xl mb-2">🏥</div>
              <h3 className="font-bold text-gray-900 mb-1">TotalCareLog</h3>
              <p className="text-xs text-gray-600">헬스케어 통합 플랫폼</p>
            </div>
          </div>

          <p className="mt-6 text-center text-gray-600 text-xs max-w-3xl mx-auto">
            이 밖에도 교육, 헬스케어, 금융 등 다양한 영역에서
            <strong> 의사결정 데이터와 디지털케어로그</strong>를 연결하여,
            사람의 삶 전반에서 발생하는 건강·돌봄·학습·의사결정 데이터를 하나의 인프라로 쌓아가는 것이 DAL의 방향입니다.
          </p>
          <div className="mt-6 bg-emerald-50/80 rounded-xl p-4 border border-emerald-100 max-w-3xl mx-auto">
            <p className="text-xs font-semibold text-emerald-800 mb-1 text-center">결론 요약</p>
            <p className="text-sm text-gray-800 text-center">
              즉, DAL은 단일 앱이 아니라 <strong>여러 산업을 잇는 AI 의사결정 인프라</strong>이고, 시니어앤라이프는 그 중 시니어 레이어입니다.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8: DAL AI 기술 */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">DAL AI 기술</h2>
          <p className="text-center text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-1">한 줄 요약</p>
          <p className="text-center text-gray-800 font-medium text-sm mb-4 max-w-3xl mx-auto">
            시니어 돌봄에 적용된 <strong>시계열·패턴·알림·연계</strong>는 DAL 코어 기술의 응용입니다.
          </p>
          <p className="text-center text-gray-600 text-sm mb-8 max-w-2xl mx-auto">DAL AI 디지털케어로그 기술을 시니어 돌봄에 적용합니다.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dalTech.map((tech, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="text-3xl mb-3">{tech.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{tech.title}</h3>
                <p className="text-xs text-gray-700">{tech.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-emerald-50/80 rounded-xl p-4 border border-emerald-100 max-w-3xl mx-auto">
            <p className="text-xs font-semibold text-emerald-800 mb-1 text-center">결론 요약</p>
            <p className="text-sm text-gray-800 text-center">
              즉, 기술 협력·연구 파트너에게 DAL은 <strong>재사용 가능한 케어 데이터 스택</strong>으로 제시됩니다.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 9: 플랫폼 효과 */}
      <section className="py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">시니어앤라이프 도입 효과</h2>
          <p className="text-center text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-1">한 줄 요약</p>
          <p className="text-center text-gray-800 font-medium text-sm mb-4 max-w-3xl mx-auto">
            역할은 다르지만, 모두 <strong>같은 기록·같은 신뢰·같은 데이터 언어</strong>를 씁니다.
          </p>
          <p className="text-center text-gray-600 text-sm mb-8 max-w-2xl mx-auto">보호자·기관·병원이 함께 얻는 가치</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUse.map((reason, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="text-3xl mb-3">{reason.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-sm text-gray-700">{reason.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-emerald-50/80 rounded-xl p-4 border border-emerald-100 max-w-3xl mx-auto">
            <p className="text-xs font-semibold text-emerald-800 mb-1 text-center">결론 요약</p>
            <p className="text-sm text-gray-800 text-center">
              즉, 도입은 &quot;기능 추가&quot;가 아니라 <strong>가족·기관·진료·정책이 같은 데이터를 공유하는 전환</strong>입니다.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-600 mb-4 max-w-2xl mx-auto">
            이곳(DAL 홈페이지)은 <strong>기술·플랫폼·산업·투자·협력</strong>을 소개하는 사이트입니다. 실제 서비스 이용·시설 검색·기관 등록·상담은 <strong>시니어앤라이프 서비스(seniorandlife.com)</strong>에서 진행됩니다.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            시니어앤라이프와 함께 시니어 케어의 표준을 만듭니다
          </h2>
          <p className="text-xl text-gray-700 mb-6 max-w-4xl mx-auto">
            시니어앤라이프는 단순한 정보 제공 사이트가 아니라, 재가·시설·의료·공공이 함께 쓰는{' '}
            <strong>시니어 디지털케어로그 인프라</strong>를 지향합니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 max-w-5xl mx-auto">
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

          <p className="text-sm font-semibold text-gray-800 mb-4">지금 바로 다음 중 하나를 선택하세요</p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-stretch max-w-5xl mx-auto mb-10">
            <a
              href="https://seniorandlife.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col items-center justify-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-4 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity shadow-md flex-1 min-w-[220px]"
            >
              <span>지금 시니어 시설을 찾아보세요</span>
              <span className="text-xs font-normal text-emerald-100 mt-1 opacity-95">seniorandlife.com</span>
            </a>
            <a
              href="mailto:senior@dreamailab.com?subject=%5B%EA%B8%B0%EA%B4%80%20%EB%8F%84%EC%9E%85%5D%20%EC%83%81%EB%8B%B4%20%EC%9A%94%EC%B2%AD"
              className="inline-flex flex-col items-center justify-center bg-white border-2 border-emerald-600 text-emerald-800 px-6 py-4 rounded-xl text-sm font-semibold hover:bg-emerald-50 transition-colors shadow-sm flex-1 min-w-[220px]"
            >
              <span>우리 기관에 도입 상담 받기</span>
              <span className="text-xs font-normal text-gray-600 mt-1">senior@dreamailab.com</span>
            </a>
            <Link
              href="/contact?type=tech"
              className="inline-flex flex-col items-center justify-center bg-white border-2 border-gray-800 text-gray-900 px-6 py-4 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors shadow-sm flex-1 min-w-[220px]"
            >
              <span>AI 디지털케어로그 데모 요청</span>
              <span className="text-xs font-normal text-gray-600 mt-1">DAL 기술·연구 협력</span>
            </Link>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
            <Link
              href="/contact?type=ir"
              className="text-emerald-800 font-medium underline underline-offset-2 hover:text-emerald-900"
            >
              IR · 투자 문의
            </Link>
            <span className="hidden sm:inline text-gray-300">|</span>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              일반 문의
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
