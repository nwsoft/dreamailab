import type { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '서비스 포트폴리오 - 드림에이아이랩',
  description: '드림에이아이랩의 AI 디지털케어로그 기반 서비스 포트폴리오를 소개합니다. 환자·보호자·현장 전문가를 위한 실제 사용 중심의 플랫폼(자람이, 시니어앤라이프, 토탈케어로그, 글로벌커플케어, 에듀케어로그, 노아AI, 베지케어)을 확인하세요.',
  keywords: '드림에이아이랩, AI 플랫폼, 디지털케어로그, AI디지털케어로그, 정해성, 창업자, 개발자, 자람이, 시니어앤라이프, 토탈케어로그, 글로벌커플케어, 베지케어, 에듀케어로그, EduCareLog, 개별화교육, 모두의AI, 법률이AI, 노아AI, 발달장애, 의료헬스케어, AI 핵심기술',
  openGraph: {
    title: '서비스 포트폴리오 - 드림에이아이랩',
    description: '드림에이아이랩의 혁신적인 AI 플랫폼과 서비스 포트폴리오를 확인하세요. 발달장애, 시니어케어, 의료, 교육, 금융 등 다양한 분야의 AI 솔루션을 제공합니다.',
    url: 'https://dreamailab.com/services',
    siteName: '드림에이아이랩',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '드림에이아이랩 서비스 포트폴리오' }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '서비스 포트폴리오 - 드림에이아이랩',
    description: '드림에이아이랩의 혁신적인 AI 플랫폼과 서비스 포트폴리오를 확인하세요. 발달장애, 시니어케어, 의료, 교육, 금융 등 다양한 분야의 AI 솔루션을 제공합니다.',
    images: ['/og-image.png'],
  },
}

