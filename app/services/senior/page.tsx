import type { Metadata } from 'next'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'

/** 시니어 축 공개·파일럿 안내 — 변경 시 이 상수만 수정 */
const SENIOR_ENTRYPOINT_URL = '/contact?type=partner'

const pageCanonical = 'https://dreamailab.com/services/senior'
const pageOgTitle = '시니어앤라이프 — 시니어 케어 인프라 | 드림에이아이랩'
const pageDescription =
  '돌봄·생활 데이터를 기반으로 요양·가정·기관을 잇는 AI 디지털케어로그 기반 시니어 케어 인프라. DAL 시니어 축.'

export const metadata: Metadata = {
  title: pageOgTitle,
  description: pageDescription,
  keywords: [
    '시니어 돌봄',
    '시니어앤라이프',
    'AI 디지털케어로그',
    '요양',
    '재가복지',
    'DAL',
    '드림에이아이랩',
  ],
  alternates: { canonical: pageCanonical },
  openGraph: {
    title: '시니어앤라이프 | AI 시니어 돌봄 디지털케어로그',
    description: pageDescription,
    type: 'website',
    url: pageCanonical,
    siteName: '드림에이아이랩',
    images: [{ url: '/images/senior-og.png', width: 1200, height: 630, alt: '시니어앤라이프' }],
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: '시니어앤라이프 | AI 시니어 돌봄 디지털케어로그',
    description: pageDescription,
    images: ['/images/senior-og.png'],
  },
  robots: { index: true, follow: true },
}

