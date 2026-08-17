import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CompanyPageHero from '../../components/CompanyPageHero'
import PageClosingSection from '../../components/PageClosingSection'
import { MarketingIcon, type MarketingIconName } from '../../components/MarketingIcon'
import { COMPANY_TAGLINE } from '../../lib/company-copy'
import { buildPageMetadata } from '../../lib/seo'

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: '회사소개 | AI디지털케어로그를 산업으로 구현하는 드림에이아이랩',
    description: '드림에이아이랩의 회사 정체성, AI디지털케어로그 기술, 6개 산업 서비스와 신규 바이브코딩 프로젝트를 소개합니다.',
    path: '/about',
    ogTitle: 'Dream AI Lab — 기술을 여러 산업의 실제 제품으로 구현하는 AI 데이터 인프라 기업',
    ogDescription: COMPANY_TAGLINE,
    ogImageAlt: '드림에이아이랩 회사와 기술·서비스 포트폴리오',
  }),
  keywords: ['드림에이아이랩', 'Dream AI Lab', 'AI디지털케어로그', 'AI 데이터 인프라', '정해성 CTO', '자람이', '시니어앤라이프', '글로벌커플케어', '베지케어', '바이브코딩'],
}

const portfolio: Array<{ name: string; domain: string; stage: string; description: string; href: string; icon: MarketingIconName }> = [
  { name: '자람이', domain: '발달장애', stage: 'Commercial', description: '가정·학교·센터·병원의 발달 관찰·치료·교육 기록을 연결합니다.', href: '/services/jarame', icon: 'sprout' },
  { name: '시니어앤라이프', domain: '시니어·돌봄', stage: 'Pilot', description: '시설 탐색과 장기요양 안내에서 돌봄 기록·행정 연결로 확장합니다.', href: '/services/senior', icon: 'user' },
  { name: '글로벌커플케어', domain: '국제결혼·다문화', stage: 'Commercial', description: '정보 비대칭을 줄이고 만남·절차·정착·가족의 흐름을 연결합니다.', href: '/services/marriage', icon: 'globe' },
  { name: '토탈케어로그', domain: '의료·헬스케어', stage: 'Alpha', description: '병원 밖 증상·복약·생활 기록을 다음 의료 판단으로 연결합니다.', href: '/services/healthcare', icon: 'hospital' },
  { name: '에듀케어로그', domain: '교육', stage: 'Pilot', description: '학생이 멈춘 지점과 학습 반응을 기록해 다음 교육으로 연결합니다.', href: '/services/educarelog', icon: 'graduation' },
  { name: '베지케어', domain: '웰니스·라이프스타일', stage: 'Beta', description: '식습관·영양·건강 데이터를 행동·소비·환경 실천으로 연결합니다.', href: '/services/veggie', icon: 'leaf' },
  { name: 'DAL Vibe Architect', domain: '바이브코딩·AI 앱 빌더', stage: 'New Project', description: '사람의 의도를 요구사항·아키텍처·검증·배포·운영으로 번역하는 신규 프로젝트입니다.', href: '/services/vibe-architect', icon: 'blocks' },
]

const principles: Array<{ title: string; description: string; icon: MarketingIconName }> = [
  { title: '구조를 먼저 봅니다', description: '산업별 기능보다 상태·시간·행동·결과·피드백의 공통 구조를 발견합니다.', icon: 'puzzle' },
  { title: '현장으로 내려갑니다', description: '상위 아키텍처를 데이터 모델·AI·화면·업무 흐름·사업모델로 재구체화합니다.', icon: 'target' },
  { title: '결과를 다시 학습합니다', description: '사용과 운영에서 생긴 결과가 다음 판단과 제품 개선으로 돌아오는 폐쇄루프를 설계합니다.', icon: 'refresh' },
  { title: '사람을 배제하지 않습니다', description: '동의·권한·개인정보·접근성과 현장 당사자의 참여를 제품 설계의 출발점으로 둡니다.', icon: 'accessibility' },
]

const milestones = [
  ['2022', '자람이 공익 프로젝트와 수화 번역 AI 개발 시작'],
  ['2023', '발달장애·ADHD 및 심리·정신건강 데이터 연구 확장'],
  ['2024', '의료 AI 개발과 Dream AI Lab 사업 구조 수립'],
  ['2025', 'AI Digital Care Log 상위 아키텍처 공개 및 다도메인 적용'],
  ['2026', '서비스 상용화·파일럿 확대, Noah AI Labs 분리 운영, Robot·Pet 연구와 DAL Vibe Architect 신규 프로젝트 공개'],
]

