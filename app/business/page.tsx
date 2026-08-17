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
    title: '비즈니스 | AI 기술을 현장 업무와 지속 가능한 사업으로 - 드림에이아이랩',
    description: '드림에이아이랩의 산업별 서비스 포트폴리오, B2B SaaS·B2G·B2C·API 사업모델, 단계적 시장 진입과 데이터 플라이휠을 소개합니다.',
    path: '/business',
    ogTitle: 'Dream AI Lab Business — 기술을 실제 업무에 넣고 결과로 가치를 증명합니다',
    ogDescription: 'AI Digital Care Log를 산업별 제품, 반복 매출과 결과 데이터로 연결하는 사업 구조.',
    ogImageAlt: '드림에이아이랩 서비스 포트폴리오와 사업화 구조',
  }),
  keywords: ['드림에이아이랩 비즈니스', 'B2B SaaS', 'B2G AI', 'AI 사업모델', '케어테크', '에듀테크', 'AI 데이터 인프라', '바이브코딩 사업'],
}

const portfolio = [
  ['자람이', '발달장애', 'Commercial', '가정·학교·센터·병원의 관찰·치료·교육 기록과 협업', '/services/jarame'],
  ['시니어앤라이프', '시니어·돌봄', 'Pilot', '시설 탐색·장기요양 안내에서 돌봄 기록·행정 업무로 확장', '/services/senior'],
  ['글로벌커플케어', '국제결혼·다문화', 'Commercial', '만남·절차·정착·가족 지원의 정보와 운영 흐름', '/services/marriage'],
  ['토탈케어로그', '의료·헬스케어', 'Alpha', '병원 밖 증상·복약·생활 기록과 다음 의료 판단의 연결', '/services/healthcare'],
  ['에듀케어로그', '교육', 'Pilot', '학습 과정·오류·반응을 다음 교육과 협업으로 연결', '/services/educarelog'],
  ['베지케어', '웰니스·라이프스타일', 'Beta', '식습관·영양·건강·소비 행동을 연결하는 생활 데이터 서비스', '/services/veggie'],
  ['DAL Vibe Architect', '소프트웨어 창작', 'New Project', '비개발자의 의도를 설계·검증·배포·운영으로 번역하는 바이브코딩 프로젝트', '/services/vibe-architect'],
]

const models: Array<{ title: string; description: string; fit: string; icon: MarketingIconName }> = [
  { title: '기관 구독 · B2B SaaS', description: '센터·기관·사업자의 기록, 협업, 행정과 고객 운영을 월·연 구독으로 제공합니다.', fit: '자람이 · 시니어 · 교육 · 국제결혼', icon: 'buildings' },
  { title: '공공 실증 · B2G', description: '지역과 기관의 문제를 작은 Pilot·PoC로 검증하고 근거에 따라 확장합니다.', fit: '돌봄 · 교육 · 다문화 · 접근성', icon: 'handshake' },
  { title: '개인·가족 프리미엄 · B2C', description: '기록의 연속성, 맞춤 안내, 고급 리포트 등 개인과 가족의 지속 사용 가치를 만듭니다.', fit: '건강 · 돌봄 · 학습 · 웰니스', icon: 'users' },
  { title: 'API · 기술 라이선스', description: '검증된 데이터 모델, 도메인 블루프린트와 AI 모듈을 파트너 시스템에 연결합니다.', fit: '플랫폼 · 보험 · 의료 · 공공 시스템', icon: 'blocks' },
  { title: '파트너 거래 · B2B2C', description: '신뢰 가능한 시설·서비스·전문가 탐색과 연결에서 발생하는 거래 가치를 공유합니다.', fit: '시설 · 전문가 · 가족 서비스', icon: 'link' },
  { title: '공동연구 · R&D', description: '대학·병원·연구기관과 데이터 구조, 검증 방법, 새로운 도메인 적용을 공동 개발합니다.', fit: 'RWD·RWE · Pet AI · Robot Vision', icon: 'flask' },
]

const goToMarket = [
  ['01', '깊은 문제에서 시작', '일반적인 편의 기능보다 기록 단절과 판단 부담이 큰 특수 현장을 선택합니다.'],
  ['02', '업무 흐름에 진입', '사용자가 매일 수행하는 기록·협업·행정 과정 안에 제품을 넣습니다.'],
  ['03', '작은 범위에서 검증', '기능 수가 아니라 실제 사용, 업무 절감, 안전성과 결과를 확인합니다.'],
  ['04', '블루프린트로 표준화', '검증된 데이터·권한·업무 구조를 같은 산업의 다른 기관에 재사용합니다.'],
  ['05', '인접 산업으로 전이', '공통 아키텍처는 공유하되 새 산업의 책임과 규칙을 별도로 검증합니다.'],
]

const routeGuide = [
  ['/services', '서비스', '제품별 기능·대상·현재 단계'],
  ['/public', '공공', '지자체·공공기관의 실증과 협력 방식'],
  ['/ir', 'IR', '기업가치·기술자산·성장 지표와 투자 관점'],
]

