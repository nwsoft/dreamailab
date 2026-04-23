import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export const metadata: Metadata = {
  title: '국제결혼 플랫폼 글로벌커플케어 GCC | 베트남·태국·필리핀·일본·중국 결혼 전문가 비교',
  description:
    '국제결혼·다문화 가족을 위한 통합 플랫폼 GCC. 베트남·태국·필리핀·일본·중국 등 다양한 국가의 결혼 전문가를 한 곳에서 비교하고, 가격·절차·법무·정착 정보를 투명하게 제공합니다.',
  keywords:
    '국제결혼, 국제결혼플랫폼, 글로벌커플케어, GCC, 베트남결혼, 태국결혼, 필리핀결혼, 일본결혼, 중국결혼, 다문화가정, 결혼비자, 혼인신고, 결혼정착지원, 언어치료, 자녀양육, 국제커플, 결혼전문가비교, 투명한가격, AI케어로그, 디지털케어로그, 결혼이민, 다문화가족지원, 국제결혼상담, 법무지원, 웨딩플랫폼, 여행사협력, 항공사제휴',
  openGraph: {
    title: '글로벌커플케어 GCC - 국제결혼 전문가 통합 플랫폼',
    description: '국제결혼 정보·절차·정착 지원을 하나로 연결하는 플랫폼 인프라',
    type: 'website',
    locale: 'ko_KR',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://dreamailab.com/services/marriage',
  },
}

// ===== 브랜드/GCC 상수 =====
const brand = {
  name: 'Global Couple Care',
  short: 'GCC',
  domain: 'GlobalCoupleCare.com',
  slogans: [
    '국제결혼, 그 이후까지 함께 케어합니다.',
    '투명한 정보, 공정한 선택, 따뜻한 돌봄',
    'Global Couple Care – 사랑과 가정을 지키는 플랫폼',
  ],
}

const faqs = [
  {
    q: '플랫폼이 직접 중개를 하나요?',
    a: '아니요. 본 서비스는 국제결혼 "정보 전문 플랫폼"으로, 검증된 파트너(법률/행정/통번역 등)와의 상담 연결을 제공합니다. 모든 계약/거래는 사용자와 파트너 간에 이루어집니다.'
  },
  {
    q: '가격과 절차는 어떻게 비교하나요?',
    a: '국가/사례별 표준 견적과 절차, 예상 기간을 공개하고, 업체별 리뷰·완료율·응답 속도 등 지표를 함께 제공합니다.'
  },
  {
    q: '결혼 후에도 지원이 되나요?',
    a: '정착(언어/취업/주거/금융/자녀 교육) 가이드를 제공하고, 지역 커뮤니티와 가족 라이프로그 연동으로 지속 지원합니다.'
  },
  {
    q: '안전과 윤리는 어떻게 보장하나요?',
    a: 'KYC/신원·문서 검증, 동의 기반 커뮤니케이션, 신고/제재/블랙리스트 운영 등 안전 장치를 갖추고 윤리 가이드라인 준수를 의무화합니다.'
  },
]

// ===== 데이터 정의 =====
const coreFeatures = [
  {
    title: '한눈에 정보 비교',
    desc: '국내·해외(베트남·태국·필리핀·일본·중국 등) 주요 업체 정보를 한 곳에서 비교해 탐색 부담을 줄입니다.',
    icon: '🔎',
  },
  {
    title: '전문가 참여 시스템',
    desc: '홈페이지 없는 전문 상담사도 참여 가능. 개인적으로 활동하던 분들도 공식 플랫폼에서 투명하게 서비스 제공',
    icon: '🏪',
  },
  {
    title: '법무·비자 표준 워크플로우',
    desc: '혼인·비자·국적 서류 자동화, 체크리스트·타임라인 제공. 복잡한 행정 절차를 쉽게',
    icon: '⚖️',
  },
  {
    title: '언어·문화·자녀양육 지원',
    desc: '자람의 언어치료 노하우를 참고해 문화 차이 적응, 자녀 교육·양육 커뮤니티 등 정착 단계 이슈를 지원',
    icon: '👨‍👩‍👧',
  },
  {
    title: 'DAL 생태계 연계',
    desc: '정착 이후 의료·교육·상담 등 필요한 영역에서 드림에이아이랩 서비스와 연계 가능한 구조를 제공합니다.',
    icon: '📱',
  },
  {
    title: '커뮤니티 & 경험 공유',
    desc: '국제결혼 경험담, 문화 차이 극복 방법, 자녀 양육 노하우 등을 실제 경험자들과 공유',
    icon: '💬',
  },
]

const problemPoints = [
  '정보 비대칭으로 가격이 제각각, 과다 비용·바가지 위험',
  '비윤리적 업체·사기·허위 이력 노출, 신부/가족 측 금전 요구 리스크',
  '국가별 법무/비자 절차 복잡성과 서류 누락·지연',
  '결혼 이후 언어·취업·주거·가족 적응 공백, 지속 지원 부재',
]

