import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { SymbolIcon } from '../../../components/SymbolIcon'

const pageCanonical = 'https://dreamailab.com/services/veggie'

export const metadata: Metadata = {
  title: '베지케어 | 채식·비건 AI 영양 케어로그 | 드림에이아이랩',
  description:
    '베지케어(VeggieCare)는 채식·비건·플렉시테리언 식습관을 AI 디지털케어로그로 연결하는 웰니스 플랫폼입니다. 베지케어로그·AI 영양·레시피·맛집·마켓·커뮤니티는 베타 운영 중이며, 회복·다이어트·운동 맞춤 모드 UI는 로드맵입니다.',
  alternates: { canonical: pageCanonical },
  openGraph: {
    title: '베지케어 | 채식·비건 AI 영양 케어로그',
    description:
      '식단 기록 → AI 영양 분석 → 실행·마켓 연계를 한 줄기로 연결하는 DAL 웰니스 축. 회복·체중·운동 맞춤 모드는 로드맵입니다.',
    url: pageCanonical,
    siteName: '드림에이아이랩',
    type: 'website',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: '베지케어 | 채식·비건 AI 영양 케어로그',
    description:
      '베지케어로그·영양 분석·레시피·마켓을 베타로 운영하는 웰니스 플랫폼. 맞춤 모드 UI는 로드맵입니다.',
  },
  robots: { index: true, follow: true },
}

const brand = {
  name: '베지케어',
  english: 'VeggieCare',
  status: 'Beta',
  externalUrl: 'https://veggie.care',
}

const targetAudiences = [
  {
    title: '채식을 시작한 개인',
    desc: '무엇을 먹어야 할지, 단백질·철분·비타민 B12는 충분한지 알고 싶은 사용자',
    icon: '🌱',
  },
  {
    title: '항암·장기 회복 단계 사용자',
    desc: '치료·회복 맥락에서 식사 피로를 줄이고, 완치 판정 전까지 먹는 실행을 이어가고 싶은 사용자',
    icon: '🧑‍⚕️',
  },
  {
    title: '비건·채식 커뮤니티',
    desc: '레시피, 식당, 제품, 건강 경험을 신뢰 가능한 기준으로 공유하려는 사용자',
    icon: '💬',
  },
  {
    title: '다이어트·운동 루틴 사용자',
    desc: '체중 관리와 운동 성과를 식습관·영양소와 함께 보고, 실제 식단 실행까지 연결하고 싶은 사용자',
    icon: '🏆',
  },
]

const problemCards = [
  {
    title: '채식 정보는 많지만 개인에게 맞지 않음',
    desc: '검색 결과와 SNS 레시피는 많지만, 나의 건강 상태·알레르기·운동량·목표에 맞는지는 알기 어렵습니다.',
  },
  {
    title: '영양 결핍 걱정이 반복됨',
    desc: '단백질, 철분, 비타민 B12, 칼슘, 오메가3 등 핵심 영양소를 꾸준히 확인하기 어렵습니다.',
  },
  {
    title: '맛집·제품·레시피 정보가 흩어짐',
    desc: '지도, 커뮤니티, 쇼핑몰, 블로그가 분리되어 있어 식단 실행까지 이어지는 흐름이 끊깁니다.',
  },
  {
    title: '건강 변화가 기록으로 남지 않음',
    desc: '채식 후 체중, 혈압, 혈당, 피로감, 소화 상태가 어떻게 달라졌는지 장기적으로 보기 어렵습니다.',
  },
  {
    title: '초기 전환 후 지속이 어려움',
    desc: '처음에는 의지가 있어도 외식, 회식, 가족 식사, 장보기 단계에서 쉽게 중단됩니다.',
  },
  {
    title: '파트너 시장은 성장하지만 기준이 부족함',
    desc: '비건 식품·레스토랑·밀키트 시장은 커지지만, 사용자에게 필요한 제품을 데이터 기반으로 연결하는 기준은 부족합니다.',
  },
]

const personaRows = [
  {
    who: '초기 채식 입문자',
    pain: '무엇부터 먹어야 할지 몰라 샐러드·두부 정도로 식단이 반복됩니다.',
    gain: '현재 식습관과 목표를 입력하면 부족한 영양소와 이번 주 실행 식단을 먼저 봅니다.',
  },
  {
    who: '비건·락토·오보 사용자',
    pain: '엄격도와 허용 식품이 달라 일반 식단 앱으로는 정확히 관리하기 어렵습니다.',
    gain: '채식 유형별 허용 재료와 제외 재료를 기준으로 레시피·외식·제품 추천이 달라집니다.',
  },
  {
    who: '만성질환·체중 관리 사용자',
    pain: '채식이 건강에 좋다는 말은 많지만, 내 혈압·혈당·체중 변화와 연결해 보기 어렵습니다.',
    gain: '식습관 로그와 건강 지표를 함께 보고, 의료·헬스케어 축과 연계 가능한 요약을 만듭니다.',
  },
  {
    who: '식당·브랜드·커머스 파트너',
    pain: '광고는 해도 어떤 사용자에게 어떤 메뉴·제품이 필요한지 알기 어렵습니다.',
    gain: '사용자 선호·제한·영양 목표 기반으로 적합한 메뉴, 제품, 정기배송을 연결합니다.',
  },
]