// ===== 데이터 정의 =====
// 1) 주요 플랫폼 (서비스중/개발중 구분)
const platforms = [
  {
    name: '자람이 플랫폼',
    status: '서비스 중',
    icon: '🌱',
    summary: '발달장애 환자·보호자·교사·치료사를 잇는 디지털케어로그 기반 통합 플랫폼',
    url: '/services/jarame',
    externalUrl: 'https://jarame.or.kr',
    category: 'Healthcare',
    users: '발달장애인 30만명',
    description: '개별 아동의 행동·학습·약물·환경 로그를 표준 스키마로 기록하고, AI가 근거 기반 개입안을 제안합니다. 보호자-학교-센터-병원이 한 기록을 공유해 "오늘 현장에서 바로 쓰는" 맞춤 치료를 구현합니다. 기존 일지/보고서 위주의 단절된 방식에서, 동일 케어로그를 기반으로 한 연속 치료로 트렌드를 전환합니다.',
    marketSize: '2024 기준: 발달장애 관련 지출은 장기요양·복지 예산 확대 흐름 내 증가(참고: 보건복지부 2024 예산 122.4조원)',
    revenueModel: '기관용 구독(SaaS) + 보호자 프리미엄 + 교육/연구 라이선스',
    competitiveAdvantage: '현장 중심 표준 스키마·역추적 가능한 근거(XAI)·다주체 동시 협업',
    businessImpact: '중복 평가/보고 감소, 개입 일관성 향상, 보호자 이해도 제고',
    investmentHighlights: '데이터 네트워크 효과(기관/가정 확장), 표준 스키마 자산화'
  },
  {
    name: '시니어앤라이프',
    status: '서비스 중',
    icon: '👴',
    summary: '재가·시설 돌봄 기록과 가족 소통을 통합한 시니어 케어 플랫폼',
    url: '/services/senior',
    externalUrl: 'https://seniorandlife.com',
    category: 'Senior Care',
    users: '전체 인구 6명중 1명',
    description: '생활·활동·약물·낙상 위험 등 돌봄 데이터를 케어로그로 표준화하고, AI가 악화 징후를 탐지해 선제 대응을 돕습니다. 종이기록/메신저 중심에서 데이터 기반 예측·공유로 전환합니다.',
    marketSize: '2024 장기요양보험 급여지출 14.76조원(대한민국) — 수요 지속 확대 추세',
    revenueModel: '기관 구독 + 가족 프리미엄 + 연계 서비스(용구/방문/건강식)',
    competitiveAdvantage: '위험 감지 알림·가족/기관 뷰 분리·간편 감사추적',
    businessImpact: '돌봄 품질 가시화, 민원·오류 감소, 가족 만족·신뢰 향상',
    investmentHighlights: '고령화 구조적 성장 + 제도권 시장 연계성 높음'
  },
  {
    name: '토탈케어로그(의료서비스)',
    status: '개발 중',
    icon: '🏥',
    summary: '의료 상담·내원 전후 관리·기관 간 연계를 하나의 케어로그로',
    url: '/services/healthcare',
    externalUrl: 'https://totalcarelog.com',
    category: 'Healthcare',
    users: 'Coming Soon',
    description: '증상/검사/복약/생활 데이터를 표준 케어로그로 수집하고, AI가 문진 요약·검사 준비·복약 순응 코칭을 제공합니다. SNS/광고 중심 병원 유치에서, 환자 상태 데이터 기반의 지속 관리로 패러다임을 전환합니다.',
    marketSize: '2024 경상의료비는 GDP의 약 9.7% 수준(대한민국). 디지털 전환 수요 확대',
    revenueModel: '병원 구독 + 프리미엄 케어(환자) + 제휴 보험/검사',
    competitiveAdvantage: '표준 케어로그 API·의료진 워크플로우 내 자연스런 탑재',
    businessImpact: '초진-재진 이탈 감소, 교육/준비 시간 단축, 환자 만족 증가',
    investmentHighlights: 'EMR 바깥의 환자 일상 데이터 자산화'
  },
  {
    name: '글로벌커플케어(GCC)',
    status: '오픈베타',
    icon: '💕',
    summary: '국제결혼 정보 표준화·정착 지원·법률/통번역 안내를 한곳에',
    url: '/services/marriage',
    externalUrl: 'https://globalcouplecare.com',
    category: 'Social',
    users: 'Beta Testing',
    description: '국가·업체·비용·절차 정보를 비교 가능한 포맷으로 표준화하고, 사후 생활(체류, 의료, 교육, 법률)까지 안내합니다. 중고차시장처럼 기존에 이미지 때문에 새로운 플랫폼들이 선점한 시장에서, 투명 정보·사후 케어 중심의 플랫폼으로 전환합니다.',
    marketSize: '2024 혼인 22만여 건 중 국제혼 비중 약 9.3%(통계청 보도 인용) — 정보 투명화 수요 높음',
    revenueModel: '업체 입점·검증 수수료 + 법률/통역 제휴 + 프리미엄 컨설팅',
    competitiveAdvantage: '표준 견적서·계약 체크리스트·사후 정착 가이드',
    businessImpact: '분쟁/피해 예방, 합리적 선택 촉진, 신뢰도 향상',
    investmentHighlights: '공공성 높은 시장에서의 플랫폼 신뢰 구축'
  },
  {
    name: '에듀케어로그',
    status: '파일럿 운영 중',
    icon: '🎓',
    summary: 'AI 디지털케어로그를 교육에 응용한 개별화 학습 플랫폼 - 새로운 교육 패러다임 창출',
    url: '/services/educarelog',
    externalUrl: '#',
    category: 'Education',
    users: '2024 특수학급 파일럿 완료, 2025~2026 파트너십 확장',
    description: '학습·행동·평가 로그를 표준 케어로그로 수집하고, AI가 수준 진단·맞춤 경로·콘텐츠 추천·시험 전 집중 루틴을 자동화합니다. 기존 주입식/일률적 교육에서 개별 학습자 데이터 기반의 적응형 교육으로 트렌드를 전환합니다. EBS·교육과정 연계로 학교·학원·가정을 잇는 통합 학습 생태계를 구축합니다.',
    marketSize: '2024 국내 사교육비 26조원(통계청) + 공교육 디지털 전환 예산 확대 — 개별화교육 수요 급증',
    revenueModel: '학교/지자체 구독(B2G) + 학원 라이선스(B2B) + 가정용 프리미엄 + 교육사 API',
    competitiveAdvantage: '특수교육 검증된 케어로그 방법론·EBS/교육과정 연계·다주체(학교-학원-가정) 통합',
    businessImpact: '개별화교육 실현, 기초학력 향상, 교육격차 완화, 교사 업무 효율성 증대',
    investmentHighlights: '2026년 대한민국 개별화교육 전환 대응 + 교육 데이터 표준화 선점'
  },
  {
    name: '노아AI',
    status: '업데이트 및 베타서비스',
    icon: '📈',
    summary: '멀티거래소 연결형 AI 트레이딩·리서치 플랫폼 + 엔터프라이즈 도입',
    url: '/services/finance',
    externalUrl: 'https://noahai.net',
    category: 'Finance',
    users: 'Beta Testing',
    description: '바이낸스·업비트·빗썸·바이빗·OKX·비트겟 등 멀티거래소 데이터를 연결하고, 470+ 코인을 24/7 모니터링합니다. 차트 이미지 인식·실질수익률(XAI) 리서치·리스크 분석으로 급변 구간을 포착하며, 투자 케어로그 기반 개인화 학습을 제공합니다. B2B 엔터프라이즈는 RBAC·SSO·데이터 거버넌스·배포 옵션(SaaS/온프렘/하이브리드)을 지원합니다.',
    marketSize: '2024 국내 자산운용업 AUM 1,802조원(공모 ETF 중심 성장) — 금융·핀테크 AI 인프라 확장',
    revenueModel: '구독(리서치/분석) + 엔터프라이즈 라이선스 + API/SDK',
    competitiveAdvantage: '멀티거래소 통합·실질수익률(XAI)·엔터프라이즈 보안·컴플라이언스',
    businessImpact: '데이터 기반 의사결정 강화, 리스크 관리 고도화, 조직 워크플로우 통합',
    investmentHighlights: '개인→B2B 확장성 + 투자 케어로그 데이터 자산화'
  },
  {
    name: '베지케어',
    status: '오픈베타',
    icon: '🌿',
    summary: '국내최초 베지테리안 플랫폼 - 채식·플렉시테리언을 위한 건강 케어로그 + 레시피/식당/정기배송 연계',
    url: '/services/veggie',
    externalUrl: 'https://veggie.care',
    category: 'Lifestyle',
    users: 'Beta Testing',
    description: '섭취 기록·영양 밸런스·혈액지표(사용자 입력)를 케어로그로 관리하고, AI가 결핍 영양소 보완 레시피/메뉴를 추천합니다. 단순 후기 앱에서, 개인 건강 데이터 기반 추천·정기배송 연계로 전환합니다.',
    marketSize: '2024 한국 비건 식품 시장 약 USD 3.8억(여러 리서치 추정치) — MZ·ESG 트렌드',
    revenueModel: '구독 + 정기배송/제휴 수수료 + 광고',
    competitiveAdvantage: '건강지표 연동 추천·지역 식당/상품 데이터베이스',
    businessImpact: '식습관 지속률 향상, 재구매/재방문 증대',
    investmentHighlights: '헬스·푸드 크로스오버 데이터 자산'
  }
]