const solutions = [
  '가격·절차·기간·평판 공개: 표준 견적/비용 비교·리뷰로 투명성 확보',
  '검색·추천 + KYC/신원·레퍼런스 검증 + 신고/제재 시스템으로 자정 작용',
  '법무·비자·국적 표준 워크플로우(템플릿/체크리스트/타임라인) 제공',
  '결혼 후 정착(언어/취업/주거/가족) & 커뮤니티 연계로 지속 지원',
]

const lifecycle = [
  {
    step: '사전(Pre-Match)',
    bullets: [
      '프로필/KYC 등록, 레퍼런스 확인',
      '성향/가치관/문화 성향 AI 분석',
      '안전 가이드·중개사/대행사 온보딩',
    ],
  },
  {
    step: '상담–법무–비자',
    bullets: [
      '플랫폼 내 상담 요청/메시지, 대면/원격 미팅 연계',
      '혼인/비자/국적 서류 자동화, 타임라인·체크리스트',
      '검증된 파트너사(법률/행정/통번역)와 직접 계약·진행',
    ],
  },
  {
    step: '정착(Post-Marriage)',
    bullets: [
      '언어/취업/주거/금융·보험/자녀 교육 연계',
      '가족 라이프로그(건강·교육·행정) 구축',
      '지역 커뮤니티·문화 적응 프로그램',
    ],
  },
]

const valueProps = [
  { title: '표준화된 프로세스', desc: '국제결혼 전 과정을 표준화해 오류·지연·비용을 줄입니다.', icon: '📑' },
  { title: '엔드투엔드 플랫폼', desc: '매칭→법무→정착을 하나의 계정·데이터로 이어갑니다.', icon: '🔗' },
  { title: '신뢰와 안전', desc: 'KYC/신원·문서 검증·안전 커뮤니케이션·분쟁 예방 설계.', icon: '🛡️' },
  { title: '네트워크 효과', desc: '사용자·파트너·기관이 모일수록 더 정확하고 편리해집니다.', icon: '🕸️' },
]

const bizPillars = [
  {
    title: 'Agency SaaS',
    desc: '중개/대행사를 위한 고객·서류·타임라인·정산·리뷰 관리. 표준화로 락인.',
    icon: '💼',
  },
  {
    title: 'Marketplace',
    desc: '법률/행정/통번역/보험/이사/주거 파트너를 검증·연결. 지역 확장에 유리.',
    icon: '🏪',
  },
  {
    title: 'Consumer App',
    desc: '가족 커뮤니케이션·알림·체크리스트·문서 보관. 결혼 이후에도 지속 사용.',
    icon: '📱',
  },
  {
    title: 'Data & Risk',
    desc: '사기 방지 신호, 성공 패턴, 국가별 리스크 인텔 확보로 장기 진입장벽.',
    icon: '📊',
  },
]

const businessDesign = [
  {
    title: '플랫폼 정체성',
    desc: '국제결혼·다문화 가족을 위한 B2C(가족) + B2B(업체) + B2G(공공) 통합 플랫폼. 단순 소개·중개가 아니라 "정보·프로세스·데이터 인프라"를 제공합니다.',
    icon: '🌐',
  },
  {
    title: '역할 재정의',
    desc: '사용자는 정보를 비교·선택하고, 국내·해외 업체는 표준 프로세스와 윤리 규칙 안에서 서비스 품질로 경쟁합니다.',
    icon: '♻️',
  },
  {
    title: '확장성',
    desc: '국제결혼을 넘어 다문화 정착, 가족 케어, 이민·장기체류·국제 교육 등으로 확장 가능한 구조로 설계되었습니다.',
    icon: '📈',
  },
]

const cultureChangePoints = [
  '"가격은 만나서 이야기하자"식 깜깜이 견적 대신, 국가/케이스별 기준 가격·비용 구조를 공개합니다.',
  '"상품화된 배우자" 표현, 차별적 광고, 인권 침해 우려가 있는 문구를 플랫폼 내에서 금지하고 윤리 가이드라인을 제시합니다.',
  '신부·가족에게 직접 송금 강요, 정체 불명의 현지 브로커 개입 등 불투명 관행을 차단하고 투명한 정산 구조를 설계합니다.',
  '단기 방문 후 성급한 결혼을 조장하는 문화 대신, 충분한 정보·상담·교육 과정을 거치는 책임 있는 매칭 문화를 만듭니다.',
]

const targetAudiences = [
  {
    title: '사용자·가족',
    desc: '국가·전문가·비용·절차를 같은 기준으로 비교하고, 결혼 이후 정착 정보까지 이어서 확인합니다.',
    icon: '👨‍👩‍👧',
  },
  {
    title: '전문가·기관',
    desc: '표준 양식·검증·리뷰 체계 안에서 서비스 품질로 경쟁하고 고객 응대·서류 흐름을 체계화합니다.',
    icon: '🏢',
  },
  {
    title: '공공·지역사회',
    desc: '불투명 관행을 줄이고 윤리·안전 기준을 확산해 다문화 가족 정착 지원의 기반을 강화합니다.',
    icon: '🏛️',
  },
]

