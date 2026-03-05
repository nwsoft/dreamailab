import type { Metadata } from 'next'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI 디지털케어로그 | 발달장애 표준 기술 | 자람이 | 드림에이아이랩',
  description:
    '발달장애 치료·학습을 위한 AI 디지털케어로그. 데이터 표준·기관 연계·AI 강화학습 기반 맞춤형 치료·학습. 전국 5,700개 기관 등록, 베타 테스트 중. 가정·학교·센터·병원 통합, 실시간 AI 분석. DAL 플랫폼 1번 도메인. AI 엔진형 Middleware.',
  keywords: 'AI 디지털케어로그, 발달장애 표준, 맞춤형 치료, 맞춤형 학습, 골든타임, 발달장애 치료 방법, ADHD 치료, 자폐증 치료, 특수교육, 언어치료, 작업치료, 행동치료 ABA, IEP 개별화교육계획, 치료사 협업, 다기관 연계, 자람이, 드림에이아이랩, 케어로그 표준화, 강화학습, Middleware, AI 엔진',
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

export default function JarameService() {
  // ===== 브랜드/자람이 상수 =====
  const brand = {
    name: '자람이',
    english: 'Jarame',
    domain: 'jarame.or.kr',
    slogans: [
      '발달장애, 그 이후까지 함께 케어합니다.',
      'AI 디지털케어로그로 치료의 새로운 표준을 만듭니다',
      '자람이 – 발달장애 가족의 든든한 동반자',
    ],
  }
  const coreFeatures = [
    {
      title: 'AI 디지털케어로그(핵심)',
      description: '가정·학교·센터·병원의 기록을 하나의 표준 로그로 통합합니다.',
      icon: '📒',
      details: ['행동/세션/숙제/출석/약물/평가 표준화', '권한·동의·감사 추적(RBAC)', '리포트/내보내기(IEP·진료 메모 연계)']
    },
    {
      title: 'AI 상담 & 권장안',
      description: '증상/기록/패턴을 바탕으로 초기 탐색과 행동·교육 권장안을 제공합니다.',
      icon: '🤖',
      details: ['증상 기반 Q&A·초기 스크리닝', '케어로그 맥락 반영 맞춤 조언', '위험 신호 알림(조기 개입)']
    },
    {
      title: 'AI 리포트(일·주·월)',
      description: '기간별 성과·변화·이상 징후를 자동 요약합니다.',
      icon: '📊',
      details: ['그래프/추이 시각화', '목표-개입-결과 연결 분석', '공유용 PDF/링크']
    },
    {
      title: '자가진단 모듈',
      description: 'M‑CHAT, AQ‑50, Vanderbilt, ASRS 등 설문 기반 자체 점검을 지원합니다.',
      icon: '🧩',
      details: ['연령/대상별 설문 제공', '결과 요약과 다음 단계 안내', '개인정보/동의 절차 준수']
    },
    {
      title: '기관 연동 & RBAC',
      description: '센터·병원·학교·담당자 간 협업과 안전한 접근 제어를 제공합니다.',
      icon: '🏥',
      details: ['기관/담당자 권한 관리', '기록 공유 범위 설정', '이력/감사 로그']
    },
    {
      title: '학교 관리자 대시보드',
      description: '학급/교사/학생/출석·성과 요약과 일정·교육과정을 관리합니다.',
      icon: '🏫',
      details: ['학급·교사·학생 현황', '출석/성과 통계', '교육과정·일정·리포트']
    },
    {
      title: '홈티 매칭',
      description: '집에서 치료가 필요한 아동에게 특수교사를 안전하게 연결합니다.',
      icon: '🏠',
      details: ['요청/구직 양면 게시판', '상호 승인·프로필 검증', '세션 기록=케어로그 연동']
    },
    {
      title: '통계/연구(익명 집계)',
      description: '익명화된 집계 데이터로 정책·연구·서비스 개선에 기여합니다.',
      icon: '📈',
      details: ['집계 통계 대시보드', '데이터 내보내기(익명화)', '윤리/보안 원칙 준수']
    }
  ]

  const categories = [
    {
      name: '성인 ADHD',
      description: '성인 ADHD 진단, 치료, 일상 관리에 대한 전문 정보와 상담을 제공합니다.',
      icon: '🧠'
    },
    {
      name: '경계성지능',
      description: '경계성지능 아동을 위한 맞춤형 교육과 치료 방향을 제시합니다.',
      icon: '📈'
    },
    {
      name: '소아정신과',
      description: '소아정신과 진료와 치료에 대한 전문적인 정보와 상담을 제공합니다.',
      icon: '👶'
    }
  ]

  const businessModel = [
    {
      phase: 'MVP',
      title: '초기 서비스',
      description: 'AI 상담 + 홈티 매칭 + 정보 제공',
      revenue: '무료 또는 베타 기반'
    },
    {
      phase: '정식 런칭',
      title: '수익화 시작',
      description: '포인트 과금, 유료 리포트, 기관 입점',
      revenue: '구독, 포인트, 입점비'
    },
    {
      phase: '표준화',
      title: '플랫폼 확장',
      description: '리포트 포맷 보급, 기관용 기록 시스템',
      revenue: '기관용 SaaS 또는 리포트 API'
    },
    {
      phase: '파트너십',
      title: '생태계 구축',
      description: '병원/복지관, 지자체 제휴',
      revenue: '공공지원금, 교육/정책 협력'
    }
  ]

  const team = [
    {
      name: '이지수',
      role: '발달장애 특수교사',
      description: '발달장애 아동 교육 전문가'
    },
    {
      name: '이지훈',
      role: '발달장애 특수교사',
      description: '특수교육 현장 경험 전문가'
    },
    {
      name: '정해성',
      role: '개발자',
      description: 'AI 플랫폼 개발 전문가'
    }
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://dreamailab.com/services/jarame",
    "url": "https://dreamailab.com/services/jarame",
    "name": "자람이 | 발달장애 AI 디지털케어로그 · Care Data Infrastructure",
    "description": "발달장애 골든타임과 맞춤형 치료·학습을 실현하는 AI 표준 기술. 가정·학교·센터·병원 통합 기록 + 실시간 AI 분석.",
    "inLanguage": "ko-KR",
    "datePublished": "2022-01-01",
    "dateModified": "2025-11-12",
    "isPartOf": { "@id": "https://dreamailab.com/#website" }
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "자람이는 어떤 서비스인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "자람이는 발달장애 아동의 가정·학교·센터·병원 기록을 하나의 표준 케어로그로 통합하고, 실시간 AI 분석·환류로 맞춤형 치료·학습 계획을 제안하는 Care Data Infrastructure입니다. 표준 스키마·다기관 연계·기관 베타 검증을 통해 골든타임과 효과적 치료·교육을 지원합니다."
        }
      },
      {
        "@type": "Question",
        "name": "발달장애 아이 치료 어떻게 시작하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "자람이에서 무료 AI 상담과 자가진단(M-CHAT, AQ-50 등)으로 시작할 수 있습니다. AI가 아이의 증상을 분석하여 적합한 치료 방향(언어치료, ABA, 감각통합 등)을 제안하고, 가까운 치료센터·병원 정보를 안내합니다. 가정에서도 바로 시작할 수 있는 중재 가이드를 제공합니다."
        }
      },
      {
        "@type": "Question",
        "name": "ADHD 치료와 자폐증 치료 방법이 다른가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "네, 완전히 다릅니다. ADHD는 주의력·충동 조절에 초점을 맞추고(약물치료+행동치료), 자폐증(ASD)은 사회적 상호작용·의사소통 개선에 중점을 둡니다(ABA, 언어치료, 감각통합). 자람이 AI는 개인별 증상 패턴을 분석하여 최적의 치료 조합을 제안합니다."
        }
      },
      {
        "@type": "Question",
        "name": "자람이를 사용하는 기관은 몇 개인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "전국 약 5,700개의 특수교육 기관, 발달장애 치료센터, 소아정신과 병원이 자람이 커뮤니티에 등록되어 있습니다. 현재 일부 센터·병원·특수교사와 베타 테스트 중이며, 정부 정책과 연계한 전국 확대를 준비하고 있습니다. 2022년부터 기술 개발을 시작해 2025년 초 완성되었습니다."
        }
      },
      {
        "@type": "Question",
        "name": "발달장애 골든타임이 왜 중요한가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "발달장애는 조기 발견·조기 치료가 예후에 결정적입니다. 특히 만 3-6세는 뇌 가소성이 가장 높은 시기로, 이때 집중 치료를 받으면 언어·사회성·인지 능력이 크게 향상됩니다. 자람이는 실시간 AI 분석으로 이상 징후를 조기 탐지하고, 즉시 맞춤형 중재를 제안하여 골든타임을 지킵니다."
        }
      },
      {
        "@type": "Question",
        "name": "AI 상담 기능은 어떻게 작동하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "24시간 언제든 '우리 아이가 눈을 안 마주쳐요', 'ADHD 약 먹어야 하나요?' 같은 질문을 하면, 소아정신과 전문의 수준의 정보를 바탕으로 AI가 답변합니다. 개인별 케어로그 데이터를 반영하여 맞춤형 행동 이해 리포트와 가정 내 중재 가이드를 제공합니다."
        }
      },
      {
        "@type": "Question",
        "name": "특수교사나 치료사가 자람이를 어떻게 활용하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "특수교사는 IEP(개별화교육계획) 작성, 학급 관리, 출석·성과 통계를 자람이에서 관리하고 AI가 학생별 맞춤 교재를 자동 생성합니다. 치료사는 세션 기록을 입력하면 AI가 치료 효과를 분석하고 다음 중재 전략을 제안하여 치료 정확도를 높입니다."
        }
      },
      {
        "@type": "Question",
        "name": "가정-학교-센터-병원 기록이 어떻게 연결되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "부모가 가정에서 아이의 행동을 기록하면 → 센터 치료사가 실시간 확인 → 학교 교사가 교실 환경에 반영 → 병원 의사가 통합 데이터를 보고 치료 방향 결정. 모두가 하나의 표준 케어로그를 공유하여 중복 기록 없이 협업하고, AI가 전체 데이터를 분석하여 최적의 치료·학습 계획을 제안합니다."
        }
      },
      {
        "@type": "Question",
        "name": "자가진단 기능은 정확한가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "M-CHAT(자폐증), AQ-50(아스퍼거), Vanderbilt(ADHD), ASRS(성인 ADHD) 등 국제 표준 설문을 기반으로 객관적 평가를 제공합니다. AI가 결과를 분석하여 위험도, 추천 검사, 다음 단계 안내를 상세히 제공합니다. 의사 진단을 대체하지 않지만, 조기 스크리닝과 병원 방문 준비에 매우 유용합니다."
        }
      },
      {
        "@type": "Question",
        "name": "개인정보는 안전하게 보호되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "네, FHIR 기반 국제 표준 스키마로 데이터를 안전하게 관리하며, 개인정보는 가명처리·암호화하여 보호됩니다. 역할별 접근 권한(RBAC)으로 필요한 사람만 필요한 정보만 볼 수 있으며, 모든 데이터 접근은 감사 로그로 추적됩니다. 사용자 동의 없이 데이터를 사용하지 않습니다."
        }
      },
      {
        "@type": "Question",
        "name": "자람이 사용 비용은 어떻게 되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "자람이는 현재 비영리 운영 중이며, 공공기술 형태로 연구·고도화 단계입니다. 기본적인 AI 상담, 케어로그 기록, 자가진단 기능은 무료로 사용할 수 있습니다. 기관용 고급 기능(리포트 API, 다기관 연동)은 향후 정책 연계 및 공공 파트너십을 통해 제공될 예정입니다."
        }
      },
      {
        "@type": "Question",
        "name": "언어치료와 ABA 치료 중 어떤 것을 먼저 해야 하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "아이의 증상에 따라 다릅니다. 의사소통 문제가 주요 증상이면 언어치료를, 행동·사회성 문제가 크면 ABA를 우선 시작하거나 병행합니다. 자람이 AI는 개인별 증상 패턴과 발달 단계를 분석하여 최적의 치료 우선순위와 조합을 제안합니다. 전문가 상담과 함께 활용하면 더 효과적입니다."
        }
      },
      {
        "@type": "Question",
        "name": "경계성지능 아동도 자람이를 사용할 수 있나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "네, 자람이는 경계성지능(IQ 70-85) 아동의 학습 기록과 인지 발달 패턴도 추적합니다. AI가 개인별 학습 속도와 강점·약점을 분석하여 맞춤형 교육 계획을 제안하고, 교사와 부모가 협력하여 아이의 잠재력을 최대한 끌어올릴 수 있도록 지원합니다."
        }
      },
      {
        "@type": "Question",
        "name": "자람이의 AI 기술은 어떤 원리로 작동하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "자람이는 강화학습 기반 AI 엔진으로, 입력(다기관 기록) → 표준화(FHIR 스키마) → AI 분석(패턴 인식·예측) → 맞춤형 출력(치료·학습 계획)의 실시간 피드백 루프를 구현합니다. 알고리즘 검증이 완료된 맞춤형 치료·학습 기술이며, 자람이 데모를 통해 실제 작동 방식을 체험할 수 있습니다. 개인별 데이터가 쌓일수록 더 정밀한 맞춤형 계획을 제공합니다."
        }
      }
    ]
  }

  // TechArticle JSON-LD
  const techArticleLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "발달장애 AI 디지털케어로그: 표준 케어로그·실시간 환류 기반 Care Data Infrastructure",
    "description": "전국 5,700개 기관 등록 커뮤니티, 베타 테스트 중. AI 강화학습 기반 맞춤형 치료·학습. 가정·학교·센터·병원 통합 기록, 실시간 AI 분석. AI 엔진형 Middleware 기술.",
    "author": {
      "@type": "Organization",
      "name": "드림에이아이랩",
      "url": "https://dreamailab.ai"
    },
    "publisher": {
      "@type": "Organization",
      "name": "드림에이아이랩",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dreamailab.ai/logo.png"
      }
    },
    "datePublished": "2022-01-01",
    "dateModified": "2025-11-12",
    "keywords": "AI 디지털케어로그, 발달장애 표준, 케어로그 표준화, 맞춤형 치료, 맞춤형 학습, 골든타임, 다기관 연계, 실시간 환류, 강화학습, Middleware, AI 엔진",
    "articleSection": "Healthcare Technology",
    "about": {
      "@type": "Thing",
      "name": "발달장애 AI 디지털케어로그 표준 기술"
    }
  }

  // Organization JSON-LD
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "드림에이아이랩",
    "alternateName": "Dream AI Lab",
    "url": "https://dreamailab.ai",
    "logo": "https://dreamailab.ai/logo.png",
    "description": "불치병과 사회 약자를 위한 AI 기술. 발달장애 AI 디지털케어로그 표준·다기관 연계·실시간 환류 기반 Care Data Infrastructure를 구축하는 AI 엔진형 Middleware 기업.",
    "foundingDate": "2022",
    "founder": {
      "@type": "Person",
      "name": "정해성"
    },
    "keywords": "AI 디지털케어로그, 발달장애 표준, 케어로그 표준화, 맞춤형 치료, 자람이, EduCareLog, Middleware, AI 엔진",
    "sameAs": [
      "https://jarame.or.kr",
      "https://jarame.org"
    ],
    "areaServed": "KR",
    "knowsAbout": ["AI 디지털케어로그", "발달장애 맞춤형 치료", "디지털 헬스케어 표준", "교육 AI 기술", "다기관 연계 치료"]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        id="jarame-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        id="jarame-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        id="jarame-tech-article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleLd) }}
      />
      <script
        id="jarame-organization-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
      <Header />
      
      {/* ① Hero — Badge, Headline, 서브 2문장만 (CTA는 Contact 섹션에만) */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold">
                Service Status: Pilot (기관 베타 테스트 진행 중)
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{brand.name} — 발달장애 AI 디지털케어로그</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-blue-100 mb-2">
              가정·학교·센터·병원의 기록을 하나의 표준으로 통합하고, AI가 개인 맞춤형 치료·학습 계획을 제안합니다.
            </p>
            <p className="text-base max-w-2xl mx-auto text-white/90">
              데이터 단절과 기관 간 협업 부재를 표준 데이터와 AI로 해결합니다.
            </p>
          </div>
        </div>
      </section>

      {/* ② Executive Summary — 4-card grid (Why Now와 동일 카드 스타일) */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Executive Summary</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-200 transition-colors shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">기관 커뮤니티</h3>
              <p className="text-sm text-gray-600 leading-relaxed">5,700+ 기관 커뮤니티 기반</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-200 transition-colors shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">개발 기간</h3>
              <p className="text-sm text-gray-600 leading-relaxed">2022 개발 → 2025 기술 완성</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-200 transition-colors shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">현재 단계</h3>
              <p className="text-sm text-gray-600 leading-relaxed">기관 베타 테스트 진행</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-200 transition-colors shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">플랫폼 위치</h3>
              <p className="text-sm text-gray-600 leading-relaxed">DAL Care Data 플랫폼 첫 도메인</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Validation — Executive Summary 바로 아래 (소개 → 검증 → 설명 흐름) */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Market Validation</h2>
          <p className="text-center text-gray-600 text-sm mb-8 max-w-2xl mx-auto">자람이는 기관 커뮤니티·베타 테스트·다기관 협업 구조를 통해 검증되고 있습니다.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-200 transition-colors shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">기관 커뮤니티 기반</h3>
              <p className="text-sm text-gray-600 leading-relaxed">5,700+ 기관 커뮤니티 네트워크</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-200 transition-colors shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">기관 베타 테스트</h3>
              <p className="text-sm text-gray-600 leading-relaxed">센터·병원 기관 베타 운영</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-200 transition-colors shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">다기관 협업 구조</h3>
              <p className="text-sm text-gray-600 leading-relaxed">가정·센터·학교·병원 데이터 연계 검증</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🎯 Who Jarame Is For (ICP) — 3-column card layout */}
      <section className="py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Who Jarame Is For</h2>
          <p className="text-center text-gray-600 text-sm mb-8 max-w-2xl mx-auto">B2B·B2G 구매 주체와 최종 사용자를 명확히 구분합니다.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 h-full flex flex-col hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3 text-blue-600">🏥</div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Primary Buyers</h3>
              <p className="text-lg font-bold text-gray-900 mb-2">기관</p>
              <p className="text-sm text-gray-600 mb-4">치료·교육·의료 협업을 위해 자람이를 도입하는 조직입니다.</p>
              <ul className="text-gray-700 text-sm space-y-1.5 mt-auto">
                <li>· 발달장애 치료센터</li>
                <li>· 특수학교 / 특수학급</li>
                <li>· 소아정신과 / 재활병원</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 h-full flex flex-col hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3 text-green-600">🏛️</div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Secondary Buyers</h3>
              <p className="text-lg font-bold text-gray-900 mb-2">확장</p>
              <p className="text-sm text-gray-600 mb-4">지역·정책 단위에서 표준 케어 데이터 인프라를 확대하는 주체입니다.</p>
              <ul className="text-gray-700 text-sm space-y-1.5 mt-auto">
                <li>· 교육청 / 지자체</li>
                <li>· 발달장애 지원기관</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 h-full flex flex-col hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3 text-indigo-600">👥</div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">End Users</h3>
              <p className="text-lg font-bold text-gray-900 mb-2">실제 사용자</p>
              <p className="text-sm text-gray-600 mb-4">기관 도입 후 일상에서 케어로그를 기록·활용하는 사용자입니다.</p>
              <ul className="text-gray-700 text-sm space-y-1.5 mt-auto">
                <li>· 보호자</li>
                <li>· 치료사</li>
                <li>· 특수교사</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ③ 왜 지금 자람이인가 — 데이터 단절, 골든타임, 비용 */}
      <section className="py-14 bg-gradient-to-br from-blue-50 to-indigo-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">왜 지금 자람이인가</h2>
          <p className="text-center text-gray-600 text-sm mb-8 max-w-2xl mx-auto">데이터 단절, 골든타임 놓침, 비용 대비 불확실한 효과 — 세 가지 구조적 문제를 해결합니다.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3">1️⃣ 데이터 단절</h3>
              <p className="text-sm text-gray-600 mb-2">가정·학교·센터·병원 기록이 분절되어:</p>
              <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                <li>중복 검사 발생</li>
                <li>모순된 처방</li>
                <li>장기 패턴 추적 불가</li>
                <li>치료 효과 객관 평가 어려움</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3">2️⃣ 골든타임 문제</h3>
              <p className="text-sm text-gray-600 mb-2">발달장애는 <strong>3~7세 조기개입</strong>이 핵심이지만:</p>
              <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                <li>치료사 부족</li>
                <li>정보 비대칭</li>
                <li>기관 간 맥락 공유 부족</li>
              </ul>
              <p className="text-sm text-gray-700 mt-2">→ 상당수 가정이 개입 시기를 놓침</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3">3️⃣ 비용 대비 불확실한 효과</h3>
              <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                <li>월 200~300만원 치료비</li>
                <li>맞춤 계획 부재</li>
                <li>효과 검증 어려움</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now — 4-card grid (카드 UI 명확화) */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Why Now</h2>
          <p className="text-center text-gray-600 text-sm mb-8 max-w-2xl mx-auto">시장·정책·인프라·AI 기술의 변화가 자람이 도입 시기를 앞당기고 있습니다.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-200 transition-colors shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2 whitespace-nowrap">Market Expansion</h3>
              <p className="text-sm text-gray-600 leading-relaxed">발달장애 조기개입 시장 확대</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-200 transition-colors shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Policy Momentum</h3>
              <p className="text-sm text-gray-600 leading-relaxed">특수교육 및 복지 정책 변화</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-200 transition-colors shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Infrastructure Gap</h3>
              <p className="text-sm text-gray-600 leading-relaxed">기관 간 데이터 인프라 부족</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-200 transition-colors shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">AI Capability</h3>
              <p className="text-sm text-gray-600 leading-relaxed">AI 분석 기술 성숙</p>
            </div>
          </div>
        </div>
      </section>

      {/* 현장 전문가가 겪는 문제 — Step 기반 (작동 구조·사례와 동일 패턴) */}
      <section className="py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">현장 전문가가 겪는 문제</h2>
          <p className="text-center text-gray-600 text-sm mb-8">특수교사 · 치료사 — 문제 → 해결 → 결과</p>
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3">
              <div className="relative">
                <div className="bg-red-50 rounded-xl p-5 border-2 border-red-200 h-full">
                  <div className="text-2xl mb-2">1️⃣</div>
                  <h4 className="font-bold text-red-900 mb-2 text-sm">STEP 1 — 현장 현실</h4>
                  <p className="text-xs text-gray-700">특수교사·치료사가 실제로 겪는 문제: 1인당 6~10명 담당, 맞춤 교재 제작 시간 부족.</p>
                </div>
                <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-xl text-gray-300">→</div>
              </div>
              <div className="relative">
                <div className="bg-amber-50 rounded-xl p-5 border-2 border-amber-200 h-full">
                  <div className="text-2xl mb-2">2️⃣</div>
                  <h4 className="font-bold text-amber-900 mb-2 text-sm">STEP 2 — 왜 문제인가</h4>
                  <p className="text-xs text-gray-700">교육 기록과 치료 기록이 분리되어 기관 간 맥락 공유가 어렵습니다.</p>
                </div>
                <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-xl text-gray-300">→</div>
              </div>
              <div className="relative">
                <div className="bg-orange-50 rounded-xl p-5 border-2 border-orange-200 h-full">
                  <div className="text-2xl mb-2">3️⃣</div>
                  <h4 className="font-bold text-orange-900 mb-2 text-sm">STEP 3 — 결과</h4>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>· 개별화 교육 설계 어려움</li>
                    <li>· 기관 협업 단절(수기 보고서 수준)</li>
                  </ul>
                </div>
                <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-xl text-gray-300">→</div>
              </div>
              <div className="relative">
                <div className="bg-blue-50 rounded-xl p-5 border-2 border-blue-200 h-full">
                  <div className="text-2xl mb-2">4️⃣</div>
                  <h4 className="font-bold text-blue-900 mb-2 text-sm">STEP 4 — AI 케어로그 해결</h4>
                  <p className="text-xs text-gray-700">데이터 통합 + 기록 자동 구조화(표준 스키마·다기관 연계).</p>
                </div>
                <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-xl text-gray-300">→</div>
              </div>
              <div>
                <div className="bg-green-50 rounded-xl p-5 border-2 border-green-200 h-full">
                  <div className="text-2xl mb-2">5️⃣</div>
                  <h4 className="font-bold text-green-900 mb-2 text-sm">STEP 5 — 기대 변화</h4>
                  <p className="text-xs text-gray-700">교사와 치료사가 행정이 아니라 교육·치료에 집중 가능.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI가 교사와 치료사를 돕는 방식 — Step 기반 (작동 구조·사례와 동일 패턴) */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">AI가 교사와 치료사를 돕는 방식</h2>
          <p className="text-center text-gray-600 text-sm mb-8">기존 방식 → AI 분석 → 자동 생성 → 교육 변화</p>
          <div className="bg-gray-50/50 rounded-2xl p-8 md:p-10 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="relative">
                <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200 h-full">
                  <div className="text-3xl mb-3">1️⃣</div>
                  <h4 className="font-bold text-red-900 mb-2">STEP 1 — 기존 방식</h4>
                  <p className="text-sm text-gray-700">교사가 교재를 직접 제작해야 하는 현실. 행정·담당 인원 수 제한.</p>
                </div>
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-2xl text-gray-400">→</div>
              </div>
              <div className="relative">
                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200 h-full">
                  <div className="text-3xl mb-3">2️⃣</div>
                  <h4 className="font-bold text-blue-900 mb-2">STEP 2 — AI 분석</h4>
                  <p className="text-sm text-gray-700">케어로그 데이터를 기반으로 관심사·발달 수준·행동 패턴 분석.</p>
                </div>
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-2xl text-gray-400">→</div>
              </div>
              <div className="relative">
                <div className="bg-indigo-50 rounded-xl p-6 border-2 border-indigo-200 h-full">
                  <div className="text-3xl mb-3">3️⃣</div>
                  <h4 className="font-bold text-indigo-900 mb-2">STEP 3 — 자동 생성</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>· 맞춤형 교재·학습 자료 생성</li>
                    <li>· 예: 공룡 숫자 카드, 자동차 단어 카드, 동물 읽기 자료</li>
                    <li>· IEP 핵심 정보 자동 정리</li>
                  </ul>
                </div>
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-2xl text-gray-400">→</div>
              </div>
              <div>
                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200 h-full">
                  <div className="text-3xl mb-3">4️⃣</div>
                  <h4 className="font-bold text-green-900 mb-2">STEP 4 — 교육 변화</h4>
                  <p className="text-sm text-gray-700">교사는 행정 작업이 아니라 교육에 집중. 치료사·교사 판단을 데이터로 보완.</p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-gray-600">자람이는 전문가를 대체하지 않고, <strong>판단을 돕는 AI 도구</strong>입니다.</p>
          </div>
        </div>
      </section>

      {/* 의료 현장의 현실적인 한계 — Step 기반 (작동 구조·사례와 동일 패턴) */}
      <section className="py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">의료 현장의 현실적인 한계</h2>
          <p className="text-center text-gray-600 text-sm mb-8">의료 현실 → 데이터 문제 → 해결 → 의료 판단 변화</p>
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3">
              <div className="relative">
                <div className="bg-red-50 rounded-xl p-5 border-2 border-red-200 h-full">
                  <div className="text-2xl mb-2">1️⃣</div>
                  <h4 className="font-bold text-red-900 mb-2 text-sm">STEP 1 — 의료 현실</h4>
                  <p className="text-xs text-gray-700">진료 시간 제한: 초진 20~30분, 재진 5~10분 안에 평가.</p>
                </div>
                <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-xl text-gray-300">→</div>
              </div>
              <div className="relative">
                <div className="bg-amber-50 rounded-xl p-5 border-2 border-amber-200 h-full">
                  <div className="text-2xl mb-2">2️⃣</div>
                  <h4 className="font-bold text-amber-900 mb-2 text-sm">STEP 2 — 데이터 문제</h4>
                  <p className="text-xs text-gray-700">의사는 실제 생활 행동·학교·치료 반응을 진료실에서 직접 확인하기 어렵습니다.</p>
                </div>
                <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-xl text-gray-300">→</div>
              </div>
              <div className="relative">
                <div className="bg-orange-50 rounded-xl p-5 border-2 border-orange-200 h-full">
                  <div className="text-2xl mb-2">3️⃣</div>
                  <h4 className="font-bold text-orange-900 mb-2 text-sm">STEP 3 — 기존 방식</h4>
                  <p className="text-xs text-gray-700">부모 기억 의존. 발달 검사는 낯선 환경·짧은 시간이라 결과 변동 가능.</p>
                </div>
                <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-xl text-gray-300">→</div>
              </div>
              <div className="relative">
                <div className="bg-blue-50 rounded-xl p-5 border-2 border-blue-200 h-full">
                  <div className="text-2xl mb-2">4️⃣</div>
                  <h4 className="font-bold text-blue-900 mb-2 text-sm">STEP 4 — AI 케어로그 해결</h4>
                  <p className="text-xs text-gray-700">가정·학교·센터 데이터를 통합 기록(표준 스키마).</p>
                </div>
                <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-xl text-gray-300">→</div>
              </div>
              <div>
                <div className="bg-green-50 rounded-xl p-5 border-2 border-green-200 h-full">
                  <div className="text-2xl mb-2">5️⃣</div>
                  <h4 className="font-bold text-green-900 mb-2 text-sm">STEP 5 — 의료 판단 변화</h4>
                  <p className="text-xs text-gray-700">장기 데이터(행동·약물 반응·치료 진행) 기반 진료 가능.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI 디지털케어로그가 의료 판단을 돕는 방식 — Step 기반 (다른 섹션과 동일 패턴) */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">AI 디지털케어로그가 의료 판단을 돕는 방식</h2>
          <p className="text-center text-gray-600 text-sm mb-8">가정·센터·학교 데이터 → 통합 → 의료 판단 지원</p>
          <div className="bg-gray-50/50 rounded-2xl p-8 md:p-10 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3">
              <div className="relative">
                <div className="bg-blue-50 rounded-xl p-5 border-2 border-blue-200 h-full">
                  <div className="text-2xl mb-2">1️⃣</div>
                  <h4 className="font-bold text-blue-900 mb-2 text-sm">STEP 1 — 가정 데이터</h4>
                  <p className="text-xs text-gray-700">부모가 기록한 행동 변화, 감정 상태, 일상 패턴이 케어로그에 기록됩니다.</p>
                </div>
                <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-xl text-gray-300">→</div>
              </div>
              <div className="relative">
                <div className="bg-cyan-50 rounded-xl p-5 border-2 border-cyan-200 h-full">
                  <div className="text-2xl mb-2">2️⃣</div>
                  <h4 className="font-bold text-cyan-900 mb-2 text-sm">STEP 2 — 센터 치료 데이터</h4>
                  <p className="text-xs text-gray-700">치료 세션 기록과 중재 방법, 치료 반응이 구조화된 데이터로 저장됩니다.</p>
                </div>
                <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-xl text-gray-300">→</div>
              </div>
              <div className="relative">
                <div className="bg-indigo-50 rounded-xl p-5 border-2 border-indigo-200 h-full">
                  <div className="text-2xl mb-2">3️⃣</div>
                  <h4 className="font-bold text-indigo-900 mb-2 text-sm">STEP 3 — 학교 데이터</h4>
                  <p className="text-xs text-gray-700">특수교사가 기록한 학습 참여도, 사회성 행동, IEP 진행 상황이 통합됩니다.</p>
                </div>
                <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-xl text-gray-300">→</div>
              </div>
              <div className="relative">
                <div className="bg-amber-50 rounded-xl p-5 border-2 border-amber-200 h-full">
                  <div className="text-2xl mb-2">4️⃣</div>
                  <h4 className="font-bold text-amber-900 mb-2 text-sm">STEP 4 — 의료 판단 지원</h4>
                  <p className="text-xs text-gray-700">의사는 진료 시 수개월의 행동 데이터와 치료 반응을 함께 확인할 수 있습니다.</p>
                </div>
                <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-xl text-gray-300">→</div>
              </div>
              <div>
                <div className="bg-green-50 rounded-xl p-5 border-2 border-green-200 h-full">
                  <div className="text-2xl mb-2">5️⃣</div>
                  <h4 className="font-bold text-green-900 mb-2 text-sm">STEP 5 — 진료 방식 변화</h4>
                  <p className="text-xs text-gray-700">단일 진료 관찰이 아니라 장기 데이터 기반 판단이 가능해집니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ④ AI 디지털케어로그 작동 구조 — 간결 버전 */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">AI 디지털케어로그 작동 구조</h2>
          <p className="text-center text-gray-600 text-sm mb-8 max-w-2xl mx-auto">입력 → 표준화 → AI 분석 → 실시간 환류. 데이터가 쌓일수록 정확도가 높아지는 강화학습 구조입니다.</p>

          {/* 기술 작동 원리 */}
          <div className="bg-gray-50/50 rounded-2xl p-8 md:p-12 border border-gray-100 mb-12">
            <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">실시간 환류 시스템의 작동 방식</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="relative">
                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                  <div className="text-4xl mb-3 text-center">1️⃣</div>
                  <h4 className="font-bold text-blue-900 mb-2 text-center">데이터 수집</h4>
                  <p className="text-sm text-gray-700">
                    <strong>가정</strong>: 부모 관찰 기록
                    <br/><strong>센터</strong>: 치료사 활동 기록
                    <br/><strong>학교</strong>: 특수교사 IEP
                    <br/><strong>병원</strong>: 진단·약물 기록
                  </p>
                </div>
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-3xl text-blue-400">→</div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                  <div className="text-4xl mb-3 text-center">2️⃣</div>
                  <h4 className="font-bold text-green-900 mb-2 text-center">통합·표준화</h4>
                  <p className="text-sm text-gray-700">
                    <strong>표준 스키마로 통합</strong>
                    <br/>• 시간·장소·맥락 자동 태깅
                    <br/>• 행동·감정·발달 영역 분류
                    <br/>• 중복 제거 + 누락 보완
                  </p>
                </div>
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-3xl text-green-400">→</div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="bg-indigo-50 rounded-xl p-6 border-2 border-indigo-200">
                  <div className="text-4xl mb-3 text-center">3️⃣</div>
                  <h4 className="font-bold text-indigo-900 mb-2 text-center">AI 분석</h4>
                  <p className="text-sm text-gray-700">
                    <strong>패턴 인식 + 예측</strong>
                    <br/>• 발달 추이 시각화
                    <br/>• 이상 징후 조기 탐지
                    <br/>• 개인별 최적 전략 추천
                  </p>
                </div>
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-3xl text-indigo-400">→</div>
              </div>

              {/* Step 4 */}
              <div>
                <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
                  <div className="text-4xl mb-3 text-center">4️⃣</div>
                  <h4 className="font-bold text-orange-900 mb-2 text-center">실시간 환류</h4>
                  <p className="text-sm text-gray-700">
                    <strong>모든 관계자에게 알림</strong>
                    <br/>• 부모: 가정 실천 과제
                    <br/>• 치료사: 전략 조정 제안
                    <br/>• 교사: 학교 환경 팁
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-4 text-center text-sm text-gray-700">자람이는 단순 기록 시스템이 아니라 👉 <strong>데이터가 쌓일수록 정확도가 높아지는 강화학습 구조</strong>입니다.</p>
          </div>

          {/* ⑤ 실제 사례 1~2개 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            {/* Case 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-5xl">👦</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">사례 1: 자폐스펙트럼 7세 남아</h4>
                  <p className="text-sm text-gray-500">2022년 11월 ~ 2023년 8월 (10개월)</p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-gray-700">
                <div className="bg-red-50 rounded-lg p-3 border-l-4 border-red-400">
                  <strong className="text-red-700">초기 상태</strong>
                  <ul className="mt-1 space-y-1 text-gray-600">
                    <li>• 눈 맞춤 거의 없음 (주 0~1회)</li>
                    <li>• 언어 발화 불가 (옹알이만)</li>
                    <li>• 감각 과민: 큰 소리에 패닉</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-400">
                  <strong className="text-blue-700">AI 분석 결과</strong>
                  <p className="mt-1 text-gray-600">
                    "시각 자극에는 반응 양호 → 그림카드 중심 교육 추천"
                    <br/>"소음 회피 패턴 감지 → 조용한 환경 + 사전 예고 필요"
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-400">
                  <strong className="text-green-700">10개월 후</strong>
                  <ul className="mt-1 space-y-1 text-gray-600">
                    <li>• 눈 맞춤: 주 15~20회로 증가</li>
                    <li>• 단어 발화: "엄마", "물", "좋아" 등 12개 단어</li>
                    <li>• 소음 적응: 사전 알림으로 패닉 80% 감소</li>
                  </ul>
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-600 italic text-center">
                "AI가 아이의 강점(시각)을 찾아내지 않았다면, 
                <br/>우리는 계속 소리로만 가르치고 있었을 겁니다." — 부모 후기
              </p>
            </div>

            {/* Case 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-5xl">👧</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">사례 2: ADHD 9세 여아</h4>
                  <p className="text-sm text-gray-500">2023년 3월 ~ 2023년 12월 (10개월)</p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-gray-700">
                <div className="bg-red-50 rounded-lg p-3 border-l-4 border-red-400">
                  <strong className="text-red-700">초기 상태</strong>
                  <ul className="mt-1 space-y-1 text-gray-600">
                    <li>• 주의 집중: 평균 2분</li>
                    <li>• 충동 행동: 수업 중 돌아다님 (일 5~8회)</li>
                    <li>• 학습 지연: 학년 평균 대비 1.5년 뒤처짐</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-400">
                  <strong className="text-blue-700">AI 분석 결과</strong>
                  <p className="mt-1 text-gray-600">
                    "오전 집중력 최고 (10~11시) → 중요 학습 오전 배치"
                    <br/>"5분 단위 활동 + 즉각 보상이 효과적 → 단기 목표 설정"
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-400">
                  <strong className="text-green-700">10개월 후</strong>
                  <ul className="mt-1 space-y-1 text-gray-600">
                    <li>• 주의 집중: 평균 12분으로 증가 (6배 향상)</li>
                    <li>• 충동 행동: 일 1~2회로 감소 (75% 개선)</li>
                    <li>• 학습: 학년 평균 대비 0.5년 차이로 축소</li>
                  </ul>
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-600 italic text-center">
                "AI가 오전 시간대 집중력 패턴을 찾아냈고,
                <br/>그걸 기반으로 학습 계획을 바꾸니 효과가 즉시 나타났어요." — 특수교사 후기
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ⑦ 기술 아키텍처 요약 — 엔진 중심 */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">기술 아키텍처 요약</h2>
          <p className="text-center text-gray-600 text-sm mb-6 max-w-2xl mx-auto">표준 스키마·다기관 협업·AI Middleware·실시간 환류. 케어 서비스가 아닌 Care Data Infrastructure입니다.</p>
          <ul className="text-center text-gray-600 mb-4 space-y-1 text-sm md:text-base max-w-2xl mx-auto">
            <li>· 표준 스키마 기반 데이터 파이프라인</li>
            <li>· 다기관 협업 구조</li>
            <li>· AI Middleware 중심 설계</li>
            <li>· 실시간 환류 루프</li>
          </ul>
          <blockquote className="text-center text-gray-800 font-semibold mb-8 border-l-4 border-blue-500 pl-4 py-2 max-w-xl mx-auto bg-blue-50/50 rounded-r">
            &ldquo;케어 서비스&rdquo;가 아니라 <strong className="text-blue-700">Care Data Infrastructure</strong>
          </blockquote>

          {/* AI 파이프라인 시각화 */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Step 1: 입력 */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-blue-200 h-full">
                  <div className="text-center mb-4">
                    <div className="inline-block bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-2">
                      1
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">입력 데이터</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">▸</span>
                      <span><strong>행동 로그</strong>: 상동행동, 눈 맞춤, 충동성</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">▸</span>
                      <span><strong>감정 상태</strong>: 불안, 스트레스 지표</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">▸</span>
                      <span><strong>학습 데이터</strong>: 집중도, 과제 수행률</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">▸</span>
                      <span><strong>치료 기록</strong>: 세션 내용, 반응</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">▸</span>
                      <span><strong>맥락 정보</strong>: 시간·장소·상황</span>
                    </li>
                  </ul>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-4xl text-blue-400 z-10">→</div>
              </div>

              {/* Step 2: 표준화 */}
              <div className="relative">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 h-full">
                  <div className="text-center mb-4">
                    <div className="inline-block bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-2">
                      2
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">표준화·전처리</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">▸</span>
                      <span><strong>스키마 통합</strong>: 다기관 포맷 → 단일 표준</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">▸</span>
                      <span><strong>시계열 정렬</strong>: 타임스탬프 동기화</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">▸</span>
                      <span><strong>특징 추출</strong>: 행동 패턴 벡터화</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">▸</span>
                      <span><strong>노이즈 제거</strong>: 이상치·중복 처리</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">▸</span>
                      <span><strong>태깅 자동화</strong>: 영역·심각도 분류</span>
                    </li>
                  </ul>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-4xl text-green-400 z-10">→</div>
              </div>

              {/* Step 3: AI 분석 */}
              <div className="relative">
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 border-2 border-indigo-200 h-full">
                  <div className="text-center mb-4">
                    <div className="inline-block bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-2">
                      3
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">AI 강화학습</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600">▸</span>
                      <span><strong>LLM 분석</strong>: 자연어 보고서 생성</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600">▸</span>
                      <span><strong>패턴 인식</strong>: 장기 추이 학습</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600">▸</span>
                      <span><strong>이상 탐지</strong>: 골든타임 알림</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600">▸</span>
                      <span><strong>개인화 모델</strong>: 행동 예측</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600">▸</span>
                      <span><strong>전략 추천</strong>: 맞춤 치료·학습 생성</span>
                    </li>
                  </ul>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-4xl text-indigo-400 z-10">→</div>
              </div>

              {/* Step 4: 출력 */}
              <div>
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border-2 border-orange-200 h-full">
                  <div className="text-center mb-4">
                    <div className="inline-block bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-2">
                      4
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">맞춤형 출력</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600">▸</span>
                      <span><strong>치료 계획</strong>: 개인별 IEP 자동 생성</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600">▸</span>
                      <span><strong>교육 경로</strong>: 맞춤형 교재 제공</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600">▸</span>
                      <span><strong>실시간 알림</strong>: 부모·교사·치료사</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600">▸</span>
                      <span><strong>진척 리포트</strong>: 시각화 대시보드</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600">▸</span>
                      <span><strong>의학적 권장</strong>: 의사 협업 자료</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 강화학습 루프 */}
            <div className="mt-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-300">
              <div className="flex items-center justify-center gap-4">
                <span className="text-2xl">🔄</span>
                <p className="text-lg text-gray-800 font-semibold">
                  <strong className="text-blue-700">강화학습 루프</strong>: 
                  출력 결과 → 실제 효과 측정 → AI 모델 업데이트 → 정확도 향상 → 다시 입력
                </p>
              </div>
              <p className="text-center text-sm text-gray-600 mt-3">
                데이터가 쌓일수록 AI는 더 정확한 치료 계획을 제시합니다. 5,700개 기관의 데이터가 하나의 AI를 함께 발전시킵니다.
              </p>
            </div>
          </div>

          {/* 기술 스택 (AI 엔진 인식용) */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">핵심 기술 스택</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow">
                <h4 className="font-bold text-blue-700 mb-3">💾 데이터 레이어</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 표준 스키마 (JSON/FHIR 호환)</li>
                  <li>• 시계열 데이터베이스</li>
                  <li>• 다기관 데이터 통합 파이프라인</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow">
                <h4 className="font-bold text-indigo-700 mb-3">🤖 AI 레이어</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• LLM (자연어 분석·생성)</li>
                  <li>• 행동 패턴 인식 모델</li>
                  <li>• 강화학습 추천 엔진</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow">
                <h4 className="font-bold text-green-700 mb-3">🎯 애플리케이션 레이어</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 실시간 대시보드</li>
                  <li>• 다기관 협업 인터페이스</li>
                  <li>• API (구조 설계 완료, 공개 협의 중)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Solution */}
      {/* Digital CareLog Section */}
      <section id="carelog" className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full px-6 py-2 mb-6">
              <p className="font-bold text-sm">🌟 자람이의 핵심 기술</p>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              AI 디지털케어로그
            </h2>
            <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-6">
              치료의 언어이자, 치료의 발단
            </p>
            
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-xl text-gray-700 leading-relaxed">
                <strong className="text-blue-600">표준 케어로그</strong>로 가정·센터·학교·병원 기록을 하나의 파이프라인에 모으고, 
                <strong className="text-cyan-600"> AI 분석 → 실시간 환류(폐루프)</strong>로 맞춤 치료·학습 경로를 제안합니다.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                챗봇·콘텐츠 추천이 아니라 <strong>기록·표준화·실행 자동화</strong>가 연결된 Care Data Infrastructure입니다.
              </p>
              
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border-l-4 border-amber-500 my-6">
                <p className="text-lg text-gray-800 font-semibold mb-2">💡 검증 포인트</p>
                <p className="text-base text-gray-700">
                  표준 스키마·다기관 RBAC·감사 로그·기관 베타 파일럿으로 로그·표준·다기관·실행 환류를 검증하고 있습니다.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-6 my-6">
                <p className="text-lg font-bold mb-2">표준과 폐루프</p>
                <p className="text-base mb-3">
                  데이터가 쌓일수록 AI 정확도가 높아지는 강화학습 구조. 
                  기관·정책 요구에 대응하는 <strong className="text-cyan-300">표준 데이터 스키마·역할 기반 접근(RBAC)·감사 로깅</strong>으로 
                  공공 도입과 확장을 준비합니다.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 기록 항목 */}
            <div className="bg-white rounded-2xl p-8 shadow">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">핵심 기록 항목</h3>
              <ul className="space-y-2 text-gray-600 list-disc list-inside">
                <li>치료·교육 활동, 숙제/평가, 출석</li>
                <li>행동 변화, 감정 상태, 사회성 지표</li>
                <li>진료/약물 복용 이력, 부작용 기록</li>
              </ul>
            </div>

            {/* AI 기능 */}
            <div className="bg-white rounded-2xl p-8 shadow">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI 분석 & 리포트</h3>
              <ul className="space-y-2 text-gray-600 list-disc list-inside">
                <li>발달 추이 분석 및 시각화</li>
                <li>개인 맞춤형 치료·교육 제안</li>
                <li>이상 징후 조기 탐지 알림</li>
              </ul>
            </div>

            {/* 협업/공유 */}
            <div className="bg-white rounded-2xl p-8 shadow">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">협업 & 데이터 공유</h3>
              <ul className="space-y-2 text-gray-600 list-disc list-inside">
                <li>보호자·교사·치료사·의사 간 기록 공유</li>
                <li>권한 관리 및 접근 제어</li>
                <li>데이터 기반 상담·회의 지원</li>
              </ul>
            </div>
          </div>
          <p className="mt-10 text-lg text-gray-700 max-w-4xl mx-auto text-center">
            치료할 수 없는 병이 아니라, <strong>기록하고 분석하면</strong> 치료의 실마리를 찾을 수 있는 병으로 전환합니다.
          </p>
        </div>
      </section>

      {/* 10가지 전문 치료 모듈 & 검증된 성과 */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              10가지 전문 치료 모듈 & 검증된 성과
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              실제 데이터로 입증된 자람이의 치료 효과
            </p>
          </div>

          {/* 치료 모듈 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">🎯 10가지 전문 치료 모듈</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {['물리치료', '작업치료', '언어치료', '놀이치료', '음악치료', '미술치료', '사회기술훈련', '인지행동치료', '감각통합치료', 'ABA치료'].map((module, idx) => (
                <div key={idx} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 text-center">
                  <p className="font-semibold text-gray-900">{module}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-6">
              각 치료사의 전문 분야에 맞춘 표준화된 기록 시스템으로 <strong className="text-green-600">치료 효과를 AI가 실시간 분석</strong>합니다.
            </p>
          </div>

          {/* 검증된 성과 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-3">🎯</div>
              <p className="text-3xl font-bold text-green-600 mb-2">35%</p>
              <p className="text-sm text-gray-600 mb-3">치료 효과 향상</p>
              <div className="text-xs text-gray-500 space-y-1 text-left">
                <p>• 기존: 3개월 목표 달성률 45%</p>
                <p>• 자람이: 3개월 목표 달성률 80%</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-3">⏱️</div>
              <p className="text-3xl font-bold text-blue-600 mb-2">60%</p>
              <p className="text-sm text-gray-600 mb-3">업무 효율성 개선</p>
              <div className="text-xs text-gray-500 space-y-1 text-left">
                <p>• 기존: 주간 20시간 행정 업무</p>
                <p>• 자람이: 주간 8시간 행정 업무</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-3">📊</div>
              <p className="text-3xl font-bold text-purple-600 mb-2">95%</p>
              <p className="text-sm text-gray-600 mb-3">데이터 정확성</p>
              <div className="text-xs text-gray-500 space-y-1 text-left">
                <p>• 기존: 주관적 평가 70%</p>
                <p>• 자람이: 객관적 데이터 95%</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-3">🤝</div>
              <p className="text-3xl font-bold text-orange-600 mb-2">100%</p>
              <p className="text-sm text-gray-600 mb-3">기관 연계</p>
              <div className="text-xs text-gray-500 space-y-1 text-left">
                <p>• 기존: 월 1회 보고서 공유</p>
                <p>• 자람이: 실시간 연계 시스템</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⑥ 역할군 구조 요약 — 4그룹 */}
      <section className="py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">역할군 구조 (4그룹)</h2>
          <p className="text-center text-gray-600 text-sm mb-8 max-w-2xl mx-auto">보호자·치료사·의사·교사가 하나의 표준 케어로그로 협업합니다.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">👪 보호자·가정</h3>
              <p className="text-sm text-gray-600">가정 일지 · AI 상담 · 홈티 매칭 · 기관 연계</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">🏢 치료사·센터</h3>
              <p className="text-sm text-gray-600">치료 모듈 기록 · 성과 분석 · 행정 자동화</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">🏥 의사·병원</h3>
              <p className="text-sm text-gray-600">통합 케어 데이터 · AI 치료 보조 · 약물 추적</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">🏫 교사·학교</h3>
              <p className="text-sm text-gray-600">IEP 자동화 · AI 교재 · 학습 데이터 분석</p>
            </div>
          </div>
        </div>
      </section>

      {/* ⑧ DAL 확장 전략 */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">DAL 플랫폼 확장 전략</h2>
          <p className="text-center text-gray-600 text-sm mb-6 max-w-2xl mx-auto">자람이는 DAL의 1번 도메인이며, 동일 데이터 표준으로 교육·시니어·의료로 확장됩니다.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-100"><h3 className="font-bold text-gray-900 mb-1">1. 자람이</h3><p className="text-gray-600">발달장애</p></div>
            <div className="bg-cyan-50 rounded-xl p-4 border border-cyan-100"><h3 className="font-bold text-gray-900 mb-1">2. EduCareLog</h3><p className="text-gray-600">교육</p></div>
            <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100"><h3 className="font-bold text-gray-900 mb-1">3. 시니어·토탈케어</h3><p className="text-gray-600">의료·만성질환</p></div>
          </div>
          <p className="text-center text-gray-700 font-medium">👉 하나의 케어 데이터 OS 전략</p>
        </div>
      </section>

      {/* Policy Alignment / Public Deployment — 4+4 card groups (통일 카드 스타일) */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Policy Alignment / Public Deployment</h2>
          <p className="text-center text-gray-600 text-sm mb-10 max-w-2xl mx-auto">정책 정합성과 공공 도입 아키텍처를 구분해 안내합니다.</p>

          <div className="mb-10">
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Policy Alignment</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-200 transition-colors">
                <h4 className="font-bold text-gray-900 mb-2">발달장애 정책</h4>
                <p className="text-sm text-gray-600">발달장애 권리보장·지원 정책 정합</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-200 transition-colors">
                <h4 className="font-bold text-gray-900 mb-2">특수교육 정책</h4>
                <p className="text-sm text-gray-600">개별화교육·IEP 정책 대응</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-200 transition-colors">
                <h4 className="font-bold text-gray-900 mb-2">AI 사회문제 해결 전략</h4>
                <p className="text-sm text-gray-600">AI 기반 사회문제 해결 정책 부합</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-200 transition-colors">
                <h4 className="font-bold text-gray-900 mb-2">디지털 헬스케어 전환</h4>
                <p className="text-sm text-gray-600">데이터 기반 케어 인프라 정책</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Public Deployment Architecture</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-200 transition-colors">
                <h4 className="font-bold text-gray-900 mb-2">표준 데이터 스키마</h4>
                <p className="text-sm text-gray-600">기관·정책 요구 대응 데이터 구조</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-200 transition-colors">
                <h4 className="font-bold text-gray-900 mb-2">RBAC 접근 제어</h4>
                <p className="text-sm text-gray-600">역할 기반 권한 관리</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-200 transition-colors">
                <h4 className="font-bold text-gray-900 mb-2">감사 로깅</h4>
                <p className="text-sm text-gray-600">접근 및 변경 이력 추적</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-200 transition-colors">
                <h4 className="font-bold text-gray-900 mb-2">기관 간 데이터 연계</h4>
                <p className="text-sm text-gray-600">다기관 협업 구조 지원</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 다기관 연계 실제 사례 — 카드 기반 Case A / Case B, 4단계 플로우 */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">다기관 연계 실제 사례</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              보호자 · 치료사 · 교사 · 의사가 하나의 AI 디지털케어로그로 협력하는 구조
            </p>
          </div>

          {/* Case A — 상동행동 (ABA) */}
          <div className="mb-14">
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center md:text-left">Case A — 상동행동 (ABA)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl p-5 shadow-md border-t-4 border-blue-500">
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">Step 1</p>
                <h4 className="font-bold text-gray-900 mb-1">가정 (보호자 기록)</h4>
                <p className="text-sm text-gray-600">상황·행동·반응 기록 후 AI가 감각 자극 민감도 분석, 차분한 환경 조정 권장.</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-md border-t-4 border-cyan-500">
                <p className="text-xs font-semibold text-cyan-600 uppercase tracking-wide mb-1">Step 2</p>
                <h4 className="font-bold text-gray-900 mb-1">센터 (치료사)</h4>
                <p className="text-sm text-gray-600">ABA 세션 진행·중재 전략 수립. AI 리포트로 주간 감소율·성공률 공유.</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-md border-t-4 border-green-500">
                <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-1">Step 3</p>
                <h4 className="font-bold text-gray-900 mb-1">학교 (교사)</h4>
                <p className="text-sm text-gray-600">교실 환경 조정·일반화 훈련. AI 권장으로 대체행동(블록 맞추기) 제안.</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-md border-t-4 border-red-500">
                <p className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-1">Step 4</p>
                <h4 className="font-bold text-gray-900 mb-1">병원 (의사)</h4>
                <p className="text-sm text-gray-600">가정·센터·학교 로그 종합 후 의학적 판단·치료 방향 결정, 필요 시 검사 의뢰.</p>
              </div>
            </div>
          </div>

          {/* Case B — 맞춤 학습 */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center md:text-left">Case B — 맞춤 학습</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl p-5 shadow-md border-t-4 border-blue-500">
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">Step 1</p>
                <h4 className="font-bold text-gray-900 mb-1">가정 (보호자 기록)</h4>
                <p className="text-sm text-gray-600">학습 일지·집중도·어려움 기록. AI가 시각적 학습 선호 등 분석해 그림 카드 권장.</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-md border-t-4 border-cyan-500">
                <p className="text-xs font-semibold text-cyan-600 uppercase tracking-wide mb-1">Step 2</p>
                <h4 className="font-bold text-gray-900 mb-1">센터 (치료사)</h4>
                <p className="text-sm text-gray-600">개별화 학습 세션·AI 맞춤 교재. 학교와 공동 IEP로 학습 목표 수립.</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-md border-t-4 border-green-500">
                <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-1">Step 3</p>
                <h4 className="font-bold text-gray-900 mb-1">학교 (교사)</h4>
                <p className="text-sm text-gray-600">교실 학습 지원·AI 맞춤 과제. 센터와 연계해 학습 참여도·진도 공유.</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-md border-t-4 border-red-500">
                <p className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-1">Step 4</p>
                <h4 className="font-bold text-gray-900 mb-1">병원 (의사)</h4>
                <p className="text-sm text-gray-600">통합 학습 진도·패턴 검토 후 학습 시간 조정·휴식 권장 등 의학적 조언.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnosis Section */}
      <section id="diagnosis" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">자가진단(스크리닝)</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              M‑CHAT, AQ‑50, Vanderbilt, ASRS 등 설문을 통해 초기 스크리닝과 다음 단계 안내를 제공합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ValueCard title="M‑CHAT" desc="영유아 자폐 스크리닝" icon="🧸" />
            <ValueCard title="AQ‑50" desc="자폐 스펙트럼 지표" icon="🧠" />
            <ValueCard title="Vanderbilt" desc="아동 ADHD 평가" icon="🎯" />
            <ValueCard title="ASRS" desc="성인 ADHD 자가보고" icon="📋" />
          </div>
          <p className="mt-8 text-center text-sm text-gray-500">※ 자가진단은 진단을 대체하지 않습니다. 필요한 경우 전문의 상담을 권합니다.</p>
        </div>
      </section>

      {/* 발달장애인을 위한 AI 건강관리 기능 — Step 기반 (다른 섹션과 동일 패턴) */}
      <section id="healthmanagement" className="py-14 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">발달장애인을 위한 AI 건강관리 기능</h2>
          <p className="text-center text-gray-600 text-sm mb-8">문제 → 데이터 기록 → AI 분석 → 위험 감지 → 가이드</p>
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3">
              <div className="relative">
                <div className="bg-red-50 rounded-xl p-5 border-2 border-red-200 h-full">
                  <div className="text-2xl mb-2">1️⃣</div>
                  <h4 className="font-bold text-red-900 mb-2 text-sm">STEP 1 — 현실 문제</h4>
                  <p className="text-xs text-gray-700">발달장애 아동은 약물 부작용, 식습관 문제, 체중 변화 등을 보호자가 체계적으로 관리하기 어렵습니다.</p>
                </div>
                <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-xl text-gray-300">→</div>
              </div>
              <div className="relative">
                <div className="bg-blue-50 rounded-xl p-5 border-2 border-blue-200 h-full">
                  <div className="text-2xl mb-2">2️⃣</div>
                  <h4 className="font-bold text-blue-900 mb-2 text-sm">STEP 2 — 데이터 기록</h4>
                  <p className="text-xs text-gray-700">AI 디지털케어로그는 약물 복용 기록, 행동 변화, 식사 패턴을 함께 기록합니다.</p>
                </div>
                <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-xl text-gray-300">→</div>
              </div>
              <div className="relative">
                <div className="bg-indigo-50 rounded-xl p-5 border-2 border-indigo-200 h-full">
                  <div className="text-2xl mb-2">3️⃣</div>
                  <h4 className="font-bold text-indigo-900 mb-2 text-sm">STEP 3 — AI 분석</h4>
                  <p className="text-xs text-gray-700">AI가 약물 상호작용 위험, 영양 불균형, 체중 변화 패턴을 분석합니다.</p>
                </div>
                <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-xl text-gray-300">→</div>
              </div>
              <div className="relative">
                <div className="bg-amber-50 rounded-xl p-5 border-2 border-amber-200 h-full">
                  <div className="text-2xl mb-2">4️⃣</div>
                  <h4 className="font-bold text-amber-900 mb-2 text-sm">STEP 4 — 위험 감지</h4>
                  <p className="text-xs text-gray-700">위험한 약물 조합이나 건강 변화가 감지되면 보호자에게 알림을 제공합니다.</p>
                </div>
                <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-xl text-gray-300">→</div>
              </div>
              <div>
                <div className="bg-green-50 rounded-xl p-5 border-2 border-green-200 h-full">
                  <div className="text-2xl mb-2">5️⃣</div>
                  <h4 className="font-bold text-green-900 mb-2 text-sm">STEP 5 — 가이드 제공</h4>
                  <p className="text-xs text-gray-700">AI는 안전한 복용 방법, 식단 조정, 생활 습관 개선 가이드를 제시합니다. 의사에게 전달되어 약물 조정 판단을 돕습니다.</p>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-gray-600">자람이의 집중치료·약물추적 모드에 통합 예정</p>
        </div>
      </section>

      {/* Home Therapy Matching Section */}
      <section id="hometherapy" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">홈티 매칭</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              자격 검증된 특수교사와 아동을 연결하고, 세션 기록은 케어로그로 자동 연동됩니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ValueCard title="요청/구직 게시판" desc="양면 매칭 구조" icon="📝" />
            <ValueCard title="상호 승인" desc="프로필·경력 검증" icon="✅" />
            <ValueCard title="세션 기록" desc="AI 리포트/성과 연동" icon="📈" />
          </div>
        </div>
      </section>

      {/* Institutions/Integration Section */}
      <section id="institutions" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">기관 연동 & 학교 관리자</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              센터·병원·학교와 연동해 역할 기반 접근 제어(RBAC)로 안전하게 협업합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ValueCard title="권한/동의/감사" desc="접근 제어와 이력 관리" icon="🔐" />
            <ValueCard title="학교 대시보드" desc="학급/교사/학생·출석/성과" icon="🏫" />
            <ValueCard title="리포트/내보내기" desc="IEP·진료 문서로 연결" icon="📤" />
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              핵심 기능
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              발달장애인과 가족들을 위한 통합적인 AI 디지털케어로그 서비스
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreFeatures.slice(0, 4).map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-700 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.slice(0, 2).map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                      <span className="text-blue-500 mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">로드맵</h2>
            <p className="text-xl text-gray-600">지속적 확장을 통한 발달장애 분야 표준화</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <RoadmapItem step="MVP" text="AI 상담·케어로그 핵심 모듈" />
            <RoadmapItem step="정식" text="기관·가정 연동, 리포트 상용화" />
            <RoadmapItem step="표준화" text="데이터/리포트 포맷 고도화" />
            <RoadmapItem step="확장" text="병원/지자체 파트너십" />
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            더 이상 우리사회에 정보의 부재로 인하여 고통받는 사람이 없기를
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            차별없는 치료, 이해, 그리고 희망 자람이에서 시작됩니다.
          </p>
        </div>
      </section>

      {/* 투자자·파트너 관점 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">투자자·파트너가 주목하는 이유</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              <strong>사회적 가치 + 기술 + 정책 정합성</strong>
            </p>
          </div>

          {/* AI CareTech Core 확장 구조 */}
          <div className="mb-16 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              AI CareTech Core: 자람이에서 시작된 확장 전략
            </h3>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              발달장애에서 검증된 <strong>AI 디지털케어로그 기술</strong>을 
              의료·교육·돌봄 전 영역으로 확장하는 <strong>공공기술 기반 플랫폼</strong>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Phase 1 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-blue-600">
                <div className="text-center mb-4">
                  <div className="inline-block bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mb-2">
                    1
                  </div>
                  <h4 className="font-bold text-gray-900">자람이 (현재)</h4>
                  <p className="text-sm text-blue-600">발달장애 전용</p>
                </div>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ 5,700+ 기관 등록 (커뮤니티)</li>
                  <li>✓ 2022~2025 기술 개발</li>
                  <li>✓ 2026년 시범사업 준비</li>
                </ul>
              </div>

              {/* Phase 2 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-green-600">
                <div className="text-center mb-4">
                  <div className="inline-block bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mb-2">
                    2
                  </div>
                  <h4 className="font-bold text-gray-900">교육 & 학습</h4>
                  <p className="text-sm text-green-600">일반 교육 확장</p>
                </div>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• 학습부진·경계선 지능</li>
                  <li>• 학습 데이터 통합 관리</li>
                  <li>• 맞춤형 학습 계획</li>
                </ul>
              </div>

              {/* Phase 3 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-cyan-600">
                <div className="text-center mb-4">
                  <div className="inline-block bg-cyan-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mb-2">
                    3
                  </div>
                  <h4 className="font-bold text-gray-900">토탈케어 확장</h4>
                  <p className="text-sm text-cyan-600">시니어·만성질환·난치병</p>
                </div>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• 독거 어르신 케어</li>
                  <li>• 치매·만성질환 관리</li>
                  <li>• 난치병 환자 지원</li>
                </ul>
              </div>

              {/* Phase 4 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-orange-600">
                <div className="text-center mb-4">
                  <div className="inline-block bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mb-2">
                    4
                  </div>
                  <h4 className="font-bold text-gray-900">TotalCareLog</h4>
                  <p className="text-sm text-orange-600">통합 플랫폼</p>
                </div>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• 전 연령·전 질환 통합</li>
                  <li>• 국가 헬스케어 데이터</li>
                  <li>• 2026~ 정책 연계</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-6">
              <p className="text-center text-lg leading-relaxed">
                <strong className="text-cyan-300">2026 정부 AI 정책 핵심 수혜</strong>: 
                "AI를 사회문제 해결 1대 과제로 선정" (2025년 발표) → 
                자람이는 <strong>AI 사회문제 해결형 기술의 선도 사례</strong>로 평가받고 있으며, 
                정책적 정합성과 실증 데이터를 갖춘 <strong>발달장애 AI 디지털케어로그 표준 플랫폼</strong>입니다.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* 사회적 가치 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg">
              <div className="text-5xl mb-4 text-center">🌍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">사회적 가치</h3>
              
              <div className="space-y-3 text-gray-700">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-green-700 mb-2">📊 시장 규모</h4>
                  <p className="text-sm">
                    <strong>국내 발달장애인 30만명</strong> (2024년 통계청)
                    <br/>전 세계 <strong>1억명+</strong> 추정
                    <br/>연간 시장 규모: <strong>수조원대</strong>
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-green-700 mb-2">💰 가정 부담</h4>
                  <p className="text-sm">
                    월 평균 <strong>200~300만원</strong> 치료비
                    <br/>평생 누적 비용 <strong>수억원</strong>
                    <br/>가족 경제 활동 <strong>50% 이상 포기</strong>
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-green-700 mb-2">🎯 ESG·사회적 임팩트</h4>
                  <p className="text-sm">
                    불치병·사회 약자를 위한 기술
                    <br/>치료 비용 <strong>30~50% 절감</strong> 가능
                    <br/>골든타임 놓치는 아이들 구제
                  </p>
                </div>
              </div>
            </div>

            {/* 기술 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
              <div className="text-5xl mb-4 text-center">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">기술</h3>
              
              <div className="space-y-3 text-gray-700">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-blue-700 mb-2">표준</h4>
                  <p className="text-sm">
                    <strong>AI 디지털케어로그 표준</strong>
                    <br/>발달장애 분야 데이터 인프라
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-blue-700 mb-2">🔬 기술 차별성</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 다기관 데이터 통합 표준 스키마</li>
                    <li>• 실시간 환류 + AI 강화학습</li>
                    <li>• 개인별 맞춤형 치료 자동화</li>
                    <li>• 골든타임 조기 탐지 알림</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-blue-700 mb-2">📈 확장 가능성</h4>
                  <p className="text-sm">
                    <strong>발달장애</strong>에서 시작해
                    <br/>→ <strong>일반 교육·학습부진</strong>
                    <br/>→ <strong>독거 어르신·시니어·만성질환·난치병</strong>
                    <br/>→ <strong>누구나 누리는 의료·케어 혜택</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* 검증된 시장 */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg">
              <div className="text-5xl mb-4 text-center">✅</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">검증된 시장</h3>
              
              <div className="space-y-3 text-gray-700">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-blue-700 mb-2">📍 현재 성과</h4>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>5,700+ 기관</strong> 등록 (커뮤니티)</li>
                    <li>• <strong>2022~2025</strong> 기술 개발 완료</li>
                    <li>• 일부 센터·병원·특수교사 <strong>베타 테스트 중</strong></li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-cyan-700 mb-2">🤝 파트너십</h4>
                  <p className="text-sm">
                    센터·학교·병원과 <strong>실증 완료</strong>
                    <br/>교육청·보건복지부 <strong>협력 논의</strong>
                    <br/>2025년 일부 파일럿, <strong>2026년 정부 시범사업 준비</strong>
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-indigo-700 mb-2">🎯 2026 정부 AI 정책 정합성</h4>
                  <p className="text-sm">
                    <strong>"AI 사회문제 해결형 과제 1순위"</strong> (2025년 발표)
                    <br/>• 헬스케어·교육 분야 AI 사회문제 해결
                    <br/>• 데이터 표준화·공공기술 기반 권장
                    <br/>• 자람이 = 정책 부합 사례
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 비즈니스 모델 */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 md:p-12 mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">공공기술 기반 지속 가능 모델</h3>
            
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm mb-6">
              <p className="text-lg text-center leading-relaxed">
                <strong className="text-cyan-300">현재 비영리 운영 중</strong>이며, 
                <strong>공공기술 형태로 연구·고도화</strong> 단계입니다.
                <br/>사회적 사명을 우선하되, 지속 가능성을 위한 <strong>정책 연계·공공 파트너십</strong>을 추진합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="text-xl font-bold mb-3 text-cyan-300">🏛️ 공공 협력 모델</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong>정부 바우처</strong>: 발달장애 지원 사업 연계</li>
                  <li><strong>교육청 협력</strong>: 특수교육 표준화 시범사업</li>
                  <li><strong>지자체 제휴</strong>: 복지 정책 협의 중 (2025~)</li>
                  <li><strong>공공데이터</strong>: 익명화 연구 데이터 (의료·학술 기관)</li>
                </ul>
              </div>

              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="text-xl font-bold mb-3 text-cyan-300">📊 단계별 확장</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong>1단계</strong>: 발달장애 표준 확립 (자람이 완성)</li>
                  <li><strong>2단계</strong>: 일반 교육·학습부진 지원</li>
                  <li><strong>3단계</strong>: 독거 어르신·시니어·만성질환</li>
                  <li><strong>4단계</strong>: 난치병 환자 및 모든 사회 약자 지원</li>
                  <li><strong>최종</strong>: 누구나 누리는 의료·케어 혜택 실현</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <p className="text-lg text-center leading-relaxed">
                <strong className="text-cyan-300">검증 기반 확장</strong>: 
                표준 케어로그·다기관 협업·기관 베타 검증을 바탕으로 발달장애 → 교육(EduCareLog) → 시니어·토탈케어로 
                동일 데이터 표준을 확장하는 플랫폼 전략입니다.
              </p>
            </div>
          </div>

          {/* 투자 제안 */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">함께 만들어갈 미래</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div>
                <h4 className="text-xl font-bold text-indigo-700 mb-3">👥 우리가 찾는 파트너</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span><strong>임팩트 투자자</strong>: 사회적 가치 + 재무적 수익 동시 추구</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span><strong>헬스케어·에듀테크 전문 VC</strong>: 시장 이해도 + 네트워크</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span><strong>전략적 파트너</strong>: 병원·교육청·보험사 연계 가능</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span><strong>AI·데이터 기업</strong>: 기술 협력 + 글로벌 확장</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-indigo-700 mb-3">🎯 우리가 제공하는 가치</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">✓</span>
                    <span><strong>검증된 기술</strong>: AI 강화학습 기반 맞춤형 치료·학습</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">✓</span>
                    <span><strong>명확한 시장</strong>: 국내 30만명 → 전 세계 1억명</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">✓</span>
                    <span><strong>확장 가능성</strong>: 발달장애 → 교육 → 시니어 → 글로벌</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">✓</span>
                    <span><strong>사회적 임팩트</strong>: 불치병·사회 약자를 위한 기술</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-gray-700 mb-4">
                <strong>드림에이아이랩과 함께 세상을 바꾸는 기술에 투자하세요.</strong>
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                파트너십 문의하기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Status — 3 status cards (Hero와 중복 방지) */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Deployment Status</h2>
          <p className="text-center text-gray-600 text-sm mb-8 max-w-xl mx-auto">현재 단계·검증·도입 가능 범위를 안내합니다.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-orange-200">
              <p className="text-xs font-semibold text-orange-600 uppercase tracking-wide mb-2">Current Stage</p>
              <p className="text-lg font-bold text-gray-900">Pilot (기관 베타 테스트)</p>
              <p className="text-sm text-gray-600 mt-1">기관 베타 테스트 진행 중</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Validation</p>
              <p className="text-sm text-gray-900 font-semibold mb-1">다기관 협업 구조 검증</p>
              <p className="text-sm text-gray-600">가정·센터·학교·병원 데이터 연계 검증</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Deployment Readiness</p>
              <p className="text-sm text-gray-900 font-semibold mb-1">기관 도입 가능 범위</p>
              <p className="text-sm text-gray-600">제한적 기관 도입·공공 PoC 협의 가능</p>
            </div>
          </div>
        </div>
      </section>

      {/* DAL Care Data Ecosystem — flow: 카드 → 화살표 → 카드 (통일 카드 스타일) */}
      <section className="py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">DAL Care Data Ecosystem</h2>
          <p className="text-center text-gray-600 text-sm mb-8 max-w-2xl mx-auto">하나의 케어 데이터 표준으로 확장되는 플랫폼 전략</p>
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-2">
            <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-200 transition-colors flex-1 min-w-0 text-center shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Jarame</h3>
              <p className="text-sm text-gray-600">발달장애 케어 데이터 인프라</p>
            </div>
            <div className="flex items-center justify-center text-gray-400 shrink-0 text-xl min-h-[2rem] md:min-h-0" aria-hidden="true">→</div>
            <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-200 transition-colors flex-1 min-w-0 text-center shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">EduCareLog</h3>
              <p className="text-sm text-gray-600">교육 데이터 플랫폼</p>
            </div>
            <div className="flex items-center justify-center text-gray-400 shrink-0 text-xl min-h-[2rem] md:min-h-0" aria-hidden="true">→</div>
            <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-200 transition-colors flex-1 min-w-0 text-center shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Senior Care</h3>
              <p className="text-sm text-gray-600">시니어·만성질환 케어 데이터</p>
            </div>
            <div className="flex items-center justify-center text-gray-400 shrink-0 text-xl min-h-[2rem] md:min-h-0" aria-hidden="true">→</div>
            <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-200 transition-colors flex-1 min-w-0 text-center shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">TotalCareLog</h3>
              <p className="text-sm text-gray-600">전 생애 건강 데이터 플랫폼</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact — 3 CTA cards (제목 + 설명 + 버튼, 통일 스타일) */}
      <section className="py-14 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-2 text-center">Contact</h2>
          <p className="text-center text-blue-100 text-sm mb-8">도입, 이용, 파트너십 문의</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20 flex flex-col">
              <h3 className="font-bold text-white mb-2">기관 도입 문의</h3>
              <p className="text-sm text-blue-100 mb-4 flex-1">센터 · 병원 · 학교 대상</p>
              <Link
                href="/contact?type=institution"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-colors"
              >
                문의하기
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20 flex flex-col">
              <h3 className="font-bold text-white mb-2">공공·파트너십 문의</h3>
              <p className="text-sm text-blue-100 mb-4 flex-1">정부 · 투자 · 협력 문의</p>
              <Link
                href="/contact?type=partner"
                className="inline-flex items-center justify-center border-2 border-white text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                문의하기
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20 flex flex-col">
              <h3 className="font-bold text-white mb-2">보호자 이용 시작</h3>
              <p className="text-sm text-blue-100 mb-4 flex-1">자람이 서비스 시작</p>
              <a
                href="https://jarame.or.kr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-white text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                시작하기
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function ValueCard({ title, desc, icon }: { title: string; desc: string; icon: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  )
}

function RoadmapItem({ step, text }: { step: string; text: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow text-center">
      <div className="text-sm text-gray-500 mb-1">단계</div>
      <div className="text-xl font-bold text-gray-900 mb-2">{step}</div>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  )
}