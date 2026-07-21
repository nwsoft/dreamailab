import type { Metadata } from 'next'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import { MarketingIcon, type MarketingIconName } from '../../../components/MarketingIcon'

export const metadata: Metadata = {
  title: '에듀케어로그(EduCareLog) – 학습 데이터 기반 개별화 교육 인프라 | 드림에이아이랩',
  description:
    '같은 수업이라도 학생마다 속도와 막히는 지점은 다릅니다. 에듀케어로그는 학생별 수준·반응을 기록하고 AI가 맞춤 학습 경로를 이어 주는 교육 개인화 인프라(DAL 교육 축)입니다.',
  openGraph: {
    title: '에듀케어로그(EduCareLog) – 학습 데이터 기반 개별화 교육 인프라',
    description:
      '학생별 맞춤 학습 경로와 실행·환류를 도와 주는 교육 개인화 인프라. 드림에이아이랩 AI 디지털케어로그 교육 축.',
    url: 'https://dreamailab.com/services/educarelog',
    siteName: 'Dream AI Lab',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '에듀케어로그(EduCareLog) – 개별화 교육 인프라',
    description:
      '학생별 수준 추적·맞춤 경로. 에듀케어로그 — 교육 개인화 인프라. 본문에서 구조·도입.',
  },
  alternates: {
    canonical: 'https://dreamailab.com/services/educarelog',
  },
  robots: { index: true, follow: true },
}