const expansionAreas = [
  '국제결혼 이후 다문화 가족의 자녀 교육·언어 교육·진로 설계',
  '체류 자격 변경, 영주권·국적 취득, 해외 이민·재이주 컨설팅 연계',
  '국제 커플을 위한 금융·보험·세무·상속·자산관리 서비스 연동',
  '다국적 가족을 위한 온라인 커뮤니케이션, 번역, 원격 상담 서비스',
]

// 왜 이 플랫폼을 선택하는가
const whyMustUse = [
  {
    title: '정보 독점 종식',
    desc: '여러 국가·전문가 정보를 한 곳에서 비교해 탐색 부담을 줄입니다.',
    reason: '탐색 시간과 비교 비용을 줄이는 데 유리',
  },
  {
    title: '가격 투명성',
    desc: '표준 견적으로 바가지 방지. 리뷰로 검증된 전문가 선택',
    reason: '비용·절차를 비교해 의사결정하기에 유리',
  },
  {
    title: '평생 지원 시스템',
    desc: '결혼 후에도 언어·자녀·학교·병원 등 정착 단계 핵심 이슈를 지속 지원',
    reason: '결혼 이후 정착 정보를 이어서 관리하기에 유리',
  },
  {
    title: '네트워크 효과',
    desc: '사용자가 많을수록 정보·리뷰·커뮤니티가 강력해짐',
    reason: '참여자가 늘수록 정보와 리뷰의 밀도가 높아짐',
  },
]

// 비즈니스 트렌드를 어떻게 바꾸는가
const howChangesTrend = [
  {
    old: '개별 업체 중심의 닫힌 시장',
    new: '플랫폼 중심의 열린 시장',
    impact: '소비자 선택권 확대, 업체 간 건전한 경쟁',
    icon: '🔄',
  },
  {
    old: '오프라인 중심, 지역 제한적',
    new: '온라인 통합, 글로벌 연결',
    impact: '해외 전문가 참여, 24시간 서비스 가능',
    icon: '🌍',
  },
  {
    old: '1회성 매칭 중심',
    new: '평생 케어 중심',
    impact: '결혼 이후 가족 전체 생애주기 관리',
    icon: '♾️',
  },
  {
    old: '불투명한 관행, 윤리 문제',
    new: '표준화·투명화·윤리화',
    impact: '산업 신뢰도 향상, 제도권 진입',
    icon: '✨',
  },
]

