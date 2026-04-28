import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import { IconApi, IconInvest, IconPartners, IconPublic, IconUser } from '../components/home-intent-icons'

export const metadata: Metadata = {
  title: '드림에이아이랩 | AI디지털케어로그 기반 플랫폼 - DAL',
  description:
    '드림에이아이랩(DAL)은 돌봄·의료·교육 데이터를 표준화하는 플랫폼 기업입니다. AI디지털케어로그로 하나의 데이터 인프라 위에 발달장애, 시니어, 의료, 교육, 글로벌커플케어, 라이프스타일 6개 핵심 도메인을 연결합니다.',
  keywords:
    '발달장애 치료, ADHD 치료, 자폐증 치료, 특수교육, 언어치료, 작업치료, 노인돌봄, 요양원, 주간보호센터, 재가요양, 노인장기요양보험, 요양시설, 돌봄센터, 채식, 비건, 베지테리안, 채식식단, 비건레시피, 채식식당, 온라인진료, AI진단, 건강관리, 만성질환관리, 복약관리, 의료AI, 진단지원, 국제결혼, 다문화가정, 결혼중개, 드림에이아이랩',
  openGraph: {
    title: '드림에이아이랩 | AI디지털케어로그로 의료·돌봄·교육 혁신하는 DAL',
    description:
      '드림에이아이랩(DAL)은 AI디지털케어로그 표준으로 케어 혁신을 지향하는 기술 기업입니다. 표준화된 데이터와 멀티모달 AI 분석으로 개인 맞춤 케어의 새로운 표준을 만들고, 토탈케어로그부터 시니어 돌봄, 발달장애, 국제결혼, 라이프스타일 영역까지 같은 플랫폼 철학으로 확장합니다.',
    url: 'https://dreamailab.com',
    siteName: '드림에이아이랩',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '드림에이아이랩' }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '드림에이아이랩 | AI디지털케어로그로 의료·돌봄·교육 혁신하는 DAL',
    description:
      '드림에이아이랩(DAL)은 AI디지털케어로그 표준으로 케어 혁신을 지향하는 기술 기업입니다. 표준화된 데이터와 멀티모달 AI 분석으로 개인 맞춤 케어의 새로운 표준을 만들고, 토탈케어로그부터 시니어 돌봄, 발달장애, 국제결혼, 라이프스타일 영역까지 같은 플랫폼 철학으로 확장합니다.',
    images: ['/og-image.png'],
  },
}

