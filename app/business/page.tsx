import type { Metadata } from 'next'
import { absoluteUrl, defaultOpenGraph, defaultTwitter } from '../../lib/seo'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { MarketingIcon, type MarketingIconName } from '../../components/MarketingIcon'

export const metadata: Metadata = {
  title: '비즈니스·투자 - B2B 솔루션 & 파트너십 | 드림에이아이랩',
  description:
    'DAL의 핵심기술 AI디지털케어로그 기반 B2B 솔루션, 파트너십, 투자 포인트를 확인하세요. 창업자 정해성이 고안한 디지털케어로그를 바탕으로 표준화·기관 풀·파일럿을 전개하는 포트폴리오와 사회적 임팩트를 제시합니다.',
  alternates: { canonical: absoluteUrl('/business') },
  openGraph: {
    title: '비즈니스·투자 - B2B 솔루션 & 파트너십 | 드림에이아이랩',
    description: 'DAL의 AI디지털케어로그 포트폴리오, 기관·연계 풀과 표준화 진행, B2B 솔루션을 확인하세요.',
    url: absoluteUrl('/business'),
    siteName: defaultOpenGraph.siteName,
    images: defaultOpenGraph.images,
    locale: defaultOpenGraph.locale,
    type: 'website',
  },
  twitter: {
    ...defaultTwitter,
    title: '비즈니스·투자 - B2B 솔루션 & 파트너십 | 드림에이아이랩',
    description: 'DAL의 AI디지털케어로그 포트폴리오, 기관·연계 풀과 표준화 진행, B2B 솔루션을 확인하세요.',
  },
}

