import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { MarketingIcon, type MarketingIconName } from '../../../components/MarketingIcon'
import { absoluteUrl, buildBreadcrumbJsonLd, buildPageMetadata, SITE_URL } from '../../../lib/seo'

const pagePath = '/research/pet-ai'
const pageDescription =
  'Pet AI Digital Care Log — AI Digital Care Log를 반려동물에 확장하는 연구 프로젝트. Research · Technology Development · Future Vision. 상용 서비스가 아닌 기술 개발 초기 단계입니다.'

export const metadata: Metadata = buildPageMetadata({
  title: 'Pet AI Digital Care Log | Research · Future Vision | 드림에이아이랩',
  description: pageDescription,
  path: pagePath,
  ogTitle: 'Pet AI Digital Care Log — Research (Dream AI Lab)',
  type: 'article',
})

const breadcrumbLd = buildBreadcrumbJsonLd([
  { name: '홈', url: `${SITE_URL}/` },
  { name: 'Research', url: absoluteUrl('/research') },
  { name: 'Pet AI Digital Care Log', url: absoluteUrl(pagePath) },
])

const techLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Pet AI Digital Care Log — Research & Future Vision',
  description: pageDescription,
  author: { '@type': 'Organization', name: 'Dream AI Lab' },
  publisher: { '@type': 'Organization', name: 'Dream AI Lab', url: SITE_URL },
  inLanguage: 'ko-KR',
  dateModified: '2026-07-21',
  about: {
    '@type': 'Thing',
    name: 'Pet AI Digital Care Log',
    description: '반려동물 AI 디지털 케어로그 연구 프로젝트 (상용 서비스 아님)',
  },
}

const stages = [
  { label: 'Research', desc: '연구 과제 정의·가설 검증' },
  { label: 'Technology Development', desc: '기술 개발 초기' },
  { label: 'Future Vision', desc: '장기 비전 · 로봇 연동' },
]

const jarameReuse: { title: string; desc: string; icon: MarketingIconName }[] = [
  {
    title: '행동 분석',
    desc: '자람이에서 축적한 행동 패턴 분석 기술을 반려동물 관찰로 확장합니다.',
    icon: 'eye',
  },
  {
    title: '행동 해석',
    desc: '관찰된 신호를 보호자가 이해할 수 있는 언어로 번역하는 Behavior Translation을 연구합니다.',
    icon: 'chat',
  },
  {
    title: '이상 행동 탐지',
    desc: '평소와 다른 활동·식사·보행 패턴을 탐지하는 이상 탐지 연구를 이어갑니다.',
    icon: 'alert',
  },
  {
    title: 'AI 상담 · 리포트',
    desc: '일지·요약·상담형 설명을 자동 생성하는 구조를 반려동물 도메인에 맞게 재설계합니다.',
    icon: 'document',
  },
]

const visionAiPoints = [
  '카메라 기반 행동 인식',
  '자동 관찰',
  '자동 기록',
  '자동 일지 생성',
  'AI 요약',
  'AI 리포트',
]

const behaviorExamples = [
  '짖음',
  '공격성',
  '꼬리 움직임',
  '식사',
  '수면',
  '산책',
  '분리불안',
  '스트레스',
  '이상 행동',
]

const careLogHorizons = [
  { label: '하루', desc: '일일 관찰·활동·식사·배변 기록' },
  { label: '1개월', desc: '단기 추세·변화 패턴' },
  { label: '1년', desc: '계절·성장·건강 사이클' },
  { label: '평생', desc: '생애 전주기 Digital Care Log' },
]

const vetReportItems = [
  '행동 변화',
  '식사',
  '배변',
  '수면',
  '약물',
  '활동량',
  '이상 행동',
]

const recommendItems = [
  '장난감',
  '사료',
  '간식',
  '운동',
  '산책',
  '행동 교정',
  '환경 개선',
]

const reuseChains = [
  {
    from: '자람이',
    mid: 'Behavior Analysis',
    to: 'Pet',
    note: '행동 분석·해석·이상 탐지',
  },
  {
    from: '시니어앤라이프',
    mid: 'Health Monitoring',
    to: 'Pet',
    note: '건강 모니터링·장기 추적',
  },
  {
    from: '베지케어',
    mid: 'Environment Analysis',
    to: 'Pet',
    note: '환경·맥락 분석',
  },
]