export default function Home() {
  // 구조화 데이터 (JSON-LD)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '드림에이아이랩',
    alternateName: 'Dream AI Lab',
    description:
      '드림에이아이랩(DAL)은 AI디지털케어로그 표준으로 케어 혁신을 지향하는 기술 기업입니다. 표준화된 데이터와 멀티모달 AI 분석으로 개인 맞춤 케어의 새로운 표준을 만들고, 토탈케어로그부터 시니어 돌봄, 발달장애, 국제결혼, 라이프스타일 영역까지 같은 플랫폼 철학으로 확장합니다.',
    url: 'https://dreamailab.com',
    logo: 'https://dreamailab.com/logo.png',
    founder: {
      '@type': 'Person',
      name: '정해성',
      jobTitle: '창업자 & CEO',
      description: '디지털케어로그 최초 고안자 및 개발자',
      knowsAbout: [
        '디지털케어로그',
        'AI디지털케어로그',
        '발달장애 연구',
        '치매 연구',
        '노인질병 연구',
        '토탈케어로그',
        '정신심리치료'
      ]
    },
    sameAs: [
      'https://jarame.or.kr',
      'https://seniorandlife.com',
      'https://totalcarelog.com',
      'https://globalcouplecare.com',
      'https://veggie.care'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'contact@dreamailab.com'
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'KR',
      addressLocality: 'Seoul'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI 기반 표준화 서비스',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI디지털케어로그 플랫폼',
            description: '표준화된 케어 기록을 AI가 분석하여 개인·가족·기관을 연결하는 융합 플랫폼'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '토탈케어로그(의료서비스)',
            description: '개인 맞춤 AI 주치의·디지털케어로그 플랫폼(식단·운동·약/영양제·심리·항암 추적)'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '시니어앤라이프',
            description: '시니어 돌봄을 위한 AI디지털케어로그 기반 예방/모니터링 플랫폼'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '자람이',
            description: '발달장애 가족·교사·치료사를 위한 AI디지털케어로그 기반 치료·학습 플랫폼'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '글로벌커플케어',
            description: '국제결혼 정보 표준화 플랫폼 + AI 상담 + 결혼 후 생활 지원'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '베지케어',
            description: '채식 라이프스타일 AI 플랫폼 - 영양관리·식단·외식·커뮤니티 통합'
          }
        },
      ]
    }
  }

  // 등록·연계 규모 지표 (MAU·전면 상용과 별개 — 비즈니스 페이지와 동기화)
  const marketMetrics = [
    { value: '5,700+', label: '자람이 등록 기관' },
    { value: '22,000+', label: '시니어앤라이프 등록 사업자' },
    { value: '6', label: '핵심 도메인' },
    { value: '1', label: '통합 플랫폼' },
  ]

  /** /services 허브와 동일: 핵심 6도메인 + Noah는 별도 안내 */
  const domainHubTiles = [
    { mark: 'JR', name: '발달장애', url: '/services/jarame', status: '베타 테스트' },
    { mark: 'SL', name: '시니어·노인돌봄', url: '/services/senior', status: '베타 테스트' },
    { mark: 'TC', name: '의료', url: '/services/healthcare', status: '개발 중' },
    { mark: 'ED', name: '교육', url: '/services/educarelog', status: '개발 중' },
    { mark: 'GC', name: '글로벌커플케어', url: '/services/marriage', status: '베타 테스트' },
    { mark: 'VG', name: '라이프스타일', url: '/services/veggie', status: '베타 테스트' },
  ]

  /** 도메인별 핵심 플랫폼: DAL 1번 도메인 자람이 우선 (각 요약은 해당 /services/* 페이지와 맞춤) */
  const services = [
    {
      name: '자람이',
      desc: '발달장애 영역에서 기록이 끊기면 개입도 끊깁니다. 자람이는 가정·학교·센터·병원이 같은 AI디지털케어로그 위에서 서로 배우고, 아이와 가족이 현장과 함께 성장하도록 만든 DAL의 첫 번째 축입니다. 단순 치료 앱이 아니라, 사회적 포용과 골든타임을 지키는 케어 인프라를 지향합니다.',
      url: '/services/jarame',
      externalUrl: 'https://jarame.or.kr',
      color: 'from-blue-500 to-cyan-500',
      mark: 'JR',
      features: [
        '가정·학교·센터·병원 한 줄기 케어로그',
        'AI 상담·권장안·일·주·월 리포트',
        '자가진단·평가(M-CHAT·ASRS 등)와 다음 단계 안내',
        '맞춤 교육·치료 플랜·기관 RBAC·학교 관리자 도구',
        '홈티 매칭·센터·병원 연계',
        '익명 집계로 정책·연구·현장 개선에 환류',
      ],
      innovation:
        '취약계층이 정보와 지원에서 소외되지 않도록, 기록 표준과 AI로 가족·교사·치료사가 같은 언어로 개입하는 구조를 만드는 것이 우리가 이 일을 시작한 이유에 가깝습니다.',
    },
    {
      name: '시니어앤라이프',
      desc: '시니어와 가족·요양보호사를 위한 AI디지털케어로그 기반 돌봄 플랫폼입니다. 수면·활동·복약 패턴을 분석해 이상 징후를 조기에 포착하고, 맞춤 케어 계획과 가족·기관 리포트를 제공합니다. 돌봄을 수행하는 이들의 정서·번아웃 예방과 심리 지원까지 같은 철학 아래 확장합니다.',
      url: '/services/senior',
      externalUrl: 'https://seniorandlife.com',
      color: 'from-green-500 to-emerald-500',
      mark: 'SL',
      features: [
        '수면·활동·복약 패턴 분석·위험 징후 조기 감지',
        '가족·요양보호사 동일 정보 기반 소통',
        '케어기버·가족 정서·번아웃 완화(기록·리포트·가이드·연계 중심)',
        '개인 맞춤 케어 계획·AI 권고·리스크 인사이트',
        '재가·요양원·주간보호·요양병원·구인구직 연계',
        '표준 행정·알림·기관 대시보드',
      ],
      innovation:
        'DAL은 시니어만이 아니라 돌봄을 실행하는 사람의 지속가능성도 케어의 일부로 봅니다. 기록 표준화와 가족·현장 연결이 그 출발점입니다.',
    },
    {
      name: '토탈케어로그(의료서비스)',
      desc: '개인 맞춤 AI 주치의형 코파일럿과 케어로그를 함께 두어, 건강기록·생활패턴·웨어러블 데이터를 통합 분석하고 식단·운동·수면·약·영양제 권고와 정신건강 대화, 항암 추적까지 한 흐름으로 지향합니다.',
      url: '/services/healthcare',
      externalUrl: 'https://totalcarelog.com',
      color: 'from-rose-500 to-pink-500',
      mark: 'TC',
      features: [
        'AI 주치의형 코파일럿(기록·권고·진료 준비 보조)',
        '일상 기록 → AI 분석 → 실행·연계 제안',
        'FHIR 등 표준 스키마·웨어러블·자가기록 통합 지향',
        '병원·약국·요양 연계(진료 보조 레이어)',
        '항암 집중 관리 모드·리포트',
        '정신건강 맞춤 대화형 챗봇·RWE·실증 연계 지향',
      ],
      innovation:
        '디지털케어로그와 멀티모달 AI로 예방·치료·회복 전 주기를 돕고, 표준 데이터 위에서 의료진·환자·가족이 같은 그림을 보게 하는 것을 지향합니다.',
    },
    {
      name: '글로벌커플케어',
      desc: '국제결혼 정보 표준화와 전문가 연결, 결혼 전후 절차·정착을 지원합니다. 업체별 비교, AI 상담·번역, 다문화 가정 케어로그를 제공합니다.',
      url: '/services/marriage',
      externalUrl: 'https://globalcouplecare.com',
      color: 'from-indigo-500 to-purple-500',
      mark: 'GC',
      features: ['업체별 가격·서비스 비교', 'AI 상담·번역·통역', '법무·비자 표준 워크플로우', '커뮤니티·후기', '결혼 후 정착·가족 라이프로그', 'KYC·신고·윤리 가이드'],
      innovation: '정보 비대칭을 줄이고, 동의 기반으로 정착·육아·행정을 이어가는 글로벌커플케어 인프라를 지향합니다.',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* 구조화 데이터 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* 
        창업자: 정해성
        디지털케어로그 최초 고안자 및 개발자
        발달장애, 치매연구, 노인질병 연구에 최초 적용
        토탈케어로그, 정신심리치료 맞춤형 치료 개발
        AI디지털케어로그 독자기술 개발자
      */}
      <Header />

      {/* HERO - 플랫폼 선언 */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-800 to-secondary-700" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-white">
          <div className="text-center">
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/15 text-white/95 mb-6">
              DAL Platform
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              AI디지털케어로그 기반 플랫폼
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-white/95 mb-4">
              돌봄·의료·교육 데이터를 표준화하고 현장 실행을 연결하는 플랫폼 인프라
            </p>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed mb-6">
              여러 서비스가 아니라, 하나의 데이터 플랫폼 위에 연결된 서비스 생태계입니다.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['표준화', '데이터 인프라', '서비스 연결', '도메인 확장'].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-sm bg-white/10 border border-white/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intent Routing - 목적별 분기 */}
      <section className="py-12 lg:py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">어떤 목적으로 DAL을 찾고 계신가요?</h2>
            <p className="text-gray-600">당신의 목적에 맞는 플랫폼 안내로 바로 이동하세요.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <Link href="/public" className="group flex flex-col items-center p-6 rounded-xl border-2 border-gray-200 hover:border-primary-500 hover:bg-primary-50/50 transition-all text-center">
              <span className="mb-3 text-primary-600 group-hover:text-primary-700">
                <IconPublic className="w-10 h-10 mx-auto" />
              </span>
              <span className="font-semibold text-gray-900 group-hover:text-primary-700">정부·지자체·공공 협력</span>
              <span className="text-sm text-gray-500 mt-1">시범사업, 정책 정합성</span>
            </Link>
            <Link href="/business" className="group flex flex-col items-center p-6 rounded-xl border-2 border-gray-200 hover:border-primary-500 hover:bg-primary-50/50 transition-all text-center">
              <span className="mb-3 text-primary-600 group-hover:text-primary-700">
                <IconPartners className="w-10 h-10 mx-auto" />
              </span>
              <span className="font-semibold text-gray-900 group-hover:text-primary-700">기관·기업 파트너</span>
              <span className="text-sm text-gray-500 mt-1">도입 문의, B2B 협력</span>
            </Link>
            <Link href="/services" className="group flex flex-col items-center p-6 rounded-xl border-2 border-gray-200 hover:border-primary-500 hover:bg-primary-50/50 transition-all text-center">
              <span className="mb-3 text-primary-600 group-hover:text-primary-700">
                <IconUser className="w-10 h-10 mx-auto" />
              </span>
              <span className="font-semibold text-gray-900 group-hover:text-primary-700">서비스 이용</span>
              <span className="text-sm text-gray-500 mt-1">보호자·가족·개인 사용자</span>
            </Link>
            <Link href="/ir" className="group flex flex-col items-center p-6 rounded-xl border-2 border-gray-200 hover:border-primary-500 hover:bg-primary-50/50 transition-all text-center">
              <span className="mb-3 text-primary-600 group-hover:text-primary-700">
                <IconInvest className="w-10 h-10 mx-auto" />
              </span>
              <span className="font-semibold text-gray-900 group-hover:text-primary-700">투자·사업 협력</span>
              <span className="text-sm text-gray-500 mt-1">IR, 투자 검토</span>
            </Link>
            <Link href="/technology#api" className="group flex flex-col items-center p-6 rounded-xl border-2 border-gray-200 hover:border-primary-500 hover:bg-primary-50/50 transition-all text-center">
              <span className="mb-3 text-primary-600 group-hover:text-primary-700">
                <IconApi className="w-10 h-10 mx-auto" />
              </span>
              <span className="font-semibold text-gray-900 group-hover:text-primary-700">기술 연동·API</span>
              <span className="text-sm text-gray-500 mt-1">API, 파트너 연동</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 시장 선점 지표 */}
      <section className="py-12 lg:py-14 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {marketMetrics.map((m, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-primary-400/80" aria-hidden />
                <div className="text-2xl md:text-3xl font-bold text-primary-700">{m.value}</div>
                <div className="text-sm text-gray-600 mt-1">{m.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-[11px] sm:text-xs text-gray-400 max-w-2xl mx-auto mt-5 leading-relaxed">
            ※ 5,700+·22,000+는 DAU가 아니라 공공·연계 등으로 등록된 기관·사업자 규모(도입·협업 후보 풀)입니다.
          </p>
        </div>
      </section>

      {/* 플랫폼·연결 시각화 (/services와 동일 자산) */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">하나의 플랫폼, 여러 도메인</h2>
            <p className="text-gray-600">
              모든 서비스는 AI디지털케어로그 위에 올라갑니다. 아래 다이어그램은 서비스 허브와 동일한 구조를 요약합니다.
            </p>
          </div>
          <div className="w-full max-w-5xl mx-auto mb-14 rounded-2xl overflow-hidden border border-blue-100 shadow-sm bg-white">
            <picture>
              <source media="(max-width: 768px)" srcSet="/images/services/platform-hub-mobile.svg" />
              <img src="/images/services/platform-hub.svg" alt="DAL 플랫폼 허브 구조" className="w-full h-auto" />
            </picture>
          </div>

          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">서비스 간 연결</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              같은 사람의 기록이 도메인을 넘나들 수 있도록 연결 지향 구조를 설계합니다. 상세 연결 예시는 서비스 허브의 연결 지도를
              참고하세요.
            </p>
          </div>
          <div className="w-full max-w-5xl mx-auto mb-10 rounded-2xl overflow-hidden border border-indigo-100 shadow-sm bg-white">
            <picture>
              <source media="(max-width: 768px)" srcSet="/images/services/service-flow-mobile.svg" />
              <img src="/images/services/service-flow.svg" alt="DAL 서비스 간 연결 흐름" className="w-full h-auto" />
            </picture>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
            {domainHubTiles.map((d) => (
              <Link
                key={d.mark}
                href={d.url}
                className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow text-center group border border-gray-100"
              >
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white">
                  {d.mark}
                </div>
                <div className="font-semibold text-gray-900 text-sm group-hover:text-primary-600 leading-snug">{d.name}</div>
                <div className="text-xs text-gray-500 mt-1">{d.status}</div>
              </Link>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6 max-w-2xl mx-auto">
            NoahAI(금융 AI)는 DAL 핵심 6도메인과 별도입니다.{' '}
            <Link href="/services/finance" className="text-primary-600 font-semibold hover:text-primary-700">
              분리 운영 안내
            </Link>
          </p>
          <div className="text-center mt-8">
            <Link href="/services" className="text-primary-600 font-semibold hover:text-primary-700">
              서비스 생태계 허브에서 전체 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* 산업 단절 vs 플랫폼 지향 구조 (면책은 섹션 하단 각주로만) */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">문제 인식과 플랫폼이 지향하는 구조</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base">
              돌봄·교육 현장에서 자주 보이는 단절과, AI디지털케어로그로 풀고자 하는 표준 구조를 나란히 정리했습니다.
            </p>
          </div>
          {/* Before → After */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-50 rounded-xl p-6 border border-red-100">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-red-600">기존 산업·현장에서 흔한 단절</span>
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  종이 기록·단절된 정보, 기관 간 연계 없음
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  사후 대응, 위험 징후 놓침
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  주관적 평가 중심, 객관적 데이터 부재
                </li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-green-600">DAL 플랫폼이 지향하는 구조</span>
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  데이터 기반 통합 관리로 가정·센터·병원을 연결하는 표준 케어로그
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  AI 기반 조기 대응·위험 징후 선제 탐지를 목표로 한 분석·알림 설계
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  표준화된 케어로그로 객관 지표·재현 가능한 기록 비중을 높이는 방향
                </li>
              </ul>
            </div>
          </div>
          <p className="text-center text-[11px] sm:text-xs text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
            ※ 등록·연계 규모는 도입 후보 풀을 뜻하며, 모든 기관이 동일 제품 스택을 전면 운영 중이거나 파일럿에 포함된다는 의미는 아닙니다.
          </p>
          {/* 플랫폼 운영 지표 상세 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <div className="text-2xl font-bold text-primary-700">5,700+</div>
              <div className="text-sm text-gray-600 mt-1">등록 기관 수</div>
              <div className="text-[11px] text-gray-400">자람이(연계·등록 기준)</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <div className="text-2xl font-bold text-primary-700">22,000+</div>
              <div className="text-sm text-gray-600 mt-1">등록 사업자 수</div>
              <div className="text-[11px] text-gray-400">시니어앤라이프(연계·등록 기준)</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <div className="text-2xl font-bold text-primary-700">6</div>
              <div className="text-sm text-gray-600 mt-1">핵심 서비스 도메인</div>
              <div className="text-xs text-gray-500">발달·시니어·의료·교육·글로벌·라이프스타일</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <div className="text-2xl font-bold text-primary-700">1</div>
              <div className="text-sm text-gray-600 mt-1">통합 플랫폼</div>
              <div className="text-xs text-gray-500">AI디지털케어로그</div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE TECH + 도메인별 핵심 서비스 요약 */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">AI디지털케어로그</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">표준화된 케어 기록을 AI가 분석하여 개인·가족·기관을 연결하는 데이터 인프라입니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <TechCard title="표준 데이터 수집" desc="FHIR 기반의 안전하고 효율적인 데이터 환경" variant="collect" />
            <TechCard title="정밀 AI 분석" desc="텍스트·행동·시계열 멀티모달 AI 활용" variant="ai" />
            <TechCard title="맞춤형 실행" desc="개인별 케어 플랜·알림·리포트 제공" variant="action" />
            <TechCard title="다기관 연동" desc="가정·센터·병원·요양기관 간 실시간 협업" variant="link" />
          </div>
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-2">도메인별 핵심 플랫폼</h3>
            <p className="text-gray-600">
              대표 사례를 요약합니다. 에듀케어로그 등 나머지 도메인은{' '}
              <Link href="/services" className="text-primary-600 font-semibold hover:text-primary-700">
                서비스 허브
              </Link>
              에서 확인하세요.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-600 text-lg font-bold text-white tracking-wide">
                      {s.mark}
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">플랫폼 서비스</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{s.name}</h3>
                  
                  {/* 서비스 개요 */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">서비스 개요</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">{s.desc}</p>
                  </div>
                  
                  {/* 주요 기능 */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">주요 기능</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {s.features && s.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* 혁신성 */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">혁신성</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{s.innovation}</p>
                  </div>
                  
                  <div className="flex gap-3">
                    <Link href={s.url} className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                      상세 정보
                    </Link>
                    {s.externalUrl && (
                      <a
                        href={s.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
                      >
                        서비스 체험
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 라이프스타일 도메인 - 베지케어 (플랫폼 확장 예시) */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">라이프스타일 도메인</h2>
            <p className="text-gray-600">AI디지털케어로그 기반으로 확장 중인 라이프스타일 플랫폼</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-green-600 text-xl font-bold text-white">
                VG
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">베지케어</h3>
                <p className="text-gray-700">
                  식습관·영양을 AI디지털케어로그로 쌓고, AI 레시피·맛집·커뮤니티·파트너 커머스까지 실행으로 이어집니다. 토탈케어로그와 맞닿아 항암·만성질환 회복기의 식사·체력 관리 축을 함께 다루는 것을 지향합니다.
                </p>
              </div>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Link href="/services/veggie" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                상세 정보
              </Link>
              <a href="https://veggie.care" target="_blank" rel="noopener noreferrer" className="border border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                서비스 체험
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 뉴스: 방문자용 안내(내부 운영 메모 성격의 문구는 사용하지 않음) */}
      <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">플랫폼 성장 소식</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            DAL의 보도자료, 기술·서비스 업데이트, 현장 협력 이야기는 <strong>뉴스룸</strong>에서 확인하실 수 있습니다.
          </p>
          <Link
            href="/news"
            className="inline-flex items-center justify-center rounded-xl bg-primary-600 px-8 py-3.5 text-base font-semibold text-white hover:bg-primary-700 transition-colors"
          >
            뉴스룸에서 최신 소식 보기 →
          </Link>
        </div>
      </section>

      {/* CTA - 투자/파트너/서비스 통일 */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-700 to-secondary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">AI디지털케어로그 기반 플랫폼</h2>
          <p className="text-lg max-w-3xl mx-auto text-white/90 mb-8">투자·파트너십·서비스 도입 문의를 환영합니다.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              투자 문의
            </Link>
            <Link href="/business" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              파트너십 문의
            </Link>
            <Link href="/services" className="border-2 border-white/70 text-white/95 px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              서비스 생태계 보기
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function TechCard({
  title,
  desc,
  variant,
}: {
  title: string
  desc: string
  variant: 'collect' | 'ai' | 'action' | 'link'
}) {
  const icon = {
    collect: (
      <svg className="mx-auto h-8 w-8 text-primary-600" viewBox="0 0 32 32" fill="none" aria-hidden>
        <path d="M8 10h16v14H8V10z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11 14h10M11 18h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    ai: (
      <svg className="mx-auto h-8 w-8 text-primary-600" viewBox="0 0 32 32" fill="none" aria-hidden>
        <path
          d="M16 6c-3 4-3 10 0 14M10 10c2 2 2 10 0 12M22 10c-2 2-2 10 0 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="16" cy="22" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    action: (
      <svg className="mx-auto h-8 w-8 text-primary-600" viewBox="0 0 32 32" fill="none" aria-hidden>
        <path d="M10 18L16 8l6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 22h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    link: (
      <svg className="mx-auto h-8 w-8 text-primary-600" viewBox="0 0 32 32" fill="none" aria-hidden>
        <circle cx="11" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="21" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15 16h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  }[variant]

  return (
    <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
      <div className="mb-3">{icon}</div>
      <div className="font-semibold text-gray-900">{title}</div>
      <div className="text-sm text-gray-600 mt-1">{desc}</div>
    </div>
  )
}