export default function SeniorService() {
  const flowSteps = [
    { n: 1, title: '기록', body: '수면·식사·복약·활동·정서 등 현장 신호를 표준 케어로그로 남깁니다.' },
    { n: 2, title: '분석', body: '시계열로 평소와 다른 패턴·위험 징후를 짚습니다.' },
    { n: 3, title: '권고', body: '오늘의 돌봄 포인트를 제안하고 이유·한계(XAI)를 붙입니다.' },
    { n: 4, title: '실행', body: '방문 루틴·가족 알림·기관 보고가 같은 데이터 위에서 돕니다.' },
    { n: 5, title: '연계', body: '가족·요양·의료가 동의된 범위에서 같은 요약을 봅니다.' },
  ]

  const personaRows = [
    { who: '개인(시니어)', pain: '상태 변화가 말로만 전해지면 기록이 남지 않고 대응이 늦어집니다.' },
    { who: '보호자·가족', pain: '멀리 있으면 오늘의 돌봄 맥락을 같은 그림으로 보기 어렵습니다.' },
    { who: '기관(요양·재가)', pain: '현장 기록·행정·가족 소통이 제각각이면 품질이 사람·교대에만 의존합니다.' },
    { who: '공공·연구', pain: '서식·앱이 제각각이면 정책·품질 지표의 재현성이 떨어집니다.' },
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
        name: '시니어앤라이프',
        url: pageCanonical,
        provider: { '@type': 'Organization', name: 'Dream AI Lab', url: 'https://dreamailab.com/' },
        category: 'HealthAndBeautyBusiness',
        areaServed: 'KR',
        description: pageDescription,
        offers: {
          '@type': 'Offer',
          url: `https://dreamailab.com${SENIOR_ENTRYPOINT_URL}`,
          description: 'DAL 시니어 축 파일럿·도입 상담',
        },
      },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }} />

      {/* 1. Hero */}
      <section className="bg-gradient-to-br from-emerald-700 to-teal-800 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-emerald-100 text-xs sm:text-sm font-medium mb-4 tracking-wide">DAL 시니어 축 · 파일럿·도입 협의 중</p>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-5 leading-snug max-w-4xl mx-auto">
            돌봄은 가정·시설·의료 사이에서 끊기기 쉽습니다
          </h1>
          <p className="text-emerald-50 text-sm md:text-base max-w-3xl mx-auto mb-3 leading-relaxed font-medium">
            표준 케어로그와 AI로 <strong className="text-white">기록 → 분석 → 권고 → 실행 → 연계</strong>를 한 루프로 묶습니다.
          </p>
          <p className="text-emerald-100/95 text-sm max-w-3xl mx-auto mb-8 leading-relaxed">
            시니어앤라이프는 시설 홍보 앱이 아니라, 돌봄 데이터가 같은 밑그림에서 흐르게 하는{' '}
            <strong className="text-white">시니어 케어 인프라</strong>입니다.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-xs text-white">
            <span className="bg-white/15 px-3 py-1.5 rounded-full">가정 · 요양 · 기관</span>
            <span className="bg-white/15 px-3 py-1.5 rounded-full">DAL 플랫폼 시니어 축</span>
          </div>
        </div>
      </section>

      {/* 2. 문제 정의 */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">고령화 이후에도 데이터는 한 줄기로 남지 않습니다</h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-10">
            문제의 중심은 <strong className="text-gray-900">현장 데이터 단절</strong>과 <strong className="text-gray-900">표준 부재</strong>
            입니다.
          </p>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto text-sm text-gray-800">
            <div className="rounded-xl border border-red-100 bg-red-50/60 p-5">
              <h3 className="font-bold text-gray-900 mb-2">교대·기관 의존</h3>
              <p>기록 방식이 사람마다 다르면 품질이 흔들리고 사고 후에야 흐름이 보이기도 합니다.</p>
            </div>
            <div className="rounded-xl border border-red-100 bg-red-50/60 p-5">
              <h3 className="font-bold text-gray-900 mb-2">가족·현장 정보 비대칭</h3>
              <p>같은 하루를 가족과 돌봄 제공자가 다른 말로 기억하면 신뢰와 대응이 늦어집니다.</p>
            </div>
            <div className="rounded-xl border border-red-100 bg-red-50/60 p-5">
              <h3 className="font-bold text-gray-900 mb-2">행정과 돌봄 분리</h3>
              <p>청구·보고용 서식과 실제 돌봄 기록이 엇갈리면 개선 루프가 돌지 않습니다.</p>
            </div>
            <div className="rounded-xl border border-red-100 bg-red-50/60 p-5">
              <h3 className="font-bold text-gray-900 mb-2">의료 연계 공백</h3>
              <p>일상 변화가 구조화되지 않으면 필요할 때 의료진에게 넘길 그림이 없습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 사용자 공감 */}
      <section className="py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">사용자 공감</h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-10">역할별로 다른 화면, 같은 끊김.</p>
          <div className="space-y-3">
            {personaRows.map((row) => (
              <div key={row.who} className="flex flex-col md:flex-row md:gap-6 bg-white rounded-xl p-5 border border-gray-100">
                <div className="md:w-44 shrink-0 font-bold text-emerald-800">{row.who}</div>
                <p className="text-sm text-gray-800 flex-1">{row.pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 서비스 정의 */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">시니어앤라이프란 무엇인가</h2>
          <div className="max-w-3xl mx-auto rounded-xl border-2 border-emerald-200 bg-emerald-50/50 p-6 text-center mb-8">
            <p className="text-sm font-semibold text-emerald-900 mb-3">한 줄 정의</p>
            <p className="text-sm md:text-base text-gray-900 leading-relaxed font-medium">
              시니어앤라이프는 <strong>돌봄·생활 데이터</strong>를 기반으로 <strong>요양·가정·기관</strong>을 연결하는{' '}
              <strong>AI 디지털케어로그 기반 시니어 케어 인프라</strong>입니다.
            </p>
          </div>
          <p className="text-center text-gray-600 text-sm max-w-3xl mx-auto leading-relaxed">
            시설 검색만 하는 앱이 아니라, <strong className="text-gray-900">기록·분석·권고·실행·연계</strong>를 같은 철학으로 굴리는
            바닥을 지향합니다. 도입 단계·범위는 협의에 따릅니다.
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
              <div key={s.n} className="flex gap-4 items-start bg-white rounded-xl p-4 border border-emerald-100 shadow-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-white text-sm font-bold">
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
              { t: '기록', b: '현장 입력을 표준 로그로 모읍니다.' },
              { t: '분석', b: '패턴 이탈·위험 징후를 짚습니다.' },
              { t: '권고', b: '돌봄·가족 행동을 제안하고 한계를 붙입니다.' },
              { t: '실행', b: '루틴·알림·보고가 같은 데이터로 돕니다.' },
              { t: '연계', b: '의료·행정 채널로 동의된 요약만 넘깁니다.' },
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
              <h3 className="font-bold text-gray-900 mb-3">하루</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
                <li>방문·식사·복약·수면을 짧게 남깁니다.</li>
                <li>AI가 평소와 다른 패턴을 짚습니다.</li>
                <li>가족·기관은 같은 요약을 봅니다.</li>
              </ul>
            </div>
            <div className="rounded-xl bg-white border border-stone-200 p-6">
              <h3 className="font-bold text-gray-900 mb-3">주간·월간</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
                <li>추세가 리포트로 묶입니다.</li>
                <li>행정·품질 회의에 같은 표를 씁니다.</li>
                <li>필요 시 의료 연계로 이어집니다.</li>
              </ul>
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-900 text-center mb-6">관점별로 보는 변화 (예시)</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="rounded-xl bg-white border p-6">
              <p className="text-xs font-semibold text-emerald-800 mb-2">시니어·가족</p>
              <p className="text-gray-700">
                <span className="text-gray-500">기존:</span> 전화·메모로만 소식을 나눔.
                <br />
                <span className="text-emerald-800 font-medium">시니어앤라이프:</span> 같은 요약으로 오늘의 돌봄 맥락을 공유하는
                그림을 지향합니다.
              </p>
            </div>
            <div className="rounded-xl bg-white border p-6">
              <p className="text-xs font-semibold text-emerald-800 mb-2">돌봄 제공자</p>
              <p className="text-gray-700">
                <span className="text-gray-500">기존:</span> 교대마다 기록 방식이 달라짐.
                <br />
                <span className="text-emerald-800 font-medium">시니어앤라이프:</span> 표준 로그로 인수인계와 품질 점검이 같은
                눈금에서 가능해지도록 지향합니다.
              </p>
            </div>
            <div className="rounded-xl bg-white border p-6">
              <p className="text-xs font-semibold text-emerald-800 mb-2">사업·VC</p>
              <p className="text-gray-700">
                <span className="text-gray-500">기존:</span> 시설 소개·매칭만으로는 성과 데이터가 남기 어려움.
                <br />
                <span className="text-emerald-800 font-medium">시니어앤라이프:</span> 돌봄 성과·표준 연동이 논의 축이 되는 인프라
                방향을 지향합니다.
              </p>
            </div>
            <div className="rounded-xl bg-white border p-6">
              <p className="text-xs font-semibold text-emerald-800 mb-2">산업·마케팅</p>
              <p className="text-gray-700">
                <span className="text-gray-500">기존:</span> 노출·입소 경쟁과 현장 데이터가 분리.
                <br />
                <span className="text-emerald-800 font-medium">시니어앤라이프:</span> 광고 약속이 아니라 동의·근거 기반 권고 흐름을
                전제로 구조 변화를 지향합니다.
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
              텍스트·시계열 등 입력은 표준 스키마로 정리되고, 분석은 권고·알림으로 전환됩니다. 동의·최소 수집·감사 로그를
              전제로 합니다.
            </p>
            <p>
              권고에는 <strong className="text-gray-900">이유와 한계</strong>를 붙이는 <strong>XAI</strong> 원칙을 둡니다. 응급
              판단·진단을 대체하지 않습니다.
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
              <caption className="sr-only">기존 시니어 돌봄과 시니어앤라이프 비교</caption>
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="p-3 font-bold text-gray-900 w-[28%]">비교</th>
                  <th className="p-3 font-bold text-gray-800 border-l">기존</th>
                  <th className="p-3 font-bold text-emerald-900 border-l bg-emerald-50/60">시니어앤라이프</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <th className="p-3 font-semibold text-left bg-gray-50/80">기록</th>
                  <td className="p-3 border-l text-gray-700">종이·개별 앱 분산</td>
                  <td className="p-3 border-l bg-emerald-50/40">표준 디지털케어로그</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th className="p-3 font-semibold text-left bg-gray-50/80">흐름</th>
                  <td className="p-3 border-l text-gray-700">사건 후 보고 중심</td>
                  <td className="p-3 border-l bg-emerald-50/40">기록→분석→권고→실행→연계</td>
                </tr>
                <tr>
                  <th className="p-3 font-semibold text-left bg-gray-50/80">가족·기관</th>
                  <td className="p-3 border-l text-gray-700">말·전화 의존</td>
                  <td className="p-3 border-l bg-emerald-50/40">동의된 동일 요약</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 10. 산업 변화 */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">시니어 돌봄 산업은 어떻게 바뀌는가</h2>
          <div className="grid md:grid-cols-3 gap-5 text-sm">
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">재가·시설</h3>
              <p className="text-gray-700">기록·행정·가족 소통이 한 줄기로 묶이면 교대 품질이 안정됩니다.</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">의료 연계</h3>
              <p className="text-gray-700">일상 경과가 구조화되어 필요할 때 의료진에게 넘길 그림이 생깁니다.</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">공공·지표</h3>
              <p className="text-gray-700">표준 로그 기반으로 품질·형평 논의의 재현성을 높입니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. DAL */}
      <section className="py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">DAL 생태계 연결</h2>
          <p className="text-center text-gray-800 text-base max-w-2xl mx-auto mb-3 font-semibold">
            이 서비스는 DAL 플랫폼의 <strong className="text-emerald-900">시니어(돌봄·생활)</strong> 축 인프라입니다.
          </p>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-8">헬스케어·교육·발달 축과 같은 밑그림을 공유합니다.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: '시니어앤라이프', role: '시니어 축', focus: '돌봄·생활' },
              { name: '토탈케어로그', role: '헬스케어 축', focus: '의료·건강' },
              { name: '자람이', role: '발달 축', focus: '행동·발달' },
              { name: '에듀케어로그', role: '교육 축', focus: '학습·수업' },
            ].map((e) => (
              <div key={e.name} className="rounded-xl p-5 border border-gray-200 bg-white">
                <p className="font-bold text-gray-900">{e.name}</p>
                <p className="text-xs text-emerald-700 mt-1">{e.role}</p>
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
              <p className="text-gray-700">돌봄 맥락이 데이터로 공유되어 불안·오해가 줄어듭니다.</p>
            </div>
            <div className="rounded-xl border p-5 bg-gray-50/80">
              <h3 className="font-bold text-gray-900 mb-2">기관</h3>
              <p className="text-gray-700">교대·행정·품질이 같은 로그 위에서 돕니다.</p>
            </div>
            <div className="rounded-xl border p-5 bg-gray-50/80">
              <h3 className="font-bold text-gray-900 mb-2">공공</h3>
              <p className="text-gray-700">정책·감사가 표준 기반으로 맞춰집니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. CTA */}
      <section className="py-16 bg-gradient-to-br from-emerald-700 to-teal-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">지금 시작하기</h2>
          <p className="text-emerald-100 text-sm mb-10 max-w-2xl mx-auto">파일럿·데모, 파트너십, IR·연구를 각각 연결합니다.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href={SENIOR_ENTRYPOINT_URL}
              className="inline-flex w-full sm:w-auto justify-center bg-white text-emerald-800 font-semibold px-6 py-3 rounded-lg text-sm hover:bg-emerald-50 transition-colors"
            >
              시니어 축 파일럿·문의
            </Link>
            <Link
              href="/contact?type=partner"
              className="inline-flex w-full sm:w-auto justify-center border-2 border-white text-white font-semibold px-6 py-3 rounded-lg text-sm hover:bg-white/10 transition-colors"
            >
              사업·도입 파트너십
            </Link>
            <Link href="/contact?type=ir" className="text-emerald-100 hover:text-white text-sm font-medium underline underline-offset-2">
              연구·IR 문의
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
