import type { Metadata } from 'next'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'

const EDU_ENTRYPOINT_URL = '/contact?type=partner'

const pageCanonical = 'https://dreamailab.com/services/educarelog'
const pageOgTitle = '에듀케어로그(EduCareLog) — 교육 운영 인프라 | 드림에이아이랩'
const pageDescription =
  '학습 데이터를 기반으로 학생·교사·교육기관을 잇는 AI 디지털케어로그 기반 교육 운영 인프라. 기록·분석·권고·실행·연계 루프와 DAL 교육 축.'

export const metadata: Metadata = {
  title: pageOgTitle,
  description: pageDescription,
  keywords: [
    '에듀케어로그',
    'EduCareLog',
    'AI 디지털케어로그',
    '개별화 교육',
    '학습 로그',
    '교육 인프라',
    'DAL',
    '드림에이아이랩',
  ],
  alternates: { canonical: pageCanonical },
  openGraph: {
    type: 'website',
    url: pageCanonical,
    siteName: '드림에이아이랩',
    title: pageOgTitle,
    description: pageDescription,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '에듀케어로그 — DAL 교육 축' }],
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

export default function EduCareLogService() {
  const flowSteps = [
    { n: 1, title: '기록', body: '과제·진단·수업 참여·반응을 표준 학습 로그로 정리합니다.' },
    { n: 2, title: '분석', body: '성취·오개념·주의 패턴을 구간 단위로 잡습니다.' },
    { n: 3, title: '권고', body: '복습·신규 비율과 다음 행동을 제안하고 이유·한계(XAI)를 붙입니다.' },
    { n: 4, title: '실행', body: '퀴즈·루틴·리포트가 같은 데이터 위에서 돌아갑니다.' },
    { n: 5, title: '연계', body: '학교·학원·가정·파트너가 동의된 범위에서 같은 요약을 봅니다.' },
  ]

  const personaRows = [
    { who: '개인(학생)', pain: '학교·학원·집에서 남는 반응이 제각각이면 나의 한 줄기가 보이지 않습니다.' },
    { who: '보호자·가족', pain: '자녀 상태를 말로만 듣다 보면 무엇을 도와야 할지 우선순위가 흐립니다.' },
    { who: '기관(학교·학원)', pain: '도구마다 데이터가 갈라지면 수업 설계와 개별 지도가 같은 표로 이어지지 않습니다.' },
    { who: '공공·연구', pain: '표준 없이 흩어진 표본은 정책·효과 분석의 재현성을 떨어뜨립니다.' },
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
        name: '에듀케어로그',
        alternateName: 'EduCareLog',
        url: pageCanonical,
        provider: { '@type': 'Organization', name: 'Dream AI Lab', url: 'https://dreamailab.com/' },
        category: 'Education',
        areaServed: 'KR',
        description: pageDescription,
        offers: {
          '@type': 'Offer',
          url: 'https://dreamailab.com/contact?type=partner',
          description: 'DAL 교육 축 도입·파일럿 상담',
        },
      },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }} />

      {/* 1. Hero */}
      <section className="bg-gradient-to-br from-violet-700 to-indigo-800 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-violet-100 text-xs sm:text-sm font-medium mb-4 tracking-wide">DAL 교육 축</p>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-5 leading-snug max-w-4xl mx-auto">
            학습 반응이 앱·종이·시스템마다 흩어지면, 한 학생의 한 줄기가 끊깁니다
          </h1>
          <p className="text-violet-50 text-sm md:text-base max-w-3xl mx-auto mb-3 leading-relaxed font-medium">
            표준 로그와 AI로 <strong className="text-white">기록 → 분석 → 권고 → 실행 → 연계</strong>를 한 루프로 묶습니다.
          </p>
          <p className="text-violet-100/95 text-sm max-w-3xl mx-auto mb-8 leading-relaxed">
            에듀케어로그는 콘텐츠 한 벌을 파는 서비스가 아니라, 교육 현장이 같은 밑그림에서 돌아가게 하는{' '}
            <strong className="text-white">교육 운영 인프라</strong>입니다.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-xs text-white">
            <span className="bg-white/15 px-3 py-1.5 rounded-full">학생 · 교사 · 기관</span>
            <span className="bg-white/15 px-3 py-1.5 rounded-full">DAL 플랫폼 교육 축</span>
          </div>
        </div>
      </section>

      {/* 2. 문제 정의 */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">학습은 교실 안에서만 일어나지 않습니다</h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-10">
            문제의 중심은 <strong className="text-gray-900">데이터 단절</strong>입니다. 해결의 축은 표준 학습 로그로 이어지는{' '}
            <strong className="text-gray-900">운영 구조</strong>입니다.
          </p>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto text-sm text-gray-800">
            <div className="rounded-xl border border-red-100 bg-red-50/60 p-5">
              <h3 className="font-bold text-gray-900 mb-2">도구 분산</h3>
              <p>LMS·문제은행·앱마다 형식이 다르면 같은 학생의 추이를 한 표로 보기 어렵습니다.</p>
            </div>
            <div className="rounded-xl border border-red-100 bg-red-50/60 p-5">
              <h3 className="font-bold text-gray-900 mb-2">점수만 남는 보고</h3>
              <p>어디서 멈췄는지·무엇을 오해하는지가 남지 않으면 다음 수업 설계가 반복됩니다.</p>
            </div>
            <div className="rounded-xl border border-red-100 bg-red-50/60 p-5">
              <h3 className="font-bold text-gray-900 mb-2">가정·기관 정보 비대칭</h3>
              <p>보호자와 교사가 보는 그림이 다르면 같은 목표를 맞추기 어렵습니다.</p>
            </div>
            <div className="rounded-xl border border-red-100 bg-red-50/60 p-5">
              <h3 className="font-bold text-gray-900 mb-2">정책·연구 재현성</h3>
              <p>현장 데이터가 표준 없이 쌓이면 효과 논의가 같은 눈금에서 이뤄지지 않습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 사용자 공감 */}
      <section className="py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">사용자 공감</h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-10">역할은 다르지만, 끊김의 원인은 같은 줄기입니다.</p>
          <div className="space-y-3">
            {personaRows.map((row) => (
              <div key={row.who} className="flex flex-col md:flex-row md:gap-6 bg-white rounded-xl p-5 border border-gray-100">
                <div className="md:w-44 shrink-0 font-bold text-violet-800">{row.who}</div>
                <p className="text-sm text-gray-800 flex-1">{row.pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 서비스 정의 */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">에듀케어로그란 무엇인가</h2>
          <div className="max-w-3xl mx-auto rounded-xl border-2 border-violet-200 bg-violet-50/50 p-6 text-center mb-8">
            <p className="text-sm font-semibold text-violet-900 mb-3">한 줄 정의</p>
            <p className="text-sm md:text-base text-gray-900 leading-relaxed font-medium">
              에듀케어로그는 <strong>학습 데이터</strong>를 기반으로 <strong>학생·교사·교육기관</strong>을 연결하는{' '}
              <strong>AI 디지털케어로그 기반 교육 운영 인프라</strong>입니다.
            </p>
          </div>
          <p className="text-center text-gray-600 text-sm max-w-3xl mx-auto leading-relaxed">
            교과 앱을 통째로 대체한다기보다, <strong className="text-gray-900">기록·분석·권고·실행·연계</strong>를 한 흐름으로 굴리는
            바닥에 가깝습니다. 동의·최소 수집·감사 추적을 전제로 합니다.
          </p>
        </div>
      </section>

      {/* 5. 핵심 구조 */}
      <section className="py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">핵심 구조</h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-10">
            <strong className="text-gray-900">기록 → 분석 → 권고 → 실행 → 연계</strong>가 순환하는 한 루프입니다.
          </p>
          <div className="space-y-3 max-w-3xl mx-auto">
            {flowSteps.map((s) => (
              <div key={s.n} className="flex gap-4 items-start bg-white rounded-xl p-4 border border-violet-100 shadow-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-700 text-white text-sm font-bold">
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
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-10">루프를 굴리는 다섯 요소입니다.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { t: '기록', b: '출처가 다른 반응을 같은 스키마로 모읍니다.' },
              { t: '분석', b: '구간 단위 약점과 질문 포인트를 만듭니다.' },
              { t: '권고', b: '다음 학습 경로를 제안하고 한계를 붙입니다.' },
              { t: '실행', b: '퀴즈·루틴·리포트를 같은 데이터로 굴립니다.' },
              { t: '연계', b: '기관·가정이 동의된 요약을 공유합니다.' },
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
              <h3 className="font-bold text-gray-900 mb-3">수업 주간</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
                <li>과제·진단 반응이 로그로 쌓입니다.</li>
                <li>AI가 이번 주 복습·신규 비율을 제안합니다.</li>
                <li>교사 확인 후 루틴이 실행되고 결과가 다시 로그로 돌아옵니다.</li>
              </ul>
            </div>
            <div className="rounded-xl bg-white border border-stone-200 p-6">
              <h3 className="font-bold text-gray-900 mb-3">학기·프로그램</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
                <li>목표-개입-결과가 한 타임라인에 묶입니다.</li>
                <li>학부모·행정 보고는 같은 표준에서 발췌합니다.</li>
                <li>파트너 연동은 API·보내기로 협의합니다.</li>
              </ul>
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-900 text-center mb-6">관점별로 보는 변화 (예시)</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="rounded-xl bg-white border p-6">
              <p className="text-xs font-semibold text-violet-800 mb-2">학생·가족</p>
              <p className="text-gray-700">
                <span className="text-gray-500">기존:</span> 점수만 보고 무엇을 할지 막막함.
                <br />
                <span className="text-violet-800 font-medium">에듀케어로그:</span> 어디서 멈췄는지와 다음 행동이 같은 화면에
                묶입니다.
              </p>
            </div>
            <div className="rounded-xl bg-white border p-6">
              <p className="text-xs font-semibold text-violet-800 mb-2">교사·기관</p>
              <p className="text-gray-700">
                <span className="text-gray-500">기존:</span> 엑셀·앱 복사로 주간 준비.
                <br />
                <span className="text-violet-800 font-medium">에듀케어로그:</span> 표준 로그에서 수업 설계와 개별 피드백이 같은
                줄기로 이어지도록 지향합니다.
              </p>
            </div>
            <div className="rounded-xl bg-white border p-6">
              <p className="text-xs font-semibold text-violet-800 mb-2">사업·VC</p>
              <p className="text-gray-700">
                <span className="text-gray-500">기존:</span> 콘텐츠 판매와 효과 데이터가 분리되기 쉬움.
                <br />
                <span className="text-violet-800 font-medium">에듀케어로그:</span> B2B 임베드·파일럿·R&D가 같은 인프라 축에서
                논의될 수 있습니다.
              </p>
            </div>
            <div className="rounded-xl bg-white border p-6">
              <p className="text-xs font-semibold text-violet-800 mb-2">산업·정책</p>
              <p className="text-gray-700">
                <span className="text-gray-500">기존:</span> 사업별 표본이 달라 비교가 어려움.
                <br />
                <span className="text-violet-800 font-medium">에듀케어로그:</span> 표준 로그 기반으로 효과·형평 논의의 재현성을
                높이는 방향을 지향합니다.
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
              로그는 표준 스키마로 정리되고, 분석 결과는 권고·리포트로 전환된 뒤 동의된 채널로만 전달됩니다. RBAC·감사 로그를
              전제로 합니다.
            </p>
            <p>
              권고에는 <strong className="text-gray-900">근거와 한계</strong>를 붙이는 <strong>XAI</strong> 원칙을 둡니다. 과장된
              성적 약속이 아니라 운영 개선에 초점을 둡니다.
            </p>
          </div>
        </div>
      </section>

      {/* 9. 기존 시스템과의 차이 */}
      <section className="py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">기존 시스템과의 차이</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full min-w-[280px] text-sm text-left border-collapse">
              <caption className="sr-only">기존 교육 시스템과 에듀케어로그 비교</caption>
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="p-3 font-bold text-gray-900 w-[28%]">비교</th>
                  <th className="p-3 font-bold text-gray-800 border-l">기존</th>
                  <th className="p-3 font-bold text-violet-900 border-l bg-violet-50/60">에듀케어로그</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr className="border-b border-gray-100">
                  <th className="p-3 font-semibold text-left bg-gray-50/80">데이터</th>
                  <td className="p-3 border-l text-gray-700">도구별 분산</td>
                  <td className="p-3 border-l bg-violet-50/40">표준 학습 로그로 통합</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th className="p-3 font-semibold text-left bg-gray-50/80">흐름</th>
                  <td className="p-3 border-l text-gray-700">점수·과제 단편</td>
                  <td className="p-3 border-l bg-violet-50/40">기록→분석→권고→실행→연계</td>
                </tr>
                <tr>
                  <th className="p-3 font-semibold text-left bg-gray-50/80">소통</th>
                  <td className="p-3 border-l text-gray-700">보고서·카톡 중심</td>
                  <td className="p-3 border-l bg-violet-50/40">같은 요약을 역할별로 공유</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 10. 산업 변화 */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">교육 산업은 어떻게 바뀌는가</h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-10">구조·데이터 중심으로만 짚습니다.</p>
          <div className="grid md:grid-cols-3 gap-5 text-sm">
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">학교·학원</h3>
              <p className="text-gray-700">개별 지도와 행정 보고가 같은 로그에서 나오면 준비 비용이 줄어듭니다.</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">에듀테크</h3>
              <p className="text-gray-700">노출만이 아니라 연동·효과·표준 호환이 평가 축이 됩니다.</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">공공</h3>
              <p className="text-gray-700">사업 설계와 사후 평가가 같은 스키마에서 맞물릴 수 있습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. DAL 생태계 */}
      <section className="py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">DAL 생태계 연결</h2>
          <p className="text-center text-gray-800 text-base max-w-2xl mx-auto mb-3 font-semibold">
            이 서비스는 DAL 플랫폼의 <strong className="text-violet-900">교육</strong> 축 인프라입니다.
          </p>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-8">
            자람이(발달), 시니어앤라이프(시니어), 토탈케어로그(헬스케어)와 같은 밑그림을 공유합니다.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: '자람이', role: '발달 축', focus: '행동·발달 맥락' },
              { name: '에듀케어로그', role: '교육 축', focus: '학습·수업' },
              { name: '시니어앤라이프', role: '시니어 축', focus: '돌봄·생활' },
              { name: '토탈케어로그', role: '헬스케어 축', focus: '의료·건강' },
            ].map((e) => (
              <div key={e.name} className="rounded-xl p-5 border border-gray-200 bg-white">
                <p className="font-bold text-gray-900">{e.name}</p>
                <p className="text-xs text-violet-700 mt-1">{e.role}</p>
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
              <h3 className="font-bold text-gray-900 mb-2">학생·가정</h3>
              <p className="text-gray-700">다음 행동이 데이터로 보이고 말의 오해가 줄어듭니다.</p>
            </div>
            <div className="rounded-xl border p-5 bg-gray-50/80">
              <h3 className="font-bold text-gray-900 mb-2">교사·기관</h3>
              <p className="text-gray-700">같은 로그로 수업·보고·협업이 이어집니다.</p>
            </div>
            <div className="rounded-xl border p-5 bg-gray-50/80">
              <h3 className="font-bold text-gray-900 mb-2">공공·연구</h3>
              <p className="text-gray-700">표준 기반으로 효과·형평 논의의 재현성을 높입니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. CTA */}
      <section className="py-16 bg-gradient-to-br from-violet-700 to-indigo-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">지금 시작하기</h2>
          <p className="text-violet-100 text-sm mb-10 max-w-2xl mx-auto">파일럿·데모, 파트너십, IR·연구는 각각 다른 창구로 연결됩니다.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href={EDU_ENTRYPOINT_URL}
              className="inline-flex w-full sm:w-auto justify-center bg-white text-violet-800 font-semibold px-6 py-3 rounded-lg text-sm hover:bg-violet-50 transition-colors"
            >
              교육 축 도입·파일럿 문의
            </Link>
            <Link
              href="/contact?type=partner"
              className="inline-flex w-full sm:w-auto justify-center border-2 border-white text-white font-semibold px-6 py-3 rounded-lg text-sm hover:bg-white/10 transition-colors"
            >
              사업·도입 파트너십
            </Link>
            <Link href="/contact?type=ir" className="text-violet-100 hover:text-white text-sm font-medium underline underline-offset-2">
              연구·IR 문의
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