export default function AboutPage() {
  return (
    <div className="company-page">
      <Header />
      <CompanyPageHero
        eyebrow="Dream AI Lab · Company"
        title="현실의 복잡한 문제를 AI 시스템으로 바꾸는 회사"
        description={<p>드림에이아이랩은 하나의 앱을 운영하는 회사가 아니라, 공통 아키텍처를 여러 산업의 실제 제품과 사업으로 구현하는 AI 데이터 인프라 기업입니다.</p>}
        badges={['AI Digital Care Log', 'Architecture to Execution', 'Multi-domain AI', 'Korea']}
        actions={[{ label: '서비스 포트폴리오', href: '/services' }, { label: '기술 구조', href: '/technology', variant: 'secondary' }]}
      />

      <section className="company-section">
        <div className="company-container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-primary-700">Who we are</p>
            <h2 className="company-section-title mt-3">AI Digital Care Log를 산업으로 구현합니다</h2>
            <p className="company-section-lead">{COMPANY_TAGLINE}</p>
            <p className="mt-5 leading-relaxed text-slate-600">발달장애·돌봄·의료·교육·다문화 가족·웰니스처럼 서로 달라 보이는 문제에서도 관찰 → 기록 → 맥락화 → 판단 → 실행 → 결과 → 학습이라는 공통 구조가 반복됩니다. DAL은 이 구조를 상위 기술로 설계한 뒤 각 산업의 언어와 업무에 맞는 제품으로 다시 구현합니다.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {[
              ['Core Architecture', 'AI Digital Care Log'],
              ['Product Portfolio', '6개 산업 서비스 + 신규 프로젝트'],
              ['Research Horizon', 'Pet AI · Robot Vision'],
            ].map(([label, value]) => (
              <div key={label} className="company-card"><p className="text-xs font-bold uppercase tracking-wider text-primary-700">{label}</p><p className="mt-2 text-lg font-black text-slate-950">{value}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="company-section-muted">
        <div className="company-container">
          <div className="mx-auto max-w-3xl text-center"><p className="text-sm font-bold uppercase tracking-wider text-primary-700">Portfolio</p><h2 className="company-section-title mt-3">현재 서비스와 신규 프로젝트</h2><p className="company-section-lead">모든 이름은 동일한 기술 철학에서 출발하지만, 산업과 제품 단계는 구분해 설명합니다.</p></div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {portfolio.map((item) => (
              <Link key={item.name} href={item.href} className="company-card group transition hover:-translate-y-1 hover:border-primary-200 hover:shadow-md">
                <div className="flex items-start justify-between gap-4"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-primary-700"><MarketingIcon name={item.icon} className="h-6 w-6" /></div><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{item.stage}</span></div>
                <p className="mt-5 text-xs font-bold text-primary-700">{item.domain}</p><h3 className="mt-1 text-xl font-black text-slate-950 group-hover:text-primary-700">{item.name}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="company-section">
        <div className="company-container">
          <div className="mx-auto max-w-3xl text-center"><p className="text-sm font-bold uppercase tracking-wider text-primary-700">How we build</p><h2 className="company-section-title mt-3">아키텍처에서 실행까지</h2></div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {principles.map((item) => <article key={item.title} className="company-card"><MarketingIcon name={item.icon} className="h-8 w-8 text-primary-700" /><h3 className="mt-5 text-lg font-black text-slate-950">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="company-section-muted">
        <div className="company-container grid gap-12 lg:grid-cols-2">
          <div><p className="text-sm font-bold uppercase tracking-wider text-primary-700">Journey</p><h2 className="company-section-title mt-3">연구가 제품과 사업으로 이어진 과정</h2><ol className="mt-8 space-y-4">{milestones.map(([year, text]) => <li key={`${year}-${text}`} className="grid grid-cols-[64px_1fr] gap-4 rounded-xl border border-slate-200 bg-white p-5"><span className="font-black text-primary-700">{year}</span><span className="leading-relaxed text-slate-700">{text}</span></li>)}</ol></div>
          <div className="rounded-3xl border border-blue-200 bg-blue-50 p-7 sm:p-9"><p className="text-sm font-bold uppercase tracking-wider text-primary-700">Technology leadership</p><h2 className="mt-3 text-2xl font-black text-slate-950">시스템 아키텍트형 기술 창업가</h2><p className="mt-5 leading-relaxed text-slate-700">CTO 정해성은 서로 다른 현실 문제에서 공통 구조를 발견하고, 이를 범용 AI·데이터 아키텍처로 추상화한 뒤 다시 산업별 제품으로 구현하는 기술 설계를 이끌고 있습니다.</p><p className="mt-4 leading-relaxed text-slate-600">개인에 대한 수사보다 공개된 설계·개발 이력, 제품 실증과 시장 결과를 중심으로 기술 리더십을 설명합니다.</p><Link href="/research/jung-haesung" className="mt-7 inline-flex font-bold text-primary-700 underline underline-offset-4">공식 기술 프로필 보기 →</Link></div>
        </div>
      </section>

      <PageClosingSection title="기술·사업·공공 협력을 함께 설계합니다" description="각 산업의 현장 문제를 DAL의 공통 아키텍처와 연결할 파트너를 찾습니다." primary={{ label: '협력 문의', href: '/contact?type=b2b&service=platform' }} secondary={[{ label: '서비스 전체 보기', href: '/services' }]} />
      <Footer />
    </div>
  )
}
