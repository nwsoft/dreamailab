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
    title: '철학·비전 | AI 시대에 사람이 더 자유로워지는 기술 - 드림에이아이랩',
    description: 'AI가 더 강해지는 시대에 드림에이아이랩이 만들고자 하는 회사, 사람 중심 기술 철학, 현재 사업과 소프트웨어 창작·Pet AI·Robot Vision으로 이어지는 장기 비전을 소개합니다.',
    path: '/vision',
    ogTitle: 'Dream AI Lab Vision — AI가 더 강해질수록 기술은 사람에게 더 가까워져야 합니다',
    ogDescription: '삶의 단절을 연결하고 기술의 복잡성을 시스템 안으로 흡수하는 드림에이아이랩의 미션과 미래 방향.',
    ogImageAlt: '드림에이아이랩 사람 중심 AI 철학과 미래 비전',
  }),
  keywords: ['드림에이아이랩 비전', 'AI 철학', '사람 중심 AI', 'AI 시대', 'AI Digital Care Log', '소프트웨어 창작', 'Pet AI', 'Robot Vision'],
}

const values: Array<{ title: string; description: string; practice: string; icon: MarketingIconName }> = [
  { title: '인간의 존엄과 선택', description: 'AI는 사람을 대신해 통제하는 존재가 아니라 더 잘 이해하고 선택하도록 돕는 기반이어야 합니다.', practice: '동의·설명·철회·사람의 최종 판단을 제품 구조에 남깁니다.', icon: 'heart' },
  { title: '포용과 접근성', description: '기술을 가장 필요로 하는 사람이 기술의 복잡성 때문에 다시 배제되어서는 안 됩니다.', practice: '쉬운 언어, 다양한 입력 방식, 접근성 검증을 처음부터 설계합니다.', icon: 'accessibility' },
  { title: '연결과 연속성', description: '한 번의 예측보다 삶과 업무의 시간축을 이어 이해하는 것이 더 중요합니다.', practice: '기관과 단계가 바뀌어도 맥락과 결과가 이어지는 데이터 구조를 만듭니다.', icon: 'link' },
  { title: '증거와 책임', description: 'AI의 가능성은 실제 현장에서 안전성과 유용성이 검증될 때 비로소 가치가 됩니다.', practice: '단계적 실증, 감사 가능한 변경, 결과 지표로 확장 여부를 결정합니다.', icon: 'shield' },
]

const horizons = [
  { label: 'NOW · 실제 산업', title: '사람의 삶과 현장을 연결하는 제품', description: '자람이·시니어앤라이프·글로벌커플케어·토탈케어로그·에듀케어로그·베지케어를 통해 돌봄, 교육, 가족, 건강과 생활의 실제 문제를 해결합니다.', href: '/services' },
  { label: 'NEXT · 창작의 민주화', title: '아이디어를 운영 가능한 소프트웨어로', description: 'DAL Vibe Architect는 비개발자와 장애인을 포함한 더 많은 사람이 자신의 현장 문제를 안전한 소프트웨어로 구현하도록 돕는 신규 바이브코딩 프로젝트입니다.', href: '/services/vibe-architect' },
  { label: 'HORIZON · 지능형 상호작용', title: '사람을 넘어 동물과 로봇의 맥락 이해로', description: 'Pet AI와 Robot Vision은 관찰·행동·환경·반응을 연결하는 공통 원리를 확장하는 장기 연구입니다. 현재 상용 서비스와 명확히 구분합니다.', href: '/research' },
]

const commitments = [
  ['사람이 이해할 수 있는 AI', '결과와 근거, 한계와 책임 주체를 함께 설명합니다.'],
  ['현장에서 살아남는 시스템', '데모보다 실제 업무·운영·복구·유지보수까지 설계합니다.'],
  ['권리를 지키는 데이터', '소유·동의·접근권한·보존기간을 기술보다 먼저 정의합니다.'],
  ['특수 분야에서 시작하는 혁신', '복잡한 현장에서 검증한 구조를 더 넓은 산업으로 확장합니다.'],
  ['결과로 학습하는 회사', '사용량만이 아니라 실제 변화와 실패를 다음 제품 결정에 반영합니다.'],
]

