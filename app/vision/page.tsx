import type { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CompanyPageHero from '../../components/CompanyPageHero'
import CompanyNarrativeNav from '../../components/CompanyNarrativeNav'
import PageClosingSection from '../../components/PageClosingSection'
import { MarketingIcon, type MarketingIconName } from '../../components/MarketingIcon'
import { buildPageMetadata } from '../../lib/seo'

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: '철학·비전 | 누구나 동등한 기회를 누리는 세상 - 드림에이아이랩',
    description: '기술의 힘으로 사회적 문제를 해결하고 삶의 질을 높이며, 누구나 어디서나 동등한 의료·돌봄·교육의 기회를 누리는 세상을 만드는 드림에이아이랩의 미션과 비전입니다.',
    path: '/vision',
    ogTitle: 'Dream AI Lab Vision — 누구나, 어디서나, 동등한 기회를 누리는 세상',
    ogDescription: '취약계층과 소외된 현장의 삶을 개선하고 데이터와 AI로 사회적 난제를 해결하는 드림에이아이랩의 철학과 약속.',
    ogImageAlt: '드림에이아이랩 철학과 동등한 기회의 비전',
  }),
  keywords: ['드림에이아이랩 비전', '사회적 문제 해결', '동등한 기회', '사회적 포용성', '삶의 질 향상', '사람을 향한 기술', 'AI디지털케어로그'],
}

const visionPillars: Array<{ title: string; description: string; practice: string; icon: MarketingIconName }> = [
  { title: '동등한 기회', description: '부·지역·환경의 차이를 넘어 누구나 필수적인 의료·돌봄·교육과 정보에 접근할 수 있어야 합니다.', practice: '접근하기 어려운 사람과 현장을 제품 설계의 첫 사용자로 봅니다.', icon: 'scale' },
  { title: '데이터 표준화와 신뢰', description: '가정·학교·병원·기관에 흩어진 기록이 연결되어야 사람을 반복해서 설명하게 하지 않고 더 나은 판단을 만들 수 있습니다.', practice: '연속성·동의·권한·설명 가능성을 함께 설계합니다.', icon: 'chart' },
  { title: '사람을 향한 기술', description: 'AI는 사람을 대체하거나 통제하기 위한 목적이 아니라 돌봄과 판단을 보조하고 삶의 질을 높이는 도구여야 합니다.', practice: '사람의 선택과 최종 판단, 설명과 철회 가능성을 남깁니다.', icon: 'handshake' },
  { title: '지속 가능한 임팩트', description: '현장의 기록과 결과가 연구와 정책 개선으로 이어지고, 다시 더 나은 서비스로 현장에 돌아오는 선순환을 만듭니다.', practice: '사용량이 아니라 실제 변화와 사회적 영향을 확인합니다.', icon: 'trend' },
]

const realization = [
  ['01', '사회적 난제에 집중', '발달장애, 노인질환·치매, 의료·항암, 교육처럼 오랫동안 해결이 어려웠던 문제부터 시작합니다.'],
  ['02', '데이터로 이해', '분절된 기록을 연결해 한 사람의 삶과 환경, 변화의 맥락을 더 정확하게 이해합니다.'],
  ['03', 'AI로 사람을 지원', '예측이나 자동화에 머물지 않고 당사자·가족·전문가의 더 나은 판단과 행동을 돕습니다.'],
  ['04', '변화를 다시 환류', '서비스 결과를 연구·정책·제품 개선으로 돌려보내 더 많은 사람에게 지속 가능한 혜택을 확장합니다.'],
]

const commitments = [
  ['사회적 가치', '기술의 성과를 기능 수가 아니라 사람의 삶에 만든 긍정적인 변화로 판단합니다.'],
  ['포용성', '장애·연령·지역·경제적 조건 때문에 필요한 기술에서 배제되지 않도록 설계합니다.'],
  ['신뢰와 책임', '데이터 권리, 개인정보, 동의, 역할과 책임을 기술 성능보다 먼저 확인합니다.'],
  ['지속 가능한 혁신', '일회성 시연이나 과장된 약속보다 현장에서 작동하고 계속 개선되는 시스템을 만듭니다.'],
  ['창의성과 도전', '불가능해 보였던 사회적 문제에서도 새로운 구조와 해결 가능성을 찾습니다.'],
]

