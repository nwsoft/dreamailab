import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CompanyPageHero from '../../components/CompanyPageHero'
import CompanyNarrativeNav from '../../components/CompanyNarrativeNav'
import PageClosingSection from '../../components/PageClosingSection'
import { MarketingIcon, type MarketingIconName } from '../../components/MarketingIcon'
import { buildPageMetadata } from '../../lib/seo'

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: '회사소개 | 사회적 문제에서 시작한 사람 중심 AI 기업 드림에이아이랩',
    description: '자람이 공익 프로젝트와 수화 번역 AI에서 시작해 발달장애·돌봄·의료·교육의 사회적 문제를 데이터와 AI로 해결해 온 드림에이아이랩의 창업 이유와 여정을 소개합니다.',
    path: '/about',
    ogTitle: 'Dream AI Lab — 기술의 힘으로 사회적 문제를 해결하고 삶의 질을 높입니다',
    ogDescription: '취약계층과 소외된 현장의 삶을 개선하려는 관심에서 시작한 드림에이아이랩의 철학, 역사와 현재 사업.',
    ogImageAlt: '드림에이아이랩 회사소개와 사람 중심 기술 철학',
  }),
  keywords: ['드림에이아이랩', 'Dream AI Lab', '회사소개', '사회적 문제 해결', '사람 중심 AI', '자람이', '수화 번역 AI', '발달장애 AI', 'AI디지털케어로그'],
}

const journey = [
  ['2022', '자람이 공익 프로젝트', '취약계층 지원과 발달장애 가족·센터·학교의 단절된 기록 문제를 해결하는 일에서 출발했습니다.'],
  ['2022', '수화 번역 AI 개발', '청각장애인의 소통 장벽을 낮추며 기술이 사회적 포용에 기여하는 방법을 실험했습니다.'],
  ['2023', '발달장애·ADHD AI 연구', '행동·정서·교육·치료 데이터를 통해 개인의 변화와 맥락을 이해하는 연구를 확장했습니다.'],
  ['2024', '의료 AI와 DAL 사업 구조', '심리·정신건강, 노인질환·치매, 의료·항암 등 더 넓은 사회적 난제로 기술 적용을 확장했습니다.'],
  ['2025', 'AI Digital Care Log', '삶의 기록을 시간축으로 연결하고 AI 판단·실행·결과 학습으로 이어지는 공통 기술 아키텍처를 정립했습니다.'],
  ['현재', '산업별 제품과 새로운 연구', '돌봄·의료·교육·가족·웰니스 서비스를 사업화하고, 소프트웨어 창작과 Pet AI·Robot Vision은 별도 서비스·연구로 확장합니다.'],
]

const philosophy: Array<{ title: string; description: string; practice: string; icon: MarketingIconName }> = [
  { title: '모두를 위한 기술', description: '기술을 가장 필요로 하는 사람이 기술적 장벽 때문에 다시 배제되지 않는 세상을 만듭니다.', practice: '쉬운 사용, 접근성, 설명 가능한 결과를 설계의 출발점으로 둡니다.', icon: 'handshake' },
  { title: '사회적 포용성', description: '취약계층과 소외된 현장의 문제를 외면하지 않고, 실제 삶에 긍정적인 변화를 만드는 일부터 시작합니다.', practice: '당사자·가족·현장 전문가의 경험과 필요를 제품 의사결정에 반영합니다.', icon: 'heart' },
  { title: '평등한 기회', description: '부·지역·환경의 차이를 넘어 누구나 필요한 의료·돌봄·교육과 정보에 접근할 수 있어야 합니다.', practice: '접근 가능성과 정보의 연속성을 기능이나 시장 규모보다 먼저 검토합니다.', icon: 'scale' },
  { title: '지속 가능한 혁신', description: '일회성 기술 시연이 아니라 현장·연구·정책·서비스가 서로 개선되는 선순환을 지향합니다.', practice: '실사용 결과와 사회적 영향을 확인하고 검증된 변화만 확장합니다.', icon: 'trend' },
]

const realization = [
  ['01', '사회적 문제에서 시작', '발달장애·노인질환·치매·의료·교육처럼 도움이 크지만 해결이 어려운 문제를 선택합니다.'],
  ['02', '현장을 데이터로 이해', '가정·학교·병원·기관에 흩어진 기록을 연결해 개인과 상황의 맥락을 이해합니다.'],
  ['03', 'AI로 판단과 행동을 지원', 'AI가 사람을 대체하는 것이 아니라 더 나은 판단과 돌봄·교육·치료를 돕도록 설계합니다.'],
  ['04', '결과를 다시 현장에 환류', '사용 결과를 다음 서비스 개선과 연구·정책 근거로 돌려보내 지속 가능한 변화를 만듭니다.'],
]

const companyToday = [
  ['핵심 기술', 'AI Digital Care Log', '회사 미션을 제품과 현장에서 구현하는 데이터·AI 아키텍처'],
  ['현재 사업', '6개 산업 서비스', '발달·시니어·의료·교육·다문화 가족·웰니스의 문제를 해결하는 제품'],
  ['신규 서비스', 'DAL Vibe Architect', '회사 철학을 대체하지 않는 별도 바이브코딩·소프트웨어 창작 프로젝트'],
  ['미래 연구', 'Pet AI · Robot Vision', '현재 사업과 구분해 탐색하는 장기 연구 방향'],
]

