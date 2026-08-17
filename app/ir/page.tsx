import type { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CompanyPageHero from '../../components/CompanyPageHero'
import PageClosingSection from '../../components/PageClosingSection'
import { MarketingIcon, type MarketingIconName } from '../../components/MarketingIcon'
import { buildPageMetadata } from '../../lib/seo'

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: '투자·IR | 다도메인 AI 데이터 인프라 기업 드림에이아이랩',
    description: 'AI Digital Care Log 핵심 기술, 6개 산업 서비스, DAL Vibe Architect 신규 프로젝트, 데이터 플라이휠과 사업화 구조를 투자·사업 협력 관점에서 소개합니다.',
    path: '/ir',
    ogTitle: 'Dream AI Lab IR — 하나의 AI 아키텍처를 여러 산업의 제품과 데이터로 확장합니다',
    ogImageAlt: '드림에이아이랩 투자 포트폴리오와 기술·사업 확장 구조',
  }),
  keywords: ['드림에이아이랩 IR', 'AI 스타트업 투자', 'AI Digital Care Log', '다도메인 AI', '케어테크', '에듀테크', '바이브코딩', 'AI 데이터 인프라'],
}

const thesis: Array<{ title: string; description: string; icon: MarketingIconName }> = [
  { title: '하나의 코어, 여러 산업', description: '공통 데이터·판단·실행·학습 구조를 도메인별 제품으로 재사용해 확장비용을 낮추는 전략입니다.', icon: 'blocks' },
  { title: '업무에 들어가는 데이터', description: '단순 콘텐츠가 아니라 치료·돌봄·교육·행정·생활의 실제 업무 흐름에 기록 구조를 심습니다.', icon: 'link' },
  { title: '운영 결과의 학습', description: '어떤 판단과 개입이 어떤 결과로 이어졌는지 축적해 제품과 모델을 함께 개선합니다.', icon: 'refresh' },
  { title: '특수 분야부터 검증', description: '대형 범용시장 정면대결보다 발달장애·돌봄·다문화·접근성처럼 구조적 공백이 큰 분야부터 진입합니다.', icon: 'target' },
]

const portfolio = [
  ['자람이', '발달장애', 'Commercial', '기관 운영·보호자·전문가 연결'],
  ['시니어앤라이프', '시니어·돌봄', 'Pilot', '시설 검색·장기요양 안내에서 케어로그로 확장'],
  ['글로벌커플케어', '국제결혼·다문화', 'Commercial', '정보·절차·신뢰·정착을 잇는 글로벌 가족 인프라'],
  ['토탈케어로그', '의료·헬스케어', 'Alpha', '병원 밖 생활·복약·증상 기록의 연속성'],
  ['에듀케어로그', '교육', 'Pilot', '학습 반응과 개별화교육 운영 데이터'],
  ['베지케어', '웰니스', 'Beta', '식생활·영양·소비·환경 행동 연결'],
  ['DAL Vibe Architect', '바이브코딩·AI 앱 빌더', 'New Project', '의도부터 운영까지 연결하는 소프트웨어 창작 구조'],
]

const technologyAssets = [
  ['AI Digital Care Log', '상태·시간·행동·결과·피드백을 연결하는 상위 데이터·AI 아키텍처'],
  ['Domain Blueprints', '돌봄·교육·의료·다문화·웰니스 업무를 제품으로 내리는 산업별 구조'],
  ['Architecture Guardian', '소프트웨어 변경의 데이터·권한·API·보안·회귀 영향을 추적하는 신규 기술 후보'],
  ['Outcome Data Flywheel', '실사용 결과를 다음 설계·판단·제품 개선으로 환류하는 학습 구조'],
]

const commercialization = [
  ['B2B SaaS', '기관·사업자의 업무·행정·기록·고객관리 구독'],
  ['B2G·공공 실증', '지자체·공공기관·교육·복지 현장의 시범사업과 확산'],
  ['API·기술 라이선스', '도메인별 AI·데이터 구조와 플랫폼 기능의 연동'],
  ['공동연구·R&D', 'RWD·RWE, 접근성, 데이터 표준과 산업 실증 협력'],
  ['파트너 생태계', '기관·전문가·유통·플랫폼 사업자와 공동 사업화'],
]

const gates = [
  ['제품', '각 서비스의 핵심 과업 완료율·재사용·유료 전환 검증'],
  ['운영', '보안·복구·권한·고객지원·현장 유지비용 검증'],
  ['데이터', '동의·권리·품질을 갖춘 장기 결과 데이터 축적'],
  ['확장', '한 도메인의 검증 구조가 다른 산업에서도 재사용되는지 확인'],
]

