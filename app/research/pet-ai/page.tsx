import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import CompanyPageHero from '../../../components/CompanyPageHero'
import CompanyNarrativeNav from '../../../components/CompanyNarrativeNav'
import ResearchLifeIntelligence from '../../../components/ResearchLifeIntelligence'
import { MarketingIcon, type MarketingIconName } from '../../../components/MarketingIcon'
import { absoluteUrl, buildBreadcrumbJsonLd, buildPageMetadata, SITE_URL } from '../../../lib/seo'

const pagePath = '/research/pet-ai'
const pageDescription = 'Pet AI Digital Care Log는 반려동물의 행동·생활·환경을 시간축 RWD로 연결하고, 개체별 기준선과 실제 결과를 학습해 보호자의 이해와 돌봄을 돕는 초개인화 Life Companion Intelligence 연구입니다.'

export const metadata: Metadata = buildPageMetadata({
  title: 'Pet AI Digital Care Log | 반려동물 초개인화 Life Companion AI 연구 - 드림에이아이랩',
  description: pageDescription,
  path: pagePath,
  ogTitle: 'Pet AI Digital Care Log — Life Companion Intelligence',
  ogImage: '/images/research/pet-ai-og.png',
  ogImageAlt: 'Pet AI Digital Care Log — 반려동물의 하루와 평생을 이해하는 AI 연구',
  type: 'article',
})

const breadcrumbLd = buildBreadcrumbJsonLd([
  { name: '홈', url: `${SITE_URL}/` },
  { name: '미래 연구', url: absoluteUrl('/research') },
  { name: 'Pet AI Digital Care Log', url: absoluteUrl(pagePath) },
])

const techLd = {
  '@context': 'https://schema.org', '@type': 'TechArticle',
  headline: 'Pet AI Digital Care Log — Personalized Life Companion Intelligence', description: pageDescription,
  author: { '@type': 'Organization', name: 'Dream AI Lab' }, publisher: { '@type': 'Organization', name: 'Dream AI Lab', url: SITE_URL },
  mainEntityOfPage: absoluteUrl(pagePath), inLanguage: 'ko-KR', datePublished: '2026-07-21', dateModified: '2026-08-24',
  keywords: ['Pet AI', 'Digital Care Log', '반려동물 AI', '펫테크', 'RWD', '초개인화', 'Life Companion Intelligence'],
}

const faqItems = [
  { q: 'Pet AI Digital Care Log는 동물병원 앱인가요?', a: '아닙니다. 반려동물의 일상 행동·생활·환경을 이해하고 보호자의 돌봄을 돕는 Life Companion Intelligence 연구입니다. 건강 이상 가능성이 있을 때 수의사 상담을 준비하는 경로는 포함할 수 있지만 진단·처방을 대신하지 않습니다.' },
  { q: '이미 출시된 서비스인가요?', a: '아닙니다. 현재는 Research · Technology Development 단계이며 가입·판매·출시 일정을 의미하지 않습니다. 이 페이지는 연구 질문, 경험 구조, 검증 기준과 안전 원칙을 공개합니다.' },
  { q: 'AI가 반려동물의 감정을 확정하나요?', a: '아닙니다. 영상·행동·환경 신호로 불안이나 스트레스 가능성 같은 가설과 신뢰도를 제시할 수 있지만 감정을 단정하지 않습니다. 보호자의 관찰과 필요 시 수의학적 평가로 확인합니다.' },
  { q: '어떻게 개체별로 개인화하나요?', a: '품종 평균만 적용하지 않고 각 반려동물의 수면·식사·활동·행동·환경에 대한 평소 기준선을 먼저 만듭니다. 제안 이후 실제 반응을 기록해 다음 안내의 적합도를 조정합니다.' },
  { q: '카메라 영상을 계속 저장하나요?', a: '연구·PoC 설계에서 목적별 동의, 최소 수집, 원본 보관 최소화, 보관기간, 철회와 삭제를 먼저 정합니다. 가능한 경우 기기 내 처리와 사건 중심 특징값을 우선 검토합니다.' },
  { q: '로봇 연동도 포함하나요?', a: 'Pet AI는 로봇 없이도 성립하는 AI Brain 연구입니다. 급식·놀이·관찰 같은 물리적 행동 연동은 별도 Robot Vision에서 행동 권한과 안전 검증을 통과한 뒤 검토합니다.' },
]
const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) }

