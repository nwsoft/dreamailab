import type { Metadata } from 'next'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'EduCareLog 기술백서 - AI 디지털케어로그 교육 응용 기술 | 드림에이아이랩',
  description: 'AI 디지털케어로그 기술을 교육 도메인에 특화 응용한 EduCareLog의 핵심 기술 구조를 소개합니다. 학습 데이터 표준화, 개별화 분석 엔진, 적응형 학습 경로 생성, 교육 파트너십 API까지 상세 기술 문서.',
  keywords: 'AI 디지털케어로그, EduCareLog 기술백서, 교육AI 기술, 개별화 학습 엔진, 학습 데이터 표준화, Ed-Fi 표준, xAPI, 적응형 학습, 교육 파트너십 API, 드림에이아이랩, DAL, 교육 기술 혁신',
  alternates: {
    canonical: 'https://dreamailab.com/technology/educarelog',
  },
  openGraph: {
    type: 'article',
    url: 'https://dreamailab.com/technology/educarelog',
    siteName: '드림에이아이랩',
    title: 'EduCareLog 기술백서 - AI 디지털케어로그 교육 응용',
    description: 'AI 디지털케어로그를 교육 분야에 특화 응용한 혁신 기술의 상세 구조와 구현 방법론',
    images: [
      {
        url: '/og/educarelog-tech.png',
        width: 1200,
        height: 630,
        alt: 'EduCareLog 기술백서 - AI 디지털케어로그 교육 응용',
      },
    ],
    locale: 'ko_KR',
    publishedTime: '2025-01-01T00:00:00+09:00',
    modifiedTime: '2025-11-12T00:00:00+09:00'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EduCareLog 기술백서 - AI 디지털케어로그 교육 응용',
    description: 'AI 디지털케어로그의 교육 특화 응용 기술 상세 문서',
    images: ['/og/educarelog-tech.png'],
  },
  robots: { index: true, follow: true },
}

