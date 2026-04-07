import type { Metadata } from 'next'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI 디지털케어로그 | 발달장애 표준 기술 | 자람이 | 드림에이아이랩',
  description:
    '발달장애 치료·학습을 위한 AI 디지털케어로그. 데이터 표준·기관 연계·AI 강화학습 기반 맞춤형 치료·학습. 전국 5,700개 기관 등록, 베타 테스트 중. 가정·학교·센터·병원 통합, 실시간 AI 분석. DAL 플랫폼 1번 도메인. AI 엔진형 Middleware.',
  keywords:
    'AI 디지털케어로그, 발달장애 표준, 맞춤형 치료, 맞춤형 학습, 골든타임, 발달장애 치료 방법, ADHD 치료, 자폐증 치료, 특수교육, 언어치료, 작업치료, 행동치료 ABA, IEP 개별화교육계획, 치료사 협업, 다기관 연계, 자람이, 드림에이아이랩, 케어로그 표준화, 강화학습, Middleware, AI 엔진',
  alternates: {
    canonical: 'https://dreamailab.com/services/jarame',
  },
  openGraph: {
    type: 'website',
    url: 'https://dreamailab.com/services/jarame',
    siteName: '드림에이아이랩',
    title: '자람이 — 발달장애 AI 디지털케어로그 | DAL 플랫폼 1번 도메인',
    description:
      'DAL 플랫폼의 첫 도메인. 발달장애 AI 디지털케어로그 표준 기술. 전국 5,700개 기관 등록, 베타 테스트 중. 가정·학교·센터·병원 통합, AI 강화학습 기반 맞춤형 치료·학습. AI 엔진형 Middleware.',
    images: [
      {
        url: '/og/jarame.jpg',
        width: 1200,
        height: 630,
        alt: '자람이 — 발달장애 AI 디지털케어로그',
      },
    ],
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: '자람이 — 발달장애 AI 디지털케어로그 | DAL 1번 도메인',
    description:
      '전국 5,700개 기관 등록, 베타 테스트 중. AI 강화학습 기반 맞춤형 치료·학습. 데이터 표준·기관 연계·정책 연계.',
    images: ['/og/jarame.jpg'],
  },
  robots: { index: true, follow: true },
}

/** 자람이 공개 서비스 진입 — 변경 시 이 상수만 수정 */
const JARAME_ENTRYPOINT_URL = 'https://jarame.or.kr'

const pageCanonical = 'https://dreamailab.com/services/jarame'
const pageOgTitle = '자람이 — 발달지원 인프라 | DAL 플랫폼 발달 축'
const pageDescription =
  '발달·행동 데이터를 기반으로 가정·학교·기관을 잇는 AI 디지털케어로그 기반 발달지원 인프라. DAL 발달 축.'

