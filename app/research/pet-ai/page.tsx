import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { MarketingIcon, type MarketingIconName } from '../../../components/MarketingIcon'
import { absoluteUrl, buildBreadcrumbJsonLd, buildPageMetadata, SITE_URL } from '../../../lib/seo'

const pagePath = '/research/pet-ai'
const pageDescription =
  'Pet AI Digital Care Log — 반려동물의 삶 전체(행동·감정·환경·생활)를 AI가 지속적으로 관찰·이해·학습하고 맞춤 판단을 내리는 Life Companion Intelligence 연구. 병원은 AI가 필요하다고 판단할 때만 연결되는 선택지 중 하나이며, 의료 플랫폼이 아닙니다. Research · Technology Development · Future Vision · Long-term Vision 단계이며 상용 서비스가 아닙니다.'

export const metadata: Metadata = buildPageMetadata({
  title: 'Pet AI Digital Care Log | Life Companion Intelligence | 드림에이아이랩',
  description: pageDescription,
  path: pagePath,
  ogTitle: 'Pet AI Digital Care Log — Life Companion Intelligence (Dream AI Lab)',
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
  headline: 'Pet AI Digital Care Log — Life Companion Intelligence Research',
  description: pageDescription,
  author: { '@type': 'Organization', name: 'Dream AI Lab' },
  publisher: { '@type': 'Organization', name: 'Dream AI Lab', url: SITE_URL },
  inLanguage: 'ko-KR',
  dateModified: '2026-07-21',
  about: {
    '@type': 'Thing',
    name: 'Pet AI Digital Care Log',
    description:
      '반려동물의 삶 전체를 관찰·이해·학습·개인화하는 AI Brain 연구 프로젝트 (의료 플랫폼·상용 서비스 아님)',
  },
}

const faqItems: { q: string; a: string }[] = [
  {
    q: '동물병원 진료 앱인가요?',
    a: '아닙니다. Pet AI Digital Care Log는 의료 플랫폼이 아니라, 반려동물의 하루 전체 — 행동 · 감정 · 환경 · 생활 습관을 AI가 지속적으로 관찰하고 이해하는 Life Companion Intelligence 연구입니다. 병원은 AI가 필요하다고 판단할 때만 연결되는 여러 선택지 중 하나일 뿐, 이 연구의 중심이 아닙니다.',
  },
  {
    q: '이미 출시된 상용 서비스인가요?',
    a: '아닙니다. Research · Technology Development · Future Vision · Long-term Vision 단계입니다. 가입 · 구매 · 출시 일정을 의미하지 않으며, 이 페이지는 연구 방향을 설명하기 위한 자료입니다.',
  },
  {
    q: '자람이의 반려동물 버전인가요?',
    a: '아닙니다. 자람이의 행동 분석 기술을 일부 재사용하지만, Pet AI Digital Care Log는 사람 → 동물 → 식물 → 로봇으로 확장되는 Universal AI Care Intelligence Platform의 한 축입니다. 특정 서비스를 다른 대상에 옮겨 붙인 것이 아니라, 반려동물의 생애 전체를 이해하는 별도의 AI Brain 연구입니다.',
  },
  {
    q: '로봇이 반려동물을 돌봐주나요?',
    a: '이 페이지의 범위가 아닙니다. 로봇 연동은 자람이 · 시니어앤라이프 · 토탈케어로그 · 에듀케어로그 · 베지케어 · Pet AI를 함께 아우르는 별도의 도메인 횡단 연구인 Robot Vision에서 다룹니다. 이 페이지는 로봇 없이도 성립하는 관찰 · 이해 · 추천 AI Brain 자체를 설명합니다.',
  },
  {
    q: '병원 리포트 · 진료 연계는 전혀 없나요?',
    a: '있습니다. 다만 병원은 전체 삶 중 AI가 이상 신호를 판단했을 때만 연결되는 작은 한 기능입니다. 평상시에는 행동 · 감정 · 환경 · 생활 추천이 중심이며, 병원 연동은 "필요 시에만" 작동하는 선택적 경로로 설계 방향을 검토합니다.',
  },
  {
    q: '투자 · 비즈니스 제휴는 어떻게 논의하나요?',
    a: 'R&D · 기술 협력 관점의 문의를 받고 있습니다. 페이지 하단 문의 채널을 통해 연구 단계, 재사용 가능한 기술 자산, Human → Animal → Plant → Robot 확장 로드맵을 함께 설명드립니다.',
  },
]

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

const stages: { label: string; desc: string }[] = [
  { label: 'Research', desc: '연구 과제 정의 · 가설 검증' },
  { label: 'Technology Development', desc: '기존 AI Core 재학습 · 기술 개발 초기' },
  { label: 'Future Vision', desc: '장기 방향 · 병원 연계 등 선택적 확장' },
  { label: 'Long-term Vision', desc: 'Human → Animal → Plant → Robot 전체 확장' },
]

const tocSections: { id: string; label: string }[] = [
  { id: 'philosophy', label: '철학' },
  { id: 'care-log', label: '새로운 정의' },
  { id: 'platform-vision', label: 'Platform Vision' },
  { id: 'life-companion', label: 'Life Companion' },
  { id: 'tech-architecture', label: '기술 아키텍처' },
  { id: 'behavior-translation', label: '행동 번역' },
  { id: 'life-management', label: '생활 관리 AI' },
  { id: 'vision-ai', label: 'Vision AI' },
  { id: 'emotion-ai', label: 'Emotion AI' },
  { id: 'behavior-coaching', label: '행동 코칭' },
  { id: 'environment-ai', label: 'Environment AI' },
  { id: 'recommendation', label: '추천 엔진' },
  { id: 'shopping-ai', label: 'Shopping Intelligence' },
  { id: 'daily-report', label: 'AI 데일리 리포트' },
  { id: 'digital-life', label: '디지털 라이프' },
  { id: 'hospital', label: '병원 (일부)' },
  { id: 'robot-vision', label: 'Robot Vision' },
  { id: 'tech-reuse', label: '기술 재사용' },
  { id: 'roadmap', label: '로드맵' },
  { id: 'value', label: '가치 제안' },
  { id: 'faq', label: 'FAQ' },
]

const notStatements: string[] = [
  '동물병원 진료 · 예약 앱이 아닙니다',
  '자람이를 반려동물에 옮겨 붙인 버전이 아닙니다',
  '지금 판매 · 가입 가능한 상용 서비스가 아닙니다',
  '병원 진료가 중심이 되는 헬스케어 플랫폼이 아닙니다',
]

const isStatements: string[] = [
  '반려동물의 하루 전체를 이해하는 AI Brain 연구입니다',
  '행동 · 감정 · 환경 · 생활을 관찰 · 해석 · 추천하는 Life Companion Intelligence입니다',
  '병원은 AI가 필요하다고 판단할 때만 연결되는 선택지 중 하나일 뿐입니다',
  'Human → Animal → Plant → Robot으로 확장되는 Universal AI Care Intelligence Platform입니다',
]

const platformDomains: { label: string; desc: string; href: string }[] = [
  { label: 'Human', desc: '사람 · 현재 AI Digital Care Log', href: '/services' },
  { label: 'Animal', desc: '반려동물 · 이 페이지의 연구', href: '/research/pet-ai' },
  { label: 'Plant', desc: '식물 · 웰니스 · 베지케어', href: '/services/veggie' },
  { label: 'Robot', desc: '로봇 · 장기 비전', href: '/research/robot-vision' },
]

const lifeCompanionLoop: { n: number; title: string; body: string; icon: MarketingIconName }[] = [
  {
    n: 1,
    title: '관찰 (Vision AI)',
    body: '카메라와 보호자 입력으로 식사 · 수면 · 놀이 · 산책 같은 일상 신호를 지속적으로 모읍니다.',
    icon: 'eye',
  },
  {
    n: 2,
    title: '이해 (Behavior · Emotion Translation)',
    body: '모인 신호를 행동 · 감정 언어로 번역해 "왜 그런 행동을 했는지" 보호자가 이해할 수 있게 만듭니다.',
    icon: 'brain',
  },
  {
    n: 3,
    title: '학습 (하루 ~ 평생 패턴 축적)',
    body: '하루 단위 관찰이 평생 단위 패턴으로 쌓이며, 반려동물 개체마다 다른 기준선을 개인화합니다.',
    icon: 'refresh',
  },
  {
    n: 4,
    title: '생활 추천 (산책 · 놀이 · 훈련 · 환경)',
    body: '누적된 이해를 바탕으로 오늘 필요한 산책 · 놀이 · 훈련 · 환경 조정을 제안합니다.',
    icon: 'target',
  },
  {
    n: 5,
    title: '추천 · 커머스 (Shopping AI)',
    body: '생활 추천이 필요하면 사료 · 장난감 · 서비스로 자연스럽게 이어지는 비광고형 추천을 검토합니다.',
    icon: 'heart',
  },
  {
    n: 6,
    title: '병원 (필요 시에만, 일부)',
    body: 'AI가 이상 신호를 판단했을 때만 리포트를 공유하는 선택 경로입니다. 전체 루프의 일부일 뿐입니다.',
    icon: 'stethoscope',
  },
]

const techArchitectureLayers: string[] = [
  'Vision AI',
  'OCR',
  'Behavior',
  'Emotion',
  'Environment',
  'Care Log',
  'Personal',
  'Recommend',
  'Prediction',
  'Robot API',
]

const techReuseFromServices: { from: string; to: string; desc: string; icon: MarketingIconName }[] = [
  {
    from: '자람이',
    to: 'Behavior / Coaching',
    desc: '행동 분석 · 해석 · 중재 기술을 반려동물의 문제 행동 설명 · 교정 추천에 재적용합니다.',
    icon: 'eye',
  },
  {
    from: '시니어앤라이프',
    to: 'Health Monitoring',
    desc: '장기 추적 · 변화 감지 로직을 재사용해 필요할 때만 병원 리포트(일부)를 생성합니다.',
    icon: 'trend',
  },
  {
    from: '베지케어',
    to: 'Environment AI',
    desc: '온습도 · 공기 · 소음 · 날씨 분석 구조를 재사용해 산책 · 생활 환경을 추천합니다.',
    icon: 'leaf',
  },
]

const behaviorSignals: { signal: string; question: string; interpretation: string }[] = [
  {
    signal: '짖음',
    question: '왜 계속 짖는가',
    interpretation: '분리불안 · 외부 자극 · 경계 신호일 수 있어 환경과 과거 로그를 함께 살펴봅니다.',
  },
  {
    signal: '숨기',
    question: '왜 숨는가',
    interpretation: '불안 · 스트레스 · 통증 회피 신호일 가능성을 함께 고려합니다.',
  },
  {
    signal: '신발 물기',
    question: '왜 신발을 무는가',
    interpretation: '무료함 · 분리불안 · 스트레스 해소 행동일 수 있습니다.',
  },
  {
    signal: '핥기',
    question: '왜 계속 핥는가',
    interpretation: '불안 완화 습관이거나 특정 부위의 불편함을 나타낼 수 있습니다.',
  },
  {
    signal: '산책 거부',
    question: '왜 산책을 거부하는가',
    interpretation: '체력 저하 · 환경 변화 · 컨디션 변화의 신호일 수 있습니다.',
  },
  {
    signal: '잠 증가',
    question: '왜 잠이 늘었는가',
    interpretation: '활동량 감소 · 컨디션 변화 · 계절 변화와 함께 해석합니다.',
  },
  {
    signal: '공격성',
    question: '왜 갑자기 공격적인가',
    interpretation: '통증 · 스트레스 · 환경 변화 등 복합 신호로 원인 가설을 세웁니다.',
  },
]

const lifeManagementMetrics: { title: string; desc: string; icon: MarketingIconName }[] = [
  { title: '운동량', desc: '하루 활동량을 평소 기준선과 비교해 부족 · 과잉 여부를 판단합니다.', icon: 'bolt' },
  { title: '기분', desc: '행동 패턴에서 기분 변화의 경향을 추정합니다.', icon: 'sparkle' },
  { title: '스트레스', desc: '반복 행동 · 활동 변화로 스트레스 누적 여부를 추정합니다.', icon: 'alert' },
]

const lifeManagementActions: string[] = ['산책 추천', '놀이 추천', '휴식 추천', '환경 조정 추천', '활동 추천']

const visionAiObservations: { label: string; icon: MarketingIconName }[] = [
  { label: '식사', icon: 'bolt' },
  { label: '물', icon: 'refresh' },
  { label: '놀이', icon: 'sparkle' },
  { label: '수면', icon: 'clock' },
  { label: '배변', icon: 'document' },
  { label: '움직임', icon: 'trend' },
  { label: '산책', icon: 'pin' },
  { label: '행동 변화', icon: 'alert' },
]

const emotionStates: { label: string; desc: string }[] = [
  { label: '행복', desc: '편안하고 긍정적인 활동 패턴이 관찰될 때' },
  { label: '흥분', desc: '급격한 움직임 증가와 반응성이 함께 나타날 때' },
  { label: '불안', desc: '경계 행동과 위축된 자세가 함께 관찰될 때' },
  { label: '스트레스', desc: '반복 행동 · 식욕 변화가 함께 나타날 때' },
  { label: '외로움', desc: '혼자 있는 시간과 특정 행동 증가가 겹칠 때' },
  { label: '분리불안', desc: '보호자 부재 시간에 짖음 · 파괴 행동이 집중될 때' },
  { label: '우울', desc: '활동량 저하가 장기간 지속될 때' },
  { label: '활동성', desc: '전반적인 움직임 총량과 리듬을 나타내는 기준 지표' },
]

const behaviorCoachingMethods: { title: string; desc: string; icon: MarketingIconName }[] = [
  { title: '보상 (Reward)', desc: '원하는 행동이 관찰되면 보상 타이밍을 제안하는 방향을 연구합니다.', icon: 'trophy' },
  { title: '놀이 (Play)', desc: '스트레스 · 무료함 신호에는 놀이 개입을 우선 추천합니다.', icon: 'sparkle' },
  { title: '훈련 (Training)', desc: '반복되는 문제 행동에는 단계적 훈련 루틴을 제안하는 방향을 검토합니다.', icon: 'target' },
  { title: '환경 개선 (Environment)', desc: '행동의 원인이 환경일 때는 공간 · 소음 · 배치 개선을 먼저 제안합니다.', icon: 'home' },
  { title: '습관 형성 (Habits)', desc: '일관된 루틴이 행동 안정에 기여하도록 반복 가능한 습관을 설계합니다.', icon: 'refresh' },
]

const environmentFactors: { label: string; icon: MarketingIconName }[] = [
  { label: '온도', icon: 'bolt' },
  { label: '습도', icon: 'refresh' },
  { label: '공기질', icon: 'leaf' },
  { label: '소음', icon: 'alert' },
  { label: '날씨', icon: 'globe' },
  { label: '산책 환경', icon: 'pin' },
  { label: '계절', icon: 'sprout' },
]

const recommendationCategories: string[] = [
  '사료',
  '간식',
  '장난감',
  '훈련',
  '운동',
  '산책',
  '미용',
  '보험',
  '호텔',
  '유치원',
  '펫택시',
  '용품',
  '생활 서비스',
]

const shoppingSignalMap: { signal: string; need: string }[] = [
  { signal: '운동 부족', need: '노즈워크 장난감 추천' },
  { signal: '체중 증가', need: '사료 변경 제안' },
  { signal: '스트레스 증가', need: '행동 완화 용품 추천' },
]

const digitalLifeHorizons: { label: string; desc: string; icon: MarketingIconName }[] = [
  { label: '하루', desc: '식사 · 활동 · 배변 · 수면을 시간 단위로 기록합니다.', icon: 'clock' },
  { label: '1주', desc: '컨디션 추세 · 감정 패턴 · 환경 상관을 요약합니다.', icon: 'trend' },
  { label: '1개월', desc: '단기 변화 패턴과 생활 습관 변화를 비교합니다.', icon: 'chart' },
  { label: '1년', desc: '계절 · 성장 · 생활 사이클을 누적해 봅니다.', icon: 'refresh' },
  { label: '평생', desc: '생애 전주기 Life Companion Log로 이어집니다.', icon: 'heart' },
]

const reuseChains: { from: string; mid: string; note: string }[] = [
  { from: '자람이', mid: 'Behavior Analysis', note: '행동 분석 · 해석 · 이상 탐지 · 코칭' },
  { from: '시니어앤라이프', mid: 'Health Monitoring', note: '장기 추적 · 변화 감지 · 필요 시 리포트' },
  { from: '베지케어', mid: 'Environment AI', note: '환경 데이터 분석 · 추천 엔진 구조' },
]

const roadmapAxis: { label: string; desc: string; icon: MarketingIconName; active?: boolean }[] = [
  { label: 'Human', desc: '현재 Care Log — 사람 대상 AI Digital Care Log 운영 · 검증', icon: 'user', active: true },
  { label: 'Animal', desc: 'Pet AI Research — 이 페이지가 다루는 반려동물 확장 연구', icon: 'heart' },
  { label: 'Plant', desc: '베지케어 확장 — 환경 · 웰니스 AI Core 재사용', icon: 'leaf' },
  { label: 'Robot', desc: 'AI Brain Vision — Robot Vision 연구로 이어지는 장기 방향', icon: 'robot' },
]

const valueColumns: { title: string; icon: MarketingIconName; items: string[] }[] = [
  {
    title: '보호자를 위한 가치',
    icon: 'heart',
    items: [
      '기억이 아니라 기록으로 반려동물의 하루 전체를 이해합니다.',
      '행동 · 감정 · 환경 신호를 이해하기 쉬운 언어로 번역받는 방향을 연구합니다.',
      '병원은 필요할 때만 선택하는 경로이며, 매일 마주하는 것은 생활 추천입니다.',
    ],
  },
  {
    title: '비즈니스 파트너를 위한 가치 (펫테크 · 커머스 · 서비스)',
    icon: 'handshake',
    items: [
      '검증된 AI Core를 재사용해 개발 비용 · 기간을 줄일 수 있습니다.',
      '행동 · 환경 신호 기반의 비광고형 추천 구조를 펫테크 · 커머스 · 생활 서비스에 연동할 수 있습니다.',
      '자람이 · 시니어앤라이프 · 베지케어와 같은 표준 위에서 확장됩니다.',
    ],
  },
  {
    title: '투자자 · R&D를 위한 가치',
    icon: 'flask',
    items: [
      '하나의 AI Core가 사람 → 동물 → 식물 → 로봇으로 확장되는 재사용성을 보여줍니다.',
      '병원 중심이 아닌 삶 전체 데이터 구조이기 때문에 확장 가능한 커머스 · 서비스 접점이 더 많습니다.',
      '장기적으로 Robot Vision까지 이어지는 기술 로드맵을 제시합니다.',
    ],
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Header />

      {/* 1. Hero */}
      <section className="bg-gradient-to-br from-violet-900 via-indigo-800 to-slate-800 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-violet-200 mb-4 tracking-wide">
            Research · Technology Development · Future Vision · Long-term Vision
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">반려동물을 AI가 평생 이해하는 플랫폼</h1>
          <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed">
            Pet AI Digital Care Log는 반려동물의 행동 · 감정 · 환경 · 생활 전체를 관찰하고 이해하는 AI Brain
            연구입니다. 병원은 그 중 하나의 선택지일 뿐, 중심이 아닙니다.
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
              <strong className="text-white">상용 서비스가 아닙니다.</strong> 자람이의 반려동물 버전도 아니고,
              동물병원 중심 의료 플랫폼도 아닙니다. 현재는 연구 · 기술 개발 초기 · 장기 비전 단계이며, 아래
              내용은 자람이 · 시니어앤라이프 · 베지케어의 검증된 AI Core를 반려동물의 삶 전체로 확장하는 연구
              방향을 설명합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Philosophy banner */}
      <section id="philosophy" className="scroll-mt-28 py-14 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">의료 플랫폼이 아닙니다</h2>
            <p className="text-white/75 max-w-2xl mx-auto">
              병원은 삶의 일부일 뿐입니다. 이 연구가 무엇이 아니고, 무엇인지를 먼저 분명히 합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-red-400/30 bg-red-500/10 p-6 md:p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-400/20 text-red-300">
                  <MarketingIcon name="alert" className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-red-200">이것이 아닙니다</h3>
              </div>
              <ul className="space-y-2.5 text-sm text-white/85">
                {notStatements.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-red-300 shrink-0">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-6 md:p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/20 text-emerald-300">
                  <MarketingIcon name="sparkle" className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-emerald-200">이것입니다</h3>
              </div>
              <ul className="space-y-2.5 text-sm text-white/85">
                {isStatements.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-emerald-300 shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TOC pills */}
      <section className="py-5 bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {tocSections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="shrink-0 whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-violet-100 hover:text-violet-800 transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Current stage */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">현재 단계</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {stages.map((s, i) => (
              <div key={s.label} className="rounded-xl border border-violet-100 bg-violet-50/60 p-5 text-center">
                <div className="text-xs font-bold text-violet-500 mb-2">0{i + 1}</div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm">{s.label}</h3>
                <p className="text-xs text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. New Care Log definition */}
      <section id="care-log" className="scroll-mt-28 py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">AI Digital Care Log, 더 큰 개념</h2>
          <div className="rounded-2xl border border-violet-200 bg-white p-7 md:p-10 shadow-sm">
            <p className="text-lg md:text-xl font-semibold text-gray-900 leading-relaxed">
              AI Digital Care Log = 사람, 동물, 식물, 그리고 미래의 로봇을 위해{' '}
              <span className="text-violet-700">지속적으로 관찰</span>하고,{' '}
              <span className="text-violet-700">기록</span>하고, 행동과 환경을{' '}
              <span className="text-violet-700">이해 · 분석</span>하며,{' '}
              <span className="text-violet-700">개인화된 판단</span>을 내리는 AI 지능형 플랫폼입니다.
            </p>
          </div>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto mt-6 leading-relaxed">
            병원용 진료 기록만을 뜻하는 좁은 의미의 케어로그가 아닙니다. 반려동물이라면 하루의 산책 · 놀이 ·
            식사 · 수면 · 기분까지 포함하는, 삶 전체를 담는 로그입니다. 병원 리포트는 이 큰 로그 안에서 필요할
            때만 파생되는 결과물 중 하나입니다.
          </p>
        </div>
      </section>

      {/* 5. Platform Vision Human -> Animal -> Plant -> Robot */}
      <section id="platform-vision" className="scroll-mt-28 py-14 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-semibold mb-4">
              <MarketingIcon name="globe" className="h-4 w-4" />
              Universal AI Care Intelligence Platform
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              One AI Core, Human → Animal → Plant → Robot
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dream AI Lab은 하나의 AI Core를 사람 → 동물 → 식물 → 로봇으로 확장합니다. 모든 대상은 관찰 ·
              기록 · 이해 · 학습 · 맞춤형 판단이라는 동일한 구조를 사용합니다. 반려동물(Animal)은 이 확장의
              하나의 축입니다.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10 text-sm font-semibold">
            {platformDomains.map((d, i) => (
              <div key={d.label} className="flex items-center gap-2 md:gap-3">
                <Link
                  href={d.href}
                  className={
                    d.label === 'Animal'
                      ? 'px-4 py-2 rounded-lg bg-violet-600 text-white shadow-sm hover:bg-violet-700 transition-colors'
                      : 'px-4 py-2 rounded-lg bg-white border border-indigo-200 text-indigo-900 shadow-sm hover:border-indigo-400 transition-colors'
                  }
                >
                  {d.label}
                </Link>
                {i < platformDomains.length - 1 && <span className="text-gray-400">→</span>}
              </div>
            ))}
          </div>
          <div className="rounded-2xl overflow-hidden border border-indigo-100 shadow-sm">
            <picture>
              <source media="(max-width: 768px)" srcSet="/images/research/one-ai-core-domains-mobile.svg" />
              <img
                src="/images/research/one-ai-core-domains.svg"
                alt="One AI Core Multiple Care Domains — Human Animal Plant Robot"
                className="w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 text-center text-xs">
            {platformDomains.map((d) => (
              <Link
                key={d.label}
                href={d.href}
                className="rounded-xl border border-gray-200 bg-gray-50 p-3 hover:border-indigo-200 hover:bg-indigo-50/50 transition-colors"
              >
                <div className="font-bold text-gray-900 mb-1">{d.label}</div>
                <div className="text-gray-600">{d.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Life Companion overview */}
      <section id="life-companion" className="scroll-mt-28 py-14 bg-violet-50/60 border-b border-violet-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Pet AI = Life Companion Intelligence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              의료 플랫폼이 아니라, 반려의 삶 전체를 이해하는 AI Brain입니다. 병원은 그림 오른쪽 아래 점선
              박스처럼 "일부" 기능으로만 존재합니다.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-violet-200 shadow-sm mb-10 bg-white">
            <img
              src="/images/research/pet-life-companion.svg"
              alt="Pet AI Life Companion Intelligence — 관찰(Vision AI), 이해(Behavior/Emotion), 학습(패턴 축적/개인화), 생활 추천, Shopping AI, 병원은 점선으로 표시된 일부 기능"
              className="w-full h-auto"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="space-y-3 max-w-4xl mx-auto">
            {lifeCompanionLoop.map((s) => (
              <div
                key={s.n}
                className={`flex gap-4 items-start rounded-xl p-4 border ${
                  s.n === 6
                    ? 'bg-white/70 border-dashed border-gray-300'
                    : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex shrink-0 items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-50 border border-violet-200 text-violet-700">
                    <MarketingIcon name={s.icon} className="h-5 w-5" />
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-600 text-white text-sm font-bold">
                    {s.n}
                  </span>
                </div>
                <div className="min-w-0 pt-1">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{s.title}</h3>
                  <p className="text-sm text-gray-700">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Technology Architecture */}
      <section id="tech-architecture" className="scroll-mt-28 py-14 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Pet AI Technology Architecture</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Research stack — 상용 운영 스택이 아닙니다. Learning Engine과 Personal AI가 전체 계층을
              가로지릅니다.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-violet-100 shadow-sm mb-6 bg-white">
            <img
              src="/images/research/pet-tech-architecture.svg"
              alt="Pet AI Technology Architecture — Vision AI, OCR, Behavior, Emotion, Environment, Care Log, Personal, Recommend, Prediction, Robot API 계층과 Learning Engine + Personal AI"
              className="w-full h-auto"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {techArchitectureLayers.map((layer, i) => (
              <span key={layer} className="inline-flex items-center gap-1 text-xs font-medium text-gray-600">
                <span className="px-3 py-1 rounded-lg bg-white border border-gray-200">{layer}</span>
                {i < techArchitectureLayers.length - 1 && <span className="text-gray-300">→</span>}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {techReuseFromServices.map((item) => (
              <div key={item.from} className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-center">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-gray-200 text-violet-700">
                  <MarketingIcon name={item.icon} className="h-5 w-5" />
                </div>
                <div className="font-bold text-primary-700 mb-1">{item.from}</div>
                <div className="text-gray-400 my-1">↓</div>
                <div className="text-sm font-semibold text-gray-700 mb-2">{item.to}</div>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Behavior Translation AI */}
      <section id="behavior-translation" className="scroll-mt-28 py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Behavior Translation AI</h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              "왜?" 를 보호자 언어로 설명하는 엔진입니다. 자람이의 행동 분석 · 해석 기술을 반려동물 신호에
              확장하는 연구입니다.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-violet-200 shadow-sm mb-8 bg-white">
            <img
              src="/images/research/pet-behavior-translation.svg"
              alt="Behavior Translation AI — 짖음, 숨기, 신발 물기, 핥기, 산책 거부, 잠 증가, 공격성 같은 관찰된 행동이 AI 종합 해석을 거쳐 보호자 설명과 코칭으로 이어지는 흐름"
              className="w-full h-auto"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="bg-white rounded-2xl border border-violet-200 p-6 md:p-8">
            <p className="text-sm font-semibold text-violet-800 mb-5 text-center">번역 예시 (연구 시나리오)</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {behaviorSignals.map((b) => (
                <div
                  key={b.signal}
                  className="rounded-xl border border-gray-100 bg-gray-50/70 p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded-full bg-violet-100 text-violet-800 text-[11px] font-bold">
                      {b.signal}
                    </span>
                  </div>
                  <p className="text-sm text-gray-800 font-medium mb-1">{b.question}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{b.interpretation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Life Companion AI - daily life management */}
      <section id="life-management" className="scroll-mt-28 py-14 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Life Companion AI — 생활 관리</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              운동량 · 기분 · 스트레스를 매일 관찰해, 오늘 필요한 생활 추천으로 바꾸는 연구입니다.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
            {lifeManagementMetrics.map((m) => (
              <div key={m.title} className="rounded-xl border border-gray-200 bg-gray-50 p-5 text-center">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-gray-200 text-violet-700">
                  <MarketingIcon name={m.icon} className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{m.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-gray-500 mb-3">→ 오늘의 생활 추천</p>
            <div className="flex flex-wrap justify-center gap-3">
              {lifeManagementActions.map((a) => (
                <span
                  key={a}
                  className="px-4 py-2 rounded-lg bg-violet-50 border border-violet-200 text-sm font-medium text-violet-800"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Vision AI */}
      <section id="vision-ai" className="scroll-mt-28 py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <MarketingIcon name="camera" className="h-8 w-8 text-violet-700" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Vision AI</h2>
          </div>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            카메라가 아래 여덟 가지 신호를 자동으로 관찰하면, AI가 자동 일지 · 자동 리포트로 정리하는 연구
            방향입니다.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {visionAiObservations.map((v) => (
              <div key={v.label} className="rounded-xl border border-gray-200 bg-white p-4 text-center">
                <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-violet-50 text-violet-700">
                  <MarketingIcon name={v.icon} className="h-4 w-4" />
                </div>
                <p className="text-sm font-semibold text-gray-800">{v.label}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-3 text-sm">
            <span className="text-gray-400">관찰 8종</span>
            <span className="text-violet-400">→</span>
            <span className="px-4 py-2 rounded-lg bg-violet-600 text-white font-semibold">자동 일지 · 자동 리포트</span>
          </div>
        </div>
      </section>

      {/* 11. Emotion AI */}
      <section id="emotion-ai" className="scroll-mt-28 py-14 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Emotion AI</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              행동 · 활동 · 환경 신호를 종합해 감정 상태의 경향을 추정하는 연구입니다. 진단이 아닌 경향 추정
              입니다.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {emotionStates.map((e) => (
              <div key={e.label} className="rounded-xl border border-indigo-100 bg-indigo-50/50 p-4 text-center">
                <div className="text-sm font-bold text-indigo-900 mb-1">{e.label}</div>
                <p className="text-[11px] text-gray-600 leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Behavior Coaching */}
      <section id="behavior-coaching" className="scroll-mt-28 py-14 bg-violet-50/60 border-b border-violet-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Behavior Coaching</h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              자람이에서 검증한 행동 중재(Intervention) 구조를 반려동물로 확장합니다. 원인을 설명하는 것에서
              멈추지 않고, 실행 가능한 교정 방향까지 함께 제안합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {behaviorCoachingMethods.map((m) => (
              <div key={m.title} className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-violet-50 text-violet-700">
                  <MarketingIcon name={m.icon} className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{m.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Environment AI */}
      <section id="environment-ai" className="scroll-mt-28 py-14 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-4">
              베지케어 확장
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Environment AI</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              베지케어의 환경 분석 구조를 반려동물의 생활 환경으로 확장해, 산책 · 실내 환경을 함께 살펴봅니다.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
            {environmentFactors.map((f) => (
              <div key={f.label} className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-4 text-center">
                <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-emerald-200 text-emerald-700">
                  <MarketingIcon name={f.icon} className="h-4 w-4" />
                </div>
                <p className="text-xs font-semibold text-gray-800">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Personal Recommendation Engine */}
      <section id="recommendation" className="scroll-mt-28 py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-center">Personal Recommendation Engine</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            누적 로그를 바탕으로 한 개인화 추천 가설입니다. 사료 · 용품부터 생활 서비스까지 넓은 범위를
            연구합니다.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {recommendationCategories.map((item) => (
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

      {/* 15. Shopping Intelligence */}
      <section id="shopping-ai" className="scroll-mt-28 py-14 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Shopping Intelligence</h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              광고가 아니라, 행동을 이해한 뒤의 필요 추천입니다. 신호 → AI 판단 → 추천의 흐름이며, 노출량이
              아닌 필요에 기반합니다.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-violet-100 shadow-sm mb-8 bg-white">
            <img
              src="/images/research/pet-recommendation-engine.svg"
              alt="Personal Recommendation / Shopping Intelligence — 운동 부족, 체중 증가, 스트레스 증가 같은 신호가 Care Log 기반 AI 판단을 거쳐 노즈워크 장난감, 사료 변경, 행동 완화 용품 등 비광고형 추천으로 이어지는 흐름"
              className="w-full h-auto"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {shoppingSignalMap.map((s) => (
              <div key={s.signal} className="rounded-xl border border-gray-200 bg-gray-50 p-5 text-center">
                <p className="text-xs font-semibold text-gray-500 mb-2">신호</p>
                <p className="text-sm font-bold text-gray-900 mb-3">{s.signal}</p>
                <div className="text-violet-400 mb-3">↓</div>
                <p className="text-xs font-semibold text-violet-600 mb-1">추천</p>
                <p className="text-sm text-gray-700">{s.need}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6 max-w-2xl mx-auto">
            * 광고 노출 기반 커머스가 아닌, 개인화 · 비광고형 추천 구조를 연구 방향으로 검토합니다.
          </p>
        </div>
      </section>

      {/* 16. AI Daily Report (mock UI, life-focused) */}
      <section id="daily-report" className="scroll-mt-28 py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-center">AI Daily Report</h2>
          <p className="text-center text-gray-600 mb-8">
            병원 리포트가 아니라, 삶 중심의 하루 요약입니다. AI가 자동으로 오늘의 생활을 정리하는 연구 방향을
            실제 화면처럼 구성한 예시입니다.
          </p>
          <div className="rounded-2xl border border-gray-200 bg-white shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-violet-700 to-indigo-700 text-white px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center font-bold">
                  또리
                </div>
                <div>
                  <p className="font-bold text-sm">또리 (골든리트리버 · 4세)</p>
                  <p className="text-xs text-white/70">2026-07-20 · AI 데일리 리포트 (연구 시나리오)</p>
                </div>
              </div>
              <span className="text-[10px] font-semibold px-2 py-1 rounded-full bg-amber-400/90 text-amber-950">
                MOCK
              </span>
            </div>
            <div className="grid grid-cols-3 divide-x divide-gray-100 border-b border-gray-100 text-center">
              <div className="py-4">
                <p className="text-xs text-gray-500 mb-1">활동량</p>
                <p className="text-lg font-bold text-gray-900">
                  74<span className="text-xs text-gray-400 font-normal">/100</span>
                </p>
                <p className="text-[11px] text-emerald-600">평소 범위</p>
              </div>
              <div className="py-4">
                <p className="text-xs text-gray-500 mb-1">산책</p>
                <p className="text-lg font-bold text-gray-900">38분</p>
                <p className="text-[11px] text-amber-600">평소보다 ↓ 12분</p>
              </div>
              <div className="py-4">
                <p className="text-xs text-gray-500 mb-1">놀이</p>
                <p className="text-lg font-bold text-gray-900">22분</p>
                <p className="text-[11px] text-gray-400">평소 범위</p>
              </div>
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-100 border-b border-gray-100 text-center">
              <div className="py-4">
                <p className="text-xs text-gray-500 mb-1">식사 속도</p>
                <p className="text-lg font-bold text-gray-900">보통</p>
                <p className="text-[11px] text-gray-400">평소와 비슷</p>
              </div>
              <div className="py-4">
                <p className="text-xs text-gray-500 mb-1">컨디션</p>
                <p className="text-lg font-bold text-gray-900">양호</p>
                <p className="text-[11px] text-gray-400">활기찬 편</p>
              </div>
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold text-gray-500 mb-3">오늘의 관찰 기록</p>
              <ul className="space-y-3 text-sm text-gray-800 leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-xs text-gray-400 shrink-0 w-12">08:10</span>
                  <span>아침 산책 20분, 활기차게 움직이는 모습이 관찰되었습니다.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-xs text-gray-400 shrink-0 w-12">13:20</span>
                  <span>낮잠 시간이 평소보다 조금 길었습니다.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-xs text-gray-400 shrink-0 w-12">17:40</span>
                  <span>오후 놀이 시간에 노즈워크 장난감에 높은 반응을 보였습니다.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-xs text-gray-400 shrink-0 w-12">19:00</span>
                  <span>저녁 산책 시간이 평소보다 짧아, 짧은 추가 산책을 추천합니다.</span>
                </li>
              </ul>
              <div className="mt-5 rounded-xl bg-violet-50 border border-violet-100 p-4">
                <p className="text-xs font-semibold text-violet-700 mb-1">AI 요약 · 오늘의 추천</p>
                <p className="text-sm text-gray-800 leading-relaxed">
                  오늘은 전반적으로 컨디션이 양호합니다. 저녁 산책이 짧았던 만큼 10분 정도의 추가 산책이나
                  실내 놀이를 추천합니다. 특별한 이상 신호는 관찰되지 않아 병원 연계가 필요한 상태는 아닙니다.
                </p>
              </div>
            </div>
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">
            * 위 화면은 연구 방향을 보여주기 위한 목업이며, 실제 반려동물 데이터가 아닙니다.
          </p>
        </div>
      </section>

      {/* 17. Pet Digital Life */}
      <section id="digital-life" className="scroll-mt-28 py-14 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Pet Digital Life</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              하루 · 1주 · 1개월 · 1년 · 평생 — 병원 리포트만이 아니라 감정 · 환경 · 추천까지 함께 누적되는
              생활 로그입니다.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-violet-100 shadow-sm mb-10 bg-gray-50">
            <img
              src="/images/research/pet-daily-life-scenarios.svg"
              alt="Life Companion 시나리오 — 아침 수면 패턴/식사 속도/기분/산책 추천, 낮 혼자 있는 시간/짖음 증가/분리불안/노즈워크 추천, 저녁 활동량/산책/놀이 시간/추가 산책 추천, 주간 요약(컨디션 추세/감정 패턴/환경 상관), 필요 시만 병원 리포트"
              className="w-full h-auto"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {digitalLifeHorizons.map((h) => (
              <div key={h.label} className="rounded-xl border border-indigo-100 bg-indigo-50/50 p-5 text-center">
                <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-indigo-200 text-indigo-700 mx-auto">
                  <MarketingIcon name={h.icon} className="h-5 w-5" />
                </div>
                <div className="text-lg font-bold text-indigo-900 mb-1">{h.label}</div>
                <p className="text-xs text-gray-600 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 18. Hospital — small, optional */}
      <section id="hospital" className="scroll-mt-28 py-10 bg-gray-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-6 md:p-7">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-500">
                <MarketingIcon name="stethoscope" className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold text-gray-800">병원 (전체 중 일부 기능)</h2>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              병원 연계는 AI가 이상 신호를 판단했을 때만 작동하는 선택적 경로로 검토합니다. 평소에는 행동 ·
              감정 · 환경 · 생활 추천이 중심이며, 병원용 리포트는 전체 Life Companion Log에서 필요할 때만
              추출되는 하나의 출력물일 뿐, 이 연구의 중심이 아닙니다.
            </p>
          </div>
        </div>
      </section>

      {/* 19. Robot Vision teaser */}
      <section id="robot-vision" className="scroll-mt-28 py-14 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/15 bg-white/5 p-6 md:p-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-200 text-xs font-semibold mb-4 border border-amber-400/30">
              별도 연구 · Robot Vision
            </div>
            <div className="flex items-center gap-3 mb-4">
              <MarketingIcon name="robot" className="h-8 w-8 text-amber-300" />
              <h2 className="text-xl md:text-2xl font-bold">로봇 연동은 Robot Vision에서 다룹니다</h2>
            </div>
            <p className="text-white/80 leading-relaxed mb-6 max-w-2xl">
              여기서 설명한 관찰 · 이해 · 추천 AI Brain은 로봇 없이도 성립합니다. 로봇이라는 물리적 실행체가
              더해질 경우 — 로봇은 행동하고, AI Digital Care Log는 그 행동의 결과를 관찰 · 판단 · 학습합니다.
              반려동물 돌봄 로봇을 포함한 이 확장은 Pet AI 단독이 아니라 자람이 · 시니어앤라이프 ·
              토탈케어로그 · 에듀케어로그 · 베지케어를 함께 아우르는 별도의 도메인 횡단 연구인{' '}
              <Link href="/research/robot-vision" className="text-amber-300 font-semibold hover:underline">
                Robot Vision
              </Link>
              에서 자세히 다룹니다.
            </p>
            <Link
              href="/research/robot-vision"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-amber-400 text-slate-900 font-semibold hover:bg-amber-300 text-sm"
            >
              Robot Vision 연구 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* 20. Technology Reuse */}
      <section id="tech-reuse" className="scroll-mt-28 py-14 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Technology Reuse</h2>
            <p className="text-gray-600">AI Core는 도메인마다 다시 만들지 않고 공통 기술을 재사용합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {reuseChains.map((c) => (
              <div key={c.from} className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-center">
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

      {/* 21. Roadmap */}
      <section id="roadmap" className="scroll-mt-28 py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Universal AI Care Roadmap</h2>
            <p className="text-gray-600">출시 일정이 아닌 연구 확장 방향입니다.</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-indigo-100 shadow-sm mb-8 bg-white">
            <img
              src="/images/research/pet-universal-roadmap.svg"
              alt="Universal AI Care Roadmap — Human(현재 Care Log), Animal(Pet AI Research), Plant(베지케어 확장), Robot(AI Brain Vision)"
              className="w-full h-auto"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {roadmapAxis.map((step) => (
              <div
                key={step.label}
                className={`rounded-xl border p-5 ${
                  step.active ? 'border-violet-300 bg-violet-50' : 'border-gray-200 bg-white'
                }`}
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-gray-200 text-violet-700">
                  <MarketingIcon name={step.icon} className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{step.label}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 22. Value columns */}
      <section id="value" className="scroll-mt-28 py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">누구에게 어떤 가치인가</h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-10">
            같은 연구라도 보호자 · 비즈니스 파트너 · 투자자가 얻는 가치는 다릅니다. 병원은 이 중 어떤
            이해관계자에게도 첫 번째 가치가 아닙니다.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {valueColumns.map((col) => (
              <div key={col.title} className="rounded-2xl border border-gray-200 bg-gray-50/70 p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-gray-200 text-violet-700">
                  <MarketingIcon name={col.icon} className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-4">{col.title}</h3>
                <ul className="space-y-2.5 text-sm text-gray-700">
                  {col.items.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-violet-500 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 23. FAQ */}
      <section id="faq" className="scroll-mt-28 py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">자주 묻는 질문</h2>
          <p className="text-center text-gray-600 text-sm mb-10">
            의료 앱이 아니라는 점, 상용 서비스가 아니라는 점, 병원은 선택적 기능이라는 점을 명확히 답합니다.
          </p>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-gray-200 bg-white p-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-start justify-between gap-3 font-bold text-gray-900 text-sm">
                  {item.q}
                  <span className="shrink-0 text-violet-500 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-6">관련 페이지</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/research"
              className="px-5 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-800 font-semibold hover:bg-gray-50 text-sm"
            >
              Research 허브
            </Link>
            <Link
              href="/research/robot-vision"
              className="px-5 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-800 font-semibold hover:bg-gray-50 text-sm"
            >
              Robot Vision
            </Link>
            <Link
              href="/technology"
              className="px-5 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-800 font-semibold hover:bg-gray-50 text-sm"
            >
              기술
            </Link>
            <Link
              href="/services/jarame"
              className="px-5 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-800 font-semibold hover:bg-gray-50 text-sm"
            >
              자람이
            </Link>
            <Link
              href="/services/veggie"
              className="px-5 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-800 font-semibold hover:bg-gray-50 text-sm"
            >
              베지케어
            </Link>
            <Link
              href="/contact?type=tech&service=research"
              className="px-5 py-2.5 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 text-sm"
            >
              R&D 문의
            </Link>
          </div>
        </div>
      </section>

      {/* 24. CTA */}
      <section className="py-14 bg-gradient-to-r from-violet-800 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">연구 · 기술 협력 문의</h2>
          <p className="text-white/85 mb-8 max-w-2xl mx-auto">
            Pet AI Digital Care Log는 연구 · Future Vision 영역입니다. 제품 가입이 아닌 R&D · 기술 협력
            관점으로 문의해 주세요. 보호자 체감 가치, 펫테크 · 커머스 · 서비스 파트너의 재사용 구조, 투자자
            관점의 확장성 모두 같은 담당자가 안내합니다.
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
