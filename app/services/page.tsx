import type { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PageClosingSection from '../../components/PageClosingSection'
import Link from 'next/link'
import { absoluteUrl, buildBreadcrumbJsonLd, buildPageMetadata, buildWebPageJsonLd } from '../../lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: '서비스 생태계 허브 - AI디지털케어로그 플랫폼 인프라 | 드림에이아이랩',
  description:
    'DAL은 다수의 앱을 나열하는 페이지가 아니라, 하나의 AI디지털케어로그 인프라 위에서 발달·돌봄·의료·교육·웰니스·가족 정착 도메인이 연결·확장되는 구조를 설명하는 허브입니다.',
  path: '/services',
  ogTitle: '서비스 생태계 허브 - 드림에이아이랩',
  ogDescription: 'AI디지털케어로그 기반 6개 도메인이 어떻게 연결되고 확장되는지 한 페이지에서 확인하세요.',
  ogImageAlt: '드림에이아이랩 서비스 포트폴리오',
})

const servicesPageUrl = absoluteUrl('/services')
const servicesJsonLd = buildWebPageJsonLd({
  name: '서비스 생태계 허브',
  description: 'AI 디지털케어로그 기반 6개 도메인 서비스 연결 구조',
  url: servicesPageUrl,
})
const servicesBreadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: '홈', url: absoluteUrl('/') },
  { name: '서비스', url: servicesPageUrl },
])

const services = [
  {
    name: '자람이',
    status: 'Commercial',
    mark: 'JR',
    domain: '발달장애',
    summary: '가정·학교·센터·병원에서 끊기기 쉬운 발달 관찰·치료 데이터를 하나의 흐름으로 잇는 케어 인프라',
    url: '/services/jarame',
    externalUrl: 'https://jarame.or.kr',
    oneLiner: '치료·학습·행동 기록을 같은 기준으로 연결해 개입 품질을 높입니다.',
    value: '기관 운영 효율 + 보호자 신뢰 + 장기 실사용 데이터 축적',
  },
  {
    name: '시니어앤라이프',
    status: 'Commercial Beta',
    mark: 'SL',
    domain: '시니어·노인돌봄',
    summary: '재가·시설·병원·가족 사이에서 흩어지는 시니어 돌봄·생활·행정 정보를 하나의 흐름으로 잇는 케어 인프라',
    url: '/services/senior',
    externalUrl: 'https://seniorandlife.com',
    oneLiner: '활동·복약·위험 신호를 같은 기록 구조로 연결해 선제 대응을 돕습니다.',
    value: '고령화 구조적 수요 + 제도권 연계 + 장기 실사용 데이터 축적',
  },
  {
    name: '토탈케어로그',
    status: 'Alpha',
    mark: 'TC',
    domain: '의료',
    summary: '병원 밖에서 끊기는 증상·복약·생활 데이터를 다음 의료로 연결하는 헬스케어 인프라',
    url: '/services/healthcare',
    externalUrl: 'https://totalcarelog.com',
    oneLiner: '문진·복약·생활기록을 통합해 진료 전후 연속 관리를 구현합니다.',
    value: 'B2B2C 확장 + 병원 연계 + 실사용 데이터 축적',
  },
  {
    name: '에듀케어로그',
    status: 'Pilot',
    mark: 'ED',
    domain: '교육',
    summary: '학생의 오답이 아니라 멈춘 지점을 기록하고, 다음 학습으로 이어주는 교육 운영 인프라',
    url: '/services/educarelog',
    externalUrl: '#',
    oneLiner: '학습·행동·평가 기록으로 맞춤형 학습 경로를 설계합니다.',
    value: 'B2G/B2B/B2C 동시 확장 + 교육 데이터 표준화',
  },
  {
    name: '글로벌커플케어',
    status: 'Commercial',
    mark: 'GC',
    domain: '글로벌커플케어',
    summary: '국제결혼·다문화 가족 영역의 정보·절차·신뢰를 하나의 기준으로 연결하는 글로벌 가족 인프라',
    url: '/services/marriage',
    externalUrl: 'https://globalcouplecare.com',
    oneLiner: '결혼 전 정보 비대칭을 줄이고 결혼 후 정착 데이터를 이어줍니다.',
    value: '신뢰 기반 거래 + 다문화 정책·공공 연계 확장',
  },
  {
    name: '베지케어',
    status: 'Beta',
    mark: 'VG',
    domain: '라이프스타일',
    summary: '식습관·영양·건강 데이터를 실행과 소비·환경 행동까지 연결하는 웰니스 인프라',
    url: '/services/veggie',
    externalUrl: 'https://veggie.care',
    oneLiner: '식단·영양·외식·커뮤니티 데이터를 행동 변화로 이어줍니다.',
    value: 'ESG·커머스·헬스케어 연동 가능한 웰니스 확장축',
  },
]

