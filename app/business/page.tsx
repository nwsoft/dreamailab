import type { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '비즈니스·투자 - B2B 솔루션 & 파트너십 | 드림에이아이랩',
  description: 'DAL의 핵심기술 AI디지털케어로그 기반의 B2B 솔루션, 파트너십, 투자 포인트를 확인하세요. 창업자 정해성이 최초 고안한 디지털케어로그 기술로 표준을 선도하는 검증된 포트폴리오와 사회적 임팩트를 제시합니다.',
  keywords: 'B2B, 파트너십, 투자, AI 솔루션, 표준화, 사회적 가치, 비즈니스 모델, 드림에이아이랩, 디지털케어로그, AI디지털케어로그, 정해성, 창업자, 개발자, 베지케어, 발달장애, 치매연구, 노인질병, 의료헬스케어',
  openGraph: {
    title: '비즈니스·투자 - B2B 솔루션 & 파트너십 | 드림에이아이랩',
    description: 'DAL의 검증된 AI 포트폴리오, 시장 선점 & 표준화 현황, B2B 솔루션을 확인하세요.',
    url: 'https://dreamailab.com/business',
    siteName: '드림에이아이랩',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '드림에이아이랩 비즈니스',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '비즈니스·투자 - B2B 솔루션 & 파트너십 | 드림에이아이랩',
    description: 'DAL의 검증된 AI 포트폴리오, 시장 선점 & 표준화 현황, B2B 솔루션을 확인하세요.',
    images: ['/og-image.png'],
  },
}