const platformSteps = [
  {
    n: 1,
    title: '식습관·건강 목표 입력',
    body: '채식 유형, 알레르기, 건강 목표, 운동량, 기존 질환·관심 지표를 간단히 기록합니다.',
  },
  {
    n: 2,
    title: 'AI 영양 분석',
    body: '식단 기록에서 단백질·철분·B12·칼슘·오메가3 등 핵심 영양소의 부족 가능성을 확인합니다.',
  },
  {
    n: 3,
    title: '실행 추천',
    body: '이번 주 식단, 대체 재료, 레시피, 주변 식당, 밀키트·제품을 상황에 맞게 연결합니다.',
  },
  {
    n: 4,
    title: '건강 변화 추적',
    body: '체중, 혈압, 혈당, 컨디션, 소화 상태, 수면, 운동량 같은 변화를 식습관과 함께 봅니다.',
  },
  {
    n: 5,
    title: '환류와 지속',
    body: '실행 결과가 다시 로그로 쌓이며 추천 정확도와 지속 가능성이 점진적으로 높아집니다.',
  },
]

const supportModes = [
  {
    title: '회복 식사 모드 (항암·장기 회복)',
    summary: '먹기 힘든 시기에도 가능한 식사 선택지를 우선 제안',
    points: [
      '베지케어로그에서 식사량·입맛·소화 상태를 함께 기록해 컨디션 저하 구간을 먼저 파악',
      'AI 영양 분석으로 단백질·철분·B12·열량 부족 가능성을 확인하고 대체 식품을 제안',
      '부담이 적은 레시피·식재료·정기배송 추천으로 식사 실행 피로를 낮춤',
    ],
  },
  {
    title: '다이어트 모드',
    summary: '감량 목표를 영양 균형과 함께 유지하는 실행 루프',
    points: [
      '목표 체중·활동량·식사 패턴을 기준으로 주간 식단과 외식 선택 가이드를 제시',
      '칼로리만이 아니라 단백질·식이섬유·미량영양소 균형을 함께 확인',
      '정체 구간에서 식단 강도·간식·외식 빈도 조정안을 제안',
    ],
  },
  {
    title: '운동 모드',
    summary: '운동 목적에 맞춰 식사 타이밍과 영양소를 연결',
    points: [
      '운동 전·후 식사 타이밍과 회복 식단을 기록 기반으로 안내',
      '근력·유산소 루틴별 단백질·탄수화물·수분 보완 포인트를 제안',
      '운동량 대비 부족한 섭취를 알림으로 제공해 루틴 이탈을 줄임',
    ],
  },
]

const coreFeatures = [
  {
    icon: '📒',
    title: '베지케어로그',
    desc: '매일의 식단, 컨디션, 건강 지표를 같은 타임라인에 쌓아 채식 이후의 변화를 기록합니다.',
  },
  {
    icon: '🧠',
    title: 'AI 영양 분석',
    desc: '채식 유형과 건강 목표에 맞춰 부족 가능 영양소, 과잉 섭취, 대체 식품을 제안합니다.',
  },
  {
    icon: '🥗',
    title: 'AI 레시피·식단',
    desc: '집에 있는 재료, 예산, 조리 시간, 알레르기, 채식 엄격도에 맞춘 식단과 레시피를 제공합니다.',
  },
  {
    icon: '📍',
    title: '비건 맛집·외식 매칭',
    desc: '위치, 메뉴, 리뷰, 채식 옵션, 알레르기 정보를 기준으로 외식 선택을 돕습니다.',
  },
  {
    icon: '🛒',
    title: '커머스·정기배송 연계',
    desc: '부족한 영양소와 식습관에 맞는 밀키트, 간편식, 영양제, 식재료를 파트너와 연결합니다.',
  },
  {
    icon: '🏆',
    title: '챌린지·커뮤니티',
    desc: '한 달 채식, 탄소 절감, 건강 루틴 같은 챌린지를 기록하고 경험을 공유합니다.',
  },
  {
    icon: '🛒',
    title: '베지 마켓·정기배송',
    desc: '식재료·밀키트·영양 제품을 마켓과 구독으로 연결합니다. (베타)',
  },
  {
    icon: '🌿',
    title: '영양소 가이드·오늘의 식단',
    desc: '핵심 영양소 설명과 당일 실행 식단을 빠르게 확인합니다. (베타)',
  },
]

const veggieTypes = [
  { type: '비건', rule: '동물성 식품 전부 제외', focus: 'B12·단백질·철분 보강 루틴', icon: '🌿' },
  { type: '락토·오보', rule: '유제품 또는 달걀 일부 허용', focus: '균형 식단과 포화지방 관리', icon: '🥚' },
  { type: '페스코', rule: '생선 허용, 육류 제외', focus: '오메가3·단백질 균형', icon: '🐟' },
  { type: '플렉시테리언', rule: '상황에 따라 유연한 채식', focus: '지속 가능한 전환과 외식 전략', icon: '🔄' },
]

const dailyLog = [
  '08:00 두유 오트밀 + 견과류',
  '10:30 컨디션: 보통 / 소화 상태 양호',
  '12:20 병아리콩 샐러드 + 현미밥',
  '15:00 간식: 바나나 + 아몬드',
  '18:40 비건 식당 외식 기록',
  '21:00 AI 요약: 오늘 단백질 목표 82%, 철분 보강 필요',
]

