import type { Metadata } from 'next'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'

/** 공개 체험 URL은 리뉴얼·도메인 변경으로 미정(기존 medicai.kr 연결 종료). */
const pageCanonical = 'https://dreamailab.com/services/healthcare'

export const metadata: Metadata = {
  title: '헬스케어AI 플랫폼 | AI 디지털케어로그 | 토탈케어로그',
  description:
    '토탈케어로그는 표준화된 AI 디지털케어로그를 기반으로 일상 기록→AI 분석→병원/약국/요양 연계를 통합 제공합니다. 항암집중 모드, 정신건강 맞춤 대화 챗봇까지 하나의 헬스케어AI 플랫폼으로 운영됩니다.',
  keywords:
    '토탈케어로그, 헬스케어AI, AI 디지털케어로그, 항암집중 모드, 정신건강 챗봇, 온라인 상담, AI 건강분석, 만성질환관리, 복약관리, 병원 비즈니스, 약국 연동, RWE 데이터',
  alternates: { canonical: pageCanonical },
  openGraph: {
    title: '토탈케어로그 | AI 디지털케어로그 · DAL 헬스케어 축',
    description:
      '일상 기록·AI 분석·권고·의료 연계를 한 줄기로. 드림에이아이랩 DAL 플랫폼의 헬스케어AI 서비스.',
    url: pageCanonical,
    siteName: '드림에이아이랩',
    type: 'website',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: '토탈케어로그 | AI 디지털케어로그',
    description: '일상 케어로그 → AI 분석 → 병원·약국 연계. DAL 헬스케어 축.',
  },
  robots: { index: true, follow: true },
}