export default function MarriageService() {
  // 구조화된 데이터 (JSON-LD) for SEO & AI
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://dreamailab.com/services/marriage#service',
        name: '글로벌커플케어 (GCC)',
        description:
          '국제결혼·다문화 가족을 위한 정보·절차·신뢰 인프라 플랫폼. 전문가 비교, 법무·행정 안내, 정착 지원 연계를 제공합니다.',
        provider: {
          '@type': 'Organization',
          name: '드림에이아이랩',
          url: 'https://dreamailab.com',
        },
        serviceType: '국제결혼 통합 플랫폼',
        areaServed: ['KR', 'VN', 'TH', 'PH', 'JP', 'CN'],
        availableChannel: {
          '@type': 'ServiceChannel',
          serviceUrl: 'https://dreamailab.com/services/marriage',
        },
        audience: {
          '@type': 'PeopleAudience',
          audienceType: '국제결혼 희망자, 다문화 가정, 국제결혼 전문가',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: '국제결혼 통합 서비스',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: '전문가 매칭 및 비교',
                description: '베트남·태국·필리핀·일본·중국 등 다양한 국가의 전문가 정보 비교',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: '비자·법무 지원',
                description: '결혼비자, 혼인신고, 국적 취득 관련 절차 안내 및 체크리스트',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: '결혼 후 정착 지원',
                description: '언어·자녀양육·교육·의료 정보와 커뮤니티 연결',
              },
            },
          ],
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dreamailab.com/services/marriage#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: '플랫폼이 직접 중개를 하나요?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '아니요. 본 서비스는 국제결혼 정보 전문 플랫폼으로, 검증된 파트너(법률·행정·통번역 등)와의 상담 연결을 제공합니다. 계약과 거래는 사용자와 파트너 간에 이루어집니다.',
            },
          },
          {
            '@type': 'Question',
            name: '가격과 절차는 어떻게 비교하나요?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '국가별 표준 견적 항목과 절차, 예상 기간을 공개하고 업체별 리뷰·완료율·응답 속도 같은 지표를 함께 제공합니다.',
            },
          },
          {
            '@type': 'Question',
            name: '결혼 후에도 지원이 되나요?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '네. 정착(언어·취업·주거·금융·자녀 교육) 가이드를 제공하고, 지역 커뮤니티와 가족 라이프로그 연동으로 지속 지원합니다.',
            },
          },
          {
            '@type': 'Question',
            name: '안전과 윤리는 어떻게 보장하나요?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'KYC·신원·문서 검증, 동의 기반 커뮤니케이션, 신고·제재·블랙리스트 운영 등 안전 장치를 적용하고 윤리 가이드라인 준수를 운영 기준으로 둡니다.',
            },
          },
        ],
      },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* JSON-LD 구조화된 데이터 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      {/* Hero */}
      {/* 1. Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20" aria-label="메인 소개">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {brand.name} ({brand.short}) - 국제결혼 통합 플랫폼
            </h1>
            <p className="text-xl md:text-2xl mb-6 max-w-4xl mx-auto">
              <strong>국제결혼의 새로운 문화를 만듭니다.</strong> 국내·해외를 잇는 표준 국제결혼·다문화 가족 플랫폼입니다.
            </p>
            <p className="text-lg max-w-3xl mx-auto text-white/90">
              국내·해외 거주자, 국제커플, 국내·해외 결혼정보업체와 전문가가{' '}
              <strong>한 번의 가입으로 하나의 플랫폼에서 만나</strong> 국제결혼 전 과정을 함께 설계합니다.
            </p>
            <p className="text-base max-w-3xl mx-auto text-white/80 mt-3">
              결혼 준비부터 상담·법무·비자, 정착 이후 가족 생활까지 <strong>끊김 없이 연결</strong>됩니다.
            </p>
            <div className="mt-6">
              <span className="inline-block px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-semibold">In Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model & Target */}
      <article className="py-16 lg:py-24" aria-labelledby="business-model">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="business-model" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              국제결혼 플랫폼 비즈니스 모델 & 타깃
            </h2>
            
            {/* 비즈니스 개요 */}
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8 max-w-5xl mx-auto mb-8 text-left">
              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-5 mb-6">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  {brand.short}는 국제결혼정보회사가 아닙니다
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  국내·해외 국제결혼 전문가들이 <strong className="text-primary-700">함께 참여하는 멀티사이드 플랫폼</strong>입니다.
                </p>
                <p className="text-sm text-gray-700">
                  한 번의 가입으로 <strong>여러 국가·전문가의 정보를 한눈에 비교</strong>하고, 결혼 전부터 정착 이후까지 필요한 서비스를 연결합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white rounded-lg p-5 border-2 border-primary-200">
                  <div className="text-2xl mb-2">💑</div>
                  <h4 className="font-semibold text-gray-900 mb-2">결혼 희망자</h4>
                  <p className="text-sm text-gray-700">한 곳에서 여러 국가·업체 정보를 같은 기준으로 비교해 탐색 부담을 줄입니다.</p>
                </div>
                <div className="bg-white rounded-lg p-5 border-2 border-primary-200">
                  <div className="text-2xl mb-2">🏢</div>
                  <h4 className="font-semibold text-gray-900 mb-2">국내·해외 전문가</h4>
                  <p className="text-sm text-gray-700">베트남·태국·필리핀·일본·중국 등 해외 현지 전문가도 참여. 홈페이지 없이도 전문 서비스 제공 가능</p>
                </div>
                <div className="bg-white rounded-lg p-5 border-2 border-primary-200">
                  <div className="text-2xl mb-2">👨‍👩‍👧</div>
                  <h4 className="font-semibold text-gray-900 mb-2">결혼이민자 가정</h4>
                  <p className="text-sm text-gray-700">언어·자녀양육·문화차이·학교·병원 등 정착 단계 핵심 이슈를 커뮤니티와 네트워크로 지원</p>
                </div>
              </div>

              <div className="bg-white/50 rounded-lg p-5 border-l-4 border-primary-500">
                <h4 className="font-semibold text-gray-900 mb-2">🌟 한 곳에서 핵심 정보를 연결하는 통합 플랫폼</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ <strong>정보 통합:</strong> 국내·해외 주요 국제결혼 전문가의 서비스를 한 곳에서 비교하고 선택</li>
                  <li>✓ <strong>전문가 참여:</strong> 개인적으로 상담 활동을 하시던 분들도 공식 플랫폼에서 투명하게 서비스 제공</li>
                  <li>✓ <strong>전 생애 지원:</strong> 결혼 전 상담부터 법무·비자, 정착 후 언어·양육·교육까지 연결</li>
                  <li>✓ <strong>DAL 생태계 연계:</strong> 정착 이후 필요 시 드림에이아이랩 네트워크와의 연결 구조 제공</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 해외 업체 입점 전략 섹션 추가 */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border-2 border-blue-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
                  <span className="text-3xl">🌍</span>
                  글로벌 확장 전략 – 해외 대형 결혼정보업체가 참여하기 쉬운 구조
                </h3>
                <p className="text-gray-700 max-w-3xl mx-auto">
                  {brand.short}는 단순히 한국인을 위한 국제결혼 플랫폼이 아니라, 
                  동남아시아·중앙아시아·동유럽 등 주요 국제결혼 선호 국가의 현지 업체들이 
                  공식적으로 입점하는 글로벌 마켓플레이스를 지향합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-xl">💰</span>
                    비용 구조의 GAP = 기회
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-red-50 rounded-lg p-4">
                      <p className="text-sm font-semibold text-gray-900 mb-1">한국 국제결혼 평균 비용</p>
                      <p className="text-2xl font-bold text-red-600">업체별 편차가 큰 견적 구조</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="text-sm font-semibold text-gray-900 mb-1">베트남·태국·필리핀 현지 기준</p>
                      <p className="text-2xl font-bold text-green-600">비용 항목 표준 공개</p>
                      <p className="text-sm text-gray-600 mt-2">(비교 가능성 강화)</p>
                    </div>
                    <p className="text-sm text-gray-600 mt-3">
                      현지 업체 기준에서도 한국 시장은 매우 큰 규모입니다. 
                      하지만 한국 진출 장벽이 높아 접근이 어려웠습니다.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-xl">🚪</span>
                    해외 업체가 입점하기 쉬운 이유
                  </h4>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold mt-1">✓</span>
                      <span><strong>비용 없이 한국 전체 시장 확보:</strong> 마케팅/채널 없이도 {brand.short} 입점만으로 한국 전체 시장 접근</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold mt-1">✓</span>
                      <span><strong>공식 인증 플랫폼:</strong> 유튜브·밴드·지인 소개 대신 KYC·리뷰·표준 절차로 신뢰 확보</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold mt-1">✓</span>
                      <span><strong>네트워크 효과:</strong> 해외 업체 입점 → 더 많은 후보자 데이터 → 국내 사용자 증가 → 다시 해외 업체 증가</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3">💡 핵심 메시지</h4>
                <p className="text-indigo-100">
                  {brand.short}는 국내용 서비스에 머무르지 않고, 국제결혼 산업의 표준 기준을 확장해가는 글로벌 인프라를 지향합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Why Now */}
      <article className="py-16 lg:py-24 bg-gradient-to-br from-amber-50 to-orange-50" aria-labelledby="why-succeed">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="why-succeed" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              국제결혼 플랫폼 - 왜 지금 구조 전환이 필요한가
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              <strong className="text-primary-600">문제의 크기</strong>와 <strong className="text-primary-600">해결의 공백</strong>이 명확한 시장입니다
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-red-200">
              <div className="text-4xl mb-4 text-center">⚠️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">사회적 문제 인식 ↑</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>매매혼 논란, 인권 침해 우려 지속</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>사기 피해, 바가지 요금 빈번</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>정보 비대칭, 불투명한 관행</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>결혼 후 방치, 지원 시스템 부재</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-green-200">
              <div className="text-4xl mb-4 text-center">📈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">수요는 꾸준히 증가 ↑</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>글로벌 이동 증가, 국제 커플 확대</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>다문화 가정 지속적 증가 추세</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>지방·농촌 국제결혼 수요 존재</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>온라인 매칭 시대, 글로벌 연결</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-gray-300">
              <div className="text-4xl mb-4 text-center">❌</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">표준화된 해결 인프라 부족</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span>표준 플랫폼 부재</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span>정보 통합 시스템 없음</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span>투명성·윤리 기준 부재</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span>결혼 후 지원 체계 없음</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white text-center mb-8">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-4">결론: 구조 전환의 기회</h3>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              <strong>문제 인식은 높고</strong>, <strong>수요는 존재하며</strong>, <strong>표준화된 해결 인프라는 아직 부족합니다</strong>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                <p className="font-bold mb-1">시장 진입</p>
                <p className="text-sm">초기 표준 설계 기회</p>
              </div>
              <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                <p className="font-bold mb-1">네트워크 효과</p>
                <p className="text-sm">사용자 많을수록 강력</p>
              </div>
              <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                <p className="font-bold mb-1">높은 진입장벽</p>
                <p className="text-sm">표준·데이터·신뢰 선점</p>
              </div>
            </div>
          </div>

          {/* 비용 구조 차이 강조 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center gap-2">
              <span className="text-3xl">📊</span>
              시장 불균형 해결: 비용 구조 투명화
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                <h4 className="font-bold text-gray-900 mb-3">현재 시장의 문제</h4>
                <p className="text-sm text-gray-700 mb-4">
                  업체별 정보 공개 기준이 달라 사용자가 합리적으로 비교하기 어려운 구조가 반복됩니다.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>업체별 견적 기준이 달라 비용 비교가 어렵고 과다 청구 위험이 존재</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>정보 비대칭으로 바가지 요금 빈번</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>해외 현지 비용 구조 숨김</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                <h4 className="font-bold text-gray-900 mb-3">{brand.short}의 해결책</h4>
                <p className="text-sm text-gray-700 mb-4">
                  해외 현지 업체 직접 입점으로 비용 구조를 투명하게 공개하고 가격 비교 가능성을 높입니다.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>국가·업체별 비용 항목을 같은 형식으로 공개해 비교 가능성 강화</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>해외 업체 직접 입점으로 가격 비교 가능</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>표준 견적과 리뷰로 합리적 선택 보장</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
              <p className="text-sm text-gray-700">
                <strong>💡 핵심 전략:</strong> 해외 현지 업체가 직접 입점하면 사용자는 현지 비용 구조를 직접 확인할 수 있고, 
                국내 업체들은 공정한 경쟁을 할 수밖에 없습니다. 이를 통해 시장의 불균형을 근본적으로 해결합니다.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Core Features */}
      <article className="py-16 lg:py-24 bg-white" aria-labelledby="core-features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="core-features" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              국제결혼 플랫폼 핵심 구조 요소
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              기능 나열보다, 정보·절차·정착이 어떻게 하나의 구조로 연결되는지에 초점을 둡니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFeatures.map((f, i) => (
              <div key={i} className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">{f.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* Brand & Platform Introduction */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">브랜드 & 플랫폼 소개</h2>
            
            {/* 브랜드 정보 */}
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8 max-w-4xl mx-auto mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{brand.name}</h3>
                <span className="text-3xl font-bold text-primary-600">({brand.short})</span>
              </div>
              <p className="text-gray-700 mb-4">드림에이아이랩의 국제결혼·다문화 가족 케어 플랫폼</p>
              <p className="text-sm text-gray-500 mb-6">도메인: {brand.domain}</p>
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">브랜드 슬로건</h4>
                <div className="space-y-2">
                  {brand.slogans.map((s, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-primary-500 mt-1">•</span>
                      <p className="text-gray-700">{s}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 문제와 해결 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚠️</span>
                  국제결혼 시장의 구조적 문제
                </h3>
                <ul className="space-y-3">
                  {problemPoints.map((p, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span className="text-gray-700 text-sm">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  {brand.short}의 해결 방법
                </h3>
                <ul className="space-y-3">
                  {solutions.map((s, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 text-sm">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 문화 변화 */}
            <div className="mt-8 bg-white rounded-xl p-8 shadow-sm text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🔄</span>
                기존 잘못된 문화, 이렇게 바꿉니다
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cultureChangePoints.map((c, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">→</span>
                    <span className="text-gray-700 text-sm">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholder View */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">누구를 위한 인프라인가</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              GCC는 사용자·전문가·공공이 같은 기준으로 정보를 이해하고 협업할 수 있도록 설계된 구조입니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {targetAudiences.map((audience, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 shadow-sm text-center">
                <div className="text-3xl mb-3">{audience.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{audience.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{audience.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Platform */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              왜 이 플랫폼을 선택하는가
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-white/90">
              {brand.short}는 비교·투명성·정착 연계를 중시하는 사용자에게 실질적인 기준을 제공합니다
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyMustUse.map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-sm mb-4 text-white/90">{item.desc}</p>
                <div className="bg-white/20 rounded-lg p-3">
                  <p className="text-xs font-semibold mb-1">💡 선택 근거</p>
                  <p className="text-sm">{item.reason}</p>
                </div>
              </div>
            ))}
            {/* 해외 DB 확보 추가 카드 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-yellow-300">
              <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                <span>🌐</span>
                해외 DB 확보 → 국내 사용자 선택 폭 확대
              </h3>
              <p className="text-sm mb-4 text-white/90">
                해외 현지 업체 입점으로 대규모 결혼희망자 데이터베이스를 확보하면, 
                국내 사용자들은 더 많은 후보자와 정보를 한눈에 비교할 수 있어 비교 효율이 높아집니다.
              </p>
              <div className="bg-white/20 rounded-lg p-3">
                <p className="text-xs font-semibold mb-1">💡 네트워크 효과</p>
                <p className="text-sm">해외 업체 입점 → 더 많은 후보자 → 국내 사용자 증가 → 다시 해외 업체 증가</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Changes Business Trend */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              비즈니스 트렌드를 어떻게 바꾸는가
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              국제결혼 산업의 운영 방식을 점진적으로 전환합니다
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howChangesTrend.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-4xl mb-4 text-center">{item.icon}</div>
                <div className="space-y-3">
                  <div className="text-center pb-3 border-b border-gray-200">
                    <p className="text-xs text-gray-500 mb-1">기존 방식</p>
                    <p className="text-sm text-gray-700 line-through">{item.old}</p>
                  </div>
                  <div className="text-center pb-3 border-b border-primary-200">
                    <p className="text-xs text-primary-600 font-semibold mb-1">새로운 방식</p>
                    <p className="text-sm font-semibold text-primary-700">{item.new}</p>
                  </div>
                  <div className="bg-primary-50 rounded-lg p-3">
                    <p className="text-xs font-semibold text-primary-700 mb-1">🚀 변화 임팩트</p>
                    <p className="text-xs text-gray-700">{item.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">연결되는 파트너 축</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              GCC는 특정 업종 목록을 나열하기보다, 결혼 전후 과정에서 반복적으로 필요한 연결 축을 표준화합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <InfoCard title="법률·행정" desc="혼인·비자·체류 절차를 표준 흐름으로 연결" icon="⚖️" />
            <InfoCard title="이동·의례" desc="여행·숙박·웨딩 관련 파트너 연계 기준 정리" icon="✈️" />
            <InfoCard title="정착·생활" desc="주거·언어·금융·보호 체계를 정착 단계에 연결" icon="🏠" />
            <InfoCard title="교육·의료" desc="가족 단위의 장기 생활 지원으로 확장" icon="🏥" />
          </div>
        </div>
      </section>

      {/* Info Transparency & Governance */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">정보 투명성 · 윤리 · 안전</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">정보 비대칭을 해소하고, 시장의 자정 작용을 촉진합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <InfoCard title="표준 견적·절차 공개" desc="국가/케이스별 표준 견적·절차·기간 공개로 비교 가능" icon="📑" />
            <InfoCard title="업체 평판 시스템" desc="리뷰·분쟁 이력·응답 속도·완료율 등 지표 제공" icon="⭐" />
            <InfoCard title="신고·제재·블랙리스트" desc="사기/과다 청구 신고 접수, 위반 업체 제재" icon="🚫" />
            <InfoCard title="윤리 가이드라인" desc="KYC/동의/커뮤니케이션 안전수칙 준수 의무화" icon="🛡️" />
          </div>
        </div>
      </section>

      {/* End-to-End Lifecycle */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">엔드투엔드 여정</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">사전 → 상담·법무·비자 → 정착까지 하나의 계정으로 이어집니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {lifecycle.map((phase, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-sm text-gray-500 mb-1">단계</div>
                <div className="text-xl font-bold text-gray-900 mb-2">{phase.step}</div>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  {phase.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Post-Marriage Community & Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">결혼 후 커뮤니티 & 지속 서비스</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">결혼이 끝이 아니라 시작입니다. 정보·지원·네트워크가 계속 이어집니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard title="정착 정보 허브" desc="언어/취업/주거/금융/자녀 교육 가이드 & Q&A" icon="📚" />
            <InfoCard title="가족 라이프로그" desc="출산·육아·교육·건강 기록을 이어가며 필요한 서비스 연결" icon="📒" />
            <InfoCard title="파트너 연계" desc="보험/금융/교육/의료/법률 등 생활 전반 파트너 연결" icon="🔗" />
          </div>
        </div>
      </section>



      {/* Value Proposition */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">왜 우리 플랫폼인가</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">시장에 없던 <strong>표준화·통합·신뢰</strong>를 제공합니다. {brand.short}는 결혼 이후의 삶까지 이어지는 엔드투엔드 여정을 설계했습니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((v, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 shadow text-center">
                <div className="text-3xl mb-2">{v.icon}</div>
                <div className="font-semibold text-gray-900 mb-1">{v.title}</div>
                <div className="text-sm text-gray-600">{v.desc}</div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-gray-600 text-center">플랫폼은 중개/대행사에게 <strong>Agency SaaS</strong>를 제공합니다. 표준화된 행정·서류·견적 템플릿으로 상담 요청을 받고, 동일 기준으로 정보(프로필·비용·절차)를 업로드하여 업체 간 형평성과 신뢰를 보장합니다.</p>
        </div>
      </section>

      {/* Business & Go-to-Market */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">비즈니스 & 시장 전략</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Agency SaaS + Consumer App + 파트너 마켓플레이스 + 데이터/리스크 인텔을 하나의 플랫폼 안에서 설계한, 국제결혼·다문화 가족 산업용 비즈니스 인프라입니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bizPillars.map((b, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-2xl mb-2">{b.icon}</div>
                <div className="font-semibold text-gray-900 mb-1">{b.title}</div>
                <div className="text-sm text-gray-700">{b.desc}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">비즈니스 설계 관점 요약</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {businessDesign.map((b, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl mb-1">{b.icon}</div>
                    <div className="text-sm font-semibold text-gray-900 mb-1">{b.title}</div>
                    <div className="text-xs text-gray-700 leading-5">{b.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">국제결혼을 넘어</h3>
              <p className="text-sm text-gray-700 mb-2">
                {brand.short}는 장기적으로 국제결혼만이 아니라, <strong>다문화·국제 가족 전 생애</strong>를 아우르는 서비스로 확장합니다.
              </p>
              <ul className="list-disc list-inside text-xs text-gray-700 space-y-1">
                {expansionAreas.map((e, idx) => (
                  <li key={idx}>{e}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* 국가별 지사 확장 로드맵 */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">🌐 국가별 지사 확장 로드맵</h3>
            <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              {brand.short}의 장기 구조는 단순 비교 플랫폼을 넘어 각 국가의 결혼 생태계와 표준 기준으로 연결되는 형태를 지향합니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="text-3xl mb-3 text-center">1️⃣</div>
                <h4 className="font-bold mb-3 text-center text-gray-900">온라인 입점 마켓플레이스</h4>
                <p className="text-sm text-gray-700 text-center">
                  해외 업체들이 계정만 열면 즉시 한국 시장 연결
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="text-3xl mb-3 text-center">2️⃣</div>
                <h4 className="font-bold mb-3 text-center text-gray-900">국가별 GCC 지사 설립</h4>
                <p className="text-sm text-gray-700 text-center">
                  베트남/태국/필리핀/중앙아시아/동유럽 순차 확장, 현지 행정·법무·비자 절차까지 표준화
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="text-3xl mb-3 text-center">3️⃣</div>
                <h4 className="font-bold mb-3 text-center text-gray-900">현지 파트너 네트워크 확장</h4>
                <p className="text-sm text-gray-700 text-center">
                  국가별 핵심 결혼 관련 사업자가 {brand.short} 안으로 입점해 현지 전문가·통번역·행정사와 함께 플랫폼 기반 운영
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="text-3xl mb-3 text-center">4️⃣</div>
                <h4 className="font-bold mb-3 text-center text-gray-900">글로벌 표준 OS 구축</h4>
                <p className="text-sm text-gray-700 text-center">
                  매칭·법무·비자·정착·교육까지 단일 데이터 파이프라인, 국가 간 커플 이동 및 장기 체류까지 확장
                </p>
              </div>
            </div>
            <div className="mt-8 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6 border-l-4 border-primary-500">
              <p className="text-center text-gray-700">
                <strong>최종 목표:</strong> 한국의 표준 플랫폼 → 국가별 지사 → 글로벌 표준으로 확장하여 
                국제결혼 산업 전반에서 통용될 수 있는 표준 기준과 운영 인프라 구축
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Architecture (간단 모듈) */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">플랫폼 구조</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">매칭 엔진 · 신원/KYC · 법무/비자 워크플로우 · 정착 서비스 · 파트너 API</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ModuleCard title="검색/추천 엔진" desc="가격·절차·평판 기반 검색, 관심·행동 데이터 추천" icon="🔎" />
            <ModuleCard title="신원/KYC" desc="신원·서류 검증, 레퍼런스 확인, 리스크 시그널" icon="🪪" />
            <ModuleCard title="법무/비자" desc="혼인·비자·국적 서류 자동화, 타임라인·체크리스트" icon="📑" />
            <ModuleCard title="정착 서비스" desc="언어·취업·주거·금융·가족 적응 연계" icon="🏠" />
            <ModuleCard title="파트너 API" desc="법률/행정/통번역/보험/이사/주거 연동" icon="🔌" />
            <ModuleCard title="데이터 인텔" desc="사기 방지·성공 패턴·국가별 리스크 분석" icon="📊" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-gray-50" aria-labelledby="faq" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="faq" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              국제결혼 플랫폼 자주 묻는 질문 (FAQ)
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">플랫폼의 범위, 비교 방식, 정착 지원, 안전·윤리에 대해 정리했습니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="font-semibold text-gray-900 mb-2">{f.q}</div>
                <div className="text-sm text-gray-700 leading-6">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Service Status */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-semibold mb-4">In Development</span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{brand.name} (개발 중 공개 사전 안내)</h2>
          <p className="text-gray-600">국제결혼 <strong>정보·비즈니스 인프라 플랫폼</strong>으로, 표준화·투명화·정착 연계를 중심으로 개발 중입니다. 국제결혼을 넘어 다문화 가족과 국제 커플의 전 생애를 지원하는 것을 목표로 하며, 파트너 공개는 순차 진행됩니다.</p>
        </div>
      </section>

      {/* 8. Ecosystem Connection */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">DAL 생태계와의 연결</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">글로벌커플케어(GCC)는 국제결혼·다문화 가족 영역의 정보·절차·신뢰 인프라를 담당하고, 정착 이후 의료·교육·상담 데이터 흐름은 DAL 생태계 서비스와 연계 가능한 구조로 확장합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">🔗 표준 정보 플랫폼</h3>
              <p className="text-sm text-gray-700">국가·업체·비용·절차를 표준 포맷으로. 법률이AI·토탈케어로그와 사후 정착·의료·교육 연계.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">📊 DAL 서비스 연동</h3>
              <p className="text-sm text-gray-700">법률 상담, 의료·교육 정보까지. 다문화 가족 맞춤형 케어로 확장.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 mb-6">파트너 공개 및 제휴 문의를 받고 있습니다.</p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors">
            문의하기
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function InfoCard({ title, desc, icon }: { title: string; desc: string; icon: string }) {
  return (
    <div className="bg-gray-50 rounded-xl p-6 shadow-sm text-center hover:shadow-md transition-shadow">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="font-semibold text-gray-900 mb-1">{title}</div>
      <div className="text-sm text-gray-700">{desc}</div>
    </div>
  )
}

function ModuleCard({ title, desc, icon }: { title: string; desc: string; icon: string }) {
  return (
    <div className="bg-gray-50 rounded-xl p-6 shadow text-center hover:shadow-md transition-shadow">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="font-semibold text-gray-900 mb-1">{title}</div>
      <div className="text-sm text-gray-600">{desc}</div>
    </div>
  )
}
