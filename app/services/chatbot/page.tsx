import type { Metadata } from 'next'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI 챗봇 서비스 - 전문 분야별 AI 상담 | 드림에이아이랩',
  description: '법률, 의료, 한의학, 항암재활, 발달장애, 심리상담 등 다양한 분야의 AI 챗봇 서비스를 제공합니다. 24/7 전문 상담으로 언제든지 도움을 받으세요.',
  keywords: 'AI 챗봇, 법률상담, 의료상담, 한의학, 항암재활, 발달장애, 심리상담, 드림에이아이랩',
}

export default function ChatbotService() {
  const chatbots = [
    {
      name: '법률이AI',
      status: '서비스 중',
      icon: '⚖️',
      summary: '무료 법률상담 챗봇',
      description: '24/7 무료 법률상담을 제공하는 AI 챗봇으로, 기본적인 법률 질문에 대한 즉시 답변을 제공합니다.',
      url: '/services/law',
      externalUrl: 'https://legalconsultai.com',
      category: 'Legal',
      users: '50K+',
      features: [
        '무료 24/7 법률 상담',
        '기본 법률 질문 답변',
        '법률 절차 안내',
        '상담 내역 저장'
      ]
    },
    {
      name: '히포크라테스AI',
      status: '서비스 중',
      icon: '🩺',
      summary: '의료 상담 챗봇',
      description: '일반적인 건강상담과 증상 문진을 제공하는 AI 의료상담 챗봇입니다.',
      url: '/services/healthcare',
      externalUrl: 'https://medicai.kr',
      category: 'Healthcare',
      users: '20K+',
      features: [
        '건강상담 및 증상 문진',
        '일반적인 질병 정보',
        '복약 안내',
        '병원 방문 권고'
      ]
    },
    {
      name: '한방이AI',
      status: '서비스 중',
      icon: '🌿',
      summary: '한의학 상담 챗봇',
      description: '한의학 원리와 체질 분석을 기반으로 한 맞춤형 건강상담을 제공합니다.',
      url: '/services/healthcare',
      externalUrl: 'https://hanbangai.kr',
      category: 'Healthcare',
      users: '15K+',
      features: [
        '한의학 체질 분석',
        '한방 치료 안내',
        '생활 습관 조언',
        '한약 복용 가이드'
      ]
    },
    {
      name: '항암재활AI',
      status: '서비스 중',
      icon: '🎗️',
      summary: '항암 치료·재활 상담 챗봇',
      description: '항암치료 과정과 재활에 대한 전문적인 상담과 정보를 제공합니다.',
      url: '/services/healthcare',
      externalUrl: 'https://cancerrehabai.kr',
      category: 'Healthcare',
      users: '10K+',
      features: [
        '항암치료 과정 안내',
        '재활 프로그램 추천',
        '부작용 관리 조언',
        '영양 및 운동 가이드'
      ]
    },
    {
      name: '자람이AI',
      status: '서비스 중',
      icon: '🤖',
      summary: '발달장애 상담 챗봇',
      description: '발달장애인과 가족을 위한 전문적인 상담과 치료 정보를 제공합니다.',
      url: '/services/jarame',
      externalUrl: 'https://jarame.org',
      category: 'Healthcare',
      users: '8K+',
      features: [
        '발달장애 진단 정보',
        '치료 방법 안내',
        '가족 상담 지원',
        '교육 프로그램 추천'
      ]
    },
    {
      name: '마음이AI',
      status: '서비스 중',
      icon: '💬',
      summary: '심리상담 특화 챗봇',
      description: '심리상담과 정신건강에 특화된 AI 상담 서비스로, 일상적인 스트레스 관리부터 전문적인 상담까지 지원합니다.',
      url: '/services/maeume',
      externalUrl: 'https://maeume.org',
      category: 'Mental Health',
      users: '12K+',
      features: [
        '일상 스트레스 관리',
        '기분 변화 모니터링',
        '심리 건강 체크',
        '전문 상담 연계'
      ]
    }
  ]

  const categories = [
    {
      name: 'Legal',
      title: '법률',
      description: '법률 상담 및 절차 안내',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'Healthcare',
      title: '의료',
      description: '건강상담 및 의료 정보',
      color: 'from-red-500 to-pink-600'
    },
    {
      name: 'Mental Health',
      title: '정신건강',
      description: '심리상담 및 정신건강',
      color: 'from-purple-500 to-indigo-600'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      {/* 1. Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-6">🤖</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI 챗봇 서비스
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              전문 분야별 AI 상담 서비스
            </p>
            <p className="text-lg max-w-3xl mx-auto text-white/90">
              법률, 의료, 한의학, 항암재활, 발달장애, 심리상담 등 다양한 분야에서 
              24/7 전문 상담을 제공합니다. 언제든지 필요한 정보와 도움을 받으세요.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              서비스 카테고리
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              전문 분야별로 분류된 AI 챗봇 서비스들입니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-white text-2xl">
                    {category.name === 'Legal' ? '⚖️' : 
                     category.name === 'Healthcare' ? '🏥' : '💬'}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chatbot Services */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI 챗봇 서비스 목록
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              각 분야별 전문 AI 챗봇 서비스를 확인하세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chatbots.map((chatbot, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{chatbot.icon}</div>
                  <div className="flex flex-col gap-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {chatbot.status}
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                      플랫폼화 예정
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{chatbot.name}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{chatbot.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                    {chatbot.category === 'Legal' ? '법률' : 
                     chatbot.category === 'Healthcare' ? '의료' : '정신건강'}
                  </span>
                  <span className="text-xs text-gray-500">{chatbot.users}</span>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">주요 기능</h4>
                  <ul className="space-y-1">
                    {chatbot.features.slice(0, 2).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-xs text-gray-600">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-2">
                  {chatbot.url && (
                    <Link 
                      href={chatbot.url} 
                      className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg text-center text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                      자세히 보기
                    </Link>
                  )}
                  {chatbot.externalUrl && (
                    <a
                      href={chatbot.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-blue-600 text-blue-600 px-3 py-2 rounded-lg text-center text-sm font-medium hover:bg-blue-50 transition-colors"
                    >
                      서비스 이용
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Integration Info */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              플랫폼 통합 계획
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              모든 AI 챗봇 서비스가 통합 플랫폼으로 발전할 예정입니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">통합 플랫폼</h3>
              <p className="text-gray-600">
                개별 챗봇 서비스들을 통합 플랫폼으로 발전시켜 사용자 경험을 향상시킵니다.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">데이터 연동</h3>
              <p className="text-gray-600">
                각 서비스의 데이터를 연동하여 더 정확하고 개인화된 상담을 제공합니다.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">고도화</h3>
              <p className="text-gray-600">
                AI 기술을 지속적으로 고도화하여 더 스마트하고 유용한 서비스를 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Service Status */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">Live Service</span>
          <p className="text-gray-600">법률이AI·히포크라테스AI·마음이AI·자람이AI 등 전문 분야별 AI 챗봇이 서비스 중입니다.</p>
        </div>
      </section>

      {/* 8. Ecosystem Connection */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">DAL 생태계와의 연결</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">AI 챗봇 서비스들은 DAL AI 플랫폼 기반으로, 각 전문 도메인(법률·의료·정신건강·발달장애 등)을 연결합니다. 자람이·토탈케어로그와 데이터 연동.</p>
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            AI 챗봇 서비스로 시작하세요
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            전문 분야별 AI 상담으로 언제든지 필요한 정보와 도움을 받을 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              서비스 문의
            </Link>
            <Link 
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              전체 서비스 보기
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
