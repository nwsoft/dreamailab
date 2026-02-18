import type { Metadata } from 'next'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '의료헬스케어 – 나만의 AI 주치의 | 드림에이아이랩',
  description: '진료·검사·복약 데이터를 통합하고 AI가 분석해 개인 맞춤 리포트와 생활요법을 제안합니다. 히포크라테스·한방이·항암이 AI 통합 에디션.',
  keywords: 'AI 주치의, 디지털헬스, 건강관리, 복약관리, 부작용 경고, 히포크라테스, 한방이, 항암이, 드림에이아이랩',
}

export default function HealthService() {
  const coreValues = [
    {
      title: '📒 통합 건강기록',
      description: '진료·검사·복약 데이터 한 계정에서 관리',
      icon: '📒'
    },
    {
      title: '🤖 AI 리포트',
      description: '일/주/월 건강 인사이트, 위험 신호 조기탐지',
      icon: '🤖'
    },
    {
      title: '🧬 개인 맞춤 실행',
      description: '영양·운동·수면·스트레스 루틴 제안',
      icon: '🧬'
    },
    {
      title: '🛡️ 보안/권한',
      description: '동의 기반 공유, 역할별 접근, 접근로그',
      icon: '🛡️'
    }
  ]

  const features = [
    {
      title: '진료요약/검사결과 자동 정리',
      description: '병원에서 받은 진료 기록과 검사 결과를 자동으로 정리하고 분석합니다.',
      icon: '🏥'
    },
    {
      title: '복약 캘린더·누락 알림·재처방 리마인드',
      description: '복용 시간과 용량을 관리하고, 누락 시 알림을 제공하며 재처방을 미리 알려줍니다.',
      icon: '💊'
    },
    {
      title: '부작용/상호작용 위험 경고',
      description: '복용 중인 약물 간 상호작용과 부작용 위험을 조기에 탐지하고 경고합니다.',
      icon: '⚠️'
    },
    {
      title: '라이프로그(수면/활동/식사/기분) 연동·분석',
      description: '일상생활 패턴을 기록하고 AI가 분석하여 건강과의 연관성을 파악합니다.',
      icon: '📱'
    },
    {
      title: '개인 맞춤 루틴/목표·리마인드',
      description: '개인 건강 상태에 맞는 영양, 운동, 수면 루틴을 제안하고 실행을 도와줍니다.',
      icon: '🎯'
    },
    {
      title: '기관 대시보드·API 연동(병원, 약국, 보험사)',
      description: '병원, 약국, 보험사와 연동하여 원활한 정보 공유와 서비스를 제공합니다.',
      icon: '🔗'
    }
  ]

  const workflow = [
    {
      step: '01',
      title: '데이터 입력',
      description: '진료·검사·복약·라이프로그 데이터를 입력합니다.'
    },
    {
      step: '02',
      title: 'AI 분석',
      description: 'AI가 패턴/위험/상호작용을 분석합니다.'
    },
    {
      step: '03',
      title: '리포트 생성',
      description: '일/주/월 건강 리포트를 자동으로 생성합니다.'
    },
    {
      step: '04',
      title: '실행 계획',
      description: '영양·운동·수면·복약 루틴과 알림을 제공합니다.'
    }
  ]

  const useCases = [
    {
      title: '만성질환',
      description: '혈압/혈당 추적 + 복약·식단 조합 리포트',
      icon: '🩺'
    },
    {
      title: '항암/재활',
      description: '부작용 모니터링 + 영양·운동 권장 루틴',
      icon: '💪'
    },
    {
      title: '정신건강',
      description: '수면·기분 패턴 분석 + 스트레스 관리 플랜',
      icon: '🧠'
    }
  ]

  const faqs = [
    {
      question: '도입 절차는?',
      answer: '상담 → 맞춤 설정 → 데이터 연동 → 교육 → 정식 운영 순서로 진행됩니다.'
    },
    {
      question: '기존 EMR/약국 시스템 연동은?',
      answer: '표준 API를 통해 기존 시스템과 원활하게 연동되며, 추가 개발 없이 바로 사용 가능합니다.'
    },
    {
      question: '데이터 소유권/동의는?',
      answer: '사용자가 데이터의 완전한 소유권을 가지며, 명시적 동의 없이는 제3자와 공유되지 않습니다.'
    },
    {
      question: '보안/암호화/접근로그 정책은?',
      answer: '국제 표준 암호화와 접근 로그를 통해 모든 데이터 접근을 추적하고 보안을 보장합니다.'
    },
    {
      question: '의료 자문/검수 프로세스는?',
      answer: '전문 의료진의 검토를 거쳐 모든 의료 정보의 정확성과 안전성을 보장합니다.'
    },
    {
      question: '향후 로드맵(예측의학/디바이스 연동 확대)은?',
      answer: '웨어러블 디바이스 연동, 예측의학 모델, 개인 유전체 분석 등으로 지속 확장 예정입니다.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-6">🏥</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              나만의 AI 주치의
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              진료·검사·복약을 한 곳에. AI가 분석해 리포트와 실행으로 연결합니다.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                도입 문의
              </Link>
              <a 
                href="/files/health-whitepaper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
              >
                백서 다운로드
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              의료헬스케어 에디션
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 text-lg text-gray-600">
              <p>
                의료헬스케어 에디션은 진료 요약, 검사 결과, 복약 기록을 통합하고 AI가 분석해 개인 맞춤 리포트와 생활요법을 제안합니다.
              </p>
              <p>
                히포크라테스·한방이·항암이 AI를 통합해 서양의학·한의학·암 재활 관점을 아우르며, 복약 부작용과 상호작용 위험을 조기에 알려줍니다.
              </p>
              <p>
                가정과 병원, 약국을 잇는 차세대 개인 건강 파트너입니다.
              </p>
            </div>
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
              AI 주치의가 제공하는 4가지 핵심 가치입니다.
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

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              기능 상세
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI 주치의가 제공하는 6가지 핵심 기능입니다.
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

      {/* Workflow Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              사용 흐름
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI 주치의와 함께하는 4단계 건강 관리 프로세스입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflow.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              적용 사례
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              다양한 상황에서 AI 주치의가 어떻게 도움을 주는지 확인해보세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="text-5xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              차별점
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI 주치의만의 독특한 특징들입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">의학+한의학+항암 3축 통합 AI</h3>
              <p className="text-gray-600">
                서양의학, 한의학, 항암재활의 관점을 통합하여 종합적인 건강 분석을 제공합니다.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow">
              <div className="text-4xl mb-4">⚠️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">상호작용/부작용 경고 중심의 안전 기능</h3>
              <p className="text-gray-600">
                복용 중인 약물 간 상호작용과 부작용 위험을 조기에 탐지하여 안전한 복약을 지원합니다.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Core 스키마/권한 기반으로 병원·약국·보험 연동 용이</h3>
              <p className="text-gray-600">
                표준화된 데이터 구조와 권한 관리로 다양한 의료 기관과의 연동이 쉽습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-red-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            지금 바로 AI 주치의와 함께하세요
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-red-100">
            개인 맞춤형 건강 관리로 더 건강한 삶을 만들어가세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              도입 문의하기
            </Link>
            <Link 
              href="/contact?type=partner"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              파트너 제안
            </Link>
          </div>
        </div>
      </section>

      

      <Footer />
    </div>
  )
}