const connectionMap = [
  '글로벌커플케어 → 정착 이후 토탈케어로그·에듀케어로그 연계',
  '자람이 → 성장·건강 연속 관리 관점에서 토탈케어로그·에듀케어로그 연계',
  '시니어앤라이프 → 만성질환·의료 실행 관점에서 토탈케어로그 연계',
  '베지케어 → 식습관 데이터 기반 예방 관리 관점에서 토탈케어로그 연계',
]

const expansionPoints = [
  {
    title: 'VC 관점: 플랫폼 확장성',
    description:
      '하나의 기술 구조를 여러 시장에 반복 적용할 수 있는 플랫폼 확장성을 지향합니다. 도메인별로 요구사항은 달라도, 기록·연계·운영의 골격은 같은 인프라 위에서 확장 가능합니다.',
  },
  {
    title: '공공 관점: 사회 서비스 데이터 연결',
    description:
      '분리된 사회 서비스 데이터를 연결해 취약계층·가족·지역사회 문제 해결에 기여할 수 있도록 설계합니다. 지자체·기관과의 시범·연계를 전제로 한 정합성을 확보합니다.',
  },
  {
    title: 'R&D 관점: 표준화와 실증 확장',
    description:
      '도메인별 케어로그 데이터를 표준화해 연구·실증·정책 과제로 확장 가능합니다. 실사용 데이터가 모델·정책 근거로 환류되는 구조를 지향합니다.',
  },
  {
    title: 'ESG 관점: 사회적 가치와 지속가능성',
    description:
      '돌봄, 건강, 교육, 식습관, 다문화 가족 지원을 통해 사회적 가치와 지속가능성을 동시에 강화하는 구조를 지향합니다. 사업성과 임팩트를 같은 플랫폼 논리로 설명합니다.',
  },
]

const noahNotice = {
  url: '/services/finance',
  externalUrl: 'https://noahailabs.com',
}