const capabilities: { title: string; body: string; icon: MarketingIconName }[] = [
  { title: '나만의 기준선', body: '품종·나이 평균과 함께 이 아이의 평소 수면·식사·활동·행동 패턴을 만듭니다.', icon: 'user' },
  { title: '일상의 번역', body: '짖음·숨기·핥기·산책 거부 같은 변화를 환경과 과거 기록 속에서 해석합니다.', icon: 'chat' },
  { title: '필요한 다음 도움', body: '놀이·산책·휴식·환경 조정·전문가 상담 중 지금 확인할 선택지를 제시합니다.', icon: 'target' },
  { title: '결과로 개인화', body: '보호자가 무엇을 선택했고 실제 반응이 어땠는지 기록해 다음 판단을 조정합니다.', icon: 'refresh' },
]

const storySteps = [
  { time: '07:30', title: '평소와 다른 아침', signal: '사료를 절반만 먹고 활동량이 개인 기준선보다 낮습니다.', question: '최근 수면, 실내 온도, 전날 산책과 다른 행동이 있었나요?', support: '보호자가 “밤에 두 번 깼다”고 확인하고 사건을 기록합니다.' },
  { time: '12:10', title: '맥락을 다시 확인', signal: '오전 내내 휴식이 길지만 구토·호흡 이상 신호는 관찰되지 않았습니다.', question: '간식·놀이 반응과 특정 부위 핥기 여부를 확인할까요?', support: 'AI는 진단하지 않고 확인 순서와 기록 항목을 제시합니다.' },
  { time: '18:30', title: '낮은 강도의 도움', signal: '날씨와 컨디션을 고려해 짧은 산책과 조용한 놀이를 후보로 제시합니다.', question: '보호자가 선택한 뒤 반응을 30분 후 기록할까요?', support: '산책 뒤 식사와 활동이 회복됐는지 다음 판단의 결과 데이터로 남깁니다.' },
  { time: '다음 날', title: '복기와 기준선 업데이트', signal: '회복되면 일시 변화로 기록하고, 지속되거나 위험 신호가 추가되면 상담을 권합니다.', question: '수의사에게 보여줄 시간축 요약을 만들까요?', support: '보호자가 확인한 사실과 AI 가설을 구분한 리포트를 준비합니다.' },
]

const signalExamples = [
  ['짖음 증가', '외부 자극·무료함·불편감·불안 가능성', '시간대, 소리, 보호자 부재, 활동량'],
  ['숨기·접촉 회피', '스트레스·통증·환경 변화 가능성', '자세, 이동, 식사, 최근 사건'],
  ['반복 핥기', '습관·피부 불편·긴장 완화 행동 가능성', '부위, 빈도, 피부 상태, 상황'],
  ['산책 거부', '피로·날씨·두려움·신체 불편 가능성', '기온, 노면, 보행, 최근 활동'],
  ['수면 증가', '계절·연령·활동 감소·컨디션 변화 가능성', '개인 기준선, 식사, 배변, 반응성'],
  ['공격 반응', '공포·통증·자원 보호·과자극 가능성', '직전 상황, 거리, 대상, 회복 시간'],
]

const gates = [
  ['G1 · 데이터 품질', '관찰 기준, 라벨 근거, 기기 편향, 누락과 보호자 수정 이력을 확인합니다.'],
  ['G2 · 행동 가설', '정답 감정 라벨 대신 여러 원인 후보와 신뢰도, 추가 확인 질문을 평가합니다.'],
  ['G3 · 도움의 결과', '제안 수용률만이 아니라 동물의 스트레스·생활 변화·보호자 부담을 함께 봅니다.'],
  ['G4 · 안전 전환', '위험 신호, 반복 악화, 불확실성 증가 때 사람·수의사에게 연결되는지 확인합니다.'],
]