export default function BusinessPage() {
  return (
    <div className="company-page">
      <Header />
      <CompanyPageHero
        eyebrow="Business · How value is created"
        title="기술을 실제 업무에 넣고, 운영 결과로 가치를 증명합니다"
        description={<p>드림에이아이랩의 사업은 AI 모델 판매가 아니라, 산업별 업무 흐름을 제품으로 바꾸고 사용 결과가 다시 기술과 서비스의 경쟁력이 되는 구조를 만드는 일입니다.</p>}
        badges={['B2B SaaS', 'B2G', 'B2C', 'API & License', 'Outcome data']}
        actions={[{ label: '사업 포트폴리오', href: '#portfolio' }, { label: '도입·사업 문의', href: '/contact?type=b2b&service=platform', variant: 'secondary' }]}
      />
      <CompanyNarrativeNav current="/business" />

      <section className="company-section" id="portfolio">
        <div className="company-container">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-primary-700">Business portfolio</p>
            <h2 className="company-section-title mt-3">하나의 기술 코어, 산업별로 다른 고객과 가치</h2>
            <p className="company-section-lead">서비스의 이름과 제품 단계는 구분하지만 데이터·권한·AI·결과 학습의 공통 기술자산은 함께 축적합니다.</p>
          </div>
          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="hidden grid-cols-[170px_150px_120px_1fr] gap-5 bg-slate-950 px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-300 md:grid">
              <span>Service</span><span>Domain</span><span>Stage</span><span>Current value</span>
            </div>
            {portfolio.map(([name, domain, stage, value, href]) => (
              <Link key={name} href={href} className="grid gap-2 border-t border-slate-100 px-6 py-5 transition first:border-t-0 hover:bg-blue-50 md:grid-cols-[170px_150px_120px_1fr] md:items-center md:gap-5">
                <strong className="text-slate-950">{name}</strong><span className="text-sm text-slate-600">{domain}</span><span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">{stage}</span><span className="text-sm leading-relaxed text-slate-600">{value}</span>
              </Link>
            ))}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-slate-500">NoahAI는 기술 철학과 창업 이력을 공유하지만 현재 Noah AI Labs에서 분리 운영하므로 DAL 서비스 매출 구조와 합산해 설명하지 않습니다.</p>
        </div>
      </section>

      <section className="company-section-muted">
        <div className="company-container">
          <div className="mx-auto max-w-3xl text-center"><p className="text-sm font-bold uppercase tracking-wider text-primary-700">Revenue architecture</p><h2 className="company-section-title mt-3">산업과 고객에 맞는 여섯 가지 사업화 경로</h2><p className="company-section-lead">모든 서비스에 같은 수익모델을 강요하지 않고 실제 구매자와 운영 가치를 기준으로 조합합니다.</p></div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {models.map((model) => (
              <article key={model.title} className="company-card"><MarketingIcon name={model.icon} className="h-8 w-8 text-primary-700" /><h3 className="mt-5 text-xl font-black text-slate-950">{model.title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{model.description}</p><p className="mt-5 border-t border-slate-100 pt-4 text-xs font-bold text-primary-700">적합 영역 · {model.fit}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="company-section">
        <div className="company-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div><p className="text-sm font-bold uppercase tracking-wider text-primary-700">Go-to-market</p><h2 className="company-section-title mt-3">특수 분야에서 시작해 반복 가능한 시장 구조로</h2><p className="company-section-lead">코드 생성이나 대규모 광고보다 현장 진입, 운영 결과, 도메인 표준화가 DAL의 시장 확장 방식입니다.</p></div>
          <ol className="space-y-3">
            {goToMarket.map(([step, title, description]) => <li key={step} className="company-card flex gap-4"><span className="font-black text-primary-700">{step}</span><div><h3 className="font-black text-slate-950">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p></div></li>)}
          </ol>
        </div>
      </section>

      <section className="company-section-muted">
        <div className="company-container grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="rounded-3xl bg-slate-950 p-7 text-white sm:p-9">
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-300">Data flywheel</p>
            <h2 className="mt-3 text-2xl font-black">사용 → 결과 → 학습 → 더 나은 제품</h2>
            <p className="mt-5 leading-relaxed text-slate-300">제품이 업무에 들어가면 어떤 상황에서 어떤 선택을 했고 무엇이 달라졌는지 알 수 있습니다. 권리와 개인정보를 보호하며 축적한 운영 결과는 다음 제품 설계와 AI의 판단 품질을 개선합니다.</p>
            <div className="mt-7 grid grid-cols-2 gap-3 text-center text-sm font-bold"><span className="rounded-xl bg-white/10 p-3">Workflow data</span><span className="rounded-xl bg-white/10 p-3">Outcome evidence</span><span className="rounded-xl bg-white/10 p-3">Domain blueprint</span><span className="rounded-xl bg-white/10 p-3">Product improvement</span></div>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-primary-700">Clear page roles</p>
            <h2 className="company-section-title mt-3">분리된 페이지는 대상과 질문이 다르기 때문입니다</h2>
            <p className="company-section-lead">비즈니스·공공·IR이 같은 내용을 반복하지 않도록 각 페이지의 역할을 고정했습니다.</p>
            <div className="mt-7 space-y-3">{routeGuide.map(([href, title, description]) => <Link key={href} href={href} className="company-card flex items-center justify-between gap-4 transition hover:border-primary-200 hover:bg-blue-50"><div><h3 className="font-black text-slate-950">{title}</h3><p className="mt-1 text-sm text-slate-600">{description}</p></div><span className="font-bold text-primary-700">→</span></Link>)}</div>
          </div>
        </div>
      </section>

      <PageClosingSection title="현장 문제와 사업 구조를 함께 설계합니다" description="제품 도입, 공동사업, 기술 연계와 산업별 Pilot 범위를 문의 목적에 맞춰 논의할 수 있습니다." primary={{ label: '사업·도입 문의', href: '/contact?type=b2b&service=platform' }} secondary={[{ label: '공공 협력', href: '/public' }, { label: '투자·IR', href: '/ir' }]} />
      <Footer />
    </div>
  )
}