const aiAlerts = [
  '이번 주 비타민 B12 섭취 기록이 부족합니다.',
  '최근 운동량 대비 단백질 섭취가 낮습니다.',
  '외식이 많아 나트륨 섭취가 증가했습니다.',
  '철분 흡수를 위해 비타민 C 식품을 함께 추천합니다.',
]

const comparisonRows = [
  {
    old: '레시피 검색',
    veggie: '내 채식 유형·알레르기·건강 목표에 맞춘 레시피 추천',
  },
  {
    old: '맛집 지도',
    veggie: '외식 기록, 채식 옵션, 영양 목표까지 이어지는 식당 매칭',
  },
  {
    old: '단순 칼로리 앱',
    veggie: '채식 전환 후 건강 변화와 핵심 영양소를 같이 보는 케어로그',
  },
  {
    old: '커뮤니티 후기',
    veggie: '사용자 경험을 기록·제품·전문가 상담과 연결하는 실행형 커뮤니티',
  },
]

const techPillars = [
  {
    title: '표준 식습관 데이터 형식',
    desc: '식품·재료·채식 유형·알레르기·건강 지표를 같은 기준으로 정리해 장기 추적이 가능하게 합니다.',
  },
  {
    title: '개인화 추천 루프',
    desc: '단발 추천이 아니라 기록 → 분석 → 실행 → 결과 환류를 반복해 사용자에게 맞는 루틴을 좁혀 갑니다.',
  },
  {
    title: '헬스케어 연계 가능성',
    desc: '혈압·혈당·체중·복약 등 토탈케어로그 축과 연결 가능한 식습관 데이터를 지향합니다.',
  },
  {
    title: '파트너 API 구조',
    desc: '식당, 밀키트, 식품 브랜드, 영양 상담, 커머스 파트너가 같은 추천 맥락에 참여할 수 있습니다.',
  },
]

const businessImpacts = [
  {
    icon: '👤',
    title: '사용자',
    desc: '채식을 감으로 지속하는 것이 아니라, 건강 변화와 영양 균형을 확인하며 실행합니다.',
  },
  {
    icon: '🧑‍⚕️',
    title: '전문가',
    desc: '식습관 기록을 기반으로 영양 상담, 만성질환 예방, 생활요법 코칭의 질을 높입니다.',
  },
  {
    icon: '🏪',
    title: '식당·브랜드',
    desc: '불특정 광고가 아니라 필요한 사용자에게 메뉴·제품·정기배송을 연결합니다.',
  },
  {
    icon: '🌍',
    title: '시장·환경',
    desc: '개인 건강과 지속가능 소비를 함께 다루는 데이터 기반 웰니스 생태계를 만듭니다.',
  },
]

const partnerPillars = [
  '비건·채식 식당 및 카페',
  '식물성 식품·대체육·밀키트 브랜드',
  '영양사·의료·헬스케어 상담 파트너',
  '친환경·ESG·리워드 제휴 파트너',
]

const ecosystem = [
  { href: '/services/jarame', name: '자람이', role: '발달·행동 케어로그', focus: '식습관·행동·치료 맥락 연계 가능성' },
  { href: '/services/senior', name: '시니어앤라이프', role: '시니어 돌봄', focus: '고령자 식사·영양·생활 기록 연계' },
  { href: '/services/healthcare', name: '토탈케어로그', role: '헬스케어 축', focus: '혈압·혈당·체중·복약과 식습관 연결' },
  { href: '/services/educarelog', name: '에듀케어로그', role: '교육 축', focus: '가족·아동 식습관 교육 및 루틴 설계' },
]

/** VC·TIPS·R&D·ESG·공공 설득용 확장 축 */
const expansionBusiness = {
  title: '비즈니스',
  intro:
    'B2C 구독과 파트너 기반 B2B2C가 같은 식습관 데이터 위에서 이어지는 구조를 지향합니다. 단순 광고 노출보다 성과형 매칭·전환에 가깝게 설계합니다.',
  items: [
    '프리미엄 영양 분석·식단 고도화 구독',
    '비건·채식 식당·브랜드 입점·프로모션(성과형 연계)',
    '밀키트·식재료·간편식·영양제 커머스·정기배송',
    '영양사·헬스케어 파트너 상담·코칭 매칭',
    '기업 임직원 웰니스·복지 프로그램 패키지',
  ],
}

const expansionRnD = {
  title: 'R&D',
  intro:
    '식품·재료·영양소·건강 지표를 표준화해 장기 추적과 집단 분석이 가능한 웰니스 데이터 레이어를 목표로 합니다. 의료 진단이 아닌 생활·영양 맥락의 연구·과제 설계에 활용될 수 있는 방향입니다.',
  items: [
    '채식 유형별 영양 결핍·과잉 패턴 분석',
    '식습관 변화와 체중·혈압·혈당·수면 등 지표의 상관·추세 분석(동의·비식별 전제)',
    '개인화 식단·추천 루프의 환류 설계',
    '식품·외식·건강 데이터를 잇는 웰니스 RWE 논의 기반',
  ],
}