export default function PetAiResearchPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techLd) }} />
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-900 via-indigo-800 to-slate-800 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-violet-200 mb-4 tracking-wide">
            Research · Technology Development · Future Vision
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Pet AI Digital Care Log</h1>
          <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed">
            AI Digital Care Log 기술을 반려동물에 적용하기 위한 차세대 연구 프로젝트
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {stages.map((s) => (
              <span
                key={s.label}
                className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-white/15 text-white"
              >
                {s.label}
              </span>
            ))}
          </div>
          <div className="rounded-xl bg-amber-500/20 border border-amber-300/40 px-5 py-4 max-w-2xl mx-auto text-left">
            <p className="text-sm text-amber-50 leading-relaxed">
              <strong className="text-white">상용 서비스가 아닙니다.</strong> 현재는 기술 개발 초기 · 연구
              개발 · 장기 비전 단계입니다. 출시 예정·가입·판매를 의미하지 않습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Current stage */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">현재 단계</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stages.map((s, i) => (
              <div
                key={s.label}
                className="rounded-xl border border-violet-100 bg-violet-50/60 p-5 text-center"
              >
                <div className="text-xs font-bold text-violet-500 mb-2">0{i + 1}</div>
                <h3 className="font-bold text-gray-900 mb-1">{s.label}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision expansion */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">확장 비전</h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dream AI Lab은 AI Digital Care Log 기술을 사람 → 동물 → 식물 → 로봇으로 확장합니다. 모든
              대상은 관찰 · 기록 · 분석 · 예측 · 맞춤형 관리라는 동일한 AI Core를 사용합니다.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10 text-sm font-semibold">
            {['사람', '동물', '식물', '로봇'].map((label, i) => (
              <div key={label} className="flex items-center gap-2 md:gap-3">
                <span className="px-4 py-2 rounded-lg bg-white border border-indigo-200 text-indigo-900 shadow-sm">
                  {label}
                </span>
                {i < 3 && <span className="text-gray-400">→</span>}
              </div>
            ))}
          </div>
          <div className="rounded-2xl overflow-hidden border border-indigo-100 shadow-sm">
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet="/images/research/one-ai-core-domains-mobile.svg"
              />
              <img
                src="/images/research/one-ai-core-domains.svg"
                alt="One AI Core Multiple Care Domains"
                className="w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
        </div>
      </section>

      {/* Technology from Jarame */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">기술 설명</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              기존{' '}
              <Link href="/services/jarame" className="text-primary-600 font-semibold hover:underline">
                자람이
              </Link>
              에서 개발한 행동 분석 · 행동 해석 · 이상 행동 탐지 · AI 상담 · 행동 리포트 기술을
              반려동물에 확장하는 연구입니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {jarameReuse.map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                <div className="mb-3 text-violet-700">
                  <MarketingIcon name={item.icon} className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack diagram */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">기술 스택 (연구 방향)</h2>
            <p className="text-gray-600">상용 운영 스택이 아닌 Research Technology Roadmap입니다.</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-violet-100 shadow-sm mb-6">
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet="/images/research/pet-ai-tech-stack-mobile.svg"
              />
              <img
                src="/images/research/pet-ai-tech-stack.svg"
                alt="Pet AI Technology Stack Research Pipeline"
                className="w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
          <p className="text-center text-xs text-gray-500">
            AI Core → Vision AI → OCR → Behavior Analysis → Health Analysis → Digital Care Log →
            Recommendation → Prediction → Robot Integration
          </p>
        </div>
      </section>

      {/* Vision AI */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <MarketingIcon name="camera" className="h-8 w-8 text-violet-700" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Vision AI</h2>
          </div>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            카메라 기반 관찰로 자동 기록·일지·요약·리포트를 연구합니다.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {visionAiPoints.map((p) => (
              <span
                key={p}
                className="inline-flex px-4 py-2 rounded-lg bg-violet-50 border border-violet-100 text-sm font-medium text-violet-900"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Behavior Translation */}
      <section className="py-14 bg-violet-50/70">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Behavior Translation</h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              사람이 이해하기 어려운 반려동물의 행동을 AI가 해석하여 보호자에게 설명하는{' '}
              <strong>Behavior Translation Engine</strong>을 연구합니다.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-violet-200 p-6 md:p-8">
            <p className="text-sm font-semibold text-violet-800 mb-4 text-center">분석 대상 예시</p>
            <div className="flex flex-wrap justify-center gap-2">
              {behaviorExamples.map((b) => (
                <span
                  key={b}
                  className="px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-sm text-gray-700"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Digital Care Log */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Digital Care Log</h2>
            <p className="text-gray-600">하루 · 1개월 · 1년 · 평생 데이터를 누적 관리하는 구조를 연구합니다.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {careLogHorizons.map((h) => (
              <div
                key={h.label}
                className="rounded-xl border border-indigo-100 bg-indigo-50/50 p-5 text-center"
              >
                <div className="text-lg font-bold text-indigo-900 mb-2">{h.label}</div>
                <p className="text-xs text-gray-600 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vet Future Vision */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold mb-4">
            Future Vision
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">동물병원 연동 비전</h2>
          <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
            장기적으로 진료 전에 AI Digital Care Report를 제공하는 방향을 연구합니다. 아래는 연구
            가설이며, 현재 제공되는 병원용 제품이 아닙니다.
          </p>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
            <div className="flex items-center gap-3 mb-5">
              <MarketingIcon name="stethoscope" className="h-7 w-7 text-primary-600" />
              <h3 className="text-lg font-bold text-gray-900">AI Digital Care Report (연구 가설)</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {vetReportItems.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-700"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm text-gray-500">행동·식사·배변·수면·약물·활동량·이상 행동을 자동 요약하는 방향</p>
          </div>
        </div>
      </section>

      {/* AI Daily Report */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-center">AI Daily Report</h2>
          <p className="text-center text-gray-600 mb-8">
            AI가 자동으로 오늘의 일지를 작성하는 연구 방향 예시입니다.
          </p>
          <blockquote className="max-w-2xl mx-auto rounded-2xl border border-violet-200 bg-violet-50/80 p-6 md:p-8">
            <p className="text-sm font-semibold text-violet-800 mb-4">예시 (연구 시나리오)</p>
            <ul className="space-y-3 text-gray-800 leading-relaxed">
              <li>오늘은 평균보다 활동량이 감소했습니다.</li>
              <li>식사 시간이 늦었습니다.</li>
              <li>왼쪽 다리를 절뚝이는 행동이 여러 차례 관찰되었습니다.</li>
            </ul>
          </blockquote>
        </div>
      </section>

      {/* Recommendations */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-center">맞춤 추천 (연구 방향)</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            누적 로그를 바탕으로 한 AI 추천 가설입니다. 현재 커머스·추천 서비스가 아닙니다.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {recommendItems.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm font-medium text-gray-700 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Robot Vision */}
      <section id="robot-vision" className="py-14 bg-slate-900 text-white scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-200 text-xs font-semibold mb-4 border border-amber-400/30">
            Robot Vision · 장기 Future Vision
          </div>
          <div className="flex items-center gap-3 mb-4">
            <MarketingIcon name="robot" className="h-9 w-9 text-amber-300" />
            <h2 className="text-2xl md:text-3xl font-bold">Robot Vision</h2>
          </div>
          <p className="text-white/85 text-lg leading-relaxed mb-8 max-w-3xl">
            장기적으로 AI Digital Care Log는 반려동물 돌봄 로봇의 AI Brain으로 확장합니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-xl border border-white/15 bg-white/5 p-6">
              <h3 className="font-bold text-amber-200 mb-2">로봇</h3>
              <p className="text-sm text-white/80 leading-relaxed">행동한다.</p>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 p-6">
              <h3 className="font-bold text-violet-200 mb-2">AI Digital Care Log</h3>
              <p className="text-sm text-white/80 leading-relaxed">관찰하고, 판단하고, 학습한다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Reuse */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Technology Reuse</h2>
            <p className="text-gray-600">AI Core는 공통 기술을 사용합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {reuseChains.map((c) => (
              <div
                key={c.from}
                className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-center"
              >
                <div className="font-bold text-primary-700 mb-1">{c.from}</div>
                <div className="text-gray-400 my-2">↓</div>
                <div className="text-sm font-semibold text-gray-700 mb-1">{c.mid}</div>
                <div className="text-gray-400 my-2">↓</div>
                <div className="font-bold text-violet-700 mb-3">Pet</div>
                <p className="text-xs text-gray-500">{c.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">연구 로드맵</h2>
            <p className="text-gray-600">출시 일정이 아닌 연구·기술 개발 방향입니다.</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-indigo-100 shadow-sm mb-8">
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet="/images/research/pet-ai-roadmap-mobile.svg"
              />
              <img
                src="/images/research/pet-ai-roadmap.svg"
                alt="Pet AI Digital Care Log Research Roadmap"
                className="w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
          <ol className="max-w-xl mx-auto space-y-4">
            {[
              { t: '현재', d: 'Human AI Digital Care Log' },
              { t: '2027', d: 'Pet AI Digital Care Log Research' },
              { t: '이후', d: 'Vision AI → Behavior Translation' },
              { t: '장기', d: 'Robot Integration (Future Vision)' },
            ].map((step) => (
              <li
                key={step.t}
                className="flex gap-4 items-start rounded-xl border border-gray-200 bg-white p-4"
              >
                <span className="shrink-0 w-16 text-sm font-bold text-violet-700">{step.t}</span>
                <span className="text-sm text-gray-700">{step.d}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gradient-to-r from-violet-800 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">연구·기술 협력 문의</h2>
          <p className="text-white/85 mb-8 max-w-2xl mx-auto">
            Pet AI Digital Care Log는 연구·Future Vision 영역입니다. 제품 가입이 아닌 R&D·기술 협력
            관점으로 문의해 주세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact?type=tech&service=research"
              className="inline-flex justify-center px-6 py-3 rounded-lg bg-white text-violet-800 font-semibold hover:bg-gray-100"
            >
              R&D 문의
            </Link>
            <Link
              href="/research"
              className="inline-flex justify-center px-6 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10"
            >
              Research 허브
            </Link>
            <Link
              href="/technology"
              className="inline-flex justify-center px-6 py-3 rounded-lg border-2 border-white/60 text-white font-semibold hover:bg-white/10"
            >
              기술 보기
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