export default function VisionPage() {
  return (
    <div className="company-page">
      <Header />
      <CompanyPageHero
        eyebrow="Philosophy · Mission · Future"
        title="AI가 더 강해질수록, 기술은 사람에게 더 가까워져야 합니다"
        description={<p>드림에이아이랩은 AI가 사람에게 더 많은 공부와 판단을 요구하는 미래가 아니라, 기술의 복잡성을 스스로 흡수해 사람의 가능성과 선택을 넓히는 미래를 만듭니다.</p>}
        badges={['Human dignity', 'Inclusive by design', 'Connected context', 'Evidence & responsibility']}
        actions={[{ label: '미션과 비전', href: '#mission' }, { label: '미래 방향 보기', href: '#horizon', variant: 'secondary' }]}
      />
      <CompanyNarrativeNav current="/vision" />

      <section className="company-section" id="mission">
        <div className="company-container grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-blue-200 bg-blue-50 p-7 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-wider text-primary-700">Mission · 오늘 우리가 하는 일</p>
            <h2 className="mt-4 text-2xl font-black leading-snug text-slate-950 sm:text-3xl">삶과 현장의 단절을 연결하고, 복잡성을 시스템 안으로 흡수합니다</h2>
            <p className="mt-5 leading-relaxed text-slate-700">흩어진 기록을 맥락으로, 맥락을 설명 가능한 판단으로, 판단을 다음 행동과 결과로 연결합니다. 동시에 기술을 모르는 사람도 자신의 문제를 소프트웨어로 해결할 수 있는 제작 구조를 만듭니다.</p>
          </article>
          <article className="rounded-3xl bg-slate-950 p-7 text-white sm:p-10">
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-300">Vision · 우리가 만들 미래</p>
            <h2 className="mt-4 text-2xl font-black leading-snug sm:text-3xl">누구나 자신의 삶과 현장을 이해하는 AI를 갖고, 아이디어를 실제 변화로 만들 수 있는 시대</h2>
            <p className="mt-5 leading-relaxed text-slate-300">서비스를 사용하는 사람과 만드는 사람 모두가 기술의 장벽에서 자유로워지는 것이 DAL이 바라보는 AI 시대입니다.</p>
          </article>
        </div>
      </section>

      <section className="company-section-muted">
        <div className="company-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-primary-700">Values in action</p>
            <h2 className="company-section-title mt-3">가치는 제품 의사결정으로 증명합니다</h2>
            <p className="company-section-lead">추상적인 단어를 나열하지 않고, 각 가치가 설계와 운영에서 무엇을 바꾸는지 명확히 합니다.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {values.map((value) => (
              <article key={value.title} className="company-card">
                <MarketingIcon name={value.icon} className="h-8 w-8 text-primary-700" />
                <h3 className="mt-5 text-xl font-black text-slate-950">{value.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{value.description}</p>
                <p className="mt-5 rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold leading-relaxed text-slate-700">실행 기준 · {value.practice}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="company-section" id="horizon">
        <div className="company-container">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-primary-700">The company we are building</p>
            <h2 className="company-section-title mt-3">AI 시대에 드림에이아이랩이 확장하는 세 개의 지평</h2>
            <p className="company-section-lead">현재 사업, 다음 제작 방식, 장기 연구를 한 문장에 섞지 않고 시간과 검증 단계에 따라 구분합니다.</p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {horizons.map((item) => (
              <Link key={item.label} href={item.href} className="company-card group transition hover:-translate-y-1 hover:border-primary-200 hover:shadow-md">
                <p className="text-xs font-black uppercase tracking-wider text-primary-700">{item.label}</p>
                <h3 className="mt-4 text-xl font-black text-slate-950 group-hover:text-primary-700">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.description}</p>
                <span className="mt-6 inline-flex text-sm font-bold text-primary-700">자세히 보기 →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="company-section-muted">
        <div className="company-container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-primary-700">A common intelligence loop</p>
              <h2 className="company-section-title mt-3">갑작스러운 도메인 확장이 아니라, 하나의 학습 원리를 단계적으로 확장합니다</h2>
              <p className="company-section-lead">사람·동물·로봇을 같은 제품으로 묶는다는 뜻이 아닙니다. 서로 다른 대상에서도 관찰 → 기록 → 맥락 이해 → 판단 → 상호작용 → 결과 학습이라는 공통 연구 질문이 반복된다는 의미입니다.</p>
              <p className="mt-5 text-sm leading-relaxed text-slate-500">현재 수익 사업과 장기 연구는 별도 단계와 책임 기준으로 운영합니다. 이 도식은 제품 출시 선언이 아니라 기술 연구의 연결 방향입니다.</p>
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <picture>
                <source media="(max-width: 768px)" srcSet="/images/research/one-ai-core-domains-mobile.svg" />
                <img src="/images/research/one-ai-core-domains.svg" alt="관찰과 기록, 판단과 학습 원리를 사람·동물·로봇 연구로 단계적으로 확장하는 드림에이아이랩 비전" className="h-auto w-full" loading="lazy" decoding="async" />
              </picture>
            </div>
          </div>
        </div>
      </section>

      <section className="company-section">
        <div className="company-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-primary-700">Our commitments</p>
            <h2 className="company-section-title mt-3">미래를 만드는 동안 지킬 약속</h2>
            <p className="company-section-lead">날짜만 있는 목표보다 어떤 기준을 포기하지 않을지를 분명히 합니다.</p>
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

      <PageClosingSection title="비전은 기술과 제품에서 구체화됩니다" description="AI Digital Care Log의 구조와 현재 서비스 포트폴리오에서 철학이 실제로 어떻게 구현되는지 확인해 보세요." primary={{ label: '핵심 기술 보기', href: '/technology' }} secondary={[{ label: '서비스 보기', href: '/services' }]} />
      <Footer />
    </div>
  )
}