const expansionEsg = {
  title: 'ESG',
  intro:
    '식물성 식단 실천과 제품 선택을 기록으로 남기면, 브랜드·기업·공공이 ESG·웰니스 캠페인을 같은 데이터 언어로 설계하기 쉬워집니다.',
  items: [
    '탄소·지속가능 소비 행동과 식습관 로그 연계(캠페인·리워드)',
    '친환경·식물성 브랜드와 사용자 매칭',
    '기업 ESG·임직원 웰니스·리워드 제휴',
    '지역 비건·채식 외식 활성화와 소상공인 연계',
  ],
}

const expansionPublic = {
  title: '공공·정책',
  intro:
    '개인 앱에 머무르지 않고, 국민 건강·식생활 교육·만성질환 예방·지역 경제와 연결될 수 있는 웰니스 인프라 확장을 지향합니다.',
  items: [
    '국민 식습관 개선·만성질환 예방 메시지와 연계 가능한 기록 구조',
    '학교·가족 단위 식생활·영양 교육 프로그램과의 협력',
    '지역 식당·소상공인·친환경 식품과의 파트너 생태계',
    '공공 건강·환경 캠페인의 실행·측정 보조(동의·최소 수집 원칙)',
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${pageCanonical}#webpage`,
      url: pageCanonical,
      name: '베지케어 | 채식·비건 AI 영양 케어로그',
      description:
        '채식·비건·플렉시테리언 식단 유형을 전제로 식습관·영양·건강 변화를 AI 디지털케어로그로 연결하는 DAL 웰니스 서비스. 회복 식사·체중·운동 목표는 같은 구조의 지향 모드로 확장합니다.',
      inLanguage: 'ko-KR',
      about: { '@id': `${pageCanonical}#service` },
    },
    {
      '@type': 'Service',
      '@id': `${pageCanonical}#service`,
      name: '베지케어',
      alternateName: 'VeggieCare',
      url: pageCanonical,
      provider: { '@type': 'Organization', name: 'Dream AI Lab', url: 'https://dreamailab.com/' },
      category: 'Wellness',
      serviceType: 'AI 채식·비건 영양 케어로그 플랫폼',
      areaServed: 'KR',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/PreOrder',
        description: '서비스는 개발 중이며 파트너십과 사전 문의를 받고 있습니다.',
      },
    },
  ],
}

