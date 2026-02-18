import type { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '회사소개 - AI디지털케어로그 기반 데이터 인프라 기업 | 드림에이아이랩',
  description: 'DAL은 돌봄·의료·교육 데이터를 표준화하는 플랫폼 기업입니다. 5,700+ 발달장애 기관, 22,000+ 시니어 돌봄사업자 등 실제 시장 선점 현황과 성장 과정을 확인하세요.',
  keywords: '드림에이아이랩, 회사소개, AI디지털케어로그, 시장 선점, 표준화, 사회적가치, 투자, 혁신',
  openGraph: {
    title: '회사소개 - AI디지털케어로그로 표준을 만드는 드림에이아이랩',
    description: 'DAL은 자체 개발한 AI디지털케어로그로 의료·돌봄·교육 데이터를 통합해 개인 맞춤 케어를 제안하는 표준 플랫폼을 만듭니다. 사회적 문제 해결과 확장 가능한 비즈니스를 동시에 실현합니다.',
    url: 'https://dreamailab.com/about',
    siteName: '드림에이아이랩',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '드림에이아이랩 회사소개' }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '회사소개 - AI디지털케어로그로 표준을 만드는 드림에이아이랩',
    description: 'DAL은 자체 개발한 AI디지털케어로그로 의료·돌봄·교육 데이터를 통합해 개인 맞춤 케어를 제안하는 표준 플랫폼을 만듭니다. 사회적 문제 해결과 확장 가능한 비즈니스를 동시에 실현합니다.',
    images: ['/og-image.png'],
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
      title: '마음이AI 개발',
      description: '심리상담 AI 서비스 출시'
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

  const coreValues = [
    {
      title: '모두를 위한 기술',
      description: '취약계층과 소외계층의 삶을 개선하고자 하는 깊은 관심에서 시작된 우리의 여정은, 모든 사람이 기술적 장벽 없이 혜택을 누릴 수 있는 세상을 꿈꿉니다.',
      icon: '🤝'
    },
    {
      title: '사회적 포용성',
      description: '수화 번역 AI부터 발달장애 연구까지, 기술이 어떻게 사회적 포용성을 증진시킬 수 있는지 보여주며 실제로 사람들의 삶에 긍정적인 영향을 미칩니다.',
      icon: '❤️'
    },
    {
      title: '지속 가능한 혁신',
      description: '기술을 통해 사회적 가치를 창출하고, 더 나은 미래를 구축하는 데 전념하며, 기술과 인간이 조화롭게 공존할 수 있는 세상을 꿈꿉니다.',
      icon: '🌱'
    },
    {
      title: '평등한 기회',
      description: '모든 사람이 동등하게 혜택을 누릴 수 있는 기회를 만들어내며, 정보에 평등하게 접근하고 높은 삶의 질을 누릴 수 있도록 지원합니다.',
      icon: '⚖️'
    }
  ]

  const projects = [
    {
      name: '자람이 프로젝트',
      description: '발달장애·ADHD 케어 표준화를 목표로, 센터·병원·보호자·교사를 하나로 연결하는 공익 프로젝트입니다.',
      features: ['센터 행정 SaaS 표준화', '발달장애 학습 및 치료 연구', '행동·정서·교육·약물 데이터', '보호자·센터·병원 연결']
    },
    {
      name: '국제결혼 (글로벌 패밀리)',
      description: '국제결혼 정보회사·기관에 표준화된 행정·매칭 시스템을 제공하고, 결혼 전후 커플과 가족을 지원하는 통합 플랫폼입니다. 사기·불법을 AI로 예방하고, 정착·육아까지 연결합니다.',
      features: ['표준 행정/매칭 SaaS(B2B)', '사기·불법 예방 검증/가이드', '국가별 커뮤니티/정착·육아', '기관·정부 연계']
    },
    {
      name: '시니어앤라이프',
      description: '노인 돌봄과 재활을 위한 AI 플랫폼으로, 시니어 디지털케어로그를 통해 가정·기관·의료 기록을 통합하고 위험을 조기 탐지합니다.',
      features: ['복약/활력징후 분석', '치매/낙상 위험 예측', '가족 리포트 알림', '기관 대시보드']
    },
    {
      name: '의료헬스케어 (AI 주치의)',
      description: '맞춤형 의료 서비스·병원매칭·질병·약물 추적을 제공하며, 케어로그 빅데이터로 임상·신약 개발을 지원합니다.',
      features: ['진료/검사/복약 연동', '부작용/상호작용 경고', '영양·운동 추천', '만성질환/항암 리포트']
    }
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
              실제 시장에서 검증된 성과와 실행력으로<br />
              돌봄·의료·교육 데이터 표준화를 선도합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 실제 성과·시장 영향력 (DAL in Numbers) */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">실제 성과와 시장 영향력</h2>
            <p className="text-gray-600">현장에서 검증된 시장 선점 지표</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="rounded-2xl p-6 border border-gray-100 text-center shadow-sm">
              <div className="text-3xl font-extrabold text-gray-900 mb-1">5,700+</div>
              <div className="text-sm text-gray-600">발달장애 센터 (자람이)</div>
            </div>
            <div className="rounded-2xl p-6 border border-gray-100 text-center shadow-sm">
              <div className="text-3xl font-extrabold text-gray-900 mb-1">22,000+</div>
              <div className="text-sm text-gray-600">시니어 돌봄 기관 (시니어앤라이프)</div>
            </div>
            <div className="rounded-2xl p-6 border border-gray-100 text-center shadow-sm">
              <div className="text-3xl font-extrabold text-gray-900 mb-1">383만+</div>
              <div className="text-sm text-gray-600">발달장애 잠재 인구 (시장 규모)</div>
            </div>
            <div className="rounded-2xl p-6 border border-gray-100 text-center shadow-sm">
              <div className="text-3xl font-extrabold text-gray-900 mb-1">국내 최초</div>
              <div className="text-sm text-gray-600">4대 AI 플랫폼 (발달·시니어·의료·국제결혼)</div>
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
                이 기술은 ① 발달장애 케어 ‘자람이’, ② 노인 돌봄 ‘시니어앤라이프’, ③ 건강·질병 관리 ‘의료헬스케어(AI 주치의·항암·한방)’, ④ 사회문제 해결형 ‘국제결혼 플랫폼(글로벌 패밀리)’로 확장되고 있습니다. (국제결혼은 커뮤니티·매칭 중심으로 케어로그 직접 적용 없이 운영됩니다.)
              </p>
              <p className="text-lg text-gray-600">
                우리는 아무도 시도하지 못했던 영역을 표준화하여 신뢰를 얻고 있습니다. 축적된 데이터는 의료 연구·치매·항암·교육 혁신에 기여하며, 공공·NGO·연구기관과의 협력을 통해 사회적 임팩트를 극대화합니다.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">성장과 실행</h3>
                  <p className="text-gray-600 mb-6">
                    플랫폼 위 7개 도메인으로 확장 중이며, 표준화와 시장 선점을 동시에 추진합니다.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600 mb-2">7+</div>
                      <div className="text-gray-600">도메인 확장</div>
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
                      <div className="text-2xl font-bold text-secondary-600 mb-2">국내 최초</div>
                      <div className="text-gray-600">시장 선도 구조</div>
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
              <div className="text-3xl mb-3">📑</div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">데이터 표준화</h3>
              <p className="text-gray-600 text-sm">FHIR Schema 기반 데이터 표준화</p>
            </div>
            <div className="rounded-2xl p-6 shadow bg-gray-50 text-center">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">멀티모달 AI 분석</h3>
              <p className="text-gray-600 text-sm">행동·영상·텍스트·시계열 분석</p>
            </div>
            <div className="rounded-2xl p-6 shadow bg-gray-50 text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">맞춤 실행</h3>
              <p className="text-gray-600 text-sm">Care plan, Alert, Matching</p>
            </div>
            <div className="rounded-2xl p-6 shadow bg-gray-50 text-center">
              <div className="text-3xl mb-3">🔬</div>
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
              <div className="text-5xl mb-3">🌱</div>
              <h3 className="text-xl font-bold text-gray-900">자람이</h3>
              <p className="text-gray-600 mt-1 mb-4">발달장애 케어 표준화 플랫폼</p>
              <div><Link href="/services/jarame" className="text-blue-700 font-semibold hover:underline">자세히 보기 →</Link></div>
            </div>
            <div className="rounded-2xl p-6 shadow bg-white text-center">
              <div className="text-5xl mb-3">👴</div>
              <h3 className="text-xl font-bold text-gray-900">시니어앤라이프</h3>
              <p className="text-gray-600 mt-1 mb-4">국내 시니어돌봄 서비스의 표준</p>
              <div><Link href="/services/senior" className="text-blue-700 font-semibold hover:underline">자세히 보기 →</Link></div>
            </div>
            <div className="rounded-2xl p-6 shadow bg-white text-center">
              <div className="text-5xl mb-3">🩺</div>
              <h3 className="text-xl font-bold text-gray-900">헬스케어 플랫폼</h3>
              <p className="text-gray-600 mt-1 mb-4">AI 주치의·항암·한방 통합</p>
              <div><Link href="/services/healthcare" className="text-blue-700 font-semibold hover:underline">자세히 보기 →</Link></div>
            </div>
            <div className="rounded-2xl p-6 shadow bg-white text-center">
              <div className="text-5xl mb-3">🌍</div>
              <h3 className="text-xl font-bold text-gray-900">글로벌 패밀리</h3>
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
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">모두를 위한 기술</h3>
              <p className="text-gray-600">사회적 포용성 확대를 위한 접근성 중심 설계</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-md border border-gray-100 transition-shadow text-center">
              <div className="text-4xl mb-3">⚖️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">신뢰와 표준</h3>
              <p className="text-gray-600">규제·행정 적합성, 데이터 신뢰성 확보</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-md border border-gray-100 transition-shadow text-center">
              <div className="text-4xl mb-3">🌱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">지속 가능한 비즈니스</h3>
              <p className="text-gray-600">구독·데이터·파트너 기반의 확장성</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-md border border-gray-100 transition-shadow text-center">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">글로벌 확장</h3>
              <p className="text-gray-600">고령화·다문화·헬스케어 글로벌 시장 적용</p>
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

      {/* Final CTA */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">함께 더 큰 표준을 만듭니다</h2>
            <p className="text-xl mb-8 max-w-4xl mx-auto">DAL은 데이터와 AI로 인류가 풀지 못한 문제를 해결합니다. 투자자, 파트너, 연구기관과 함께 더 큰 표준을 만들어갑니다.</p>
            <p className="text-lg max-w-3xl mx-auto">비전과 기술이 맞닿는 곳에서, 사회적 약자를 돕는 서비스가 지속 가능한 비즈니스가 됩니다.</p>
          </div>
        </div>
      </section>

      {/* CTA Section - 투자/파트너/서비스 통일 */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            파트너십·투자와 함께 표준을 확장합니다
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            AI디지털케어로그 기반으로 하나의 플랫폼 위 도메인을 확장하고 있습니다. 함께 표준을 만들 파트너를 찾습니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              투자 문의
            </Link>
            <Link href="/business" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
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