export default function AboutPage() {
  return (
    <div className="company-page">
      <Header />
      <CompanyPageHero
        eyebrow="Dream AI Lab · Why we began"
        title="기술의 힘으로 사회적 문제를 해결하고, 삶의 질을 높이기 위해 시작했습니다"
        description={<p>드림에이아이랩은 취약계층과 소외된 현장의 삶을 개선하려는 관심에서 출발했습니다. 기술적 진보 자체보다 그 기술이 누구의 삶을 어떻게 바꾸는지를 먼저 묻습니다.</p>}
        badges={['Technology for people', 'Social inclusion', 'Equal opportunity', 'Sustainable impact']}
        actions={[{ label: '철학과 비전', href: '/vision' }, { label: '현재 서비스', href: '/services', variant: 'secondary' }]}
      />
      <CompanyNarrativeNav current="/about" />

      <section className="company-section">
        <div className="company-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-primary-700">Our origin</p>
            <h2 className="company-section-title mt-3">가장 도움이 필요한 사람의 문제에서 시작했습니다</h2>
            <p className="company-section-lead">자람이 공익 프로젝트, 수화 번역 AI, 발달장애·ADHD 연구는 서로 다른 일이 아니었습니다. 모두 기존 시스템에서 충분히 이해받거나 연결되지 못한 사람의 삶을 기술로 돕기 위한 시도였습니다.</p>
          </div>
          <div className="rounded-3xl border border-blue-200 bg-blue-50 p-7 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-wider text-primary-700">Our belief</p>
            <p className="mt-4 text-2xl font-black leading-relaxed text-slate-950 sm:text-3xl">누구나, 어디서나,<br />동등한 기회를 누릴 수 있어야 합니다.</p>
            <p className="mt-5 leading-relaxed text-slate-700">AI디지털케어로그와 현재의 서비스들은 이 믿음을 실현하기 위해 만들어진 기술과 제품입니다. 기술은 목적이 아니라 사람의 삶을 개선하기 위한 수단입니다.</p>
          </div>
        </div>
      </section>

      <section className="company-section-muted">
        <div className="company-container">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-primary-700">Our journey</p>
            <h2 className="company-section-title mt-3">공익 프로젝트에서 AI 데이터 인프라 기업으로</h2>
            <p className="company-section-lead">회사의 현재 기술과 사업은 처음의 문제의식이 현장 경험과 연구를 거치며 확장된 결과입니다.</p>
          </div>
          <ol className="mt-10 grid gap-4 lg:grid-cols-2">
            {journey.map(([year, title, description]) => (
              <li key={`${year}-${title}`} className="company-card grid gap-3 sm:grid-cols-[72px_170px_1fr] sm:items-start">
                <span className="font-black text-primary-700">{year}</span>
                <h3 className="font-black text-slate-950">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="company-section" id="philosophy">
        <div className="company-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-primary-700">Our philosophy</p>
            <h2 className="company-section-title mt-3">처음부터 지켜온 네 가지 철학</h2>
            <p className="company-section-lead">새로운 사업과 기술은 이 철학에서 출발해야 하며, 이 철학을 회사의 목적과 바꾸지 않습니다.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {philosophy.map((item) => (
              <article key={item.title} className="company-card">
                <MarketingIcon name={item.icon} className="h-8 w-8 text-primary-700" />
                <h3 className="mt-5 text-xl font-black text-slate-950">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{item.description}</p>
                <p className="mt-5 border-l-2 border-secondary-500 pl-4 text-sm font-semibold leading-relaxed text-slate-700">실행 기준 · {item.practice}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="company-section-muted">
        <div className="company-container">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-primary-700">From purpose to technology</p>
            <h2 className="company-section-title mt-3">미션을 기술과 제품으로 구현합니다</h2>
            <p className="company-section-lead">AI Digital Care Log는 회사의 존재 이유를 대신하는 구호가 아니라, 그 미션을 실제 현장에서 구현하기 위해 만든 핵심 기술입니다.</p>
          </div>
          <ol className="mt-10 grid gap-4 lg:grid-cols-4">
            {realization.map(([step, title, description]) => (
              <li key={step} className="company-card">
                <span className="text-sm font-black text-primary-700">{step}</span>
                <h3 className="mt-3 text-lg font-black text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="company-section">
        <div className="company-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-primary-700">Company today</p>
            <h2 className="company-section-title mt-3">하나의 철학, 구분된 기술·사업·연구</h2>
            <div className="mt-8 space-y-4">
              {companyToday.map(([label, title, description]) => (
                <div key={title} className="company-card sm:grid sm:grid-cols-[120px_180px_1fr] sm:items-start sm:gap-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary-700">{label}</p>
                  <h3 className="mt-2 font-black text-slate-950 sm:mt-0">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:mt-0">{description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-slate-950 p-7 text-white sm:p-9">
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-300">Technology leadership</p>
            <h2 className="mt-3 text-2xl font-black">사회적 문제를 시스템으로 구현하는 기술 리더십</h2>
            <p className="mt-5 leading-relaxed text-slate-300">CTO 정해성은 발달장애·돌봄·의료 등 현실의 문제에서 공통 구조를 발견하고, 이를 AI·데이터 아키텍처와 산업별 제품으로 구현하는 기술 설계를 이끌고 있습니다.</p>
            <p className="mt-4 leading-relaxed text-slate-400">기술 리더십은 개인에 대한 수사가 아니라 공개된 개발 이력, 실제 제품과 현장 결과를 중심으로 설명합니다.</p>
            <Link href="/research/jung-haesung" className="mt-7 inline-flex font-bold text-cyan-300 underline underline-offset-4">기술 프로필 보기 →</Link>
          </div>
        </div>
      </section>

      <PageClosingSection title="처음의 문제의식을 실제 변화로 이어갑니다" description="회사의 철학은 AI Digital Care Log와 현재 서비스에서 구체적인 기술·제품·사업으로 구현됩니다." primary={{ label: '철학·비전 보기', href: '/vision' }} secondary={[{ label: '서비스 전체 보기', href: '/services' }]} />
      <Footer />
    </div>
  )
}