export default function VeggieService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      {/* 1. Hero */}
      <section className="bg-gradient-to-br from-green-700 to-emerald-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 flex flex-wrap justify-center items-center gap-2 text-xs sm:text-sm">
              <span className="inline-flex items-center rounded-full bg-white/15 border border-white/25 px-3 py-1.5 font-semibold text-green-50">
                Service Status: Beta (베타)
              </span>
              <span className="text-green-100">{brand.name} ({brand.english})</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              베지테리언에서 출발한 베지케어.
              <br />
              채식·비건·플렉시테리언 식단을
              <br />
              기록·영양 분석·실행까지 한 줄기로 연결합니다.
            </h1>
            <p className="text-lg md:text-xl text-green-50 max-w-3xl mx-auto mb-8 leading-relaxed">
              이름 그대로 식물성 식단이 중심입니다. 회복·다이어트·운동 맞춤 모드는{' '}
              <strong className="text-white">로드맵</strong>이며, 현재는 베지케어로그·레시피·맛집·마켓·커뮤니티 베타 운영에 집중합니다.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-xs text-white">
              <span className="bg-white/15 border border-white/20 px-3 py-1.5 rounded-full">채식·비건·플렉시 맞춤</span>
              <span className="bg-white/15 border border-white/20 px-3 py-1.5 rounded-full">식습관 케어로그</span>
              <span className="bg-white/15 border border-white/20 px-3 py-1.5 rounded-full">AI 영양 분석</span>
              <span className="bg-white/15 border border-white/20 px-3 py-1.5 rounded-full">레시피·맛집·커머스 연결</span>
              <span className="bg-white/15 border border-white/20 px-3 py-1.5 rounded-full">회복·체중·운동 지향</span>
              <span className="bg-white/15 border border-white/20 px-3 py-1.5 rounded-full">DAL 웰니스 축</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero summary */}
      <section className="py-8 bg-emerald-50/80 border-b border-emerald-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold text-emerald-800 mb-2">[한 줄 요약]</p>
          <p className="text-gray-900 font-medium text-sm md:text-base leading-relaxed">
            베지케어는 채식·비건 정보를 모아 보여주는 앱이 아니라,{' '}
            <strong>채식 유형을 전제로</strong> <strong>식습관 기록 → AI 영양 분석 → 실행 추천 → 건강 변화 환류</strong>를
            한 줄기로 연결하는 <strong>라이프스타일 케어 인프라</strong>입니다.
          </p>
        </div>
      </section>

      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-gray-900 mb-6 text-center">이런 분들을 위한 서비스입니다</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {targetAudiences.map((audience) => (
              <div key={audience.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <div className="mb-2 flex">
                  <SymbolIcon symbol={audience.icon} className="h-8 w-8 text-emerald-700" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">{audience.title}</h3>
                <p className="text-xs text-gray-700 leading-relaxed">{audience.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Problem Definition */}
      <section id="veggie-problem" className="scroll-mt-28 py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
            왜 채식 플랫폼이 아니라 베지케어가 필요한가
          </h2>
          <p className="text-center text-xs font-semibold text-emerald-700 mb-2">[한 줄 요약]</p>
          <p className="text-center text-gray-800 font-medium text-sm mb-8 max-w-3xl mx-auto">
            채식의 병목은 정보 부족이 아니라 <strong>개인화·영양 관리·지속 실행이 끊기는 구조</strong>입니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {problemCards.map((problem) => (
              <div key={problem.title} className="bg-red-50 rounded-xl p-5 border border-red-100">
                <h3 className="font-bold text-gray-900 text-sm mb-2">{problem.title}</h3>
                <p className="text-xs text-gray-700 leading-relaxed">{problem.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-emerald-50/80 rounded-xl p-5 border border-emerald-100 max-w-3xl mx-auto text-center">
            <p className="text-sm text-gray-800 leading-relaxed">
              식단 데이터는 매일 발생하지만 연결되지 않습니다.
              <br />
              베지케어는 이 데이터를 건강, 외식, 레시피, 커머스, 커뮤니티 실행으로 연결하기 위해 설계되었습니다.
            </p>
          </div>
        </div>
      </section>

      <section id="veggie-personas" className="scroll-mt-28 py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
            누가 왜 막히나 — 베지케어에서 바뀌는 점
          </h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-8">
            사용자·전문가·파트너가 같은 식습관 데이터를 기준으로 움직입니다.
          </p>
          <div className="space-y-4">
            {personaRows.map((row) => (
              <div key={row.who} className="bg-white rounded-xl p-5 border border-gray-100 flex flex-col md:flex-row md:gap-6">
                <div className="md:w-44 shrink-0">
                  <p className="font-bold text-emerald-700">{row.who}</p>
                </div>
                <div className="flex-1 text-sm">
                  <p className="text-gray-500 mb-1">막힘</p>
                  <p className="text-gray-800 mb-3">{row.pain}</p>
                  <p className="text-gray-500 mb-1">베지케어에서</p>
                  <p className="text-gray-900 font-medium">{row.gain}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Solution */}
      <section id="veggie-solution" className="scroll-mt-28 py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
            식습관 데이터가 실행으로 이어지는 구조
          </h2>
          <p className="text-center text-sm text-gray-800 max-w-3xl mx-auto mb-3 leading-relaxed">
            베지케어는 식습관·영양·건강 데이터를 기반으로 사용자·전문가·식당·브랜드의 실행을 연결하는 AI 디지털케어로그 기반
            웰니스 인프라입니다.
          </p>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-10">
            레시피, 맛집, 커머스가 각각 따로 있는 것이 아니라 하나의 실행 루프로 연결됩니다.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreFeatures.map((feature) => (
              <div key={feature.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="mb-3 flex">
                  <SymbolIcon symbol={feature.icon} className="h-9 w-9 text-emerald-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-emerald-50/80 rounded-xl p-5 border border-emerald-100 max-w-3xl mx-auto">
            <p className="text-sm text-gray-800 text-center">
              즉, 베지케어는 <strong>무엇을 먹을지</strong>를 넘어 <strong>왜 먹고, 먹은 뒤 무엇이 달라졌는지</strong>까지 남기는 구조입니다.
            </p>
          </div>
        </div>
      </section>

      <section id="veggie-mode" className="scroll-mt-28 py-14 bg-emerald-50/40 border-b border-emerald-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">베지케어 맞춤 모드 <span className="text-base font-semibold text-emerald-700">(로드맵)</span></h2>
          <p className="text-center text-gray-700 text-sm max-w-3xl mx-auto mb-8">
            베지케어로그·AI 분석·레시피·마켓은 베타 운영 중입니다. 회복·다이어트·운동 전용 모드 UI는{' '}
            <code className="text-xs bg-white px-1 rounded border">docs/DAL_SYNC_ROADMAP.md</code>에 따라 단계적으로 구현합니다.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {supportModes.map((mode) => (
              <div key={mode.title} className="bg-white rounded-2xl p-6 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">{mode.title}</h3>
                <p className="text-sm text-emerald-800 font-medium mb-4">{mode.summary}</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  {mode.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-emerald-600 shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-gray-500 max-w-3xl mx-auto">
            베지케어는 생활·영양 실행을 돕는 서비스이며, 구체적 진단·치료·처방은 의료전문가 판단을 따릅니다.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">베지케어 핵심 흐름 한눈에 보기</h2>
          <p className="text-center text-gray-600 text-sm mb-8 max-w-2xl mx-auto">
            목표 입력부터 환류까지 같은 줄기로 이어지는 루프를 도식으로 요약했습니다. 모바일에서는 세로 흐름으로 표시됩니다.
          </p>
          <div className="rounded-2xl overflow-hidden border border-emerald-100 bg-white shadow-sm">
            <picture>
              <source media="(max-width: 768px)" srcSet="/images/services/veggie-care-flow-mobile.svg" />
              <img
                src="/images/services/veggie-care-flow.svg"
                alt="베지케어 핵심 흐름: 목표 입력, AI 분석, 실행 추천, 건강 추적, 환류로 이어지는 루프"
                className="w-full h-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 justify-center items-stretch">
            <a
              href={brand.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center rounded-lg border border-emerald-600 bg-white px-5 py-3 text-sm font-semibold text-emerald-800 hover:bg-emerald-50 transition-colors"
            >
              Veggie.care 바로가기
            </a>
            <Link
              href="/contact?service=veggie&type=general"
              className="inline-flex justify-center items-center rounded-lg border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-semibold text-emerald-900 hover:bg-emerald-100 transition-colors"
            >
              소식·문의하기
            </Link>
          </div>
        </div>
      </section>

      {/* 4. User Workflow */}
      <section id="veggie-workflow" className="scroll-mt-28 py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">사용 흐름</h2>
          <p className="text-center text-xs font-semibold text-emerald-700 mb-2">[한 줄 요약]</p>
          <p className="text-center text-gray-800 font-medium text-sm mb-8 max-w-3xl mx-auto">
            식단 기록이 끝이 아니라 <strong>오늘의 실행과 다음 주 루틴</strong>으로 이어집니다.
          </p>
          <div className="space-y-3 mb-10">
            {platformSteps.map((step) => (
              <div key={step.n} className="flex gap-4 items-start bg-white rounded-xl p-4 border border-emerald-100">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white text-sm font-bold">
                  {step.n}
                </span>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-700">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {veggieTypes.map((type) => (
              <div key={type.type} className="bg-white rounded-xl p-5 border border-gray-100">
                <div className="mb-2 flex">
                  <SymbolIcon symbol={type.icon} className="h-9 w-9 text-emerald-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{type.type}</h3>
                <p className="text-xs text-gray-600 mb-3">{type.rule}</p>
                <p className="text-xs font-medium text-emerald-800 bg-emerald-50 rounded-lg p-3">{type.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="veggie-log-example" className="scroll-mt-28 py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">실제 식습관 기록 예시</h2>
          <p className="text-center text-gray-600 text-sm max-w-3xl mx-auto mb-8">
            사용자가 보는 화면은 복잡한 표가 아니라, 하루 식단과 건강 신호가 이어지는 타임라인입니다.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3 text-sm">하루 베지케어로그</h3>
              <ul className="space-y-2 text-sm text-gray-700 font-mono">
                {dailyLog.map((log) => (
                  <li key={log}>{log}</li>
                ))}
              </ul>
            </div>
            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
              <h3 className="font-bold text-gray-900 mb-3 text-sm">AI 분석 알림 예시</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {aiAlerts.map((alert) => (
                  <li key={alert} className="flex gap-2">
                    <span className="text-emerald-600 shrink-0">•</span>
                    <span>{alert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-gray-700 max-w-3xl mx-auto">
            이 기록이 쌓이면 사용자는 채식을 “잘하고 있는지”를 감이 아니라 <strong>영양·컨디션·건강 변화</strong>로 확인할 수 있습니다.
          </p>
        </div>
      </section>

      {/* 5. Technology Advantage */}
      <section id="veggie-tech" className="scroll-mt-28 py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">AI 디지털케어로그 기술 적용</h2>
          <p className="text-center text-xs font-semibold text-emerald-700 mb-2">Technology Advantage</p>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-10">
            기술 설명은 짧게, 베지케어에서 왜 필요한지만 정리합니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {techPillars.map((pillar) => (
              <div key={pillar.title} className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-gray-900 text-sm mb-2">{pillar.title}</h3>
                <p className="text-xs text-gray-700 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-white rounded-xl p-5 border border-emerald-100 max-w-3xl mx-auto">
            <p className="text-sm text-gray-800 text-center leading-relaxed">
              DAL의 AI 디지털케어로그는 발달·교육·시니어·의료에서 쌓은 “기록 → 판단 → 실행 → 환류” 구조를 공유합니다.
              베지케어는 그 구조를 식습관과 웰니스 영역에 적용합니다.
            </p>
          </div>
        </div>
      </section>

      <section id="veggie-compare" className="scroll-mt-28 py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">기존 서비스와 무엇이 다른가</h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-8">
            베지케어는 콘텐츠 사이트가 아니라 식습관 데이터가 실행으로 이어지는 구조입니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {comparisonRows.map((row) => (
              <div key={row.old} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <p className="text-xs text-gray-500 mb-1">기존 방식</p>
                <p className="text-sm text-gray-700 line-through mb-4">{row.old}</p>
                <p className="text-xs text-emerald-700 font-semibold mb-1">베지케어</p>
                <p className="text-sm font-medium text-gray-900">{row.veggie}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm font-semibold text-gray-900 max-w-3xl mx-auto">
            기존 서비스가 “찾기”에 머물렀다면, 베지케어는 “기록하고 실행하고 변화까지 확인하는” 웰니스 인프라입니다.
          </p>
        </div>
      </section>

      {/* 6. Business Impact */}
      <section id="veggie-impact" className="scroll-mt-28 py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">비즈니스·시장 영향</h2>
          <p className="text-center text-xs font-semibold text-emerald-700 mb-2">[한 줄 요약]</p>
          <p className="text-center text-gray-800 font-medium text-sm mb-8 max-w-3xl mx-auto">
            개인 건강, 전문가 상담, 식품·외식 시장, 지속가능 소비가 <strong>같은 식습관 데이터</strong>로 연결됩니다.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {businessImpacts.map((impact) => (
              <div key={impact.title} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="mb-3 flex">
                  <SymbolIcon symbol={impact.icon} className="h-9 w-9 text-emerald-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{impact.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{impact.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-4 text-center">파트너십 확장 축</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {partnerPillars.map((partner) => (
                <div key={partner} className="flex gap-2 text-sm text-gray-800 bg-emerald-50 rounded-lg p-3">
                  <span className="text-emerald-600 shrink-0">✔</span>
                  <span>{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VC · TIPS · R&D · ESG · 공공 확장 */}
      <section id="veggie-expansion" className="scroll-mt-28 py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
            비즈니스·R&D·ESG·공공 확장 가능성
          </h2>
          <p className="text-center text-xs font-semibold text-emerald-700 mb-2">VC · TIPS · R&D · ESG · 정책 제안용</p>
          <p className="text-center text-gray-600 text-sm max-w-3xl mx-auto mb-10">
            베지케어의 차별점은 콘텐츠 물량이 아니라, <strong>식습관 데이터가 구독·커머스·파트너·연구·캠페인까지 같은 줄기로 확장</strong>
            될 수 있다는 점입니다.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-200 bg-gray-50/80 p-6">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <SymbolIcon symbol="💼" className="h-6 w-6 text-emerald-800 shrink-0" />
                {expansionBusiness.title}
              </h3>
              <p className="text-xs text-gray-700 leading-relaxed mb-4">{expansionBusiness.intro}</p>
              <ul className="text-sm text-gray-800 space-y-2 list-disc pl-5">
                {expansionBusiness.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <SymbolIcon symbol="🔬" className="h-6 w-6 text-emerald-800 shrink-0" />
                {expansionRnD.title}
              </h3>
              <p className="text-xs text-gray-700 leading-relaxed mb-4">{expansionRnD.intro}</p>
              <ul className="text-sm text-gray-800 space-y-2 list-disc pl-5">
                {expansionRnD.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-green-200 bg-green-50/50 p-6">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <SymbolIcon symbol="🌍" className="h-6 w-6 text-emerald-800 shrink-0" />
                {expansionEsg.title}
              </h3>
              <p className="text-xs text-gray-700 leading-relaxed mb-4">{expansionEsg.intro}</p>
              <ul className="text-sm text-gray-800 space-y-2 list-disc pl-5">
                {expansionEsg.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <SymbolIcon symbol="🏛️" className="h-6 w-6 text-slate-800 shrink-0" />
                {expansionPublic.title}
              </h3>
              <p className="text-xs text-gray-700 leading-relaxed mb-4">{expansionPublic.intro}</p>
              <ul className="text-sm text-gray-800 space-y-2 list-disc pl-5">
                {expansionPublic.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 text-center text-xs text-gray-500 max-w-3xl mx-auto">
            구체적 진단·치료는 의료전문가 판단을 따릅니다. RWE·공공 연계는 동의·최소 수집·비식별·거버넌스 전제 하에 단계적으로
            논의됩니다.
          </p>
        </div>
      </section>

      <section id="veggie-why-now" className="scroll-mt-28 py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">왜 지금 베지케어인가</h2>
          <div className="max-w-3xl mx-auto mb-8 rounded-xl border border-emerald-100 bg-emerald-50/60 p-4 text-center">
            <p className="text-sm font-medium text-gray-900 leading-relaxed">
              이제 중요한 것은 더 많은 채식 정보가 아니라,{' '}
              <strong>개인의 식습관 데이터가 건강·소비·환경 행동으로 이어지는 구조</strong>입니다.
            </p>
          </div>
          <p className="text-center text-gray-600 text-sm max-w-3xl mx-auto mb-8">
            채식은 더 이상 소수 취향이 아니라 건강, 환경, 윤리, 소비가 만나는 라이프스타일 시장입니다. 다만 시장이 커질수록
            사용자에게 필요한 것은 더 많은 정보가 아니라 <strong>나에게 맞는 실행 기준</strong>입니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
              <h3 className="font-bold text-gray-900 mb-2">건강</h3>
              <p className="text-sm text-gray-700">
                체중, 혈압, 혈당, 소화, 컨디션 같은 생활 지표와 식습관을 함께 관리하려는 수요가 커지고 있습니다.
              </p>
            </div>
            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
              <h3 className="font-bold text-gray-900 mb-2">지속가능성</h3>
              <p className="text-sm text-gray-700">
                ESG와 친환경 소비가 확산되면서 식품·외식·커머스 시장은 채식 사용자를 더 정교하게 이해해야 합니다.
              </p>
            </div>
            <div className="bg-lime-50 rounded-xl p-6 border border-lime-100">
              <h3 className="font-bold text-gray-900 mb-2">개인화</h3>
              <p className="text-sm text-gray-700">
                비건, 락토, 오보, 페스코, 플렉시테리언은 서로 다른 식단입니다. 같은 채식으로 묶을수록 개인화는 실패합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Service Status */}
      <section id="veggie-status" className="scroll-mt-28 py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-semibold mb-4">
            {brand.status}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{brand.name} (베타·지속 업데이트)</h2>
          <p className="text-gray-600 leading-relaxed">
            레시피·맛집·커뮤니티·마켓·파트너 대시보드는 베타 운영 중입니다. 케어로그·AI 레시피 API는 백엔드 마운트·OpenAI 연동(PRIORITY §7)을 진행 중이며,
            회복·다이어트·운동 맞춤 모드 UI는 로드맵입니다.
          </p>
        </div>
      </section>

      {/* 8. Ecosystem Connection */}
      <section id="veggie-ecosystem" className="scroll-mt-28 py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">DAL 플랫폼 연결</h2>
          <p className="text-center text-gray-600 text-sm max-w-3xl mx-auto mb-8">
            베지케어는 DAL 생태계 안에서 식습관·영양·웰니스 데이터를 담당하는 축입니다. 의료, 시니어, 발달, 교육의 케어로그와
            연결될 때 생활 데이터의 의미가 더 커집니다.
          </p>
          <div className="max-w-3xl mx-auto mb-8 rounded-xl border border-emerald-200 bg-emerald-50/60 px-5 py-4 text-sm text-gray-800">
            <p className="font-semibold text-gray-900 mb-2">토탈케어로그·항암·장기 회복과의 연결</p>
            <p className="leading-relaxed">
              <Link href="/services/healthcare" className="font-semibold text-emerald-900 underline-offset-2 hover:underline">
                토탈케어로그
              </Link>
              에서 쌓인 복약·부작용·체중·에너지 맥락은(동의된 범위에서) 베지케어의 AI 레시피·주간 식단·챌린지·커뮤니티, 그리고
              식재료·밀키트·정기배송 등 파트너 커머스로 이어져, 완치 판정·장기 생존을 위해 필요한 식사 실행을 덜 피곤하게 만드는
              것을 지향합니다. 기능 범위는 베타·파트너십 단계에 맞추어 단계적으로 넓혀 갑니다.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {ecosystem.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-xl p-5 border border-gray-200 bg-gray-50/80 hover:bg-emerald-50 hover:border-emerald-200 transition-colors"
              >
                <p className="font-bold text-gray-900">{item.name}</p>
                <p className="text-xs text-emerald-700 mt-1">{item.role}</p>
                <p className="text-sm text-gray-700 mt-2">{item.focus}</p>
              </Link>
            ))}
          </div>
          <p className="text-center text-sm text-gray-700 mt-8 max-w-3xl mx-auto">
            같은 사람이 먹고, 배우고, 돌봄을 받고, 치료를 받습니다. 베지케어는 그중 <strong>먹는 기록</strong>을 DAL 케어로그의
            한 축으로 연결합니다.
          </p>
        </div>
      </section>

      {/* 9. CTA */}
      <section id="veggie-cta" className="scroll-mt-28 py-16 bg-gradient-to-br from-green-700 to-emerald-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">베지케어와 함께 웰니스 케어로그를 만듭니다</h2>
          <p className="text-green-50 text-sm md:text-base max-w-3xl mx-auto mb-10 leading-relaxed">
            채식 사용자, 식당·브랜드, 영양·헬스케어 파트너가 함께 참여할 수 있는 구조를 준비하고 있습니다.
            서비스 공개, 파트너십, 투자·협력 문의를 받고 있습니다.
          </p>
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            <div className="bg-white/10 rounded-xl p-5 border border-white/20 text-left">
              <p className="text-xs font-semibold text-green-100 mb-1">사용자 · 커뮤니티</p>
              <p className="text-sm text-green-50 mb-4">사전 공개 소식과 커뮤니티 참여 가능성을 안내받습니다.</p>
              <Link
                href="/contact?service=veggie&type=general"
                className="inline-flex w-full justify-center items-center bg-white text-emerald-800 font-semibold px-4 py-2.5 rounded-lg text-sm hover:bg-green-50 transition-colors"
              >
                베지케어 소식 받기
              </Link>
            </div>
            <div className="bg-white/10 rounded-xl p-5 border border-white/20 text-left">
              <p className="text-xs font-semibold text-green-100 mb-1">식당 · 브랜드 · 커머스</p>
              <p className="text-sm text-green-50 mb-4">메뉴·제품·정기배송·리워드 파트너십을 논의합니다.</p>
              <Link
                href="/contact?service=veggie&type=b2b"
                className="inline-flex w-full justify-center items-center bg-white text-emerald-800 font-semibold px-4 py-2.5 rounded-lg text-sm hover:bg-green-50 transition-colors"
              >
                파트너십 문의
              </Link>
            </div>
            <div className="bg-white/10 rounded-xl p-5 border border-white/20 text-left">
              <p className="text-xs font-semibold text-green-100 mb-1">연구 · 웰니스</p>
              <p className="text-sm text-green-50 mb-4">식습관 데이터, 웰니스, 헬스케어 연계 협력을 상담합니다.</p>
              <Link
                href="/contact?service=veggie&type=tech"
                className="inline-flex w-full justify-center items-center bg-white text-emerald-800 font-semibold px-4 py-2.5 rounded-lg text-sm hover:bg-green-50 transition-colors"
              >
                협력 문의
              </Link>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 justify-center items-center text-sm text-center">
            <a
              href={brand.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-100 hover:text-white underline underline-offset-2 font-medium"
            >
              Veggie.care (공식 사이트)
            </a>
            <span className="hidden sm:inline text-white/40">|</span>
            <Link href="/contact?service=veggie&type=general" className="text-white font-medium underline underline-offset-2 hover:text-green-100">
              일반 문의
            </Link>
            <span className="hidden sm:inline text-white/40">|</span>
            <Link href="/services/healthcare" className="text-green-100 hover:text-white underline underline-offset-2">
              토탈케어로그 보기
            </Link>
            <span className="hidden sm:inline text-white/40">|</span>
            <Link href="/technology" className="text-green-100 hover:text-white underline underline-offset-2">
              DAL 기술 구조 보기
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