export default function EduCareLogService() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: '에듀케어로그',
    provider: {
      '@type': 'Organization',
      name: 'Dream AI Lab',
      url: 'https://dreamailab.com/',
    },
    category: 'Education',
    areaServed: 'KR',
    description:
      '에듀케어로그: 도입된 학습 활동 안에서 학생별 반응을 표준 학습 로그로 쌓고, 분석·맞춤 경로·퀴즈·루틴·안내·환류까지 한 학생 단위로 이어 주는 교육 개인화 인프라(DAL 교육 축). 공교·사교·가정 데이터를 서로 합치는 플랫폼이 아닙니다.',
    offers: {
      '@type': 'Offer',
      category: 'B2B/B2G 파트너십',
      availability: 'https://schema.org/PreOrder',
    },
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Services', item: 'https://dreamailab.com/services' },
      { '@type': 'ListItem', position: 2, name: '에듀케어로그', item: 'https://dreamailab.com/services/educarelog' },
    ],
  }

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '우리는 교육기업인가요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '아닙니다. 드림에이아이랩은 AI 디지털케어로그 엔진 제공사이며, 학교·학원·지자체·에듀테크와 파트너십·임베드를 지향합니다.',
        },
      },
      {
        '@type': 'Question',
        name: '어떤 연동을 지원하나요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'LMS·문제은행과 API·CSV·Webhook, LTI/OneRoster 스타일 연동과 교과 구조·학습 콘텐츠 맵핑을 지원합니다.',
        },
      },
      {
        '@type': 'Question',
        name: '개인정보·보안은?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '동의·최소 수집·암호화·RBAC·감사로그·비식별 통계를 원칙으로 합니다.',
        },
      },
      {
        '@type': 'Question',
        name: '도입 형태는?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SaaS·온프레미스, 학교·지자체·학원·가정형 패키지를 지향합니다.',
        },
      },
    ],
  }

  const platformSteps: {
    n: number
    title: string
    body: string | string[]
    icon: MarketingIconName
  }[] = [
    {
      n: 1,
      title: '학습·행동 로그 수집',
      body: '과제·진단·수업 참여·반응 시간·이탈 지점을 같은 기준으로 정리해 쌓습니다.',
      icon: 'upload',
    },
    {
      n: 2,
      title: '분석: 성취·오개념·주의 패턴',
      body: '점수만이 아니라 "어디서 멈췄는지, 무엇을 오해하는지"를 구간 단위로 잡습니다.',
      icon: 'chart',
    },
    { n: 3, title: '개인화 경로 생성', body: '복습·신규·보정 비율과 단원 순서를 학생마다 다르게 잡습니다.', icon: 'target' },
    {
      n: 4,
      title: '실행: 퀴즈·루틴·리포트',
      body: [
        '교과 구조 및 다양한 학습 콘텐츠에 맞는 퀴즈, 시험 주 루틴, 학부모·교사 리포트까지 같은 데이터로 뻗습니다.',
        '생성된 결과는 교사·강사·부모의 확인과 조정을 거쳐 실제 적용됩니다.',
      ],
      icon: 'bolt',
    },
    {
      n: 5,
      title: '환류(재학습)',
      body: '실행 결과가 다시 로그로 들어가 경로가 고쳐집니다. 지속적으로 사용할수록 루프가 점차 안정적으로 작동합니다.',
      icon: 'refresh',
    },
  ]

  const coreFeatures: { icon: MarketingIconName; title: string; result: string }[] = [
    {
      icon: 'blocks',
      title: '학생별 학습 기록',
      result:
        '도입된 활동(과제·수업 반응 등)이 같은 형식으로 쌓이면, 한 학생의 막힘·속도가 말이 아니라 기록으로 남습니다.',
    },
    {
      icon: 'target',
      title: '구간 단위 약점',
      result: '"수학 못함"이 아니라 "이 단계 개념에서 반복 정지"로 바뀌어 다음 행동이 정해집니다.',
    },
    {
      icon: 'refresh',
      title: '맞춤 루프',
      result: '영상·문제·퀴즈가 고정이 아니라, 지난주 반응에 맞춰 이번 주 루틴이 갈립니다.',
    },
    {
      icon: 'document',
      title: '교사 업무 초안',
      result: '수업 전 준비도·수업 후 피드백 초안·학부모 설명 자료가 같은 로그에서 뽑힙니다.',
    },
  ]

  const personaUsage: { who: string; pain: string; gain: string; icon: MarketingIconName }[] = [
    {
      who: '학생·보호자(가족)',
      pain: '학원비는 나가는데, 아이가 어디까지 이해했는지 모름.',
      gain: '주간 리포트와 다음 주 집중 포인트를 문장으로 받습니다.',
      icon: 'user',
    },
    {
      who: '교사',
      pain: '명단은 30명인데, 사람마다 준비·피드백을 다 맞출 시간이 없음.',
      gain: '수업 전 학생별 준비도와 과제·피드백 초안을 줄여 수업 설계에 시간을 둡니다.',
      icon: 'graduation',
    },
    {
      who: '학원',
      pain: '강사·반·원생마다 데이터가 흩어져 품질·이탈 원인을 못 잡음.',
      gain: '원생 단위 진도·약점·몰입 신호를 에듀케어로그 기준으로 관리합니다.',
      icon: 'blocks',
    },
    {
      who: '학교·교육청·지자체·연구',
      pain: '정책은 개별화인데, 학급·프로그램 안에서 학생별 반응이 표준 형식으로 남기 어렵다.',
      gain: '학교·사업 단위로 같은 형식의 로그를 쌓으면 기초학력 개입과 프로그램 효과를 근거로 설명하기 쉬워집니다.',
      icon: 'globe',
    },
  ]

  const techBullets: {
    tag: string
    icon: MarketingIconName
    why: string | string[]
  }[] = [
    {
      tag: '표준 스키마',
      icon: 'blocks',
      why: [
        '학습 반응을 같은 필드로 남겨야 수준·오개념·경로 생성이 가능합니다. 에듀케어로그는 공교와 사교 데이터를 하나로 합치는 게 아니라, 각 도입 맥락 안에서 학생별 로그를 같은 구조로 돌리기 위해 표준 형식을 둡니다.',
        '실제 적용에서는 환경마다 데이터 소스가 달라, 같은 기준으로 정리해 쌓는 과정에서 단계적으로 맞춰 갑니다.',
      ],
    },
    {
      tag: '피드백 기반 경로 조정(환류)',
      icon: 'refresh',
      why: '추천 한 번이 끝이면 개인화가 아니므로, 학습 반응에 맞춰 경로를 고치는 피드백(환류)만 남깁니다.',
    },
    {
      tag: '멀티모달·시계열',
      icon: 'chart',
      why: '정답 여부만으로는 부족하므로, 멈춘 시점·재시청·속도가 다음 난이도와 소요 시간을 정합니다.',
    },
  ]

  const whyNow = [
    '기초학력 보장·개별화 교육은 이미 정책 방향입니다. 다만 실행은 영상·교재를 더하는 일이 아니라, 학생별로 어디서 멈췄는지가 기록되고 그다음 활동까지 이어져야 합니다.',
    '교육청·학교는 동의·표준에 맞춰 학급·프로그램 안에서 학생별 로그가 쌓이도록 전환해야 합니다. 점수만 남고 반응이 안 남으면 개입 설계가 어렵습니다.',
  ]

  const ecosystem: { name: string; focus: string; role: string; href?: string; icon: MarketingIconName }[] = [
    { name: '자람이', focus: '발달·행동·치료 맥락 데이터', role: '케어로그 검증 1축', href: '/services/jarame', icon: 'sprout' },
    { name: '에듀케어로그', focus: '학생별 수준·경로·환류', role: '교육 개인화 엔진', icon: 'graduation' },
    { name: '시니어앤라이프', focus: '돌봄·생활 데이터', role: '시니어 인프라', href: '/services/senior', icon: 'heart' },
    { name: '토탈케어로그', focus: '의료·건강 통합', role: '헬스케어 축', href: '/services/healthcare', icon: 'stethoscope' },
  ]

  const outcomes: { metric: string; before: string; after: string; icon: MarketingIconName }[] = [
    {
      metric: '교사 피드백·리포트 시간',
      before: '학생마다 문장을 처음부터 작성.',
      after:
        '로그에서 초안이 나옵니다. 파일럿 기준 주당 약 3~5시간이던 작성·정리 시간이 같은 업무량에서 줄어드는 사례가 있습니다.',
      icon: 'document',
    },
    {
      metric: '학생 개입 속도',
      before: '약점을 알아도 다음 활동 배정까지 하루·수일 걸림.',
      after: '한 학생 기준으로 퀴즈·루틴·복습 순서가 같은 흐름에서 바로 붙습니다. 헛돌 시간이 줄어듭니다.',
      icon: 'bolt',
    },
    {
      metric: '가정의 사교육 선택',
      before: '감으로 중복 과목·과도한 과제를 쌓기 쉬움.',
      after: '우선순위가 로그에 보이면 중복에 쓰는 비용을 줄이는 선택이 가능해집니다.',
      icon: 'scale',
    },
    {
      metric: '학교·교육청 의사결정',
      before: '점수·설문 조각으로 프로그램 효과를 논의.',
      after: '같은 기준의 로그·경로·환류로 기초학력 개입을 설명할 근거가 생깁니다.',
      icon: 'graduation',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* 1. Hero — 수업·개인 차 → 학생 맞춤 인프라 (기관 간 ‘연결’이 아님) */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs text-white/80 mb-5">
              <span className="inline-flex items-center gap-2 flex-wrap justify-center">
                <span className="px-2.5 py-0.5 rounded-full bg-white/20 border border-white/30 font-semibold">
                  Service Status: Pilot
                </span>
                <span>개발·고도화 중 · Dream AI Lab</span>
              </span>
            </p>
            <h1 className="font-bold leading-tight tracking-tight text-balance break-keep mb-4 max-w-4xl mx-auto">
              <span className="block text-2xl sm:text-4xl lg:text-5xl mb-2.5">
                같은 수업을 들어도 모든 학생은 같은 속도로 이해하지 않습니다.
              </span>
              <span className="block text-lg sm:text-2xl lg:text-3xl font-semibold text-white/95 leading-snug mb-1">
                에듀케어로그는 학생별 학습 수준과 막히는 지점을 기록하고,
              </span>
              <span className="block text-lg sm:text-2xl lg:text-3xl font-semibold text-white/95 leading-snug">
                AI가 다음 학습 경로를 맞춤형으로 이어 주는 교육 개인화 인프라입니다.
              </span>
            </h1>
            <p className="text-base md:text-lg max-w-2xl mx-auto text-blue-100 mb-2.5 leading-relaxed break-keep">
              드림에이아이랩 <strong className="font-semibold text-white">AI 디지털케어로그</strong>의 교육 축입니다. 공교·사교·가정을 서로
              잇는 플랫폼이 아니라, <strong className="text-white">도입된 맥락 안에서</strong> 학생 맞춤을 돕습니다.
            </p>
            <p className="text-sm max-w-2xl mx-auto text-white/80 leading-relaxed">
              문제 정의·루프·도입 시나리오는 아래에서 이어집니다.
            </p>
          </div>
        </div>
      </section>

      {/* 1b. Hero 보조 + 한 줄 정의 + 왜 지금 필요한가(압축) */}
      <section className="py-7 md:py-10 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 md:space-y-5">
          <p className="text-center text-[13px] md:text-base font-medium text-gray-900 leading-relaxed break-keep">
            기초에서 뒤처진 학생도, 빠르게 앞서는 학생도 같은 문제집으로는 설명되지 않습니다.
          </p>

          <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 px-4 md:px-6 py-4 md:py-5 text-center">
            <p className="text-gray-900 font-semibold text-[13px] md:text-base leading-snug md:leading-relaxed break-keep">
              에듀케어로그는 학생별 학습 수준, 오개념, 반복 정지 구간을 지속 기록하고 AI가 다음 학습 경로를 생성하는 교육 개인화 인프라입니다.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white px-4 md:px-6 py-4 md:py-5 text-[13px] md:text-sm text-gray-800 leading-relaxed space-y-2.5">
            <p>
              모든 학생은 같은 속도로 이해하지 않지만,
              <br className="hidden md:block" />
              현재 교육은 평균 학생 기준으로 운영됩니다.
            </p>
            <p>
              기초에서 한 번 뒤처진 학생은 다음 단원을 따라가기 어려워지고,
              <br className="hidden md:block" />
              교사나 강사는 이를 매일 손으로 추적하기 어렵습니다.
            </p>
            <p className="font-medium text-gray-900">
              결국 학생별 상태를 기록하고 다음 행동으로 이어주는 구조가 필요합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 1c. 루프 시각화 — 한 학생 단위 수집→환류 (DAL 공통 루프) */}
      <section className="py-10 md:py-12 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 text-center">에듀케어로그 루프 한눈에 보기</h2>
          <p className="text-center text-gray-600 text-sm mb-6 md:mb-8 max-w-2xl mx-auto">
            다섯 단계는 한 학생의 맞춤 루프입니다. 본문과 도표는 같은 순서·용어를 씁니다.
          </p>
          <div className="rounded-2xl overflow-hidden border border-indigo-100 bg-white shadow-sm max-w-5xl mx-auto">
            <picture>
              <source media="(max-width: 768px)" srcSet="/images/services/educarelog-platform-flow-mobile.svg" />
              <img
                src="/images/services/educarelog-platform-flow.svg"
                alt="에듀케어로그 플랫폼: 수집, 분석, 맞춤 경로, 실행, 환류의 다섯 단계 루프와 DAL 교육 축"
                className="w-full h-auto object-contain" loading="lazy" decoding="async" />
            </picture>
          </div>
        </div>
      </section>

      {/* 1d. 누가 어떻게 달라지는가 — 상단 압축 요약 */}
      <section className="py-7 md:py-10 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 text-center mb-5 md:mb-6">누가 어떻게 달라지는가</h2>
          <div className="grid sm:grid-cols-2 gap-3 md:gap-4 text-[13px] md:text-sm">
            <div className="rounded-xl border border-gray-200 bg-white p-3 md:p-4">
              <p className="font-semibold text-gray-900 mb-1">학생</p>
              <p className="text-gray-700">막힌 개념이 개인별로 다르게 정리됩니다.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-3 md:p-4">
              <p className="font-semibold text-gray-900 mb-1">보호자</p>
              <p className="text-gray-700">아이의 학습 정지 지점을 이해할 수 있습니다.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-3 md:p-4">
              <p className="font-semibold text-gray-900 mb-1">교사/강사</p>
              <p className="text-gray-700">학생별 다음 과제가 자동 초안화됩니다.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-3 md:p-4">
              <p className="font-semibold text-gray-900 mb-1">학교/학원</p>
              <p className="text-gray-700">수준별 운영 패턴을 기록 기반으로 관리합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 문제 정의 — 상세 설명 구간 */}
      <section id="educ-problem" className="scroll-mt-28 py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            왜 수업이 맞춤이 되지 않는가
          </h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-6">
            원인은 콘텐츠 부족이 아니라, <strong className="text-gray-800">학생마다 다른 속도·막힘</strong>을 수업이 평균에 맞춰 흐르는
            점과, 그 차이를 지속 기록·실행하기 어려운 점입니다.
          </p>
          <div className="max-w-3xl mx-auto text-sm text-gray-800 space-y-3 mb-10 text-center md:text-left">
            <p className="font-medium text-gray-900">한 반·한 교실·한 학원 반 안에도 이해도·오개념·반복이 필요한 지점은 제각각입니다.</p>
            <p>그런데 수업·교재는 흔히 <strong className="text-gray-900">평균에 맞춘 일정</strong>으로 흘러, 뒤처지는 학생은 기초에서 누적 격차가 납니다.</p>
            <p>
              콘텐츠를 늘려도 <strong className="text-gray-900">학생별로 어디서 멈췄는지</strong>가 기록·실행으로 이어지지 않으면 맞춤은 열리지
              않습니다.
            </p>
            <p>교사·강사는 전원에 대해 매일 퀴즈·루틴·피드백을 손으로 잇기엔 시간이 없습니다. 분석 뒤 실행이 끊기면 맞춤은 멈춥니다.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-red-50 rounded-xl p-5 border border-red-100 flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white border border-red-100 text-red-800">
                <MarketingIcon name="trend" className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-gray-900 text-sm mb-2">한계 1: 개별 수준·막힘이 제대로 안 읽힘</h3>
                <p className="text-sm text-gray-700">
                  점수만으로는 &quot;어느 개념에서 멈췄는지&quot;가 드러나지 않고, 맞춤에 쓸 입력이 부족해집니다.
                </p>
              </div>
            </div>
            <div className="bg-red-50 rounded-xl p-5 border border-red-100 flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white border border-red-100 text-red-800">
                <MarketingIcon name="bolt" className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-gray-900 text-sm mb-2">한계 2: 분석 뒤 실행이 사람 몫으로 남음</h3>
                <p className="text-sm text-gray-700">
                  퀴즈·루틴·보호자 설명을 매일 손으로 잇지 못하면, 개인화는 설계에서 끊깁니다.
                </p>
              </div>
            </div>
            <div className="bg-red-50 rounded-xl p-5 border border-red-100 flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white border border-red-100 text-red-800">
                <MarketingIcon name="link" className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-gray-900 text-sm mb-2">한계 3: 기초 누락이 쌓이고 정보 격차로 이어짐</h3>
                <p className="text-sm text-gray-700">
                  아이 상태를 정확히 읽기 어려우면 사교육·과외를 감에 맡기기 쉽습니다. (공교·사교를 데이터로 &apos;합친다&apos;는 전제는 두지
                  않습니다.)
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-indigo-50/70 border border-indigo-100 rounded-xl p-5 max-w-3xl mx-auto">
            <p className="text-sm text-gray-800 text-center leading-relaxed">
              에듀케어로그는 <strong className="text-gray-900">기관을 서로 연결</strong>하는 제품이 아니라, 도입된 수업·학습 안에서{' '}
              <strong className="text-gray-900">학생 한 명씩</strong> 수준·막힘·경로·환류를 돌리는 <strong className="text-gray-900">맞춤
              인프라</strong>입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 3. 사용자 공감 */}
      <section id="educ-personas" className="scroll-mt-28 py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">누가 왜 막히는지</h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-10">
            네 역할의 현장 문장을 먼저 맞춥니다.
          </p>
          <div className="space-y-4">
            {personaUsage.map((p) => (
              <div key={p.who} className="bg-white rounded-xl p-5 border border-gray-100 flex flex-col md:flex-row md:gap-6">
                <div className="md:w-44 shrink-0 flex md:flex-col items-center md:items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-100">
                    <MarketingIcon name={p.icon} className="h-5 w-5" />
                  </span>
                  <p className="font-bold text-indigo-700 text-center md:text-left">{p.who}</p>
                </div>
                <div className="flex-1 text-sm">
                  <p className="text-gray-500 mb-1">막힘</p>
                  <p className="text-gray-800 mb-3">{p.pain}</p>
                  <p className="text-gray-500 mb-1">바뀌는 것</p>
                  <p className="text-gray-900 font-medium">{p.gain}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 플랫폼 구조 */}
      <section id="educ-platform" className="scroll-mt-28 py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">에듀케어로그 플랫폼 구조</h2>
          <p className="text-center text-sm text-gray-800 max-w-3xl mx-auto mb-3 leading-relaxed">
            에듀케어로그는
            <br />
            학습 반응·수업·과제를 바탕으로
            <br />
            학생별 수준·막힘을 분석하고 맞춤 경로·실행·환류를 이어 주는
            <br />
            AI 디지털케어로그 기반 <strong className="text-gray-900">교육 개인화</strong> 인프라입니다.
          </p>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-6">
            다섯 단계는 별도 기능이 아니라 한 루프입니다.
          </p>
          <p className="max-w-3xl mx-auto text-center text-sm text-gray-800 mb-10 font-medium leading-relaxed bg-gray-50 border border-gray-200 rounded-xl py-4 px-5">
            구조 정의: 로그 표준화 → 수준·오개념·패턴 정리 → 개인 경로 → 실행(퀴즈·루틴·리포트) → 환류.
          </p>
          <div className="space-y-3">
            {platformSteps.map((s) => (
              <div key={s.n} className="flex gap-4 items-start bg-indigo-50/50 rounded-xl p-4 border border-indigo-100">
                <div className="flex shrink-0 items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-indigo-200 text-indigo-700">
                    <MarketingIcon name={s.icon} className="h-5 w-5" />
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-white text-sm font-bold">
                    {s.n}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{s.title}</h3>
                  {Array.isArray(s.body) ? (
                    <div className="space-y-2">
                      {s.body.map((line, i) => (
                        <p key={i} className="text-sm text-gray-700">
                          {line}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-700">{s.body}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 max-w-3xl mx-auto bg-indigo-900/5 border border-indigo-200 rounded-xl p-5 text-sm text-gray-800">
            <p className="font-semibold text-indigo-900 mb-2">DAL과의 관계</p>
            <p className="leading-relaxed">
              위 다섯 단계는 에듀케어로그만의 독자 문법이 아닙니다. <strong>DAL AI 디지털케어로그</strong>의 교육 축입니다.
            </p>
            <p className="leading-relaxed mt-2">
              같은 구조는 각 도메인의 운영 안에서 반복됩니다. 교육에서는 <strong>학생별 수준·경로·환류</strong>를 중심으로 씁니다.
            </p>
          </div>
          <div className="mt-10 max-w-3xl mx-auto text-sm text-gray-800 leading-relaxed space-y-4">
            <p>개인화는 &quot;AI가 똑똑해서&quot;가 아니라, 학생별 기록이 누적되고 그 기록이 다음 행동으로 바로 이어질 때 열립니다.</p>
            <p>많이 푸는 것만으로는 막힘 지점이 해결되지 않습니다. &quot;어디서 멈췄는지&quot;를 기준으로 다음 학습을 정해야 합니다.</p>
            <p>정체된 구간이 잡히면 다음 학습으로 바로 이어집니다.</p>
            <p>수준별 맞춤이 실제로 돌아가기 쉬워집니다.</p>
          </div>
          <p className="mt-8 max-w-3xl mx-auto text-sm text-gray-600 leading-relaxed text-center border border-gray-200 rounded-xl py-4 px-5 bg-gray-50/80">
            개인화 경로는 초기에는 기본 패턴 중심으로 시작합니다. 학습 로그가 쌓일수록 점진적으로 정확도가 높아집니다.
          </p>
        </div>
      </section>

      {/* 5. 핵심 기능 */}
      <section id="educ-features" className="scroll-mt-28 py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">핵심 기능 — 그래서 뭐가 달라지나</h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-10">
            로그가 모이면 말이 아니라 데이터로 다음 행동이 정해집니다.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {coreFeatures.map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:border-indigo-200 transition-colors">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
                  <MarketingIcon name={f.icon} className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{f.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{f.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 사용자별 사용 방식 */}
      <section id="educ-usage" className="scroll-mt-28 py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">사용자별 사용 방식</h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-10">
            같은 엔진, 다른 화면. 역할마다 "다음 행동"만 다릅니다.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl p-5 bg-white border border-gray-100 shadow-sm">
              <div className="mb-2 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
                  <MarketingIcon name="user" className="h-5 w-5" />
                </span>
                <h3 className="font-bold text-gray-900">부모</h3>
              </div>
              <p className="text-gray-700">
                에듀케어로그에서 주간 요약·이번 주 집중 하나·학교·학원과 겹치는 과목을 줄이는 순서를 봅니다.
              </p>
            </div>
            <div className="rounded-xl p-5 bg-white border border-gray-100 shadow-sm">
              <div className="mb-2 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
                  <MarketingIcon name="graduation" className="h-5 w-5" />
                </span>
                <h3 className="font-bold text-gray-900">교사</h3>
              </div>
              <p className="text-gray-700">수업 전 반 준비도, 수업 후 피드백 초안, 학부모 상담용 한 장 요약을 같은 로그에서 꺼냅니다.</p>
            </div>
            <div className="rounded-xl p-5 bg-white border border-gray-100 shadow-sm">
              <div className="mb-2 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
                  <MarketingIcon name="blocks" className="h-5 w-5" />
                </span>
                <h3 className="font-bold text-gray-900">학원</h3>
              </div>
              <p className="text-gray-700">원생·강사·반 단위로 진도·이탈 신호·난이도 루프를 운영 데이터로 봅니다.</p>
            </div>
            <div className="rounded-xl p-5 bg-white border border-gray-100 shadow-sm">
              <div className="mb-2 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
                  <MarketingIcon name="globe" className="h-5 w-5" />
                </span>
                <h3 className="font-bold text-gray-900">학교·교육청·지자체</h3>
              </div>
              <p className="text-gray-700">프로그램·학년·지역 단위로 기초학력 지표와 개입 효과를 같은 기준으로 비교합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. 실제 현장 사용 흐름 */}
      <section id="educ-flows" className="scroll-mt-28 py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">실제 현장에서 어떻게 사용되는가</h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-10">
            역할마다 화면은 다르지만, 같은 로그 위에서 하루가 이어집니다.
          </p>
          <div className="space-y-5 text-sm">
            <div className="rounded-xl bg-white border border-gray-200 p-5 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">1. 부모</h3>
              <ol className="list-decimal pl-5 text-gray-800 space-y-1">
                <li>에듀케어로그에서 주간 학습 요약을 확인합니다.</li>
                <li>아이 약점 구간(단원·유형)을 글로 확인합니다.</li>
                <li>이번 주 학습 루틴·집중 과목을 봅니다.</li>
                <li>겹치는 과목·학원을 줄이거나 순서를 바꿉니다.</li>
              </ol>
            </div>
            <div className="rounded-xl bg-white border border-gray-200 p-5 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">2. 학생</h3>
              <ol className="list-decimal pl-5 text-gray-800 space-y-1">
                <li>개인 맞춤 퀴즈를 풉니다.</li>
                <li>정해진 루틴(시간·순서)대로 학습을 진행합니다.</li>
                <li>반복되는 약점은 경로가 다시 잡히며 보정됩니다.</li>
              </ol>
            </div>
            <div className="rounded-xl bg-white border border-gray-200 p-5 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">3. 교사</h3>
              <ol className="list-decimal pl-5 text-gray-800 space-y-1">
                <li>수업 전 반 전체 준비도를 봅니다.</li>
                <li>학생별 상태를 반영해 수업 초점을 잡습니다.</li>
                <li>수업 후 피드백 초안을 받아 검토·발송합니다.</li>
              </ol>
            </div>
            <div className="rounded-xl bg-white border border-gray-200 p-5 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">4. 학원·강사</h3>
              <ol className="list-decimal pl-5 text-gray-800 space-y-1">
                <li>반·원생별 학습 상태를 한곳에서 봅니다.</li>
                <li>이탈 신호·난이도 불일치를 보고 조정합니다.</li>
                <li>학부모 설명용 요약 자료를 활용합니다.</li>
              </ol>
            </div>
            <div className="rounded-xl bg-white border border-gray-200 p-5 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">5. 학교</h3>
              <ol className="list-decimal pl-5 text-gray-800 space-y-1">
                <li>특정 학급·과목 단위로 파일럿을 둡니다.</li>
                <li>기초학력 개입 대상을 추적합니다.</li>
                <li>수업 전후 변화를 같은 로그로 대조합니다.</li>
              </ol>
            </div>
            <div className="rounded-xl bg-white border border-gray-200 p-5 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">6. 교육청·지자체</h3>
              <ol className="list-decimal pl-5 text-gray-800 space-y-1">
                <li>학교 간 학습 데이터를 같은 눈금으로 봅니다.</li>
                <li>정책·사업 효과를 기록 기반으로 분석합니다.</li>
                <li>프로그램 성과를 관리합니다.</li>
              </ol>
            </div>
          </div>
          <p className="text-center text-sm font-semibold text-gray-900 max-w-3xl mx-auto mt-10 leading-relaxed">
            에듀케어로그는 분석에서 끝나는 시스템이 아니라, 모든 참여자가 같은 데이터로 행동을 이어가는 구조입니다.
          </p>
        </div>
      </section>

      {/* 8. AI 디지털케어로그 기술 */}
      <section id="educ-tech" className="scroll-mt-28 py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">AI 디지털케어로그 기술</h2>
          <p className="text-center text-indigo-800 text-xs font-semibold tracking-wide max-w-2xl mx-auto mb-3">
            Service Status: Pilot · 개발·고도화 진행 중 · AI 디지털케어로그 교육 응용
          </p>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-10">
            기술 이름이 아니라, 왜 교육에서 통과해야 하는지만 짚습니다.
          </p>
          <div className="space-y-4 max-w-3xl mx-auto">
            {techBullets.map((t) => (
              <div key={t.tag} className="bg-white rounded-xl p-5 border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-100">
                    <MarketingIcon name={t.icon} className="h-5 w-5" />
                  </span>
                  <p className="text-xs font-semibold text-indigo-600">{t.tag}</p>
                </div>
                {Array.isArray(t.why) ? (
                  <div className="space-y-2">
                    {t.why.map((para, i) => (
                      <p key={i} className="text-sm text-gray-800 leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-800 leading-relaxed">{t.why}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. IFP·개인화 비교 */}
      <section id="educ-ifp" className="scroll-mt-28 py-14 bg-indigo-50/50 border-b border-indigo-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            왜 기존 개인화 교육(IFP)은 실패했고, 에듀케어로그는 작동하는가
          </h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-10">
            과제가 많았던 것이 아니라, <strong className="text-gray-900">데이터·실행·유지</strong> 세 축이 끊겨 있었습니다.
          </p>

          <div className="max-w-4xl mx-auto mb-10 rounded-xl border border-indigo-200 bg-white p-5 md:p-6 shadow-sm">
            <h3 className="font-bold text-gray-900 text-sm mb-2 text-center">문제풀이·챗봇형 교육 AI와 달리</h3>
            <p className="text-center text-gray-600 text-xs sm:text-sm mb-5 max-w-2xl mx-auto">
              정답·대화가 아니라 로그·실행·환류까지 한 줄기입니다.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="font-semibold text-gray-800 mb-2">많은 교육 AI</p>
                <ul className="text-gray-700 space-y-1.5 list-disc pl-5">
                  <li>정답·해설·대화에 머무름</li>
                  <li>풀이만 쌓이고 수업·가정과 단절</li>
                  <li>과제·루틴까지 자동 연결은 약함</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-indigo-900 mb-2">에듀케어로그</p>
                <ul className="text-gray-800 space-y-1.5 list-disc pl-5">
                  <li>로그 표준화 → 구간 진단</li>
                  <li>경로·퀴즈·루틴·리포트까지 실행</li>
                  <li>결과가 다시 로그로 환류</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="rounded-2xl p-6 bg-white border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-900 text-sm mb-4">1. 기존 시스템(IFP 포함)의 구조적 한계</h3>
              <ul className="text-sm text-gray-800 space-y-4">
                <li>
                  <p className="font-semibold text-gray-900">데이터가 지속되지 않는다</p>
                  <p className="mt-1 text-gray-700">
                    진단·설문·계획이 1회성이면 하루 반응이 쌓이지 않습니다. 개인화할 재료가 없고{' '}
                    <strong className="text-gray-900">현장에서 바로 실패합니다.</strong>
                  </p>
                </li>
                <li>
                  <p className="font-semibold text-gray-900">분석 이후 실행이 연결되지 않는다</p>
                  <p className="mt-1 text-gray-700">
                    방향·추천에 그친 뒤 퀴즈·루틴·학부모 안내를 매번 손으로 잇습니다. 규모가 나지 않고{' '}
                    <strong className="text-gray-900">도입 후 멈춥니다.</strong>
                  </p>
                </li>
                <li>
                  <p className="font-semibold text-gray-900">유지 비용이 교사·부모에게 쏠린다</p>
                  <p className="mt-1 text-gray-700">
                    매일 보고·정리·연락이 사람 몫이면 부담이 큽니다. 일정이 밀리면 시스템은 공문만 남겨{' '}
                    <strong className="text-gray-900">지속되지 않습니다.</strong>
                  </p>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl p-6 bg-indigo-900/[0.06] border border-indigo-200 shadow-sm">
              <h3 className="font-bold text-indigo-950 text-sm mb-4">2. 에듀케어로그 구조 차이 — 왜 끊기지 않는가</h3>
              <ul className="text-sm text-gray-800 space-y-4">
                <li>
                  <p className="font-semibold text-indigo-950">로그 기반 누적 데이터</p>
                  <p className="mt-1 text-gray-800">
                    과제·수업 반응·진단이 같은 줄기로 쌓입니다. 다음 주 판단이 “어제 메모”가 아니라 기록을 보는 방식으로 이어집니다.
                  </p>
                  <p className="mt-1 text-gray-800">데이터가 끊기지 않습니다.</p>
                </li>
                <li>
                  <p className="font-semibold text-indigo-950">분석 → 초안·확인 후 실행</p>
                  <p className="mt-1 text-gray-800">초안이 생성되고, 교사·사용자가 확인 후 실행됩니다.</p>
                  <p className="mt-1 text-gray-800">
                    약점 구간이 정해지면 경로·퀴즈·루틴·리포트까지 같은 엔진에서 이어집니다. 추천에서 멈추지 않습니다.
                  </p>
                </li>
                <li>
                  <p className="font-semibold text-indigo-950">환류 루프</p>
                  <p className="mt-1 text-gray-800">
                    실행 결과가 다시 로그로 들어가 다음 경로가 고쳐지므로 한 번 짜 둔 계획만 반복하지 않습니다.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-10 rounded-xl border-2 border-indigo-200 bg-white p-6 text-center">
            <p className="text-xs font-semibold text-indigo-700 uppercase tracking-wide mb-3">3. 한 줄 비교</p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-left">
              <div>
                <p className="text-gray-500 mb-1">기존(IFP·개인화 계획 중심)</p>
                <p className="font-bold text-gray-900">설계·추천 시스템 — 방향은 잡히고 실행은 사람 몫</p>
              </div>
              <div>
                <p className="text-indigo-600 mb-1">에듀케어로그</p>
                <p className="font-bold text-indigo-950">실행 엔진 — 다음 행동까지 같은 데이터 줄기로 이음</p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <h3 className="font-bold text-gray-900 text-sm mb-4 text-center">4. 누구에게도 같은 말로</h3>
            <p className="text-sm text-gray-800 mb-2 text-center leading-relaxed">기존은 방향만 알려 주고 사람이 이어 붙였습니다.</p>
            <p className="text-sm text-gray-800 mb-5 text-center leading-relaxed">
              에듀케어로그는 <strong>다음 행동까지 같은 줄에서 이어 줍니다.</strong>
            </p>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg bg-white border border-gray-100 p-4">
                <p className="font-semibold text-gray-900 mb-1">부모</p>
                <p className="text-gray-700">이번 주에 뭘 하면 되는지, 왜 그 순서인지 리포트가 말로 이어 줍니다.</p>
              </div>
              <div className="rounded-lg bg-white border border-gray-100 p-4">
                <p className="font-semibold text-gray-900 mb-1">교사</p>
                <p className="text-gray-700">분석 결과가 즉시 과제·피드백 초안으로 붙어 밤샘 정리가 줄어듭니다.</p>
              </div>
              <div className="rounded-lg bg-white border border-gray-100 p-4">
                <p className="font-semibold text-gray-900 mb-1">교육청</p>
                <p className="text-gray-700">학교마다 다른 조각이 아니라 같은 형식의 기록으로 사업 효과를 말할 수 있습니다.</p>
              </div>
              <div className="rounded-lg bg-white border border-gray-100 p-4">
                <p className="font-semibold text-gray-900 mb-1">학원</p>
                <p className="text-gray-700">원생 상태가 에듀케어로그 화면에 남아 강사·학부모 설명이 같은 그림을 봅니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. 교육 산업 변화 */}
      <section id="educ-why-now" className="scroll-mt-28 py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">교육 산업 변화 — 왜 지금인가</h2>
          <p className="text-center text-sm font-semibold text-indigo-800 max-w-2xl mx-auto mb-8">
            정책은 개별화로 가는데, 현장은 로그 없이 조각난 채로 남기 쉽습니다.
          </p>
          <div className="max-w-3xl mx-auto space-y-4">
            {whyNow.map((line, i) => (
              <p key={i} className="text-sm text-gray-800 leading-relaxed border-l-4 border-indigo-400 pl-4 bg-white py-3 rounded-r-lg">
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 11. 기존 교육 시스템 대비 */}
      <section id="educ-compare" className="scroll-mt-28 py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            기존 교육 시스템과 무엇이 다른가
          </h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-6">
            에듀케어로그는 콘텐츠 한 종류를 더하는 일이 아니라, <strong className="text-gray-900">교육 인프라 엔진</strong> 자리입니다.
          </p>

          <div className="max-w-5xl mx-auto mb-10 rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
            <img
              src="/images/services/educarelog-system-compare.svg"
              alt="일반 교육 스택과 에듀케어로그: 부가 도구 대 인프라 엔진 위치 비교"
              className="w-full h-auto object-contain" loading="lazy" decoding="async" />
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-gray-200 p-5 md:p-6">
              <div className="flex items-start gap-3 mb-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-50 border border-gray-200 text-indigo-700">
                  <MarketingIcon name="robot" className="h-5 w-5" />
                </span>
                <h3 className="font-bold text-gray-900 text-sm pt-1.5">1. 교육 AI 업체 (문제풀이·챗봇형)</h3>
              </div>
              <p className="text-xs font-semibold text-gray-500 mb-2">특징</p>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1 mb-4">
                <li>문제 풀이·해설·질문 응답이 중심입니다.</li>
                <li>한 번의 세션에 맞춰져 있고, 주 단위 학습 줄기와는 따로 놉니다.</li>
                <li>수업 전후·가정까지 학습 흐름이 이어지지 않습니다.</li>
              </ul>
              <p className="text-xs font-semibold text-indigo-700 mb-2">에듀케어로그</p>
              <p className="text-sm text-gray-800">
                학습 전체 로그가 이어지고, 분석 → 실행(퀴즈·루틴·리포트) → 환류까지 같은 줄에서 돕니다.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-5 md:p-6">
              <div className="flex items-start gap-3 mb-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-50 border border-gray-200 text-indigo-700">
                  <MarketingIcon name="document" className="h-5 w-5" />
                </span>
                <h3 className="font-bold text-gray-900 text-sm pt-1.5">2. AI 디지털교과서</h3>
              </div>
              <p className="text-xs font-semibold text-gray-500 mb-2">특징</p>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1 mb-4">
                <li>교과 콘텐츠를 디지털로 담습니다.</li>
                <li>수업 시간 안의 보조 도구에 가깝습니다.</li>
              </ul>
              <p className="text-xs font-semibold text-indigo-700 mb-2">에듀케어로그</p>
              <p className="text-sm text-gray-800">
                교과서 대신 “학생 상태”를 다룹니다. 수업 안·밖·가정·학원 반응을 한 로그로 잇습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-5 md:p-6">
              <div className="flex items-start gap-3 mb-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-50 border border-gray-200 text-indigo-700">
                  <MarketingIcon name="blocks" className="h-5 w-5" />
                </span>
                <h3 className="font-bold text-gray-900 text-sm pt-1.5">3. 나이스(학교 시스템)</h3>
              </div>
              <p className="text-xs font-semibold text-gray-500 mb-2">특징</p>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1 mb-4">
                <li>행정·학사·공문·출결·성적 기록 관리가 중심입니다.</li>
                <li>점수와 이수 여부는 남지만, 학습 반응·오개념은 남기기 어렵습니다.</li>
              </ul>
              <p className="text-xs font-semibold text-indigo-700 mb-2">에듀케어로그</p>
              <p className="text-sm text-gray-800">
                학습 반응·오개념·행동 데이터를 쌓고, 실제 개입(과제·루틴)까지 연결합니다.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-5 md:p-6">
              <div className="flex items-start gap-3 mb-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-50 border border-gray-200 text-indigo-700">
                  <MarketingIcon name="scale" className="h-5 w-5" />
                </span>
                <h3 className="font-bold text-gray-900 text-sm pt-1.5">4. 사교육·학습지</h3>
              </div>
              <p className="text-xs font-semibold text-gray-500 mb-2">특징</p>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1 mb-4">
                <li>같은 유형 문제 반복과 강사·교재에 기대는 구조입니다.</li>
                <li>집·학교 진도와 겹치면 중복이 쌓이기 쉽습니다.</li>
              </ul>
              <p className="text-xs font-semibold text-indigo-700 mb-2">에듀케어로그</p>
              <p className="text-sm text-gray-800">
                로그를 기준으로 개인 경로를 조정해 겹치는 반복을 줄이며, 사람 설명만 받는 구조가 아닙니다.
              </p>
            </div>
          </div>

          <p className="text-center text-sm md:text-base font-semibold text-gray-900 max-w-3xl mx-auto mt-10 leading-relaxed">
            기존 시스템이 교육을 &apos;제공&apos;하는 데 머물렀다면 에듀케어로그는 &apos;운영&apos;으로 바꾸는 구조입니다.
          </p>
        </div>
      </section>

      {/* 12. UX·필수성 */}
      <section id="educ-ux" className="scroll-mt-28 py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            누구나 사용할 수 있는 구조인가, 왜 지금 필요한가
          </h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-10">
            난이도는 낮추고, 역할별로 보이는 행동만 남깁니다.
          </p>

          <div className="space-y-8 max-w-3xl mx-auto text-sm text-gray-800">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6">
              <h3 className="font-bold text-gray-900 text-sm mb-3">1. 사용 난이도에 대한 오해</h3>
              <ul className="list-disc pl-5 space-y-1 mb-4 text-gray-700">
                <li>교사가 완전히 새로운 시스템을 처음부터 익혀야 하는 구조가 아닙니다.</li>
                <li>부모가 숫자나 표를 해석할 필요는 없습니다.</li>
                <li>지금 하시는 학습·수업 흐름 위에 얹히는 형태입니다.</li>
              </ul>
              <p className="font-semibold text-indigo-900">
                복잡한 분석이 아니라, 다음 행동만 보면 되는 구조입니다.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6">
              <h3 className="font-bold text-gray-900 text-sm mb-3">2. 왜 누구나 사용할 수 있는가</h3>
              <ul className="list-disc pl-5 space-y-1 mb-4 text-gray-700">
                <li>역할별로 화면이 나뉩니다. 부모·교사·학원·기관이 각자 다른 화면을 씁니다.</li>
                <li>로그는 하나의 줄기로 같고, 인터페이스만 역할에 맞게 다릅니다.</li>
                <li>리포트와 피드백 초안은 자동으로 만들어지고, 확인·다듬기만 하면 됩니다.</li>
              </ul>
              <p className="font-semibold text-indigo-900">
                같은 데이터를 보지만, 각자의 역할에 맞는 행동만 보입니다.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6">
              <h3 className="font-bold text-gray-900 text-sm mb-3">3. 왜 지금 반드시 필요한가</h3>
              <ul className="list-disc pl-5 space-y-1 mb-4 text-gray-700">
                <li>지금 많은 교육 현장은 데이터 없이 운영되고 있습니다.</li>
                <li>늦게 도입할수록, 데이터가 있는 곳과 없는 곳 사이 격차가 커집니다.</li>
                <li>정책은 이미 개별화·맞춤 지원 쪽으로 움직이고 있습니다.</li>
              </ul>
              <p className="font-semibold text-indigo-900">
                실행 기록이 먼저 쌓이는 쪽이 개입 설계와 설명에 유리합니다.
              </p>
              <p className="text-gray-800 mt-4 pt-4 border-t border-gray-100 leading-relaxed">
                이 구조가 없으면 같은 시간을 써도 학생 상태는 남지 않고, 다음 학습은 다시 감으로 시작하게 됩니다.
              </p>
            </div>
          </div>

          <p className="text-center text-sm md:text-base font-semibold text-gray-900 max-w-3xl mx-auto mt-10 leading-relaxed">
            에듀케어로그는 새로운 도구가 아니라, 교육이 실제로 작동하게 만드는 최소 조건입니다.
          </p>
        </div>
      </section>

      {/* 13. DAL 교육 비전 */}
      <section id="educ-vision" className="scroll-mt-28 py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            왜 이 인프라가 필요한가 — DAL의 교육 비전
          </h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-10">
            불평등을 한 번에 없애는 기술이 아니라, 읽고 행동하게 만드는 최소 조건을 겨냥합니다.
          </p>

          <div className="max-w-3xl mx-auto space-y-10 text-sm text-gray-800 leading-relaxed">
            <div>
              <p className="font-semibold text-gray-900 mb-3">1. 교육 문제의 본질</p>
              <p>교육 문제는 교재·영상이 부족해서만 생기지 않습니다.</p>
              <p className="mt-2">
                공교육이든 사교육이든, <strong className="text-gray-900">학생 상태를 같은 기준으로 읽고 다음 개입으로 잇기 어려운 구조</strong>가 핵심입니다.
              </p>
              <p className="mt-2">정보 격차는 데이터로 굳고, 다시 기회 격차로 이어집니다.</p>
              <p className="mt-3 text-gray-600 text-xs leading-relaxed">
                출발 조건·자원 격차 자체를 없앤다는 뜻은 아닙니다. 같은 학생 상태가 제대로 읽히지 않을 때 정보 비대칭이 커진다는 문제에 맞춥니다.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50/80 p-5 md:p-6 space-y-4">
              <p className="font-semibold text-gray-900">2. 줄일 수 있는 것 · 줄이기 어려운 것</p>
              <div>
                <p className="text-xs font-semibold text-indigo-800 uppercase tracking-wide mb-2">줄일 수 있는 것</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>학생 상태에 대한 정보 비대칭</li>
                  <li>중복 학습·과잉 과제·감에 의존한 사교육 선택</li>
                  <li>교사·강사의 수작업 부담</li>
                  <li>기관마다 끊긴 기록 때문에 개입이 늦어지는 일</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">줄이기 어려운 것</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>소득 격차 자체</li>
                  <li>지역 인프라 격차 자체</li>
                  <li>시험 제도나 입시 구조 자체</li>
                  <li>스타강사 시장이나 커넥션 구조 자체</li>
                </ul>
              </div>
              <p className="font-semibold text-gray-900 pt-2 border-t border-gray-200">
                에듀케어로그는 모든 교육 문제를 한 번에 해결하는 기술이 아닙니다.
              </p>
              <p className="font-semibold text-gray-900 mt-2">
                교육이 돌아가려면 필요한 <strong className="text-indigo-900">최소한의 데이터·실행 인프라</strong>를 만드는 쪽에 둡니다.
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-900 mb-4">3. 누구에게 어떤 이익이 있는가</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-4">
                  <p className="font-bold text-gray-900 text-xs mb-2">부모</p>
                  <ul className="list-disc pl-4 space-y-1 text-gray-700 text-xs sm:text-sm">
                    <li>아이 상태를 감이 아니라 기록으로 이해</li>
                    <li>불필요한 사교육 중복을 줄이는 근거</li>
                    <li>우선순위를 정해 선택할 수 있음</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-4">
                  <p className="font-bold text-gray-900 text-xs mb-2">교사 · 학교</p>
                  <ul className="list-disc pl-4 space-y-1 text-gray-700 text-xs sm:text-sm">
                    <li>개별 개입을 현실적으로 쌓을 수 있는 바닥</li>
                    <li>피드백·과제 설계 수작업 부담 완화</li>
                    <li>기초학력 개입의 근거를 같은 형식으로 남김</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-4">
                  <p className="font-bold text-gray-900 text-xs mb-2">학원 · 강사</p>
                  <ul className="list-disc pl-4 space-y-1 text-gray-700 text-xs sm:text-sm">
                    <li>감각만으로 굴리던 운영을 기록 기반으로 바꿈</li>
                    <li>학부모에게 같은 그림으로 설명</li>
                    <li>이탈·난이도를 수치와 흐름으로 맞춤</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-4">
                  <p className="font-bold text-gray-900 text-xs mb-2">중소 학원 · 교육사업자</p>
                  <ul className="list-disc pl-4 space-y-1 text-gray-700 text-xs sm:text-sm">
                    <li>대형 브랜드 없이도 운영 데이터로 경쟁할 수 있는 축</li>
                    <li>콘텐츠 물량이 아니라 운영 정확도로 차별화</li>
                    <li>먼저 쌓은 로그가 그대로 운영 자산</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-4 sm:col-span-2">
                  <p className="font-bold text-gray-900 text-xs mb-2">교육청 · 공공</p>
                  <ul className="list-disc pl-4 space-y-1 text-gray-700 text-xs sm:text-sm">
                    <li>정책을 공문 한 줄이 아니라 실행 기록과 연결</li>
                    <li>같은 기준으로 학교·사업 단위를 비교</li>
                    <li>사업 효과를 말로만이 아니라 기록으로 설명</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-indigo-100 bg-indigo-50/40 p-5 md:p-6">
              <p className="font-semibold text-gray-900 mb-3">4. 산업이 바뀌는 축</p>
              <p className="mb-2 text-gray-800">
                기존 교육 시장은 콘텐츠·강사·브랜드 중심 경쟁이 강했습니다.
              </p>
              <p className="mb-3 text-gray-800">
                에듀케어로그가 지향하는 축은 단일 제품 경쟁이 아니라 <strong className="text-gray-900">데이터 기반 운영 능력</strong>
                입니다. 중소 학원·신생 교육기업도 먼저 쌓은 운영 로그로 차이를 설명할 수 있습니다.
              </p>
              <p className="font-semibold text-indigo-950 text-sm">
                앞으로의 경쟁은 &quot;문제를 더 많이 갖는가&quot;보다, 학생 상태를 더 정확히 읽고 더 빠르게 개입할 수 있는가로 옮겨갑니다.
              </p>
            </div>

            <div className="text-center border-t border-gray-200 pt-8">
              <p className="text-sm md:text-base text-gray-800 leading-relaxed max-w-3xl mx-auto">
                에듀케어로그는 교육 불평등을 한 번에 없애는 해답은 아닙니다.
              </p>
              <p className="text-sm md:text-base text-gray-800 leading-relaxed max-w-3xl mx-auto mt-2">
                같은 학생을 감이 아닌 데이터로 이해하고 행동하게 만드는 출발점이 될 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. 존재 이유 */}
      <section id="educ-why-built" className="scroll-mt-28 py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            왜 우리가 이 구조를 만들었는가
          </h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-10">
            현장에서 본 끊김을 로그·실행·환류로 바꾼 결과입니다.
          </p>

          <div className="max-w-3xl mx-auto space-y-10 text-sm text-gray-800 leading-relaxed">
            <div>
              <p className="font-semibold text-gray-900 mb-3">1. 문제를 직접 본 지점</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  교육 문제의 중심은 콘텐츠 양이 아니라, <strong className="text-gray-900">데이터와 실행이 끊기는 구조</strong>에서
                  발생합니다.
                </li>
                <li>같은 학생도 과목·단원이 바뀌면 막히는 지점과 속도가 달라, 평균 진도만으로는 놓치는 구간이 생깁니다.</li>
                <li>그 상태에서는 개인화가 아니라 반복·과잉 학습으로 이어지기 쉽습니다.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6">
              <p className="font-semibold text-gray-900 mb-3">2. 기존 방식으로는 해결되지 않는 이유</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                <li>콘텐츠만 늘리면 학생 상태가 한 줄로 이어지지 않아 근본적으로 덮어지지 않습니다.</li>
                <li>교사·강사 개인의 노력만으로는 같은 밀도를 전원에게 유지할 규모가 나지 않습니다.</li>
                <li>추천·설계만 두고 실행이 사람 몫에 남으면 다음 행동까지 이어지지 않습니다.</li>
              </ul>
              <p className="font-semibold text-indigo-950">
                문제를 더 잘 설명하는 것이 아니라, 구조를 바꾸지 않으면 반복됩니다.
              </p>
            </div>

            <div className="rounded-2xl border border-indigo-100 bg-indigo-50/40 p-5 md:p-6">
              <p className="font-semibold text-gray-900 mb-3">3. 그래서 구조를 바꿨다</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-800 mb-4">
                <li>기록을 한 학생·한 줄기의 로그로 묶습니다.</li>
                <li>분석과 실행을 떼어 두지 않고 같은 흐름 안에 둡니다.</li>
                <li>실행 결과가 다시 다음 학습·다음 판단에 붙도록 환류를 둡니다.</li>
              </ul>
              <p className="font-semibold text-indigo-950">
                개인화를 &apos;설계&apos;하는 방식이 아니라, 실행이 끊기지 않도록 구조를 바꿨습니다.
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-900 mb-3">4. 왜 DAL만 가능한가</p>
              <p className="mb-2 text-gray-800">
                <strong className="text-gray-900">AI 디지털케어로그</strong>는 교육 전용으로 처음 짠 기술이 아닙니다.
              </p>
              <p className="mb-3 text-gray-800">
                <strong className="text-gray-900">자람이</strong>(발달)·<strong className="text-gray-900">시니어앤라이프</strong>
                (돌봄)·<strong className="text-gray-900">토탈케어로그</strong>(의료)에서 같은 밑그림—기록 → 판단 → 실행 → 환류—를 이미 쌓아
                온 축입니다.
              </p>
              <p className="font-semibold text-gray-900 mb-3">
                이 구조는 하나의 서비스가 아니라, 여러 영역에서 이미 검증된 인프라 위에서 확장된 것입니다.
              </p>
              <p className="text-gray-800">
                그래서 에듀케어로그는 새로운 기능이 아니라, 이미 존재하는 구조를 교육에 적용한 형태입니다.
              </p>
              <p className="text-gray-800 mt-4 pt-4 border-t border-gray-200">
                이 구조는 특수교육 영역에서 먼저 적용된 개별화 기반을 일반 교육으로 확장한 접근입니다.
              </p>
              <p className="text-gray-800 mt-4 pt-4 border-t border-gray-200">
                이 구조는 단순한 모델이나 기능이 아닙니다. 여러 도메인에서 실제 운영으로 축적된 로그 설계 경험이 필요합니다.
              </p>
              <p className="text-gray-800 mt-2">실제 운영에서 검증된 로그·거버넌스 설계 경험이 함께 필요한 영역입니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 15. DAL 플랫폼 연결 */}
      <section id="educ-ecosystem" className="scroll-mt-28 py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">DAL 플랫폼 연결</h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-8">
            네 가지 표면은 다르고, 바닥은 같은 <strong>AI 디지털케어로그</strong>입니다.
          </p>
          <p className="text-center text-sm text-indigo-800 font-medium max-w-2xl mx-auto mb-6">
            에듀케어로그는 DAL의 일부 기능이 아니라, 교육 도메인을 담당하는 하나의 축입니다.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {ecosystem.map((e) => (
              <div key={e.name} className="rounded-xl p-5 border border-gray-200 bg-gray-50/80">
                <div className="flex items-start gap-3 mb-2">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white border border-gray-200 text-indigo-700">
                    <MarketingIcon name={e.icon} className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    {e.href ? (
                      <Link href={e.href} className="font-bold text-gray-900 hover:text-indigo-800 underline-offset-2 hover:underline">
                        {e.name}
                      </Link>
                    ) : (
                      <p className="font-bold text-gray-900">{e.name}</p>
                    )}
                    <p className="text-xs text-indigo-600 mt-0.5">{e.role}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mt-2">{e.focus}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-700 mt-8 max-w-2xl mx-auto">
            발달·학습·돌봄·의료가 같은 결정 로그 철학을 공유할 때, 기관 경계를 넘는 연계와 정책 설계가 가능해집니다.
          </p>
        </div>
      </section>

      {/* 16. 도입 효과 */}
      <section id="educ-outcomes" className="scroll-mt-28 py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">도입 효과</h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-10">
            결과 중심. 세부 수치는 파일럿 조건에 따라 달라집니다.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {outcomes.map((o) => (
              <div key={o.metric} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:border-indigo-200 transition-colors">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
                  <MarketingIcon name={o.icon} className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-3">{o.metric}</h3>
                <p className="text-xs text-gray-500 mb-1">이전</p>
                <p className="text-sm text-gray-600 mb-3">{o.before}</p>
                <p className="text-xs text-indigo-600 mb-1 font-medium">도입 후</p>
                <p className="text-sm text-gray-800 leading-relaxed">{o.after}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 17. 도입 시나리오 */}
      <section id="educ-rollout" className="scroll-mt-28 py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            어떻게 시작하는가 — 도입 시나리오
          </h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-10">
            공교육·사교육·기업이 같은 엔진을 다른 순서로 얹을 수 있습니다. 아래는 자주 쓰는 확장 순서입니다.
          </p>

          <div className="space-y-6 mb-10">
            <div className="rounded-2xl border border-gray-200 p-6 md:p-7 bg-gray-50/80">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div className="flex items-start gap-3 min-w-0">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white border border-gray-200 text-indigo-700">
                    <MarketingIcon name="rocket" className="h-5 w-5" />
                  </span>
                  <h3 className="font-bold text-gray-900 pt-1">1단계 — 가정·학원 중심 시작 (데이터 확보)</h3>
                </div>
                <span className="text-xs font-semibold text-indigo-700 shrink-0">B2C · 학원 우선</span>
              </div>
              <p className="text-sm text-gray-800 mb-3">
                부모·학생 화면과 학원 운영에서 먼저 씁니다. 과제·수업 반응이 같은 형식으로 쌓이기 시작하면 개인화 루프(진단→실행→환류)가 실제로 돌아갑니다.
              </p>
              <p className="text-sm font-semibold text-indigo-900 border-l-4 border-indigo-500 pl-3">
                처음부터 학교 전체 도입이 필요하지 않습니다.
              </p>
              <p className="text-sm text-gray-700 mt-4 leading-relaxed">
                초기에는 데이터가 충분하지 않기 때문에, 일정 기간 학습 로그가 축적되면서 운영 효과가 점진적으로 나타납니다.
              </p>
            </div>

            <div className="rounded-2xl border border-indigo-200 p-6 md:p-7 bg-indigo-50/40">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div className="flex items-start gap-3 min-w-0">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white border border-indigo-200 text-indigo-700">
                    <MarketingIcon name="graduation" className="h-5 w-5" />
                  </span>
                  <h3 className="font-bold text-gray-900 pt-1">2단계 — 학교 파일럿 (부분 도입)</h3>
                </div>
                <span className="text-xs font-semibold text-indigo-700 shrink-0">학급 · 과목 단위</span>
              </div>
              <p className="text-sm text-gray-800 mb-3">
                특정 학급이나 과목만 연결합니다. 교사는 리포트·피드백 초안·과제 배정 중 일부를 엔진에 맡기고, 기초학력·맞춤 개입은 작은 단위에서 수치와 사례로 남깁니다.
              </p>
              <p className="text-sm font-semibold text-indigo-900 border-l-4 border-indigo-500 pl-3">
                작게 시작해 효과를 먼저 증명합니다.
              </p>
              <p className="text-sm text-gray-700 mt-4 leading-relaxed">
                공교육 환경에서는 시스템 통합, 교사 업무 변화, 정책 적용 등의 이유로 단계적 적용이 필요합니다. 따라서 파일럿 단위로
                시작해 점진적으로 확장하는 방식이 현실적입니다.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 md:p-7 bg-gray-50/80">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div className="flex items-start gap-3 min-w-0">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white border border-gray-200 text-indigo-700">
                    <MarketingIcon name="globe" className="h-5 w-5" />
                  </span>
                  <h3 className="font-bold text-gray-900 pt-1">3단계 — 교육청·공공 확산</h3>
                </div>
                <span className="text-xs font-semibold text-gray-700 shrink-0">지역 · 정책 단위</span>
              </div>
              <p className="text-sm text-gray-800 mb-3">
                같은 기준 위에서 학교 간 기초학력·프로그램 결과를 나란히 둡니다. 문서로만 내려가던 과제를 통합 학습 로그와 실행 기록으로 맞추면, 정책과 현장이 같은 표를 보게 됩니다.
              </p>
              <p className="text-sm font-semibold text-indigo-900 border-l-4 border-indigo-500 pl-3">
                정책을 말로만 두지 않고 실행 기록으로 돌리는 쪽으로 전환합니다.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-10 rounded-xl bg-white border border-gray-200 p-5">
            <h3 className="font-bold text-gray-900 text-sm mb-3">기술 적용 방식 (요약)</h3>
            <ul className="text-sm text-gray-800 space-y-2 list-disc pl-5">
              <li>
                <strong className="text-gray-900">임베드형 엔진</strong>
                <br />
                기존 교육 시스템을 교체하지 않고, 연동·API 형태로 연결되는 구조입니다.
              </li>
              <li>기존 교육청·학교 시스템을 통째로 갈아끼울 필요 없이, 연동·임베드로 단계적으로 얹습니다.</li>
              <li>API·연동 형태로 맞추면 범위를 넓히거나 줄일 수 있습니다.</li>
              <li>1단계에서 쌓인 로그가 2·3단계로 그대로 이어지도록 설계합니다.</li>
            </ul>
          </div>

          <p className="text-center text-base font-semibold text-gray-900 max-w-2xl mx-auto leading-relaxed">
            에듀케어로그는 한 번에 바꾸는 시스템이 아니라, <span className="text-indigo-800">쌓이면서 확장되는 인프라</span>입니다.
          </p>
        </div>
      </section>

      {/* 18. 전략적 파트너십 */}
      <section id="educ-partnership" className="scroll-mt-28 py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            함께 만드는 교육 인프라 — 전략적 파트너십
          </h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-6">
            완성품 판매가 아니라 데이터와 운영 구조를 함께 쌓는 협력을 열어 둡니다.
          </p>
          <div className="space-y-5 text-gray-800 text-sm md:text-base leading-relaxed">
            <p>
              에듀케어로그는 완성된 제품을 판매하는 서비스가 아니라, 학습 데이터 기반 교육 인프라를 함께 구축하는 구조입니다.
            </p>
            <p className="text-gray-600 text-sm border-l-4 border-indigo-200 pl-4 py-1">
              공개 상세 페이지에는 단가·계약 조건·실명 사례를 게재하지 않습니다. 범위와 조건은 상담을 통해 맞춥니다.
            </p>
            <p>
              현재 교육기업, 학원, 에듀테크 기업과의 협력을 통해 실제 학습 데이터와 운영 환경에서 고도화를 진행하고 있습니다.
            </p>
            <p>
              에듀케어로그는 공교육과 사교육 데이터를 서로 합치는 시스템이 아닙니다. 각 도입 주체 안에서 학생별 맞춤 학습 루프를 돌리는 인프라를 목표로 합니다.
            </p>
            <p>
              현실적으로 공교육은 구조 변화와 도입 속도에 한계가 있기 때문에, 초기에는 학원·교육기업 등 실제 적용 속도가 빠른 환경에서
              먼저 검증하고, 공교육은 파일럿 단위로 단계 확대하는 방식을 택하고 있습니다.
            </p>
            <p>
              이 과정에서 쌓인 데이터와 운영 구조는 향후 공교육·정책 영역으로 확장될 수 있는 기반이 됩니다.
            </p>
            <p className="font-semibold text-gray-900">특히 다음과 같은 파트너를 찾고 있습니다:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-800">
              <li>대형 학원 및 교육기업 (데이터 기반 운영 전환)</li>
              <li>에듀테크 기업 (API·임베드 연동)</li>
              <li>지역 교육기관 및 프로그램 운영 주체</li>
            </ul>
            <p>
              이 구조는 단순 도입이 아니라, 함께 데이터를 쌓고 운영 구조를 만드는 과정입니다.
            </p>
            <p>
              먼저 참여할수록 운영 데이터가 자산이 되고, 동의·거버넌스 범위 안에서 정책·사업 설명에 유리한 기록을 쌓을 수 있습니다(도입 형태에 따라 달라집니다).
            </p>
          </div>
        </div>
      </section>

      {/* 19. CTA */}
      <section id="educ-cta" className="scroll-mt-28 py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-center text-blue-50 text-sm md:text-base font-semibold max-w-2xl mx-auto mb-8 leading-relaxed">
            같은 기간이라도 기록이 먼저 쌓이는 쪽이 개입 설계·효과 설명에 유리해질 수 있습니다.
            <br />
            도입 범위·동의 조건에 따라 속도는 달라집니다.
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">다음 행동</h2>
          <p className="text-blue-100 text-sm mb-10 text-center max-w-2xl mx-auto leading-relaxed">
            드림에이아이랩은 콘텐츠 회사가 아니라 <strong className="text-white">엔진·표준·실행 자동화</strong>를 건넵니다. 역할에 맞는 문의만 고르시면
            됩니다.
          </p>
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            <div className="bg-white/10 rounded-xl p-5 border border-white/20 text-left">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 text-white border border-white/20">
                <MarketingIcon name="globe" className="h-6 w-6" />
              </div>
              <p className="text-xs font-semibold text-blue-200 mb-1">학교 · 교육청 · 지자체</p>
              <p className="text-sm text-blue-50 mb-4">기초학력·개별화 과제에 맞는 도입 범위와 파일럿을 같이 정합니다.</p>
              <Link
                href="/contact?service=educarelog&type=b2b"
                className="inline-flex w-full justify-center items-center bg-white text-indigo-800 font-semibold px-4 py-2.5 rounded-lg text-sm hover:bg-blue-50 transition-colors"
              >
                우리 기관에 적용 가능한지 확인하기
              </Link>
            </div>
            <div className="bg-white/10 rounded-xl p-5 border border-white/20 text-left">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 text-white border border-white/20">
                <MarketingIcon name="blocks" className="h-6 w-6" />
              </div>
              <p className="text-xs font-semibold text-blue-200 mb-1">학원</p>
              <p className="text-sm text-blue-50 mb-4">원생·강사 데이터로 운영·이탈 대응을 쌓는 방식을 상담합니다.</p>
              <Link
                href="/contact?service=educarelog&type=b2b"
                className="inline-flex w-full justify-center items-center bg-white text-indigo-800 font-semibold px-4 py-2.5 rounded-lg text-sm hover:bg-blue-50 transition-colors"
              >
                운영·데이터 활용 도입 문의하기
              </Link>
            </div>
            <div className="bg-white/10 rounded-xl p-5 border border-white/20 text-left">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 text-white border border-white/20">
                <MarketingIcon name="cog" className="h-6 w-6" />
              </div>
              <p className="text-xs font-semibold text-blue-200 mb-1">기업 · 에듀테크</p>
              <p className="text-sm text-blue-50 mb-4">기존 제품에 CareLog 엔진·API를 얹는 경로를 같이 봅니다.</p>
              <Link
                href="/contact?service=educarelog&type=tech"
                className="inline-flex w-full justify-center items-center bg-white text-indigo-800 font-semibold px-4 py-2.5 rounded-lg text-sm hover:bg-blue-50 transition-colors"
              >
                임베드·API 도입 가능 여부 확인하기
              </Link>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 justify-center items-center text-sm text-center">
            <Link href="/contact?service=educarelog&type=b2b" className="text-white font-medium underline underline-offset-2 hover:text-blue-100">
              파일럿 도입 상담 요청하기
            </Link>
            <span className="hidden sm:inline text-white/40">|</span>
            <Link href="/contact?service=educarelog&type=general" className="text-blue-100 hover:text-white underline underline-offset-2">
              일반 문의
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