export default function Business() {
  const verifiedPortfolio: {
    title: string
    description: string
    icon: MarketingIconName
    achievement: string
    market: string
    impact: string
    status: string
    powered: string
  }[] = [
    {
      title: '자람이',
      description: '발달장애 케어 표준화·AI디지털케어로그를 지향하는 플랫폼',
      icon: 'sprout',
      achievement: '초기 집중',
      market: '발달장애 시장',
      impact:
        '공공·연계 등으로 약 5,700개 기관 정보를 확보한 B2B·행정 표준화 대상. 행정·케어 시스템과 케어로그로 가정·센터·병원 연계 도입을 지향(등록 수 ≠ 전원 일상 사용자)',
      status: 'Beta',
      powered: 'Powered by AI디지털케어로그',
    },
    {
      title: '시니어앤라이프',
      description: 'AI 시니어케어 플랫폼',
      icon: 'user',
      achievement: '초기 집중',
      market: '고령화 시장',
      impact:
        '공공·연계 등으로 약 2만 2천여 돌봄 사업자 정보를 확보한 대상 풀. 표준화 행정·검색·매칭 등 B2B 도입을 지향(등록 수 ≠ 전원 일상 사용자)',
      status: 'Pilot',
      powered: 'Powered by AI디지털케어로그',
    },
    {
      title: '토탈케어로그',
      description: '토탈케어로그 기반 일반·한방·항암 및 정신건강·상담 보조를 포함한 통합 의료 축',
      icon: 'hospital',
      achievement: '신규',
      market: '개인 맞춤 의료 시장',
      impact:
        '개인 맞춤 건강관리·병원 연계를 지향. 기존 마음이AI의 심리·정신건강 상담 보조 역량은 별도 브랜드 없이 본 축으로 통합·전개합니다.',
      status: 'In Development',
      powered: 'Powered by AI디지털케어로그',
    },
    {
      title: 'EduCareLog',
      description: 'AI 맞춤 학습 플랫폼',
      icon: 'graduation',
      achievement: '신규',
      market: 'AI 교육 시장',
      impact: '개인 맞춤 학습 지원',
      status: 'Pilot',
      powered: 'Powered by AI디지털케어로그',
    },
    {
      title: '글로벌커플케어',
      description: '국제결혼 정보 커뮤니티 플랫폼',
      icon: 'globe',
      achievement: '신규',
      market: '국제결혼 시장',
      impact: '국제결혼 시장의 신뢰성과 투명성 혁신, 결혼 전후 맞춤 케어로 행복한 가정 만들기',
      status: 'In Development',
      powered: 'Powered by AI디지털케어로그',
    },
    {
      title: '베지케어',
      description: '채식·라이프스타일 AI 플랫폼',
      icon: 'leaf',
      achievement: '전개 중',
      market: '베지터리안 시장',
      impact: '채식주의자를 위한 AI 기반 건강관리·맛집·레시피·커뮤니티 통합 플랫폼',
      status: 'In Development',
      powered: 'Powered by AI디지털케어로그',
    },
  ]

  const marketRows = [
    {
      title: '발달장애',
      badge: '집중',
      summary: '발달장애 케어 표준 SaaS + 케어로그로 기관·가정·병원을 연결',
      positioning: '표준 행정/케어 SaaS와 케어로그를 결합. 기관 워크플로우와 보호자 앱을 묶어 전환비용과 네트워크 효과를 형성.',
      moat: [
        '표준 스키마·데이터 락인',
        '기관-보호자-병원 네트워크',
        '규제/지침 적합 워크플로우'
      ],
      metrics: [
        '자람이 연계·등록 기관 5,700+ (MAU와 별개)',
        '중증 13.5만 / 경계성 70만 / ADHD 300만+',
        '수요 급증: 대기 장기화·센터 포화 → 홈티·디지털케어 채택 증가'
      ],
      monetization: [
        '기관 SaaS 구독',
        '매칭/상담 수수료',
        '프리미엄 리포트·API 라이선스'
      ],
      next: [
        '지자체·복지기관 확장',
        'IRB/RWE 연구 협약',
        '보험/보장성 연계 PoC'
      ]
    },
    {
      title: '시니어',
      badge: '집중',
      summary: '요양/주간보호/재가 표준 행정 SaaS + 케어로그, 가족 앱 연동',
      positioning: '기관 중심 표준화와 가족 앱을 연계해 케어 현장과 가정 데이터를 하나로. 전환비용↑·재방문률↑.',
      moat: [
        '법/지침 준수 워크플로우',
        '기관 표준화로 전환비용↑',
        '가족 연동으로 사용자 락인'
      ],
      metrics: [
        '시니어앤라이프 연계·등록 사업자 22,000+ (MAU와 별개)',
        '국민 6명 중 1명이 시니어(초고령 사회 진입)',
        '시장 규모 급성장, 데이터 기반 추가 서비스 기회'
      ],
      monetization: [
        '기관 구독',
        '가족 프리미엄',
        '장비/센서 제휴·보험/지자체 연계'
      ],
      next: [
        '치매 코호트 RWE',
        '낙상/복약 경보 KPI 확보',
        '지자체·기관 제휴 확대'
      ]
    },
    {
      title: '국제결혼',
      badge: '집중',
      summary: '정보·행정·매칭을 표준화한 커뮤니티/플랫폼(사기·불법 예방, 신뢰성 강화)',
      positioning: '국가별 파트너 인증·표준화된 워크플로우·후기/신뢰지표로 불균형 해소. 결혼 전후 전체 여정 관리.',
      moat: [
        '규제·컴플라이언스 중심 설계',
        '인증 파트너 네트워크',
        '후기·신뢰도 지표'
      ],
      metrics: [
        '국제결혼 부부 17만+ / 다문화 아동 30만+',
        '국가별 커뮤니티 수요 확대',
        '상담→매칭 전환 파이프라인 구축'
      ],
      monetization: [
        '상담 연결 기반 리드/구독',
        '법률/번역/교육 제휴',
        '정착 지원 제휴 서비스'
      ],
      next: [
        '국가별 커뮤니티 론칭',
        '인증 파트너 확대',
        '지자체 다문화 협력'
      ]
    },
    {
      title: '베지케어',
      badge: '집중',
      summary: '채식·라이프스타일 AI 플랫폼 — 건강관리·맛집·레시피·커뮤니티 통합',
      positioning: '디지털케어로그 기반 개인 맞춤형 영양 관리와 AI 요리사, 지역 식당 연계, 커머스까지 이어지는 완성형 생태계.',
      moat: [
        '채식·라이프스타일 전용 지향 플랫폼',
        '디지털케어로그 연동 건강 관리',
        'AI 기반 맞춤형 레시피 추천'
      ],
      metrics: [
        '한국 비건 식품 시장: 2020년 1,200억원 → 2023년 3,500억원',
        '비건 레스토랑: 2020년 200개 → 2023년 800개로 4배 증가',
        'MZ세대 40%가 플렉시테리언 등 유연한 채식 패턴'
      ],
      monetization: [
        '프리미엄 구독(무료/유료)',
        '광고 & 제휴(비건 브랜드)',
        '커머스(밀키트/정기배송)',
        '데이터 비즈니스(제약사/식품업계)'
      ],
      next: [
        'AI 맞춤형 영양 관리 출시',
        '비건 맛집 매칭 서비스',
        '제휴업체 확대 및 정기배송'
      ]
    },
    {
      title: '토탈케어로그 (의료 3종 + 심리)',
      badge: '확장',
      summary: '일반·한방·항암 + 심리치료까지 케어로그 기반 개인 맞춤 관리',
      positioning: '멀티모달 AI와 FHIR 연동으로 의료/한방/항암/심리 도메인을 통합. 병원 매칭까지 확장 가능한 플랫폼.',
      moat: [
        'FHIR 연동·멀티모달 분석',
        '설명가능성·권고 워크플로우',
        '병원/센터 매칭 구조'
      ],
      metrics: [
        '일반의학: 개인 AI 주치의, 병원 매칭 준비',
        '한방의학: 한의학 특화 AI 상담(챗봇) 지향',
        '항암: 재활·맞춤 관리, 부작용 모니터링',
        '심리·정신건강: 토탈케어로그 축의 상담 보조(기존 마음이AI 역량 통합 지향)'
      ],
      monetization: [
        'B2B2C 구독',
        '병원 상담 연결/리드 기반 수익',
        '제약 PoC·RWE 데이터 협력'
      ],
      next: [
        'IRB 연구 진행',
        '보험 연계 PoC',
        '개발자/파트너 API 공개'
      ]
    }
  ]

  const synergyRows = [
    {
      title: '코어 연계: 국제결혼·자람이·토탈케어로그',
      flow: [
        '국제결혼 전후 정착/가족 맥락에서 자람이 발달·행동 데이터와 토탈케어로그 의료·상담 데이터를 연결',
        '법률·번역·의료·상담 파트너 매칭이 하나의 케어로그 흐름에서 이어지도록 설계'
      ],
      partners: [
        '병원/발달센터/상담기관',
        '법률/번역/정착 지원 파트너',
        '보험/검진 연계 파트너'
      ],
      value: [
        '상담 연결 리드 기반 수익 + 기관/가족 구독 결합',
        '가족 단위 장기 LTV 및 재방문률 확대'
      ]
    },
    {
      title: '생애주기 확장: 자람이 → 에듀케어로그 → 토탈케어로그',
      flow: [
        '자람이 특수교육·치료 맥락이 에듀케어로그(공교육·사교육 맞춤형)로 확장되고, 성인기 건강 관리는 토탈케어로그로 연계',
        '베지케어는 토탈케어로그의 항암·만성 회복기와 연결되어 식단/영양 실행 루프를 보강'
      ],
      partners: [
        '학교/교육청/학원/에듀테크',
        '병원/영양사/재활코치',
        '식당·밀키트·식품 브랜드'
      ],
      value: [
        '생애주기 데이터 연속성 기반 개인화 고도화',
        '교육·의료·영양 복합 패키지로 매출 다각화'
      ]
    },
    {
      title: '운영 허브: 시니어·토탈케어로그 중심 파트너 마켓플레이스',
      flow: [
        '시니어 돌봄 운영 데이터와 토탈케어로그 의료 데이터를 결합해 위험 신호/개입 우선순위를 정하고 파트너 매칭',
        '상담·예약·결제·이행·성과 환류를 동일한 AI디지털케어로그 표준으로 관리'
      ],
      partners: [
        '요양/재가 기관, 병원/약국',
        '디바이스·홈케어 파트너',
        '보험·공공·복지 연계 파트너'
      ],
      value: [
        '기관 구독 + 제휴 수익 + 성과 기반 계약',
        '운영 효율·재입원/이탈 감소형 KPI 모델'
      ]
    }
  ]

  const businessModels = [
    {
      title: 'B2B AI 솔루션',
      description: '현장 적용 가능한 AI 기술을 기업과 조직에 맞춤형으로 제공',
      icon: '🏢',
      features: [
        '도메인 맞춤 AI 모델 적용',
        '기업 전용 맞춤형 개발',
        'API 연동 및 통합',
        '전담 기술 지원팀'
      ],
      benefits: [
        '표준·보안 설계로 리스크 완화',
        '도입 기관·파트너와의 협력',
        '사회적 가치와 수익성 동시 추구',
        '지속적인 기술 업데이트'
      ],
      examples: ['자람이 기업용 버전', '시니어앤라이프 B2B 솔루션']
    },
    {
      title: '라이센싱 & 파트너십',
      description: '자체 AI디지털케어로그 기술을 파트너와 공유하며 시장 확장',
      icon: '🤝',
      features: [
        'AI 모델 라이센싱',
        '기술 특허 공유',
        '공동 개발 파트너십',
        '시장 진입 지원'
      ],
      benefits: [
        '플랫폼 기술 공유',
        '파트너와의 시너지 효과',
        '빠른 시장 확장',
        '수익 분배를 통한 성장'
      ],
      examples: ['의료기관 AI 도입 지원', '교육기관 AI 솔루션 공급']
    },
    {
      title: '정부 & 공공기관 계약',
      description: '사회적 가치 창출을 통한 공공기관과의 협력',
      icon: '🏛️',
      features: [
        '정부 지원 사업 참여',
        '공공기관 AI 도입',
        '사회적 기업 인증',
        'ESG 투자 유치'
      ],
      benefits: [
        '안정적인 수익 창출',
        '사회적 가치 실현',
        '정부 정책과의 연계',
        '지속 가능한 성장'
      ],
      examples: ['발달장애 지원 사업', '노인 돌봄 정책 사업']
    },
    {
      title: 'AI 컨설팅 & 교육',
      description: '도입·파일럿 경험을 바탕으로 한 전문 컨설팅',
      icon: '💡',
      features: [
        'AI 전략 수립',
        '도입 로드맵 제시',
        '구현 및 통합 지원',
        '직원 교육 및 훈련'
      ],
      benefits: [
        '파일럿·도입 사례 기반',
        '플랫폼 기술 활용',
        '체계적 AI 도입',
        '투자 효율성 극대화'
      ],
      examples: ['의료기관 AI 컨설팅', '교육기관 AI 도입 지원']
    }
  ]

  const investmentHighlights: {
    title: string
    description: string
    icon: MarketingIconName
    details: string[]
  }[] = [
    {
      title: '다도메인·기관 풀 구조',
      description: '4대 집중 도메인과 연계·등록 풀을 기반으로 한 확장',
      icon: 'target',
      details: [
        '발달장애·시니어·국제결혼·라이프스타일 등 초기 집중 축 전개',
        '기관 워크플로우·케어로그 결합으로 전환비용·재방문 설계',
        '커뮤니티·마켓플레이스와 결합한 네트워크 효과 지향',
      ],
    },
    {
      title: '플랫폼 기술 & 진입장벽',
      description: 'AI디지털케어로그 기반 표준화·규제 적합성',
      icon: 'blocks',
      details: [
        '표준 스키마(FHIR)·동의/RBAC·감사로그 내장',
        '현장 RWE·IRB·제약 PoC 등 신뢰 축적을 지향',
        '데이터·워크플로우 결합으로 전환비용 상승 설계',
      ],
    },
    {
      title: '사회적 가치 + 수익성 (ESG + ROI)',
      description: '사회 문제 해결과 재무성과를 동시에 지향',
      icon: 'puzzle',
      details: [
        '발달·시니어·국제결혼·라이프스타일 등 공익에 가까운 영역',
        '구독·매칭·데이터 라이선스의 균형 잡힌 수익 구조',
        'ESG·정책 연계 기회',
      ],
    },
    {
      title: '확장 가능한 플랫폼',
      description: '도메인·국가를 넘는 스케일업',
      icon: 'rocket',
      details: [
        '토탈케어로그(의료3종+심리)로 확장 진행',
        '국제결혼 커뮤니티 기반 글로벌 시장 진출 논리',
        '마켓플레이스/파트너 API로 네트워크 효과 가속',
      ],
    },
  ]


  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero — 기관 풀·수익 구조 요약 */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/15 text-white/95 mb-6">
              기관·연계 풀 · B2B/B2G/B2C 확장
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              확장 구조와 수익·파트너 전략
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              AI디지털케어로그 기반 플랫폼으로 표준화와 기관 네트워크를 병행 추진합니다.
              연계·등록 기관·사업자 규모와 표준화·파일럿 진행을 바탕으로 투자 관점을 제시합니다(등록 수는 일일 이용자와 별개).
            </p>
            {/* 핵심 지표 — 홈·IR과 동일 정의(등록 ≠ DAU) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto">
              <div className="bg-white/15 rounded-xl p-4 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold">5,700+</div>
                <div className="text-sm text-white/90">자람이 등록 기관</div>
              </div>
              <div className="bg-white/15 rounded-xl p-4 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold">22,000+</div>
                <div className="text-sm text-white/90">시니어앤라이프 등록 사업자</div>
              </div>
              <div className="bg-white/15 rounded-xl p-4 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold">383만+</div>
                <div className="text-sm text-white/90">발달장애 타겟 인구</div>
              </div>
              <div className="bg-white/15 rounded-xl p-4 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold">6</div>
                <div className="text-sm text-white/90">핵심 도메인</div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
    <div className="text-sm text-white/90">핵심 포지션</div>
    <div className="text-2xl font-bold text-white mt-1">4대 집중 도메인</div>
    <div className="text-sm text-white/80 mt-1">발달·시니어·국제결혼·베지터리안</div>
  </div>
  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
    <div className="text-sm text-white/90">확장 인프라</div>
    <div className="text-2xl font-bold text-white mt-1">표준화 API/SDK</div>
    <div className="text-sm text-white/80 mt-1">FHIR·GraphQL·웹훅</div>
  </div>
  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
    <div className="text-sm text-white/90">운영 철학</div>
    <div className="text-2xl font-bold text-white mt-1">RWE 기반 개선</div>
    <div className="text-sm text-white/80 mt-1">현장 데이터→지속 고도화</div>
  </div>
</div>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/contact?type=ir&service=platform" className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" aria-label="투자 문의">
                투자 문의
              </Link>
              <Link href="/contact?type=b2b&service=platform" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors" aria-label="파트너십 문의">
                파트너십 문의
              </Link>
              <Link href="/services" className="border-2 border-white/70 text-white/95 px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors" aria-label="서비스 생태계 보기">
                서비스 생태계 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Portfolio */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              핵심 AI 포트폴리오
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              AI디지털케어로그 위에서 발달·시니어·의료·교육·국제결혼·라이프스타일 등 도메인별 제품·파일럿을 전개하고 있습니다.
              등록·연계 규모는 도입 후보 풀을 뜻하며 전원의 일상 사용을 의미하지 않습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {verifiedPortfolio.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                <div className="p-6 bg-gray-50 text-gray-900 rounded-t-2xl border-b border-gray-100">
                  <div className="mb-3 flex text-primary-600">
                    <MarketingIcon name={service.icon} className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm opacity-90">{service.description}</p>
                  <span className="mt-3 inline-block text-[11px] tracking-wide uppercase bg-gray-200 text-gray-700 px-2 py-1 rounded">
                    {service.powered}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                      {service.achievement}
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {service.status}
                    </span>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">시장</h4>
                    <p className="text-gray-600 text-sm">{service.market}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">영향력</h4>
                    <p className="text-gray-600 text-sm">{service.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Dominance */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
              기관 풀 · 표준화
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              표준화와 시장 전개 현황
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              4대 <strong className="text-gray-800">집중 도메인</strong>(발달장애·시니어·국제결혼·라이프스타일)에서
              표준 케어로그와 기관·연계 풀을 바탕으로 확장 가능한 구조를 쌓고 있습니다.
            </p>
          </div>

          <div className="space-y-8">
            {marketRows.map((row, idx) => (
              <div key={idx} className="group relative">
                {/* Market Row Card */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 lg:p-10 hover:shadow-xl transition-all duration-300">
                  {/* Header Section */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <h3 className="text-3xl font-bold text-gray-900">{row.title}</h3>
                        <span className={`px-4 py-2 rounded-full text-sm font-bold shadow-sm ${
                          row.badge === '집중'
                            ? 'bg-gray-800 text-white' 
                            : 'bg-gray-600 text-white'
                        }`}>
                          {row.badge}
                        </span>
                      </div>
                      <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">{row.summary}</p>
                    </div>
                  </div>

                  {/* Content Grid */}
                  <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
                    {/* Positioning */}
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide">포지셔닝</h4>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed font-medium">{row.positioning}</p>
                    </div>

                    {/* Moat */}
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide">경쟁 우위</h4>
                      </div>
                      <ul className="text-gray-700 text-sm space-y-2">
                        {row.moat.map((m, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2 text-gray-500 font-bold">•</span>
                            <span className="font-medium">{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Metrics */}
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide">핵심 지표</h4>
                      </div>
                      <ul className="text-gray-700 text-sm space-y-2">
                        {row.metrics.map((m, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2 text-gray-500 font-bold">•</span>
                            <span className="font-medium">{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Monetization & Next */}
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide">수익화 & 확장</h4>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <h5 className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">수익 모델</h5>
                          <ul className="text-gray-700 text-sm space-y-1">
                            {row.monetization.map((m, i) => (
                              <li key={i} className="flex items-start">
                                <span className="mr-2 text-gray-500 font-bold">•</span>
                                <span className="font-medium">{m}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="border-t border-gray-300 pt-3">
                          <h5 className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">다음 단계</h5>
                          <ul className="text-gray-700 text-xs space-y-1">
                            {row.next.map((n, i) => (
                              <li key={i} className="flex items-start">
                                <span className="mr-2 text-gray-500 font-bold">→</span>
                                <span className="text-gray-600">{n}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Synergy Opportunities */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
              시너지 & 확장 기회
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              연계 사업 기회
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              국제결혼·자람이·시니어·<strong className="text-gray-800">토탈케어로그</strong>를 기본 축으로,
              <strong className="text-gray-800"> 에듀케어로그와 베지케어</strong>까지 연결해 생애주기형 AI디지털케어로그 확장을 지향합니다.
            </p>
          </div>
          
          {/* Connected Business Model Visualization */}
          <div className="mb-16">
            <div className="rounded-2xl border border-gray-200 bg-white p-3 shadow-sm md:p-4">
              <picture>
                <source media="(max-width: 768px)" srcSet="/images/business/synergy-network-mobile.svg" />
                <img
                  src="/images/business/synergy-network.svg"
                  alt="파트너 허브를 중심으로 국제결혼, 자람이, 토탈케어로그, 시니어와 에듀케어로그, 베지케어가 AI디지털케어로그로 연결되는 구조도"
                  className="w-full h-auto rounded-xl"
                />
              </picture>
            </div>
            <p className="mt-4 text-center text-sm text-gray-600">
              위 도식은 파트너 중심 연계 구조와 확장축(교육·영양/식단)을 한 번에 보여주고, 아래 카드에서는 트랙별 플로우·제휴 파트너·수익화를 상세히 설명합니다.
            </p>
          </div>
          
          {/* Detailed Synergy Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {synergyRows.map((s, i) => (
              <div key={i} className="group relative">
                <div className="h-full bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">{s.title}</h3>
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-gray-700 text-sm font-bold">{i + 1}</span>
                    </div>
                  </div>
                  
                  {/* Content Grid */}
                  <div className="grid grid-cols-1 gap-6 flex-1">
                    {/* Flow */}
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide">연계 플로우</h4>
                      </div>
                      <ul className="text-gray-700 text-sm space-y-2">
                        {s.flow.map((f, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mr-2 text-gray-500 font-bold">•</span>
                            <span className="font-medium leading-relaxed">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Partners */}
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide">입점/제휴 파트너</h4>
                      </div>
                      <ul className="text-gray-700 text-sm space-y-2">
                        {s.partners.map((p, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mr-2 text-gray-500 font-bold">•</span>
                            <span className="font-medium">{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Value */}
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide">수익/가치</h4>
                      </div>
                      <ul className="text-gray-700 text-sm space-y-2">
                        {s.value.map((v, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mr-2 text-gray-500 font-bold">•</span>
                            <span className="font-medium">{v}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Models (Investor Focused) */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">비즈니스 모델</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              DAL의 비즈니스 모델은 4가지 수익 스트림으로 명확합니다: 기관 구독(B2B SaaS) · 가족/개인 프리미엄(B2C) · 매칭/리드 수수료(B2B2C) · 데이터/라이선스(RWE & API). 이 구조는 발달·시니어·국제결혼·토탈케어로그를 기본 축으로, 에듀케어로그·베지케어 확장축까지 동일한 AI디지털케어로그 언어로 연결되도록 설계했습니다.
            </p>
          </div>

          {/* 4 Revenue Streams */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 기관 구독 (B2B SaaS) */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">기관 구독 (B2B SaaS)</h3>
              <p className="text-sm text-gray-600 mb-4">센터·기관 대상 월 구독 (행정+케어 SaaS) · 케어로그 연동</p>
              <ul className="text-sm text-gray-700 space-y-2 mb-4">
                <li className="flex"><span className="mr-2">•</span>표준 워크플로우, 권한/RBAC, 감사로그</li>
                <li className="flex"><span className="mr-2">•</span>대시보드·알림·오프라인 동기화</li>
                <li className="flex"><span className="mr-2">•</span>연동: EMR/보험/결제/메신저</li>
              </ul>
              <div className="text-xs text-gray-500">예: 자람이·시니어 기관 구독</div>
            </div>

            {/* 가족/개인 프리미엄 (B2C) */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">가족/개인 프리미엄 (B2C)</h3>
              <p className="text-sm text-gray-600 mb-4">보호자·가족 앱 프리미엄 · 디바이스/콘텐츠 제휴</p>
              <ul className="text-sm text-gray-700 space-y-2 mb-4">
                <li className="flex"><span className="mr-2">•</span>개인 맞춤 리포트/알림</li>
                <li className="flex"><span className="mr-2">•</span>가족 공유·돌봄 협업</li>
                <li className="flex"><span className="mr-2">•</span>웨어러블·홈기기 번들/리베이트</li>
              </ul>
              <div className="text-xs text-gray-500">예: 가족 프리미엄, 디바이스 번들</div>
            </div>

            {/* 매칭/리드 수수료 (B2B2C) */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">매칭/리드 수수료 (B2B2C)</h3>
              <p className="text-sm text-gray-600 mb-4">병원/치료사/상담/기관 매칭 · 리드/수수료</p>
              <ul className="text-sm text-gray-700 space-y-2 mb-4">
                <li className="flex"><span className="mr-2">•</span>케어로그 기반 추천·전환 추적</li>
                <li className="flex"><span className="mr-2">•</span>상담→예약→내원/등록 파이프라인</li>
                <li className="flex"><span className="mr-2">•</span>입점/광고(마켓플레이스)</li>
              </ul>
              <div className="text-xs text-gray-500">예: 병원·센터 매칭/리드 수수료</div>
            </div>

            {/* 데이터/라이선스 (RWE & API) */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">데이터/라이선스 (RWE & API)</h3>
              <p className="text-sm text-gray-600 mb-4">RWE 데이터 협력 · API · 보험/제약 PoC · ESG 연구</p>
              <ul className="text-sm text-gray-700 space-y-2 mb-4">
                <li className="flex"><span className="mr-2">•</span>FHIR/GraphQL API, 이벤트 웹훅</li>
                <li className="flex"><span className="mr-2">•</span>IRB·가명처리·XAI 리포트</li>
                <li className="flex"><span className="mr-2">•</span>모델/SDK 라이선스</li>
              </ul>
              <div className="text-xs text-gray-500">예: 제약 RWE·보험 위험모형 PoC</div>
            </div>
          </div>

          {/* Market-specific application snapshot */}
          <div className="mt-14">
            <h3 className="text-xl font-bold text-gray-900 mb-4">시장별 적용 스냅샷 (코어 4축 중심)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* 발달장애(자람이) */}
              <div className="border border-gray-200 rounded-xl p-5">
                <div className="text-sm font-semibold text-gray-700 mb-2">발달장애(자람이)</div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li className="flex"><span className="mr-2">•</span>기관 구독 + 보호자 프리미엄</li>
                  <li className="flex"><span className="mr-2">•</span>센터/치료사 상담 연결 리드 수익</li>
                  <li className="flex"><span className="mr-2">•</span>API·리포트 라이선스</li>
                  <li className="flex"><span className="mr-2"></span><span className="text-xs text-gray-500">(연계·등록 기관 풀 5,700+)</span></li>
                </ul>
              </div>
              {/* 시니어(시니어앤라이프) */}
              <div className="border border-gray-200 rounded-xl p-5">
                <div className="text-sm font-semibold text-gray-700 mb-2">시니어(시니어앤라이프)</div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li className="flex"><span className="mr-2">•</span>기관 구독 + 가족 프리미엄</li>
                  <li className="flex"><span className="mr-2">•</span>디바이스 제휴/보험 연계</li>
                  <li className="flex"><span className="mr-2">•</span>병원/재활 상담 연결 리드 수익</li>
                  <li className="flex"><span className="mr-2"></span><span className="text-xs text-gray-500">(연계·등록 사업자 풀 22,000+)</span></li>
                </ul>
              </div>
              {/* 국제결혼(글로벌커플케어) */}
              <div className="border border-gray-200 rounded-xl p-5">
                <div className="text-sm font-semibold text-gray-700 mb-2">국제결혼(글로벌커플케어)</div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li className="flex"><span className="mr-2">•</span>커뮤니티 구독/광고·입점</li>
                  <li className="flex"><span className="mr-2">•</span>법률/번역/여행·항공 제휴</li>
                  <li className="flex"><span className="mr-2">•</span>사후 케어·교육/육아 연계</li>
                  <li className="flex"><span className="mr-2"></span><span className="text-xs text-gray-500">(국내 17만 부부 시장)</span></li>
                </ul>
              </div>
              {/* 토탈케어로그(의료3종+심리) */}
              <div className="border border-gray-200 rounded-xl p-5">
                <div className="text-sm font-semibold text-gray-700 mb-2">토탈케어로그(의료3종+심리)</div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li className="flex"><span className="mr-2">•</span>B2B2C 구독(개인/기관)</li>
                  <li className="flex"><span className="mr-2">•</span>병원 상담 연결/리드 기반 수익</li>
                  <li className="flex"><span className="mr-2">•</span>보험/제약 RWE·PoC</li>
                  <li className="flex"><span className="mr-2"></span><span className="text-xs text-gray-500">(의료 3종+심리, 확장 시장)</span></li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-500">
              확장축: 에듀케어로그(자람이 특수교육 확장)·베지케어(토탈케어로그 항암/만성 회복기 식단 연계)는 연계 사업 기회 섹션에서 별도로 다룹니다.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              투자 하이라이트
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI 시대의 고가치 플랫폼 — 표준화된 실사용 데이터(RWE)와 강력한 진입장벽, 확장 가능한 네트워크 효과로 지속 가능한 수익 성장을 지향합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {investmentHighlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-200 p-8 h-full flex flex-col text-left"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-600 flex items-center justify-center text-white">
                    <MarketingIcon name={highlight.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{highlight.title}</h3>
                </div>

                {/* Subtext */}
                <p className="text-sm text-gray-600 mb-6">{highlight.description}</p>

                {/* Bullet list */}
                <ul className="space-y-2 mt-auto">
                  {highlight.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start text-sm text-gray-700">
                      <span className="mt-1 mr-2 inline-flex items-center justify-center w-4 h-4 rounded-full bg-primary-100 text-primary-600 text-[10px] font-bold">✓</span>
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            AI디지털케어로그 파트너와 함께 성장하세요
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
파일럿·기관 도입 경험을 바탕으로,
파트너와 함께 표준화를 추진하고 확장 가능한 성장을 만들어갑니다.
데이터 표준화·AI 분석·네트워크 효과로 지속 가능한 수익을 지향합니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
  <div className="bg-white/10 rounded-xl p-4">
    <div className="text-sm">전환 장벽</div>
    <div className="text-2xl font-bold">기관 락인</div>
    <div className="text-sm text-white/90">워크플로우·권한·감사</div>
  </div>
  <div className="bg-white/10 rounded-xl p-4">
    <div className="text-sm">성장 엔진</div>
    <div className="text-2xl font-bold">네트워크 효과</div>
    <div className="text-sm text-white/90">커뮤니티·마켓플레이스</div>
  </div>
  <div className="bg-white/10 rounded-xl p-4">
    <div className="text-sm">지속 가능성</div>
    <div className="text-2xl font-bold">장기 LTV</div>
    <div className="text-sm text-white/90">가족·기관 단위 락인</div>
  </div>
</div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact?type=ir&service=platform" className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              투자 문의
            </Link>
            <Link href="/contact?type=b2b&service=platform" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
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