export default function Business() {
  const verifiedPortfolio = [
    {
      title: '자람이',
      description: '국내최초 AI 발달장애 케어 플랫폼',
      icon: '🌱',
      achievement: '선도',
      market: '발달장애 시장',
      impact: '전국 5,700개 시설 대상 표준화 행정·케어 시스템을 제공, 보호자·센터·병원을 하나로 연결',
      status: '표준 선도',
      powered: 'Powered by AI디지털케어로그',
    },
    {
      title: '시니어앤라이프',
      description: 'AI 시니어케어 플랫폼',
      icon: '👴',
      achievement: '선도',
      market: '고령화 시장',
      impact: '재가재활·주간보호·요양원·노인병원·노인재활병원 등 2만2천여 돌봄사업자 대상 표준화 행정 시스템과 검색·매칭 지원',
      status: '표준 선도',
      powered: 'Powered by AI디지털케어로그',
    },
    {
      title: '의료헬스케어',
      description: '개인 AI 주치의 케어로그',
      icon: '💊',
      achievement: '신규',
      market: '개인 맞춤 의료 시장',
      impact: '개인 맞춤 건강관리 지원',
      status: '출시 예정',
      powered: 'Powered by AI디지털케어로그',
    },
    {
      title: '마음이AI',
      description: 'AI 심리상담·케어 보조 서비스',
      icon: '💙',
      achievement: '선도',
      market: '심리치료 AI 시장',
      impact: '리팩토링 중 · 디지털케어로그 적용 진행',
      status: '리팩토링 중',
      powered: 'Powered by AI디지털케어로그',
    },
    {
      title: 'EduCareLog',
      description: 'AI 맞춤 학습 플랫폼',
      icon: '🎓',
      achievement: '신규',
      market: 'AI 교육 시장',
      impact: '개인 맞춤 학습 지원',
      status: '개발 중',
      powered: 'Powered by AI디지털케어로그',
    },
    {
      title: '글로벌패밀리',
      description: '국제결혼 정보 커뮤니티 플랫폼',
      icon: '🌍',
      achievement: '신규',
      market: '국제결혼 시장',
      impact: '국제결혼 시장의 신뢰성과 투명성 혁신, 결혼 전후 맞춤 케어로 행복한 가정 만들기',
      status: '출시 예정',
      powered: 'Powered by AI디지털케어로그',
    },
    {
      title: '베지케어',
      description: '국내 최초 베지터리안 플랫폼',
      icon: '🌱',
      achievement: '선도',
      market: '베지터리안 시장',
      impact: '채식주의자를 위한 AI 기반 건강관리·맛집·레시피·커뮤니티 통합 플랫폼',
      status: '개발 중',
      powered: 'Powered by AI디지털케어로그',
    }
  ]

  const marketRows = [
    {
      title: '발달장애',
      badge: '선도',
      summary: '발달장애 케어 표준 SaaS + 케어로그로 기관·가정·병원을 연결',
      positioning: '표준 행정/케어 SaaS와 케어로그를 결합. 기관 워크플로우와 보호자 앱을 묶어 전환비용과 네트워크 효과를 형성.',
      moat: [
        '표준 스키마·데이터 락인',
        '기관-보호자-병원 네트워크',
        '규제/지침 적합 워크플로우'
      ],
      metrics: [
        '자람이 등록 시설 5,700+',
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
      badge: '선도',
      summary: '요양/주간보호/재가 표준 행정 SaaS + 케어로그, 가족 앱 연동',
      positioning: '기관 중심 표준화와 가족 앱을 연계해 케어 현장과 가정 데이터를 하나로. 전환비용↑·재방문률↑.',
      moat: [
        '법/지침 준수 워크플로우',
        '기관 표준화로 전환비용↑',
        '가족 연동으로 사용자 락인'
      ],
      metrics: [
        '시니어앤라이프 등록 돌봄사업자 22,000+',
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
      badge: '선도',
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
        '매칭 수수료/구독',
        '법률/번역/교육 제휴',
        '사후 케어 상품'
      ],
      next: [
        '국가별 커뮤니티 론칭',
        '인증 파트너 확대',
        '지자체 다문화 협력'
      ]
    },
    {
      title: '베지터리안',
      badge: '선도',
      summary: '국내 최초 베지터리안 플랫폼 - AI 기반 건강관리·맛집·레시피·커뮤니티 통합',
      positioning: '디지털케어로그 기반 개인 맞춤형 영양 관리와 AI 요리사, 지역 식당 연계, 커머스까지 이어지는 완성형 생태계.',
      moat: [
        '국내 최초 베지터리안 전용 플랫폼',
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
      title: '헬스케어 (의료 3종 + 심리)',
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
        '한방의학: 국내 최초 한의학 AI 챗봇',
        '항암: 재활·맞춤 관리, 부작용 모니터링',
        '심리치료: 마음이AI(맞춤 상담·케어)'
      ],
      monetization: [
        'B2B2C 구독',
        '병원 리드/매칭 수수료',
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
      title: '국제결혼 ↔ 헬스케어',
      flow: [
        '결혼 전/후 건강 체크 → 위험요인 스크리닝 → 질병·전문과별 병원 매칭',
        '다국어 안내·번역 지원 → 예약/내원 동선 안내 → 진료 요약 케어로그 자동 기록'
      ],
      partners: [
        '종합병원/전문병원(산부인과·내과·정신건강의학과)',
        '보험사/검진기관',
        '번역/법률/이민 서비스'
      ],
      value: [
        '리드 생성 및 병원 매칭 수수료',
        '신규 가족 고객의 장기 LTV 확보'
      ]
    },
    {
      title: '국제결혼 ↔ 자람이(영유아/언어·발달)',
      flow: [
        '임신·출산 정보 → 영유아 발달 체크 → 언어/발달 지연 조기 선별',
        '센터/치료사 매칭 → 가정/센터 일지 기록 → 맞춤 개입·리포트'
      ],
      partners: [
        '소아과/소아정신과/재활의학과',
        '발달센터/언어치료/심리상담',
        '영유아 교육/콘텐츠'
      ],
      value: [
        '센터 매칭 수수료/구독',
        '가족 단위 락인 및 커뮤니티 활성'
      ]
    },
    {
      title: '시니어 ↔ 헬스케어',
      flow: [
        '복약/활력/활동 로그 → 위험 신호 경보 → 전문과 병원·재활 매칭',
        '가족 앱 알림 → 내원 후 진료·검사·복약 기록 자동 연동'
      ],
      partners: [
        '요양원/주간보호/재가기관',
        '노인병원/재활병원/치과/안과',
        '웨어러블/홈기기(혈압계·혈당계·안마기)'
      ],
      value: [
        '기관 구독 + 디바이스 제휴 수익',
        '낙상/재입원 감소 등 KPI 기반 성과 모델'
      ]
    },
    {
      title: '파트너 마켓플레이스(공통)',
      flow: [
        '케어로그 기반 추천 → 상품/서비스 노출 → 상담/예약 → 결제/이행 → 성과 환류',
        '유저 행동·케어 상태에 맞춘 맞춤 제안(의료, 법률, 보험, 여행 등)'
      ],
      partners: [
        '병원/센터/상담소/약국',
        '보험/법률/번역',
        '항공권/여행사/이사/정착 지원'
      ],
      value: [
        '리드/매칭 수수료, SaaS 구독, 광고/입점 수익',
        '데이터 기반 추천 전환율 향상'
      ]
    }
  ]

  const businessModels = [
    {
      title: 'B2B AI 솔루션',
      description: '검증된 AI 기술을 기업과 조직에 맞춤형으로 제공',
      icon: '🏢',
      features: [
        '검증된 AI 모델 적용',
        '기업 전용 맞춤형 개발',
        'API 연동 및 통합',
        '전담 기술 지원팀'
      ],
      benefits: [
        '검증된 기술로 리스크 최소화',
        '시장 선점 기업과의 협력',
        '사회적 가치와 수익성 동시 추구',
        '지속적인 기술 업데이트'
      ],
      examples: ['자람이 기업용 버전', '시니어앤라이프 B2B 솔루션']
    },
    {
      title: '라이센싱 & 파트너십',
      description: '국내 최초 AI 기술을 다른 기업과 공유하며 시장 확장',
      icon: '🤝',
      features: [
        'AI 모델 라이센싱',
        '기술 특허 공유',
        '공동 개발 파트너십',
        '시장 진입 지원'
      ],
      benefits: [
        '시장 선도 기술 공유',
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
      description: '검증된 AI 도입 경험을 바탕으로 한 전문 컨설팅',
      icon: '💡',
      features: [
        'AI 전략 수립',
        '도입 로드맵 제시',
        '구현 및 통합 지원',
        '직원 교육 및 훈련'
      ],
      benefits: [
        '실제 성공 사례 기반',
        '시장 선도 기술 활용',
        '체계적 AI 도입',
        '투자 효율성 극대화'
      ],
      examples: ['의료기관 AI 컨설팅', '교육기관 AI 도입 지원']
    }
  ]

  const investmentHighlights = [
    {
      title: '시장 선도 구조',
      description: '4대 선도 도메인을 기반으로 확장 가능한 구조',
      icon: '🎯',
      details: [
        '발달장애·시니어·국제결혼·베지터리안 초기 플랫폼 선점',
        '기관 워크플로우 락인 → 확산 속도·재방문률 가속',
        '커뮤니티·마켓플레이스 결합으로 네트워크 효과 극대화'
      ]
    },
    {
      title: '플랫폼 기술 & 진입장벽',
      description: 'AI디지털케어로그 기반 표준화·규제 적합성',
      icon: '🥇',
      details: [
        '표준 스키마(FHIR)·동의/RBAC·감사로그 내장',
        '현장 RWE 축적 → IRB/제약 PoC로 신뢰성 강화',
        '데이터·워크플로우 락인으로 경쟁자 진입 차단'
      ]
    },
    {
      title: '사회적 가치 + 수익성 (ESG + ROI)',
      description: '사회 문제 해결과 재무성과를 동시에',
      icon: '💎',
      details: [
        '발달·시니어·국제결혼·베지터리안 등 공익 영역의 실제 문제 해결',
        '구독·매칭·데이터 라이선스의 균형 잡힌 수익 구조',
        'ESG 테마 및 정책 연계 기회'
      ]
    },
    {
      title: '확장 가능한 플랫폼',
      description: '도메인·국가를 넘는 스케일업',
      icon: '🚀',
      details: [
        '헬스케어(의료3종+심리)로 확장 진행',
        '국제결혼 커뮤니티 기반 글로벌 시장 진출 논리',
        '마켓플레이스/파트너 API로 네트워크 효과 가속'
      ]
    }
  ]


  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section - 시장 선점 메시지 우선 노출 */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/15 text-white/95 mb-6">
              시장 선점 · B2B/B2G/B2C 확장
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              시장 선점 구조와 확장 전략
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              AI디지털케어로그 기반 플랫폼으로 이미 시장 표준을 만들고 있습니다.
              등록 기관·사용자 규모·표준화 진행 상황을 바탕으로 투자 관점을 제시합니다.
            </p>
            {/* 시장 선점 지표 - 상단 강조 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto">
              <div className="bg-white/15 rounded-xl p-4 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold">5,700+</div>
                <div className="text-sm text-white/90">자람이 등록 기관</div>
              </div>
              <div className="bg-white/15 rounded-xl p-4 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold">22,000+</div>
                <div className="text-sm text-white/90">시니어 돌봄사업자</div>
              </div>
              <div className="bg-white/15 rounded-xl p-4 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold">383만+</div>
                <div className="text-sm text-white/90">발달장애 타겟 인구</div>
              </div>
              <div className="bg-white/15 rounded-xl p-4 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold">7</div>
                <div className="text-sm text-white/90">도메인 확장</div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
    <div className="text-sm text-white/90">핵심 포지션</div>
    <div className="text-2xl font-bold text-white mt-1">4대 선도 도메인</div>
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
              <Link href="/contact" className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" aria-label="투자 문의">
                투자 문의
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors" aria-label="파트너십 문의">
                파트너십 문의
              </Link>
              <Link href="/services" className="border-2 border-white/70 text-white/95 px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors" aria-label="서비스 체험">
                서비스 체험
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
              검증된 AI 포트폴리오
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              국내 최초의 AI 서비스들로 실제 사용자와 시설이 검증한 
              혁신적인 솔루션들을 소개합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {verifiedPortfolio.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                <div className="p-6 bg-gray-50 text-gray-900 rounded-t-2xl border-b border-gray-100">
                  <div className="text-4xl mb-3">{service.icon}</div>
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
              시장 선점 & 표준화
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              시장 선점 & 표준화 현황
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              4대 <strong className="text-gray-800">선도 도메인</strong>(발달장애·시니어·국제결혼·베지터리안)에서 
              확장 가능한 구조로 표준화를 추진하고 있습니다.
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
                          row.badge === '선도' 
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
              핵심 서비스 간 <strong className="text-gray-800">데이터·워크플로우 연결</strong>을 통해 
              파트너와 함께 <strong className="text-gray-800">확장 가능한 수익 모델</strong>을 만듭니다.
            </p>
          </div>
          
          {/* Connected Business Model Visualization */}
          <div className="mb-16">
            {/* Radial Network: Partners at center, services around (bidirectional links) */}
            <div className="relative max-w-5xl mx-auto h-[520px] md:h-[560px]">
              {/* Center: Partner Marketplace */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 md:w-52 md:h-52 rounded-full bg-white shadow-xl border-4 border-gray-200 flex items-center justify-center z-20">
                <div className="text-center">
                  <div className="text-2xl font-extrabold text-gray-900">파트너</div>
                  <div className="text-sm text-gray-600">마켓플레이스</div>
                </div>
              </div>

              {/* Circular guide ring (for visual grouping) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] md:w-[480px] md:h-[480px] rounded-full border-2 border-dashed border-gray-200"></div>

              {/* Link lines (center ↔ nodes) */}
              <div className="absolute inset-0 pointer-events-none">
                {/* top-left */}
                <div className="absolute left-[18%] top-[14%] w-[32%] h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 rotate-[-25deg] origin-left md:left-[16%] md:top-[10%] md:w-[34%]"></div>
                {/* top-right */}
                <div className="absolute right-[18%] top-[14%] w-[32%] h-0.5 bg-gradient-to-l from-gray-300 to-gray-400 rotate-[25deg] origin-right md:right-[16%] md:top-[10%] md:w-[34%]"></div>
                {/* bottom-left */}
                <div className="absolute left-[18%] bottom-[14%] w-[32%] h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 rotate-[25deg] origin-left md:left-[16%] md:bottom-[10%] md:w-[34%]"></div>
                {/* bottom-right */}
                <div className="absolute right-[18%] bottom-[14%] w-[32%] h-0.5 bg-gradient-to-l from-gray-300 to-gray-400 rotate-[-25deg] origin-right md:right-[16%] md:bottom-[10%] md:w-[34%]"></div>
              </div>

              {/* Node: 국제결혼 */}
              <div className="absolute left-[6%] top-[6%] w-48 md:w-56 bg-white rounded-2xl shadow-lg border border-gray-200 p-4 text-center z-10">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2"><span className="text-xl">🌍</span></div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">국제결혼</h3>
                <p className="text-xs md:text-sm text-gray-600">정보·행정·매칭 표준화</p>
              </div>

              {/* Node: 헬스케어 */}
              <div className="absolute right-[6%] top-[6%] w-48 md:w-56 bg-white rounded-2xl shadow-lg border border-gray-200 p-4 text-center z-10">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2"><span className="text-xl">💊</span></div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">헬스케어</h3>
                <p className="text-xs md:text-sm text-gray-600">의료·한방·항암·심리 통합</p>
              </div>

              {/* Node: 자람이 */}
              <div className="absolute left-[6%] bottom-[6%] w-48 md:w-56 bg-white rounded-2xl shadow-lg border border-gray-200 p-4 text-center z-10">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2"><span className="text-xl">🌱</span></div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">자람이</h3>
                <p className="text-xs md:text-sm text-gray-600">발달장애 케어 표준화</p>
              </div>

              {/* Node: 시니어 */}
              <div className="absolute right-[6%] bottom-[6%] w-48 md:w-56 bg-white rounded-2xl shadow-lg border border-gray-200 p-4 text-center z-10">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2"><span className="text-xl">👴</span></div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">시니어</h3>
                <p className="text-xs md:text-sm text-gray-600">요양·돌봄 표준화</p>
              </div>

              {/* Bidirectional badges */}
              <div className="absolute left-1/2 top-[9%] -translate-x-1/2 bg-gray-800 text-white text-[10px] md:text-xs px-2 py-1 rounded-full shadow">양방향 데이터/리드</div>
              <div className="absolute left-1/2 bottom-[9%] -translate-x-1/2 bg-gray-800 text-white text-[10px] md:text-xs px-2 py-1 rounded-full shadow">케어로그 기반 추천</div>
            </div>

            {/* Legend */}
            <div className="max-w-3xl mx-auto mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <div className="text-xs font-semibold text-gray-700">FLOW</div>
                <div className="text-sm text-gray-600">서비스 ↔ 파트너 마켓플레이스</div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <div className="text-xs font-semibold text-gray-700">DATA</div>
                <div className="text-sm text-gray-600">케어로그·상담·예약·결제 이벤트</div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <div className="text-xs font-semibold text-gray-700">VALUE</div>
                <div className="text-sm text-gray-600">리드/매칭 수수료 · 구독 · 입점</div>
              </div>
            </div>
          </div>
          
          {/* Detailed Synergy Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {synergyRows.map((s, i) => (
              <div key={i} className="group relative">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">{s.title}</h3>
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-gray-700 text-sm font-bold">{i + 1}</span>
                    </div>
                  </div>
                  
                  {/* Content Grid */}
                  <div className="grid grid-cols-1 gap-6">
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
              DAL의 비즈니스 모델은 4가지 수익 스트림으로 명확합니다: 기관 구독(B2B SaaS) · 가족/개인 프리미엄(B2C) · 매칭/리드 수수료(B2B2C) · 데이터/라이선스(RWE & API). 이 구조는 발달·시니어·국제결혼·헬스케어 전 영역에 동일하게 적용되며, 시장별 KPI로 이미 검증 중입니다.
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
            <h3 className="text-xl font-bold text-gray-900 mb-4">시장별 적용 스냅샷</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* 발달장애(자람이) */}
              <div className="border border-gray-200 rounded-xl p-5">
                <div className="text-sm font-semibold text-gray-700 mb-2">발달장애(자람이)</div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li className="flex"><span className="mr-2">•</span>기관 구독 + 보호자 프리미엄</li>
                  <li className="flex"><span className="mr-2">•</span>센터/치료사 매칭 수수료</li>
                  <li className="flex"><span className="mr-2">•</span>API·리포트 라이선스</li>
                  <li className="flex"><span className="mr-2"></span><span className="text-xs text-gray-500">(5,700 시설 확보)</span></li>
                </ul>
              </div>
              {/* 시니어(시니어앤라이프) */}
              <div className="border border-gray-200 rounded-xl p-5">
                <div className="text-sm font-semibold text-gray-700 mb-2">시니어(시니어앤라이프)</div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li className="flex"><span className="mr-2">•</span>기관 구독 + 가족 프리미엄</li>
                  <li className="flex"><span className="mr-2">•</span>디바이스 제휴/보험 연계</li>
                  <li className="flex"><span className="mr-2">•</span>병원/재활 매칭 수수료</li>
                  <li className="flex"><span className="mr-2"></span><span className="text-xs text-gray-500">(22,000 사업자 확보)</span></li>
                </ul>
              </div>
              {/* 국제결혼(글로벌패밀리) */}
              <div className="border border-gray-200 rounded-xl p-5">
                <div className="text-sm font-semibold text-gray-700 mb-2">국제결혼(글로벌패밀리)</div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li className="flex"><span className="mr-2">•</span>커뮤니티 구독/광고·입점</li>
                  <li className="flex"><span className="mr-2">•</span>법률/번역/여행·항공 제휴</li>
                  <li className="flex"><span className="mr-2">•</span>사후 케어·교육/육아 연계</li>
                  <li className="flex"><span className="mr-2"></span><span className="text-xs text-gray-500">(국내 17만 부부 시장)</span></li>
                </ul>
              </div>
              {/* 베지터리안(베지케어) */}
              <div className="border border-gray-200 rounded-xl p-5">
                <div className="text-sm font-semibold text-gray-700 mb-2">베지터리안(베지케어)</div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li className="flex"><span className="mr-2">•</span>프리미엄 구독(무료/유료)</li>
                  <li className="flex"><span className="mr-2">•</span>광고 & 제휴(비건 브랜드)</li>
                  <li className="flex"><span className="mr-2">•</span>커머스(밀키트/정기배송)</li>
                  <li className="flex"><span className="mr-2"></span><span className="text-xs text-gray-500">(국내 최초 베지터리안 플랫폼)</span></li>
                </ul>
              </div>
              {/* 헬스케어(의료3종+심리) */}
              <div className="border border-gray-200 rounded-xl p-5">
                <div className="text-sm font-semibold text-gray-700 mb-2">헬스케어(의료3종+심리)</div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li className="flex"><span className="mr-2">•</span>B2B2C 구독(개인/기관)</li>
                  <li className="flex"><span className="mr-2">•</span>병원 리드/매칭 수수료</li>
                  <li className="flex"><span className="mr-2">•</span>보험/제약 RWE·PoC</li>
                  <li className="flex"><span className="mr-2"></span><span className="text-xs text-gray-500">(의료 3종+심리, 확장 시장)</span></li>
                </ul>
              </div>
            </div>
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-600 flex items-center justify-center text-white text-2xl">
                    {highlight.icon}
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
검증된 서비스 운영 경험을 바탕으로,
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
            <Link href="/contact" className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              투자 문의
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              파트너십 문의
            </Link>
            <Link href="/services" className="border-2 border-white/70 text-white/95 px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              서비스 체험
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
} 