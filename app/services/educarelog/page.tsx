import type { Metadata } from 'next'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'EduCareLog – AI 디지털케어로그 기반 교육AI | 드림에이아이랩',
  description: '표준화된 학습·행동 로그를 AI가 분석해 수준 진단, 개인 맞춤 경로, 콘텐츠 추천, 시험 전 집중 루틴까지 자동화합니다. 2026 대한민국 개별화교육 전환을 위한 파트너십 오픈.',
  keywords: [
    'AI 디지털케어로그',
    'EduCareLog',
    '개별화 학습',
    '수준 진단',
    'EBS 연동',
    '교육 데이터 표준',
    '교육AI 파트너십',
    '드림에이아이랩',
    '자람이',
    '특수교육 AI'
  ],
  openGraph: {
    title: 'EduCareLog – AI 디지털케어로그 기반 교육AI',
    description: '학습·행동 로그 표준화 → AI 분석 → 맞춤 실행까지. 학교·학원·지자체 파트너십 모집.',
    url: 'https://dreamailab.com/services/educarelog',
    siteName: 'Dream AI Lab',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EduCareLog – AI 디지털케어로그 기반 교육AI',
    description: '표준 데이터 기반 개별화 학습. 2026 파트너십 오픈.'
  },
  alternates: {
    canonical: 'https://dreamailab.com/services/educarelog'
  }
}

