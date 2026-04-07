import type { Metadata } from 'next'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'

/** 헬스케어 축 공개 진입 URL — 변경 시 이 상수만 수정 */
const HEALTHCARE_ENTRYPOINT_URL = 'https://medicai.kr'

const pageCanonical = 'https://dreamailab.com/services/healthcare'
const pageOgTitle = '토탈케어로그(TotalCareLog) — 일상 기반 의료 운영 인프라 | 드림에이아이랩'
const pageDescription =
  '의료·건강관리를 아우르는 기술 기반 서비스. 평생 맞춤형 건강 데이터와 AI 디지털케어로그로 기록·분석·권고·의료 연계를 잇고, 인공지능 시대 병원·케어 비즈니스 전환을 지향합니다.'

export const metadata: Metadata = {
  title: pageOgTitle,
  description: pageDescription,
  keywords: [
    '토탈케어로그',
    'TotalCareLog',
    'AI 디지털케어로그',
    '의료 인프라',
    'RWE',
    'DAL',
    '드림에이아이랩',
    '일상 건강 기록',
    '병원 연계',
    '평생 건강관리',
    '맞춤형 의료',
    '디지털 치료 연계',
    '케어 인프라',
  ],
  alternates: {
    canonical: pageCanonical,
  },
  openGraph: {
    type: 'website',
    url: pageCanonical,
    siteName: '드림에이아이랩',
    title: pageOgTitle,
    description: pageDescription,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '토탈케어로그 — DAL 헬스케어 축',
      },
    ],
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageOgTitle,
    description: pageDescription,
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
}