export default function VisionPage() {
  return (
    <div className="company-page">
      <Header />
      <CompanyPageHero
        eyebrow="Philosophy · Mission · Vision"
        title="누구나, 어디서나, 동등한 기회를 누리는 세상"
        description={<p>드림에이아이랩은 기술의 힘으로 사회적 문제를 해결하고 사람들의 삶의 질을 높이며, 가장 도움이 필요한 사람도 기술의 혜택에서 배제되지 않는 미래를 만듭니다.</p>}
        badges={['Social value', 'Equal opportunity', 'Technology for people', 'Sustainable impact']}
        actions={[{ label: '우리의 미션', href: '#mission' }, { label: '우리의 약속', href: '#promise', variant: 'secondary' }]}
      />
      <CompanyNarrativeNav current="/vision" />

      <section className="company-section" id="mission">
        <div className="company-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-primary-700">Why we began</p>
            <h2 className="company-section-title mt-3">기술적 진보를 넘어 실제 삶의 변화를 만듭니다</h2>
            <p className="company-section-lead">취약계층과 소외계층의 삶을 개선하고자 하는 깊은 관심에서 시작한 여정은, 모든 사람이 기술적 장벽 없이 필요한 혜택을 누리는 세상을 향합니다.</p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-blue-200 bg-blue-50 p-7 sm:p-10">
              <p className="text-sm font-bold uppercase tracking-wider text-primary-700">Mission · 존재 이유</p>
              <h2 className="mt-4 text-2xl font-black leading-snug text-slate-950 sm:text-3xl">기술의 힘으로 사회적 문제를 해결하고, 삶의 질을 향상시킵니다</h2>
              <p className="mt-5 leading-relaxed text-slate-700">발달장애·돌봄·의료·교육 등 가장 복잡하고 도움이 필요한 현장을 데이터로 이해하고, AI와 소프트웨어로 사람의 판단과 삶을 지원합니다.</p>
            </article>
            <article className="rounded-3xl bg-slate-950 p-7 text-white sm:p-10">
              <p className="text-sm font-bold uppercase tracking-wider text-cyan-300">Vision · 우리가 만들 미래</p>
              <h2 className="mt-4 text-2xl font-black leading-snug sm:text-3xl">누구나, 어디서나, 동등한 기회를 누리는 세상</h2>
              <p className="mt-5 leading-relaxed text-slate-300">부·지역·환경·장애의 차이 때문에 필요한 의료·돌봄·교육과 정보에서 배제되지 않고, 기술과 인간이 조화롭게 공존하는 미래를 앞당깁니다.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="company-section-muted" id="promise">
        <div className="company-container">
          <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-primary-700">Our founding promise</p>
              <h2 className="company-section-title mt-3">가능성을 믿는 모든 이들에게</h2>
              <p className="mt-2 text-slate-500">기술로 세상을 바꾸는 우리의 약속</p>
            </div>
            <div className="mx-auto mt-9 max-w-4xl space-y-6 text-lg leading-relaxed text-slate-700 sm:text-xl">
              <p className="font-black text-slate-950">우리는 세상에 불가능은 없다고 믿습니다.</p>
              <p>기술은 한계를 넘어서는 도구이며, 도전은 새로운 가능성을 현실로 바꾸는 힘입니다. 지금까지의 모든 기술은 누군가의 용기 있는 시도에서 비롯되었고, 드림에이아이랩은 그 정신을 이어 오늘 필요한 미래를 지금 여기에서 만들어 갑니다.</p>
              <p>특히 <strong className="text-primary-700">발달장애, 노인질환·치매, 의료·항암 등 사회적 난제</strong>에 역량을 집중하여, <strong className="text-secondary-700">데이터로 이해하고 AI로 돕는 방식</strong>으로 사회 전반의 문제 해결에 기여하겠습니다.</p>
              <p className="font-black text-slate-950">누구나, 어디서나, 동등한 기회를 누리는 세상 — 그 미래를 앞당기겠습니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="company-section">
        <div className="company-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-primary-700">Vision pillars</p>
            <h2 className="company-section-title mt-3">비전을 지탱하는 네 가지 원칙</h2>
            <p className="company-section-lead">원래의 철학을 현재 제품과 운영에서 지킬 수 있도록 구체적인 실행 기준으로 연결합니다.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {visionPillars.map((item) => (
              <article key={item.title} className="company-card">
                <MarketingIcon name={item.icon} className="h-8 w-8 text-primary-700" />
                <h3 className="mt-5 text-xl font-black text-slate-950">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{item.description}</p>
                <p className="mt-5 rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold leading-relaxed text-slate-700">실행 기준 · {item.practice}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="company-section-muted">
        <div className="company-container">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-primary-700">How we realize the vision</p>
            <h2 className="company-section-title mt-3">사회적 문제를 데이터로 이해하고 AI로 돕습니다</h2>
            <p className="company-section-lead">AI Digital Care Log는 이 비전을 실제 서비스와 현장에서 구현하는 핵심 기술입니다. 회사의 목적을 대신하지 않고, 목적을 실현하는 방법으로 존재합니다.</p>
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
        <div className="company-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-primary-700">Our commitments</p>
            <h2 className="company-section-title mt-3">미래를 만드는 동안 지킬 약속</h2>
            <p className="company-section-lead">새로운 기술과 사업이 늘어나도 회사가 왜 시작했는지 잊지 않습니다.</p>
          </div>
          <ol className="space-y-3">
            {commitments.map(([title, description], index) => (
              <li key={title} className="company-card flex gap-4">
                <span className="font-black text-primary-700">{String(index + 1).padStart(2, '0')}</span>
                <div><h3 className="font-black text-slate-950">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <PageClosingSection title="비전은 기술과 서비스에서 실제 변화가 됩니다" description="AI Digital Care Log의 기술 구조와 현재 서비스가 회사의 사회적 미션을 어떻게 구현하는지 확인해 보세요." primary={{ label: '핵심 기술 보기', href: '/technology' }} secondary={[{ label: '서비스 보기', href: '/services' }]} />
      <Footer />
    </div>
  )
}