export default function HealthcareService() {
  const personaHealth = [
    {
      who: '환자·일상 케어 사용자',
      pain: '증상과 복약이 말과 기억에만 남아, 진료 때마다 처음부터 설명해야 합니다.',
      gain: '짧은 기록이 케어로그로 쌓이고, 주간 요약·질문 포인트로 진료 준비 시간을 줄이는 흐름을 지향합니다.',
    },
    {
      who: '보호자·가족',
      pain: '멀리 있으면 부모·가족의 하루 상태를 같은 그림으로 보기 어렵습니다.',
      gain: '동의된 범위에서 요약·알림으로 맥락을 공유하고, 응급이 아닌 패턴 변화를 먼저 보려 합니다.',
    },
    {
      who: '병원·약국·케어 기관',
      pain: '내원 순간 정보 위주라 일상 경과가 비어 있고, 순응·생활 데이터가 돌아오지 않습니다.',
      gain: '표준 요약·로그 연계로 상담·준비를 같은 표에서 시작하는 협업을 지향합니다(EMR 대체가 아닌 보조 레이어).',
    },
    {
      who: '공공·연구·제약',
      pain: '현장 데이터가 표준 없이 흩어지면 RWE·안전 신호 논의의 재현성이 떨어집니다.',
      gain: '동의·비식별 조건에서 스키마 기반 과제·집계를 논의할 수 있는 구조를 목표로 합니다.',
    },
  ]

  const dalEcosystemLinks = [
    { href: '/services/jarame', name: '자람이', role: 'DAL 발달·케어 축', focus: '발달·행동·치료 맥락의 케어로그' },
    { href: '/services/educarelog', name: '에듀케어로그', role: 'DAL 교육 축', focus: '학습·수업 반응 데이터' },
    { href: '/services/senior', name: '시니어앤라이프', role: 'DAL 시니어 축', focus: '돌봄·생활 데이터' },
    { href: '/services/veggie', name: '베지케어', role: 'DAL 웰니스', focus: '식습관·영양 로그와 건강 연계' },
  ]

  const jsonLdGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageCanonical}#webpage`,
        url: pageCanonical,
        name: '토탈케어로그 | AI 디지털케어로그',
        description:
          '표준 AI 디지털케어로그 기반 일상 기록, 분석, 권고, 병원·약국 연계. DAL 헬스케어 축.',
        inLanguage: 'ko-KR',
        isPartOf: { '@id': 'https://dreamailab.com/#website' },
        about: { '@id': `${pageCanonical}#service` },
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
        offers: {
          '@type': 'Offer',
          url: pageCanonical,
          description: '공개 체험은 리뉴얼 및 도메인 변경으로 준비 중입니다.',
        },
      },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }} />
      <Header />

      {/* 1. Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-bold leading-tight tracking-tight text-balance break-keep mb-6 max-w-4xl mx-auto">
              <span className="block text-3xl sm:text-4xl lg:text-5xl mb-3">의료는 병원에서 시작되지 않습니다.</span>
              <span className="block text-xl sm:text-2xl lg:text-3xl font-semibold text-white/95 leading-snug mb-1.5">
                토탈케어로그는 일상을 기록으로 바꾸고,
              </span>
              <span className="block text-xl sm:text-2xl lg:text-3xl font-semibold text-white/95 leading-snug">
                다음 의료까지 끊기지 않게 연결합니다.
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto">
              일상의 기록이 다음 의료로 이어지는 구조를 만듭니다.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs">
              <span className="bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full">전 생애</span>
              <span className="bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full">전방향(생활·교육·건강)</span>
              <span className="bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full">AI 디지털케어로그</span>
            </div>
            <div className="mt-6">
              <span className="inline-block px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-semibold">In Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero 직후: 핵심 소개 + 대상 + 기술축 */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center rounded-2xl border border-cyan-100 bg-cyan-50/40 px-6 py-6">
            <p className="text-gray-900 font-medium text-base md:text-lg leading-relaxed">
              일상의 기록이 다음 진료로 이어지려면, 병원 밖 증상·복약·생활이 <strong>표준 케어로그</strong>에 모이고 AI가 분석·권고까지 이어{' '}
              <strong>다음 진료·연계</strong>로 잇도록 설계한 <strong>토탈케어로그</strong>입니다. (DAL 플랫폼의 <strong>헬스케어AI</strong> 축)
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 text-center">
              표준 케어로그와 AI — 일상과 진료를 잇고, 정보 비대칭을 완화하는 쪽으로
            </h2>
            <p className="text-center text-sm text-gray-600 max-w-3xl mx-auto mb-6 leading-relaxed">
              지식·진료 맥락의 양 차이는 구조적으로 존재합니다. 한 번에 없앨 수는 없어도, 일상의 증상·복약·생활이 <strong>표준 케어로그</strong>로 쌓이고 AI가 정리하며 안내에{' '}
              <strong>근거와 이유</strong>가 붙으면 환자는 막연함이 줄고, 의료진은 <strong>짧은 외래 진료</strong>에서도 같은 출발선을 잡기 쉬워집니다. 검색·광고 노출이 아니라{' '}
              <strong>이해되는 흐름</strong>을 쌓는 방향을 지향합니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 shadow">
                <p className="text-sm text-gray-700">만성질환·복약·수면·활동을 <strong>매일 짧게 남기고</strong> 진료 때 설명하고 싶은 <strong>환자·가족</strong></p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 shadow">
                <p className="text-sm text-gray-700">내원 전후 <strong>생활 경과</strong>를 같은 형식으로 받아보고 싶은 <strong>병원·약국·케어 기관</strong></p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 shadow">
                <p className="text-sm text-gray-700">항암·정신건강 등 <strong>집중 관리 모드</strong>와 리포트가 필요한 <strong>특수 상황 케어</strong></p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 shadow">
                <p className="text-sm text-gray-700">표준 케어로그·RWE·과제 연계를 논의하려는 <strong>연구·공공·제약</strong> 담당자</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-semibold text-cyan-800 mb-4 text-center">DAL 철학과 맞닿는 기술 축</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-cyan-50/60 rounded-2xl border border-cyan-200 p-5 text-sm text-gray-700 leading-relaxed">
                <strong>AI 주치의형 코파일럿:</strong> 일상 케어로그를 읽고 진료 준비·복약·생활 습관 권고를 <strong>보조</strong>합니다.
                진단·처방을 대체하지 않고, 사용자와 의료진이 같은 맥락에서 대화할 수 있게 하는 층을 지향합니다.
              </div>
              <div className="bg-cyan-50/60 rounded-2xl border border-cyan-200 p-5 text-sm text-gray-700 leading-relaxed">
                <strong>표준·연동:</strong> FHIR·HL7 등 표준 스키마와 웨어러블·자가기록을 같은 파이프라인에서 다루어, 병원·약국·요양과
                끊기지 않는 흐름을 만드는 것을 목표로 합니다.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem Definition */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">올바른 의료 문화 — 정보 비대칭을 완화합니다</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              과장·광고 중심의 정보 대신, <strong>근거 기반</strong> 설명과 <strong>투명한 기대치</strong>를 제공합니다. 사용자가 스스로 이해하고 결정하도록 돕습니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 rounded-xl p-6 shadow">
              <h3 className="font-bold text-gray-900 mb-2">근거 기반 설명(XAI)</h3>
              <p className="text-sm text-gray-700">권고·경보에는 <strong>이유</strong>와 <strong>근거</strong>(가이드라인·공식 라벨·통계)를 함께 제시합니다.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow">
              <h3 className="font-bold text-gray-900 mb-2">과잉 진료 예방</h3>
              <p className="text-sm text-gray-700">고위험·비가역 결정은 <strong>세컨드 오피니언</strong>·경과 관찰 옵션을 안내해 성급한 결정을 줄입니다.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow">
              <h3 className="font-bold text-gray-900 mb-2">광고·과장 검증</h3>
              <p className="text-sm text-gray-700">미용·한방·치과 등 다양한 치료에 대해 <strong>기대 효과·한계·부작용</strong>을 교육적으로 설명합니다.</p>
            </div>
          </div>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">산업 트렌드 — 광고 중심에서 케어 성과 중심으로</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              <strong>광고·마케팅 중심</strong>에서 <strong>케어 성과 중심</strong>으로. 이제 블로그·검색 노출이 아니라 <strong>표준 케어로그·AI 분석</strong>이 선택 기준으로 작동하는 흐름을 지향합니다.
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto mt-3 text-sm">
              환자는 신뢰 가능한 근거·경과 정보를 더 쉽게 확인하고, 의료기관은 과도한 노출 경쟁보다 실제 케어 품질과 설명 역량으로 선택받는 구조를 지향합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-2 text-lg flex items-center gap-2">
                <MarketingIcon name="hospital" className="h-5 w-5 text-cyan-700" />
                <span>병원</span>
              </h3>
              <p className="text-sm text-gray-700"><strong>변화 전:</strong> 광고·내원 후 단절</p>
              <p className="text-sm text-gray-700"><strong>변화 후:</strong> 케어로그 기반 리드 → 진료 준비 단축 → 재내원율↑</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-2 text-lg flex items-center gap-2">
                <MarketingIcon name="pill" className="h-5 w-5 text-cyan-700" />
                <span>약국</span>
              </h3>
              <p className="text-sm text-gray-700"><strong>변화 전:</strong> 단발 판매</p>
              <p className="text-sm text-gray-700"><strong>변화 후:</strong> 복약 순응도 → 리필 자동화 → 구독 모델</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-2 text-lg flex items-center gap-2">
                <MarketingIcon name="trend" className="h-5 w-5 text-cyan-700" />
                <span>마케팅</span>
              </h3>
              <p className="text-sm text-gray-700"><strong>변화 전:</strong> 광고비 소진·효과 불명</p>
              <p className="text-sm text-gray-700"><strong>변화 후:</strong> 케어 성과로 평가 → 신뢰 기반 매칭</p>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-gray-500">본 서비스는 의료교육·의사결정을 돕는 정보 제공을 목표로 하며, 구체적 진단·치료는 의료전문가 판단을 따릅니다.</p>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            의료 데이터는 이미 존재하지만 연결되지 않습니다.
            <br />
            문제는 데이터 부족이 아니라 흐름이 없다는 점입니다.
            <br />
            토탈케어로그는 이 단절을 하나의 구조로 연결하기 위해 설계되었습니다.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">토탈케어로그 구조 한눈에 보기</h2>
          <p className="text-center text-gray-600 text-sm mb-8 max-w-2xl mx-auto">
            일상 기록에서 시작해 AI 분석과 진료 연계까지 이어지는 핵심 구조를 시각적으로 요약했습니다.
          </p>
          <div className="rounded-2xl overflow-hidden border border-cyan-100 bg-white shadow-sm">
            <img src="/images/services/healthcare-care-flow.svg" alt="토탈케어로그 핵심 운영 흐름 구조도" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* 역할별: 막힘 → 변화 (에듀케어로그 personaUsage 패턴) */}
      <section className="py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">누가 왜 막히나 — 토탈케어로그에서 바뀌는 점</h2>
          <p className="text-center text-gray-800 font-medium text-sm mb-8 max-w-3xl mx-auto">
            역할은 다르지만, 공통 병목은 <strong>데이터가 한 줄기로 이어지지 않는 것</strong>입니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {personaHealth.map((row) => (
              <div key={row.who} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <p className="text-xs font-bold text-teal-800 uppercase tracking-wide mb-2">{row.who}</p>
                <p className="text-sm text-gray-700 mb-3">
                  <span className="text-gray-500 font-medium">막힘:</span> {row.pain}
                </p>
                <p className="text-sm text-gray-800">
                  <span className="text-teal-700 font-semibold">토탈케어로그:</span> {row.gain}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Solution — 토탈케어로그란 무엇인가 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">토탈케어로그란 무엇인가</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-3">
              토탈케어로그는 일상 데이터를 기반으로 의료의 전 과정을 연결하는 AI 디지털케어로그 기반 운영 인프라입니다.
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              인공지능 시대의 <strong>새로운 의료 운영체계</strong> — <strong>AI 디지털케어로그</strong>를 중심으로 진료실 중심에서
              <strong>일상 중심</strong>으로 전환하고, 개인에 맞춘 병원 여정을 재구성합니다.
            </p>
            <p className="mt-3 text-base text-gray-500 max-w-3xl mx-auto">
              토탈케어로그는 <strong>AI 디지털케어로그</strong>를 기반으로 진료실 밖의 시간을 의료의 일부로 바꾸는 
              <strong>헬스케어AI</strong>입니다. 아래 섹션에서 작동 원리와 실제 사용 흐름을 차근히 설명합니다.
            </p>
            <p className="mt-4 text-sm text-gray-500 max-w-3xl mx-auto border-t border-gray-200 pt-4 leading-relaxed">
              <strong>표준 케어로그</strong>는 증상·복약·생활 등을 같은 스키마로 남기는 <strong>기록층</strong>이고,{' '}
              <strong>AI 디지털케어로그</strong>는 이를 수집·표준화·분석·안내하는 <strong>디지털·AI 레이어</strong>입니다.{' '}
              <strong>토탈케어로그</strong>는 위 두 층을 아우르는 이 서비스의 <strong>운영·브랜드 명칭</strong>입니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 shadow-lg">
              <div className="mb-4 flex justify-center text-cyan-700"><MarketingIcon name="phone" className="h-10 w-10" /></div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">일상 기록</h3>
              <p className="text-gray-700 text-center">
                증상·복약·수면·식사·운동·정서를 <strong>원클릭/음성</strong>으로 간편 기록합니다.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 shadow-lg">
              <div className="mb-4 flex justify-center text-cyan-700"><MarketingIcon name="brain" className="h-10 w-10" /></div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">AI 분석</h3>
              <p className="text-gray-700 text-center">
                개인 기준치·추세·이상치를 자동 탐지. <strong>위험 신호</strong>를 조기 경보하고 권고합니다.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 shadow-lg">
              <div className="mb-4 flex justify-center text-cyan-700"><MarketingIcon name="hospital" className="h-10 w-10" /></div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">병원·약국 연계</h3>
              <p className="text-gray-700 text-center">
                플랫폼에 <strong>연동된 병원·약국</strong>과 안전하게 연계하고, 리포트를 공유해 진료 준비 시간을 줄입니다.
              </p>
            </div>
          </div>
          <div className="mt-10 bg-blue-600 text-white rounded-2xl p-8 shadow-lg text-center">
            <p className="text-xl font-semibold">
              <span className="text-yellow-300">핵심:</span> 플랫폼의 중심은 <strong>AI 디지털케어로그</strong>. 
              진료실 밖의 시간을 의료의 일부로 바꿔, 내원 전후로 <strong>케어가 끊기지 않도록</strong> 설계했습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 4. User Workflow — 전 생애 케어 흐름 */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">전 생애 케어 흐름 — 한눈에</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              아이에서 시니어까지, 기록이 이어지고 AI가 보조하며 필요할 때 의료와 연결됩니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-sm">
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <div className="mb-1 flex justify-center text-cyan-700"><MarketingIcon name="baby" className="h-7 w-7" /></div>
              <p className="font-semibold text-gray-900">영유아</p>
              <p className="text-gray-700">보호자 기록(수면/수유/증상)</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <div className="mb-1 flex justify-center text-cyan-700"><MarketingIcon name="child" className="h-7 w-7" /></div>
              <p className="font-semibold text-gray-900">성장기</p>
              <p className="text-gray-700">예방접종·활동·학습/스트레스</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <div className="mb-1 flex justify-center text-cyan-700"><MarketingIcon name="user" className="h-7 w-7" /></div>
              <p className="font-semibold text-gray-900">성인</p>
              <p className="text-gray-700">웨어러블·자가기록·AI 상담</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <div className="mb-1 flex justify-center text-cyan-700"><MarketingIcon name="hospital" className="h-7 w-7" /></div>
              <p className="font-semibold text-gray-900">의료 연계</p>
              <p className="text-gray-700">필요 시 연동 병원/약국 연결</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <div className="mb-1 flex justify-center text-cyan-700"><MarketingIcon name="leaf" className="h-7 w-7" /></div>
              <p className="font-semibold text-gray-900">개인 맞춤</p>
              <p className="text-gray-700">영양·생활습관·복약 코칭</p>
            </div>
          </div>
        </div>
      </section>


      {/* 4b. User Workflow — 시나리오 체감 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">사용자는 무엇을, 어떻게 체감하나</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">일반 의료와 항암 환자 사례로 구체적인 워크플로우를 확인하세요.</p>
          </div>

          {/* 시나리오 3종 — 세로형 가로 카드 */}
          <div className="space-y-5">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 md:p-8 shadow-lg border border-cyan-100">
              <div className="md:flex md:items-start md:gap-8">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <MarketingIcon name="stethoscope" className="h-6 w-6 text-cyan-700" />
                    <span>일반 의료 시나리오</span>
                  </h3>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-2 py-1 rounded-full bg-white/80 text-gray-800">이상치 경보</span>
                    <span className="px-2 py-1 rounded-full bg-white/80 text-gray-800">복약 순응도</span>
                    <span className="px-2 py-1 rounded-full bg-white/80 text-gray-800">PDF 리포트</span>
                  </div>
                </div>
                <ol className="md:w-2/3 list-decimal list-inside space-y-2 text-gray-800">
                  <li><strong>아침</strong>: 수면·증상 원클릭 기록 → AI가 패턴·트리거 분석</li>
                  <li><strong>점심</strong>: 복약 알림·순응도 체크 → 누락 시 리마인드</li>
                  <li><strong>오후</strong>: 이상치 감지 → 병원 예약 제안(연동 병원 리스트)</li>
                  <li><strong>저녁</strong>: 식단 기록 → 영양 균형 가이드·약국 링크</li>
                  <li><strong>주말</strong>: 1주 리포트(PDF) 생성 → 가족/의료진 공유</li>
                </ol>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 md:p-8 shadow-lg border border-indigo-100">
              <div className="md:flex md:items-start md:gap-8">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <MarketingIcon name="target" className="h-6 w-6 text-cyan-700" />
                    <span>항암 환자 시나리오</span>
                  </h3>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-2 py-1 rounded-full bg-white/80 text-gray-800">부작용 경보</span>
                    <span className="px-2 py-1 rounded-full bg-white/80 text-gray-800">영양 코칭</span>
                    <span className="px-2 py-1 rounded-full bg-white/80 text-gray-800">가족 공유</span>
                  </div>
                </div>
                <ol className="md:w-2/3 list-decimal list-inside space-y-2 text-gray-800">
                  <li><strong>시작</strong>: 레짐·스케줄 입력 → 부작용·체중 집중 추적 모드</li>
                  <li><strong>매일</strong>: 오심/통증/피로 기록 → 위험 신호 조기 경보</li>
                  <li><strong>식단</strong>: 약물·증상 기반 영양식 추천 → 체중·수분 관리</li>
                  <li><strong>가족</strong>: 보호자 공유·상태 변화 알림</li>
                  <li><strong>장기</strong>: 재발 징후·만성 부작용 모니터링</li>
                </ol>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-6 md:p-8 shadow-lg border border-emerald-100">
              <div className="md:flex md:items-start md:gap-8">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <MarketingIcon name="leaf" className="h-6 w-6 text-cyan-700" />
                    <span>한방병원 시나리오</span>
                  </h3>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-2 py-1 rounded-full bg-white/80 text-gray-800">근거/주의 고지</span>
                    <span className="px-2 py-1 rounded-full bg-white/80 text-gray-800">협진 연계</span>
                    <span className="px-2 py-1 rounded-full bg-white/80 text-gray-800">경과 모니터링</span>
                  </div>
                </div>
                <ol className="md:w-2/3 list-decimal list-inside space-y-2 text-gray-800">
                  <li><strong>문진</strong>: 증상·체질·생활기록 입력 → 케어로그와 통합</li>
                  <li><strong>권고</strong>: 한약/침/온열·생활 가이드(근거·주의 포함)</li>
                  <li><strong>경과</strong>: 수면·통증·식사 변화 기록 → 권고 자동 조정</li>
                  <li><strong>연계</strong>: 필요 시 양방 검사·병원 협진 안내</li>
                  <li><strong>리포트</strong>: 주간 요약(PDF) 생성·공유</li>
                </ol>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-gray-500">본 시나리오는 사용자 교육 목적의 예시이며, 진단·치료는 의료전문가의 판단을 따릅니다.</p>
        </div>
      </section>

      {/* 항암·회복기 식사 실행 — 베지케어와의 DAL 흐름 */}
      <section className="py-14 lg:py-16 bg-emerald-50/80 border-y border-emerald-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">항암·만성질환 케어와 식사 실행 — 베지케어와 한 줄기</h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-center sm:text-left">
            진료와 복약만으로는 일상 식사·체력·선호가 비어 있기 쉽습니다. 토탈케어로그에서 쌓인 부작용·체중·영양·선호 맥락은 동의된 범위에서{' '}
            <Link href="/services/veggie" className="font-semibold text-emerald-800 underline-offset-2 hover:underline">
              베지케어
            </Link>
            의 AI 레시피·주간 식단·영양 코칭·커뮤니티·파트너 커머스로 이어져, 피로한 환자가 실제로 먹을 수 있는 실행으로 연결되는 것을 지향합니다. 장기 추적·생활 회복에는 식습관 데이터가 필수 축입니다.
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-800 space-y-2 max-w-2xl mx-auto">
            <li>항암·회복기 제한·선호를 반영한 레시피 생성과 주간 식단 루프</li>
            <li>생성·실천한 레시피를 공유하는 커뮤니티로 사회적 지지</li>
            <li>레시피·식재료를 마켓·정기배송 등과 연결해 구매까지 이어지는 파트너 구조(단계적 확장)</li>
          </ul>
          <p className="text-xs text-gray-500 mt-4 text-center">
            구체 의료행위·상품 구매는 사용자 선택과 파트너 약관·동의 범위를 따릅니다.
          </p>
        </div>
      </section>

      {/* 기존 구조 vs 토탈케어로그 (에듀·시니어 비교표 패턴) */}
      <section className="py-14 lg:py-20 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">기존 헬스케어 흐름과 무엇이 다른가</h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-8">
            기능 나열이 아니라, <strong>데이터가 흐르는 축</strong>만 비교합니다.
          </p>
          <div className="rounded-2xl overflow-hidden border border-cyan-100 bg-white shadow-sm mb-8">
            <img src="/images/services/healthcare-before-after.svg" alt="기존 구조와 토탈케어로그 구조 비교도" className="w-full h-auto" />
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full min-w-[300px] text-sm text-left border-collapse">
              <caption className="sr-only">기존 헬스케어와 토탈케어로그 비교</caption>
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="p-3 font-bold text-gray-900 w-[26%]">비교</th>
                  <th className="p-3 font-bold text-gray-800 border-l border-gray-200">기존에 흔한 구조</th>
                  <th className="p-3 font-bold text-teal-900 border-l border-gray-200 bg-teal-50/70">토탈케어로그가 지향하는 구조</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr className="border-b border-gray-100">
                  <th className="p-3 font-semibold text-gray-900 align-top bg-gray-50/80 text-left">기록의 시작</th>
                  <td className="p-3 border-l border-gray-100 text-gray-700">내원·처방 중심, 그 사이는 말·메모</td>
                  <td className="p-3 border-l border-gray-100 bg-teal-50/40">일상에서 표준 케어로그로 시작</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th className="p-3 font-semibold text-gray-900 align-top bg-gray-50/80 text-left">데이터 흐름</th>
                  <td className="p-3 border-l border-gray-100 text-gray-700">앱·병원·종이가 각각 따로</td>
                  <td className="p-3 border-l border-gray-100 bg-teal-50/40">수집→표준화→분석→권고→연계 파이프라인</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th className="p-3 font-semibold text-gray-900 align-top bg-gray-50/80 text-left">설명·신뢰</th>
                  <td className="p-3 border-l border-gray-100 text-gray-700">광고·검색 노출 위주 설명</td>
                  <td className="p-3 border-l border-gray-100 bg-teal-50/40">XAI로 이유·한계·근거를 함께 제시</td>
                </tr>
                <tr>
                  <th className="p-3 font-semibold text-gray-900 align-top bg-gray-50/80 text-left">기관 협업</th>
                  <td className="p-3 border-l border-gray-100 text-gray-700">팩스·이미지·재입력 반복</td>
                  <td className="p-3 border-l border-gray-100 bg-teal-50/40">동의된 요약·리포트로 같은 그림 공유</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Technology — 파이프라인 */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">어떻게 작동하나 — AI 디지털케어로그 파이프라인</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              수집 → 표준화 → AI 분석 → 권고 → 연계, 5단계로 일상 데이터를 <strong>실사용 증거(RWE)</strong>로 전환합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="mb-2 flex justify-center text-cyan-700"><MarketingIcon name="download" className="h-8 w-8" /></div>
              <h3 className="font-bold text-gray-900 mb-2">1. 수집</h3>
              <p className="text-sm text-gray-700">앱·음성·웨어러블·설문으로 자동/수동 수집</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="mb-2 flex justify-center text-cyan-700"><MarketingIcon name="settings" className="h-8 w-8" /></div>
              <h3 className="font-bold text-gray-900 mb-2">2. 표준화</h3>
              <p className="text-sm text-gray-700">통일된 스키마로 정규화 (의료 상호운용성)</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="mb-2 flex justify-center text-cyan-700"><MarketingIcon name="brain" className="h-8 w-8" /></div>
              <h3 className="font-bold text-gray-900 mb-2">3. AI 분석</h3>
              <p className="text-sm text-gray-700">개인 기준치·추세·이상치·트리거 탐지</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="mb-2 flex justify-center text-cyan-700"><MarketingIcon name="spark" className="h-8 w-8" /></div>
              <h3 className="font-bold text-gray-900 mb-2">4. 권고</h3>
              <p className="text-sm text-gray-700">
                행동 가이드·복약 스케줄·식단 개선 제안을 통해, 
                의료진과 상의할 수 있는 <strong>질문 포인트</strong>를 정리해 줍니다.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="mb-2 flex justify-center text-cyan-700"><MarketingIcon name="link" className="h-8 w-8" /></div>
              <h3 className="font-bold text-gray-900 mb-2">5. 연계</h3>
              <p className="text-sm text-gray-700">병원/약국/요양/가족과 리포트·알림 공유</p>
            </div>
          </div>
          <div className="mt-8 bg-cyan-600 text-white rounded-xl p-6 shadow-lg">
            <p className="text-center text-lg font-semibold">
              이 파이프라인은 <strong>RWE(실사용 증거)</strong> 생성으로 이어집니다. 자세한 연구 협력과 학습 방법은 
              <a href="#rwe" className="underline font-bold">아래 '데이터·연구 협력(RWE)'</a>에서 확인하세요.
            </p>
          </div>
        </div>
      </section>

      {/* 5b. Technology — XAI */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">설명 가능한 AI(XAI) — 환자가 이해하는 내 치료</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              "무슨 치료를 받는지, 이 약이 왜 필요한지, 내 몸은 어떻게 변하는지"를 <strong>쉬운 언어</strong>와 <strong>시각 자료</strong>로 설명합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold text-gray-900 mb-2">처방·검사 요약</h3>
              <p className="text-sm text-gray-700">무엇을, 왜 했는지 한 줄 요약과 근거 출처 링크.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold text-gray-900 mb-2">약물 설명</h3>
              <p className="text-sm text-gray-700">성분·목적·주의·상호작용을 이해하기 쉬운 용어로.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold text-gray-900 mb-2">내 몸의 변화</h3>
              <p className="text-sm text-gray-700">혈압·수면·활동과 증상의 <strong>상관관계</strong>를 그래프로.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold text-gray-900 mb-2">왜 이 권고?</h3>
              <p className="text-sm text-gray-700">권고 이유·대안·주의점을 함께 제시(XAI 철학).</p>
            </div>
          </div>

          <div className="mt-10 bg-white rounded-2xl p-8 shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">환자 리포트 예시 (요약)</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold text-gray-900">항목</th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-900">요약</th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-900">메모</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2 font-medium text-gray-900">약물 A</td>
                    <td className="px-4 py-2 text-gray-700">혈압 조절 목적, 아침 복용 권장</td>
                    <td className="px-4 py-2 text-gray-700">졸림 시 취침 전으로 조정</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-medium text-gray-900">검사 결과</td>
                    <td className="px-4 py-2 text-gray-700">최근 2주 평균 혈압 하락 추세</td>
                    <td className="px-4 py-2 text-gray-700">염분 섭취·수면 시간과 상관</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-medium text-gray-900">권고</td>
                    <td className="px-4 py-2 text-gray-700">저염 식단·수분 섭취·저녁 산책 20분</td>
                    <td className="px-4 py-2 text-gray-700">가이드라인 링크 제공</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-center text-xs text-gray-500">PDF로 저장·공유 가능. 어려운 용어는 쉬운 설명과 함께 제공합니다.</p>
          </div>
        </div>
      </section>

      {/* 6a. Business — 병원·약국 연계 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">병원·약국은 어떻게 연계되나</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              입점 파트너는 <strong>대시보드</strong>로 환자 기본정보·운동·식습관·AI 질문 이력을 확인해 <strong>진료 시간을 줄이고</strong> 빠르게 파악합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-2">환자 기본정보</h3>
              <p className="text-sm text-gray-700">연령·체중·기저질환·알레르기·복약 이력을 한눈에.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-2">생활 패턴</h3>
              <p className="text-sm text-gray-700">운동·식습관·수면·스트레스 추세 그래프.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-2">AI 질문 이력</h3>
              <p className="text-sm text-gray-700">환자가 AI에게 물어본 의료 정보 로그 → 관심사 파악.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-2">리포트 요약</h3>
              <p className="text-sm text-gray-700">14일 변화·이상치·권고 이행률을 1장 PDF로.</p>
            </div>
          </div>
          <div className="mt-8 bg-blue-600 text-white rounded-xl p-6 shadow-lg text-center">
            <p className="text-lg font-semibold">
              <span className="text-yellow-300">지향:</span> 사전 요약·질문 포인트로 <strong>상담·대기 흐름을 정리</strong>하고, 환자·의료진 모두 같은 화면에서 시작하는 것을 목표로 합니다(기관·도입 조건에 따라 효과는 달라질 수 있습니다).
            </p>
          </div>
        </div>
      </section>

      {/* 6b. Business — 병원별 맞춤 AI 챗봇 */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">병원별 맞춤 AI 챗봇 — 24시간 나만의 병원봇</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-2">
              <strong>"제일치과봇", "서울성형외과봇"</strong> — 각 병원이 자신만의 AI 챗봇을 보유해, 
              해당 병원의 <strong>가격·시술·의료진·사진·FAQ</strong>를 24시간 상담합니다.
            </p>
            <p className="text-base text-gray-500 max-w-3xl mx-auto">
              플랫폼 전체에 단일 챗봇이 아닌, <strong>병원마다 개인화된 브랜드 챗봇</strong>을 두어 동일한 정보를 반복 설명하는 부담을 줄이고, 예약·문의까지 자연스럽게 이어지는 흐름을 지향합니다.
            </p>
          </div>

          {/* 작동 방식 */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">어떻게 작동하나</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="mb-3 flex justify-center text-cyan-700"><MarketingIcon name="hospital" className="h-8 w-8" /></div>
                <h4 className="font-bold text-gray-900 mb-2 text-center">1. 병원 정보 입력</h4>
                <p className="text-sm text-gray-700">시술 메뉴·가격·의료진 소개·전문 분야·사진·후기 등을 플랫폼에 등록</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="mb-3 flex justify-center text-cyan-700"><MarketingIcon name="robot" className="h-8 w-8" /></div>
                <h4 className="font-bold text-gray-900 mb-2 text-center">2. AI 챗봇 생성</h4>
                <p className="text-sm text-gray-700">"나만의 AI 만들기" 노하우로 해당 병원 전용 챗봇을 자동 생성 (예: "제일치과봇")</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="mb-3 flex justify-center text-cyan-700"><MarketingIcon name="chat" className="h-8 w-8" /></div>
                <h4 className="font-bold text-gray-900 mb-2 text-center">3. 환자 상담</h4>
                <p className="text-sm text-gray-700">환자가 24시간 언제든 "임플란트 가격은?" "이 선생님 경력?" 질문 → 즉시 답변</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="mb-3 flex justify-center text-cyan-700"><MarketingIcon name="chart" className="h-8 w-8" /></div>
                <h4 className="font-bold text-gray-900 mb-2 text-center">4. 예약 연계</h4>
                <p className="text-sm text-gray-700">상담 후 바로 예약 연결 → 병원 대시보드에서 리드·문의 이력 확인</p>
              </div>
            </div>
          </div>

          {/* 병원 입장의 혜택 */}
          <div className="mb-10 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">병원 입장의 혜택</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="mb-2 flex justify-center text-cyan-700"><MarketingIcon name="trend" className="h-9 w-9" /></div>
                <h4 className="font-bold text-gray-900 mb-2">광고비 절감</h4>
                <p className="text-sm text-gray-700">키워드 광고·전화 상담 부담을 줄이고, 챗봇이 1차 안내·필터링을 맡는 흐름을 지향합니다</p>
              </div>
              <div className="text-center">
                <div className="mb-2 flex justify-center text-cyan-700"><MarketingIcon name="target" className="h-9 w-9" /></div>
                <h4 className="font-bold text-gray-900 mb-2">고품질 리드</h4>
                <p className="text-sm text-gray-700">이미 병원 정보를 확인한 뒤 예약으로 이어지기 쉬운 문의를 만드는 데 도움이 될 수 있습니다(업종·규모별로 편차가 있습니다)</p>
              </div>
              <div className="text-center">
                <div className="mb-2 flex justify-center text-cyan-700"><MarketingIcon name="award" className="h-9 w-9" /></div>
                <h4 className="font-bold text-gray-900 mb-2">브랜드 차별화</h4>
                <p className="text-sm text-gray-700">나만의 챗봇으로 병원 정체성을 드러내고, 안내 일관성을 높이는 데 기여할 수 있습니다</p>
              </div>
            </div>
          </div>

          {/* 지속 가치 — 사용자·기관 관점 (과장·락인 표현 완화) */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-2 text-center">한 플랫폼에서 이어 쓰는 이유</h3>
            <p className="text-center text-sm text-white/85 max-w-2xl mx-auto mb-6">
              &quot;나가기 어렵게&quot;가 아니라, <strong>같은 케어로그 위에 쌓인 맥락</strong>이 다음 상담·연계에 그대로 도움이 되기 때문입니다. 데이터 이동·동의 철회는 정책과 제품 설계로 보장하는 것을 전제로 합니다.
            </p>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2"><MarketingIcon name="document" className="h-5 w-5" />맥락이 쌓임</h4>
                  <p className="text-sm text-white/90">
                    케어로그·복약·증상·상담 요약이 같은 축에 남으면, 새 도구로 옮길 때마다 처음부터 설명할 부담이 줄어듭니다.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2"><MarketingIcon name="hospital" className="h-5 w-5" />연계 네트워크</h4>
                  <p className="text-sm text-white/90">
                    병원·약국 등 파트너가 같은 요약 형식을 쓰면, 환자·기관이 <strong>같은 그림</strong>으로 협업하기 쉬워집니다.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2"><MarketingIcon name="robot" className="h-5 w-5" />개인화</h4>
                  <p className="text-sm text-white/90">
                    동의된 범위에서 패턴을 반영한 안내는 반복 입력을 줄이고, 필요 시 전문가에게 넘길 질문을 정리하는 데 쓰입니다.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2"><MarketingIcon name="chart" className="h-5 w-5" />생태계 품질</h4>
                  <p className="text-sm text-white/90">
                    사용자와 기관이 늘어날수록 매칭·콘텐츠 품질을 다듬을 데이터가 풍부해지는 <strong>선순환</strong>을 지향합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 예시 시나리오 */}
          <div className="mt-10 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">실제 사용 예시</h3>
            <p className="text-xs text-gray-500 text-center max-w-2xl mx-auto mb-6 leading-relaxed">
              가상 병원명·가격·비율·후기 점수 등은 UI·교육용 예시이며, 실제 의료기관의 견적·효과·통계와 무관합니다.
            </p>
            <div className="max-w-3xl mx-auto space-y-4 text-gray-800">
              <div className="flex items-start gap-3">
                <span className="text-cyan-700"><MarketingIcon name="tooth" className="h-6 w-6" /></span>
                <div>
                  <p className="font-semibold">제일치과</p>
                  <p className="text-sm text-gray-700">환자: "임플란트 가격이 얼마에요?" → 제일치과봇: "1개 150만원, 이벤트 중 120만원입니다. 김OO 원장 경력 15년, 후기 4.8점. 예약하시겠어요?"</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-cyan-700"><MarketingIcon name="syringe" className="h-6 w-6" /></span>
                <div>
                  <p className="font-semibold">서울성형외과</p>
                  <p className="text-sm text-gray-700">환자: "쌍꺼풀 수술 회복 기간은?" → 서울성형외과봇: "보통 1주일 붓기, 2주 후 자연스러움. 박OO 원장 수술 사례 보시겠어요? (사진 3장 첨부)"</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-cyan-700"><MarketingIcon name="leaf" className="h-6 w-6" /></span>
                <div>
                  <p className="font-semibold">한방클리닉</p>
                  <p className="text-sm text-gray-700">환자: "허리 디스크에 침이 효과 있나요?" → 한방클리닉봇: "추나·침 병행 시 70% 개선 사례. 보험 적용 가능. 초진 상담 예약 연결해드릴까요?"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6c. Business — 표준·네트워크·RWE 축 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">표준 기록과 연계가 만드는 누적 이점</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              같은 <strong>AI 디지털케어로그</strong> 위에 사용자와 기관이 쌓일수록, 호환·협업·연구에 유리한{' '}
              <strong>네트워크 효과</strong>가 커지는 방향을 지향합니다. 과장 광고보다 <strong>재현 가능한 기록과 설명</strong>을 우선합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3 text-lg flex items-center gap-2"><MarketingIcon name="chart" className="h-5 w-5 text-cyan-700" /><span>표준화 → 네트워크 효과</span></h3>
              <p className="text-sm text-gray-700">
                사용자와 기관이 같은 표준 케어로그를 쓰면 데이터 호환·공유·협업이 쉬워지고, 
                참여 주체가 늘수록 연동·분석·운영의 <strong>같은 그림</strong>을 맞추기 쉬워집니다.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3 text-lg flex items-center gap-2"><MarketingIcon name="link" className="h-5 w-5 text-cyan-700" /><span>매칭 채널 확보</span></h3>
              <p className="text-sm text-gray-700">
                자람이·시니어앤라이프에서 검증된 매칭 노하우로 병원·요양 연결을 설계합니다. 
                도입 기관은 <strong>문의·연계를 한곳에서</strong> 다루어 운영 부담을 줄이는 흐름을 지향합니다.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3 text-lg flex items-center gap-2"><MarketingIcon name="dna" className="h-5 w-5 text-cyan-700" /><span>RWE 데이터 모델</span></h3>
              <p className="text-sm text-gray-700">
                실사용 데이터로 질병 패턴·약물 반응·임상 질문을 다루는 데 활용할 수 있습니다. 
                제약·연구 파트너십을 통해 <strong>동의·거버넌스 하에 재현 가능한 데이터 자산</strong>을 쌓는 방향을 지향합니다.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3 text-lg flex items-center gap-2"><MarketingIcon name="globe" className="h-5 w-5 text-cyan-700" /><span>옴니채널 확장</span></h3>
              <p className="text-sm text-gray-700">
                창고형 약국·영양관리·원격상담·요양뿐 아니라, 
                헬스장·요가 등 <strong>운동·다이어트 파트너</strong>까지 확장 가능한 구조로,
                일상·진료·약국·요양·운동이 <strong>한 축으로 잇히는 여정</strong>을 지향합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6d. Business — 정신건강 챗봇 */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">정신건강 챗봇 — 집에서 스트레스·우울 상담</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              집에서 편하게 스트레스·우울·불안을 <strong>AI 챗봇</strong>과 상담하고, 심각한 경우에는 보호자 알림·전문기관 연계 등 <strong>안전 우선</strong> 경로를 안내합니다(의료적 판단·치료를 대체하지 않습니다).
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="mb-2 flex justify-center text-cyan-700"><MarketingIcon name="chat" className="h-8 w-8" /></div>
              <h3 className="font-bold text-gray-900 mb-2 text-center">경청·감정 쓰레기통</h3>
              <p className="text-sm text-gray-700">24/7 대화 가능, 판단 없이 감정을 받아줍니다.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="mb-2 flex justify-center text-cyan-700"><MarketingIcon name="mask" className="h-8 w-8" /></div>
              <h3 className="font-bold text-gray-900 mb-2 text-center">커스텀 인물·톤</h3>
              <p className="text-sm text-gray-700">사용자가 원하는 캐릭터·말투·관심사로 맞춤 설정.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="mb-2 flex justify-center text-cyan-700"><MarketingIcon name="alert" className="h-8 w-8" /></div>
              <h3 className="font-bold text-gray-900 mb-2 text-center">위기 신호 감지</h3>
              <p className="text-sm text-gray-700">자해·자살 징후 시 보호자·전문가 알림(선택).</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="mb-2 flex justify-center text-cyan-700"><MarketingIcon name="chart" className="h-8 w-8" /></div>
              <h3 className="font-bold text-gray-900 mb-2 text-center">정신건강 리포트</h3>
              <p className="text-sm text-gray-700">기분·수면·스트레스 추세 분석, 자가 도움 가이드 제공.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6e. Business — 성형·미용 상담 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">성형·미용 — AI 상담 → 병원 매칭</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              사진 업로드 → AI 1차 상담 → 입점 병원 매칭. <strong>코디네이터(상담실장)</strong> 역할을 AI가 자동화합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg">
              <div className="mb-2 flex justify-center text-cyan-700"><MarketingIcon name="camera" className="h-8 w-8" /></div>
              <h3 className="font-bold text-gray-900 mb-2 text-center">1. 사진 업로드</h3>
              <p className="text-sm text-gray-700">얼굴/피부 사진, 가이드 제공, 민감정보 동의·익명화.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg">
              <div className="mb-2 flex justify-center text-cyan-700"><MarketingIcon name="robot" className="h-8 w-8" /></div>
              <h3 className="font-bold text-gray-900 mb-2 text-center">2. AI 1차 상담</h3>
              <p className="text-sm text-gray-700">개선 포인트·시술 옵션 범위 제시 (의학적 조언 아님 고지).</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg">
              <div className="mb-2 flex justify-center text-cyan-700"><MarketingIcon name="hospital" className="h-8 w-8" /></div>
              <h3 className="font-bold text-gray-900 mb-2 text-center">3. 병원 매칭</h3>
              <p className="text-sm text-gray-700">전문성·후기·거리·예산 필터로 후보 제안, 예약 연결.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg">
              <div className="mb-2 flex justify-center text-cyan-700"><MarketingIcon name="chart" className="h-8 w-8" /></div>
              <h3 className="font-bold text-gray-900 mb-2 text-center">4. 사후 관리</h3>
              <p className="text-sm text-gray-700">시술 전/후 사진 비교, 경과 기록, 부작용 경보.</p>
            </div>
          </div>
          <div className="mt-8 bg-cyan-600 text-white rounded-xl p-6 shadow-lg text-center">
            <p className="text-lg font-semibold">
              <span className="text-yellow-300">지향:</span> AI 1차 응답으로 <strong>반복 질문·안내 업무를 줄이고</strong>, 상담원은 예약·판단이 필요한 케이스에 집중하는 흐름을 목표로 합니다(업종·규모별로 편차가 있습니다).
            </p>
          </div>
        </div>
      </section>

      {/* 6f. Business — 약물 안전 & 건강관리 */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">약물 안전 & 건강관리 — 상호작용·알레르기 자동 체크</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              처방약·OTC·영양제를 동시 고려해 <strong>위험 조합</strong>을 자동 감지하고, 복용 시간을 최적화합니다.
            </p>
          </div>

          {/* AI 약물 안전 코치 테이블 */}
          <div className="mb-10 bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center gap-2">
                <MarketingIcon name="pill" className="h-7 w-7 text-cyan-700" />
                <span>AI 약물 안전 코치 — 복용 스케줄 가이드</span>
              </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-cyan-600 text-white">
                    <th className="px-4 py-3 text-left font-bold">시간</th>
                    <th className="px-4 py-3 text-left font-bold">복용 약</th>
                    <th className="px-4 py-3 text-left font-bold">설명</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-gray-900">아침</td>
                    <td className="px-4 py-3 text-gray-900">핵심 주간 약물</td>
                    <td className="px-4 py-3 text-gray-700">활동·집중 유지를 위한 스케줄</td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="px-4 py-3 font-semibold text-gray-900">점심/저녁</td>
                    <td className="px-4 py-3"><strong className="text-red-700">충돌 가능 조합은 분리</strong></td>
                    <td className="px-4 py-3 text-red-800 font-semibold">상호작용 경보 시 대체 성분/시간 분리 가이드</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-gray-900">취침 전</td>
                    <td className="px-4 py-3 text-gray-900">진정·수면 보조계열</td>
                    <td className="px-4 py-3 text-gray-700">졸림 부작용은 야간으로 이동해 순응도↑</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-blue-600 text-white rounded-lg p-5 text-center shadow">
              <p className="text-sm font-semibold">
                <span className="text-yellow-300">핵심:</span> 위험 조합은 <strong>시간 분리/대체 성분</strong>으로 해결하고, 
                왜 위험한지까지 <strong>설명과 근거</strong>를 함께 제공합니다.
              </p>
            </div>
          </div>

          {/* 집중치료 모드 + 약물 추적 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-indigo-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-cyan-700"><MarketingIcon name="target" className="h-7 w-7" /></span>
                <h4 className="text-xl font-bold text-gray-900">집중치료 모드</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">특정 증상/부작용에 대한 집중 관리 시 자동 활성화.</p>
              <div className="bg-indigo-50 rounded-lg p-3 text-sm text-gray-800">
                <strong className="text-indigo-700">+ 약물 변경 시 집중 추적</strong>
                <br/>변경 후 2주간 부작용·행동 변화·효과를 집중 모니터링
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-cyan-700"><MarketingIcon name="chart" className="h-7 w-7" /></span>
                <h4 className="text-xl font-bold text-gray-900">약물 추적 기록</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">모든 약물의 시간·용량·반응을 구조화 기록.</p>
              <div className="bg-purple-50 rounded-lg p-3 text-sm text-gray-800">
                <strong className="text-purple-700">+ 상호작용 분석</strong>
                <br/>기존 약 + 신규 처방을 교차 분석하여 위험 조합 자동 감지, 복용 시간 최적화 제안
              </div>
            </div>
          </div>

          {/* 확장 적용 */}
          <div className="mt-8 bg-white rounded-xl p-6 shadow-md border-t-4 border-cyan-500">
            <h4 className="text-xl font-bold text-gray-900 mb-4 text-center flex items-center justify-center gap-2"><MarketingIcon name="rocket" className="h-6 w-6 text-cyan-700" /><span>TotalCare 확장 적용</span></h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm text-gray-700">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4">
                <div className="mb-1 flex justify-center text-cyan-700"><MarketingIcon name="pill" className="h-7 w-7" /></div>
                <p className="font-bold text-gray-900">창고형 약국</p>
                <p className="text-xs">다제약물 상호작용 통합 관리</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4">
                <div className="mb-1 flex justify-center text-cyan-700"><MarketingIcon name="target" className="h-7 w-7" /></div>
                <p className="font-bold text-gray-900">항암 환자</p>
                <p className="text-xs">부작용 추적·영양/체중 집중 관리</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4">
                <div className="mb-1 flex justify-center text-cyan-700"><MarketingIcon name="user" className="h-7 w-7" /></div>
                <p className="font-bold text-gray-900">시니어 케어</p>
                <p className="text-xs">만성질환 복약 순응도 향상</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6g. Business — 환자별 알레르기·약물 효과 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">환자별 알레르기·약물 효과를 AI가 어떻게 아나</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              <strong>집단학습 + 강화학습</strong>으로 유사군 반응 패턴을 학습하고, 개인 데이터로 최적 용량·시간을 찾습니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-2">1. 초기 설정</h3>
              <p className="text-sm text-gray-700">알레르기·기저질환·복약 이력을 입력 → 금기 약물 자동 필터링.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-2">2. 집단학습</h3>
              <p className="text-sm text-gray-700">유사 연령·체중·질환군의 반응 데이터로 예상 부작용·효과 예측.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-2">3. 강화학습</h3>
              <p className="text-sm text-gray-700">개인 반응 피드백을 반영해 용량·시간·조합 안내를 다듬는 방향을 지향합니다(의료 결정은 전문가에게).</p>
            </div>
          </div>
          <div className="mt-8 bg-indigo-600 text-white rounded-xl p-6 shadow-lg text-center">
            <p className="text-lg font-semibold">
              <span className="text-yellow-300">지향:</span> 기록과 피드백을 바탕으로 약물·용량·타이밍을 <strong>의료진과 상의할 질문 포인트</strong>로 정리하고, 순응을 돕는 안내를 제공합니다(처방·조정은 전문가 판단).
            </p>
          </div>
        </div>
      </section>

      {/* 6h. Business — 데이터·연구 협력 (RWE) */}
      <section id="rwe" className="py-16 lg:py-24 bg-gradient-to-r from-blue-700 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">데이터·연구 협력 — 실사용 증거(RWE)로 신약 개발·임상 지원</h2>
          <p className="text-xl mb-4 max-w-3xl mx-auto text-blue-100">
            <strong>AI 디지털케어로그</strong>로 축적되는 <strong>실사용데이터(RWE)</strong>는 신약 개발, 약물 효과 추적, 치매 예방·임상 등에서 새로운 통찰을 제공합니다.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-blue-100">
            병원·연구기관·제약사와의 공동 연구 및 데이터 사업이 가능한 구조로 설계되어 있습니다.
          </p>
          <div className="mt-8 rounded-2xl overflow-hidden border border-cyan-200/60 bg-white/10 backdrop-blur-sm">
            <img src="/images/services/healthcare-rwe-pipeline.svg" alt="토탈케어로그 데이터·연구 협력 파이프라인 구조도" className="w-full h-auto" />
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-bold text-white mb-2">신약 개발</h3>
              <p className="text-sm text-blue-100">임상 외 일상 데이터로 약물 효과·부작용을 실시간 추적.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-bold text-white mb-2">제약사 협력</h3>
              <p className="text-sm text-blue-100">익명 집계 데이터로 환자 순응도·예후 개선 연구 지원.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-bold text-white mb-2">정부 과제 정합</h3>
              <p className="text-sm text-blue-100">2026 헬스케어AI 과제 표준·호환성·RWE 요구사항 충족.</p>
            </div>
          </div>

          {/* 학습 방법 및 연구 산출물 상세 */}
          <div className="mt-10 bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-left max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-3">학습 방법 — 강화학습 + 집단학습</h3>
            <p className="text-blue-100 mb-4">
              개인의 반응(증상·순응도·부작용)에 따라 <strong>정책을 최적화</strong>하는 <strong>강화학습</strong>과, 유사 환자군 코호트에서 
              <strong>공통 패턴</strong>과 <strong>안전 신호</strong>를 포착하는 <strong>집단학습</strong>을 결합해, 근거 기반 권고의 정확도를 높입니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-xl p-4">
                <h4 className="font-semibold text-white mb-2">강화학습(RL) — 개인 최적화</h4>
                <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
                  <li>복약·생활 권고의 <strong>개인별 정책</strong>을 반응 기반으로 업데이트</li>
                  <li>용량·타이밍·조합의 <strong>개인화 탐색/활용</strong> 균형</li>
                  <li>장기 지표(예후·재내원율·삶의 질)를 <strong>보상함수</strong>로 반영</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <h4 className="font-semibold text-white mb-2">집단학습 — 코호트/시그널</h4>
                <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
                  <li>유사 환자군의 <strong>패턴·이상치·트리거</strong> 탐지</li>
                  <li>부작용 <strong>조기 경보</strong>, 치료 반응 이질성(TEH) 분석</li>
                  <li>코호트 기반 <strong>실세계 비교군</strong>(synthetic control) 생성</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <h4 className="font-semibold text-white mb-2">연구 산출물</h4>
                <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
                  <li>용량-반응 곡선, 위험-편익 프로파일</li>
                  <li>안전성 시그널·상호작용(약물-약물/생활) 탐지</li>
                  <li>프로토콜 순응도·중단 사유 분석, PRO 지표</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <h4 className="font-semibold text-white mb-2">거버넌스·프라이버시</h4>
                <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
                  <li>명시적 <strong>동의/철회</strong>, <strong>감사 로그</strong> 전면 기록</li>
                  <li><strong>비식별/가명처리</strong>, 역할기반 접근제어(RBAC)</li>
                  <li>IRB/DUA 체계, 필요 시 <strong>차등프라이버시</strong> 적용</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 text-sm text-blue-100">
              데이터 스키마: 시계열 로그(노출·행동·결과), 중재·동반질환·생활습관 공변량, 환자보고결과(PRO) 포함.
            </div>
          </div>
        </div>
      </section>

      {/* 7. Service Status */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-semibold mb-4">In Development</span>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">토탈케어로그</h2>
          <p className="text-gray-600">
            토탈케어로그는 AI 디지털케어로그 응용 서비스로 실제 개발 단계에서 지속 업데이트 중입니다. 기존 공개 진입(medicai.kr)은 리뉴얼 및 도메인 변경으로 연결이 중단되었으며, 공개 일정은 확정 시 안내합니다.
          </p>
        </div>
      </section>

      {/* 8. Ecosystem Connection — 에듀케어로그 DAL 플랫폼 연결 패턴 */}
      <section id="healthcare-ecosystem" className="scroll-mt-28 py-12 lg:py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">DAL 플랫폼 연결</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm">
              표면은 다르고, 바닥은 같은 <strong>AI 디지털케어로그</strong>입니다. 토탈케어로그는 그중 <strong>헬스케어 축</strong>이며, 자람이·에듀·시니어·웰니스 축과 맥락을 공유할 때 생활·교육·돌봄·의료 연계 논의가 같은 언어로 이어집니다.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {dalEcosystemLinks.map((e) => (
              <Link
                key={e.href}
                href={e.href}
                className="group rounded-xl p-5 border border-gray-200 bg-white shadow-sm hover:border-teal-300 hover:shadow-md transition-all text-left"
              >
                <p className="font-bold text-gray-900 group-hover:text-teal-800">{e.name}</p>
                <p className="text-xs text-teal-700 mt-1">{e.role}</p>
                <p className="text-sm text-gray-700 mt-2">{e.focus}</p>
                <p className="text-xs text-teal-600 mt-3 font-medium">서비스 페이지 보기 →</p>
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <MarketingIcon name="link" className="h-5 w-5 text-cyan-700" />
                <span>매칭·연계 채널</span>
              </h3>
              <p className="text-sm text-gray-700">
                자람이·시니어앤라이프에서 쌓은 매칭·연계 경험을 헬스케어 시나리오에 맞게 재사용합니다. 도입 기관은 파일럿 범위에서 우선 연결을 설계할 수 있습니다.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <MarketingIcon name="chart" className="h-5 w-5 text-cyan-700" />
                <span>표준 스키마</span>
              </h3>
              <p className="text-sm text-gray-700">
                동의·목적에 맞는 범위에서 케어로그 스키마를 맞추면, 타 DAL 서비스와 건강·생활 데이터를 연동·집계하기 쉬워집니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA — 에듀케어로그와 동일 3갈래(체험 / 제휴 / IR) */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-700 to-secondary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">토탈케어로그를 지금 시작하세요</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            AI 디지털케어로그 기반 헬스케어AI — 일상 기록부터 기관 연계까지 같은 축에서 논의해 보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <span
              className="inline-flex items-center justify-center bg-white/50 text-white/90 px-8 py-3 rounded-lg font-semibold cursor-not-allowed border border-white/40"
              title="리뉴얼·도메인 변경으로 공개 체험 링크 준비 중"
            >
              공개 체험 준비 중
            </span>
            <Link
              href="/contact?type=partner"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              사업·도입·제휴 문의
            </Link>
            <Link
              href="/contact?type=ir"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              IR·투자 문의
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

type MarketingIconName =
  | 'hospital'
  | 'pill'
  | 'trend'
  | 'phone'
  | 'brain'
  | 'baby'
  | 'child'
  | 'user'
  | 'leaf'
  | 'stethoscope'
  | 'target'
  | 'download'
  | 'settings'
  | 'spark'
  | 'link'
  | 'robot'
  | 'chat'
  | 'chart'
  | 'award'
  | 'document'
  | 'tooth'
  | 'syringe'
  | 'dna'
  | 'globe'
  | 'mask'
  | 'alert'
  | 'camera'
  | 'rocket'

function MarketingIcon({ name, className = 'h-6 w-6' }: { name: MarketingIconName; className?: string }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

  if (name === 'hospital') {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path {...common} d="M4 20V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v13M9 20v-4h6v4M12 3v6M9 6h6" />
      </svg>
    )
  }
  if (name === 'pill') return <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><rect {...common} x="3" y="9" width="18" height="6" rx="3" /><path {...common} d="M12 9v6" /></svg>
  if (name === 'trend') return <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path {...common} d="M4 17l6-6 4 4 6-7" /><path {...common} d="M20 8h-4V4" /></svg>
  if (name === 'phone') return <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><rect {...common} x="7" y="2" width="10" height="20" rx="2" /><circle cx="12" cy="18" r="1" fill="currentColor" /></svg>
  if (name === 'brain') return <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path {...common} d="M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0-2 3 3 3 0 0 0 2 3v1a3 3 0 0 0 3 3h1V4H9zm6 0a3 3 0 0 1 3 3v1a3 3 0 0 1 2 3 3 3 0 0 1-2 3v1a3 3 0 0 1-3 3h-1V4h1z" /></svg>
  if (name === 'baby') return <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><circle {...common} cx="12" cy="7" r="3" /><path {...common} d="M6 20a6 6 0 0 1 12 0" /></svg>
  if (name === 'child') return <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><circle {...common} cx="12" cy="6" r="2.5" /><path {...common} d="M8 20v-4l-2-3 3-2 3 2 3-2 3 2-2 3v4" /></svg>
  if (name === 'user') return <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><circle {...common} cx="12" cy="8" r="3.5" /><path {...common} d="M5 20a7 7 0 0 1 14 0" /></svg>
  if (name === 'leaf') return <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path {...common} d="M4 14c8 0 12-4 16-10 2 8-2 16-10 16H8" /><path {...common} d="M8 20c0-4 3-7 8-10" /></svg>
  if (name === 'stethoscope') return <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path {...common} d="M6 4v5a4 4 0 0 0 8 0V4M14 14v2a4 4 0 0 0 8 0v-2" /><circle {...common} cx="20" cy="11" r="2" /></svg>
  if (name === 'target') return <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><circle {...common} cx="12" cy="12" r="8" /><circle {...common} cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /></svg>
  if (name === 'download') return <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path {...common} d="M12 4v10M8 10l4 4 4-4M4 20h16" /></svg>
  if (name === 'settings') return <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><circle {...common} cx="12" cy="12" r="3" /><path {...common} d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.5 2.6-.2-.1a1.7 1.7 0 0 0-2 .4 1.7 1.7 0 0 0-.4 2h-3a1.7 1.7 0 0 0-3.2 0h-3a1.7 1.7 0 0 0-.4-2 1.7 1.7 0 0 0-2-.4l-.2.1L1.3 17l.1-.1A1.7 1.7 0 0 0 1.7 15a1.7 1.7 0 0 0-1.7-1v-3a1.7 1.7 0 0 0 1.7-1 1.7 1.7 0 0 0-.3-1.9L1.3 8l1.5-2.6.2.1a1.7 1.7 0 0 0 2-.4 1.7 1.7 0 0 0 .4-2h3a1.7 1.7 0 0 0 3.2 0h3a1.7 1.7 0 0 0 .4 2 1.7 1.7 0 0 0 2 .4l.2-.1L22.7 8l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.7 1v3a1.7 1.7 0 0 0-1.7 1z" /></svg>
  if (name === 'spark') return <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path {...common} d="M12 3l2.2 5.3L20 10l-5.8 1.7L12 17l-2.2-5.3L4 10l5.8-1.7L12 3z" /></svg>
  if (name === 'link') return <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path {...common} d="M10 14l4-4M7 17a4 4 0 0 1 0-6l3-3a4 4 0 0 1 6 6l-1 1M17 7a4 4 0 0 1 0 6l-3 3a4 4 0 0 1-6-6l1-1" /></svg>
  if (name === 'robot') return <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><rect {...common} x="5" y="7" width="14" height="12" rx="2" /><path {...common} d="M12 3v4M9 12h.01M15 12h.01M8 16h8" /></svg>
  if (name === 'chat') return <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path {...common} d="M5 6h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-4 3v-3H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" /></svg>
  if (name === 'award') return <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><circle {...common} cx="12" cy="8" r="4" /><path {...common} d="M8 12l-2 9 6-3 6 3-2-9" /></svg>
  if (name === 'document') return <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path {...common} d="M7 3h7l5 5v13H7z" /><path {...common} d="M14 3v5h5" /></svg>
  if (name === 'tooth') return <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path {...common} d="M7 4c2 0 2 1 5 1s3-1 5-1c2 0 3 2 3 4 0 4-3 8-4 11-.3.8-1.4.8-1.7 0L12 14l-2.3 5c-.3.8-1.4.8-1.7 0-1-3-4-7-4-11 0-2 1-4 3-4z" /></svg>
  if (name === 'syringe') return <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path {...common} d="M14 4l6 6M3 21l7-7 4 4-7 7H3v-4zM12 6l6 6" /></svg>
  if (name === 'dna') return <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path {...common} d="M7 3c0 6 10 6 10 12M17 3c0 6-10 6-10 12M8 6h8M8 12h8M8 18h8" /></svg>
  if (name === 'globe') return <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><circle {...common} cx="12" cy="12" r="9" /><path {...common} d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg>
  if (name === 'mask') return <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path {...common} d="M4 8c3-2 13-2 16 0v4c0 5-4 8-8 8s-8-3-8-8V8z" /><path {...common} d="M9 12h.01M15 12h.01" /></svg>
  if (name === 'alert') return <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path {...common} d="M12 3l9 16H3L12 3z" /><path {...common} d="M12 9v4M12 16h.01" /></svg>
  if (name === 'camera') return <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><rect {...common} x="3" y="7" width="18" height="13" rx="2" /><circle {...common} cx="12" cy="13.5" r="3.5" /><path {...common} d="M8 7l1.5-2h5L16 7" /></svg>
  if (name === 'rocket') return <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path {...common} d="M14 3c4 1 7 4 8 8l-5 2-5-5 2-5zM11 13l-4 4M6 18l-2 2M10 7L5 9l2 2" /></svg>
  return <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path {...common} d="M4 20h16M7 16h10M9 12h6M10 8h4" /></svg>
}