export default function HealthcareService() {
  const flowSteps = [
    { n: 1, title: '기록', body: '증상·복약·수면·활동 등 일상 신호를 동의·최소 수집 원칙 아래 표준 케어로그로 정리합니다.' },
    { n: 2, title: '분석', body: '추세·이상 신호·패턴을 잡아 의료진과 상의할 질문 포인트를 만듭니다.' },
    { n: 3, title: '권고', body: '행동·복약·생활 가이드는 근거와 한계를 함께 제시합니다(XAI).' },
    { n: 4, title: '실행', body: '복약·생활 루틴·내원 준비 등 오늘의 행동을 같은 데이터 흐름 안에서 굴립니다.' },
    { n: 5, title: '연계', body: '병원·약국·요양·가족 등 동의된 채널로 요약·알림이 이어집니다.' },
  ]

  const personaRows = [
    {
      who: '개인(환자)',
      pain: '병원 가기 전까지 상태가 말로만 남고, 무엇이 바뀌었는지 설명하기 어렵습니다.',
    },
    {
      who: '보호자·가족',
      pain: '가족 상태를 매일 같이 보지 못하면 기록이 끊기고, 진료 때마다 처음부터 설명해야 합니다.',
    },
    {
      who: '기관(병원·약국)',
      pain: '내원 순간의 정보만 있으면 준비·설명에 시간이 가고, 일상 경과는 비어 있습니다.',
    },
    {
      who: '공공·연구',
      pain: '현장 데이터가 표준 없이 흩어지면 정책·RWE·안전 신호 분석의 재현성이 떨어집니다.',
    },
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
        name: '토탈케어로그',
        alternateName: 'TotalCareLog',
        url: pageCanonical,
        provider: { '@type': 'Organization', name: 'Dream AI Lab', url: 'https://dreamailab.com/' },
        category: 'Healthcare',
        areaServed: 'KR',
        description:
          '의료·건강관리를 포괄하는 기술 기반 서비스. 평생 맞춤형 건강을 데이터로 이어 AI 분석·권고·의료 연계까지 한 흐름으로 잇는 헬스케어 운영 인프라.',
        offers: {
          '@type': 'Offer',
          url: HEALTHCARE_ENTRYPOINT_URL,
          description: 'DAL 헬스케어 축 공개 서비스 체험 진입점',
        },
      },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }} />

      {/* 1. Hero */}
      <section className="bg-gradient-to-br from-teal-700 to-cyan-800 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-teal-100 text-xs sm:text-sm font-medium mb-4 tracking-wide">DAL 헬스케어 축 · 공개 서비스 운영</p>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-5 leading-snug max-w-4xl mx-auto">
            병원 밖 일상의 증상·복약·경과는 같은 줄기로 남지 않습니다
          </h1>
          <p className="text-teal-50 text-sm md:text-base max-w-3xl mx-auto mb-3 leading-relaxed font-medium">
            표준 케어로그와 AI로 <strong className="text-white">기록 → 분석 → 권고 → 실행 → 연계</strong>를 한 루프로 묶어, 내원
            전후 데이터 단절을 줄입니다.
          </p>
          <p className="text-teal-100/95 text-sm max-w-3xl mx-auto mb-8 leading-relaxed">
            토탈케어로그는 단일 앱이 아니라 의료·건강관리가 같은 밑그림에서 돌아가게 하는{' '}
            <strong className="text-white">헬스케어 운영 인프라</strong>입니다.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-xs text-white">
            <span className="bg-white/15 px-3 py-1.5 rounded-full">의료 · 건강관리 · 평생 맞춤</span>
            <span className="bg-white/15 px-3 py-1.5 rounded-full">DAL 플랫폼 헬스케어 축</span>
          </div>
        </div>
      </section>

      {/* 2. 문제 정의 */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            문제 정의 — 의료는 병원에서만 시작되지 않습니다
          </h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-10">
            문제의 중심은 <strong className="text-gray-900">데이터 단절</strong>입니다. 해결의 축은{' '}
            <strong className="text-gray-900">AI 디지털케어로그</strong>로 이어지는 운영 구조입니다.
          </p>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto text-sm text-gray-800">
            <div className="rounded-xl border border-red-100 bg-red-50/60 p-5">
              <h3 className="font-bold text-gray-900 mb-2">병원 중심 구조</h3>
              <p>내원·처방은 남지만, 그 사이 일상의 증상·복약·행동은 같은 줄기로 남지 않습니다.</p>
            </div>
            <div className="rounded-xl border border-red-100 bg-red-50/60 p-5">
              <h3 className="font-bold text-gray-900 mb-2">사후 대응에 치우친 시스템</h3>
              <p>악화 후 병원, 사고 후 대응에 가깝습니다. 예방·조기 신호는 현장 데이터가 없으면 설계하기 어렵습니다.</p>
            </div>
            <div className="rounded-xl border border-red-100 bg-red-50/60 p-5">
              <h3 className="font-bold text-gray-900 mb-2">정보 비대칭</h3>
              <p>환자는 자신의 경과를 데이터로 들고 가기 어렵고, 기관은 같은 표로 경과를 보기 어렵습니다.</p>
            </div>
            <div className="rounded-xl border border-red-100 bg-red-50/60 p-5">
              <h3 className="font-bold text-gray-900 mb-2">치료·케어의 단절</h3>
              <p>진료실 밖 시간이 의료 프로세스의 일부로 연결되지 않으면 개인화와 안전 신호 모두 약해집니다.</p>
            </div>
          </div>
          <div className="max-w-2xl mx-auto mt-10 rounded-xl border border-teal-100 bg-teal-50/40 px-5 py-6 text-center text-sm text-gray-800 leading-relaxed">
            <p className="mb-2">의료 데이터는 이미 존재하지만 연결되지 않습니다.</p>
            <p className="mb-2">
              이제 중요한 것은 더 많은 정보가 아니라,{' '}
              <strong className="text-gray-900">하나의 흐름으로 이어지는 구조</strong>입니다.
            </p>
            <p className="font-medium text-teal-900">토탈케어로그는 이 단절을 연결하기 위한 운영 구조입니다.</p>
          </div>
        </div>
      </section>

      {/* 3. 사용자 공감 */}
      <section className="py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">사용자 공감 — 환자와 의료 현장</h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-10">역할마다 다른 화면이지만, 막힘의 원인은 같은 줄에서 끊깁니다.</p>
          <div className="space-y-3">
            {personaRows.map((row) => (
              <div key={row.who} className="flex flex-col md:flex-row md:gap-6 bg-white rounded-xl p-5 border border-gray-100">
                <div className="md:w-36 shrink-0 font-bold text-teal-800">{row.who}</div>
                <p className="text-sm text-gray-800 flex-1">{row.pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 서비스 정의 */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">토탈케어로그란 무엇인가</h2>
          <div className="max-w-3xl mx-auto rounded-xl border-2 border-teal-200 bg-teal-50/50 p-6 text-center mb-8">
            <p className="text-sm font-semibold text-teal-900 mb-3">한 줄 정의</p>
            <p className="text-sm md:text-base text-gray-900 leading-relaxed font-medium">
              토탈케어로그는 <strong>일상 건강 데이터</strong>를 기반으로 <strong>의료·약국·가정</strong>을 연결하는{' '}
              <strong>AI 디지털케어로그 기반 헬스케어 운영 인프라</strong>입니다.
            </p>
          </div>
          <p className="text-center text-gray-700 text-sm md:text-base max-w-3xl mx-auto mb-5 leading-relaxed">
            <strong className="text-gray-900">의료 서비스이자 건강관리</strong>를 함께 다룹니다. 병원·케어 기관이{' '}
            <strong className="text-gray-900">근거·데이터 중심</strong>으로 운영되도록 돕되, 단일 증상 앱이나 EMR 전체를 대체하는
            제품이 아니라 <strong className="text-gray-900">기록·분석·권고·실행·연계를 한 흐름으로 굴리는 바닥</strong>에 가깝습니다.
          </p>
          <div className="max-w-3xl mx-auto rounded-xl border border-gray-200 bg-gray-50/80 p-6 text-center">
            <p className="text-sm font-semibold text-gray-900 mb-2">인프라로서의 범위</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              환자용 화면만이 아니라 기록 표준, 분석·권고 레이어, 기관 연동 정책을 같은 철학 아래 둡니다.
            </p>
          </div>
        </div>
      </section>

      {/* 5. 핵심 구조: 끊기지 않는 흐름 */}
      <section className="py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">핵심 구조 — 끊기지 않는 흐름</h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-10">
            단계는 별도 메뉴가 아니라 <strong className="text-gray-900">한 루프</strong>입니다.{' '}
            <strong className="text-gray-900">기록 → 분석 → 권고 → 실행 → 연계</strong>가 순환합니다.
          </p>
          <div className="space-y-3 max-w-3xl mx-auto">
            {flowSteps.map((s) => (
              <div key={s.n} className="flex gap-4 items-start bg-white rounded-xl p-4 border border-teal-100 shadow-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-700 text-white text-sm font-bold">
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

      {/* 6. 핵심 기능 (구조 기반) */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">구조 기반 핵심 기능</h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-10">
            기능 카탈로그가 아니라, 위 루프를 실제로 굴리는 <strong className="text-gray-900">다섯 요소</strong>입니다.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { t: '기록', b: '생활 신호를 표준 케어로그로 한곳에 모읍니다.' },
              { t: '분석', b: '기준선·추세와 의료진과 상의할 질문 포인트를 만듭니다.' },
              { t: '권고', b: '오늘의 행동·내원 준비를 제안하고 이유·한계(XAI)를 붙입니다.' },
              { t: '실행', b: '복약·루틴·알림 등 당일 행동을 같은 데이터 위에서 굴립니다.' },
              { t: '연계', b: '병원·약국·가족이 동의된 범위에서 같은 요약을 봅니다.' },
            ].map((x) => (
              <div key={x.t} className="rounded-xl p-5 border border-gray-100 bg-gray-50/80">
                <h3 className="font-bold text-gray-900 text-sm mb-2">{x.t}</h3>
                <p className="text-sm text-gray-700">{x.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. 실제 사용 흐름 */}
      <section className="py-14 bg-stone-50 border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">실제 사용 흐름</h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-10">과목별 카탈로그 대신, 하루와 장기의 두 시계열로만 짚습니다.</p>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="rounded-xl bg-white border border-stone-200 p-6">
              <h3 className="font-bold text-gray-900 mb-3">하루 흐름</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
                <li>아침·저녁 증상·복약·수면을 짧게 남깁니다.</li>
                <li>AI가 패턴을 보고 오늘의 주의점·질문 포인트를 정리합니다.</li>
                <li>필요 시 연동 기관 예약·상담으로 이어집니다.</li>
              </ul>
            </div>
            <div className="rounded-xl bg-white border border-stone-200 p-6">
              <h3 className="font-bold text-gray-900 mb-3">장기 관리 흐름</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
                <li>주·월 단위로 추세와 순응·활동이 한 리포트로 묶입니다.</li>
                <li>치료 단계가 바뀌면 집중 모드로 기록 밀도를 맞춥니다.</li>
                <li>가족·의료진은 같은 요약을 보고 설명 시간을 줄입니다.</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-xs text-gray-500 mt-8 max-w-2xl mx-auto">
            구체적 진단·치료는 의료전문가의 판단을 따릅니다. 본 섹션은 서비스 흐름 이해를 돕는 예시입니다.
          </p>
          <h3 className="text-lg font-bold text-gray-900 text-center mt-14 mb-6">관점별로 보는 변화 (가명·예시)</h3>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-8">
            실제 UI·계약과 다를 수 있는 서술입니다. FAQ 대신 입장별로 &quot;무엇이 달라지는지&quot;를 풀어 씁니다.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm mb-10">
            <article className="rounded-xl bg-white border border-stone-200 p-6">
              <p className="text-xs font-semibold text-teal-800 mb-2">환자·가족</p>
              <p className="text-gray-800 leading-relaxed mb-2">
                <span className="text-gray-500">기존:</span> 증상이 말과 기억에만 남고, 진료 때마다 처음부터 설명합니다.
              </p>
              <p className="text-gray-800 leading-relaxed">
                <span className="text-teal-800 font-medium">토탈케어로그:</span> 2주치 복약·수면이 요약·질문 포인트로 묶여 같은
                화면을 의료진과 공유할 수 있습니다(가명 사례: 김민수).
              </p>
            </article>
            <article className="rounded-xl bg-white border border-stone-200 p-6">
              <p className="text-xs font-semibold text-teal-800 mb-2">의료인</p>
              <p className="text-gray-800 leading-relaxed mb-2">
                <span className="text-gray-500">기존:</span> 내원 순간 스냅샷만 있고 일상 경과는 비어 있습니다.
              </p>
              <p className="text-gray-800 leading-relaxed">
                <span className="text-teal-800 font-medium">토탈케어로그:</span> 동의된 범위의 일상 로그·요약이 진료 전에 들어와
                설명·준비 시간을 줄이는 그림을 지향합니다. 진단·처방은 여전히 임상 판단입니다.
              </p>
            </article>
            <article className="rounded-xl bg-white border border-stone-200 p-6">
              <p className="text-xs font-semibold text-teal-800 mb-2">사업·VC</p>
              <p className="text-gray-800 leading-relaxed mb-2">
                <span className="text-gray-500">기존:</span> 노출·단발 판매·캠페인 중심으로 케어 성과가 같은 눈금에 잘 안 남습니다.
              </p>
              <p className="text-gray-800 leading-relaxed">
                <span className="text-teal-800 font-medium">토탈케어로그:</span> B2C 공개 진입·B2B 연동·RWE 협력이 같은 표준
                로그 위에서 논의될 수 있는 인프라 축입니다. 수치·계약은 IR·도입 문의로 별도 공유합니다.
              </p>
            </article>
            <article className="rounded-xl bg-white border border-stone-200 p-6">
              <p className="text-xs font-semibold text-teal-800 mb-2">의료 마케팅·산업</p>
              <p className="text-gray-800 leading-relaxed mb-2">
                <span className="text-gray-500">기존:</span> 환자 유치 메시지와 실제 경과 데이터가 분리되기 쉽습니다.
              </p>
              <p className="text-gray-800 leading-relaxed">
                <span className="text-teal-800 font-medium">토탈케어로그:</span> 광고형 약속이 아니라 동의·근거·XAI 한계가 붙은
                권고 흐름을 전제로, 순응·안전·재내원이 같은 줄기에서 다뤄지는 구조 변화를 지향합니다.
              </p>
            </article>
          </div>
          <div className="max-w-3xl mx-auto rounded-xl border border-amber-200 bg-amber-50/60 px-5 py-4 text-center text-sm text-amber-950 leading-relaxed">
            <strong className="text-amber-950">하지 않는 것:</strong> 진단·처방·의료행위 대체, 응급 판단 대체, 의료광고에 해당하는
            치료 약속.
          </div>
        </div>
      </section>

      {/* 8. 기술 설명 (간결) */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">기술 설명</h2>
          <div className="max-w-3xl mx-auto rounded-xl border border-gray-200 bg-gray-50/80 p-6 text-sm text-gray-800 leading-relaxed">
            <p className="mb-3">
              로그는 표준 스키마로 정리된 뒤 분석·권고·알림·리포트로 전환되고, 동의된 연계 채널로만 전달됩니다. 동의·최소 수집·감사
              추적을 전제로 합니다.
            </p>
            <p className="mb-3">
              권고에는 <strong className="text-gray-900">왜 그렇게 제안하는지</strong>를 짧게 붙이는{' '}
              <strong className="text-gray-900">XAI</strong> 원칙을 둡니다. 대안·주의·한계를 함께 두어 광고형 메시지와 구분합니다.
            </p>
            <p>
              익명·집계 조건에서는 연구·공공·RWE 논의에 맞출 수 있으며, 목적은 기능 개수가 아니라{' '}
              <strong className="text-gray-900">현장 근거의 재현성</strong>입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 9. 기존 의료 시스템과의 차이 */}
      <section className="py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">기존 의료 시스템과의 차이</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full min-w-[280px] text-sm text-left border-collapse">
              <caption className="sr-only">기존 의료 시스템과 토탈케어로그 비교</caption>
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th scope="col" className="p-3 font-bold text-gray-900 w-[28%]">
                    비교
                  </th>
                  <th scope="col" className="p-3 font-bold text-gray-800 border-l border-gray-200">
                    기존 의료 시스템
                  </th>
                  <th scope="col" className="p-3 font-bold text-teal-900 border-l border-gray-200 bg-teal-50/60">
                    토탈케어로그
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr className="border-b border-gray-100">
                  <th scope="row" className="p-3 font-semibold text-gray-900 align-top bg-gray-50/80">
                    기록 축
                  </th>
                  <td className="p-3 border-l border-gray-100 text-gray-700">병원·처방 중심 기록</td>
                  <td className="p-3 border-l border-gray-100 bg-teal-50/40">일상에서 시작하는 기록</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th scope="row" className="p-3 font-semibold text-gray-900 align-top bg-gray-50/80">
                    데이터 흐름
                  </th>
                  <td className="p-3 border-l border-gray-100 text-gray-700">내원 사이 데이터 단절</td>
                  <td className="p-3 border-l border-gray-100 bg-teal-50/40">기록 → 분석 → 권고 → 실행 → 연계의 연속</td>
                </tr>
                <tr>
                  <th scope="row" className="p-3 font-semibold text-gray-900 align-top bg-gray-50/80">
                    소통
                  </th>
                  <td className="p-3 border-l border-gray-100 text-gray-700">경험·기억에 의존한 설명</td>
                  <td className="p-3 border-l border-gray-100 bg-teal-50/40">데이터 기반으로 같은 그림 공유</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 10. 산업 변화 */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">의료 산업은 어떻게 바뀌는가</h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-10">광고·단발 판매 서술을 한곳으로 모아, 구조 변화만 남깁니다.</p>
          <div className="grid md:grid-cols-3 gap-5 text-sm">
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">병원</h3>
              <p className="text-gray-700">사전 요약·일상 경과가 들어오면 진료 준비와 설명 비용이 줄고, 재내원·관리가 데이터로 이어집니다.</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">약국</h3>
              <p className="text-gray-700">단발 판매에서 순응·상호작용 신호가 돌아오는 구조로 옮기면 개입과 리필 설계가 가능해집니다.</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">헬스케어 시장</h3>
              <p className="text-gray-700">노출 경쟁만이 아니라 케어 성과·신뢰·표준 연동이 평가 축이 됩니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. DAL 생태계 연결 */}
      <section className="py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">DAL 생태계 연결</h2>
          <p className="text-center text-gray-800 text-base max-w-2xl mx-auto mb-3 font-semibold">
            이 서비스는 DAL 플랫폼의 <strong className="text-teal-900">헬스케어(의료·건강)</strong> 축 인프라입니다.
          </p>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-8">
            여러 앱 중 하나가 아니라, 같은 AI 디지털케어로그 밑그림 위의 <strong className="text-gray-900">도메인 레이어</strong>
            로 봅니다.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: '자람이', focus: '발달·행동 맥락', role: '케어로그 검증 축' },
              { name: '토탈케어로그', focus: '의료·건강 통합', role: '헬스케어 도메인 엔진' },
              { name: '시니어앤라이프', focus: '돌봄·생활', role: '시니어 인프라' },
              { name: '에듀케어로그', focus: '학습·수업 반응', role: '교육 도메인 엔진' },
            ].map((e) => (
              <div key={e.name} className="rounded-xl p-5 border border-gray-200 bg-white">
                <p className="font-bold text-gray-900">{e.name}</p>
                <p className="text-xs text-teal-700 mt-1">{e.role}</p>
                <p className="text-sm text-gray-700 mt-2">{e.focus}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-700 mt-8 max-w-2xl mx-auto">
            기록 → 판단 → 실행 → 환류의 같은 철학을 공유할 때, 기관 경계를 넘는 연계와 정책 설계가 가능해집니다.
          </p>
        </div>
      </section>

      {/* 12. 도입 효과 */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">도입 효과</h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-8">
            개인·가족은 공개 진입점에서, 기관은 연동·협업으로, 연구·공공은 별도 동의·집계로 논의할 수 있습니다. 수치 약속보다{' '}
            <strong className="text-gray-900">구조가 어떻게 바뀌는지</strong>에 초점을 둡니다.
          </p>
          <div className="grid md:grid-cols-3 gap-5 text-sm">
            <div className="rounded-xl border border-gray-100 p-5 bg-gray-50/80">
              <h3 className="font-bold text-gray-900 mb-2">환자·가정</h3>
              <p className="text-gray-700">말로만 남던 경과가 기록으로 남고, 다음 행동이 같은 앱·리포트에서 이어집니다.</p>
            </div>
            <div className="rounded-xl border border-gray-100 p-5 bg-gray-50/80">
              <h3 className="font-bold text-gray-900 mb-2">병원·약국</h3>
              <p className="text-gray-700">내원 전후 데이터가 한 형식으로 들어와 준비·상담·순응 관리가 같은 표를 봅니다.</p>
            </div>
            <div className="rounded-xl border border-gray-100 p-5 bg-gray-50/80">
              <h3 className="font-bold text-gray-900 mb-2">공공·연구</h3>
              <p className="text-gray-700">단절된 표본이 아니라 표준 로그 기반으로 사업·안전·RWE 논의가 같은 눈금에서 가능해집니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. CTA */}
      <section className="py-16 bg-gradient-to-br from-teal-700 to-cyan-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">지금 시작하기</h2>
          <p className="text-teal-100 text-sm mb-10 max-w-2xl mx-auto leading-relaxed">
            서비스 체험, 기관 파트너십, 연구·데이터 협력은 각각 다른 창구로 연결됩니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href={HEALTHCARE_ENTRYPOINT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto justify-center bg-white text-teal-800 font-semibold px-6 py-3 rounded-lg text-sm hover:bg-teal-50 transition-colors"
            >
              헬스케어 축 공개 서비스 체험
            </a>
            <Link
              href="/contact?type=partner"
              className="inline-flex w-full sm:w-auto justify-center border-2 border-white text-white font-semibold px-6 py-3 rounded-lg text-sm hover:bg-white/10 transition-colors"
            >
              사업·도입 파트너십 문의
            </Link>
            <Link
              href="/contact?type=ir"
              className="text-teal-100 hover:text-white text-sm font-medium underline underline-offset-2"
            >
              연구·IR 문의
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