export default function JarameService() {
  const flowSteps = [
    { n: 1, title: '기록', body: '가정·학교·센터·병원의 세션·행동·평가를 표준 케어로그로 모읍니다.' },
    { n: 2, title: '분석', body: '패턴·위험 신호·개입 포인트를 짚어 보호자·전문가가 상의할 질문을 만듭니다.' },
    { n: 3, title: '권고', body: '중재·학습 방향을 제안하고 이유·한계(XAI)를 붙입니다.' },
    { n: 4, title: '실행', body: '세션·숙제·루틴·리포트가 같은 데이터 위에서 돕니다.' },
    { n: 5, title: '연계', body: '기관·교사·치료사·가족이 동의된 범위에서 같은 요약을 봅니다.' },
  ]

  const personaRows = [
    { who: '개인(아동·가족)', pain: '가정과 센터·학교 기록이 갈라지면 아이의 한 줄기가 보이지 않습니다.' },
    { who: '보호자', pain: '매번 처음부터 설명해야 하고, 무엇이 효과가 있었는지 데이터로 남지 않습니다.' },
    { who: '기관(센터·학교·병원)', pain: '협업은 많은데 같은 표준으로 공유되는 로그가 없으면 개입이 중복됩니다.' },
    { who: '공공·연구', pain: '표본·형식이 제각각이면 정책·효과 분석의 재현성이 떨어집니다.' },
  ]

  const jsonLdGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageCanonical}#webpage`,
        url: pageCanonical,
        name: pageOgTitle,
        description: pageDescription,
        inLanguage: 'ko-KR',
        isPartOf: { '@id': 'https://dreamailab.com/#website' },
        about: { '@id': `${pageCanonical}#service` },
        mainEntity: { '@id': `${pageCanonical}#service` },
      },
      {
        '@type': 'Service',
        '@id': `${pageCanonical}#service`,
        name: '자람이',
        alternateName: 'Jarame',
        url: pageCanonical,
        provider: { '@type': 'Organization', name: 'Dream AI Lab', url: 'https://dreamailab.com/' },
        category: 'Healthcare',
        areaServed: 'KR',
        description: pageDescription,
        offers: {
          '@type': 'Offer',
          url: JARAME_ENTRYPOINT_URL,
          description: 'DAL 발달 축 공개 서비스·기관 연계 진입점',
        },
      },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }} />

      {/* 1. Hero */}
      <section className="bg-gradient-to-br from-amber-600 to-orange-700 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-100 text-xs sm:text-sm font-medium mb-4 tracking-wide">DAL 발달 축 · 기관 연계·베타 운영</p>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-5 leading-snug max-w-4xl mx-auto">
            발달·행동 데이터가 가정·학교·센터마다 따로 남으면, 한 아이의 한 줄기가 끊깁니다
          </h1>
          <p className="text-amber-50 text-sm md:text-base max-w-3xl mx-auto mb-3 leading-relaxed font-medium">
            표준 케어로그와 AI로 <strong className="text-white">기록 → 분석 → 권고 → 실행 → 연계</strong>를 한 루프로 묶습니다.
          </p>
          <p className="text-amber-100/95 text-sm max-w-3xl mx-auto mb-8 leading-relaxed">
            자람이는 정보만 모으는 앱이 아니라, 발달 지원이 같은 밑그림에서 돌아가게 하는{' '}
            <strong className="text-white">발달지원 인프라</strong>입니다.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-xs text-white">
            <span className="bg-white/15 px-3 py-1.5 rounded-full">가정 · 학교 · 센터 · 병원</span>
            <span className="bg-white/15 px-3 py-1.5 rounded-full">DAL 플랫폼 발달 축</span>
          </div>
        </div>
      </section>

      {/* 2. 문제 정의 */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">발달 지원은 한 공간에만 있지 않습니다</h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-10">
            문제의 중심은 <strong className="text-gray-900">기록 표준 부재</strong>와 <strong className="text-gray-900">기관 간 단절</strong>
            입니다.
          </p>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto text-sm text-gray-800">
            <div className="rounded-xl border border-red-100 bg-red-50/60 p-5">
              <h3 className="font-bold text-gray-900 mb-2">파편화된 기록</h3>
              <p>일지·앱·메모가 제각각이면 추세와 개입 효과를 같은 눈금으로 보기 어렵습니다.</p>
            </div>
            <div className="rounded-xl border border-red-100 bg-red-50/60 p-5">
              <h3 className="font-bold text-gray-900 mb-2">늦는 조기 개입 신호</h3>
              <p>일상 패턴이 구조화되지 않으면 위험·기회 신호를 놓치기 쉽습니다.</p>
            </div>
            <div className="rounded-xl border border-red-100 bg-red-50/60 p-5">
              <h3 className="font-bold text-gray-900 mb-2">협업 비용</h3>
              <p>교사·치료사·의료진이 같은 그림 없이 만나면 설명·중복이 커집니다.</p>
            </div>
            <div className="rounded-xl border border-red-100 bg-red-50/60 p-5">
              <h3 className="font-bold text-gray-900 mb-2">정책·연구 재현성</h3>
              <p>표본 정의가 달라지면 효과 논의가 같은 선에서 이어지지 않습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 사용자 공감 */}
      <section className="py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">사용자 공감</h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-10">역할은 다르지만 끊김의 원인은 같습니다.</p>
          <div className="space-y-3">
            {personaRows.map((row) => (
              <div key={row.who} className="flex flex-col md:flex-row md:gap-6 bg-white rounded-xl p-5 border border-gray-100">
                <div className="md:w-48 shrink-0 font-bold text-amber-800">{row.who}</div>
                <p className="text-sm text-gray-800 flex-1">{row.pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 서비스 정의 */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">자람이란 무엇인가</h2>
          <div className="max-w-3xl mx-auto rounded-xl border-2 border-amber-200 bg-amber-50/50 p-6 text-center mb-8">
            <p className="text-sm font-semibold text-amber-900 mb-3">한 줄 정의</p>
            <p className="text-sm md:text-base text-gray-900 leading-relaxed font-medium">
              자람이는 <strong>발달·행동 데이터</strong>를 기반으로 <strong>가정·학교·기관</strong>을 연결하는{' '}
              <strong>AI 디지털케어로그 기반 발달지원 인프라</strong>입니다.
            </p>
          </div>
          <p className="text-center text-gray-600 text-sm max-w-3xl mx-auto leading-relaxed">
            DAL 플랫폼에서 <strong className="text-gray-900">발달·행동 도메인</strong>을 검증·확장해 온 축입니다. 단일 치료법 앱이
            아니라 <strong className="text-gray-900">기록·분석·권고·실행·연계</strong>를 굴리는 바닥에 가깝습니다.
          </p>
        </div>
      </section>

      {/* 5. 핵심 구조 */}
      <section className="py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">핵심 구조</h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-10">
            <strong className="text-gray-900">기록 → 분석 → 권고 → 실행 → 연계</strong> 루프입니다.
          </p>
          <div className="space-y-3 max-w-3xl mx-auto">
            {flowSteps.map((s) => (
              <div key={s.n} className="flex gap-4 items-start bg-white rounded-xl p-4 border border-amber-100 shadow-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-700 text-white text-sm font-bold">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{s.title}</h3>
                  <p className="text-sm text-gray-700">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 핵심 기능 */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">구조 기반 핵심 기능</h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-10">루프를 굴리는 다섯 요소입니다.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { t: '기록', b: '다기관 로그를 표준 스키마로 모읍니다.' },
              { t: '분석', b: '행동·세션 추세와 질문 포인트를 만듭니다.' },
              { t: '권고', b: '중재·학습 방향을 제안하고 한계를 붙입니다.' },
              { t: '실행', b: '세션·숙제·리포트가 같은 데이터로 돕니다.' },
              { t: '연계', b: 'IEP·진료 메모 등 동의된 연동을 지향합니다.' },
            ].map((x) => (
              <div key={x.t} className="rounded-xl p-5 border border-gray-100 bg-gray-50/80">
                <h3 className="font-bold text-gray-900 text-sm mb-2">{x.t}</h3>
                <p className="text-sm text-gray-700">{x.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. 실제 사용 흐름 + 관점별 */}
      <section className="py-14 bg-stone-50 border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">실제 사용 흐름</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm mb-12">
            <div className="rounded-xl bg-white border border-stone-200 p-6">
              <h3 className="font-bold text-gray-900 mb-3">일상·세션</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
                <li>가정·센터에서 행동·세션을 짧게 남깁니다.</li>
                <li>AI가 패턴과 다음 상담 질문을 정리합니다.</li>
                <li>교사·치료사가 같은 요약을 보고 계획을 맞춥니다.</li>
              </ul>
            </div>
            <div className="rounded-xl bg-white border border-stone-200 p-6">
              <h3 className="font-bold text-gray-900 mb-3">학기·IEP</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
                <li>목표-개입-결과가 한 타임라인에 묶입니다.</li>
                <li>리포트는 표준에서 발췌합니다.</li>
                <li>기관 정책에 맞춰 공유 범위를 조절합니다.</li>
              </ul>
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-900 text-center mb-6">관점별로 보는 변화 (예시)</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="rounded-xl bg-white border p-6">
              <p className="text-xs font-semibold text-amber-800 mb-2">가족</p>
              <p className="text-gray-700">
                <span className="text-gray-500">기존:</span> 말로만 경과를 전달.
                <br />
                <span className="text-amber-800 font-medium">자람이:</span> 같은 로그로 &quot;무엇이 바뀌었는지&quot;를 구체적으로
                공유하는 그림을 지향합니다.
              </p>
            </div>
            <div className="rounded-xl bg-white border p-6">
              <p className="text-xs font-semibold text-amber-800 mb-2">전문가·기관</p>
              <p className="text-gray-700">
                <span className="text-gray-500">기존:</span> 기관마다 다른 양식·앱.
                <br />
                <span className="text-amber-800 font-medium">자람이:</span> 표준 케어로그로 협업 비용을 줄이는 방향을 지향합니다.
              </p>
            </div>
            <div className="rounded-xl bg-white border p-6">
              <p className="text-xs font-semibold text-amber-800 mb-2">사업·VC</p>
              <p className="text-gray-700">
                <span className="text-gray-500">기존:</span> 콘텐츠·매칭만으로는 현장 증거가 약함.
                <br />
                <span className="text-amber-800 font-medium">자람이:</span> 기관 등록·베타·데이터 표준 축으로 스토리와 검증을
                함께 쌓는 인프라입니다. 세부 수치는 IR로 별도 공유합니다.
              </p>
            </div>
            <div className="rounded-xl bg-white border p-6">
              <p className="text-xs font-semibold text-amber-800 mb-2">산업·정책</p>
              <p className="text-gray-700">
                <span className="text-gray-500">기존:</span> 사업별 데이터 정의가 달라 비교가 어려움.
                <br />
                <span className="text-amber-800 font-medium">자람이:</span> 표준 로그 기반으로 효과·형평 논의의 재현성을 높이는
                방향을 지향합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. 기술 설명 */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">기술 설명</h2>
          <div className="max-w-3xl mx-auto rounded-xl border border-gray-200 bg-gray-50/80 p-6 text-sm text-gray-800 leading-relaxed">
            <p className="mb-3">
              로그는 표준 스키마와 권한(RBAC)·감사 추적 아래 정리됩니다. 분석 결과는 권고·리포트로 전환되고 동의된 채널로만
              전달됩니다.
            </p>
            <p>
              권고에는 <strong className="text-gray-900">근거와 한계</strong>를 붙이는 <strong>XAI</strong> 원칙을 둡니다. 진단·
              치료 결정을 대체하지 않습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 9. 비교 */}
      <section className="py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">기존 시스템과의 차이</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full min-w-[280px] text-sm text-left border-collapse">
              <caption className="sr-only">기존 발달 지원과 자람이 비교</caption>
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="p-3 font-bold text-gray-900 w-[28%]">비교</th>
                  <th className="p-3 font-bold text-gray-800 border-l">기존</th>
                  <th className="p-3 font-bold text-amber-900 border-l bg-amber-50/60">자람이</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <th className="p-3 font-semibold text-left bg-gray-50/80">기록</th>
                  <td className="p-3 border-l text-gray-700">기관별 일지·앱 분산</td>
                  <td className="p-3 border-l bg-amber-50/40">표준 AI 디지털케어로그</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th className="p-3 font-semibold text-left bg-gray-50/80">흐름</th>
                  <td className="p-3 border-l text-gray-700">회기별 보고 단편</td>
                  <td className="p-3 border-l bg-amber-50/40">기록→분석→권고→실행→연계</td>
                </tr>
                <tr>
                  <th className="p-3 font-semibold text-left bg-gray-50/80">협업</th>
                  <td className="p-3 border-l text-gray-700">회의·서류 중심</td>
                  <td className="p-3 border-l bg-amber-50/40">동일 요약 공유</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 10. 산업 변화 */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">발달·교육·의료 연계는 어떻게 바뀌는가</h2>
          <div className="grid md:grid-cols-3 gap-5 text-sm">
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">센터·학교</h3>
              <p className="text-gray-700">같은 로그로 개입 계획과 가정 연계가 이어집니다.</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">의료</h3>
              <p className="text-gray-700">동의된 요약이 진료 맥락을 보강하는 방향을 지향합니다.</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">공공</h3>
              <p className="text-gray-700">표준 기반으로 정책·예산 논의의 재현성을 높입니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. DAL */}
      <section className="py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">DAL 생태계 연결</h2>
          <p className="text-center text-gray-800 text-base max-w-2xl mx-auto mb-3 font-semibold">
            이 서비스는 DAL 플랫폼의 <strong className="text-amber-900">발달·행동</strong> 축 인프라입니다.
          </p>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-8">
            교육·시니어·헬스케어 축과 같은 AI 디지털케어로그 밑그림을 공유합니다.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: '자람이', role: '발달 축', focus: '행동·발달' },
              { name: '에듀케어로그', role: '교육 축', focus: '학습·수업' },
              { name: '시니어앤라이프', role: '시니어 축', focus: '돌봄·생활' },
              { name: '토탈케어로그', role: '헬스케어 축', focus: '의료·건강' },
            ].map((e) => (
              <div key={e.name} className="rounded-xl p-5 border border-gray-200 bg-white">
                <p className="font-bold text-gray-900">{e.name}</p>
                <p className="text-xs text-amber-700 mt-1">{e.role}</p>
                <p className="text-sm text-gray-700 mt-2">{e.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. 도입 효과 */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">도입 효과</h2>
          <div className="grid md:grid-cols-3 gap-5 text-sm">
            <div className="rounded-xl border p-5 bg-gray-50/80">
              <h3 className="font-bold text-gray-900 mb-2">가정</h3>
              <p className="text-gray-700">아이의 경과가 데이터로 남고 다음 행동이 보입니다.</p>
            </div>
            <div className="rounded-xl border p-5 bg-gray-50/80">
              <h3 className="font-bold text-gray-900 mb-2">기관</h3>
              <p className="text-gray-700">협업·리포트·권한 관리가 같은 표준에서 돕니다.</p>
            </div>
            <div className="rounded-xl border p-5 bg-gray-50/80">
              <h3 className="font-bold text-gray-900 mb-2">공공·연구</h3>
              <p className="text-gray-700">익명·집계 조건에서 정책·효과 분석에 기여할 수 있습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. CTA */}
      <section className="py-16 bg-gradient-to-br from-amber-600 to-orange-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">지금 시작하기</h2>
          <p className="text-amber-100 text-sm mb-10 max-w-2xl mx-auto">공개 서비스 체험, 기관 파트너십, IR·연구를 각각 연결합니다.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href={JARAME_ENTRYPOINT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto justify-center bg-white text-amber-800 font-semibold px-6 py-3 rounded-lg text-sm hover:bg-amber-50 transition-colors"
            >
              발달 축 공개 서비스 체험
            </a>
            <Link
              href="/contact?type=partner"
              className="inline-flex w-full sm:w-auto justify-center border-2 border-white text-white font-semibold px-6 py-3 rounded-lg text-sm hover:bg-white/10 transition-colors"
            >
              사업·도입 파트너십
            </Link>
            <Link href="/contact?type=ir" className="text-amber-100 hover:text-white text-sm font-medium underline underline-offset-2">
              연구·IR 문의
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
