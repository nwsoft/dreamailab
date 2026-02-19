import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export const metadata: Metadata = {
  title: '채식 | 비건 | 베지테리안 | 채식식단 | 비건레시피 | 채식식당 | 베지케어',
  description:
    '채식과 비건 라이프스타일을 위한 통합 플랫폼. 채식식단, 비건레시피, 채식식당 찾기, 영양관리, 채식 커뮤니티까지 한 번에. AI가 개인 맞춤형 채식 식단과 영양 가이드를 제공합니다.',
  keywords:
    '채식, 비건, 베지테리안, 채식식단, 비건레시피, 채식식당, 비건맛집, 채식영양, 비건영양제, 채식단백질, 비건식품, 채식커뮤니티, 베지케어',
}

// ===== 브랜드/베지케어 상수 =====
const brand = {
  name: '베지케어',
  english: 'VeggieCare',
  slogans: [
    '채식, 그 이후까지 함께 케어합니다.',
    '건강한 식탁, 지속가능한 지구',
    '베지케어 – 식물성 라이프스타일의 완성',
  ],
}

const veggieTypes = [
  {
    name: '비건 (Vegan)',
    desc: '동물성 제품 전부 배제 (고기, 생선, 달걀, 우유, 꿀)',
    icon: '🌱',
    strictness: '가장 엄격'
  },
  {
    name: '락토 베지터리안',
    desc: '유제품은 허용, 고기·생선·달걀은 배제',
    icon: '🥛',
    strictness: '중간'
  },
  {
    name: '오보 베지터리안',
    desc: '달걀은 허용, 고기·생선·유제품은 배제',
    icon: '🥚',
    strictness: '중간'
  },
  {
    name: '페스코 베지터리안',
    desc: '생선은 허용, 고기·달걀·유제품은 배제',
    icon: '🐟',
    strictness: '유연'
  },
  {
    name: '플렉시테리언',
    desc: '유연한 채식 - 가끔 고기 섭취',
    icon: '🔄',
    strictness: '가장 유연'
  }
]

const coreFeatures = [
  {
    title: 'AI 맞춤형 영양 관리',
    desc: '디지털케어로그 연동으로 개인 건강 데이터 기반 영양소 분석 및 맞춤 식단 추천',
    icon: '🧠',
  },
  {
    title: '비건/채식 맛집 검색',
    desc: 'GPS 기반 지역별 비건·채식 식당 안내, 리뷰·평점·메뉴 정보 제공',
    icon: '🍽️',
  },
  {
    title: 'AI 레시피 추천',
    desc: '집에 있는 재료로 만들 수 있는 채식 레시피 AI 생성 및 맞춤 추천',
    icon: '👨‍🍳',
  },
  {
    title: '커뮤니티·경험 공유',
    desc: '채식 레시피 공유, 맛집 리뷰, 건강관리 경험담, Q&A 게시판',
    icon: '👥',
  },
  {
    title: '정기배송·밀키트 연계',
    desc: '비건 밀키트·식품 브랜드와 제휴한 정기배송 서비스',
    icon: '📦',
  },
  {
    title: '채식 챌린지·리워드',
    desc: '한 달 채식하기 챌린지, 성공 시 포인트·쿠폰 지급',
    icon: '🏆',
  },
]

