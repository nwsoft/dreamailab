import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import PageClosingSection from '../../../components/PageClosingSection'
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildPageMetadata,
  buildWebPageJsonLd,
} from '../../../lib/seo'

const projectName = 'DAL Vibe Architect'
const canonicalPath = '/services/vibe-architect'
const description =
  '코딩을 몰라도 아이디어를 한국의 운영환경과 접근성 기준에 맞는 실제 소프트웨어로 설계·검증·배포할 수 있도록 돕는 AI Software Architect 신규 프로젝트입니다.'

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: `${projectName} | 한국형 AI 소프트웨어 아키텍트 신규 프로젝트`,
    description,
    path: canonicalPath,
    ogTitle: '코딩이 아니라, 운영 가능한 소프트웨어를 만듭니다',
    ogDescription: '비개발자와 장애인도 아이디어를 안전한 실제 서비스로 구현하도록 돕는 드림에이아이랩의 신규 프로젝트',
    ogImageAlt: 'DAL Vibe Architect AI 소프트웨어 설계 흐름',
  }),
  alternates: {
    canonical: absoluteUrl(canonicalPath),
    languages: {
      'ko-KR': absoluteUrl(canonicalPath),
      'en-US': absoluteUrl('/en/services/vibe-architect'),
    },
  },
}

const architecture = [
  { step: '01', name: 'Intent AI', desc: '아이디어·업무·사용자·성공 기준을 이해' },
  { step: '02', name: 'Product Architect AI', desc: '역할·흐름·정책·운영 요구사항 설계' },
  { step: '03', name: 'System Architect AI', desc: '데이터·권한·API·인프라 구조 설계' },
  { step: '04', name: 'Safety & Compliance AI', desc: '보안·개인정보·접근성·한국 운영요건 점검' },
  { step: '05', name: 'Build Agents', desc: '설계에 따라 UI·서버·데이터·연동 구현' },
  { step: '06', name: 'QA & Deploy Agents', desc: '테스트·회귀검증·배포·복구 준비' },
  { step: '07', name: 'Operations Loop', desc: '관측·유지보수·실사용 결과를 다음 개선에 환류' },
] as const

const guardianImpacts = [
  '현재 요구사항과 승인된 아키텍처',
  '변경되는 화면·컴포넌트·의존성',
  'DB 스키마·마이그레이션·복구 경로',
  'API·인증·권한·개인정보 영향',
  '접근성·보안·회귀 가능성',
  '변경 후 자동·수동 검증 범위',
] as const

const koreanOperations = [
  {
    title: '한국 사용자 여정',
    body: '한국형 주소·휴대전화 흐름, 카카오·네이버 등 로그인, 문자·알림톡 같은 익숙한 접점을 서비스 성격에 맞게 설계합니다.',
  },
  {
    title: '결제·사업 운영',
    body: '국내 PG, 영수증·정산, 사업자·관리자 업무, 고객지원과 운영 로그를 처음부터 요구사항에 포함합니다.',
  },
  {
    title: '개인정보·동의',
    body: '수집 목적·보유기간·동의·철회·권한·감사로그를 설계 단계에서 다룹니다. 실제 출시 전에는 최신 법령과 전문가 검토를 별도 통과해야 합니다.',
  },
  {
    title: '현장형 템플릿',
    body: '센터·돌봄·교육·소상공인·협회·공공업무처럼 한국 현장의 역할과 문서 흐름을 반영한 산업별 블루프린트를 지향합니다.',
  },
] as const