export default function IRPage() {
  return (
    <div className="company-page">
      <Header />
      <CompanyPageHero eyebrow="Investor Relations · Business Partnership" title="하나의 AI 아키텍처를 여러 산업의 제품과 데이터로 확장합니다" description={<p>드림에이아이랩은 AI Digital Care Log를 핵심 기술로 두고, 특수 분야의 실제 업무에서 제품·데이터·사업모델을 함께 검증하는 다도메인 AI 데이터 인프라 기업입니다.</p>} badges={['6 Core Services', 'New Vibe-coding Project', 'RWD·RWE', 'B2B·B2G·API']} actions={[{ label: '투자 논리 보기', href: '#thesis' }, { label: '투자·사업 문의', href: '/contact?type=ir&service=platform', variant: 'secondary' }]} />

      <section id="thesis" className="company-section">
        <div className="company-container">
          <div className="mx-auto max-w-3xl text-center"><p className="text-sm font-bold uppercase tracking-wider text-primary-700">Investment thesis</p><h2 className="company-section-title mt-3">DAL이 축적하려는 기업가치</h2></div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{thesis.map((item) => <article key={item.title} className="company-card"><MarketingIcon name={item.icon} className="h-8 w-8 text-primary-700" /><h3 className="mt-5 text-lg font-black text-slate-950">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p></article>)}</div>
        </div>
      </section>

      <section className="company-section-muted">
        <div className="company-container">
          <div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-wider text-primary-700">Portfolio &amp; stage</p><h2 className="company-section-title mt-3">현재 사업 포트폴리오</h2><p className="company-section-lead">서로 다른 산업을 하나의 숫자로 합치지 않고, 서비스별 시장과 제품 단계를 구분합니다.</p></div>
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="hidden grid-cols-[1.1fr_1fr_0.7fr_1.8fr] gap-4 bg-slate-100 px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 md:grid"><span>Service</span><span>Domain</span><span>Stage</span><span>Current focus</span></div>
            <div className="divide-y divide-slate-200">{portfolio.map(([name, domain, stage, focus]) => <div key={name} className="grid gap-2 px-6 py-5 md:grid-cols-[1.1fr_1fr_0.7fr_1.8fr] md:items-center md:gap-4"><strong className="text-slate-950">{name}</strong><span className="text-sm text-slate-600">{domain}</span><span><span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-primary-700">{stage}</span></span><span className="text-sm leading-relaxed text-slate-600">{focus}</span></div>)}</div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-slate-500">NoahAI는 금융 AI 아키텍처의 산업 전이 사례이며, 현재 Noah AI Labs로 기술이전·분리 운영됩니다.</p>
        </div>
      </section>

      <section className="company-section">
        <div className="company-container grid gap-12 lg:grid-cols-2">
          <div><p className="text-sm font-bold uppercase tracking-wider text-primary-700">Technology assets</p><h2 className="company-section-title mt-3">재사용되는 기술자산</h2><div className="mt-8 space-y-4">{technologyAssets.map(([title, body]) => <div key={title} className="company-card"><h3 className="font-black text-slate-950">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p></div>)}</div></div>
          <div><p className="text-sm font-bold uppercase tracking-wider text-primary-700">Commercialization</p><h2 className="company-section-title mt-3">사업화 경로</h2><div className="mt-8 space-y-4">{commercialization.map(([title, body], index) => <div key={title} className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5"><span className="font-black text-primary-700">{String(index + 1).padStart(2, '0')}</span><div><h3 className="font-black text-slate-950">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p></div></div>)}</div></div>
        </div>
      </section>

      <section className="company-section-muted">
        <div className="company-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div><p className="text-sm font-bold uppercase tracking-wider text-primary-700">Evidence gates</p><h2 className="company-section-title mt-3">다음 가치 상승을 확인할 지표</h2><p className="company-section-lead">등록 수나 보도 문구보다 실제 도입·운영·결과·전이 가능성을 투자 판단의 핵심 증거로 봅니다.</p></div>
          <div className="grid gap-4 sm:grid-cols-2">{gates.map(([title, body]) => <div key={title} className="company-card"><h3 className="font-black text-slate-950">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p></div>)}</div>
        </div>
      </section>

      <PageClosingSection title="투자와 사업 협력은 검증 가능한 다음 단계로 연결합니다" description="회사·기술·서비스 자료와 협력 범위는 문의 목적에 맞춰 별도로 제공합니다." primary={{ label: '투자 문의', href: '/contact?type=ir&service=platform' }} secondary={[{ label: '사업·파트너십 문의', href: '/contact?type=b2b&service=platform' }]} />
      <Footer />
    </div>
  )
}