const marketTrends = [
  {
    category: '건강 트렌드',
    title: '만성질환 예방을 위한 채식 선택 급증',
    details: [
      '고혈압, 당뇨, 비만 예방 목적으로 채식을 선택하는 사람들이 연평균 15% 증가',
      'WHO 권장사항: 식물성 식단이 심혈관 질환 위험을 32% 감소',
      '한국인 10명 중 3명이 "건강을 위해 고기를 줄이겠다" 응답 (2023년 조사)',
      '의료진 70%가 "환자에게 식물성 식단 권장 경험" 있다고 답변'
    ],
    icon: '🏥'
  },
  {
    category: '환경 의식',
    title: '기후위기 대응으로 식습관 변화 가속화',
    details: [
      '축산업이 전 세계 온실가스의 14.5% 차지 (UN FAO 보고서)',
      '소 1마리당 연간 70kg 메탄가스 배출 → 자동차 1대와 동일',
      'ESG 투자 트렌드: 기업들이 친환경 식품 공급망 구축 필수',
      '한국 정부: 2050 탄소중립 목표로 식물성 식품 산업 육성 정책 발표'
    ],
    icon: '🌍'
  },
  {
    category: '윤리적 소비',
    title: '동물권리·복지 의식 확산과 윤리적 소비 증가',
    details: [
      '동물복지 인증 제품 구매 의향 65% (2023년 소비자 조사)',
      '공장식 축산에 대한 반대 의견 78% (MZ세대 기준)',
      '비건 화장품 시장 연평균 25% 성장 (2020-2023)',
      '동물실험 반대 운동 확산으로 비건 라이프스타일 확대'
    ],
    icon: '🐾'
  },
  {
    category: 'MZ세대 라이프스타일',
    title: '플렉시테리언과 유연한 채식 문화 확산',
    details: [
      'MZ세대 40%가 "완전 채식은 아니지만 고기를 덜 먹는" 패턴',
      '소셜미디어 영향: 인플루언서들의 채식 콘텐츠 조회수 급증',
      '비건 카페, 레스토랑 방문률 3년간 200% 증가',
      '밀키트 시장에서 비건 메뉴 비중 15% → 35%로 확대'
    ],
    icon: '📱'
  },
  {
    category: '시장 규모',
    title: '국내 비건/채식 시장 급성장',
    details: [
      '한국 비건 식품 시장: 2020년 1,200억원 → 2023년 3,500억원',
      '글로벌 비건 시장: 2023년 1,800억 달러, 2030년 3,100억 달러 예상',
      '주요 기업 진출: 풀무원, CJ, 이마트, 스타벅스 등 비건 상품 라인업 확대',
      '비건 레스토랑: 2020년 200개 → 2023년 800개로 4배 증가'
    ],
    icon: '📈'
  },
  {
    category: '기술 혁신',
    title: '식물성 대체육 기술 발전과 AI 활용',
    details: [
      '대체육 기술: 식물성 단백질로 실제 고기와 구별하기 어려운 제품 개발',
      'AI 레시피 추천: 개인 취향과 영양소를 고려한 맞춤형 채식 메뉴 제공',
      '블록체인 추적: 비건 제품의 원료부터 유통까지 투명한 공급망 관리',
      '3D 프린팅: 식물성 재료로 고기 질감을 재현하는 기술 상용화'
    ],
    icon: '🔬'
  }
]

const businessModel = [
  {
    title: '프리미엄 구독',
    desc: '무료: 기본 커뮤니티, 일부 레시피/맛집 검색\n유료: AI 맞춤형 건강관리, 전문 영양사 상담',
    icon: '💎',
  },
  {
    title: '광고 & 제휴',
    desc: '비건 레스토랑, 카페 광고\n비건 식품, 건강보조제, 친환경 브랜드 제휴',
    icon: '📢',
  },
  {
    title: '커머스',
    desc: '비건 밀키트/정기 식단 배송\nAI 추천 기반 영양제/간식 판매',
    icon: '🛒',
  },
  {
    title: '데이터 비즈니스',
    desc: '채식인 식습관·건강 데이터 기반 제약사, 식품업계 제휴',
    icon: '📊',
  },
]

const platformModules = [
  {
    title: '디지털케어로그 연동',
    desc: '건강 기록, 체중·혈액 데이터, 식습관 기록 통합 관리',
    icon: '📋',
  },
  {
    title: 'AI 요리사',
    desc: '재료 기반 레시피 생성, 영양소 분석, 알러지 고려',
    icon: '🤖',
  },
  {
    title: '맛집 매칭',
    desc: '위치·선호도 기반 비건 식당 추천, 리뷰·예약 연동',
    icon: '📍',
  },
  {
    title: '커뮤니티',
    desc: '레시피 공유, 경험담, Q&A, 챌린지 참여',
    icon: '💬',
  },
  {
    title: '제휴 API',
    desc: '배달앱, 밀키트 업체, 식품 브랜드 연동',
    icon: '🔌',
  },
  {
    title: '리워드 시스템',
    desc: '챌린지 달성 시 포인트, 쿠폰, 뱃지 지급',
    icon: '🎁',
  },
]

