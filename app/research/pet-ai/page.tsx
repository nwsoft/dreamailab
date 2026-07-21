import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { MarketingIcon, type MarketingIconName } from '../../../components/MarketingIcon'
import { absoluteUrl, buildBreadcrumbJsonLd, buildPageMetadata, SITE_URL } from '../../../lib/seo'

const pagePath = '/research/pet-ai'
const pageDescription =
  'Pet AI Digital Care Log — AI Digital Care Log를 반려동물로 확장하는 연구 프로젝트. Research · Technology Development · Future Vision 단계이며, 자람이·시니어앤라이프·베지케어의 검증된 AI Core를 재사용해 지금 구현 가능한 모듈과 장기 비전을 함께 제시합니다. 상용 서비스가 아닙니다.'

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

const faqItems: { q: string; a: string }[] = [
  {
    q: '이미 출시된 서비스인가요?',
    a: '아닙니다. Pet AI Digital Care Log는 Research · Technology Development · Future Vision 단계입니다. 가입·구매·출시 일정을 의미하지 않으며, 공개된 상세 페이지는 연구 방향을 설명하기 위한 자료입니다.',
  },
  {
    q: '자람이·시니어앤라이프·베지케어와 무슨 관계인가요?',
    a: '별도로 처음부터 만드는 신규 서비스가 아니라, 세 서비스에서 이미 운영·검증된 행동 분석·이상 탐지·AI 리포트 엔진을 반려동물(Animal) 도메인 신호에 맞게 재학습·재적용하는 연구입니다.',
  },
  {
    q: '지금 바로 구현 가능한 부분이 있나요?',
    a: '네. 자동 일지, 이상 알림, 병원용 리포트 초안, 카메라 관찰, 행동 번역, 추천 엔진, API 연동은 기존 AI Core를 재사용하면 기술적으로 구현 가능한 모듈입니다. 로봇 연동은 이 페이지 범위를 넘어서는 별도 연구인 Robot Vision에서 다룹니다.',
  },
  {
    q: '동물병원에서 지금 사용할 수 있나요?',
    a: '아직 상용 제품이 아닙니다. 진료 전 AI Digital Care Report를 제공하는 방향은 연구 가설이며, 병원 파일럿·데이터 연동 협의가 선행되어야 합니다.',
  },
  {
    q: '투자·비즈니스 제휴는 어떻게 논의하나요?',
    a: 'R&D·기술 협력 관점의 문의를 받고 있습니다. 페이지 하단 문의 채널을 통해 연구 단계, 재사용 가능한 기술 자산, 사업화 로드맵을 함께 설명드립니다.',
  },
  {
    q: '로봇 연동은 언제쯡 가능한가요?',
    a: '정해진 출시 일정은 없습니다. 로봇 연동은 Pet AI Digital Care Log만의 주제가 아니라 자람이·시니어앤라이프·토탈케어로그·에듀케어로그·베지케어를 함께 아우르는 별도의 도메인 횡단 연구인 Robot Vision에서 다루고 있습니다. 자세한 내용은 Robot Vision 연구 페이지를 참고해 주세요.',
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

const stages = [
  { label: 'Research', desc: '연구 과제 정의 · 가설 검증' },
  { label: 'Technology Development', desc: '기존 AI Core 재학습 · 기술 개발 초기' },
  { label: 'Future Vision', desc: '장기 비전 · 동물병원 리포트 연동' },
]

const tocSections: { id: string; label: string }[] = [
  { id: 'audience', label: '대상 지도' },
  { id: 'problem', label: '문제' },
  { id: 'solution', label: '솔루션 개요' },
  { id: 'one-ai-core', label: 'One AI Core' },
  { id: 'care-flow', label: '케어 플로우' },
  { id: 'tech-jarame', label: '기술 재사용' },
  { id: 'tech-stack', label: '기술 스택' },
  { id: 'capability-matrix', label: '역량 매트릭스' },
  { id: 'vision-ai', label: 'Vision AI' },
  { id: 'behavior-engine', label: '행동 번역' },
  { id: 'care-log', label: '디지털 케어로그' },
  { id: 'daily-report', label: 'AI 데일리 리포트' },
  { id: 'vet-vision', label: '병원 연동 비전' },
  { id: 'recommendations', label: '추천 엔진' },
  { id: 'modules', label: '구현 가능 모듈' },
  { id: 'robot-vision', label: 'Robot Vision (별도 연구)' },
  { id: 'tech-reuse', label: '기술 재사용 체계' },
  { id: 'roadmap', label: '로드맵' },
  { id: 'value', label: '가치 제안' },
  { id: 'faq', label: 'FAQ' },
]

const audienceStakeholders: { label: string; desc: string; icon: MarketingIconName }[] = [
  { label: '보호자 (희망자)', desc: '반려동물의 하루를 기록·이해하고 싶은 사람. 가장 먼저 데이터를 만드는 주체입니다.', icon: 'user' },
  { label: '동물병원', desc: '짧은 진료 시간 안에 생활 데이터를 미리 받고 싶은 의료진.', icon: 'stethoscope' },
  { label: '비즈니스 파트너', desc: '펫테크·사료·보험·플랫폼 기업. API·임베드 연동을 검토합니다.', icon: 'handshake' },
  { label: '투자자 · R&D', desc: 'AI Core의 도메인 확장성과 기술 재사용성을 검토하는 주체.', icon: 'flask' },
]

const problems: { title: string; desc: string; icon: MarketingIconName }[] = [
  {
    title: '말이 없는 반려동물',
    desc: '아파도, 스트레스를 받아도 말로 표현하지 못해 보호자가 눈치채기까지 시간이 걸립니다.',
    icon: 'chat',
  },
  {
    title: '기록이 기억에만 남음',
    desc: '오늘 얼마나 먹었는지, 산책은 얼마나 했는지 매번 기억에 의존해 병원에서 설명하기 어렵습니다.',
    icon: 'brain',
  },
  {
    title: '이상 신호를 늦게 발견',
    desc: '식욕 저하·걸음걸이 변화 같은 초기 신호는 매일 보는 보호자도 서서히 진행되면 놓치기 쉽습니다.',
    icon: 'alert',
  },
  {
    title: '진료실에서의 단절',
    desc: '진료실은 짧고, 최근 며칠의 생활 모습은 보호자의 설명에만 의존해 판단 근거가 부족합니다.',
    icon: 'hospital',
  },
]

const petCareLoop: { n: number; title: string; body: string; icon: MarketingIconName }[] = [
  {
    n: 1,
    title: '관찰 (Observe)',
    body: '카메라 영상과 보호자 입력으로 식사·활동·수면·배변 같은 일상 신호를 모읍니다.',
    icon: 'eye',
  },
  {
    n: 2,
    title: '기록 (Log)',
    body: '수집된 신호를 표준 케어로그 형식으로 쌓아 하루 · 1개월 · 1년 · 평생 단위로 이어지게 합니다.',
    icon: 'document',
  },
  {
    n: 3,
    title: '해석 (Interpret)',
    body: '자람이에서 검증한 행동 분석 · 이상 탐지 모델을 반려동물 신호 특성에 맞게 재학습합니다.',
    icon: 'brain',
  },
  {
    n: 4,
    title: '리포트 (Report)',
    body: '보호자용 일일 요약, 병원용 진료 전 리포트를 같은 로그에서 자동 초안으로 만듭니다.',
    icon: 'chart',
  },
  {
    n: 5,
    title: '추천 · 환류 (Recommend)',
    body: '누적된 로그를 바탕으로 관리 방향을 제안하고, 실행 결과가 다시 다음 관찰 기준에 반영됩니다.',
    icon: 'refresh',
  },
]

const jarameReuse: { title: string; desc: string; icon: MarketingIconName }[] = [
  {
    title: '행동 분석',
    desc: '자람이가 발달·행동 패턴 분석에 쓰던 시계열 · 영상 분석 모델을 반려동물의 움직임·자세 데이터에 재적용하는 연구입니다.',
    icon: 'eye',
  },
  {
    title: '행동 해석 (Interpretation)',
    desc: '분석된 신호를 "왜 그런 행동을 했는지" 보호자가 이해할 수 있는 언어로 옮기는 해석 레이어를 재사용합니다.',
    icon: 'chat',
  },
  {
    title: '이상 행동 탐지',
    desc: '평소 패턴과 다른 활동량 · 식사 · 보행을 탐지하는 이상 탐지 로직을 반려동물 기준값에 맞게 다시 튜닝합니다.',
    icon: 'alert',
  },
  {
    title: 'AI 상담',
    desc: '자람이 AI 상담에서 쓰인 증상 · 패턴 매칭 구조를 반려동물 보호자의 질문 응답에 적용하는 방향을 검토합니다.',
    icon: 'brain',
  },
  {
    title: 'AI 리포트',
    desc: '일 · 주 · 월 단위로 변화와 이상 징후를 자동 요약하는 리포트 엔진을 동물 도메인 언어 · 지표로 재구성합니다.',
    icon: 'document',
  },
]

const techStackLayers = [
  'AI Core',
  'Vision AI',
  'OCR',
  'Behavior Analysis',
  'Health Analysis',
  'Digital Care Log',
  'Recommendation',
  'Prediction',
  'Robot Integration',
]

const capabilityRows: { capability: string; jarame: boolean; senior: boolean; veggie: boolean; note: string }[] = [
  { capability: '영상 기반 행동 분석', jarame: true, senior: true, veggie: false, note: '자람이 행동 분석 모델 재학습' },
  { capability: '이상 탐지 (Anomaly Detection)', jarame: true, senior: true, veggie: false, note: '활동량 · 식사 이상 패턴 재사용' },
  { capability: 'AI 리포트 생성', jarame: true, senior: true, veggie: true, note: '일 · 주 · 월 요약 엔진 공통 재사용' },
  { capability: '맞춤 추천 엔진', jarame: false, senior: true, veggie: true, note: '누적 로그 기반 추천 구조 재사용' },
  { capability: '다기관 연동 · API', jarame: true, senior: true, veggie: true, note: '병원 · 파트너 연동 표준 재사용' },
]

const visionAiCapabilities: { title: string; desc: string; icon: MarketingIconName }[] = [
  { title: '객체 인식', desc: '카메라 영상에서 반려동물의 위치와 개체를 인식합니다.', icon: 'camera' },
  { title: '자세 추정', desc: '앉기 · 눕기 · 절뚝임 같은 자세 변화를 추정합니다.', icon: 'eye' },
  { title: '행동 분류', desc: '짖음 · 핥기 · 배회 등의 행동을 카테고리로 분류합니다.', icon: 'target' },
  { title: '식사 · 배변 감지', desc: '급식대 · 배변 구역 주변 활동을 감지해 기록으로 남깁니다.', icon: 'bolt' },
  { title: '이상 보행 감지', desc: '평소와 다른 걸음걸이 패턴을 탐지해 이상 신호로 표시합니다.', icon: 'alert' },
  { title: '자동 기록 · 요약', desc: '감지된 신호를 자동으로 케어로그에 기록하고 요약합니다.', icon: 'document' },
]

const behaviorTranslations: { signal: string; translation: string }[] = [
  {
    signal: '꼬리를 낮추고 몸을 웅크림',
    translation: '스트레스나 불안 신호일 수 있습니다. 낯선 소리 · 사람이 있었는지 확인해 보세요.',
  },
  {
    signal: '평소보다 짖음이 늘어남',
    translation: '분리불안 또는 환경 변화에 대한 반응일 가능성이 있습니다.',
  },
  {
    signal: '식사 시간이 15분 이상 늦어짐',
    translation: '식욕 변화 신호로, 3일 이상 지속되면 병원 상담을 권장하는 방향으로 설계합니다.',
  },
  {
    signal: '뒷다리를 절뚝이는 동작이 반복 감지됨',
    translation: '통증 · 관절 이상 가능성이 있어 수의사 확인이 필요하다는 문장으로 안내합니다.',
  },
]

const careLogHorizons: { label: string; desc: string; icon: MarketingIconName }[] = [
  { label: '하루', desc: '식사 · 활동 · 배변 · 수면을 시간 단위로 기록합니다.', icon: 'clock' },
  { label: '1개월', desc: '단기 추세와 변화 패턴을 비교합니다.', icon: 'trend' },
  { label: '1년', desc: '계절 · 성장 · 건강 사이클을 누적해 봅니다.', icon: 'chart' },
  { label: '평생', desc: '생애 전주기 Digital Care Log로 이어집니다.', icon: 'heart' },
]

const vetReportSections: { title: string; desc: string }[] = [
  { title: '요약', desc: '최근 7일 활동량 · 식사 · 수면의 변화를 한 줄로 요약합니다.' },
  { title: '이상 신호', desc: '평소 패턴과 다른 행동 · 걸음걸이 · 식욕 변화를 표시합니다.' },
  { title: '생활 기록', desc: '배변 · 약물 · 산책 등 보호자가 입력한 일상 데이터를 정리합니다.' },
  { title: '질문 초안', desc: '보호자가 진료 중 놓치기 쉬운 질문을 미리 정리해 제안합니다.' },
]

const recommendItems = ['장난감', '사료', '간식', '운동', '산책', '행동 교정', '환경 개선']

type ModuleStatus = 'buildable' | 'future'

const buildableModules: { title: string; desc: string; icon: MarketingIconName; status: ModuleStatus; href?: string }[] = [
  {
    title: '자동 일지 생성',
    desc: '보호자 입력과 카메라 관찰 데이터를 하루 단위 일지로 자동 정리합니다. 자람이 리포트 엔진을 재사용합니다.',
    icon: 'document',
    status: 'buildable',
  },
  {
    title: '이상 알림',
    desc: '평소 패턴에서 벗어나면 보호자에게 알리는 임계값 기반 알림 모듈입니다. 이상 탐지 로직을 재사용합니다.',
    icon: 'bell',
    status: 'buildable',
  },
  {
    title: '병원 리포트',
    desc: '진료 전 최근 활동 · 식사 · 이상 신호를 정리한 1페이지 리포트를 생성합니다.',
    icon: 'hospital',
    status: 'buildable',
  },
  {
    title: '카메라 관찰',
    desc: '가정용 카메라 영상에서 반려동물의 위치 · 자세 · 활동을 인식하는 Vision 모듈입니다.',
    icon: 'camera',
    status: 'buildable',
  },
  {
    title: '행동 번역',
    desc: '분석된 행동 신호를 보호자가 이해할 수 있는 문장으로 바꾸는 번역 레이어입니다.',
    icon: 'chat',
    status: 'buildable',
  },
  {
    title: '추천 엔진',
    desc: '누적 로그를 기반으로 운동량 조절 같은 관리 방향을 제안하는 추천 모듈입니다.',
    icon: 'target',
    status: 'buildable',
  },
  {
    title: 'API · 연동',
    desc: '병원 관리 시스템, 펫테크 앱과 연동하는 표준 API · Webhook 계층입니다.',
    icon: 'link',
    status: 'buildable',
  },
  {
    title: 'Robot Vision (별도 연구)',
    desc: '반려동물 돌봄 로봇을 포함한 로봇 연동은 별도의 도메인 횡단 연구인 Robot Vision에서 다룹니다.',
    icon: 'robot',
    status: 'future',
    href: '/research/robot-vision',
  },
]

const reuseChains: { from: string; mid: string; note: string }[] = [
  { from: '자람이', mid: 'Behavior Analysis', note: '행동 분석 · 해석 · 이상 탐지' },
  { from: '시니어앤라이프', mid: 'Health Monitoring', note: '건강 모니터링 · 장기 추적' },
  { from: '베지케어', mid: 'Recommendation Engine', note: '추천 엔진 · 맥락 분석' },
]

const roadmapSteps = [
  { t: '현재', d: 'Human AI Digital Care Log 운영 · 검증' },
  { t: '2027', d: 'Pet AI Digital Care Log Research 착수' },
  { t: '이후', d: 'Vision AI → Behavior Translation 기술 개발' },
  { t: '장기', d: '로봇 연동 (Robot Vision 별도 연구와 연결)' },
]

const valueColumns: { title: string; icon: MarketingIconName; items: string[] }[] = [
  {
    title: '보호자를 위한 가치',
    icon: 'heart',
    items: [
      '기억이 아니라 기록으로 반려동물의 하루를 이해합니다.',
      '이상 신호를 더 빠르게 알아챌 수 있는 구조를 지향합니다.',
      '병원 진료 시 설명 부담을 리포트로 줄이는 방향을 연구합니다.',
    ],
  },
  {
    title: '비즈니스 파트너를 위한 가치',
    icon: 'handshake',
    items: [
      '검증된 AI Core를 재사용해 개발 비용 · 기간을 줄일 수 있습니다.',
      'API · 임베드 연동으로 기존 펫테크 · 병원 시스템에 얹을 수 있습니다.',
      '자람이 · 시니어앤라이프 · 베지케어와 같은 표준 위에서 확장됩니다.',
    ],
  },
  {
    title: '투자자 · R&D를 위한 가치',
    icon: 'flask',
    items: [
      '하나의 AI Core가 사람 → 동물 → 로봇으로 확장되는 재사용성을 보여줍니다.',
      '이미 운영 중인 도메인에서 검증된 기술을 기반으로 리스크를 낮춥니다.',
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
              <strong className="text-white">상용 서비스가 아닙니다.</strong> 현재는 연구 · 기술 개발 초기 ·
              장기 비전 단계입니다. 출시 예정 · 가입 · 판매를 의미하지 않습니다. 다만 아래 내용은 자람이 ·
              시니어앤라이프 · 베지케어에서 이미 검증한 AI Core를 기반으로, 지금 실제로 구현 가능한 기술
              범위까지 함께 설명합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Quick nav TOC */}
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stages.map((s, i) => (
              <div key={s.label} className="rounded-xl border border-violet-100 bg-violet-50/60 p-5 text-center">
                <div className="text-xs font-bold text-violet-500 mb-2">0{i + 1}</div>
                <h3 className="font-bold text-gray-900 mb-1">{s.label}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Audience map */}
      <section id="audience" className="scroll-mt-28 py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">누구를 위한 연구인가</h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-10">
            Pet AI Digital Care Log는 네 개의 이해관계자를 동시에 바라봅니다.
          </p>
          <div className="rounded-2xl overflow-hidden border border-violet-100 shadow-sm mb-10 bg-white">
            <img
              src="/images/research/pet-stakeholder-map.svg"
              alt="Pet AI Digital Care Log 이해관계자 지도 — 보호자, 동물병원, 비즈니스 파트너, 투자자 R&D"
              className="w-full h-auto"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {audienceStakeholders.map((a) => (
              <div key={a.label} className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50 text-violet-700">
                  <MarketingIcon name={a.icon} className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{a.label}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Problem */}
      <section id="problem" className="scroll-mt-28 py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            보호자가 겪는 문제
          </h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-10">
            반려동물은 말로 상태를 설명하지 못합니다. 문제는 애정 부족이 아니라{' '}
            <strong className="text-gray-800">기록되지 않는 신호</strong>입니다.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {problems.map((p) => (
              <div key={p.title} className="bg-red-50 rounded-xl p-5 border border-red-100 flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white border border-red-100 text-red-800">
                  <MarketingIcon name={p.icon} className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-gray-900 text-sm mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-700">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 max-w-3xl mx-auto rounded-xl border border-indigo-100 bg-indigo-50/60 p-5 text-center">
            <p className="text-sm text-gray-800 leading-relaxed">
              그래서 필요한 것은 새로운 반려동물 기기가 아니라,{' '}
              <strong className="text-gray-900">사람에게 이미 쓰고 있는 관찰 · 기록 · 해석 구조</strong>를 동물
              신호에 맞게 옮기는 연구입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Solution overview */}
      <section id="solution" className="scroll-mt-28 py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            Pet AI Digital Care Log란
          </h2>
          <p className="text-center text-gray-600 text-sm max-w-3xl mx-auto mb-10">
            반려동물의 일상 신호를 관찰 · 기록 · 해석하고, 그 결과를 보호자와 병원에 리포트로 돌려주는 연구
            프로젝트입니다. 다섯 단계는 별도 기능이 아니라 하나의 루프입니다.
          </p>
          <div className="space-y-3 max-w-4xl mx-auto">
            {petCareLoop.map((s) => (
              <div key={s.n} className="flex gap-4 items-start bg-white rounded-xl p-4 border border-gray-200">
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
          <div className="mt-8 max-w-3xl mx-auto rounded-xl border border-gray-200 bg-white p-5 text-center">
            <p className="text-sm text-gray-700 leading-relaxed">
              이 루프는 반려동물을 위해 새로 발명한 개념이 아니라,{' '}
              <Link href="/services/jarame" className="text-violet-700 font-semibold hover:underline">
                자람이
              </Link>
              의 AI 디지털케어로그 루프를 그대로 가져와 신호의 종류만 동물에 맞게 바꾼 것입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 6. One AI Core diagram */}
      <section id="one-ai-core" className="scroll-mt-28 py-14 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">One AI Core, Multiple Care Domains</h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dream AI Lab은 AI Digital Care Log 기술을 사람 → 동물 → 식물 → 로봇으로 확장합니다. 모든 대상은
              관찰 · 기록 · 분석 · 예측 · 맞춤형 관리라는 동일한 AI Core를 사용합니다.
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
        </div>
      </section>

      {/* 7. Care flow diagram */}
      <section id="care-flow" className="scroll-mt-28 py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Pet Care Flow</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              보호자 · 카메라 · AI · 병원이 같은 로그 위에서 어떻게 연결되는지 보여주는 흐름도입니다.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-violet-100 shadow-sm bg-white">
            <img
              src="/images/research/pet-care-flow.svg"
              alt="Pet AI Digital Care Log 케어 플로우 — 관찰, 기록, 해석, 리포트, 추천"
              className="w-full h-auto"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* 8. Technology from Jarame reuse */}
      <section id="tech-jarame" className="scroll-mt-28 py-14 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">기술 재사용 — 자람이에서 가져온 것</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              기존{' '}
              <Link href="/services/jarame" className="text-primary-600 font-semibold hover:underline">
                자람이
              </Link>
              에서 개발 · 운영해 온 행동 분석 · 행동 해석 · 이상 행동 탐지 · AI 상담 · AI 리포트 기술을
              반려동물에 확장하는 연구입니다. 처음부터 새로 만드는 기술이 아니라{' '}
              <strong className="text-gray-900">재학습 · 재적용</strong>이 중심입니다.
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

      {/* 9. Tech stack diagram */}
      <section id="tech-stack" className="scroll-mt-28 py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">기술 스택 (연구 방향)</h2>
            <p className="text-gray-600">상용 운영 스택이 아닌 Research Technology Roadmap입니다.</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-violet-100 shadow-sm mb-6 bg-white">
            <picture>
              <source media="(max-width: 768px)" srcSet="/images/research/pet-ai-tech-stack-mobile.svg" />
              <img
                src="/images/research/pet-ai-tech-stack.svg"
                alt="Pet AI Technology Stack Research Pipeline"
                className="w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {techStackLayers.map((layer, i) => (
              <span key={layer} className="inline-flex items-center gap-1 text-xs font-medium text-gray-600">
                <span className="px-3 py-1 rounded-lg bg-white border border-gray-200">{layer}</span>
                {i < techStackLayers.length - 1 && <span className="text-gray-300">→</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Capability matrix */}
      <section id="capability-matrix" className="scroll-mt-28 py-14 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">역량 매트릭스</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              어떤 도메인에서 어떤 역량이 이미 검증되어 반려동물로 재사용될 수 있는지 정리했습니다.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-violet-100 shadow-sm mb-8 bg-gray-50">
            <img
              src="/images/research/pet-capability-matrix.svg"
              alt="Pet AI Digital Care Log 역량 매트릭스 — 자람이, 시니어앤라이프, 베지케어 기술 재사용 현황"
              className="w-full h-auto"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-600 text-xs uppercase">
                <tr>
                  <th className="px-4 py-3 font-semibold">역량</th>
                  <th className="px-4 py-3 font-semibold text-center">자람이</th>
                  <th className="px-4 py-3 font-semibold text-center">시니어앤라이프</th>
                  <th className="px-4 py-3 font-semibold text-center">베지케어</th>
                  <th className="px-4 py-3 font-semibold">재사용 노트</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {capabilityRows.map((row) => (
                  <tr key={row.capability} className="bg-white">
                    <td className="px-4 py-3 font-medium text-gray-900">{row.capability}</td>
                    <td className="px-4 py-3 text-center">{row.jarame ? '✓' : '—'}</td>
                    <td className="px-4 py-3 text-center">{row.senior ? '✓' : '—'}</td>
                    <td className="px-4 py-3 text-center">{row.veggie ? '✓' : '—'}</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 11. Vision AI */}
      <section id="vision-ai" className="scroll-mt-28 py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <MarketingIcon name="camera" className="h-8 w-8 text-violet-700" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Vision AI</h2>
          </div>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            카메라 기반 관찰로 자동 기록 · 일지 · 요약 · 리포트를 만드는 연구입니다. 아래 여섯 가지는 이미
            컴퓨터 비전 영역에서 성립된 과제이며, 반려동물 데이터로 재학습하는 것이 연구 범위입니다.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {visionAiCapabilities.map((v) => (
              <div key={v.title} className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-violet-50 text-violet-700">
                  <MarketingIcon name={v.icon} className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{v.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Behavior Translation Engine */}
      <section id="behavior-engine" className="scroll-mt-28 py-14 bg-violet-50/70 border-b border-violet-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Behavior Translation Engine</h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              사람이 이해하기 어려운 반려동물의 행동을 AI가 해석하여 보호자에게 문장으로 설명하는 엔진을
              연구합니다.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-violet-200 shadow-sm mb-8 bg-white">
            <img
              src="/images/research/pet-behavior-engine.svg"
              alt="Pet Behavior Translation Engine — 행동 신호에서 보호자 설명 문장까지"
              className="w-full h-auto"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="bg-white rounded-2xl border border-violet-200 p-6 md:p-8">
            <p className="text-sm font-semibold text-violet-800 mb-5 text-center">번역 예시 (연구 시나리오)</p>
            <div className="space-y-4">
              {behaviorTranslations.map((b) => (
                <div
                  key={b.signal}
                  className="grid sm:grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/70 p-4"
                >
                  <p className="text-sm text-gray-700">
                    <span className="text-xs font-semibold text-gray-400 mr-2">신호</span>
                    {b.signal}
                  </p>
                  <span className="text-violet-400 text-center hidden sm:block">→</span>
                  <p className="text-sm text-gray-900 font-medium">
                    <span className="text-xs font-semibold text-violet-500 mr-2">번역</span>
                    {b.translation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 13. Digital Care Log horizons */}
      <section id="care-log" className="scroll-mt-28 py-14 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Digital Care Log</h2>
            <p className="text-gray-600">하루 · 1개월 · 1년 · 평생 데이터를 누적 관리하는 구조를 연구합니다.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {careLogHorizons.map((h) => (
              <div key={h.label} className="rounded-xl border border-indigo-100 bg-indigo-50/50 p-5 text-center">
                <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-indigo-200 text-indigo-700 mx-auto">
                  <MarketingIcon name={h.icon} className="h-5 w-5" />
                </div>
                <div className="text-lg font-bold text-indigo-900 mb-1">{h.label}</div>
                <p className="text-xs text-gray-600 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 top-3 bottom-3 w-px bg-indigo-200 hidden sm:block" />
            <p className="text-center text-sm text-gray-500 mb-2">누적 로그가 쌓일수록 해석의 정확도가 올라갑니다</p>
          </div>
        </div>
      </section>

      {/* 14. AI Daily Report (mock UI) */}
      <section id="daily-report" className="scroll-mt-28 py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-center">AI Daily Report</h2>
          <p className="text-center text-gray-600 mb-8">
            AI가 자동으로 오늘의 일지를 작성하는 연구 방향을 실제 화면처럼 구성한 예시입니다.
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
                  62<span className="text-xs text-gray-400 font-normal">/100</span>
                </p>
                <p className="text-[11px] text-red-600">평소보다 ↓ 18%</p>
              </div>
              <div className="py-4">
                <p className="text-xs text-gray-500 mb-1">식사</p>
                <p className="text-lg font-bold text-gray-900">2/2</p>
                <p className="text-[11px] text-amber-600">저녁 30분 지연</p>
              </div>
              <div className="py-4">
                <p className="text-xs text-gray-500 mb-1">수면</p>
                <p className="text-lg font-bold text-gray-900">11.2h</p>
                <p className="text-[11px] text-gray-400">평소 범위</p>
              </div>
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold text-gray-500 mb-3">오늘의 관찰 기록</p>
              <ul className="space-y-3 text-sm text-gray-800 leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-xs text-gray-400 shrink-0 w-12">08:10</span>
                  <span>아침 산책 20분, 평소와 비슷한 활동량이 관찰되었습니다.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-xs text-gray-400 shrink-0 w-12">13:40</span>
                  <span>오후 활동량이 평균보다 감소했습니다.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-xs text-gray-400 shrink-0 w-12">18:50</span>
                  <span>왼쪽 뒷다리를 절뚝이는 동작이 3회 관찰되었습니다.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-xs text-gray-400 shrink-0 w-12">19:20</span>
                  <span>저녁 식사 시간이 평소보다 30분 늦었습니다.</span>
                </li>
              </ul>
              <div className="mt-5 rounded-xl bg-violet-50 border border-violet-100 p-4">
                <p className="text-xs font-semibold text-violet-700 mb-1">AI 요약</p>
                <p className="text-sm text-gray-800 leading-relaxed">
                  오늘은 활동량 감소와 절뚝임이 함께 관찰되어, 다리 상태를 주의 깊게 살펴볼 필요가 있습니다.
                  이런 패턴이 2일 이상 이어지면 병원 상담을 권장하는 방향으로 리포트를 설계하고 있습니다.
                </p>
              </div>
            </div>
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">
            * 위 화면은 연구 방향을 보여주기 위한 목업이며, 실제 반려동물 데이터가 아닙니다.
          </p>
        </div>
      </section>

      {/* 15. Vet Future Vision */}
      <section id="vet-vision" className="scroll-mt-28 py-14 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold mb-4">
            Future Vision
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">동물병원 연동 비전</h2>
          <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
            장기적으로 진료 전에 AI Digital Care Report를 제공하는 방향을 연구합니다. 아래는 연구 가설이며,
            현재 제공되는 병원용 제품이 아닙니다.
          </p>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <MarketingIcon name="stethoscope" className="h-7 w-7 text-primary-600" />
              <h3 className="text-lg font-bold text-gray-900">AI Digital Care Report (연구 가설)</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {vetReportSections.map((s) => (
                <div key={s.title} className="rounded-xl border border-gray-100 bg-gray-50/80 p-4">
                  <p className="text-sm font-bold text-gray-900 mb-1">{s.title}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              행동 · 식사 · 배변 · 수면 · 약물 · 활동량 · 이상 행동을 자동 요약하는 방향을 검토하고 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 16. Recommendations */}
      <section id="recommendations" className="scroll-mt-28 py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-center">맞춤 추천 (연구 방향)</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            누적 로그를 바탕으로 한 AI 추천 가설입니다. 현재 커머스 · 추천 서비스가 아니며, 베지케어의 추천
            엔진 구조를 참고합니다.
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

      {/* 17. Buildable service modules */}
      <section id="modules" className="scroll-mt-28 py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">지금 구현 가능한 모듈</h2>
          <p className="text-center text-gray-600 text-sm max-w-3xl mx-auto mb-10">
            연구 단계라고 해서 전부 먼 미래는 아닙니다. 자람이 · 시니어앤라이프 · 베지케어의 검증된 AI Core를
            재사용하면, 아래 모듈들은 기술적으로 바로 구현에 착수할 수 있는 범위입니다. 로봇 연동은 별도
            연구인 Robot Vision으로 구분합니다.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {buildableModules.map((m) => (
              <div
                key={m.title}
                className={`rounded-xl p-5 border ${
                  m.status === 'future'
                    ? 'border-amber-200 bg-amber-50/60'
                    : 'border-emerald-200 bg-emerald-50/50'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                      m.status === 'future' ? 'bg-white text-amber-700 border border-amber-200' : 'bg-white text-emerald-700 border border-emerald-200'
                    }`}
                  >
                    <MarketingIcon name={m.icon} className="h-5 w-5" />
                  </div>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      m.status === 'future' ? 'bg-amber-200 text-amber-900' : 'bg-emerald-200 text-emerald-900'
                    }`}
                  >
                    {m.status === 'future' ? 'FUTURE' : '구현 가능'}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">{m.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{m.desc}</p>
                {m.href && (
                  <Link href={m.href} className="inline-block mt-3 text-xs font-semibold text-amber-700 hover:underline">
                    Robot Vision 연구 보기 →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 18. Robot Vision teaser */}
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
              반려동물 돌봄 로봇을 포함해, AI Digital Care Log를 로봇의 AI Brain으로 확장하는 연구는 Pet AI
              단독이 아니라 자람이 · 시니어앤라이프 · 토탈케어로그 · 에듀케어로그 · 베지케어를 함께 아우르는
              별도의 도메인 횡단 연구인{' '}
              <Link href="/research/robot-vision" className="text-amber-300 font-semibold hover:underline">
                Robot Vision
              </Link>
              에서 자세히 다루고 있습니다. 로봇은 행동하고, Digital Care Log는 관찰 · 판단 · 학습합니다.
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

      {/* 19. Technology Reuse chains */}
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

      {/* 20. Roadmap */}
      <section id="roadmap" className="scroll-mt-28 py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">연구 로드맵</h2>
            <p className="text-gray-600">출시 일정이 아닌 연구 · 기술 개발 방향입니다.</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-indigo-100 shadow-sm mb-8 bg-white">
            <picture>
              <source media="(max-width: 768px)" srcSet="/images/research/pet-ai-roadmap-mobile.svg" />
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
            {roadmapSteps.map((step) => (
              <li key={step.t} className="flex gap-4 items-start rounded-xl border border-gray-200 bg-white p-4">
                <span className="shrink-0 w-16 text-sm font-bold text-violet-700">{step.t}</span>
                <span className="text-sm text-gray-700">{step.d}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 21. Value columns */}
      <section id="value" className="scroll-mt-28 py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">누구에게 어떤 가치인가</h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-10">
            같은 연구라도 보호자 · 비즈니스 파트너 · 투자자가 얻는 가치는 다릅니다.
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

      {/* 22. FAQ */}
      <section id="faq" className="scroll-mt-28 py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">자주 묻는 질문</h2>
          <p className="text-center text-gray-600 text-sm mb-10">
            연구 단계와 구현 가능 범위를 명확히 구분해 답합니다.
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

      {/* 23. Related links */}
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
              href="/services"
              className="px-5 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-800 font-semibold hover:bg-gray-50 text-sm"
            >
              서비스 (Products)
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
            관점으로 문의해 주세요. 보호자 체감 가치, 비즈니스 재사용 구조, 투자자 관점의 확장성 모두 같은
            담당자가 안내합니다.
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