export default function EduCareLogTechnology() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "기술",
        "item": "https://dreamailab.com/technology"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "EduCareLog 기술백서",
        "item": "https://dreamailab.com/technology/educarelog"
      }
    ]
  }

  const techLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "EduCareLog 기술백서 - AI 디지털케어로그 교육 응용",
    "description": "AI 디지털케어로그를 교육 도메인에 특화 응용한 기술 구조와 방법론",
    "author": {
      "@type": "Organization",
      "name": "Dream AI Lab"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dream AI Lab",
      "url": "https://dreamailab.com"
    },
    "datePublished": "2025-01-01",
    "dateModified": "2025-11-12"
  }

  // 기술 아키텍처 구조
  const coreArchitecture = [
    {
      layer: "학습 데이터 수집·표준화 계층",
      description: "교육 현장의 다양한 학습 데이터를 표준 스키마로 수집·정규화",
      technologies: ["Ed-Fi 표준", "xAPI (Tin Can API)", "QTI 3.0", "SCORM", "LTI 1.3"],
      features: [
        "과제·평가·참여·행동 데이터 멀티채널 수집",
        "Ed-Fi 교육 데이터 표준 스키마 적용",
        "실시간 학습 이벤트 추적 (xAPI 기반)",
        "개인정보보호법(PIPA) 준수 및 국제 교육 데이터 보호 원칙 준수"
      ],
      innovation: "교육 도메인 표준 준수로 기존 LMS/SIS와 원활한 상호운용성 확보"
    },
    {
      layer: "교육 맥락 보존 계층",
      description: "학습자의 시간적·과목별·능력별 맥락을 구조화하여 보존",
      technologies: ["시간 기반 학습 모델", "교육과정 온톨로지", "능력 매핑 프레임워크"],
      features: [
        "학습 세션·단원·학기별 타임라인 구조화",
        "국가교육과정 및 성취기준 매핑",
        "선수학습 관계 그래프 모델링",
        "학습자 인지 상태 이력 추적"
      ],
      innovation: "단편적 점수가 아닌 학습 여정 전체의 맥락적 이해"
    },
    {
      layer: "교육 특화 AI 분석 엔진",
      description: "교육학적 이론과 결합된 개별화 학습 분석 및 진단",
      technologies: ["멀티모달 AI", "교육 도메인 LLM", "적응형 테스팅", "학습 분석학"],
      features: [
        "오개념 패턴 자동 탐지 및 분류",
        "학습 스타일 및 인지 부하 분석",
        "메타인지 전략 사용 패턴 파악",
        "동기·정서 상태 추론 (텍스트·행동 분석)"
      ],
      innovation: "단순 정답률이 아닌 학습 과정의 질적 분석"
    },
    {
      layer: "적응형 학습 설계 엔진",
      description: "분석 결과를 바탕으로 개인 맞춤 학습 경로 및 콘텐츠 생성",
      technologies: ["적응형 알고리즘", "콘텐츠 자동 생성", "난이도 조정 AI", "교육과정 시퀀싱"],
      features: [
        "복습:신규:심화 비율 동적 조정",
        "개별 오개념에 맞춤 설계된 문제 생성",
        "학습자 페이스에 맞춘 진도 조절",
        "시험 전략 및 집중 루틴 자동 계획"
      ],
      innovation: "교사의 개별화 수업 설계 부담을 AI가 대폭 경감"
    },
    {
      layer: "교육 파트너십 통합 계층",
      description: "학교·학원·가정을 연결하는 통합 교육 생태계 구현",
      technologies: ["RESTful API", "GraphQL", "WebSocket", "OAuth 2.0", "SAML"],
      features: [
        "기존 LMS/SIS와 실시간 양방향 연동",
        "EBS 콘텐츠 라이브러리 통합 연계",
        "학부모 앱 및 교사 대시보드 연동",
        "학원-학교 간 학습 이력 공유"
      ],
      innovation: "분절된 교육 환경을 하나의 데이터 언어로 통합"
    }
  ]

  // 핵심 기술 차별점
  const keyInnovations = [
    {
      title: "의료 검증 기반 교육 확장",
      description: "특수교육·발달장애 케어에서 검증된 개인화 방법론을 일반교육으로 확장",
      technical: [
        "행동·주의 패턴 분석 기술의 학습 집중도 측정 응용",
        "개별 반응 추적 시스템의 학습 과정 모니터링 전환",
        "케어 플랜 자동화의 학습 계획 생성 응용"
      ],
      advantage: "교육학 이론만으로는 구현하기 어려운 세밀한 개인화 기술"
    },
    {
      title: "설명 가능한 AI (XAI) 적용",
      description: "교육 현장에서 신뢰받을 수 있는 투명한 AI 의사결정",
      technical: [
        "추천 근거의 교육학적 해석 제공",
        "학습자 성장 과정의 시각적 설명",
        "교사가 이해할 수 있는 언어로 AI 판단 번역"
      ],
      advantage: "블랙박스 AI가 아닌 교육자와 협업하는 투명한 AI"
    },
    {
      title: "실시간 적응형 학습",
      description: "정적 콘텐츠가 아닌 학습자 반응에 따른 동적 조정",
      technical: [
        "문제 풀이 과정의 실시간 분석 및 힌트 제공",
        "오답 패턴 기반 즉시 보정 문제 생성",
        "학습 몰입도에 따른 난이도 자동 조절"
      ],
      advantage: "학습자가 포기하기 전에 선제적으로 지원하는 적응형 시스템"
    },
    {
      title: "교육 생태계 데이터 통합",
      description: "가정-학교-학원을 잇는 통합 학습 데이터 플랫폼",
      technical: [
        "다기관 간 학습 이력 안전한 공유",
        "교육 주체별 맞춤 대시보드 제공",
        "학습 연속성 보장을 위한 컨텍스트 전달"
      ],
      advantage: "분절된 교육 환경에서 발생하는 학습 격차 해소"
    }
  ]

  // 구현 기술 스택
  const techStack = [
    {
      category: "데이터 처리",
      technologies: [
        { name: "Apache Kafka", purpose: "실시간 학습 이벤트 스트리밍" },
        { name: "MongoDB", purpose: "유연한 학습 데이터 스키마 관리" },
        { name: "InfluxDB", purpose: "시계열 학습 성과 데이터" },
        { name: "Redis", purpose: "실시간 세션 및 캐시 관리" }
      ]
    },
    {
      category: "AI/ML 엔진",
      technologies: [
        { name: "PyTorch", purpose: "교육 도메인 딥러닝 모델 개발" },
        { name: "Transformers", purpose: "교육 텍스트 분석 (오개념 탐지)" },
        { name: "Scikit-learn", purpose: "학습 패턴 분류 및 클러스터링" },
        { name: "LIME/SHAP", purpose: "교육 AI 판단 설명 가능성" }
      ]
    },
    {
      category: "교육 표준",
      technologies: [
        { name: "Ed-Fi", purpose: "교육 데이터 표준 스키마" },
        { name: "xAPI", purpose: "학습 경험 추적" },
        { name: "QTI 3.0", purpose: "평가 문항 표준화" },
        { name: "LTI 1.3", purpose: "기존 LMS 통합" }
      ]
    },
    {
      category: "API/통합",
      technologies: [
        { name: "FastAPI", purpose: "고성능 교육 API 서버" },
        { name: "GraphQL", purpose: "유연한 교육 데이터 쿼리" },
        { name: "WebSocket", purpose: "실시간 학습 상호작용" },
        { name: "Docker/K8s", purpose: "마이크로서비스 교육 플랫폼" }
      ]
    }
  ]

  // 교육 데이터 스키마
  const educationSchema = [
    {
      domain: "학습자 프로필",
      fields: [
        "learner_id, grade_level, learning_preferences",
        "cognitive_abilities, prior_knowledge",
        "motivational_factors, learning_goals"
      ],
      standards: "Ed-Fi Student 스키마 확장"
    },
    {
      domain: "학습 활동",
      fields: [
        "session_id, activity_type, start_time, duration",
        "content_id, interaction_data, completion_status",
        "response_accuracy, response_time, hint_usage"
      ],
      standards: "xAPI Activity Statement"
    },
    {
      domain: "평가 결과",
      fields: [
        "assessment_id, item_responses, scoring_rubric",
        "partial_credit, misconception_flags",
        "cognitive_load_indicators, engagement_metrics"
      ],
      standards: "QTI 3.0 Result 확장"
    },
    {
      domain: "학습 맥락",
      fields: [
        "curriculum_standard, learning_objective",
        "prerequisite_knowledge, difficulty_level",
        "content_type, modality, accessibility_features"
      ],
      standards: "교육과정 온톨로지 매핑"
    }
  ]

  // API 예제
  const apiExamples = [
    {
      title: "개별화 학습 경로 생성",
      method: "POST",
      endpoint: "/api/v1/learning-path/generate",
      description: "학습자 데이터를 바탕으로 맞춤 학습 경로를 생성합니다.",
      request: `{
  "learner_id": "student_12345",
  "subject": "mathematics",
  "grade_level": 8,
  "current_unit": "linear_equations",
  "performance_data": {
    "recent_assessments": [...],
    "learning_patterns": {...}
  },
  "constraints": {
    "time_available": "2_weeks",
    "difficulty_preference": "adaptive"
  }
}`,
      response: `{
  "learning_path": {
    "path_id": "lp_67890",
    "total_sessions": 12,
    "estimated_completion": "2024-12-01",
    "sessions": [
      {
        "session_id": 1,
        "objectives": ["review_basic_algebra"],
        "activities": [...],
        "estimated_duration": "45min"
      }
    ]
  },
  "rationale": "기초 대수 개념 보강 후 일차방정식 도입 권장"
}`
    },
    {
      title: "실시간 학습 분석",
      method: "WebSocket",
      endpoint: "/ws/learning-analytics",
      description: "실시간 학습 과정을 모니터링하고 즉시 피드백을 제공합니다.",
      request: `// WebSocket 연결 후 학습 이벤트 전송
{
  "event_type": "problem_attempt",
  "learner_id": "student_12345",
  "problem_id": "eq_solve_001",
  "attempt_data": {
    "steps": [...],
    "time_spent": 120,
    "help_requests": 1
  }
}`,
      response: `{
  "analysis": {
    "misconception_detected": "sign_error_pattern",
    "confidence": 0.85,
    "suggested_intervention": {
      "type": "targeted_hint",
      "content": "부호 변화 규칙 재검토 필요",
      "timing": "immediate"
    }
  },
  "next_problem_adjustment": {
    "difficulty_change": -0.2,
    "focus_area": "sign_operations"
  }
}`
    },
    {
      title: "교육과정 연계 분석",
      method: "GET",
      endpoint: "/api/v1/curriculum/alignment",
      description: "학습 내용과 국가 교육과정의 연계성을 분석합니다.",
      request: `GET /api/v1/curriculum/alignment?
  subject=mathematics&
  grade=8&
  topic=linear_equations&
  standard=2022_revised_curriculum`,
      response: `{
  "alignment_data": {
    "achievement_standards": [
      {
        "code": "[9수02-02]",
        "description": "일차방정식을 풀 수 있다",
        "coverage_percentage": 95
      }
    ],
    "learning_progression": [...],
    "prerequisite_check": {
      "status": "ready",
      "missing_concepts": []
    }
  }
}`
    }
  ]

  // FAQPage JSON-LD
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "EduCareLog는 기존 AI 교육과 무엇이 다른가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "문항생성·튜터봇 중심이 아닌, 표준화된 학습·행동 로그를 기반으로 수준 진단→경로·퀴즈·루틴·리포트 자동화까지 잇는 폐루프 엔진입니다."
        }
      },
      {
        "@type": "Question",
        "name": "어떤 데이터 표준을 사용하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ed‑Fi, xAPI, QTI, LTI 등 교육 표준을 따르며, 국가 교육과정 온톨로지와의 매핑을 지원합니다."
        }
      },
      {
        "@type": "Question",
        "name": "개인정보와 보안은 어떻게 보장하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "개인정보보호법(PIPA) 준수, 최소 수집·목적 제한, 전송·저장 암호화, RBAC·감사로그 등 거버넌스 체계를 따릅니다."
        }
      },
      {
        "@type": "Question",
        "name": "실제 맞춤형 학습은 어떻게 동작하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "오개념·주의 패턴을 진단해 복습:신규:보정 비율을 동적으로 조정하고, 난이도 루핑과 시험 전 집중 루틴을 자동 계획합니다."
        }
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(techLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-6">🧠</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              EduCareLog 기술백서
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              AI 디지털케어로그를 교육 도메인에 특화 응용한 혁신 기술의 구조와 구현 방법론을 상세히 소개합니다.
            </p>
            <div className="bg-white/10 rounded-2xl p-6 max-w-3xl mx-auto">
              <div className="text-lg font-semibold mb-3">핵심 기술 구조</div>
              <div className="text-white/90">
                표준 데이터 수집 → 교육 맥락 보존 → AI 분석 → 적응형 설계 → 통합 실행
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">핵심 요약</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>표준 로그 기반 개인화: 학습·행동 로그 표준화 → AI 수준 진단 → 경로·퀴즈·루틴·리포트 자동화의 폐루프.</li>
            <li>교육 표준 준수: Ed‑Fi/xAPI/QTI/LTI 및 국가 교육과정 온톨로지 매핑 지원.</li>
            <li>설명가능성(XAI): 추천 근거와 성장 경로를 교사가 이해 가능한 형태로 제공.</li>
            <li>보안·거버넌스: PIPA 준수, 최소 수집, 암호화, RBAC·감사로그 운영.</li>
          </ul>
        </div>
      </section>

      {/* 기술 개요 */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              기술 개요
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              EduCareLog는 의료·돌봄 분야에서 검증된 AI 디지털케어로그 기술을 교육 도메인에 특화하여 응용한 시스템입니다. 
              단순한 학습 관리가 아닌, <strong>개별 학습자의 인지적·정서적·행동적 패턴을 종합적으로 분석</strong>하여 
              실시간 적응형 교육을 제공합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🏥 의료 기술 기반</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• <strong>케어로그 표준화</strong>: 환자 데이터 → 학습자 데이터</li>
                <li>• <strong>개인화 분석</strong>: 치료 반응 → 학습 반응</li>
                <li>• <strong>실시간 모니터링</strong>: 건강 상태 → 학습 상태</li>
                <li>• <strong>예측적 개입</strong>: 의료 알림 → 학습 지원</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🎓 교육 특화 응용</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• <strong>Ed-Fi/xAPI 표준</strong> 준수로 기존 시스템 호환</li>
                <li>• <strong>교육과정 온톨로지</strong> 기반 맞춤 경로 생성</li>
                <li>• <strong>오개념 탐지</strong> 및 선제적 보정</li>
                <li>• <strong>다주체 협업</strong> (학교-학원-가정 연계)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 핵심 기술 아키텍처 */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              핵심 기술 아키텍처
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              5계층 구조로 설계된 EduCareLog의 기술 아키텍처를 상세히 살펴봅니다.
            </p>
          </div>
          
          <div className="space-y-12">
            {coreArchitecture.map((layer, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{layer.layer}</h3>
                    <p className="text-lg text-gray-600 mb-6">{layer.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">🛠 핵심 기술</h4>
                        <div className="flex flex-wrap gap-2">
                          {layer.technologies.map((tech, i) => (
                            <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">✨ 주요 기능</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {layer.features.map((feature, i) => (
                            <li key={i}>• {feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
                      <div className="text-sm font-semibold text-blue-600 mb-1">혁신 포인트</div>
                      <div className="text-sm text-gray-700">{layer.innovation}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 핵심 기술 차별점 */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              핵심 기술 차별점
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              기존 교육AI와 차별화되는 EduCareLog만의 혁신적인 기술 요소들입니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {keyInnovations.map((innovation, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{innovation.title}</h3>
                <p className="text-gray-600 mb-6">{innovation.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">🔬 기술적 구현</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {innovation.technical.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-500 mr-2">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-sm font-semibold text-green-600 mb-1">경쟁 우위</div>
                  <div className="text-sm text-gray-700">{innovation.advantage}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 기술 스택 */}
      <section className="py-16 lg:py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              구현 기술 스택
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              EduCareLog 시스템 구현에 사용되는 핵심 기술 스택을 카테고리별로 정리했습니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techStack.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>
                <div className="space-y-4">
                  {category.technologies.map((tech, i) => (
                    <div key={i} className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="font-semibold text-blue-600">{tech.name}</div>
                        <div className="text-sm text-gray-600">{tech.purpose}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 교육 데이터 스키마 */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              교육 데이터 표준 스키마
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              EduCareLog에서 사용하는 교육 데이터의 표준화된 스키마 구조입니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationSchema.map((schema, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <h3 className="text-lg font-bold text-gray-900">{schema.domain}</h3>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">주요 필드</h4>
                  <div className="bg-gray-50 rounded p-3 font-mono text-sm">
                    {schema.fields.map((field, i) => (
                      <div key={i} className="text-gray-600">{field}</div>
                    ))}
                  </div>
                </div>
                
                <div className="text-xs text-blue-600 bg-blue-50 rounded px-2 py-1">
                  {schema.standards}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API 사용 예제 */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              API 사용 예제
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              EduCareLog API의 주요 기능을 실제 코드 예제와 함께 소개합니다.
            </p>
          </div>
          
          <div className="space-y-12">
            {apiExamples.map((api, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-8">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-blue-600 px-2 py-1 rounded text-sm font-mono">{api.method}</span>
                    <span className="font-mono text-blue-300">{api.endpoint}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{api.title}</h3>
                  <p className="text-gray-300">{api.description}</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Request</h4>
                    <pre className="bg-gray-900 rounded p-4 overflow-x-auto">
                      <code className="text-sm text-green-300">{api.request}</code>
                    </pre>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Response</h4>
                    <pre className="bg-gray-900 rounded p-4 overflow-x-auto">
                      <code className="text-sm text-blue-300">{api.response}</code>
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Documents */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">관련 문서</h2>
            <p className="text-lg text-gray-600">아래 문서에서 추가 세부 내용을 확인하실 수 있습니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/services/educarelog" className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">서비스 개요(에듀케어로그)</h3>
              <p className="text-gray-600 text-sm">교육 적용 시나리오와 정책 정합성 개요</p>
            </Link>
            <Link href="/technology" className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI 디지털케어로그 기술</h3>
              <p className="text-gray-600 text-sm">드림에이아이랩의 핵심 기술 및 아키텍처</p>
            </Link>
            <Link href="/news/63" className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">케이스 스터디</h3>
              <p className="text-gray-600 text-sm">실제 파일럿 적용 사례와 성과 분석</p>
            </Link>
          </div>
        </div>
      </section>

      {/* 파트너십 및 도입 안내 */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            기술 파트너십 및 도입 문의
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            EduCareLog 기술을 학교, 학원, 교육기업에 도입하거나 기술 파트너십을 원하시면 연락주세요.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-2xl mb-2">🏫</div>
              <div className="font-semibold mb-2">학교/지자체</div>
              <div className="text-sm text-blue-100">시범학교 운영 및 교육청 사업 연계</div>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-2xl mb-2">🏢</div>
              <div className="font-semibold mb-2">교육기업</div>
              <div className="text-sm text-blue-100">기존 LMS/콘텐츠에 AI 엔진 임베드</div>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-2xl mb-2">🔧</div>
              <div className="font-semibold mb-2">기술 개발사</div>
              <div className="text-sm text-blue-100">API 파트너십 및 화이트라벨 솔루션</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact?type=tech"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              기술 도입 문의
            </Link>
            <Link 
              href="/contact?type=partner"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              파트너십 제안
            </Link>
            <Link 
              href="/services/educarelog"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              서비스 상세보기
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}