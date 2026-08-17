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
    title: '회사소개 | 사람의 삶과 현장을 연결하는 AI 시스템 기업 드림에이아이랩',
    description: '드림에이아이랩이 존재하는 이유, 사람 중심 기술 철학, AI Digital Care Log 아키텍처와 산업별 제품을 만드는 방식을 소개합니다.',
    path: '/about',
    ogTitle: 'Dream AI Lab — 복잡성은 시스템이 흡수하고, 사람은 더 나은 선택에 집중하도록',
    ogDescription: '현실 문제를 연결되고 학습하는 AI 시스템으로 바꾸는 드림에이아이랩의 정체성과 철학.',
    ogImageAlt: '드림에이아이랩 회사소개와 사람 중심 AI 철학',
  }),
  keywords: ['드림에이아이랩', 'Dream AI Lab', '회사소개', 'AI 철학', 'AI Digital Care Log', 'AI디지털케어로그', '사람 중심 AI', '시스템 아키텍처'],
}

const philosophy: Array<{ title: string; description: string; decision: string; icon: MarketingIconName }> = [
  { title: '복잡성을 사람에게 전가하지 않습니다', description: '사용자가 기술과 제도를 먼저 배워야 하는 구조가 아니라, 시스템이 사용자의 상황과 의도를 이해하는 구조를 만듭니다.', decision: '쉬운 사용, 접근성, 설명 가능한 결과를 기능보다 먼저 봅니다.', icon: 'accessibility' },
  { title: '기록을 맥락과 다음 행동으로 연결합니다', description: '흩어진 데이터를 쌓는 데서 멈추지 않고 시간·환경·행동·반응을 연결해 지금 필요한 판단과 실행으로 전환합니다.', decision: '모든 제품은 기록 → 판단 → 실행 → 결과의 폐쇄루프를 가집니다.', icon: 'link' },
  { title: '특수한 현장에서 범용 구조를 발견합니다', description: '발달장애·시니어·다문화처럼 복잡성과 책임이 큰 분야에서 먼저 배우고, 검증된 구조를 다른 산업으로 전이합니다.', decision: '시장 크기보다 문제의 깊이와 구조적 재사용 가능성을 함께 봅니다.', icon: 'puzzle' },
  { title: '검증 가능한 변화만 확장합니다', description: '화려한 생성 결과보다 실제 업무에서 안전하게 작동하고, 누가 무엇을 바꿨는지 설명하며, 결과로 개선되는지를 중요하게 봅니다.', decision: '동의·권한·감사·복구·현장 검증을 상용화의 필수 조건으로 둡니다.', icon: 'shield' },
]

const buildLoop = [
  ['01', '현실 문제', '당사자와 현장의 단절·반복·판단 부담을 관찰합니다.'],
  ['02', '공통 구조', '상태·시간·행동·결과·피드백의 관계를 찾습니다.'],
  ['03', '범용 아키텍처', '데이터·AI·권한·업무 흐름을 재사용 가능한 구조로 만듭니다.'],
  ['04', '산업별 제품', '각 산업의 언어·제도·사용자 경험으로 다시 구체화합니다.'],
  ['05', '운영 결과', '실사용에서 생긴 오류·성과·변화를 다음 설계에 환류합니다.'],
]

const identity = [
  ['핵심 기술', 'AI Digital Care Log', '시간축 기록, 맥락 이해, 설명 가능한 실행, 결과 학습을 연결하는 공통 아키텍처'],
  ['현재 사업', '6개 산업 서비스', '발달·시니어·의료·교육·다문화 가족·웰니스의 실제 제품과 업무 흐름'],
  ['새로운 제작 방식', 'DAL Vibe Architect', '비개발자의 의도를 운영 가능한 소프트웨어로 번역하는 신규 바이브코딩 프로젝트'],
  ['장기 연구', 'Pet AI · Robot Vision', '현재 제품과 구분해 연구하는 관찰·상호작용·로봇 시각지능의 미래 방향'],
]