// 3) AI 핵심기술 (기술 페이지로 연결)
const coreTech = {
  name: 'AI+디지털케어로그',
  icon: '🧠',
  summary: '전 생애/전 영역 케어 데이터를 하나의 표준 스키마로 — 진단 전·후를 잇는 AI 분석 엔진',
  url: '/technology',
  category: 'Core Technology',
  description: '케어로그 표준 스키마(행동·증상·과제·복약·환경·검사)를 기반으로, 설명 가능한 AI가 개입 근거를 제시합니다. 모든 서비스가 같은 데이터 언어로 연결됩니다.'
}

export default function ServicePortfolio() {
  const activeServices = platforms.filter(p => p.status === '서비스 중')
  const developingServices = platforms.filter(p => p.status !== '서비스 중')
  const monopolyCount = '4'
  const totalServices = platforms.length

  // JSON-LD (간단 요약)
  const itemList = platforms.map((s, i) => ({
    '@type': 'ListItem', 
    position: i + 1, 
    item: { 
      '@type': 'Service', 
      name: s.name, 
      url: s.url && s.url !== '#' ? s.url : undefined 
    } 
  }))

  return (
    <div className="min-h-screen bg-gray-50">
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify({ 
            '@context': 'https://schema.org', 
            '@type': 'ItemList', 
            name: 'Dream AI Lab 서비스 포트폴리오', 
            itemListElement: itemList 
          }) 
        }} 
      />

      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              서비스 포트폴리오
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white/90 mb-8 leading-relaxed">
              환자·보호자·현장 전문가가 오늘 바로 쓰는 AI — 동일한 케어로그로 연결해 치료·돌봄·생활을 이어줍니다.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-center">
              <div className="bg-white/20 rounded-lg p-4 border border-white/30">
                <div className="text-2xl font-bold">{totalServices}</div>
                <div className="text-sm text-white/80">총 서비스</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4 border border-white/30">
                <div className="text-2xl font-bold">{monopolyCount}</div>
                <div className="text-sm text-white/80">4대 독점</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4 border border-white/30">
                <div className="text-2xl font-bold">6</div>
                <div className="text-sm text-white/80">주요 플랫폼</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* 주요 플랫폼 */}
          <Section 
            title="주요 플랫폼" 
            subtitle="기존 산업 트렌드를 바꾸고 새로운 비즈니스 패러다임을 이끌어가는 혁신 플랫폼"
            badge="Innovation"
          >
            <div className="grid grid-cols-1 gap-8">
              {platforms.map((platform, idx) => (
                <PlatformCard key={idx} platform={platform} />
              ))}
            </div>
          </Section>


          {/* AI 핵심기술 */}
          <Section 
            title="AI 핵심기술" 
            subtitle="모든 서비스의 기반이 되는 핵심 기술 플랫폼"
            badge="Core"
          >
            <div className="max-w-4xl mx-auto">
              <CoreTechCard tech={coreTech} />
            </div>
          </Section>
        </div>
      </main>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            함께 성장하는 AI 생태계를 만들어가요
          </h2>
          <p className="text-xl mb-8 text-white/90">
            투자, 파트너십, 기술 협력 등 다양한 방식으로 함께할 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              비즈니스 문의
            </Link>
            <Link 
              href="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-200"
            >
              회사 소개
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// ===== 공용 컴포넌트 =====
function Section({ 
  title, 
  subtitle, 
  children, 
  badge 
}: { 
  title: string
  subtitle: string
  children: React.ReactNode
  badge: string
}) {
  return (
    <section className="relative">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border border-blue-200">
            {badge}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
      </div>
      {children}
    </section>
  )
}

