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
    title: '공공 협력 | 돌봄·교육·다문화·헬스케어 AI 실증 | 드림에이아이랩',
    description: '자람이, 시니어앤라이프, 글로벌커플케어, 토탈케어로그, 에듀케어로그, 베지케어와 접근성 중심 바이브코딩 기술을 활용한 공공·지자체·연구기관 협력 영역을 소개합니다.',
    path: '/public',
    ogTitle: 'Dream AI Lab 공공 협력 — 현장 문제를 데이터와 AI 실증으로 연결합니다',
    ogImageAlt: '드림에이아이랩 공공 협력 분야와 실증 절차',
  }),
  keywords: ['공공 AI', '지자체 시범사업', '발달장애', '장기요양', '다문화 가족', '개별화교육', 'RWD', 'RWE', '접근성', '드림에이아이랩'],
}

const programs: Array<{ title: string; service: string; description: string; icon: MarketingIconName }> = [
  { title: '발달장애 지원', service: '자람이', description: '가정·학교·센터·병원 간 관찰·치료·교육 기록 연결과 지역 자원 탐색, 현장 행정의 표준화를 지원합니다.', icon: 'sprout' },
  { title: '시니어·장기요양', service: '시니어앤라이프', description: '시설 검색·장기요양 안내에서 돌봄 기록, 가족 소통, 기관 행정 연결로 이어지는 단계적 실증을 설계합니다.', icon: 'user' },
  { title: '다문화 가족·정착', service: '글로벌커플케어', description: '국제결혼 정보 비대칭, 안전한 절차, 정착·생활·육아 정보와 지역 지원체계 연결을 다룹니다.', icon: 'globe' },
  { title: '건강·실사용근거', service: '토탈케어로그', description: '병원 밖 증상·복약·생활 기록을 동의 기반으로 연결하고 RWD·RWE 연구 협력 가능성을 검증합니다.', icon: 'hospital' },
  { title: '개별화교육', service: '에듀케어로그', description: '학생의 학습·행동·반응을 시간축으로 기록해 교사·보호자·기관의 다음 교육 결정을 지원합니다.', icon: 'graduation' },
  { title: '식생활·웰니스', service: '베지케어', description: '영양·식습관·지역 상권·환경 행동을 연결하는 시민 건강 및 ESG 프로그램을 설계할 수 있습니다.', icon: 'leaf' },
  { title: '접근 가능한 디지털 서비스', service: 'DAL Vibe Architect', description: '비개발자와 장애 당사자가 공공 서비스를 공동설계하고 접근성·보안·운영요건을 함께 검증하는 제작 환경을 연구합니다.', icon: 'accessibility' },
]

const collaborationSteps = [
  ['01', '문제·대상 정의', '정책 목적, 현장 사용자, 담당 기관과 현재 업무 흐름을 함께 정의합니다.'],
  ['02', '데이터·책임 설계', '수집 최소화, 동의, 역할, 보유기간, 책임 주체와 성과지표를 먼저 정합니다.'],
  ['03', '작은 실증', '좁은 지역·기관·과업에서 사용성, 접근성, 운영 가능성과 실패지점을 검증합니다.'],
  ['04', '근거 기반 확장', '측정된 결과와 현장 피드백을 기준으로 연계 범위와 제도 적용을 확대합니다.'],
]

export default function PublicPage() {
  return (
    <div className="company-page">
      <Header />
      <CompanyPageHero eyebrow="Government · Municipality · Public Institution" title="공공의 문제를 현장 데이터와 AI로 연결합니다" description={<p>드림에이아이랩은 하나의 기술을 일괄 적용하지 않습니다. 정책 목적과 현장 업무를 먼저 이해하고, 각 서비스에서 축적한 도메인 구조를 작은 실증부터 단계적으로 적용합니다.</p>} badges={['공공·지자체', 'Pilot & PoC', 'RWD·RWE', '접근성', '데이터 거버넌스']} actions={[{ label: '협력 분야 보기', href: '#programs' }, { label: '공공 협력 문의', href: '/contact?type=b2b&service=platform', variant: 'secondary' }]} />
      <CompanyNarrativeNav current="/public" />

      <section id="programs" className="company-section">
        <div className="company-container">
          <div className="mx-auto max-w-3xl text-center"><p className="text-sm font-bold uppercase tracking-wider text-primary-700">Public collaboration portfolio</p><h2 className="company-section-title mt-3">현재 사업과 연결되는 공공 협력 영역</h2><p className="company-section-lead">돌봄 한 분야에 한정하지 않고 교육·다문화·건강·식생활·디지털 접근성까지 현재 포트폴리오 전체를 공공 협력 관점에서 제시합니다.</p></div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {programs.map((program) => <article key={program.title} className="company-card"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-primary-700"><MarketingIcon name={program.icon} className="h-6 w-6" /></div><p className="mt-5 text-xs font-bold text-primary-700">{program.service}</p><h3 className="mt-1 text-xl font-black text-slate-950">{program.title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{program.description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="company-section-muted">
        <div className="company-container">
          <div className="mx-auto max-w-3xl text-center"><p className="text-sm font-bold uppercase tracking-wider text-primary-700">From policy to evidence</p><h2 className="company-section-title mt-3">협력은 제안서보다 검증 구조에서 시작합니다</h2></div>
          <ol className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{collaborationSteps.map(([step, title, description]) => <li key={step} className="company-card"><span className="text-sm font-black text-primary-700">{step}</span><h3 className="mt-3 text-lg font-black text-slate-950">{title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p></li>)}</ol>
        </div>
      </section>

      <section className="company-section">
        <div className="company-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div><p className="text-sm font-bold uppercase tracking-wider text-primary-700">Trust baseline</p><h2 className="company-section-title mt-3">공공 적용 전에 확인할 공통 원칙</h2><p className="company-section-lead">특정 표준이나 법률 준수를 검토 없이 선포하지 않고, 대상 사업의 실제 데이터와 책임 구조에 맞춰 검증합니다.</p></div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['동의와 선택권', '누가 무엇에 동의했고 언제 철회할 수 있는지 기록합니다.'],
              ['역할과 최소권한', '기관·전문가·보호자·당사자의 열람·수정 범위를 구분합니다.'],
              ['데이터 최소화', '목적에 필요한 정보와 보유기간을 먼저 제한합니다.'],
              ['접근성과 쉬운 사용', '키보드·스크린리더·쉬운 말과 실제 과업 테스트를 포함합니다.'],
              ['감사 가능한 변경', '정책·모델·권한·데이터 변경의 근거와 결과를 남깁니다.'],
              ['전문가 검토', '법률·의료·복지·교육 등 분야별 검토를 별도 게이트로 둡니다.'],
            ].map(([title, text]) => <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5"><h3 className="font-black text-slate-950">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p></div>)}
          </div>
        </div>
      </section>

      <PageClosingSection title="지역과 기관의 실제 문제부터 함께 정의합니다" description="시범사업, 공동연구, 데이터 표준화, 접근 가능한 공공 서비스 제작 협력을 제안해 주세요." primary={{ label: '공공·기관 협력 문의', href: '/contact?type=b2b&service=platform' }} secondary={[{ label: '서비스 포트폴리오', href: '/services' }]} />
      <Footer />
    </div>
  )
}