export default function AboutPage() {
  return (
    <div className="company-page">
      <Header />
      <CompanyPageHero
        eyebrow="Dream AI Lab · Who we are"
        title="사람의 삶과 현장의 복잡성을, 연결되고 학습하는 AI 시스템으로 바꿉니다"
        description={<p>드림에이아이랩은 앱의 수를 늘리는 회사가 아닙니다. 사람이 감당하던 기록·판단·연결의 복잡성을 시스템 안으로 흡수하고, 여러 산업의 실제 제품과 운영 구조로 구현하는 기술 기업입니다.</p>}
        badges={['People first', 'Architecture to execution', 'Evidence before scale', 'AI Digital Care Log']}
        actions={[{ label: '우리의 철학과 비전', href: '/vision' }, { label: '기술 구조 보기', href: '/technology', variant: 'secondary' }]}
      />
      <CompanyNarrativeNav current="/about" />

      <section className="company-section">
        <div className="company-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-primary-700">Why we exist</p>
            <h2 className="company-section-title mt-3">기술이 발전해도 삶의 문제는 여전히 단절되어 있습니다</h2>
            <p className="company-section-lead">가정·학교·병원·기관의 기록은 서로 이어지지 않고, 중요한 맥락은 사람의 기억과 반복 설명에 의존합니다. 소프트웨어를 만드는 과정조차 기술을 아는 사람에게만 열려 있습니다.</p>
          </div>
          <div className="rounded-3xl border border-blue-200 bg-blue-50 p-7 sm:p-9">
            <p className="text-sm font-bold uppercase tracking-wider text-primary-700">Our belief</p>
            <p className="mt-4 text-2xl font-black leading-relaxed text-slate-950 sm:text-3xl">복잡성은 시스템이 흡수하고,<br />사람은 더 나은 선택과 삶에 집중해야 합니다.</p>
            <p className="mt-5 leading-relaxed text-slate-700">이 믿음이 발달장애 기록에서 시작해 돌봄·의료·교육·가족·웰니스로 확장된 AI Digital Care Log와, 아이디어를 실제 소프트웨어로 바꾸는 DAL Vibe Architect를 관통합니다.</p>
          </div>
        </div>
      </section>

      <section className="company-section-muted" id="philosophy">
        <div className="company-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-primary-700">Our philosophy</p>
            <h2 className="company-section-title mt-3">우리가 제품을 판단하는 네 가지 원칙</h2>
            <p className="company-section-lead">철학은 선언문이 아니라 어떤 기능을 만들고, 무엇을 출시하지 않을지 결정하는 기준입니다.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {philosophy.map((item) => (
              <article key={item.title} className="company-card">
                <MarketingIcon name={item.icon} className="h-8 w-8 text-primary-700" />
                <h3 className="mt-5 text-xl font-black text-slate-950">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{item.description}</p>
                <p className="mt-5 border-l-2 border-secondary-500 pl-4 text-sm font-semibold leading-relaxed text-slate-700">{item.decision}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="company-section">
        <div className="company-container">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-primary-700">How we build</p>
            <h2 className="company-section-title mt-3">현실 문제에서 아키텍처를 만들고, 다시 제품과 결과로 내려갑니다</h2>
          </div>
          <ol className="mt-10 grid gap-4 lg:grid-cols-5">
            {buildLoop.map(([step, title, description]) => (
              <li key={step} className="company-card">
                <span className="text-sm font-black text-primary-700">{step}</span>
                <h3 className="mt-3 text-lg font-black text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="company-section-muted">
        <div className="company-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-primary-700">Company today</p>
            <h2 className="company-section-title mt-3">하나의 정체성, 서로 다른 실행 축</h2>
            <div className="mt-8 space-y-4">
              {identity.map(([label, title, description]) => (
                <div key={title} className="company-card sm:grid sm:grid-cols-[130px_190px_1fr] sm:items-start sm:gap-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary-700">{label}</p>
                  <h3 className="mt-2 font-black text-slate-950 sm:mt-0">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:mt-0">{description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-slate-950 p-7 text-white sm:p-9">
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-300">Technology leadership</p>
            <h2 className="mt-3 text-2xl font-black">시스템 아키텍트형 기술 리더십</h2>
            <p className="mt-5 leading-relaxed text-slate-300">CTO 정해성은 서로 다른 현실 문제에서 공통 구조를 발견하고, 이를 AI·데이터 아키텍처로 추상화한 뒤 산업별 제품으로 구현하는 기술 설계를 이끌고 있습니다.</p>
            <p className="mt-4 leading-relaxed text-slate-400">드림에이아이랩은 개인에 대한 수사보다 공개된 설계·개발 이력, 제품의 실제 운영과 검증 가능한 결과를 중심으로 기술 리더십을 설명합니다.</p>
            <Link href="/research/jung-haesung" className="mt-7 inline-flex font-bold text-cyan-300 underline underline-offset-4">기술 프로필 보기 →</Link>
          </div>
        </div>
      </section>

      <PageClosingSection title="우리가 어디로 가는지 이어서 확인해 보세요" description="철학은 비전으로, 비전은 기술과 서비스의 구체적인 선택으로 이어집니다." primary={{ label: '철학·비전 보기', href: '/vision' }} secondary={[{ label: '서비스 전체 보기', href: '/services' }]} />
      <Footer />
    </div>
  )
}