export default function VeggieService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* 1. Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-emerald-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{brand.name} ({brand.english})</h1>
            <p className="text-xl md:text-2xl mb-6 max-w-4xl mx-auto">
              <strong>국내 최초 베지터리안 플랫폼</strong> — AI 기반 건강관리·맛집·레시피·커뮤니티를 통합 제공합니다.
            </p>
            <p className="text-lg max-w-3xl mx-auto text-white/90">
              디지털케어로그와 연동하여 개인 맞춤형 영양 관리와 식단 추천을 지원합니다.
            </p>
            <p className="text-base max-w-3xl mx-auto text-white/80 mt-3">
              채식에서 끝나지 않습니다. 채식 <strong>이후</strong>의 건강한 삶까지 연결합니다.
            </p>
            <div className="mt-6">
              <span className="inline-block px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-semibold">In Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem Definition */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">왜 지금, 베지터리안 플랫폼인가</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">건강, 환경, 윤리, MZ세대 라이프스타일 변화로 베지터리안 시장이 급성장하고 있습니다</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketTrends.map((trend, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">{trend.icon}</div>
                  <div>
                    <span className="text-sm font-semibold text-green-600">{trend.category}</span>
                    <h3 className="font-bold text-gray-900 text-lg">{trend.title}</h3>
                  </div>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  {trend.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-green-500 mt-1 text-xs">•</span>
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Solution */}
      {/* Core Features */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">핵심 기능</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">디지털케어로그 기반 건강관리와 AI 요리사, 지역 식당 연계, 커머스까지 이어지는 완성형 베지터리안 생태계</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFeatures.map((feature, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 shadow-sm text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. User Workflow */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">이용 흐름</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">건강관리 → AI 요리사 → 지역 식당 → 커머스까지 이어지는 원스톱 베지터리안 여정</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {veggieTypes.map((type, i) => (
              <div key={i} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-3xl">{type.icon}</div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 text-lg">{type.name}</div>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">{type.strictness}</span>
                  </div>
                </div>
                <div className="text-sm text-gray-600 leading-relaxed">{type.desc}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">국내 최초</h3>
              <p className="text-gray-600">베지터리안 전용 통합 플랫폼으로 시장 선점</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI 기반</h3>
              <p className="text-gray-600">개인 맞춤형 영양 관리와 레시피 추천</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">완성형 생태계</h3>
              <p className="text-gray-600">건강관리부터 커머스까지 원스톱 서비스</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Technology Advantage (Short) */}
      {/* Platform Architecture */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">플랫폼 구조</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">디지털케어로그 연동 · AI 요리사 · 맛집 매칭 · 커뮤니티 · 제휴 API · 리워드 시스템</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformModules.map((module, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow text-center">
                <div className="text-3xl mb-3">{module.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{module.title}</h3>
                <p className="text-sm text-gray-600">{module.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Business Impact */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">비즈니스 모델</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">프리미엄 구독 · 광고 & 제휴 · 커머스 · 데이터 비즈니스</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessModel.map((model, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-3">{model.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{model.title}</h3>
                <p className="text-sm text-gray-600 whitespace-pre-line">{model.desc}</p>
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
          <p className="text-gray-600">국내 최초 베지터리안 <strong>통합 플랫폼</strong>으로, AI 기반 건강관리·맛집·레시피·커뮤니티를 중심으로 개발 중입니다. 서비스 공개는 순차 진행됩니다.</p>
        </div>
      </section>

      {/* 8. Ecosystem Connection */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">DAL 생태계와의 연결</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">디지털케어로그와 연동하여 통합 건강 관리를 제공합니다</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🔗 디지털케어로그와의 시너지</h3>
              <ul className="text-gray-700 space-y-2">
                <li><strong>통합 건강 관리:</strong> 건강 데이터(혈압, 혈당, 체중 등)와 식습관 데이터 연계</li>
                <li><strong>AI 맞춤 분석:</strong> 건강 상태·영양소 결핍 분석 후 최적 채식 식단 추천</li>
                <li><strong>장기 추적 관리:</strong> 채식 전환 후 건강 변화 추적, 전문가 상담 연결</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 DAL 플랫폼 생태계</h3>
              <ul className="text-gray-700 space-y-2">
                <li><strong>개인 맞춤형:</strong> 라이프스타일·건강 상태에 맞는 베지터리안 여정</li>
                <li><strong>커뮤니티 중심:</strong> 채식 라이프스타일을 함께하는 커뮤니티</li>
                <li><strong>비즈니스 연계:</strong> 비건 레스토랑, 식품 브랜드, 영양사·요리사 제휴</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">베지케어 출시 소식 받기</h2>
          <p className="text-gray-600 mb-6">서비스 공개 시 연락을 받으시려면 문의해 주세요.</p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors">
            문의하기
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
