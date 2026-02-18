import type { Metadata } from 'next'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI 디지털케어로그 | 세계 유일 발달장애 표준 기술 | 자람이 | 드림에이아이랩',
  description:
    '발달장애 아이 치료 어떻게? 자람이가 답합니다. 세계 유일 AI 디지털케어로그 표준으로 골든타임과 맞춤형 치료·학습 실현. AI 강화학습 기반 맞춤형 치료·학습 기술. 전국 5,700개 기관 등록, 베타 테스트 중. 가정·학교·센터·병원 통합, 실시간 AI 분석. ADHD·자폐증·경계성지능 등 모든 발달장애 지원. AI 엔진형 Middleware.',
  keywords: 'AI 디지털케어로그, 발달장애 표준, 세계 유일, 맞춤형 치료, 맞춤형 학습, 골든타임, 발달장애 치료 방법, ADHD 치료, 자폐증 치료, 발달장애 아이 키우기, 특수교육, 언어치료, 작업치료, 행동치료 ABA, 감각통합치료, IEP 개별화교육계획, 발달지연 조기발견, 치료센터 추천, 특수교사 도구, 치료사 협업, 다기관 연계, 자람이, 드림에이아이랩, 정해성, 이지수, 이지훈, AI 의료 기술, 케어로그 표준화, 실시간 환류, 강화학습, Middleware, AI 엔진, 발달장애 골든타임',
  alternates: {
    canonical: 'https://dreamailab.com/services/jarame',
  },
  openGraph: {
    type: 'website',
    url: 'https://dreamailab.com/services/jarame',
    siteName: '드림에이아이랩',
    title: '자람이 — 세계 유일 AI 디지털케어로그 표준 | 발달장애 골든타임·맞춤형 치료·학습',
    description:
      '드림에이아이랩의 시작이자 근본. 세계 유일 발달장애 AI 케어로그 표준 기술. 전국 5,700개 기관 등록 커뮤니티, 베타 테스트 중. AI 강화학습 기반 맞춤형 치료·학습. 가정·학교·센터·병원 통합, 실시간 AI 분석. AI 엔진형 Middleware.',
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
    title: '자람이 — 세계 유일 AI 디지털케어로그 표준 | 맞춤형 치료·학습',
    description:
      '전국 5,700개 기관 등록 커뮤니티, 베타 테스트 중. AI 강화학습 기반 맞춤형 치료·학습. 골든타임과 맞춤형 치료·학습을 AI로 실현. 세계 표준 선도.',
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
    "name": "자람이 | 세계 유일 AI 디지털케어로그 표준",
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
          "text": "자람이는 발달장애 아동의 가정·학교·센터·병원 기록을 하나의 표준화된 AI 디지털케어로그로 통합하고, 실시간 AI 분석을 통해 개인 맞춤형 치료·학습 계획을 자동 생성하는 세계 유일의 표준 플랫폼입니다. 골든타임을 놓치지 않고 효과적인 치료·교육을 실현합니다."
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
    "headline": "세계 유일 AI 디지털케어로그: 발달장애 골든타임과 맞춤형 치료·학습의 표준",
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
    "keywords": "AI 디지털케어로그, 발달장애 표준, 세계 유일, 맞춤형 치료, 맞춤형 학습, 골든타임, 다기관 연계, 실시간 환류, 강화학습, Middleware, AI 엔진, 정해성, 이지수, 이지훈",
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
    "description": "불치병과 사회 약자를 위한 AI 기술. 세계 유일 발달장애 AI 디지털케어로그 표준으로 골든타임과 맞춤형 치료·학습을 실현하는 AI 엔진형 Middleware 기업.",
    "foundingDate": "2022",
    "founder": {
      "@type": "Person",
      "name": "정해성"
    },
    "keywords": "AI 디지털케어로그, 발달장애 표준, 세계 유일, 맞춤형 치료, 맞춤형 학습, 자람이, EduCareLog, Middleware, AI 엔진",
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
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* 드림에이아이랩의 시작 배지 */}
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <p className="text-sm font-semibold text-white">
                🌟 드림에이아이랩의 시작이자 근본 | 세계 유일 AI 디지털케어로그 표준
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">{brand.name} — 세계 유일 AI 디지털케어로그 표준 기술</h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto font-semibold text-blue-100">
              발달장애 <strong className="text-white">골든타임과 맞춤형 치료·학습</strong>을 AI로 실현합니다
            </p>
            
            {/* 검증된 기술 강조 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-white mb-1">5,700+</p>
                  <p className="text-sm text-blue-100">전국 기관 등록 (커뮤니티)</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white mb-1">세계 유일</p>
                  <p className="text-sm text-blue-100">AI 케어 데이터 표준 선도</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white mb-1">Middleware</p>
                  <p className="text-sm text-blue-100">AI 엔진형 기술 기업</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a 
                href="https://jarame.or.kr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg text-lg font-bold hover:bg-blue-50 transition-colors shadow-xl"
              >
                자람이 시작하기 →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 창립 철학 - Founder Message */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-50 border-y-2 border-blue-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-blue-200">
            <div className="text-center mb-6">
              <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full px-6 py-2 mb-4">
                <p className="font-bold text-sm">💬 창립 철학</p>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                우리는 왜 시작했는가
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-500">
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  "우리는 <strong className="text-blue-600">치료할 수 없는 병</strong>을 <strong className="text-blue-600">기록과 AI</strong>로 바꿉니다."
                </p>
                <p className="text-base text-gray-700">
                  발달장애는 <strong>데이터 단절·정보 불평등·기관 간 협업 부재</strong>라는 사회 전체 문제의 축소판입니다.
                  드림에이아이랩은 이 문제를 AI 기술로 해결하며, <strong className="text-indigo-700">인류의 불치병과 사회 약자를 위한 AI의 첫 걸음</strong>을 내딛습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 드림에이아이랩의 약속 - 공지사항 */}
      <section className="py-12 bg-white border-b-2 border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-xl p-8 md:p-12 border-2 border-blue-200">
            <div className="text-center mb-6">
              <div className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full px-6 py-2 mb-4">
                <p className="font-bold text-sm">📢 드림에이아이랩의 약속</p>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                우리는 여러분과 함께 갑니다
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p className="text-center text-lg font-semibold text-indigo-700">
                우리는 언제나 발달장애 가족과 현장의 선생님들의 어려움과 노고에 <strong>깊은 존경과 감사</strong>를 드립니다.
              </p>

              <p className="text-base">
                발달장애에 대한 <strong>정보의 부재와 가정의 어려움</strong>을 해결하고자 시작된 <strong className="text-blue-600">자람이 프로젝트</strong>는 
                이제 단순한 커뮤니티를 넘어, <strong className="text-cyan-600">세계 유일의 AI 디지털케어로그 기반 맞춤형 치료·학습 플랫폼</strong>으로 발전하고 있습니다.
              </p>

              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                <p className="text-base mb-2">
                  <strong className="text-blue-900">디지털케어로그</strong>는 <strong>병원·센터·학교·가정이 함께 사용하는 AI 기록·분석·지원 시스템</strong>으로, 
                  치료사·교사·의사·보호자가 <strong>하나의 기록을 공유</strong>하며 아이의 치료와 학습을 맞춤형으로 연결할 수 있습니다.
                </p>
              </div>

              <p className="text-base">
                현재 이 시스템은 <strong>실제 현장에 적용되어 안정화와 고도화가 진행 중</strong>이며, 
                <span className="text-green-700 font-semibold">보호자를 위한 맞춤형 케어 계획</span>, 
                <span className="text-cyan-700 font-semibold">교사들이 현장에서 바로 활용할 수 있는 교재 생성</span>, 
                <span className="text-blue-700 font-semibold">맞춤형 학습·치료 지원 서비스</span>를 순차적으로 제공할 예정입니다.
              </p>

              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl p-6 text-center mt-6">
                <p className="text-lg font-bold mb-2">
                  💙 우리는 반드시 여러분께 <span className="text-cyan-300">일상의 평범함</span>을 돌려드리겠습니다.
                </p>
                <p className="text-base">
                  그때까지 <strong>자람이는 멈추지 않겠습니다.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary - AI 검색엔진 최적화 */}
      <section className="py-12 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 mb-3">
              <p className="text-xs font-bold">📌 Executive Summary</p>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">자람이 핵심 요약</h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-white/90 leading-relaxed space-y-3 text-center">
            <p className="text-base md:text-lg">
              <strong className="text-cyan-300">자람이</strong>는 <strong>전국 5,700개 기관이 등록된 발달장애 커뮤니티</strong>에서 시작해, 
              <strong className="text-cyan-300">세계 유일 발달장애 AI 디지털케어로그 표준 플랫폼</strong>으로 발전했습니다.
            </p>
            <p className="text-base md:text-lg">
              <strong>2022년 개발 시작, 2025년 초 완성</strong>. 현재 <strong>일부 센터·병원·특수교사와 베타 테스트 중</strong>이며, 
              <strong className="text-cyan-300">정부 정책과 연계한 전국 확대</strong>를 준비하고 있습니다.
            </p>
            <p className="text-base md:text-lg">
              가정·학교·센터·병원의 <strong>행동·감정·학습·치료 데이터를 표준화</strong>하여 통합하고, 
              <strong className="text-cyan-300">AI 강화학습</strong>으로 <strong>개인별 맞춤 치료·학습 계획을 자동 생성</strong>합니다.
            </p>
            <p className="text-base md:text-lg">
              <strong className="text-cyan-300">AI 엔진형 Middleware 기업</strong>으로, 
              데이터 파이프라인과 분석엔진 중심의 독자 기술을 보유한 <strong>케어 데이터 AI의 선도 사례</strong>입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Why We Started - 왜 시작했는가 */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">왜 자람이로 시작했는가</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              <strong>불치병과 사회 약자를 위한 기술</strong> — 드림에이아이랩이 발달장애에서 시작한 이유
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* 문제 인식 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">💔</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">발달장애 가족들의 현실</h3>
                  <p className="text-gray-600">정해성 CTO, 특수교사 이지수·이지훈이 현장에서 목격한 절박함</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-700">
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                  <h4 className="font-bold text-red-700 mb-2">🚨 골든타임을 놓치는 아이들</h4>
                  <p className="text-sm mb-2">
                    <strong>발달장애는 조기개입이 핵심</strong>입니다. 3~7세의 골든타임에 적절한 치료를 받으면 
                    평생의 발달 궤적이 달라집니다.
                  </p>
                  <p className="text-sm text-gray-600">
                    하지만 <strong>치료사 부족, 높은 비용, 정보 부재</strong>로 대부분의 가정이 골든타임을 놓칩니다.
                    부모는 "우리 아이에게 지금 무엇이 필요한지" 알 수 없고, 치료사는 아이의 집·학교 상황을 모릅니다.
                  </p>
                </div>

                <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
                  <h4 className="font-bold text-orange-700 mb-2">🔗 단절된 치료 시스템</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 가정에서의 행동 데이터가 센터에 전달 안 됨</li>
                    <li>• 학교와 병원이 따로 놀아 중복 검사·모순된 처방</li>
                    <li>• 종이 기록지로는 장기 패턴 추적 불가능</li>
                    <li>• 치료 효과를 객관적으로 측정할 방법 없음</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
                  <h4 className="font-bold text-yellow-700 mb-2">💰 감당할 수 없는 비용</h4>
                  <p className="text-sm text-gray-600">
                    <strong>월 200~300만원</strong>의 치료비. 맞벌이 가정도 버거운 금액이지만, 
                    그보다 더 큰 문제는 <strong>비용을 들여도 효과를 보장할 수 없다</strong>는 것입니다.
                    맞춤형 계획 없이 일괄적 프로그램만 반복하면 돈과 시간만 낭비됩니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 기술적 해법 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">💡</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">기술로 해결할 수 있다</h3>
                  <p className="text-gray-600">AI 디지털케어로그가 만드는 변화</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-700">
                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h4 className="font-bold text-green-700 mb-2">✅ 골든타임 실시간 관리</h4>
                  <p className="text-sm mb-2">
                    <strong>AI가 24시간 행동·발달 데이터를 추적</strong>하여 이상 징후를 즉시 알립니다.
                  </p>
                  <p className="text-sm text-gray-600">
                    "지난주부터 눈 맞춤이 줄었습니다" → 부모와 치료사에게 실시간 알림 → 
                    조기 개입으로 악화 방지. 골든타임을 놓치지 않습니다.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-700 mb-2">✅ 모든 기관 데이터 통합</h4>
                  <p className="text-sm mb-2">
                    <strong>가정·학교·센터·병원의 기록을 하나의 표준 스키마로 통합</strong>
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 부모가 가정에서 관찰 기록 → 치료사가 실시간 확인</li>
                    <li>• 학교 특수교사 IEP → 센터 치료 계획에 자동 반영</li>
                    <li>• 병원 진단 → 모든 기관이 동일 정보 기반 협업</li>
                  </ul>
                </div>

                <div className="bg-cyan-50 rounded-lg p-4 border-l-4 border-cyan-500">
                  <h4 className="font-bold text-cyan-700 mb-2">✅ 맞춤형 치료 자동화</h4>
                  <p className="text-sm mb-2">
                    <strong>AI가 개인별 패턴을 분석</strong>하여 최적의 치료 계획을 자동 생성
                  </p>
                  <p className="text-sm text-gray-600">
                    "A학생은 소리에 민감 → 조용한 환경 + 시각 자료 중심"
                    <br/>"B학생은 주의 3분 → 짧은 활동 단위 + 빈번한 보상"
                    <br/>매일 데이터가 쌓이면서 치료 정확도는 계속 향상됩니다.
                  </p>
                </div>

                <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-500">
                  <h4 className="font-bold text-indigo-700 mb-2">✅ 비용 효율화</h4>
                  <p className="text-sm text-gray-600">
                    AI가 <strong>데이터 기반으로 효과적인 치료만 추천</strong>하여 불필요한 비용을 줄입니다.
                    또한 가정에서도 전문가 수준의 가이드를 받을 수 있어 센터 방문 횟수를 줄일 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 비전과 사명 */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 md:p-12">
            <div className="text-center max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">드림에이아이랩의 비전</h3>
              <p className="text-xl mb-6 text-blue-100">
                <strong>"세상의 모든 불치병과 사회 약자를 위한 AI 기술"</strong>
              </p>
              <p className="text-lg leading-relaxed">
                발달장애는 시작입니다. 자람이에서 검증된 <strong>AI 디지털케어로그 기술</strong>은 
                <strong>발달장애, 일반 교육, 독거 어르신, 시니어 케어, 만성질환, 난치병 환자</strong> 등 
                <strong className="text-cyan-300">누구나 필요한 의료·케어 혜택을 누릴 수 있는 토탈케어 플랫폼</strong>으로 확장될 것입니다.
                <br/><br/>
                <strong className="text-yellow-300">골든타임을 지키고, 맞춤형 케어를 실현하며, 사회 약자들에게 희망을 주는 기술</strong> — 
                이것이 드림에이아이랩이 존재하는 이유입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">왜 지금, 자람이인가</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              발달장애 분야의 정보 부재와 기관 간 단절을 해결하는 AI 디지털케어로그 플랫폼
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">기관 간 연계</h3>
              <p className="text-gray-600">가정·학교·센터·병원의 기록을 하나로 통합하여 협업을 강화합니다</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">데이터 표준화</h3>
              <p className="text-gray-600">AI 디지털케어로그로 발달장애 분야의 새로운 표준을 제시합니다</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI 맞춤 분석</h3>
              <p className="text-gray-600">개인별 발달 패턴을 분석하여 최적의 치료 방향을 제시합니다</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">지속적 성장</h3>
              <p className="text-gray-600">장기 모니터링과 피드백으로 지속적인 발달을 지원합니다</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI 디지털케어로그 기술 실증 */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">세계 유일 AI 디지털케어로그 표준 기술</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              <strong>발달장애 치료의 표준 시스템</strong> — 이론이 아닌 실전에서 검증된 기술
            </p>
          </div>

          {/* 기술 작동 원리 */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">실시간 환류 시스템의 작동 방식</h3>
            
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

            <div className="mt-8 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6 border-l-4 border-indigo-500">
              <p className="text-gray-700 text-center">
                <strong className="text-indigo-700">💡 핵심 차별점</strong>: 
                단순한 기록 시스템이 아닌 <strong>실시간으로 학습하고 피드백하는 AI 시스템</strong>입니다.
                데이터가 쌓일수록 정확도가 향상되며, <strong>5,700개 기관의 데이터가 하나의 AI 모델을 계속 발전</strong>시킵니다.
              </p>
            </div>
          </div>

          {/* 실제 사례 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
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

          {/* 검증 데이터 */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">의료 현장 검증 데이터</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-300 mb-2">5,700+</div>
                <p className="text-lg">전국 발달장애 관련 기관</p>
                <p className="text-sm text-blue-100">커뮤니티 등록 기관</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-300 mb-2">2022~2025</div>
                <p className="text-lg">기술 개발 기간</p>
                <p className="text-sm text-blue-100">베타 테스트 진행 중</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-300 mb-2">2025년</div>
                <p className="text-lg">기술 완성</p>
                <p className="text-sm text-blue-100">베타 테스트 중</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <p className="text-lg text-center leading-relaxed">
                <strong className="text-yellow-300">Google·Naver 검색: "AI 디지털케어로그 = 발달장애 치료 기술"</strong>
                <br/>전국 발달장애 관련 기관들이 자람이의 AI 디지털케어로그 기술을 
                <strong>발달장애 치료의 새로운 표준</strong>으로 인식하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI 기술 구조 시각화 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full px-6 py-2 mb-4">
              <p className="font-bold text-sm">🔬 Technical Architecture</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">AI 디지털케어로그는 이렇게 작동합니다</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              <strong>입력 → 표준화 → AI 분석 → 맞춤형 출력</strong>의 실시간 강화학습 루프
            </p>
          </div>

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
                <strong className="text-blue-600">전 세계 수백만 발달장애인이 하나의 체계로 데이터를 기록하고 연결되는 것</strong>은 
                의료 역사상 전례 없는 시도입니다.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                자람이는 <strong className="text-cyan-600">최초로 이를 가능하게 하는 AI 디지털케어로그 플랫폼</strong>입니다.
              </p>
              
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border-l-4 border-amber-500 my-6">
                <p className="text-lg text-gray-800 font-semibold mb-2">
                  💡 치료의 전환점
                </p>
                <p className="text-base text-gray-700">
                  <strong>"치료할 수 없는 병"</strong>이 아니라, 
                  <strong className="text-blue-600"> 기록하고 분석하면 치료의 실마리를 찾을 수 있는 병</strong>으로 전환합니다.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-6 my-6">
                <p className="text-lg font-bold mb-2">
                  아무도 하지 않았기에, 누군가는 해야 합니다.
                </p>
                <p className="text-base mb-3">
                  인류는 늘 <strong>불치병이라는 이름의 질병</strong>을 누군가의 노력으로 극복해 왔습니다.
                  그리고 지금, <strong className="text-cyan-300">인공지능 기술의 도약</strong>으로 
                  수십 년 풀지 못했던 질병조차 단기간에 해법을 찾을 수 있는 세상이 되었습니다.
                </p>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <p className="text-base">
                    <strong className="text-cyan-300">🌍 세계 표준 선도</strong>: 
                    자람이는 국내를 넘어 <strong>전 세계 발달장애 AI 케어로그의 표준</strong>을 확립하고 있습니다. 
                    우리가 만든 데이터 구조와 파이프라인이 <strong className="text-cyan-300">글로벌 기준</strong>이 되도록 선도합니다.
                  </p>
                </div>
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

      {/* 7개 역할군별 맞춤형 솔루션 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              7개 역할군별 맞춤형 솔루션
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              발달장애 현장의 모든 이해관계자를 위한 전문가-AI 협력 시스템
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 보호자+활동보조 */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg">
              <div className="text-5xl mb-4 text-center">👪</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">보호자 + 활동보조</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 font-bold">•</span>
                  <span><strong>전문 지식 학습:</strong> AI 상담, 행동 이해 리포트</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 font-bold">•</span>
                  <span><strong>가정 일지:</strong> 일상 활동·감정 상태 기록</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 font-bold">•</span>
                  <span><strong>홈티매칭:</strong> AI 기반 활동보조 연결</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 font-bold">•</span>
                  <span><strong>통합 리포트:</strong> 센터·학교·병원 연계</span>
                </li>
              </ul>
            </div>

            {/* 치료사+센터 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg">
              <div className="text-5xl mb-4 text-center">🏢</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">치료사 + 센터</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 font-bold">•</span>
                  <span><strong>10가지 치료 모듈:</strong> 표준화된 기록 시스템</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 font-bold">•</span>
                  <span><strong>AI 성과 분석:</strong> 치료 효과 측정</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 font-bold">•</span>
                  <span><strong>스케줄 최적화:</strong> AI 기반 일정 관리</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 font-bold">•</span>
                  <span><strong>행정 자동화:</strong> 리포트·청구 자동 생성</span>
                </li>
              </ul>
            </div>

            {/* 의사+병원 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg">
              <div className="text-5xl mb-4 text-center">🏥</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">의사 + 병원</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2 font-bold">•</span>
                  <span><strong>통합 케어 데이터:</strong> 가정·센터·학교 기록</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2 font-bold">•</span>
                  <span><strong>AI 진단 분석:</strong> 치료 계획 자동 생성</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2 font-bold">•</span>
                  <span><strong>약물 추적:</strong> 2주 집중 모니터링</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2 font-bold">•</span>
                  <span><strong>협진 네트워크:</strong> 다양한 전문의 협력</span>
                </li>
              </ul>
            </div>

            {/* 교사+학교 */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 shadow-lg">
              <div className="text-5xl mb-4 text-center">🏫</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">교사 + 학교</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 font-bold">•</span>
                  <span><strong>맞춤형 교육계획:</strong> IEP 자동 생성</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 font-bold">•</span>
                  <span><strong>AI 교재 생성:</strong> DALL-E 3 시각 자료</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 font-bold">•</span>
                  <span><strong>학습 진도 분석:</strong> 실시간 성과 측정</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 font-bold">•</span>
                  <span><strong>행정 자동화:</strong> 출결·성적·보고서</span>
                </li>
              </ul>
            </div>

            {/* 센터 관리자 */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 shadow-lg">
              <div className="text-5xl mb-4 text-center">💼</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">센터 관리자</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 font-bold">•</span>
                  <span><strong>운영 최적화:</strong> 수익성·효율성 향상</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 font-bold">•</span>
                  <span><strong>직원 관리:</strong> 성과 평가·교육</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 font-bold">•</span>
                  <span><strong>통계 대시보드:</strong> 실시간 현황 파악</span>
                </li>
              </ul>
            </div>

            {/* 병원 관리자 */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 shadow-lg">
              <div className="text-5xl mb-4 text-center">🏥</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">병원 관리자</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 font-bold">•</span>
                  <span><strong>맞춤형 진료:</strong> 환자 만족도 향상</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 font-bold">•</span>
                  <span><strong>병원 마케팅:</strong> 진료 성공률 데이터</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 font-bold">•</span>
                  <span><strong>의사 업무 정밀화:</strong> 효율성 극대화</span>
                </li>
              </ul>
            </div>

            {/* 학교 관리자 */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 shadow-lg">
              <div className="text-5xl mb-4 text-center">🎓</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">학교 관리자</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2 font-bold">•</span>
                  <span><strong>맞춤형 교육:</strong> 학생 성과 향상</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2 font-bold">•</span>
                  <span><strong>교육 성과 분석:</strong> 데이터 기반 개선</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2 font-bold">•</span>
                  <span><strong>행정 자동화:</strong> 학사 업무 효율화</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 text-center">
            <p className="text-xl font-bold mb-3">
              🎭 완전 구현된 7개 역할군 데모 모드
            </p>
            <p className="text-lg">
              로그인 없이도 모든 역할의 실제 기능을 직접 체험해보실 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 다기관 연계 실제 사례 */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">다기관 연계 실제 사례</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              보호자·치료사·의사·교사가 <strong>하나의 AI 디지털케어로그</strong>로 협력하는 방식
            </p>
          </div>

          {/* 사례 A: 상동행동(ABA) */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-t-2xl p-6">
              <h3 className="text-2xl font-bold text-center">사례 A · 상동행동(ABA) - 다기관 연계 치료</h3>
              <p className="text-center text-blue-100 mt-2">보호자가 센터/학교/병원을 연계하여 상동행동을 과학적으로 개입</p>
            </div>
            
            <div className="bg-gray-50 rounded-b-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* 1단계: 가정 */}
                <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-blue-500">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-3xl">👪</span>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">1</div>
                      <h4 className="font-bold text-gray-900">가정 (보호자 기록)</h4>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="font-semibold text-blue-700">상황</p>
                      <p>저녁, TV 켜짐</p>
                    </div>
                    <div className="bg-red-50 rounded-lg p-3">
                      <p className="font-semibold text-red-700">행동</p>
                      <p>손 흔들기 10분 이상 지속</p>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-3">
                      <p className="font-semibold text-orange-700">반응</p>
                      <p>이름 부르면 잠깐 멈췄다가 다시 시작</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-500">
                      <p className="font-semibold text-blue-700">🤖 AI 분석</p>
                      <p className="text-xs">"감각 자극(소음)에 민감 → 차분한 환경 조정 권장"</p>
                    </div>
                  </div>
                </div>

                {/* 2단계: 센터 */}
                <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-cyan-500">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-3xl">🏢</span>
                    <div>
                      <div className="text-2xl font-bold text-cyan-600">2</div>
                      <h4 className="font-bold text-gray-900">센터 (ABA 치료사)</h4>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="bg-cyan-50 rounded-lg p-3">
                      <p className="font-semibold text-cyan-700">치료사 역할</p>
                      <p>ABA 세션 진행 및 중재 전략 수립</p>
                    </div>
                    <div className="bg-indigo-50 rounded-lg p-3">
                      <p className="font-semibold text-indigo-700">세션 기록</p>
                      <p>30분 중 손 흔들기 5회</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <p className="font-semibold text-green-700">중재</p>
                      <p>"손을 무릎에" 신호 + 블록 맞추기 강화</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-500">
                      <p className="font-semibold text-blue-700">🤖 AI 리포트</p>
                      <p className="text-xs">주간 감소율 -20%, 성공률 70%</p>
                    </div>
                  </div>
                </div>

                {/* 3단계: 학교 */}
                <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-green-500">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-3xl">🏫</span>
                    <div>
                      <div className="text-2xl font-bold text-green-600">3</div>
                      <h4 className="font-bold text-gray-900">학교 (교사)</h4>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="bg-green-50 rounded-lg p-3">
                      <p className="font-semibold text-green-700">교사 역할</p>
                      <p>교실 환경 조정 및 일반화 훈련 지원</p>
                    </div>
                    <div className="bg-teal-50 rounded-lg p-3">
                      <p className="font-semibold text-teal-700">관찰</p>
                      <p>수업 중 손 흔들기 3회</p>
                    </div>
                    <div className="bg-emerald-50 rounded-lg p-3">
                      <p className="font-semibold text-emerald-700">환경조정</p>
                      <p>조용한 자리 배치 + 과제 완료 시 스티커 보상</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-500">
                      <p className="font-semibold text-blue-700">🤖 AI 권장</p>
                      <p className="text-xs">"주의 전환 가능 → 대체행동(블록 맞추기) 제안"</p>
                    </div>
                  </div>
                </div>

                {/* 4단계: 병원 */}
                <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-red-500">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-3xl">🏥</span>
                    <div>
                      <div className="text-2xl font-bold text-red-600">4</div>
                      <h4 className="font-bold text-gray-900">병원 (의사)</h4>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="bg-red-50 rounded-lg p-3">
                      <p className="font-semibold text-red-700">의사 역할</p>
                      <p>의학적 판단 및 치료 방향 결정</p>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-3">
                      <p className="font-semibold text-orange-700">통합 데이터</p>
                      <p>가정·센터·학교 로그 그래프</p>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-3">
                      <p className="font-semibold text-yellow-700">의사 결정</p>
                      <p>"약물 조정 불필요, 비약물 중재 유지"</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-500">
                      <p className="font-semibold text-blue-700">추가 검사</p>
                      <p className="text-xs">청각 검사 의뢰</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 사례 B: 맞춤 학습(교육) */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-t-2xl p-6">
              <h3 className="text-2xl font-bold text-center">사례 B · 맞춤 학습(교육) - 다기관 연계 치료</h3>
              <p className="text-center text-cyan-100 mt-2">보호자가 센터/학교/병원을 연계하여 맞춤형 학습을 과학적으로 지원</p>
            </div>
            
            <div className="bg-gray-50 rounded-b-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* 1단계: 가정 */}
                <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-blue-500">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-3xl">👪</span>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">1</div>
                      <h4 className="font-bold text-gray-900">가정 (학습 일지)</h4>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="font-semibold text-blue-700">학습 과제</p>
                      <p>숫자 1-5 인식하기</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <p className="font-semibold text-green-700">반응</p>
                      <p>집중 잘함 (15분 지속)</p>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-3">
                      <p className="font-semibold text-orange-700">어려움</p>
                      <p>숫자 3, 4 혼동</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-500">
                      <p className="font-semibold text-blue-700">🤖 AI 분석</p>
                      <p className="text-xs">"시각적 학습 선호 → 그림 카드 효과적"</p>
                    </div>
                  </div>
                </div>

                {/* 2단계: 센터 */}
                <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-cyan-500">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-3xl">🏢</span>
                    <div>
                      <div className="text-2xl font-bold text-cyan-600">2</div>
                      <h4 className="font-bold text-gray-900">센터 (치료사)</h4>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="bg-cyan-50 rounded-lg p-3">
                      <p className="font-semibold text-cyan-700">치료사 역할</p>
                      <p>학습 세션 진행 및 개별화 교육</p>
                    </div>
                    <div className="bg-indigo-50 rounded-lg p-3">
                      <p className="font-semibold text-indigo-700">🤖 AI 맞춤 교재</p>
                      <p>동물 숫자 카드</p>
                    </div>
                    <div className="bg-violet-50 rounded-lg p-3">
                      <p className="font-semibold text-violet-700">공동 IEP 참여</p>
                      <p>학교와 연계하여 학습 목표 공동 수립</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-500">
                      <p className="font-semibold text-blue-700">🤖 AI 리포트</p>
                      <p className="text-xs">개인화 교재 효과 85% 향상</p>
                    </div>
                  </div>
                </div>

                {/* 3단계: 학교 */}
                <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-green-500">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-3xl">🏫</span>
                    <div>
                      <div className="text-2xl font-bold text-green-600">3</div>
                      <h4 className="font-bold text-gray-900">학교 (교사)</h4>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="bg-green-50 rounded-lg p-3">
                      <p className="font-semibold text-green-700">교사 역할</p>
                      <p>교실 학습 지원 및 센터와 공동 IEP 관리</p>
                    </div>
                    <div className="bg-teal-50 rounded-lg p-3">
                      <p className="font-semibold text-teal-700">🤖 AI 맞춤 과제</p>
                      <p>동물 숫자 워크시트 자동 생성</p>
                    </div>
                    <div className="bg-emerald-50 rounded-lg p-3">
                      <p className="font-semibold text-emerald-700">공동 IEP 목표</p>
                      <p>센터-학교 연계로 3개월 내 숫자 1-10 인식 90% 달성</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-500">
                      <p className="font-semibold text-blue-700">🤖 AI 리포트</p>
                      <p className="text-xs">학습 참여도 70%→85% 향상</p>
                    </div>
                  </div>
                </div>

                {/* 4단계: 병원 */}
                <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-red-500">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-3xl">🏥</span>
                    <div>
                      <div className="text-2xl font-bold text-red-600">4</div>
                      <h4 className="font-bold text-gray-900">병원 (의사)</h4>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="bg-red-50 rounded-lg p-3">
                      <p className="font-semibold text-red-700">의사 역할</p>
                      <p>의학적 권장사항 제공 및 치료 방향 결정</p>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-3">
                      <p className="font-semibold text-orange-700">통합 데이터</p>
                      <p>가정·센터·학교 학습 진도 그래프</p>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-3">
                      <p className="font-semibold text-yellow-700">학습 패턴</p>
                      <p>오전 집중도 높음, 오후 피로도 증가</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-500">
                      <p className="font-semibold text-blue-700">의사 권장</p>
                      <p className="text-xs">학습 시간 조정, 충분한 휴식 필요</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4가지 역할 요약 */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              4가지 역할, 하나의 AI 디지털케어로그
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-3">👪</div>
                <h4 className="font-bold text-gray-900 mb-2">보호자+활동보조</h4>
                <p className="text-sm text-gray-600">
                  가정에서 자녀의 일상을 기록하고 활동보조사와 협력하여 전문 지식을 쌓아가며 맞춤형 치료 및 학습을 실현합니다.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-3">🏢</div>
                <h4 className="font-bold text-gray-900 mb-2">치료사 + 센터</h4>
                <p className="text-sm text-gray-600">
                  10가지 전문 치료 모듈로 체계적인 치료 및 학습을 제공하고, AI 분석을 통해 개인별 맞춤 중재 방법을 제안받아 효과를 극대화합니다.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-3">🏥</div>
                <h4 className="font-bold text-gray-900 mb-2">의사 + 병원</h4>
                <p className="text-sm text-gray-600">
                  가정-센터-학교 통합 데이터를 종합하여 환자 상태를 파악하고, AI 분석을 통해 맞춤형 중재 방법을 제안받아 치료 효과를 향상시킵니다.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-3">🏫</div>
                <h4 className="font-bold text-gray-900 mb-2">교사 + 학교</h4>
                <p className="text-sm text-gray-600">
                  센터와 협력하여 치료적 접근을 교육에 통합하고, AI 맞춤형 교재 자동 생성으로 발달장애 학생들의 치료 및 학습 효과를 극대화합니다.
                </p>
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

      {/* Health Management Section - NEW */}
      <section id="healthmanagement" className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              발달장애인을 위한 AI 건강관리 기능
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              발달장애 아동의 약물 관리, 영양 균형, 체중 조절 등 <strong>부모가 놓치기 쉬운 건강 문제</strong>를 AI가 관찰하고 가이드합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* 약물 상호작용 관리 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">💊</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">약물 상호작용 관리</h3>
                  <p className="text-gray-600">정신과 약 + 감기약, 함께 먹어도 될까?</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4">
                  <p className="font-bold text-red-700 mb-2">⚠️ 위험 조합 감지</p>
                  <p className="text-sm text-gray-700">
                    <strong>콘서타(ADHD 약) + 슈다페드(코막힘 약)</strong>
                    <br/>→ 심박수↑, 혈압↑, 흥분/초조 증가
                    <br/>→ 자폐 아동 행동 폭발 가능성 ↑
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-4">
                  <p className="font-bold text-green-700 mb-2">✅ 안전한 대체 방법</p>
                  <p className="text-sm text-gray-700">
                    • 슈다페드 → 시노나즈 스프레이로 교체<br/>
                    • 클로르페니라민(졸림) → 취침 전 복용<br/>
                    • <strong>왜 안 되는지, 어떻게 복용해야 하는지</strong> 상세 가이드
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="font-bold text-blue-700 mb-2">📊 복용 시간 최적화</p>
                  <p className="text-sm text-gray-700">
                    아침: 콘서타만 / 저녁: 라투다 + 항히스타민
                    <br/>→ 약물 상호작용 최소화 + 수면 도움
                  </p>
                </div>
              </div>
            </div>

            {/* 영양·체중 관리 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">🥗</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">영양·체중 관리</h3>
                  <p className="text-gray-600">발달장애 아동의 식습관·과체중 문제 해결</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-4">
                  <p className="font-bold text-yellow-700 mb-2">⚠️ 흔한 문제</p>
                  <p className="text-sm text-gray-700">
                    • 편식으로 인한 <strong>영양 불균형</strong><br/>
                    • 식습관 조절 어려움 → <strong>과체중·비만</strong><br/>
                    • 약물 부작용(식욕 증가) 관리 어려움
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-4">
                  <p className="font-bold text-green-700 mb-2">✅ AI 건강 모니터링</p>
                  <p className="text-sm text-gray-700">
                    • 체중·식사량 변화 <strong>실시간 추적</strong><br/>
                    • 영양소 불균형 <strong>조기 경고</strong><br/>
                    • 부모가 집에서 실천 가능한 <strong>맞춤형 식단 가이드</strong>
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="font-bold text-blue-700 mb-2">🤖 AI 케어 플랜</p>
                  <p className="text-sm text-gray-700">
                    "최근 2주간 체중 3kg 증가 → 간식 시간 조정 + 활동량 증가 권장"
                    <br/>→ 부모가 모르는 건강 변화를 AI가 먼저 감지
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 실제 사례 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              💡 실제 사례: 정신과 약 + 감기약 복용 가이드
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">🧾 현재 복용 중인 약</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>라투다 20mg</strong> (비정형 항정신병제)</li>
                  <li><strong>콘서타 OROS</strong> (ADHD 약, 중추신경흥분제)</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">🤧 감기약 처방</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>에스부펜정 (해열·진통) ✅</li>
                  <li>페니라민정 (항히스타민, 졸림) ⚠️</li>
                  <li><strong className="text-red-600">슈다페드정 (코막힘, 흥분) ❌</strong></li>
                  <li>엔디스캡슐 (가래) ✅</li>
                  <li>후로목스정 (항생제) ✅</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-cyan-500 shadow-md">
              <h4 className="font-bold text-gray-900 mb-4 text-center">⭐ AI 추천 복용법 (안전하게 조정)</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-cyan-600 text-white">
                      <th className="px-4 py-3 text-left font-bold">시간</th>
                      <th className="px-4 py-3 text-left font-bold">복용 약</th>
                      <th className="px-4 py-3 text-left font-bold">설명</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="px-4 py-3 font-bold text-gray-900">아침</td>
                      <td className="px-4 py-3 text-gray-900">콘서타만 복용</td>
                      <td className="px-4 py-3 text-gray-700">자극·집중 유지</td>
                    </tr>
                    <tr className="bg-red-50 hover:bg-red-100">
                      <td className="px-4 py-3 font-bold text-gray-900">점심/저녁</td>
                      <td className="px-4 py-3"><strong className="text-red-700">슈다페드 생략</strong></td>
                      <td className="px-4 py-3 text-red-800 font-semibold">이 약만 빼면 안전 위험 거의 사라짐</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="px-4 py-3 font-bold text-gray-900">취침 전</td>
                      <td className="px-4 py-3 text-gray-900">라투다 + 페니라민</td>
                      <td className="px-4 py-3 text-gray-700">졸림이 야간 수면에 도움</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 bg-blue-600 text-white rounded-lg p-5 shadow-md">
              <p className="text-sm font-semibold text-center">
                <span className="text-yellow-300">💡 핵심:</span> 슈다페드(코막힘 약)만 빼고 먹이면 부작용 위험 거의 사라진다.
                <br/><span className="text-cyan-200">→ 대신 시노나즈 스프레이 사용 권장 (신경 자극 없음)</span>
              </p>
            </div>
          </div>

          {/* 기존 기능 연계 및 확장성 */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              🔗 자람이 기존 기능과의 연계
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-indigo-500 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🎯</span>
                  <h4 className="text-xl font-bold text-gray-900">집중치료 모드</h4>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  특정 행동·증상에 대한 집중적인 치료가 필요할 때 활성화되는 모드
                </p>
                <div className="bg-indigo-50 rounded-lg p-3">
                  <p className="text-sm text-gray-800">
                    <strong className="text-indigo-700">+ 약물 변경 시 집중 추적:</strong><br/>
                    약물이 바뀌면 자동으로 <strong>집중 추적 모드</strong> 활성화
                    <br/>→ 부작용, 행동 변화, 효과 여부를 2주간 집중 모니터링
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">📊</span>
                  <h4 className="text-xl font-bold text-gray-900">약물 추적 기록</h4>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  복용 중인 모든 약물의 시간·용량·반응을 기록하는 기능
                </p>
                <div className="bg-purple-50 rounded-lg p-3">
                  <p className="text-sm text-gray-800">
                    <strong className="text-purple-700">+ 상호작용 분석 추가:</strong><br/>
                    기존 약물 + 새로 처방받은 약 → <strong>AI가 위험 조합 자동 감지</strong>
                    <br/>→ 복용 시간 최적화 + 대체 약물 제안
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-cyan-500 hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">
                🚀 AI 디지털케어로그 기술의 확장
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">💊</div>
                  <h5 className="font-bold text-gray-900 mb-2">토탈케어로그</h5>
                  <p className="text-xs text-gray-600 mb-2">창고형 약국 기능</p>
                  <p className="text-xs text-gray-700">
                    다제약물 복용 환자의 약물 상호작용 통합 관리
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">🎗️</div>
                  <h5 className="font-bold text-gray-900 mb-2">항암환자 관리</h5>
                  <p className="text-xs text-gray-600 mb-2">치료 모니터링</p>
                  <p className="text-xs text-gray-700">
                    항암제 부작용 추적, 영양·체중 집중 관리
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">👴</div>
                  <h5 className="font-bold text-gray-900 mb-2">시니어 케어</h5>
                  <p className="text-xs text-gray-600 mb-2">만성질환 관리</p>
                  <p className="text-xs text-gray-700">
                    고혈압·당뇨 약물 관리, 복약 순응도 향상
                  </p>
                </div>
              </div>
              
              <div className="mt-4 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg p-4 border-l-4 border-cyan-600">
                <p className="text-sm text-gray-800 text-center">
                  <strong className="text-cyan-900">AI 디지털케어로그 기술</strong>은 
                  <strong>하나의 표준 데이터 구조</strong>를 기반으로 
                  <strong className="text-blue-800">발달장애, 교육, 시니어, 만성질환, 항암 등</strong> 
                  다양한 도메인에 응용됩니다.
                  <br/><span className="text-xs text-gray-600 mt-1 block">
                    → 한 번 개발된 기술이 여러 사회 약자 분야로 빠르게 확장 가능
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 text-lg mb-4">
              이러한 <strong className="text-cyan-600">AI 건강관리 기능</strong>은 부모가 집에서 놓치기 쉬운 
              약물·영양·건강 문제를 조기에 발견하고,<br/>
              <strong>구체적이고 실천 가능한 가이드</strong>를 제공하여 발달장애 아동의 전반적인 삶의 질을 향상시킵니다.
            </p>
            <div className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full px-6 py-2 font-semibold text-sm shadow-lg">
              자람이의 집중치료·약물추적 모드에 통합 예정
            </div>
          </div>
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


      {/* Market Validation */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">시장 검증</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              자람이 디지털케어로그는 발달장애 분야의 <strong>유일한 표준</strong>으로 자리 잡아가고 있습니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">독점적 표준</h3>
              <p className="text-gray-600">발달장애 특화 디지털케어로그로 국내 유일한 표준을 제시합니다</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">지속적 성장</h3>
              <p className="text-gray-600">전국 소아정신과, 정신과, 심리학과, 치료센터, 아동발달센터 등 전문기관에서 지속적으로 도입되고 있습니다</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">네트워크 효과</h3>
              <p className="text-gray-600">부모와 기관이 같은 표준을 사용하며 강한 락인 효과를 형성합니다</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">로드맵</h2>
            <p className="text-xl text-gray-600">지속적인 혁신과 확장을 통한 발달장애 분야 표준화</p>
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
              <strong>사회적 가치 + 기술적 혁신 + 정책 정합성</strong> — 드림에이아이랩의 3박자
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
                정책적 정합성과 실증 데이터를 모두 갖춘 <strong>세계 유일 발달장애 AI 표준 플랫폼</strong>입니다.
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

            {/* 기술적 혁신 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
              <div className="text-5xl mb-4 text-center">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">기술적 혁신</h3>
              
              <div className="space-y-3 text-gray-700">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-blue-700 mb-2">🥇 세계 유일</h4>
                  <p className="text-sm">
                    <strong>AI 디지털케어로그 표준 상용화</strong>
                    <br/>발달장애 분야 표준 시스템
                    <br/>Google·Naver 검색 1위권
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
                    <br/>• 헬스케어·교육 분야 AI 사회혁신
                    <br/>• 데이터 표준화·공공기술 기반 권장
                    <br/>• 자람이 = <strong>정책 부합도 최고 사례</strong>
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
                <strong className="text-cyan-300">네트워크 효과 극대화</strong>: 
                데이터가 쌓일수록 AI 정확도 ↑ → 더 많은 사용자 유입 → 더 많은 데이터 → 경쟁사 진입 장벽 ↑
                <br/><br/>
                <strong className="text-cyan-300">세계 표준 선점</strong>: 
                자람이가 <strong>"발달장애 AI 케어로그의 세계 표준"</strong>으로 자리잡으면, 
                후발 주자는 기술적·브랜드적으로 따라잡기 불가능
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

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            자람이와 함께 더 포용적이고 이해심 깊은 사회를 향해 나아갑시다
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            발달장애인과 가족들을 위한 맞춤형 AI 디지털케어로그 서비스를 지금 바로 경험해보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://jarame.or.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              자람이 시작하기
            </a>
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