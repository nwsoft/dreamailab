import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import CompanyPageHero from '../../../components/CompanyPageHero'
import CompanyNarrativeNav from '../../../components/CompanyNarrativeNav'
import ResearchLifeIntelligence from '../../../components/ResearchLifeIntelligence'
import { MarketingIcon, type MarketingIconName } from '../../../components/MarketingIcon'
import { absoluteUrl, buildBreadcrumbJsonLd, buildPageMetadata, SITE_URL } from '../../../lib/seo'

const pagePath = '/research/robot-vision'
const pageDescription = 'Robot Vision은 삶의 시간축 데이터와 권한·감사 구조를 바탕으로 로봇이 개인의 맥락을 이해하도록 연구합니다. 자람이는 건강·돌봄 여권의 장치별 최소권한 연결 기반을 먼저 구현했습니다.'

export const metadata: Metadata = buildPageMetadata({
  title: 'Robot Vision | 삶의 맥락을 이해하는 초개인화 로봇 AI 연구 - 드림에이아이랩',
  description: pageDescription,
  path: pagePath,
  ogTitle: 'Robot Vision — Human Life Intelligence for Embodied AI',
  ogImage: '/images/research/robot-vision-og.png',
  ogImageAlt: 'Robot Vision — 인간 삶의 맥락과 결과를 학습하는 드림에이아이랩 로봇 AI 연구',
  type: 'article',
})

const breadcrumbLd = buildBreadcrumbJsonLd([
  { name: '홈', url: `${SITE_URL}/` },
  { name: '미래 연구', url: absoluteUrl('/research') },
  { name: 'Robot Vision', url: absoluteUrl(pagePath) },
])

const techLd = {
  '@context': 'https://schema.org', '@type': 'TechArticle',
  headline: 'Robot Vision — Human Life Intelligence for Embodied AI', description: pageDescription,
  author: { '@type': 'Organization', name: 'Dream AI Lab' }, publisher: { '@type': 'Organization', name: 'Dream AI Lab', url: SITE_URL },
  mainEntityOfPage: absoluteUrl(pagePath), inLanguage: 'ko-KR', datePublished: '2026-07-21', dateModified: '2026-09-11',
  keywords: ['Robot Vision', 'Embodied AI', 'AI Digital Care Log', 'RWD', 'RWE', '초개인화 로봇', '돌봄 로봇', '자람이 건강 돌봄 여권', '발달장애인 로봇 돌봄'],
}

const faqItems = [
  { q: 'Robot Vision은 판매 중인 로봇 제품인가요?', a: '아닙니다. 현재는 드림에이아이랩의 Research · Future Vision입니다. 특정 하드웨어 판매나 출시 일정을 뜻하지 않으며, 삶의 맥락을 이해하는 AI Brain과 안전한 로봇 연동 조건을 연구합니다.' },
  { q: '기존 로봇 AI와 무엇이 다른가요?', a: '장면 인식이나 단일 명령 수행을 넘어, 개인의 장기 기록·현재 상태·목표·위험·과거 개입 결과를 연결해 다음 도움을 판단하는 Human Life Intelligence를 중심에 둡니다.' },
  { q: '자람이에는 Robot Vision과 연결할 실제 기반이 있나요?', a: '있습니다. 자람이 건강·돌봄 여권에는 보호자·당사자 동의, 관리자 확인, 장치별 최소권한 토큰, 만료·폐기, 허용된 측정값 기록과 접근 감사가 구현돼 있습니다. 특정 로봇 하드웨어와의 상용 연동은 별도 PoC와 안전검증이 필요한 다음 단계입니다.' },
  { q: '돌봄·교육·금융 데이터가 한 데이터베이스에 합쳐지나요?', a: '아닙니다. 각 서비스의 원본 데이터는 동의·권한·법적 경계에 따라 분리합니다. 공유하는 것은 데이터 자체가 아니라 관찰·판단·실행·결과·복기라는 아키텍처와 검증 방법입니다.' },
  { q: '로봇이 투자나 의료 결정을 대신하나요?', a: '아닙니다. 의료·금융처럼 규제와 전문 권한이 필요한 판단은 설명·알림·정보 전달 범위로 제한하고, 진단·처방·투자 권유·금융 실행은 각 법령과 승인 주체, 연결 시스템의 권한을 따릅니다.' },
  { q: '로봇이 사람을 직접 만지거나 자율 행동하나요?', a: '현재 연구 중심은 관찰, 요약, 알림, 설명과 제안입니다. 사람 승인 없는 물리적 자율행동은 현재 범위가 아니며, 제한적 행동도 하드웨어 파트너·현장 책임자·안전 검증을 전제로 합니다.' },
  { q: '연구·로봇 하드웨어 협력은 어떻게 진행하나요?', a: 'R&D 문의를 통해 대상 현장, 해결하려는 과업, 사용 가능한 센서, 데이터 권리, 행동 권한과 검증 지표를 먼저 정의한 뒤 PoC 범위를 협의합니다.' },
]