function PlatformCard({ platform }: { platform: any }) {
  const statusColor = platform.status === '서비스 중' ? 'bg-green-100 text-green-800' :
                     platform.status === '오픈베타' ? 'bg-purple-100 text-purple-800' :
                     platform.status === '업데이트 및 베타서비스' ? 'bg-orange-100 text-orange-800' :
                     'bg-blue-100 text-blue-800'
  
  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="text-5xl">{platform.icon}</div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{platform.name}</h3>
            <p className="text-sm text-gray-600">{platform.summary}</p>
          </div>
        </div>
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${statusColor}`}>
          {platform.status}
        </span>
      </div>
      
      {/* Description */}
      <p className="text-gray-700 mb-6 text-base leading-relaxed">{platform.description}</p>
      
      {/* Business Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">시장 규모</div>
          <div className="text-sm font-bold text-blue-900">{platform.marketSize}</div>
        </div>
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4">
          <div className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-1">수익 모델</div>
          <div className="text-sm font-bold text-green-900">{platform.revenueModel}</div>
        </div>
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-4">
          <div className="text-xs font-semibold text-purple-600 uppercase tracking-wide mb-1">경쟁 우위</div>
          <div className="text-sm font-bold text-purple-900">{platform.competitiveAdvantage}</div>
        </div>
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-4">
          <div className="text-xs font-semibold text-orange-600 uppercase tracking-wide mb-1">사용자</div>
          <div className="text-sm font-bold text-orange-900">{platform.users}</div>
        </div>
      </div>
      
      {/* Business Impact & Investment Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">📈 비즈니스 임팩트</h4>
          <p className="text-sm text-gray-600">{platform.businessImpact}</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">💰 투자 하이라이트</h4>
          <p className="text-sm text-gray-600">{platform.investmentHighlights}</p>
        </div>
      </div>
      
      {/* Category & Action Buttons */}
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
          {platform.category}
        </span>
        
        <div className="flex gap-3">
          {platform.url && platform.url !== '#' && (
            <Link 
              href={platform.url} 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              자세히 보기
            </Link>
          )}
          {platform.externalUrl && platform.externalUrl !== '#' && (
            <a
              href={platform.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors"
            >
              서비스 이용
            </a>
          )}
          {(!platform.url || platform.url === '#') && (!platform.externalUrl || platform.externalUrl === '#') && (
            <button disabled className="bg-gray-200 text-gray-600 px-6 py-3 rounded-lg text-sm font-semibold cursor-not-allowed">
              준비 중
            </button>
          )}
        </div>
      </div>
    </div>
  )
}


function CoreTechCard({ tech }: { tech: any }) {
  return (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-xl border border-indigo-200">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">{tech.icon}</div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">{tech.name}</h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">{tech.description}</p>
      </div>
      
      <div className="text-center">
        <Link 
          href={tech.url} 
          className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          기술 상세 보기
        </Link>
      </div>
    </div>
  )
}