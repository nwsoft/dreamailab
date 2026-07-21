import type { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PageClosingSection from '../../components/PageClosingSection'
import Link from 'next/link'
import { COMPANY_HERO_LINE, COMPANY_META_LINE } from '../../lib/company-copy'
import { MarketingIcon } from '../../components/MarketingIcon'
import { absoluteUrl, buildPageMetadata } from '../../lib/seo'

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: '회사소개 - AI디지털케어로그 기반 데이터 인프라 기업 | 드림에이아이랩',
    description: `${COMPANY_META_LINE}입니다. 자람이·시니어앤라이프 연계 기관·사업자 규모(MAU와 별개)와 표준화·파일럿 진행을 소개합니다.`,
    path: '/about',
    ogTitle: '회사소개 - AI디지털케어로그로 표준을 만드는 드림에이아이랩',
    ogDescription:
      'DAL은 AI디지털케어로그로 의료·돌봄·교육 데이터를 통합해 개인 맞춤 케어 표준 플랫폼을 지향합니다.',
    ogImageAlt: '드림에이아이랩 회사소개',
  }),
  alternates: {
    canonical: absoluteUrl('/about'),
    languages: {
      'ko-KR': absoluteUrl('/about'),
      'en-US': absoluteUrl('/en/about'),
    },
  },
}