export default function PetAiPage() {
  return (
    <div className="company-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Header />
      <CompanyPageHero
        eyebrow="Research · Life Companion Intelligence"
        title={<>반려동물의 하루를 기록하고,<br className="hidden sm:block" /> 평생의 맥락을 이해합니다</>}
        description={<p>Pet AI Digital Care Log는 행동·생활·환경을 시간축으로 연결하고, <strong>그 아이만의 기준선과 실제 반응</strong>을 학습해 보호자가 더 잘 이해하고 돌보도록 돕는 초개인화 AI 연구입니다.</p>}
        badges={['Animal RWD', 'Individual baseline', 'Explainable hypothesis', 'Welfare first']}
        status={<p><strong>현재 단계 · Research / Technology Development.</strong> 상용 서비스나 동물병원 진단 도구가 아니며, 연구 가설과 검증 구조를 공개합니다.</p>}
        actions={[{ label: '하루 시나리오 보기', href: '#scenario' }, { label: 'R&D 협력 문의', href: '/contact?type=tech&service=pet-ai', variant: 'secondary' }]}
      />
      <CompanyNarrativeNav current="/research" />

      <nav aria-label="Pet AI 페이지 목차" className="sticky top-16 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
          {[['research-brief', '연구 정의'], ['scenario', '하루 시나리오'], ['life-intelligence', 'RWD·개인화'], ['architecture', '아키텍처'], ['signals', '행동 가설'], ['evidence', '검증'], ['governance', '동물복지'], ['faq', 'FAQ']].map(([id, label]) => <a key={id} href={`#${id}`} className="whitespace-nowrap rounded-full border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-600 hover:border-violet-300 hover:text-violet-700">{label}</a>)}
        </div>
      </nav>

      <section id="research-brief" className="company-section"><div className="company-container">
        <div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-wider text-violet-700">Research brief</p><h2 className="company-section-title mt-3">보호자가 “왜 그럴까”를 혼자 추측하지 않도록</h2><p className="company-section-lead">Pet AI는 감정을 단정하거나 질병을 진단하는 AI가 아닙니다. 흩어진 일상 신호를 맥락으로 연결하고, 가능한 이유와 다음 확인 순서를 설명하는 동반자형 AI를 연구합니다.</p></div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{capabilities.map((item) => <article key={item.title} className="company-card"><MarketingIcon name={item.icon} className="h-8 w-8 text-violet-700" /><h3 className="mt-5 text-lg font-black text-slate-950">{item.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p></article>)}</div>
        <div className="mt-8 rounded-2xl border border-violet-200 bg-violet-50 p-6 text-sm leading-7 text-slate-700"><strong className="text-violet-950">연구 범위:</strong> 생활 관찰·행동 변화·환경·보호자 기록·개체별 기준선·설명 가능한 돌봄 제안. <strong className="text-violet-950">현재 범위 밖:</strong> AI 단독 진단·처방, 감정의 확정, 검증 없는 자동 구매, 사람 승인 없는 로봇 행동.</div>
      </div></section>

      <section id="scenario" className="company-section bg-violet-50/50"><div className="company-container">
        <div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-wider text-violet-700">A day with Pet AI</p><h2 className="company-section-title mt-3">“오늘 밥을 덜 먹었어요”에서 시작하는 실제 사용 흐름</h2><p className="company-section-lead">한 번에 결론을 내리지 않고, 필요한 질문만 묻고 보호자가 확인한 사실을 쌓아 다음 도움까지 연결합니다.</p></div>
        <div className="mt-10 space-y-4">{storySteps.map((step, index) => <article key={step.time} className="grid gap-5 rounded-2xl border border-violet-200 bg-white p-6 shadow-sm lg:grid-cols-[0.25fr_0.75fr_1fr_1fr]"><div><span className="rounded-full bg-violet-700 px-3 py-1 text-xs font-black text-white">{step.time}</span><p className="mt-3 text-xs font-bold text-violet-700">STEP {index + 1}</p></div><h3 className="text-lg font-black text-slate-950">{step.title}</h3><div><p className="text-xs font-black text-slate-500">AI가 보는 변화</p><p className="mt-2 text-sm leading-6 text-slate-600">{step.signal}</p></div><div><p className="text-xs font-black text-violet-700">질문 → 보호자 확인</p><p className="mt-2 text-sm font-semibold leading-6 text-slate-800">{step.question}</p><p className="mt-2 text-xs leading-5 text-slate-500">{step.support}</p></div></article>)}</div>
      </div></section>

      <ResearchLifeIntelligence mode="pet" />

      <section id="architecture" className="company-section bg-slate-50"><div className="company-container">
        <div className="max-w-3xl"><p className="company-eyebrow">Pet intelligence architecture</p><h2 className="company-section-title">영상 한 장이 아니라, 관찰과 확인과 결과의 폐쇄루프</h2></div>
        <div className="mt-10 grid gap-4 lg:grid-cols-6">{[
          ['01', 'Observe', '카메라·웨어러블·환경 센서·보호자 입력'], ['02', 'Normalize', '시간·대상·상황·데이터 품질을 표준화'], ['03', 'Baseline', '개체별 평소 범위와 장기 변화를 학습'], ['04', 'Hypothesize', '가능한 원인과 불확실성, 확인 질문을 생성'], ['05', 'Support', '놀이·산책·환경 조정·전문가 연결을 제안'], ['06', 'Review', '보호자 확인과 실제 반응으로 다음 판단을 조정'],
        ].map(([n, title, body]) => <article key={n} className="rounded-2xl border border-slate-200 bg-white p-5"><p className="text-xs font-black text-violet-700">{n}</p><h3 className="mt-3 text-base font-black text-slate-950">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{body}</p></article>)}</div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">{[
          ['기기 내 처리 우선', '가능한 경우 원본 영상 전체보다 사건·특징값을 기기에서 처리합니다.'], ['사실과 가설 분리', '관찰된 사실, 보호자가 확인한 사실, AI의 원인 후보를 구분해 표시합니다.'], ['전문가 전환', '위험·지속·불확실성이 기준을 넘으면 수의사 상담용 시간축 요약을 준비합니다.'],
        ].map(([title, body]) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5"><h3 className="font-black text-slate-950">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{body}</p></article>)}</div>
      </div></section>

      <section id="signals" className="company-section"><div className="company-container">
        <div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-wider text-violet-700">Signals, not diagnoses</p><h2 className="company-section-title mt-3">행동을 감정 라벨 하나로 단정하지 않습니다</h2><p className="company-section-lead">같은 행동도 환경·건강·관계·과거 경험에 따라 의미가 달라집니다. AI는 복수 가설과 확인할 맥락을 제시합니다.</p></div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white"><div className="hidden grid-cols-[0.7fr_1.1fr_1.2fr] bg-slate-950 px-6 py-4 text-xs font-black text-white md:grid"><span>관찰 신호</span><span>가능성 · 확정 아님</span><span>함께 확인할 맥락</span></div>{signalExamples.map(([signal, hypothesis, context]) => <div key={signal} className="grid gap-2 border-t border-slate-200 p-5 first:border-t-0 md:grid-cols-[0.7fr_1.1fr_1.2fr] md:px-6"><strong className="text-slate-950">{signal}</strong><span className="text-sm text-violet-800">{hypothesis}</span><span className="text-sm text-slate-600">{context}</span></div>)}</div>
      </div></section>

      <section id="evidence" className="company-section bg-violet-50/50"><div className="company-container">
        <div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-wider text-violet-700">Research gates</p><h2 className="company-section-title mt-3">기능 수보다 데이터 품질과 동물복지를 먼저 검증합니다</h2><p className="company-section-lead">아래는 달성했다고 주장하는 수치가 아니라 연구와 파트너 PoC가 통과해야 할 게이트입니다.</p></div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">{gates.map(([title, body]) => <article key={title} className="rounded-2xl border border-violet-200 bg-white p-6"><h3 className="text-lg font-black text-violet-950">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{body}</p></article>)}</div>
        <div className="mt-8 rounded-2xl bg-slate-950 p-6 text-sm leading-7 text-slate-300"><strong className="text-white">핵심 평가 항목:</strong> 보호자 수정 후 가설 품질, 위험 신호 누락·오탐, 추가 질문 수, 제안 후 행동·생활 변화, 보호자 부담, 전문가 전환 적시성, 데이터 철회·삭제 완료율. 연구 대상과 상황에 따라 사전 기준을 별도로 정합니다.</div>
      </div></section>

      <section id="governance" className="company-section"><div className="company-container"><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div><p className="company-eyebrow">Animal welfare · Data rights</p><h2 className="company-section-title">편리함보다 반려동물의 복지와 보호자의 통제권</h2><p className="company-section-lead">말할 수 없는 대상을 다루기 때문에 더 보수적으로 관찰하고, 확신보다 불확실성을 드러냅니다.</p></div>
        <div className="grid gap-4 sm:grid-cols-2">{[
          ['보호자 동의와 철회', '수집 목적·센서·보관기간·연구 이용을 나누고 언제든 철회·삭제할 수 있어야 합니다.'], ['동물에게 해가 없는 관찰', '훈련 데이터 확보를 위해 스트레스나 위험 상황을 의도적으로 만들지 않습니다.'], ['자동 구매 제한', '추천과 광고를 구분하고 건강·영양 제품은 검증되지 않은 효과를 주장하지 않습니다.'], ['사람의 최종 확인', 'AI 가설과 제안은 보호자가 수정·거부할 수 있으며 의료 판단은 수의사에게 남습니다.'], ['편향 점검', '품종·나이·털색·주거환경·카메라 조건에 따른 성능 차이를 따로 평가합니다.'], ['원본 최소화', '필요하지 않은 사생활 영상·음성의 외부 전송과 장기 보관을 최소화합니다.'],
        ].map(([title, body]) => <article key={title} className="company-card"><h3 className="font-black text-slate-950">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{body}</p></article>)}</div>
      </div></div></section>

      <section id="faq" className="company-section bg-slate-50"><div className="company-container max-w-4xl"><p className="company-eyebrow">FAQ</p><h2 className="company-section-title">자주 묻는 질문</h2><div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-6">{faqItems.map((item) => <details key={item.q} className="group py-5"><summary className="cursor-pointer list-none font-black text-slate-950">{item.q}<span className="float-right text-violet-700 group-open:rotate-45">＋</span></summary><p className="mt-3 pr-6 text-sm leading-7 text-slate-600">{item.a}</p></details>)}</div></div></section>

      <section className="bg-violet-950 py-16 text-white"><div className="mx-auto max-w-4xl px-4 text-center sm:px-6"><p className="text-sm font-black uppercase tracking-wider text-violet-300">Research collaboration</p><h2 className="mt-4 text-3xl font-black">반려동물의 실제 삶에서 검증할 파트너를 찾습니다</h2><p className="mx-auto mt-4 max-w-2xl text-violet-100/80">동물행동·수의학·동물복지·Vision AI·웨어러블·펫 서비스 파트너와 데이터 권리와 평가 기준부터 함께 설계합니다.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Link href="/contact?type=tech&service=pet-ai" className="rounded-lg bg-violet-300 px-6 py-3 font-black text-violet-950 hover:bg-violet-200">R&D 협력 문의</Link><Link href="/research/robot-vision" className="rounded-lg border border-white/30 px-6 py-3 font-black hover:bg-white/10">Robot Vision 연결 보기</Link></div></div></section>
      <Footer />
    </div>
  )
}