const inclusionPrinciples = [
  {
    title: '만드는 도구부터 접근 가능하게',
    body: '키보드·스크린리더·음성·확대·스위치 입력을 고려하고, 드래그나 색상에만 의존하지 않는 제작 경험을 설계합니다.',
  },
  {
    title: '쉬운 말과 단계형 의사결정',
    body: '기술용어 대신 사업적 질문을 한 번에 하나씩 제시하고, 선택의 영향과 되돌리기 경로를 쉬운 한국어로 설명합니다.',
  },
  {
    title: '생성 결과도 접근성을 기본값으로',
    body: '시맨틱 구조, 초점 이동, 이름·역할·상태, 대비, 자막·대체텍스트를 빌드·QA 게이트에 포함합니다.',
  },
  {
    title: '당사자와 함께 검증',
    body: '자동 검사만으로 적합성을 선언하지 않습니다. 장애 당사자·보조기술 사용자의 공동설계와 실제 과업 테스트를 베타 전제조건으로 둡니다.',
  },
] as const

const targetProjects = [
  ['돌봄·재활·교육 현장', '예약·기록·동의·보호자 공유·기관 운영이 필요한 서비스'],
  ['장애인 창작자·당사자 조직', '보조기술·의사소통·생활지원 아이디어를 당사자가 직접 구체화'],
  ['소상공인·전문가', '한국형 결제·예약·회원·관리자까지 갖춘 운영 도구'],
  ['공공·비영리·협회', '접근성·개인정보·권한·감사 가능성을 포함한 업무 서비스'],
] as const

const roadmap = [
  ['Gate 1', '문제 발견·공동설계', '비개발자·장애 당사자·현장 운영자 인터뷰와 과업 정의'],
  ['Gate 2', '아키텍처 프로토타입', 'Intent → Product → System Architect와 Architecture Guardian 검증'],
  ['Gate 3', '한국 운영 기반', '인증·동의·결제·메시징·관리자·접근성 블루프린트 구축'],
  ['Gate 4', '산업별 파일럿', '돌봄·교육 등 좁은 분야에서 실제 운영·복구·유지보수 검증'],
  ['Gate 5', '측정 가능한 베타', '완료율·오류·접근성·운영 안정성 지표를 공개 범위에 맞춰 검증'],
] as const

const faqs = [
  {
    question: 'Cursor와 같은 AI 코드 편집기인가요?',
    answer:
      '아닙니다. 개발자의 코드 작성 속도를 높이는 편집기 경쟁보다, 비개발자의 의도를 요구사항·아키텍처·보안·테스트·배포·운영으로 번역하는 Software Creation Platform을 목표로 합니다.',
  },
  {
    question: '지금 바로 사용할 수 있나요?',
    answer:
      '아직 아닙니다. 2026년 8월 17일 기준 방향과 설계를 공개한 신규 프로젝트이며, 공개 빌더·요금제·출시일은 확정되지 않았습니다.',
  },
  {
    question: '한국형이라는 것은 한국어 UI라는 뜻인가요?',
    answer:
      '한국어는 일부일 뿐입니다. 국내 인증·결제·메시징·개인정보·사업자 운영·관리자 업무와 산업별 현장 흐름을 아키텍처 단계에서 다루는 것을 의미합니다.',
  },
  {
    question: '장애인을 위한 기능도 포함되나요?',
    answer:
      '포함을 핵심 설계축으로 둡니다. 제작 도구 자체의 보조기술 호환, 쉬운 말·단계형 흐름, 생성 결과의 WCAG 기반 점검, 장애 당사자 공동설계를 제품 게이트에 포함할 계획입니다.',
  },
  {
    question: 'AI가 만든 서비스의 안전성을 보장하나요?',
    answer:
      '무조건적인 안전을 약속하지 않습니다. Architecture Guardian, 자동 테스트, 변경 영향 분석, 배포 전 승인, 복구 경로와 분야별 전문가 검토를 통해 위험을 낮추는 구조를 설계합니다.',
  },
] as const