export default function EduCareLogService() {
  const partnerCTAs = [
    { title: '학교·지자체 컨소시엄', description: '지역 단위 개별화교육 전환(시범학교/교육청 사업) 공동 제안', icon: '🤝' },
    { title: '교육 스타트업', description: '기존 LMS/문제은행/튜터링에 CareLog 엔진 임베드', icon: '🧩' },
    { title: '출판·콘텐츠사', description: '교육과정 맵핑·적응형 퀴즈·난이도 루핑 자동화', icon: '📚' },
    { title: '플랫폼/리셀러', description: '화이트라벨·API 기반 B2B 유통/총판', icon: '🛒' }
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'EduCareLog',
    'provider': {
      '@type': 'Organization',
      'name': 'Dream AI Lab',
      'url': 'https://dreamailab.com/'
    },
    'category': 'Education',
    'areaServed': 'KR',
    'description': 'AI Digital CareLog 기반 개별화 학습 서비스. 학습·행동 로그 표준화, AI 수준 진단, 맞춤 경로·콘텐츠 추천, 리포트 자동화.',
    'offers': {
      '@type': 'Offer',
      'category': 'B2B/B2G 파트너십',
      'availability': 'https://schema.org/PreOrder'
    }
  }

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Services",
        "item": "https://dreamailab.com/services"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "EduCareLog",
        "item": "https://dreamailab.com/services/educarelog"
      }
    ]
  }

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "우리는 교육기업인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "아닙니다. 드림에이아이랩은 AI 디지털케어로그 엔진 제공사이며, 학교·학원·지자체·교육사·에듀테크와의 파트너십/임베드를 지향합니다."
        }
      },
      {
        "@type": "Question",
        "name": "어떤 연동을 지원하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "기존 LMS/문제은행과의 API·CSV·Webhook, LTI/OneRoster 스타일 연동을 지원하며, EBS/교육과정 맵핑을 제공합니다."
        }
      },
      {
        "@type": "Question",
        "name": "개인정보·보안은 어떻게 관리하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "학생·학부모 명시적 동의, 최소 수집, 전송/저장 암호화, RBAC·감사로그, 비식별 통계를 원칙으로 합니다."
        }
      },
      {
        "@type": "Question",
        "name": "도입 형태는?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SaaS와 온프레미스 형태를 모두 지원하며, 학교/지자체형·학원형·가정형 패키지가 있습니다."
        }
      },
      {
        "@type": "Question",
        "name": "특수교육 성과를 일반 교육에 적용 가능한가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "특수교육(행동·주의·학습 로그 활용)에서 검증된 개인화 루프를 일반 교육의 과목 학습으로 확장합니다."
        }
      },
      {
        "@type": "Question",
        "name": "파트너십 절차는?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "상담 → 요구정의 → 파일럿(시범학교·기관) → 효과 검증 → 정식 전환 순으로 진행합니다."
        }
      }
    ]
  }

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "EduCareLog 기술 아키텍처(요약)",
    "about": ["AI Digital CareLog", "Personalized Learning", "Education Data Standardization"],
    "author": { "@type": "Organization", "name": "Dream AI Lab" },
    "publisher": { "@type": "Organization", "name": "Dream AI Lab" },
    "inLanguage": "ko",
    "pageStart": "1",
    "isAccessibleForFree": true,
    "proficiencyLevel": "Expert",
    "keywords": "AI 디지털케어로그, EduCareLog, 개별화 학습, 데이터 표준, 학습 로그, 적응형 학습"
  }

  const coreValues = [
    {
      title: '📒 학습기록 표준화',
      description: '과제/평가/참여/메모/미디어',
      icon: '📒'
    },
    {
      title: '🤖 수준 진단',
      description: '성취·오개념·주의 패턴 분석',
      icon: '🤖'
    },
    {
      title: '🎯 맞춤 경로/콘텐츠',
      description: 'EBS/교육과정 연계 추천',
      icon: '🎯'
    },
    {
      title: '👨‍👩‍👧 부모 커넥트',
      description: '가정 학습 플랜·주간 리포트',
      icon: '👨‍👩‍👧'
    }
  ]

  const features = [
    {
      title: '진단평가·학습 이력 자동 분석',
      description: '학생의 학습 이력과 진단평가 결과를 자동으로 분석하여 현재 수준을 파악합니다.',
      icon: '📊'
    },
    {
      title: '수준별 학습 경로 생성',
      description: '복습:신규:보정 비율을 자동으로 조정하여 개인 맞춤 학습 경로를 생성합니다.',
      icon: '🛤️'
    },
    {
      title: 'EBS/교육과정 콘텐츠 추천·퀴즈 자동 생성',
      description: 'EBS와 교육과정을 연계하여 맞춤 콘텐츠를 추천하고 퀴즈를 자동 생성합니다.',
      icon: '📚'
    },
    {
      title: '시험 전 집중 모드',
      description: '1~2주 루틴으로 시험 전 집중 모드를 제공하며 취약 단원을 보완합니다.',
      icon: '🎯'
    },
    {
      title: '수업 전 학습 상태 분석 리포트 / 수업 후 개별 피드백 초안',
      description: '수업 전 학습 상태를 분석하고, 수업 후 개별 피드백 초안을 자동 생성합니다.',
      icon: '📝'
    },
    {
      title: '학부모용 대시보드',
      description: '진도·약점·다음 주 계획을 포함한 학부모용 대시보드를 제공합니다.',
      icon: '👨‍👩‍👧'
    }
  ]

  const workflow = [
    {
      step: '01',
      title: '데이터 입력',
      description: '수업·과제·진단·참여 데이터를 입력합니다.'
    },
    {
      step: '02',
      title: 'AI 분석',
      description: 'AI가 수준/패턴/약점을 분석합니다.'
    },
    {
      step: '03',
      title: '경로·콘텐츠 추천',
      description: '일/주 학습 플랜을 추천합니다.'
    },
    {
      step: '04',
      title: '실행/피드백',
      description: '루틴·리마인드·리포트를 제공합니다.'
    }
  ]

  const targetUsers = [
    {
      title: '학교',
      description: '기초학력 보완, 대규모 반에서의 수준별 수업',
      icon: '🏫'
    },
    {
      title: '학원',
      description: '개별화 커리큘럼·피드백 자동화',
      icon: '📖'
    },
    {
      title: '가정',
      description: '부모가 확인 가능한 주간 플랜과 리포트',
      icon: '🏠'
    },
    {
      title: '취약계층',
      description: '저비용/무상 모델로 교육격차 완화',
      icon: '🤝'
    }
  ]

  const faqs = [
    { question: '우리는 교육기업인가요?', answer: '아닙니다. 드림에이아이랩은 AI 디지털케어로그 엔진 제공사이며, 학교·학원·지자체·교육사·에듀테크와의 파트너십/임베드를 지향합니다.' },
    { question: '어떤 연동을 지원하나요?', answer: '기존 LMS/문제은행과의 API·CSV·Webhook, LTI/OneRoster 스타일 연동을 지원하며, EBS/교육과정 맵핑을 제공합니다.' },
    { question: '개인정보·보안은 어떻게 관리하나요?', answer: '학생·학부모 명시적 동의, 최소 수집, 전송/저장 암호화, RBAC·감사로그, 비식별 통계를 원칙으로 합니다.' },
    { question: '도입 형태는?', answer: 'SaaS와 온프레미스 형태를 모두 지원하며, 학교/지자체형·학원형·가정형 패키지가 있습니다.' },
    { question: '특수교육 성과를 일반 교육에 적용 가능한가요?', answer: '특수교육(행동·주의·학습 로그 활용)에서 검증된 개인화 루프를 일반 교육의 과목 학습으로 확장합니다.' },
    { question: '파트너십 절차는?', answer: '상담 → 요구정의 → 파일럿(시범학교·기관) → 효과 검증 → 정식 전환 순으로 진행합니다.' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              EduCareLog — AI 디지털케어로그 기반 개별화교육 엔진
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto font-semibold text-blue-100">
              학습·행동 로그 표준화 → AI 수준 진단 → <strong className="text-white">맞춤 경로·콘텐츠·리포트 자동화</strong>
            </p>
            
            {/* 핵심 가치 강조 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-white mb-1">학습 로그 표준</p>
                  <p className="text-sm text-blue-100">과제·평가·행동 통합 기록</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white mb-1">AI 분석</p>
                  <p className="text-sm text-blue-100">수준·패턴·약점 진단</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white mb-1">실행 자동화</p>
                  <p className="text-sm text-blue-100">경로·퀴즈·루틴·리포트</p>
                </div>
              </div>
            </div>

            <p className="text-lg max-w-2xl mx-auto text-white/80">
              EBS/교육과정 연계로 누구나, 어디서나, 나에게 맞는 학습을 가능하게 합니다.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs">
              <span className="bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full">개별화 학습</span>
              <span className="bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full">데이터 표준화</span>
              <span className="bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full">AI 엔진</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              EduCareLog 소개
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 text-lg text-gray-600">
              <p>
                EduCareLog는 교사·학생의 학습기록(과제 반응, 진단평가, 주의/집중 패턴 등)을 표준화해 통합 관리합니다.
              </p>
              <p>
                AI가 수준을 진단하고 맞춤 경로·콘텐츠를 추천하며, 시험 전 집중 루틴과 학부모 리포트를 제공합니다.
              </p>
              <p>
                공교육+EBS 연동으로 누구나, 어디서나, 나에게 맞는 학습을 가능하게 합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2026 Positioning Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">2026 시장 포지셔닝 &amp; 제안</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              드림에이아이랩은 의료·돌봄 분야에서 검증된 AI 디지털케어로그 엔진을 교육 도메인으로 확장합니다. 우리는 교육 ‘서비스 제공자’가 아니라, 학교·학원·지자체·에듀테크가 즉시 임베드할 수 있는<span className="font-semibold"> 데이터 표준화 + AI 분석 + 실행 자동화</span> 엔진을 제공합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerCTAs.map((p, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow">
                <div className="text-4xl mb-3">{p.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-600">{p.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact?type=partner" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              파트너십 상담 요청
            </Link>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              핵심 가치
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              EduCareLog가 제공하는 4가지 핵심 가치입니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paradigm Difference Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">왜 다른가 — 로그 기반 개인화 패러다임</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">콘텐츠 추천이나 챗봇 지식 제공에 머무르지 않습니다. <span className="font-semibold">표준화된 학습·행동 로그 → AI 분석 → 맞춤 실행(경로/퀴즈/루틴/리포트) → 환류 학습</span>의 폐루프를 엔진 레벨에서 제공합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow">
              <h3 className="text-xl font-bold mb-3">기존 AI교육</h3>
              <ul className="text-gray-600 space-y-2 list-disc pl-5">
                <li>정답 예측/해설 생성 중심</li>
                <li>콘텐츠 메타데이터 의존</li>
                <li>사용자 맥락 로그의 단절</li>
                <li>실행(수업·루틴·리포트)으로의 연결 약함</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow">
              <h3 className="text-xl font-bold mb-3">EduCareLog</h3>
              <ul className="text-gray-600 space-y-2 list-disc pl-5">
                <li>학습·행동·평가 로그의 표준화/통합</li>
                <li>AI가 <span className="font-semibold">수준·오개념·주의 패턴</span>을 진단</li>
                <li>복습:신규:보정 비율 자동 조정(개인화 루프)</li>
                <li>EBS/교육과정 맵·퀴즈·리포트까지 실행 자동화</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hard Until Now Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">왜 지금까지 어려웠나 — 공교육에서 개인화가 막힌 이유</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              학교 현장은 반당 인원, 시간표, 기록방식의 단절로 인해 개별화가 구조적으로 어렵습니다. 그 결과 맞춤형 학습은 사교육에서만 부분적으로 구현돼 왔습니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold mb-2">분절된 기록</h3>
              <p className="text-gray-600">진단·수업·과제·평가·행동 기록이 교사·학부모·플랫폼별로 흩어져 환류가 불가능.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold mb-2">시간·인력 제약</h3>
              <p className="text-gray-600">대규모 학급에서 학생별 계획·피드백·리포트 작성을 수작업으로 처리하기 어려움.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold mb-2">도구의 한계</h3>
              <p className="text-gray-600">정답 예측/해설 중심의 AI로는 실행(루틴·경로·리포트)까지 이어지는 폐루프 구현이 어려움.</p>
            </div>
          </div>
          <div className="mt-10 bg-blue-50 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-2">EduCareLog가 바꾸는 점</h3>
            <ul className="text-gray-700 list-disc pl-5 space-y-2">
              <li>표준화된 학습·행동 로그를 통합 저장 → 학생 단위의 일관된 데이터 맥락 확보</li>
              <li>AI가 수준·오개념·주의 패턴을 진단 → 개인화 경로·퀴즈·리포트 자동화</li>
              <li>교사·가정·학교 시스템과 연결 → 사교육 영역의 ‘맞춤’을 교실과 가정으로 확장</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Real Users Benefits Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">누가, 어떻게 혜택을 받나요?</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              가정·학교·학원 모두가 실제로 체감하는 변화를 만듭니다.
            </p>
          </div>

          {/* 부모 관점 */}
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-5xl">👨‍👩‍👧</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">부모님의 고민, 이렇게 해결합니다</h3>
                <p className="text-gray-600">사교육비 부담, 아이의 실제 학습 상황을 모르는 불안감을 해소합니다</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">😰 기존 사교육의 문제점</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 월 50-100만원 학원비 지출에도 아이가 정말 이해했는지 모름</li>
                  <li>• 학원-학교-가정의 학습이 따로 놀아 비효율적</li>
                  <li>• 숙제 검사만으로는 아이의 약점을 파악하기 어려움</li>
                  <li>• 여러 학원 다니느라 아이도 부모도 지침</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">✅ EduCareLog로 달라지는 점</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• <strong>투명한 학습 현황</strong>: 학교·학원·집에서의 학습이 하나로 연결</li>
                  <li>• <strong>주간 리포트</strong>: 이번 주 배운 내용, 약점, 다음 주 계획을 자동 전송</li>
                  <li>• <strong>진짜 맞춤형</strong>: AI가 우리 아이만의 오개념·주의 패턴을 분석</li>
                  <li>• <strong>비용 절감</strong>: 불필요한 중복 학원 대신 집중 관리</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3">📱 부모님이 확인할 수 있는 정보</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">오늘의 학습</p>
                  <p className="text-gray-600">학교 수업·학원 과제·집 복습 통합 타임라인</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">약점 분석</p>
                  <p className="text-gray-600">"분수 나눗셈 2단계에서 막힘" 등 구체적 진단</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">추천 학습</p>
                  <p className="text-gray-600">EBS 영상·문제집 추천 + 예상 소요시간</p>
                </div>
              </div>
            </div>
          </div>

          {/* 학교 선생님 관점 */}
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-5xl">👨‍🏫</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">선생님, 이제 수업에만 집중하세요</h3>
                <p className="text-gray-600">행정업무 70% 감소, 30명 학생도 개별 관리 가능</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">😓 현재 학교 현장의 현실</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 30명 학생의 수준별 수업 준비가 물리적으로 불가능</li>
                  <li>• 개별 피드백 작성에 주당 5-10시간 소요</li>
                  <li>• 기초학력 미달 학생 파악은 되지만 대응할 시간 없음</li>
                  <li>• 학부모 상담 시 구체적 데이터 부족</li>
                  <li>• 기존 교육청 시스템은 단순 성적 기록만 가능</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">✅ 선생님이 달라지는 일상</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• <strong>자동 수준 진단</strong>: 수업 전 AI가 학생별 준비도 분석</li>
                  <li>• <strong>맞춤 과제 생성</strong>: 클릭 한 번으로 수준별 문제 자동 배정</li>
                  <li>• <strong>피드백 초안</strong>: AI가 작성한 초안을 검토만 하면 완성</li>
                  <li>• <strong>학부모 리포트</strong>: 주간 학습 현황 자동 발송</li>
                  <li>• <strong>기존 시스템 연동</strong>: NEIS·교육청 플랫폼과 데이터 동기화</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-r from-green-100 to-teal-100 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3">⏰ 시간 절약 효과 (파일럿 실측 데이터)</h4>
              <p className="text-xs text-gray-600 mb-4">※ 2024년 특수학급 교사 10명 대상, 8주 측정 평균값</p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-green-600">-5시간</p>
                  <p className="text-sm text-gray-600">주간 피드백 작성</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-600">-3시간</p>
                  <p className="text-sm text-gray-600">수준별 과제 준비</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-600">-2시간</p>
                  <p className="text-sm text-gray-600">학부모 상담 준비</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-600">+10시간</p>
                  <p className="text-sm text-gray-600">수업 연구 시간 확보</p>
                </div>
              </div>
            </div>
          </div>

          {/* 학원 관점 */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-5xl">🏫</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">학원, 진짜 경쟁력은 데이터입니다</h3>
                <p className="text-gray-600">대형 프랜차이즈도 따라올 수 없는 개인 맞춤 관리</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-yellow-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">💰 학원의 고민</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 원생마다 다른 학교 진도·수준을 어떻게 맞출까?</li>
                  <li>• 학부모 신뢰를 얻으려면 가시적 성과가 필요한데...</li>
                  <li>• 선생님마다 티칭 스타일이 달라 품질 관리 어려움</li>
                  <li>• 중도 이탈 학생이 많은 이유를 모르겠음</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">✅ 차별화 포인트</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• <strong>학교 연계</strong>: 학생의 학교 진도·약점을 실시간 파악</li>
                  <li>• <strong>성과 가시화</strong>: 입학 전후 비교 데이터로 학부모 신뢰 확보</li>
                  <li>• <strong>표준화 관리</strong>: 모든 선생님이 동일한 분석 도구 사용</li>
                  <li>• <strong>이탈 방지</strong>: 학습 몰입도 저하를 조기 감지</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3">📊 학원장이 확인하는 대시보드</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">원생 현황</p>
                  <p className="text-gray-600">수준별 분포·진도율·주의 학생 알림</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">성과 분석</p>
                  <p className="text-gray-600">입학 후 N개월 성적 변화 통계</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">강사 관리</p>
                  <p className="text-gray-600">강사별 학생 만족도·학습 효과</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works for Struggling Students */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">공부 어려운 아이들, 어떻게 도울까요?</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              "우리 아이는 수학을 못해요"가 아니라 "분수 2단계 약분에서 막혔네요"로 바뀝니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">❌ 기존 방식의 한계</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <strong className="text-gray-900">문제:</strong> "수학 40점" → 어디서 틀렸는지 모름<br/>
                  <span className="text-sm text-gray-500">해결책: 무작정 문제집 더 풀기 (비효율)</span>
                </li>
                <li>
                  <strong className="text-gray-900">문제:</strong> 선생님이 모든 학생 약점을 파악할 시간 없음<br/>
                  <span className="text-sm text-gray-500">결과: 상위권만 관리, 하위권 방치</span>
                </li>
                <li>
                  <strong className="text-gray-900">문제:</strong> 부모가 가르치려 해도 교육과정 모름<br/>
                  <span className="text-sm text-gray-500">갈등: "엄마가 가르치면 더 싸운다"</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">✅ EduCareLog의 접근</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <strong className="text-gray-900">1. 정밀 진단:</strong><br/>
                  "분수 나눗셈 2단계(약분)에서 70% 오답" → 정확한 약점 파악
                </li>
                <li>
                  <strong className="text-gray-900">2. 맞춤 학습 경로:</strong><br/>
                  약분 개념 영상(EBS 5분) → 연습문제 3개 → 확인 퀴즈
                </li>
                <li>
                  <strong className="text-gray-900">3. 자동 조절:</strong><br/>
                  이해도에 따라 복습:신규 비율을 60:40 → 40:60으로 변경
                </li>
                <li>
                  <strong className="text-gray-900">4. 부모 가이드:</strong><br/>
                  "이번 주는 약분 집중. 매일 10분씩 이 문제만" (부담 없는 가이드)
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">📈 파일럿 사례: 수학 40점 → 78점 (4개월)</h3>
            <p className="text-blue-100 text-sm mb-4">※ 2024년 특수학급 파일럿 프로그램 실제 데이터</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <p className="text-blue-100 text-sm mb-2">1개월차</p>
                <p className="text-2xl font-bold">기초 다지기</p>
                <p className="text-sm text-blue-200">누락된 선수 개념 보완</p>
              </div>
              <div>
                <p className="text-blue-100 text-sm mb-2">2개월차</p>
                <p className="text-2xl font-bold">정확도 향상</p>
                <p className="text-sm text-blue-200">오개념 패턴 집중 교정</p>
              </div>
              <div>
                <p className="text-blue-100 text-sm mb-2">3개월차</p>
                <p className="text-2xl font-bold">속도 증가</p>
                <p className="text-sm text-blue-200">유형별 반복으로 자동화</p>
              </div>
              <div>
                <p className="text-blue-100 text-sm mb-2">4개월차</p>
                <p className="text-2xl font-bold">자신감 회복</p>
                <p className="text-sm text-blue-200">"나도 할 수 있다" 경험</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Mode Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">시험 강화 모드: 수능까지 대비</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              EBS만이 아닙니다. 내신·모의고사·수능 전 과정을 커버하는 시험 특화 모드
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">내신 집중 모드</h3>
              <p className="text-gray-600 mb-4">시험 2주 전부터 자동 활성화</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 학교 진도와 연계된 예상 문제</li>
                <li>• 취약 단원 우선 복습</li>
                <li>• 선생님 출제 스타일 분석 (옵션)</li>
                <li>• 시험 전날 마무리 체크리스트</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">모의고사 대비</h3>
              <p className="text-gray-600 mb-4">3월·6월·9월 모평 맞춤 훈련</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 최근 3개년 기출 문항 분석</li>
                <li>• 취약 유형 집중 훈련</li>
                <li>• 시간 배분 전략 코칭</li>
                <li>• 오답노트 자동 생성</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">수능 완성 모드</h3>
              <p className="text-gray-600 mb-4">고3 전용 장기 플랜</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 전 과정 개념 재점검 (6개월)</li>
                <li>• EBS 연계 교재 통합 학습</li>
                <li>• 실전 모의고사 매주 풀이</li>
                <li>• 컨디션 관리 알림</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">📚 학습 자료 범위 (EBS 이상)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="font-bold text-gray-900">EBS 콘텐츠</p>
                <p className="text-sm text-gray-600">수능특강·완성<br/>만점마무리</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="font-bold text-gray-900">교과서 연계</p>
                <p className="text-sm text-gray-600">검인정 교과서<br/>단원별 문제</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <p className="font-bold text-gray-900">기출문제</p>
                <p className="text-sm text-gray-600">10개년 수능<br/>모의평가</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <p className="font-bold text-gray-900">AI 생성 문제</p>
                <p className="text-sm text-gray-600">개인 맞춤<br/>난이도 조절</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Different from Other AI Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">기존 교육 AI와 완전히 다른 이유</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              단순 문제 풀이 도우미가 아닙니다. 학습 전 과정을 관리하는 통합 시스템입니다
            </p>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">구분</th>
                  <th className="px-6 py-4 text-left">기존 교육 AI</th>
                  <th className="px-6 py-4 text-left">EduCareLog</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold">핵심 기능</td>
                  <td className="px-6 py-4 text-gray-600">문제 정답 예측·해설 생성</td>
                  <td className="px-6 py-4 text-blue-600 font-semibold">학습 전 과정 로그 분석 + 실행 자동화</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4 font-semibold">데이터 수집</td>
                  <td className="px-6 py-4 text-gray-600">문제 풀이 결과만</td>
                  <td className="px-6 py-4 text-blue-600">학습·행동·주의·시간·환경 통합</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold">개인화 방식</td>
                  <td className="px-6 py-4 text-gray-600">콘텐츠 메타데이터 기반 추천</td>
                  <td className="px-6 py-4 text-blue-600">실제 학습 반응 패턴 기반 적응</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4 font-semibold">교사 역할</td>
                  <td className="px-6 py-4 text-gray-600">AI가 교사 대체 시도</td>
                  <td className="px-6 py-4 text-blue-600">AI가 교사 업무 지원 (협업)</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold">학교 연계</td>
                  <td className="px-6 py-4 text-gray-600">없음 (학원·가정용)</td>
                  <td className="px-6 py-4 text-blue-600">학교-학원-가정 통합</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4 font-semibold">부모 가시성</td>
                  <td className="px-6 py-4 text-gray-600">단순 학습 시간 통계</td>
                  <td className="px-6 py-4 text-blue-600">주간 리포트 + 약점 분석 + 다음 주 계획</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold">실행 연결</td>
                  <td className="px-6 py-4 text-gray-600">분석까지만 (실행은 수동)</td>
                  <td className="px-6 py-4 text-blue-600">진단→경로→퀴즈→루틴→리포트 자동화</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold">기술 기반</td>
                  <td className="px-6 py-4 text-gray-600">LLM 문제 풀이</td>
                  <td className="px-6 py-4 text-blue-600">의료 검증 케어로그 기술 + 교육 적용</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🧠 의료 케어로그 기술이 교육에서 가능한 이유</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">의료 분야 검증 (2022~)</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 발달장애 골든타임·맞춤형치료 자동화 시스템</li>
                  <li>• 개인별 반응 패턴 추적 및 실시간 개입 권고</li>
                  <li>• 다학제 협력 (의사·치료사·가족) 워크플로우</li>
                  <li>• 자람이 플랫폼에서 실전 검증 완료</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">교육 적용 (2024~)</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 학습자별 오개념·주의 패턴 분석</li>
                  <li>• 개인별 학습 속도·스타일 적응</li>
                  <li>• 교사·학부모·학원 협력 시스템</li>
                  <li>• 자동 경로 생성·피드백·리포트</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-white rounded-lg p-4">
              <p className="text-gray-700 text-center">
                <strong className="text-indigo-600">핵심 차별점:</strong> 단순 콘텐츠 추천이 아닌, 
                <strong> 개인의 실제 반응 데이터를 장기 추적</strong>하여 진단→실행→환류의 폐루프를 구현
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proprietary Technology Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">드림에이아이랩의 차별화된 기술력</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              AI 디지털케어로그는 의료 현장에서 검증된 드림에이아이랩의 <strong>독자 기술</strong>입니다
            </p>
            <div className="mt-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 max-w-5xl mx-auto">
              <p className="text-sm font-semibold text-gray-900 mb-2">🏆 세계 최고 수준의 독자 기술</p>
              <div className="flex flex-wrap justify-center gap-3 text-xs">
                <span className="bg-white px-3 py-1 rounded-full text-gray-700 font-medium">
                  ✓ 행동·학습 통합 데이터 분석 엔진
                </span>
                <span className="bg-white px-3 py-1 rounded-full text-gray-700 font-medium">
                  ✓ 의료급 표준 스키마 설계
                </span>
                <span className="bg-white px-3 py-1 rounded-full text-gray-700 font-medium">
                  ✓ 실시간 환류 파이프라인
                </span>
                <span className="bg-white px-3 py-1 rounded-full text-gray-700 font-medium">
                  ✓ 다주체 협력 워크플로우
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* 기술 핵심 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">⚡</div>
                <h3 className="text-2xl font-bold text-gray-900">독자 기술 핵심</h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4 mb-4 border-l-4 border-yellow-500">
                  <p className="text-xs font-bold text-yellow-800 mb-1">🌍 세계 최초 기술</p>
                  <p className="text-sm text-gray-700">
                    <strong>AI 디지털케어로그</strong> — 의료·교육 통합 행동-학습 데이터 표준 스키마 및 
                    실시간 환류 파이프라인 상용화
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-indigo-600 mb-2">기술 개발 과정</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>
                      <strong>2022:</strong> 자람이 플랫폼 개발 — 발달장애 아동 행동·치료 로그 표준화, 
                      <strong className="text-indigo-600">초개인화 AI 엔진</strong> 구축
                    </li>
                    <li>
                      <strong>2022~2024:</strong> 의료 현장 검증 — 
                      <strong>골든타임 실시간 알림</strong>, 
                      <strong>개별 맞춤 치료 계획</strong> 자동 생성 및 효과 추적
                    </li>
                    <li>
                      <strong>2024:</strong> 특수학급 교사들의 피드백 
                      <em>"이 시스템이면 일반 학생도 충분히 관리 가능하겠다"</em> → EduCareLog 확장 개발 결정
                    </li>
                    <li>
                      <strong>2025~2026:</strong> 일반 교육 적용 — 학교·학원·가정 통합 파일럿 진행
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-blue-600 mb-2">1. 다차원 데이터 통합 분석 엔진</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    학습 결과(정답/오답)뿐 아니라 <strong>행동 로그(클릭·이탈·재시청), 주의 패턴(집중시간·중단지점), 
                    환경 변수(시간대·요일·장소)</strong>를 단일 스키마로 통합 분석
                  </p>
                  <div className="bg-blue-50 rounded-lg p-3 text-xs text-gray-600">
                    <strong className="text-blue-700">독자 기술:</strong> 기존 교육 AI는 문제 풀이 결과만 분석. 
                    우리는 의료급 정밀도로 학습자의 <strong>행동·주의·정서</strong>까지 추적하는 멀티모달 분석 구현
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-blue-600 mb-2">2. 의료급 표준 스키마 설계</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    발달장애 치료 현장에서 검증된 <strong>FHIR 수준의 표준 데이터 구조</strong>를 교육에 적용
                  </p>
                  <div className="bg-blue-50 rounded-lg p-3 text-xs text-gray-600">
                    <strong className="text-blue-700">독자 기술:</strong> 의료 분야의 
                    <strong>HL7 FHIR 표준</strong>에 준하는 엄격한 스키마 설계로 
                    학교-학원-가정 간 데이터 호환성 보장
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-blue-600 mb-2">3. 실시간 환류 파이프라인</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>AI 제안 → 학생 반응 → 효과 측정 → 모델 재조정</strong>이 
                    실시간(수분 내)으로 작동하는 폐루프 시스템
                  </p>
                  <div className="bg-blue-50 rounded-lg p-3 text-sm text-gray-700">
                    <p className="mb-1"><strong>실제 작동 예시:</strong></p>
                    <p className="mb-1 text-xs">• 10:00 — AI가 "분수 약분 영상 10분" 추천</p>
                    <p className="mb-1 text-xs">• 10:05 — 학생이 5분만 보고 종료 + 퀴즈 3문제 중 1개 정답</p>
                    <p className="mb-1 text-xs">• 10:06 — AI가 "영상 너무 길다" 판단, 다음엔 3분 짧은 영상 + 연습문제 먼저 제시</p>
                    <p className="text-xs">• 2주 후 — 약분 정답률 80% 달성, 이 패턴을 다른 단원에도 적용</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 text-xs text-gray-600 mt-2">
                    <strong className="text-blue-700">독자 기술:</strong> 기존 AI는 주/월 단위 배치 학습. 
                    우리는 <strong>강화학습 기반 실시간 재학습</strong>으로 즉각 적응
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-blue-600 mb-2">4. 강화학습 기반 집단 지능</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>사용자가 많아질수록 더욱 똑똑해지는</strong> 네트워크 효과
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>집단학습:</strong> 수천 명의 학습 패턴에서 최적 경로 자동 발견</li>
                    <li>• <strong>강화학습:</strong> 효과적인 개입에 높은 보상, 비효율적 개입은 자동 배제</li>
                    <li>• <strong>전이학습:</strong> A학생에게 효과적이던 방법을 B학생에게 시도</li>
                  </ul>
                  <div className="bg-blue-50 rounded-lg p-3 text-xs text-gray-600 mt-2">
                    <strong className="text-blue-700">독자 기술:</strong> 교육 분야 최초로 
                    <strong>의료급 강화학습 파이프라인</strong> 구현 (치료 효과 추적 → 보상 모델 → 정책 최적화)
                  </div>
                </div>
              </div>
            </div>

            {/* 개발자와 기술 배경 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">�‍💻</div>
                <h3 className="text-2xl font-bold text-gray-900">기술 개발 배경</h3>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-indigo-600 mb-2">정해성 CTO (AI 연구자)</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>AI 디지털케어로그 창시자</strong> — 발달장애 아동 치료 현장에서 
                    <strong className="text-indigo-600"> 골든타임과 맞춤형치료의 한계</strong>를 직접 
                    목격하고 <strong>특수교사 이지수·이지훈</strong>과 함께 기술 개발 결심
                  </p>
                  <div className="bg-white rounded p-3 text-sm text-gray-600">
                    <p className="mb-2"><strong className="text-gray-900">문제 인식:</strong></p>
                    <p className="mb-1">• 발달장애 치료는 골든타임(조기개입)이 핵심</p>
                    <p className="mb-1">• 하지만 치료사 부족, 비용 문제로 실무에서 실현 불가</p>
                    <p className="mb-1">• 맞춤형 치료 계획을 세워도 실행·추적이 어려움</p>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4">
                  <h4 className="font-bold text-red-700 mb-2">🎯 왜 발달장애에서 시작했는가</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>특수교육은 일반교육보다 난이도가 비교할 수 없이 높습니다</strong>
                  </p>
                  <div className="space-y-2 text-xs text-gray-600">
                    <div className="bg-white rounded p-2">
                      <p className="font-semibold text-gray-900 mb-1">특수교육의 난이도</p>
                      <ul className="space-y-1">
                        <li>• 학생마다 <strong>완전히 다른</strong> 장애 유형·정도 (자폐·ADHD·지적장애 등)</li>
                        <li>• 같은 내용도 <strong>개별 맞춤 방식</strong> 필요 (시각·청각·촉각 선호도 다름)</li>
                        <li>• <strong>돌발 행동·감각 과민</strong> 실시간 대응 (일반 학생보다 10배 변수)</li>
                        <li>• 진도보다 <strong>개별 발달 단계</strong> 추적이 우선</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded p-2">
                      <p className="font-semibold text-gray-900 mb-1">특수교육 맞춤형의 실제</p>
                      <ul className="space-y-1">
                        <li>• A학생: 소리에 민감 → 조용한 환경 + 그림카드 중심</li>
                        <li>• B학생: 주의 3분 유지 → 3분 단위 활동 분절 + 보상 빈도 증가</li>
                        <li>• C학생: 특정 주제 집착 → 관심사로 다른 개념 연결</li>
                        <li>• 매일 상태 변화 → 오늘 효과적이던 방법이 내일은 안 통함</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-4">
                  <h4 className="font-bold text-green-700 mb-2">✅ 일반 교육은 왜 더 쉬운가</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>특수교육에서 성공했다면, 일반교육은 충분히 가능합니다</strong>
                  </p>
                  <div className="space-y-2 text-xs text-gray-600">
                    <div className="bg-white rounded p-2">
                      <p className="font-semibold text-gray-900 mb-1">일반교육의 상대적 단순함</p>
                      <ul className="space-y-1">
                        <li>• 학생 간 차이가 <strong>수준·속도 차이</strong>로 대부분 설명됨</li>
                        <li>• 표준 교육과정이 있어 <strong>목표가 명확</strong>함</li>
                        <li>• 돌발 변수가 특수교육 대비 <strong>1/10 수준</strong></li>
                        <li>• 대부분 학생이 <strong>시각·청각 일반 입력</strong>에 반응</li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-r from-green-100 to-teal-100 rounded p-3 mt-2">
                      <p className="text-sm text-gray-800">
                        <strong className="text-green-700">결론:</strong> 
                        발달장애 아동의 <strong>초개인화·실시간 적응</strong>이 가능했다면, 
                        일반 학생의 "수학 약한 아이"나 "주의력 짧은 아이" 대응은 
                        <strong className="text-green-700"> 기술적으로 훨씬 단순</strong>합니다
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded p-4">
                  <p className="text-sm text-gray-700">
                    <strong className="text-yellow-700">개발 철학:</strong><br/>
                    "교육 격차의 본질은 '학습량'이 아니라 '개인 맞춤 관찰'입니다. 
                    고가 과외가 효과적인 이유는 1:1로 아이의 반응을 실시간 관찰하기 때문입니다. 
                    발달장애 아동에게 필요한 <strong>초정밀 관찰·실시간 적응 기술</strong>을 
                    일반 교육에 적용하면, 모든 아이가 맞춤형 교육을 받을 수 있습니다."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 독자 기술 요약 */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">📌 독자 기술 3대 강점</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🏥</div>
                <h4 className="font-bold text-gray-900 mb-2">의료 현장 검증</h4>
                <p className="text-sm text-gray-600">
                  2022년부터 발달장애 치료 현장에서 단련된 
                  <strong>골든타임·맞춤형치료</strong> 자동화 시스템
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🔄</div>
                <h4 className="font-bold text-gray-900 mb-2">환류 폐루프</h4>
                <p className="text-sm text-gray-600">
                  <strong>강화학습·집단학습</strong>으로 
                  사용자가 많을수록 더욱 똑똑해지는 구조
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">👨‍👩‍👧‍👦</div>
                <h4 className="font-bold text-gray-900 mb-2">협력 중심 설계</h4>
                <p className="text-sm text-gray-600">
                  AI가 교사를 대체하는 게 아니라 
                  <strong>교사·부모·학원이 협력</strong>하도록 
                  워크플로우 설계
                </p>
              </div>
            </div>
            <div className="mt-6 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-4">
              <p className="text-center text-gray-700">
                <strong className="text-blue-600">단순 LLM 기반 교육 AI와의 차이:</strong> 
                문제 풀이 도우미가 아닌, <strong>장기 학습 여정을 관리하는 AI 코파일럿</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              기능 상세
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              EduCareLog가 제공하는 6가지 핵심 기능입니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">표준 · 연동 · 상호운용성</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto text-center mb-8">
            교육과정 맵, 문제 메타, 활동 로그 스키마를 통합하고, LTI/OneRoster 스타일 연동, CSV/API 양방향 동기화, EBS·공교육 리소스 매핑을 지원합니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6"><h3 className="font-bold mb-2">데이터 표준</h3><p className="text-gray-600">활동/평가/행동/주의/메모/미디어 이벤트 스키마</p></div>
            <div className="bg-gray-50 rounded-xl p-6"><h3 className="font-bold mb-2">연동</h3><p className="text-gray-600">LMS/문제은행/LRS와 API·Webhook</p></div>
            <div className="bg-gray-50 rounded-xl p-6"><h3 className="font-bold mb-2">거버넌스</h3><p className="text-gray-600">RBAC·감사로그·동의관리</p></div>
          </div>
        </div>
      </section>

      {/* Technical Architecture Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">기술 아키텍처(요약)</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              표준화된 로그 수집 → 특징 추출 → 수준 진단 → 개인화 루프 → 실행·리포트의 폐루프 구조로 동작합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold mb-2">1. 표준화 수집</h3>
              <p className="text-gray-600">수업·과제·평가·행동·주의·메모·미디어 이벤트를 공통 스키마로 수집</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold mb-2">2. 특징 추출</h3>
              <p className="text-gray-600">정답/오답 패턴, 반응시간, 이탈, 난이도 민감도, 최근성 가중치 계산</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold mb-2">3. 수준 진단</h3>
              <p className="text-gray-600">과목·단원·기초기능별 성취/오개념/주의 패턴을 추정</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold mb-2">4. 개인화 루프</h3>
              <p className="text-gray-600">복습:신규:보정 비율 α:β:γ 최적화, 적응형 난이도 루핑</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold mb-2">5. 실행·환류</h3>
              <p className="text-gray-600">경로·퀴즈·루틴·리포트 자동 생성 → 실행 로그가 다시 학습</p>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold text-gray-900 mb-2">스키마 예시(JSON)</h3>
              <pre className="text-xs bg-gray-900 text-gray-100 rounded p-4 overflow-auto">{`{
  "event_time": "2025-11-12T10:20:31+09:00",
  "student_id": "anon_8f3a",
  "subject": "math",
  "unit": "addition.carry",
  "event_type": "quiz_attempt",
  "response": {"choice":"B","correct":false,"latency_ms":4200},
  "context": {"attention":"low","session":"classroom"},
  "note": "confused when carrying"
}`}</pre>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold text-gray-900 mb-2">개인화 루프(요지)</h3>
              <ul className="text-gray-700 list-disc pl-5 space-y-2">
                <li>성취추정 <span className="font-mono">p(unit|student)</span> 업데이트(최근성/난이도 가중)</li>
                <li>오개념 집약도 <span className="font-mono">misconception_score</span> 계산</li>
                <li>루틴 최적화: <span className="font-mono">α:β:γ = f(p, misconception, attention)</span></li>
                <li>다음 세션 후보군 → 콘텐트 선택 → 실행 → 로그 환류</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Logs Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">실전 로그 스니펫(모의)</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">개인정보를 제거한 형태의 흐름 예시입니다.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <pre className="text-xs bg-gray-900 text-gray-100 rounded p-4 overflow-auto">{`[10:02:11] ingest  | anon_8f3a | quiz_attempt | math.addition.carry | correct=false | latency=4200ms
[10:02:12] analyze | anon_8f3a | misconception_score=0.72 | attention=low
[10:02:12] plan    | anon_8f3a | ratio alpha:beta:gamma = 0.6:0.2:0.2
[10:02:13] select  | anon_8f3a | next=math.addition.carry.practice_set#3 | difficulty=easy
[10:02:14] report  | anon_8f3a | parent_digest queued (Fri 18:00)
`}</pre>
          </div>
        </div>
      </section>

      {/* Edutech Comparison Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">에듀테크 비교(엔진 레벨)</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">겉 UI/챗봇이 아니라, 백엔드 엔진의 차이를 기준으로 비교합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow">
              <h3 className="text-xl font-bold mb-3">문항생성형</h3>
              <ul className="text-gray-600 list-disc pl-5 space-y-2">
                <li>강점: 빠른 콘텐츠 확장</li>
                <li>한계: 학생 로그 맥락 부족, 난이도 루핑/환류 약함</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow">
              <h3 className="text-xl font-bold mb-3">튜터봇형</h3>
              <ul className="text-gray-600 list-disc pl-5 space-y-2">
                <li>강점: 대화형 설명·힌트</li>
                <li>한계: 대화 로그 중심, 학습·행동 이벤트의 표준화 부족</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow">
              <h3 className="text-xl font-bold mb-3">로그 기반 개인화 엔진(EduCareLog)</h3>
              <ul className="text-gray-600 list-disc pl-5 space-y-2">
                <li>강점: 표준화된 학습·행동 로그 → 수준 진단 → 실행 자동화의 폐루프</li>
                <li>강점: 복습:신규:보정 비율 최적화, 시험 전 집중 루틴</li>
                <li>한계: 초기 로그 축적 기간 필요(첫 1~2주)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Checklist Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">검증 체크리스트(투자/도입)</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">“말”이 아니라 “기술”인지 확인할 수 있는 항목들입니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <ul className="text-gray-700 list-disc pl-5 space-y-2">
                <li>표준 스키마 공개 여부(아카이브 링크)</li>
                <li>로그 예시·의사코드 공개(PII 제거)</li>
                <li>오개념/주의 패턴 산출 로직 요약 문서</li>
                <li>내부 평가 루틴(offline eval) 설명</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <ul className="text-gray-700 list-disc pl-5 space-y-2">
                <li>감사로그/설명가능 리포트 샘플</li>
                <li>성능·안정성 지표(처리 지연, 실패율) 범위</li>
                <li>보안·동의·거버넌스 정책 문서</li>
                <li>교실/가정 파일럿 결과(정성 사례 중심)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              사용 흐름
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              EduCareLog와 함께하는 4단계 맞춤 학습 프로세스입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflow.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Personalization Examples Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">실제 맞춤형 동작(예시)</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">아래 예시는 동일 학급 내 서로 다른 학습 로그를 가진 학생에게 어떻게 다르게 작동하는지 보여줍니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold text-gray-900 mb-2">사례 A · 연산 오개념</h3>
              <p className="text-gray-600">최근 2주 ‘받아올림’ 오류 비율↑ → 복습:신규:보정 = 6:2:2로 조정, 오류 유형 집중 퀴즈 자동 생성, 주 2회 부모 리마인드.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold text-gray-900 mb-2">사례 B · 주의 산만</h3>
              <p className="text-gray-600">수업 중 이탈 로그↑ → 짧은 세션·빈도↑로 루틴 재구성, 난이도 루핑 완화, 시험 전 7일 집중모드로 전환.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold text-gray-900 mb-2">사례 C · 상위권 심화</h3>
              <p className="text-gray-600">정답률 높고 속도 빠름 → 심화 과제 비중↑, 탐구형 문항 추천, 발표/서술 리포트 초안 자동생성.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Users Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              적용 대상
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              다양한 교육 환경에서 EduCareLog가 어떻게 활용되는지 확인해보세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {targetUsers.map((user, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="text-5xl mb-4">{user.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{user.title}</h3>
                <p className="text-gray-600">{user.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              차별점
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              EduCareLog만의 독특한 특징들입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">교육 표준 스키마 + 공교육/EBS 연동</h3>
              <p className="text-gray-600">
                교육 표준을 따르는 데이터 구조와 EBS 콘텐츠를 연동하여 체계적인 학습을 지원합니다.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow">
              <div className="text-4xl mb-4">👨‍🏫</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">교사 업무 경감(리포트/피드백 자동화)</h3>
              <p className="text-gray-600">
                리포트 작성과 개별 피드백을 자동화하여 교사의 업무 부담을 줄이고 교육에 집중할 수 있게 합니다.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">개인화 루프(실적 기반 복습:신규:보정 비율 자동 조정)</h3>
              <p className="text-gray-600">
                학습 실적을 기반으로 복습, 신규 학습, 보정의 비율을 자동으로 조정하여 최적의 학습 경로를 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Policy Alignment Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">정책·공교육 정합성 — 사교육 의존 완화의 경로</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">개별화교육을 국가 정책 차원에서 추진하고 있으나, 현장은 실행 도구와 데이터 표준의 부재로 어려움을 겪고 있습니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold mb-2">현장의 난점</h3>
              <ul className="text-gray-600 list-disc pl-5 space-y-2">
                <li>기록 분산(수기/플랫폼 혼재)과 수업-과제-평가 간 연결 단절</li>
                <li>학생별 계획·리포트 작성의 과부하</li>
                <li>학교-가정 간 데이터 공유·동의·보안에 대한 우려</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold mb-2">EduCareLog 해법</h3>
              <ul className="text-gray-600 list-disc pl-5 space-y-2">
                <li>표준화된 로그·스키마 기반으로 수업-과제-평가-행동 데이터를 연속성 있게 연결</li>
                <li>AI가 경로·퀴즈·리포트를 자동화하여 교사 업무 경감</li>
                <li>동의·거버넌스·암호화 원칙으로 안전한 학교-가정 연계</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 bg-white rounded-xl p-6 shadow">
            <h3 className="font-bold mb-2">학교·가정에서 구현되는 개인화</h3>
            <p className="text-gray-600">사교육에서만 가능하던 ‘맞춤’이 교실·가정 루틴으로 전환됩니다. 학습 로그가 축적될수록 개인화 품질이 개선되어, 장기적으로 사교육 의존도를 완화하는 경로를 제시합니다.</p>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">윤리 · 보안 · 동의</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">학생·학부모 명시적 동의, 최소 수집, 지역/기관 경계 존중, 목적 외 사용 금지, 전송·저장 암호화, 비식별 통계 처리 원칙을 따릅니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow"><h3 className="font-bold mb-2">동의·거버넌스</h3><p className="text-gray-600">학부모 동의·철회, RBAC, 감사로그</p></div>
            <div className="bg-white rounded-xl p-6 shadow"><h3 className="font-bold mb-2">보안</h3><p className="text-gray-600">전송/저장 암호화, 분리 보관</p></div>
            <div className="bg-white rounded-xl p-6 shadow"><h3 className="font-bold mb-2">윤리</h3><p className="text-gray-600">편향 점검, 설명가능 리포트</p></div>
          </div>
        </div>
      </section>

      {/* Roadmap 2026 Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">로드맵 2026</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">특수교육에서 검증된 엔진을 일반 교육으로 확장합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold mb-2">Q1</h3>
              <p className="text-gray-600">교육과정 맵 확장 · 적응형 퀴즈 v2 · 시험 전 집중 루틴 v2</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold mb-2">Q2</h3>
              <p className="text-gray-600">OneRoster/LTI 호환 모듈 · 학부모 리포트 v2</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold mb-2">Q3</h3>
              <p className="text-gray-600">적응형 커리큘럼 자동 편성 · 교육청 시범사업</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold mb-2">Q4</h3>
              <p className="text-gray-600">전국 확산 레퍼런스 구축 · 화이트라벨 패키지</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              자주 묻는 질문
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              EduCareLog에 대해 궁금한 점들을 확인해보세요.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Content Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">관련 콘텐츠</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              더 깊이 있는 자료를 보려면 아래 콘텐츠를 확인하세요.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/news/63" className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">사례: 특수교육에서 일반교육으로</h3>
              <p className="text-gray-600">실제 적용 사례와 결과 데이터를 요약한 뉴스 포스트</p>
            </Link>
            <Link href="/technology/educarelog" className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">에듀케어로그 기술 백서</h3>
              <p className="text-gray-600">AI 디지털케어로그의 교육 특화 응용 기술 구조 및 구현 방법론</p>
            </Link>
            <Link href="/news/64" className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">2026 파트너십 오픈 발표</h3>
              <p className="text-gray-600">학교·지자체 컨소시엄 및 스타트업 협력 계획 발표</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            지금 바로 맞춤형 학습을 시작하세요
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            공공·민간 교육 파트너와 함께 2026 개별화교육 전환을 추진합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              학교/기관 도입 문의
            </Link>
            <Link 
              href="/contact?type=partner"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              파트너십 상담
            </Link>
          </div>
        </div>
      </section>

      

      <Footer />
    </div>
  )
}