export default function ServicePortfolio() {
  const totalServices = services.length

  const itemList = services.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Service',
      name: s.name,
      url: s.url && s.url !== '#' ? s.url : undefined,
    },
  }))

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesBreadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Dream AI Lab 서비스 포트폴리오',
            itemListElement: itemList,
          }),
        }}
      />

      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/15 text-white/95 mb-6">
              DAL Platform Hub
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              하나의 AI디지털케어로그로
              <br />
              삶의 여러 문제를 연결합니다
            </h1>
            <div className="max-w-3xl mx-auto mb-8 rounded-2xl border border-white/25 bg-white/10 px-6 py-5 text-left sm:text-center">
              <p className="text-lg md:text-xl font-semibold text-white leading-relaxed">
                DAL은 서비스를 여러 개 운영하는 회사가 아닙니다.
              </p>
              <p className="text-lg md:text-xl font-semibold text-white leading-relaxed mt-3">
                하나의 AI디지털케어로그로 사람의 삶 전체를 도메인별로 연결하는 플랫폼 인프라입니다.
              </p>
            </div>
            <p className="text-lg md:text-xl max-w-4xl mx-auto text-white/90 mb-4 leading-relaxed">
              발달, 돌봄, 의료, 교육, 식습관, 가족 정착은 서로 분리된 문제가 아닙니다. DAL은 이 흐름을 하나의 기록·판단·연계 구조로
              연결합니다.
            </p>
            <p className="text-base md:text-lg max-w-3xl mx-auto text-white/85 mb-10 leading-relaxed">
              단순한 앱·기록의 나열이 아니라, 하나의 데이터 인프라 위에서 도메인끼리 이어지도록 설계합니다.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-center">
              <div className="bg-white/20 rounded-lg p-4 border border-white/30">
                <div className="text-2xl font-bold">1</div>
                <div className="text-sm text-white/80">통합 플랫폼</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4 border border-white/30">
                <div className="text-2xl font-bold">{totalServices}</div>
                <div className="text-sm text-white/80">핵심 도메인</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4 border border-white/30">
                <div className="text-2xl font-bold">∞</div>
                <div className="text-sm text-white/80">확장 가능성</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why multi domain */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">왜 DAL은 여러 서비스를 동시에 하나요?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              사람의 삶은 발달, 교육, 의료, 돌봄, 식습관, 가족 문제로 나뉘어 존재하지 않습니다. 하지만 현재 사회 시스템은 이 문제들을
              각각 다른 기관, 다른 앱, 다른 기록으로 분리해 처리합니다.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              DAL의 서비스 생태계는 이 분리된 문제들을 하나의 AI디지털케어로그 구조로 다시 연결하기 위한 도메인 확장입니다. 같은 사람의
              연속 데이터를 인프라 관점에서 통합합니다.
            </p>
          </div>
        </div>
      </section>

      {/* platform structure */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="text-center mb-8 max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">DAL 플랫폼 확장 구조</h2>
              <p className="text-gray-600">AI디지털케어로그 위에 6개 도메인이 올라가는 구조입니다.</p>
              <p className="text-gray-700 leading-relaxed">
                DAL은 하나의 AI디지털케어로그 표준 위에 사람의 삶에서 반복되는 주요 문제 영역을 도메인화해 확장합니다. 기술은 하나지만,
                적용되는 산업은 발달·돌봄·의료·교육·웰니스·가족 정착으로 계속 넓어지는 구조입니다.
              </p>
            </div>
            <div className="flex flex-col items-center mb-6">
              <div className="bg-primary-600 text-white rounded-xl px-8 py-4 font-bold text-lg">DAL Platform</div>
              <div className="my-2 text-gray-400">↓</div>
              <div className="bg-primary-100 text-primary-900 rounded-xl px-8 py-3 font-semibold">AI디지털케어로그</div>
              <div className="my-2 text-gray-400">↓</div>
              <div className="text-sm text-gray-500 font-medium">6개 핵심 도메인</div>
            </div>
            <div className="w-full max-w-5xl mb-8 rounded-2xl overflow-hidden border border-blue-100 shadow-sm">
              <picture>
                <source media="(max-width: 768px)" srcSet="/images/services/platform-hub-mobile.svg" />
                <img src="/images/services/platform-hub.svg" alt="DAL 플랫폼 허브 구조 시각화" className="w-full h-auto object-contain" loading="lazy" decoding="async" />
              </picture>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {services.map((s) => (
                <span
                  key={s.name}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700"
                >
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] font-bold">
                    {s.mark}
                  </span>
                  <span>{s.domain}</span>
                </span>
              ))}
            </div>
            <Link href="/technology" className="text-primary-600 font-semibold hover:text-primary-700 text-sm">
              기술 구조 상세 보기 →
            </Link>
          </div>
        </div>
      </section>

      <main className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* domain service */}
          <Section
            title="도메인별 서비스"
            subtitle="각 이름은 서비스 브랜드이고, 역할은 삶의 영역을 담당하는 도메인 인프라입니다. 독립 제품이 아니라 같은 AI디지털케어로그 골격 위의 확장 축으로 이해할 수 있습니다."
            badge="6 Core Domains"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <ServiceSummaryCard key={service.name} service={service} />
              ))}
            </div>
          </Section>

          {/* connection map */}
          <Section
            title="서비스 간 연결 지도"
            subtitle="DAL 도메인은 실제 사용자 여정에서 서로 이어집니다."
            badge="Connected Journey"
          >
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
              <div className="max-w-4xl mx-auto text-center space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
                <p>
                  같은 사람은 하나의 서비스 안에만 머물지 않습니다. 자람이의 발달 기록은 교육과 의료로 이어질 수 있고, 시니어의 돌봄
                  기록은 의료와 식습관으로 이어질 수 있으며, 글로벌커플케어의 정착 문제는 교육·의료·가족 케어로 확장될 수 있습니다.
                </p>
                <p className="font-medium text-gray-800">
                  DAL의 강점은 개별 서비스 수가 아니라, 각 도메인의 기록이 같은 구조 위에서 연결될 수 있다는 점입니다.
                </p>
              </div>
              <div className="w-full rounded-xl overflow-hidden border border-indigo-100 mb-6">
                <picture>
                  <source media="(max-width: 768px)" srcSet="/images/services/service-flow-mobile.svg" />
                  <img src="/images/services/service-flow.svg" alt="서비스 연결 흐름도" className="w-full h-auto object-contain" loading="lazy" decoding="async" />
                </picture>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {connectionMap.map((line) => (
                  <div key={line} className="bg-white rounded-lg border border-gray-200 p-4 text-sm text-gray-700">
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* expansion */}
          <Section
            title="시장/비즈니스 확장성과 외부 설득 포인트"
            subtitle="VC·공공·R&D·ESG 관점에서 한 기술이 여러 시장·사회 과제로 확장되는 논리를 정리합니다."
            badge="Expansion Logic"
          >
            <div className="w-full rounded-xl overflow-hidden border border-blue-100 mb-6">
              <picture>
                <source media="(max-width: 768px)" srcSet="/images/services/expansion-pillars-mobile.svg" />
                <img src="/images/services/expansion-pillars.svg" alt="플랫폼 확장 4대 축" className="w-full h-auto object-contain" loading="lazy" decoding="async" />
              </picture>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {expansionPoints.map((point) => (
                <div
                  key={point.title}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border border-gray-200 p-6"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{point.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Research & Future Vision — not a commercial domain */}
          <Section
            title="Research & Future Vision"
            subtitle="상용 서비스가 아닌 연구·기술 개발·장기 비전 영역입니다. 6 Core Domains과 구분됩니다."
            badge="Research · Not a Product"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 to-indigo-50 p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-5">
                  <div className="shrink-0 w-14 h-14 rounded-full bg-violet-600 text-white flex items-center justify-center font-bold text-lg">
                    PA
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <h3 className="text-xl font-bold text-gray-900">Pet AI Digital Care Log</h3>
                      <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold bg-violet-100 text-violet-800">
                        Research
                      </span>
                      <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800">
                        Technology Development
                      </span>
                      <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800">
                        Future Vision
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed mb-4">
                      반려 삶 전체(행동 · 감정 · 환경 · 생활 추천)를 AI가 이해하는 Life Companion
                      Intelligence 연구입니다. 병원은 필요할 때만 연결되는 선택지일 뿐이며, 상용
                      서비스·출시 예정이 아닙니다.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href="/research/pet-ai"
                        className="inline-flex items-center justify-center rounded-lg bg-violet-700 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-800"
                      >
                        연구 상세 보기
                      </Link>
                      <Link
                        href="/research"
                        className="inline-flex items-center justify-center rounded-lg border border-violet-300 bg-white px-4 py-2 text-sm font-semibold text-violet-800 hover:bg-violet-50"
                      >
                        Research 허브
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800 to-zinc-900 text-white p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-5">
                  <div className="shrink-0 w-14 h-14 rounded-full bg-amber-500 text-slate-900 flex items-center justify-center font-bold text-lg">
                    RV
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <h3 className="text-xl font-bold text-white">Robot Vision</h3>
                      <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/15 text-white">
                        Research
                      </span>
                      <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-200">
                        Future Vision
                      </span>
                    </div>
                    <p className="text-sm text-white/80 leading-relaxed mb-4">
                      AI Digital Care Log를 로봇의 AI Brain으로 확장하는 도메인 횡단 연구입니다. 자람이·
                      시니어앤라이프·토탈케어로그·에듀케어로그·베지케어·Pet AI의 데이터와 AI Core를 재사용하며,
                      상용 로봇 제품이 아닙니다.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href="/research/robot-vision"
                        className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-400"
                      >
                        연구 상세 보기
                      </Link>
                      <Link
                        href="/research"
                        className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                      >
                        Research 허브
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* NoahAI: 생태계 흐름을 끊지 않도록 하단 축소 안내 */}
          <div className="rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-gray-600">
            <p className="leading-relaxed md:pr-6">
              <span className="font-semibold text-gray-800">별도 운영</span> — NoahAI는 DAL 생태계와 기술 철학을 공유하지만, 현재는
              별도 법인과 별도 브랜드로 운영되는 금융 AI 서비스입니다. DAL 핵심 6개 도메인 라인업과 혼동되지 않도록 구분해 두었습니다.
            </p>
            <div className="flex flex-wrap gap-2 shrink-0">
              <Link
                href={noahNotice.url}
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-xs font-semibold text-gray-800 hover:bg-gray-100"
              >
                이전 안내
              </Link>
              <a
                href={noahNotice.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-xs font-semibold text-gray-800 hover:bg-gray-100"
              >
                Noah AI Labs
              </a>
            </div>
          </div>
        </div>
      </main>

      <PageClosingSection
        title="관심 있는 서비스가 있으신가요?"
        description="도입·이용·협력 문의는 서비스별 페이지나 문의 양식을 이용해 주세요."
        primary={{ label: '문의하기', href: '/contact' }}
      />

      <Footer />
    </div>
  )
}

function Section({
  title,
  subtitle,
  children,
  badge,
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

type ServiceItem = (typeof services)[number]

function ServiceSummaryCard({ service }: { service: ServiceItem }) {
  const statusStyles: Record<string, { color: string; label: string }> = {
    Commercial: { color: 'bg-emerald-100 text-emerald-900', label: 'Service Status: Commercial (상용)' },
    'Commercial Beta': { color: 'bg-teal-100 text-teal-900', label: 'Service Status: Commercial Beta (상용베타)' },
    Beta: { color: 'bg-blue-100 text-blue-800', label: 'Service Status: Beta (베타)' },
    Alpha: { color: 'bg-amber-100 text-amber-900', label: 'Service Status: Alpha (알파)' },
    Pilot: { color: 'bg-violet-100 text-violet-800', label: 'Service Status: Pilot (파일럿)' },
    'In Development': { color: 'bg-gray-100 text-gray-800', label: 'Service Status: In Development' },
  }
  const statusMeta = statusStyles[service.status] ?? {
    color: 'bg-gray-100 text-gray-800',
    label: `Service Status: ${service.status}`,
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600 text-white text-sm font-bold tracking-wide">
            {service.mark}
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
            <p className="text-xs text-gray-500 mt-1">{service.domain}</p>
          </div>
        </div>
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${statusMeta.color}`}>
          {statusMeta.label}
        </span>
      </div>

      <p className="text-sm font-medium text-gray-800 mb-3 leading-relaxed">{service.summary}</p>
      <p className="text-sm text-gray-600 mb-3 leading-relaxed">- {service.oneLiner}</p>
      <p className="text-sm text-gray-600 mb-5 leading-relaxed">- {service.value}</p>

      <div className="flex gap-3">
        <Link
          href={service.url}
          className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
        >
          상세 보기
        </Link>
        {service.externalUrl && service.externalUrl !== '#' && (
          <a
            href={service.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-600 text-blue-600 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors"
          >
            서비스 이용
          </a>
        )}
      </div>
    </div>
  )
}