export default function VibeArchitectPage() {
  const pageUrl = absoluteUrl(canonicalPath)
  const schemas = [
    buildWebPageJsonLd({ name: `${projectName} 신규 프로젝트`, description, url: pageUrl }),
    buildBreadcrumbJsonLd([
      { name: '홈', url: absoluteUrl('/') },
      { name: '서비스', url: absoluteUrl('/services') },
      { name: projectName, url: pageUrl },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: projectName,
      alternateName: ['DAL AI Software Architect', 'DAL 바이브 아키텍트'],
      description,
      url: pageUrl,
      serviceType: 'AI software architecture and creation platform project',
      areaServed: { '@type': 'Country', name: '대한민국' },
      provider: { '@id': 'https://dreamailab.com/#organization' },
      audience: [
        { '@type': 'Audience', audienceType: '비개발자·현장 운영자' },
        { '@type': 'Audience', audienceType: '장애인 창작자·당사자 조직' },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <main>
        <section className="relative overflow-hidden border-b border-cyan-400/20 bg-slate-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_38%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.22),transparent_36%)]" />
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <div className="mb-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1.5 text-sm font-semibold text-cyan-200">
                    New Project · 2026
                  </span>
                  <span className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm text-slate-200">
                    설계 공개 · 개발 준비
                  </span>
                </div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">{projectName}</p>
                <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  코딩을 쉽게 만드는 AI가 아니라,
                  <span className="mt-2 block bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                    운영 가능한 소프트웨어를 만드는 AI
                  </span>
                </h1>
                <p className="mt-7 max-w-3xl text-lg leading-relaxed text-slate-200 sm:text-xl">
                  사용자는 아이디어와 현장에 답합니다. AI는 요구사항·데이터·권한·보안·접근성·테스트·배포·운영을
                  하나의 아키텍처로 번역합니다. 한국의 실제 운영환경과 비개발자, 장애인 창작자를 처음부터 포함하는
                  <strong className="text-white"> AI Software Architect</strong>를 지향합니다.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#architecture" className="rounded-xl bg-cyan-300 px-6 py-3 font-bold text-slate-950 hover:bg-cyan-200">
                    설계 구조 보기
                  </a>
                  <Link href="/contact?service=vibe-architect&type=partnership" className="rounded-xl border border-white/30 px-6 py-3 font-bold text-white hover:bg-white/10">
                    공동설계·파일럿 문의
                  </Link>
                </div>
              </div>

              <div className="rounded-3xl border border-white/15 bg-white/[0.07] p-6 shadow-2xl backdrop-blur sm:p-8">
                <p className="text-sm font-semibold text-cyan-200">사용자가 말하는 것</p>
                <div className="mt-3 rounded-2xl bg-white p-5 text-lg font-bold leading-relaxed text-slate-900">
                  “대전에 있는 언어치료센터 예약 플랫폼을 만들고 싶어요.”
                </div>
                <div className="my-5 flex items-center gap-3 text-sm text-slate-300">
                  <span className="h-px flex-1 bg-white/15" />
                  AI가 코딩 전에 묻는 질문
                  <span className="h-px flex-1 bg-white/15" />
                </div>
                <div className="space-y-3">
                  {[
                    '센터가 시간을 직접 열까요, 고객이 원하는 시간을 요청할까요?',
                    '보호자와 치료사의 공개 범위는 어디까지여야 할까요?',
                    '예약 변경·중복·노쇼는 어떤 운영 규칙으로 처리할까요?',
                  ].map((question, index) => (
                    <div key={question} className="flex gap-3 rounded-xl border border-white/10 bg-slate-900/60 p-4 text-sm leading-relaxed text-slate-100">
                      <span className="font-bold text-cyan-300">{index + 1}</span>
                      <span>{question}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-xs leading-relaxed text-slate-400">
                  사용자는 사업적 결정을 하고, 시스템이 이를 스키마·API·권한·테스트·운영 규칙으로 변환하는 방식입니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-indigo-700">Different category</p>
              <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">Cursor의 복제가 아닌, 다른 문제 정의</h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                전문 개발자를 위한 AI 편집기 시장은 빠르게 통합되고 있습니다. Cursor는 2025년 Graphite 인수 계약을 발표했고,
                2026년에는 SpaceX와 모델 학습 파트너십을 발표했습니다. DAL은 코드 생성 성능 정면대결보다
                <strong className="text-slate-900"> “왜 비개발자가 개발 전 과정을 알아야 실제 서비스를 만들 수 있는가”</strong>를 풉니다.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
                <p className="text-sm font-semibold text-slate-500">일반적인 AI 코딩 도구</p>
                <p className="mt-3 text-2xl font-black text-slate-900">사람 → Prompt → AI → Code</p>
                <p className="mt-4 leading-relaxed text-slate-600">코드가 빨리 나오지만, 숨은 요구사항과 운영 위험을 사용자가 알아차려야 할 수 있습니다.</p>
              </div>
              <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-7">
                <p className="text-sm font-semibold text-cyan-800">DAL이 설계하는 범주</p>
                <p className="mt-3 text-2xl font-black text-slate-950">의도 → 아키텍처 → 검증 → 운영</p>
                <p className="mt-4 leading-relaxed text-slate-700">코드를 보여주는 것보다, 서비스가 왜 그렇게 설계되고 안전하게 바뀌는지를 관리합니다.</p>
              </div>
            </div>
            <div className="mt-7 flex flex-wrap justify-center gap-4 text-sm">
              <a className="font-semibold text-indigo-700 underline underline-offset-4" href="https://cursor.com/blog/graphite" target="_blank" rel="noopener noreferrer">Cursor · Graphite 발표</a>
              <a className="font-semibold text-indigo-700 underline underline-offset-4" href="https://cursor.com/blog/spacex-model-training" target="_blank" rel="noopener noreferrer">Cursor · SpaceX 파트너십</a>
            </div>
          </div>
        </section>

        <section id="architecture" className="border-y border-white/10 bg-slate-900 py-16 text-white lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-wider text-cyan-300">Architecture to execution</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">의도를 운영까지 연결하는 7개 계층</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                코드를 곧바로 만들기 전에 목적과 책임 경계를 설계하고, 배포 뒤 결과까지 같은 루프 안에서 관리합니다.
              </p>
            </div>
            <ol className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {architecture.map((item, index) => (
                <li key={item.name} className={`relative rounded-2xl border p-6 ${index === architecture.length - 1 ? 'border-cyan-300/40 bg-cyan-300/10 xl:col-span-2' : 'border-white/10 bg-white/[0.04]'}`}>
                  <span className="text-xs font-black tracking-widest text-cyan-300">{item.step}</span>
                  <h3 className="mt-3 text-lg font-bold">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-rose-700">Architecture Guardian</p>
              <h2 className="mt-3 text-3xl font-black text-slate-950">“전화번호 하나 추가” 뒤의 전체 영향을 봅니다</h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                초보자가 변경 범위를 몰라도 시스템은 스키마 → 마이그레이션 → 검증 → API → UI → 개인정보 → 테스트의 연결을 추적해야 합니다.
                변경 전 영향 분석, 변경 후 회귀검증, 승인과 복구를 하나의 작업으로 묶는 것이 핵심입니다.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {guardianImpacts.map((impact, index) => (
                <div key={impact} className="rounded-xl border border-rose-100 bg-rose-50 p-4 text-sm font-semibold leading-relaxed text-slate-800">
                  <span className="mr-2 text-rose-600">{String(index + 1).padStart(2, '0')}</span>{impact}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-amber-50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-amber-800">Built for Korea</p>
              <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">한국어 번역이 아니라, 한국에서 운영되는 방법</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-700">연동 이름을 나열하는 데서 끝나지 않고, 실제 사업 흐름과 책임을 아키텍처에 포함합니다.</p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {koreanOperations.map((item) => (
                <div key={item.title} className="rounded-2xl border border-amber-200 bg-white p-7 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-indigo-950 py-16 text-white lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-cyan-300">Disability inclusion by design</p>
                <h2 className="mt-3 text-3xl font-black sm:text-4xl">장애인을 위한 별도 옵션이 아니라, 처음부터 포함하는 제작 환경</h2>
                <p className="mt-5 text-lg leading-relaxed text-indigo-100">
                  생성형 AI 코딩 도구가 시각장애 개발자의 기존 장벽을 키우거나 새로운 장벽을 만들 수 있다는 연구가 있습니다.
                  DAL은 제작 도구와 생성 결과, 두 층의 접근성을 함께 다룹니다.
                </p>
                <div className="mt-6 space-y-2 text-sm">
                  <a href="https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-coding-assistants-on-developers-who-are-visually-impaired/" target="_blank" rel="noopener noreferrer" className="block font-semibold text-cyan-200 underline underline-offset-4">Microsoft Research · 시각장애 개발자와 AI 코딩 도구 연구</a>
                  <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer" className="block font-semibold text-cyan-200 underline underline-offset-4">W3C · WCAG 2.2 국제 접근성 표준</a>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {inclusionPrinciples.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/15 bg-white/[0.07] p-6">
                    <h3 className="font-bold text-cyan-100">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-indigo-100">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-indigo-700">Start narrow</p>
                <h2 className="mt-3 text-3xl font-black text-slate-950">범용 도구를 표방하되, 특수 현장부터 증명합니다</h2>
                <div className="mt-7 space-y-4">
                  {targetProjects.map(([title, body]) => (
                    <div key={title} className="rounded-2xl border border-slate-200 p-5">
                      <h3 className="font-bold text-slate-950">{title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{body}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-indigo-700">Delivery gates</p>
                <h2 className="mt-3 text-3xl font-black text-slate-950">출시 선언보다 먼저 통과할 검증 단계</h2>
                <ol className="mt-7 space-y-3">
                  {roadmap.map(([gate, title, body]) => (
                    <li key={gate} className="grid grid-cols-[72px_1fr] gap-4 rounded-2xl bg-slate-50 p-5">
                      <span className="text-sm font-black text-indigo-700">{gate}</span>
                      <div>
                        <h3 className="font-bold text-slate-950">{title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600">{body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50 py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-amber-200 bg-amber-50 p-7 sm:p-9">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-amber-200 px-3 py-1 text-xs font-bold text-amber-950">CURRENT STATUS</span>
                <span className="text-sm font-semibold text-amber-900">2026-08-17 기준</span>
              </div>
              <h2 className="mt-4 text-2xl font-black text-slate-950">신규 프로젝트 · 방향 및 아키텍처 공개 단계</h2>
              <p className="mt-3 leading-relaxed text-slate-700">
                현재 공개 빌더, 유료 요금제, 확정 출시일은 없습니다. <strong>DAL Vibe Architect는 프로젝트명</strong>이며 변경될 수 있습니다.
                이 페이지는 현재 설계 원칙과 공동설계 범위를 설명하며, 기능 제공·법률 적합성·접근성 준수 성과를 미리 주장하지 않습니다.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-black text-slate-950">자주 묻는 질문</h2>
            <div className="mt-9 space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-white p-6 open:border-cyan-300 open:shadow-sm">
                  <summary className="cursor-pointer list-none pr-6 text-lg font-bold text-slate-950">{faq.question}</summary>
                  <p className="mt-4 leading-relaxed text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <PageClosingSection
        title="현장에서 먼저 풀어야 할 문제가 있나요?"
        description="돌봄·교육·장애인 접근성·소상공인 운영 분야의 공동설계 파트너와 실제 과제를 찾고 있습니다."
        primary={{ label: '공동설계·파일럿 문의', href: '/contact?service=vibe-architect&type=partnership' }}
        secondary={[{ label: '서비스 생태계 보기', href: '/services' }]}
      />
      <Footer />
    </div>
  )
}