export default function About() {
  const milestones = [
    {
      year: '2022',
      title: '자람이 프로젝트 시작',
      description: '취약계층 지원을 위한 공익 프로젝트 출발'
    },
    {
      year: '2022',
      title: '수화 번역 AI 개발',
      description: '청각장애 소통 장벽 해소의 첫 발'
    },
    {
      year: '2023',
      title: '발달장애/ADHD AI 연구',
      description: '발달장애·ADHD 데이터 기반 연구 착수'
    },
    {
      year: '2023',
      title: '심리·정신건강 AI(→ 토탈케어로그)',
      description: '심리상담 보조 AI를 전개한 뒤, 토탈케어로그 플랫폼 축으로 통합하는 방향으로 정리'
    },
    {
      year: '2024',
      title: '의료 AI 개발',
      description: '의료 3종 상담 AI(히포·한방·항암) 개발'
    },
    {
      year: '2024',
      title: 'DAL 설립',
      description: 'DAL 설립, 4대 도메인으로 확장'
    },
    {
      year: '2025',
      title: 'AI디지털케어로그 발표',
      description: 'DAL 주요서비스에 탑재, 통합 플랫폼 완성'
    }
  ]

  const projects = [
    {
      name: '자람이 프로젝트',
      description: '발달장애·ADHD 케어 표준화를 목표로, 센터·병원·보호자·교사를 하나로 연결하는 공익 프로젝트입니다.',
      features: ['센터 행정 SaaS 표준화', '발달장애 학습 및 치료 연구', '행동·정서·교육·약물 데이터', '보호자·센터·병원 연결'],
      href: '/services/jarame' as string | undefined,
    },
    {
      name: '국제결혼 (글로벌커플케어)',
      description: '국제결혼 정보회사·기관에 표준화된 행정·매칭 시스템을 제공하고, 결혼 전후 커플과 가족을 지원하는 통합 플랫폼입니다. 사기·불법을 AI로 예방하고, 정착·육아까지 연결합니다.',
      features: ['표준 행정/매칭 SaaS(B2B)', '사기·불법 예방 검증/가이드', '국가별 커뮤니티/정착·육아', '기관·정부 연계'],
      href: '/services/marriage' as string | undefined,
    },
    {
      name: '시니어앤라이프',
      description: '노인 돌봄과 재활을 위한 AI 플랫폼으로, 시니어 디지털케어로그를 통해 가정·기관·의료 기록을 통합하고 위험을 조기 탐지합니다.',
      features: ['복약/활력징후 분석', '치매/낙상 위험 예측', '가족 리포트 알림', '기관 대시보드'],
      href: '/services/senior' as string | undefined,
    },
    {
      name: '토탈케어로그 (AI 주치의)',
      description:
        '개인 맞춤 의료·병원매칭·질병·약물 추적을 지향하는 헬스케어 축입니다. 현재 In Development 단계이며, 케어로그 기반 임상·신약 연계를 장기적으로 설계합니다.',
      features: ['진료/검사/복약 연동(지향)', '부작용/상호작용 경고(개발)', '영양·운동 추천(개발)', '만성질환/항암 리포트(개발)'],
      href: '/services/healthcare' as string | undefined,
    },
    {
      name: 'Pet AI Digital Care Log (Research)',
      description:
        'AI Digital Care Log를 반려동물에 확장하는 연구 프로젝트입니다. 상용 서비스가 아니며, 기술 개발 초기·Future Vision 단계입니다.',
      features: [
        'Research · Technology Development · Future Vision',
        '자람이 Behavior Analysis → Pet 확장',
        'Vision AI · Behavior Translation',
        '장기 Robot Integration 비전',
      ],
      href: '/research/pet-ai' as string | undefined,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section - 신뢰성·실제 성과 강조 */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20 md:py-24 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/15 text-white/95 mb-6">
              AI디지털케어로그 기반 데이터 인프라 기업
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              회사소개 · Dream AI Lab
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              {COMPANY_HERO_LINE}.<br />
              등록·연계로 확보한 현장 풀과 제품·파일럿을 바탕으로 표준화를 단계적으로 쌓아가고 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 실제 성과·시장 영향력 (DAL in Numbers) */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">등록·연계 규모와 시장 맥락</h2>
            <p className="text-gray-600">공공·연계 기준 등록 수(일일 이용자 수와 별개)</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="rounded-2xl p-6 border border-gray-100 text-center shadow-sm">
              <div className="text-3xl font-extrabold text-gray-900 mb-1">5,700+</div>
              <div className="text-sm text-gray-600">자람이 연계 등록 기관</div>
            </div>
            <div className="rounded-2xl p-6 border border-gray-100 text-center shadow-sm">
              <div className="text-3xl font-extrabold text-gray-900 mb-1">22,000+</div>
              <div className="text-sm text-gray-600">시니어앤라이프 연계 등록 사업자</div>
            </div>
            <div className="rounded-2xl p-6 border border-gray-100 text-center shadow-sm">
              <div className="text-3xl font-extrabold text-gray-900 mb-1">383만+</div>
              <div className="text-sm text-gray-600">발달장애 잠재 인구 (시장 규모)</div>
            </div>
            <div className="rounded-2xl p-6 border border-gray-100 text-center shadow-sm">
              <div className="text-3xl font-extrabold text-gray-900 mb-1">6+1</div>
              <div className="text-sm text-gray-600">핵심 도메인 + 분리 운영(노아AI)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                드림에이아이랩에 대하여
              </h2>
              <p className="text-lg text-gray-700 mb-4 font-medium">
                DAL은 하나의 서비스 회사가 아니라 AI디지털케어로그 기반 플랫폼을 구축하고 여러 산업 도메인으로 확장하는 인프라 기업입니다.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                DAL(Dream AI Lab)은 모든 사람이 언제 어디서나 동등하게 의료·돌봄·교육 서비스를 누릴 수 있도록, 자체 개발한 AI디지털케어로그 기술을 기반으로 솔루션을 제공합니다. 가정·학교·병원·기관 데이터를 하나로 통합하고 AI가 분석하여 개인별 맞춤 치료·학습·돌봄 계획을 제안합니다.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                이 기술은 ① 발달장애 케어 ‘자람이’(Beta), ② 노인 돌봄 ‘시니어앤라이프’(Pilot), ③ 건강·질병 관리 ‘토탈케어로그’(In Development), ④ 사회문제 해결형 ‘글로벌커플케어’(Pilot)로 확장되고 있습니다. (국제결혼은 커뮤니티·매칭 중심으로 케어로그 직접 적용 없이 전개됩니다.)
              </p>
              <p className="text-lg text-gray-600 mb-6">
                우리는 공익에 가까운 돌봄·교육·의료 데이터 표준화에 집중해 신뢰를 쌓고 있습니다. 동의·규제를 전제로 한 기록은 연구·정책·현장 개선으로 환류될 수 있도록 설계하며, 공공·NGO·연구기관과의 협력으로 사회적 임팩트를 넓혀 갑니다.
              </p>
              <div className="rounded-xl border border-primary-100 bg-primary-50/80 p-5 text-sm text-gray-700">
                <p className="font-semibold text-gray-900 mb-2">조직·브랜드 구조</p>
                <ul className="space-y-1.5 list-disc list-inside">
                  <li>
                    <strong>DAL</strong> — AI디지털케어로그 플랫폼·기술·서비스 (본 사이트)
                  </li>
                  <li>
                    <strong>자람이</strong> — 발달장애 축 대표 제품. 모두의창업 등은{' '}
                    <strong>정해성</strong> 개인·자람이 기준 신청 맥락이며, 투자 시 노아AI와 같이{' '}
                    <strong>독립 법인</strong>으로 전환될 수 있습니다.
                  </li>
                  <li>
                    <strong>Noah AI Labs</strong> — 노아AI는 이미 분리 운영 (
                    <Link href="/services/finance" className="text-primary-600 underline">
                      이전 안내
                    </Link>
                    )
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">성장과 실행</h3>
                  <p className="text-gray-600 mb-6">
                    플랫폼 위 6개 핵심 도메인으로 확장 중이며, 표준화와 기관·연계 풀 확보를 병행해 도입 기반을 넓히고 있습니다.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600 mb-2">6</div>
                      <div className="text-gray-600">핵심 도메인</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary-600 mb-2">1</div>
                      <div className="text-gray-600">통합 플랫폼</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600 mb-2">2026</div>
                      <div className="text-gray-600">국가 시범사업 목표</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary-600 mb-2">다도메인</div>
                      <div className="text-gray-600">하나의 케어로그 철학</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technology: AI디지털케어로그 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Core Technology: AI디지털케어로그</h2>
            <p className="text-lg text-gray-600">데이터 표준화부터 맞춤 실행까지, 하나의 표준으로 연결합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl p-6 shadow bg-gray-50 text-center">
              <div className="mb-3 flex justify-center text-primary-600">
                <MarketingIcon name="document" className="h-9 w-9" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">데이터 표준화</h3>
              <p className="text-gray-600 text-sm">FHIR Schema 기반 데이터 표준화</p>
            </div>
            <div className="rounded-2xl p-6 shadow bg-gray-50 text-center">
              <div className="mb-3 flex justify-center text-primary-600">
                <MarketingIcon name="brain" className="h-9 w-9" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">멀티모달 AI 분석</h3>
              <p className="text-gray-600 text-sm">행동·영상·텍스트·시계열 분석</p>
            </div>
            <div className="rounded-2xl p-6 shadow bg-gray-50 text-center">
              <div className="mb-3 flex justify-center text-primary-600">
                <MarketingIcon name="bolt" className="h-9 w-9" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">맞춤 실행</h3>
              <p className="text-gray-600 text-sm">Care plan, Alert, Matching</p>
            </div>
            <div className="rounded-2xl p-6 shadow bg-gray-50 text-center">
              <div className="mb-3 flex justify-center text-primary-600">
                <MarketingIcon name="flask" className="h-9 w-9" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">집단 지능 학습</h3>
              <p className="text-gray-600 text-sm">RWE & 연구 혁신</p>
            </div>
          </div>
        </div>
      </section>

      {/* 플랫폼 위 도메인 확장 */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">하나의 플랫폼 위 도메인 확장</h2>
            <p className="text-lg text-gray-600">AI디지털케어로그 기반으로 연결된 도메인 생태계입니다. 자세한 내용은 각 상세 페이지에서 보실 수 있습니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="rounded-2xl p-6 shadow bg-white text-center">
              <div className="mb-3 flex justify-center text-emerald-600">
                <MarketingIcon name="sprout" className="h-11 w-11" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">자람이</h3>
              <p className="text-gray-600 mt-1 mb-4">발달장애 케어 표준화 플랫폼</p>
              <div><Link href="/services/jarame" className="text-blue-700 font-semibold hover:underline">자세히 보기 →</Link></div>
            </div>
            <div className="rounded-2xl p-6 shadow bg-white text-center">
              <div className="mb-3 flex justify-center text-cyan-700">
                <MarketingIcon name="user" className="h-11 w-11" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">시니어앤라이프</h3>
              <p className="text-gray-600 mt-1 mb-4">국내 시니어돌봄 서비스의 표준</p>
              <div><Link href="/services/senior" className="text-blue-700 font-semibold hover:underline">자세히 보기 →</Link></div>
            </div>
            <div className="rounded-2xl p-6 shadow bg-white text-center">
              <div className="mb-3 flex justify-center text-rose-600">
                <MarketingIcon name="stethoscope" className="h-11 w-11" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">토탈케어로그</h3>
              <p className="text-gray-600 mt-1 mb-4">AI 주치의·항암·한방 통합</p>
              <div><Link href="/services/healthcare" className="text-blue-700 font-semibold hover:underline">자세히 보기 →</Link></div>
            </div>
            <div className="rounded-2xl p-6 shadow bg-white text-center">
              <div className="mb-3 flex justify-center text-indigo-600">
                <MarketingIcon name="globe" className="h-11 w-11" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">글로벌커플케어</h3>
              <p className="text-gray-600 mt-1 mb-4">국내 최초 국제결혼 플랫폼</p>
              <div><Link href="/services/marriage" className="text-blue-700 font-semibold hover:underline">자세히 보기 →</Link></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Value & Impact */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Value & Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">기술과 표준으로 사회적 포용성과 신뢰를 높이며, 지속 가능한 비즈니스를 구축합니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-md border border-gray-100 transition-shadow text-center">
              <div className="mb-3 flex justify-center text-primary-600">
                <MarketingIcon name="handshake" className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">모두를 위한 기술</h3>
              <p className="text-gray-600">사회적 포용성 확대를 위한 접근성 중심 설계</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-md border border-gray-100 transition-shadow text-center">
              <div className="mb-3 flex justify-center text-slate-600">
                <MarketingIcon name="scale" className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">신뢰와 표준</h3>
              <p className="text-gray-600">규제·행정 적합성, 데이터 신뢰성 확보</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-md border border-gray-100 transition-shadow text-center">
              <div className="mb-3 flex justify-center text-emerald-600">
                <MarketingIcon name="leaf" className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">지속 가능한 비즈니스</h3>
              <p className="text-gray-600">구독·데이터·파트너 기반의 확장성</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-md border border-gray-100 transition-shadow text-center">
              <div className="mb-3 flex justify-center text-primary-600">
                <MarketingIcon name="rocket" className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">글로벌 확장</h3>
              <p className="text-gray-600">고령화·다문화·토탈케어로그 기반 글로벌 시장 적용</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Expansion */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-700">
            DAL은 한국에서 검증된 표준을 아시아, 글로벌 고령화·다문화 시장으로 확장합니다.
          </p>
        </div>
      </section>

      {/* Our Culture (removed per investor focus) */}

      {/* Projects */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              주요 프로젝트
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              사회적 문제에 대한 해결책을 제공하며, 모든 사람이 동등하게 혜택을 누릴 수 있는 기회를 만들어냅니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.name}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <div className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                {project.href && (
                  <Link
                    href={project.href}
                    className="inline-block mt-5 text-sm font-semibold text-primary-600 hover:underline"
                  >
                    자세히 보기 →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              성장 과정
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              취약계층과 소외계층의 삶을 개선하고자 하는 깊은 관심에서 시작된 우리의 여정입니다.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary-600 to-secondary-600"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-2xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageClosingSection
        title="함께 이야기해요"
        description="플랫폼·서비스·협력에 관심이 있으시면 문의해 주세요."
        secondary={[{ label: '서비스 생태계 보기', href: '/services' }]}
      />

      <Footer />
    </div>
  )
}