const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) }

const principles: { title: string; body: string; icon: MarketingIconName }[] = [
  { title: '개인의 기준선', body: '평균적인 사람보다 이 사람의 평소 상태와 변화 폭을 먼저 이해합니다.', icon: 'user' },
  { title: '시간의 맥락', body: '지금 보이는 장면을 수면·식사·학습·돌봄·환경의 이전 기록과 연결합니다.', icon: 'clock' },
  { title: '도메인 지식', body: '돌봄·교육·건강·생활·금융마다 다른 위험과 전문 권한을 정책으로 분리합니다.', icon: 'blocks' },
  { title: '결과로 학습', body: '제안이 실제 도움이 되었는지 기록하고 다음 판단을 개인에게 맞춥니다.', icon: 'refresh' },
]

const scenarios = [
  { label: '돌봄 · 시니어', prompt: '“오늘 평소보다 움직임이 적어요.”', context: '최근 수면·식사·활동 기준선, 복약 일정, 보호자 관찰, 현재 센서 신호를 함께 확인합니다.', action: '로봇은 먼저 말을 걸고 상태를 확인한 뒤, 필요할 때 보호자나 담당자에게 근거와 함께 알립니다.', outcome: '응답 여부와 후속 조치를 기록해 다음 이상 신호 판단의 기준을 조정합니다.' },
  { label: '교육 · 발달', prompt: '“집중이 무너졌는데 학습을 계속해야 할까요?”', context: '개인별 집중 지속 시간, 과제 난이도, 감각 자극, 이전 휴식·중재 반응을 연결합니다.', action: '즉시 정답을 대신 주기보다 짧은 휴식, 난이도 조정, 시각 안내 중 적합한 선택을 제안합니다.', outcome: '어떤 지원 뒤 참여가 회복됐는지 교사·보호자가 확인하고 다음 수업에 반영합니다.' },
  { label: '생활 · 금융 인터페이스', prompt: '“이번 달 지출이 평소와 다른데 무엇부터 볼까요?”', context: '연결 권한이 있는 개인 금융 맥락과 설정, 위험 기준, 설명 가능한 판단 결과만 불러옵니다.', action: '로봇은 NoahAI Labs 등 권한 있는 금융 시스템의 분석을 읽기 쉬운 말로 설명하고 확인 항목을 안내합니다.', outcome: '로봇이 자산을 임의 운용하지 않으며, 결정·실행·책임은 금융 시스템과 사용자의 승인 경계에 남습니다.' },
]

const authority = [
  { level: 'L0', title: '관찰', body: '센서 신호를 기록하고 사람에게 보이게 합니다.', status: '현재 연구 중심' },
  { level: 'L1', title: '요약 · 알림', body: '변화와 근거를 설명하고 담당자에게 알립니다.', status: '현재 연구 중심' },
  { level: 'L2', title: '행동 제안', body: '선택지와 예상 영향을 제시하되 사람이 결정합니다.', status: '현재 연구 중심' },
  { level: 'L3', title: '승인된 제한 행동', body: '사전 정의된 장소·과업·시간·중단 규칙 안에서만 수행합니다.', status: '파트너 PoC 검증 대상' },
  { level: 'L4', title: '자율 물리 행동', body: '사람 승인 없이 접촉·이동·의료·금융 행위를 수행합니다.', status: '현재 범위 밖' },
]

const metrics = [
  ['맥락 이해', '개인 기준선 변화와 원인 후보를 얼마나 일관되게 설명하는가'],
  ['도움의 품질', '사용자·보호자·전문가가 제안을 이해하고 실제 과업 완료율이 높아졌는가'],
  ['안전', '잘못된 알림, 누락, 권한 밖 행동, 사람의 중단·수정 원인을 추적하는가'],
  ['개인화', '시간이 지날수록 불필요한 질문과 오탐을 줄이고 적합도를 높이는가'],
  ['접근성', '고령자·장애인·디지털 취약 사용자가 학습 부담 없이 이용할 수 있는가'],
  ['운영성', '장애·네트워크 단절·센서 오류에서 안전하게 멈추고 사람이 이어받는가'],
]

