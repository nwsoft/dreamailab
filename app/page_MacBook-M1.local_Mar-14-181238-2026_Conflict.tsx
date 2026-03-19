import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '드림에이아이랩 | AI 디지털케어로그로 의료·돌봄·교육 혁신하는 DAL',
  description:
    '드림에이아이랩(DAL)은 AI 디지털케어로그 표준으로 케어 혁신을 선도하는 기술 기업입니다. 표준화된 데이터와 멀티모달 AI 분석으로 개인 맞춤 케어의 새로운 표준을 만들고, 의료 헬스케어부터 시니어 돌봄, 발달장애 치료, 국제결혼, 채식 라이프스타일까지 모든 영역에서 혁신을 추진합니다.',
  keywords:
    '발달장애 치료, ADHD 치료, 자폐증 치료, 특수교육, 언어치료, 작업치료, 노인돌봄, 요양원, 주간보호센터, 재가요양, 노인장기요양보험, 요양시설, 돌봄센터, 채식, 비건, 베지테리안, 채식식단, 비건레시피, 채식식당, 온라인진료, AI진단, 건강관리, 만성질환관리, 복약관리, 의료AI, 진단지원, 국제결혼, 다문화가정, 결혼중개, 드림에이아이랩',
  openGraph: {
    title: '드림에이아이랩 | AI 디지털케어로그로 의료·돌봄·교육 혁신하는 DAL',
    description:
      '드림에이아이랩(DAL)은 AI 디지털케어로그 표준으로 케어 혁신을 선도하는 기술 기업입니다. 표준화된 데이터와 멀티모달 AI 분석으로 개인 맞춤 케어의 새로운 표준을 만들고, 의료 헬스케어부터 시니어 돌봄, 발달장애 치료, 국제결혼, 채식 라이프스타일까지 모든 영역에서 혁신을 추진합니다.',
    url: 'https://dreamailab.com',
    siteName: '드림에이아이랩',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '드림에이아이랩' }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '드림에이아이랩 | AI 디지털케어로그로 의료·돌봄·교육 혁신하는 DAL',
    description:
      '드림에이아이랩(DAL)은 AI 디지털케어로그 표준으로 케어 혁신을 선도하는 기술 기업입니다. 표준화된 데이터와 멀티모달 AI 분석으로 개인 맞춤 케어의 새로운 표준을 만들고, 의료 헬스케어부터 시니어 돌봄, 발달장애 치료, 국제결혼, 채식 라이프스타일까지 모든 영역에서 혁신을 추진합니다.',
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
    description: '드림에이아이랩(DAL)은 AI 디지털케어로그 표준으로 케어 혁신을 선도하는 기술 기업입니다. 표준화된 데이터와 멀티모달 AI 분석으로 개인 맞춤 케어의 새로운 표준을 만들고, 의료 헬스케어부터 시니어 돌봄, 발달장애 치료, 국제결혼, 채식 라이프스타일까지 모든 영역에서 혁신을 추진합니다.',
    url: 'https://dreamailab.com',
    logo: 'https://dreamailab.com/logo.png',
    founder: {
      '@type': 'Person',
      name: '정해성',
      jobTitle: '창업자 & CEO',
      description: '디지털케어로그 최초 고안자 및 개발자',
      knowsAbout: [
        '디지털케어로그',
        'AI 디지털케어로그',
        '발달장애 연구',
        '치매 연구',
        '노인질병 연구',
        '의료헬스케어',
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
            name: 'AI 디지털케어로그 플랫폼',
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
            description: '시니어 돌봄을 위한 AI 디지털케어로그 기반 예방/모니터링 플랫폼'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '자람이',
            description: '발달장애 가족·교사·치료사를 위한 AI 디지털케어로그 기반 치료·학습 플랫폼'
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

  const edgeBullets = [
    {
      title: '발달장애 케어 표준화 선도',
      desc: '국내 최대 규모의 현장 네트워크와 독보적 기술력으로 치료 혁신을 이끕니다.',
      icon: '🌱',
    },
    {
      title: '국내 유일 시니어 AI 돌봄',
      desc: '재가·요양·병원·주간보호를 하나로 잇는 통합 플랫폼을 구축했습니다.',
      icon: '👴',
    },
    {
      title: '토탈케어로그(의료서비스)',
      desc: '의료·한의·항암·심리까지 아우르는 통합 AI 주치의 경험을 제공합니다.',
      icon: '🏥',
    },
    {
      title: '글로벌커플케어',
      desc: '국제결혼 정보 표준화 플랫폼으로 투명한 정보와 AI 상담을 제공합니다.',
      icon: '💕',
    },
  ]

  const services = [
    {
      name: '토탈케어로그(의료서비스)',
      desc: '개인 맞춤 AI 주치의+케어로그 플랫폼입니다. 건강기록·생활패턴·검사/웨어러블 데이터를 통합 분석해 식단·운동·수면·약/영양제 추천과 심리케어, 항암 환자 추적관리까지 제공합니다.',
      url: '/services/healthcare',
      externalUrl: 'https://totalcarelog.com',
      color: 'from-rose-500 to-pink-500',
      icon: '🏥',
      features: ['AI 주치의 코파일럿', '맞춤 식단·운동·수면', '약·영양제/음식 상호작용 가이드', '심리케어·스트레스 관리', '항암 추적관리(RWE·스케줄·부작용)', '건강기록 통합(FHIR·Wearables)'],
      innovation: '디지털케어로그와 멀티모달 AI로 예방·치료·회복 전 주기를 관리합니다. RWE 기반 온코로지 추적과 안전한 처방 보조, 생활습관 코칭을 하나의 루틴으로 제공합니다.'
    },
    {
      name: '시니어앤라이프',
      desc: '시니어와 가족·케어기버를 위한 AI 디지털케어로그 기반 돌봄 플랫폼입니다. 일상 패턴·활동·건강 데이터를 분석해 위험을 사전 예측하고, 맞춤 케어 루틴과 가족/기관 리포트를 제공합니다.',
      url: '/services/senior',
      externalUrl: 'https://seniorandlife.com',
      color: 'from-green-500 to-emerald-500',
      icon: '👴',
      features: ['위험징후 예측(낙상·배회·기력저하)', '복약·식사·수면 루틴 관리', '가족 리포트·알림', '케어기버 번아웃·심리케어', '주간보호·요양기관 연동', '원격 모니터링(24/7)'],
      innovation: '웨어러블·IoT·행동 데이터를 표준화(FHIR)하여 멀티모달 AI가 이상 징후를 조기 감지하고 개입 시나리오를 자동 생성합니다. 가족/기관 협업과 케어기버 지원으로 지속가능한 돌봄을 구현합니다.'
    },
    {
      name: '자람이',
      desc: '발달장애 가족·교사·치료사를 위한 AI 디지털케어로그 기반 치료·학습 플랫폼입니다. 가정·센터·학교가 하나의 기록으로 연결되고, 맞춤 케어 플랜과 리포트를 제공합니다.',
      url: '/services/jarame',
      externalUrl: 'https://jarame.or.kr',
      color: 'from-blue-500 to-cyan-500',
      icon: '🌱',
      features: ['AI 상담·코칭', '디지털 케어로그', '자가진단/평가(ADHD·ASD 등)', '맞춤형 교육·치료 플랜', '보호자·기관 연동', '센터·병원 매칭'],
      innovation: '표준화된 케어 데이터와 멀티모달 AI 분석으로 개인별 개입을 자동 생성·검증합니다. 중증부터 경증까지 전 범주를 포괄하며 현장 적용성과 지속 가능성을 동시에 확보합니다.'
    },
    {
      name: '글로벌커플케어',
      desc: '국제결혼 정보 표준화 플랫폼 + AI 상담 + 결혼 후 생활 지원. 업체별 가격·서비스 비교, AI 상담·번역·통역, 국제가정 맞춤 케어로그를 제공합니다.',
      url: '/services/marriage',
      externalUrl: 'https://globalcouplecare.com',
      color: 'from-indigo-500 to-purple-500',
      icon: '💕',
      features: ['업체별 가격·서비스 비교', 'AI 상담·번역·통역', '국제가정 맞춤 케어로그', '커뮤니티·후기 공유', '투명한 정보 제공', '결혼 후 생활 지원'],
      innovation: '국제결혼의 정보 비대칭을 해소하고, AI 기술로 투명한 업체 비교와 맞춤 상담을 제공하여 다문화 가정의 안전한 정착을 지원합니다.'
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
        의료헬스케어, 정신심리치료 맞춤형 치료 개발
        AI디지털케어로그 독자기술 개발자
      */}
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-800 to-secondary-700" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-white">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              드림에이아이랩(DAL) – AI 디지털케어로그 표준으로 케어 혁신
            </h1>
            
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-lg md:text-xl text-white/95 leading-relaxed">
                표준화된 디지털케어로그와 멀티모달 AI 분석으로 개인 맞춤 케어의 새로운 표준을 만듭니다. 
                발달장애부터 시니어 돌봄, 의료 헬스케어, 국제결혼, 채식 라이프스타일까지 모든 영역에서 케어 혁신을 선도합니다.
              </p>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {['표준화', '접근성', '신뢰성', '지속가능성'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-sm bg-white/10 border border-white/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* EDGE (질적 성과/입지) */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">우리의 차별적 입지</h2>
            <p className="text-gray-600">실제 현장에서 검증된 솔루션으로 돌봄의 질을 높입니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {edgeBullets.map((b, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <div className="text-3xl mb-2">{b.icon}</div>
                <div className="text-base font-extrabold text-gray-900 mb-1">{b.title}</div>
                <div className="text-sm text-gray-600">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE TECH */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">AI 디지털케어로그</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">표준화된 케어 기록을 AI가 분석하여 개인·가족·기관을 연결하는 융합 플랫폼입니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TechCard icon="📑" title="표준 데이터 수집" desc="FHIR 기반의 안전하고 효율적인 데이터 환경" />
            <TechCard icon="🧠" title="정밀 AI 분석" desc="텍스트·행동·시계열 멀티모달 AI 활용" />
            <TechCard icon="⚡" title="맞춤형 실행" desc="개인별 케어 플랜·알림·리포트 제공" />
            <TechCard icon="🔗" title="다기관 연동" desc="가정·센터·병원·요양기관 간 실시간 협업" />
          </div>
        </div>
      </section>

      {/* FLAGSHIP SERVICES */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">플래그십 서비스</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">각 도메인에서 시장 리더십을 확보하고, 검증된 비즈니스 모델로 성장하는 혁신 플랫폼입니다.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-4xl">{s.icon}</div>
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

      {/* 새로운 문화 - 베지케어 */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">새로운 문화</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">지속가능한 라이프스타일과 건강한 선택을 위한 AI 기반 플랫폼</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="text-5xl mr-4">🌱</div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">베지케어</h3>
                    <div className="text-sm font-medium text-green-600 uppercase tracking-wide">라이프스타일 플랫폼</div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">서비스 개요</h4>
                    <p className="text-gray-700 leading-relaxed">
                      AI 디지털케어로그 기술을 활용한 채식 라이프스타일 플랫폼입니다. 
                      개인의 건강 데이터와 식습관을 분석하여 맞춤형 식단 추천 및 영양관리를 제공하며, 
                      환경과 동물복지를 고려한 지속가능한 건강한 식생활 문화를 지원합니다.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">추구하는 문화</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        지구탄소 감축
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        동물복지 실현
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        맞춤형 영양관리
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        지속가능한 라이프스타일
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Link 
                      href="/services/veggie" 
                      className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      상세 정보
                    </Link>
                    <a
                      href="https://veggie.care"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                    >
                      서비스 체험
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="lg:pl-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">주요 기능</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">🍽️</div>
                      <div>
                        <div className="font-medium text-gray-800">AI 맞춤형 식단 추천</div>
                        <div className="text-sm text-gray-600">개인 건강 데이터 기반 영양 균형 식단</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">👨‍🍳</div>
                      <div>
                        <div className="font-medium text-gray-800">AI 요리사 레시피</div>
                        <div className="text-sm text-gray-600">개인 취향에 맞는 채식 레시피 생성</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">🏪</div>
                      <div>
                        <div className="font-medium text-gray-800">채식 식당 매칭</div>
                        <div className="text-sm text-gray-600">주변 채식 친화 식당 정보 제공</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">👥</div>
                      <div>
                        <div className="font-medium text-gray-800">커뮤니티 지원</div>
                        <div className="text-sm text-gray-600">채식 라이프스타일 공유 및 소통</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">최신 소식</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">드림에이아이랩의 최신 뉴스와 업데이트를 확인하세요.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {/* Placeholder cards — 실제 콘텐츠는 /news 연동 */}
            <NewsCard emoji="💙" date="2025.03.10" title="마음이AI 정식 출시" href="/news" desc="국내 최초 AI 심리상담 치료 서비스 론칭." />
            <NewsCard emoji="🏥" date="2025.02.22" title="히포크라테스AI 진단 혁신" href="/news" desc="의료진을 위한 AI 진단 지원의 신뢰성 강화." />
            <NewsCard emoji="👴" date="2025.01.30" title="시니어앤라이프 베타 확장" href="/news" desc="돌봄 운영 표준과 가족 리포트 기능 고도화." />
          </div>

        </div>
      </section>

      {/* DOUBLE CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-700 to-secondary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">기술의 힘으로 사회적 문제를 해결하고, 삶의 질을 향상시키는 것</h2>
          <p className="text-lg max-w-3xl mx-auto text-white/90 mb-8">우리는 단순히 기술적 진보를 넘어, 실제로 사람들의 삶에 긍정적인 영향을 미치고자 합니다.</p>
          <div className="flex justify-center">
            <Link href="/business" className="bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              파트너십·투자 문의
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function TechCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="bg-white rounded-xl p-6 text-center shadow-sm">
      <div className="text-2xl mb-2">{icon}</div>
      <div className="font-semibold text-gray-900">{title}</div>
      <div className="text-sm text-gray-600">{desc}</div>
    </div>
  )
}

function NewsCard({ emoji, date, title, desc, href }: { emoji: string; date: string; title: string; desc: string; href: string }) {
  return (
    <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
      <div className="text-4xl mb-4">{emoji}</div>
      <div className="text-sm text-gray-500 mb-2">{date}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{desc}</p>
      <Link href={href} className="text-primary-600 hover:text-primary-700 text-sm font-semibold">
        자세히 보기 →
      </Link>
    </div>
  )
}