const jarameBridge = [
  ['01', '사람이 기록', '건강·응급정보, 의사소통 방법, 복약·검진과 생활관리 계획을 출처별로 정리합니다.'],
  ['02', '사람이 승인', '보호자 또는 성인 당사자가 장치가 볼 항목, 목적과 기간을 결정합니다.'],
  ['03', '장치 권한 발급', '시설·로봇·측정기마다 읽기와 측정 기록 범위를 분리한 토큰을 발급합니다.'],
  ['04', '최소정보 사용', '장치는 허용된 요약만 읽고, 조회와 측정 결과는 감사 이력에 남깁니다.'],
  ['05', '즉시 중단', '분실·교체·철회 시 토큰을 폐기하고 이후 접근을 차단합니다.'],
]

export default function RobotVisionPage() {
  return (
    <div className="company-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Header />
      <CompanyPageHero
        eyebrow="Research · Embodied AI"
        title={<>사람을 보는 로봇에서,<br className="hidden sm:block" /> 삶의 맥락을 이해하는 로봇으로</>}
        description={<p>Robot Vision은 돌봄·교육·생활·금융 등 인간 삶의 시간축 기록과 현실의 결과를 연결해, 로봇이 <strong>누구에게 왜 지금 어떤 도움이 필요한지</strong> 이해하도록 만드는 연구입니다.</p>}
        badges={['Human Life Intelligence', 'RWD · RWE', 'Hyper-personalization', 'Safety by authority']}
        status={<p><strong>현재 단계 · Research / Future Vision.</strong> 상용 로봇 판매나 출시 일정이 아니라 AI Brain, 권한 구조, 현장 검증 방법을 공개합니다.</p>}
        actions={[{ label: '연구 구조 보기', href: '#research-brief' }, { label: 'R&D 협력 문의', href: '/contact?type=tech&service=robot-vision', variant: 'secondary' }]}
      />
      <CompanyNarrativeNav current="/research" />

      <nav aria-label="Robot Vision 페이지 목차" className="sticky top-16 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
          {[['research-brief', '연구 정의'], ['jarame-bridge', '자람이 구현'], ['life-intelligence', '삶의 데이터'], ['architecture', '아키텍처'], ['scenarios', '이용 장면'], ['authority', '행동 권한'], ['evidence', '검증'], ['governance', '안전'], ['faq', 'FAQ']].map(([id, label]) => <a key={id} href={`#${id}`} className="whitespace-nowrap rounded-full border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-600 hover:border-primary-300 hover:text-primary-700">{label}</a>)}
        </div>
      </nav>

      <section id="research-brief" className="company-section"><div className="company-container">
        <div className="max-w-3xl"><p className="company-eyebrow">Research brief</p><h2 className="company-section-title">로봇의 몸보다 먼저, 삶을 이해하는 두뇌를 설계합니다</h2><p className="company-section-lead">DAL의 질문은 “로봇이 무엇을 할 수 있는가”가 아니라 “어떤 근거와 권한으로 이 사람을 도와도 되는가”입니다.</p></div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{principles.map((item) => <article key={item.title} className="company-card"><MarketingIcon name={item.icon} className="h-8 w-8 text-primary-700" /><h3 className="mt-5 text-lg font-black text-slate-950">{item.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p></article>)}</div>
      </div></section>

      <section id="jarame-bridge" className="company-section bg-emerald-50/70"><div className="company-container">
        <div className="max-w-4xl"><p className="text-sm font-black uppercase tracking-wider text-emerald-700">Vision to working foundation</p><h2 className="company-section-title mt-3">로봇 비전을 공상으로 두지 않기 위해, 자람이에 연결 기반을 먼저 만들었습니다</h2><p className="company-section-lead">Robot Vision이 상위 연구라면, 자람이 건강·돌봄 여권은 그 원칙을 발달장애 돌봄에 적용한 현재의 소프트웨어 기반입니다. 로봇이 사람을 처음 만났을 때 무엇을 알아야 하고, 누가 그 접근을 허용하며, 문제가 생기면 어떻게 끊을지를 먼저 구현했습니다.</p></div>
        <div className="mt-10 grid gap-4 lg:grid-cols-5">{jarameBridge.map(([step, title, body]) => <article key={step} className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm"><p className="text-xs font-black text-emerald-700">{step} · 자람이</p><h3 className="mt-3 text-lg font-black text-slate-950">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{body}</p></article>)}</div>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <article className="rounded-2xl border border-emerald-200 bg-white p-6"><p className="text-xs font-black uppercase tracking-wider text-emerald-700">현재 구현·자동 검증</p><h3 className="mt-3 text-xl font-black text-slate-950">건강·응급정보 구조화부터 장치 토큰 폐기까지</h3><ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700"><li>• 보호자·당사자 동의와 관리자 계정·역할 확인</li><li>• 장치별 최소권한, 최대 90일 만료와 즉시 폐기</li><li>• 허용된 측정값 기록, 중복 방지와 접근 감사</li><li>• PDF·JSON·QR·FHIR 형식의 제한된 인수인계</li></ul></article>
          <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6"><p className="text-xs font-black uppercase tracking-wider text-amber-700">다음 현장 검증</p><h3 className="mt-3 text-xl font-black text-slate-950">특정 로봇의 센서와 물리 행동은 파트너 PoC 영역</h3><p className="mt-4 text-sm leading-7 text-slate-700">현재 구현은 안전한 정보 연결 기반입니다. 실제 카메라·음성·이동·접촉·투약 등은 로봇 제조사와 시설 책임자가 과업·중단 규칙·오류 대응을 정하고 별도 안전검증을 통과해야 합니다. 상용 로봇 연동 완료를 주장하지 않습니다.</p></article>
        </div>
        <div className="mt-8 flex flex-wrap gap-3"><a href="https://jarame.or.kr/health-passport-guide" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-emerald-700 px-5 py-3 font-black text-white hover:bg-emerald-800">자람이 건강·돌봄 여권 보기</a><Link href="/news/98" className="rounded-lg border border-emerald-300 bg-white px-5 py-3 font-black text-emerald-800 hover:bg-emerald-50">보호자 이후 돌봄 기사 보기</Link></div>
      </div></section>

      <ResearchLifeIntelligence mode="robot" />

      <section id="architecture" className="company-section bg-slate-50"><div className="company-container">
        <div className="max-w-3xl"><p className="company-eyebrow">System architecture</p><h2 className="company-section-title">센서에서 행동까지, 중간에 맥락·권한·검증을 둡니다</h2></div>
        <div className="mt-10 grid gap-4 lg:grid-cols-5">{[
          ['01', 'Perception', '카메라·음성·센서·앱·사람의 관찰'], ['02', 'Timeline', '개인의 과거와 현재를 연결하는 사건·상태 기록'], ['03', 'Context Brain', '기준선·목표·위험·도메인 지식으로 행동 후보 생성'], ['04', 'Policy Guardian', '동의·권한·안전·법적 경계로 행동을 허용하거나 차단'], ['05', 'Action & Review', '말·안내·알림·승인 행동 뒤 결과를 기록하고 복기'],
        ].map(([step, title, body]) => <article key={step} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><p className="text-xs font-black text-primary-700">{step}</p><h3 className="mt-3 text-lg font-black text-slate-950">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{body}</p></article>)}</div>
        <div className="mt-8 rounded-2xl border border-primary-100 bg-blue-50 p-6 text-sm leading-7 text-slate-700"><strong className="text-slate-950">초개인화의 입력:</strong> 개인 기준선 + 시간·환경 맥락 + 현재 상태 + 목표·위험 + 과거 행동 + 실제 결과. 모델이 사용자를 임의로 규정하지 않고, 근거와 불확실성을 함께 보여주며 사람이 수정할 수 있어야 합니다.</div>
      </div></section>

      <section id="scenarios" className="company-section"><div className="company-container">
        <div className="max-w-3xl"><p className="company-eyebrow">Human scenarios</p><h2 className="company-section-title">로봇은 명령을 수행하기 전에 상황을 묻고 이해합니다</h2></div>
        <div className="mt-10 space-y-6">{scenarios.map((scenario, index) => <article key={scenario.label} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"><div className="grid lg:grid-cols-[0.75fr_1.25fr]"><div className="bg-slate-950 p-7 text-white"><p className="text-xs font-black uppercase tracking-wider text-sky-300">Scenario {index + 1} · {scenario.label}</p><h3 className="mt-4 text-2xl font-black leading-snug">{scenario.prompt}</h3></div><div className="grid gap-5 p-7 md:grid-cols-3">{[['맥락', scenario.context], ['도움', scenario.action], ['결과·경계', scenario.outcome]].map(([label, body]) => <div key={label}><p className="text-xs font-black text-primary-700">{label}</p><p className="mt-2 text-sm leading-6 text-slate-600">{body}</p></div>)}</div></div></article>)}</div>
      </div></section>

      <section id="authority" className="company-section bg-amber-50/60"><div className="company-container">
        <div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-wider text-amber-700">Action authority</p><h2 className="company-section-title mt-3">할 수 있는 행동보다, 해도 되는 행동을 먼저 정합니다</h2><p className="company-section-lead">권한 수준은 기능 목록이 아니라 연구·PoC를 통과하기 위한 안전 게이트입니다.</p></div>
        <div className="mt-10 grid gap-4 lg:grid-cols-5">{authority.map((item) => <article key={item.level} className="rounded-2xl border border-amber-200 bg-white p-5"><div className="flex items-center justify-between gap-2"><span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-black text-white">{item.level}</span><span className="text-[11px] font-bold text-amber-800">{item.status}</span></div><h3 className="mt-4 text-lg font-black text-slate-950">{item.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p></article>)}</div>
      </div></section>

      <section id="evidence" className="company-section"><div className="company-container">
        <div className="max-w-3xl"><p className="company-eyebrow">Evidence before autonomy</p><h2 className="company-section-title">데모가 아니라, 사람에게 실제 도움이 되었는지 검증합니다</h2><p className="company-section-lead">아래는 달성 수치가 아니라 연구·PoC에서 사전에 정의할 평가 항목입니다.</p></div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{metrics.map(([title, body]) => <article key={title} className="company-card"><h3 className="text-lg font-black text-slate-950">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{body}</p></article>)}</div>
        <div className="mt-8 grid gap-4 md:grid-cols-4">{['가설·대상·책임자 정의', '동의된 데이터와 기준선 확보', '관찰·알림 중심 샌드박스', '현장 결과 검증 후 권한 확대 판단'].map((item, index) => <div key={item} className="rounded-xl bg-slate-950 p-4 text-sm font-bold text-white"><span className="mr-2 text-sky-300">G{index + 1}</span>{item}</div>)}</div>
      </div></section>

      <section id="governance" className="company-section bg-slate-50"><div className="company-container"><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div><p className="company-eyebrow">Safety · Rights · Governance</p><h2 className="company-section-title">로봇이 데이터를 소유하지 않습니다</h2><p className="company-section-lead">사용자와 현장이 데이터의 목적·접근·보관·철회를 통제하고, 로봇은 허용된 맥락만 일시적으로 사용합니다.</p></div>
        <div className="grid gap-4 sm:grid-cols-2">{[
          ['목적별 동의', '돌봄·연구·모델 개선·외부 연동을 하나의 포괄 동의로 묶지 않습니다.'], ['최소 수집', '과업에 필요한 센서와 기간만 사용하고 원본 영상·음성 보관을 최소화합니다.'], ['설명·수정', '왜 알림이나 제안이 나왔는지 보여주고 사용자와 전문가가 맥락을 고칩니다.'], ['즉시 중단', '사람이 언제든 행동을 중단하고 수동 운영으로 전환할 수 있어야 합니다.'], ['도메인 분리', '의료·금융·교육의 원본과 실행 권한을 서로 넘기지 않습니다.'], ['감사 가능성', '입력·판단 근거·정책·승인·행동·결과를 재현 가능한 기록으로 남깁니다.'],
        ].map(([title, body]) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5"><h3 className="font-black text-slate-950">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{body}</p></article>)}</div>
      </div></div></section>

      <section id="faq" className="company-section"><div className="company-container max-w-4xl"><p className="company-eyebrow">FAQ</p><h2 className="company-section-title">자주 묻는 질문</h2><div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-6">{faqItems.map((item) => <details key={item.q} className="group py-5"><summary className="cursor-pointer list-none font-black text-slate-950">{item.q}<span className="float-right text-primary-700 group-open:rotate-45">＋</span></summary><p className="mt-3 pr-6 text-sm leading-7 text-slate-600">{item.a}</p></details>)}</div></div></section>

      <section className="border-t border-slate-200 bg-slate-950 py-16 text-white"><div className="mx-auto max-w-4xl px-4 text-center sm:px-6"><p className="text-sm font-black uppercase tracking-wider text-sky-300">Research collaboration</p><h2 className="mt-4 text-3xl font-black">현장 문제와 행동 권한부터 함께 정의합니다</h2><p className="mx-auto mt-4 max-w-2xl text-slate-300">돌봄기관·교육현장·로봇 하드웨어·센서·HRI·접근성·안전 연구 파트너와 단계별 PoC를 논의합니다.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Link href="/contact?type=tech&service=robot-vision" className="rounded-lg bg-sky-400 px-6 py-3 font-black text-slate-950 hover:bg-sky-300">R&D 협력 문의</Link><Link href="/research" className="rounded-lg border border-white/30 px-6 py-3 font-black hover:bg-white/10">미래 연구 전체 보기</Link></div></div></section>
      <Footer />
    </div>
  )
}
