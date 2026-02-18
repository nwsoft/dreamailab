'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // 실제 구현에서는 여기에 폼 제출 로직을 추가합니다
    // 예: API 호출, 이메일 전송 등
    
    // 시뮬레이션을 위한 지연
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitStatus('success')
    
    // 폼 초기화
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    })
    
    // 3초 후 상태 초기화
    setTimeout(() => setSubmitStatus('idle'), 3000)
  }

  const contactInfo = [
    {
      title: '이메일',
      value: 'contact@dreamailab.com',
      icon: '📧',
      link: 'mailto:contact@dreamailab.com'
    },
    {
      title: '주소',
      value: '서울시 마포구 방울내로',
      icon: '📍',
      link: '#'
    }
  ]

  const serviceInquiries = [
    {
      name: '자람이',
      description: '발달장애인을 위한 AI 커뮤니티 플랫폼',
      contact: 'jarame@dreamailab.com'
    },
    {
      name: '시니어앤라이프',
      description: '노인돌봄을 위한 AI 플랫폼',
      contact: 'senior@dreamailab.com'
    },
    {
      name: '히포크라테스AI',
      description: '의료진을 위한 AI 진단 지원 시스템',
      contact: 'medical@dreamailab.com'
    },
    {
      name: '노아AI',
      description: '재테크 투자를 위한 AI 플랫폼',
      contact: 'finance@dreamailab.com'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              문의하기
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              드림에이아이랩에 대한 문의사항이 있으시면 언제든 연락주세요. 
              빠르고 정확한 답변을 드리겠습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                문의 양식
              </h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">문의가 성공적으로 전송되었습니다. 빠른 시일 내에 답변드리겠습니다.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      이름 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="이름을 입력하세요"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      이메일 *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="이메일을 입력하세요"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    회사/기관
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="회사 또는 기관명을 입력하세요"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    문의 제목 *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">문의 제목을 선택하세요</option>
                    <option value="general">일반 문의</option>
                    <option value="business">사업 제휴</option>
                    <option value="technical">기술 문의</option>
                    <option value="service">서비스 문의</option>
                    <option value="support">고객 지원</option>
                    <option value="other">기타</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    문의 내용 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="문의 내용을 자세히 입력해주세요"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? '전송 중...' : '문의하기'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* General Contact Info */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  연락처 정보
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center">
                      <div className="text-2xl mr-4">{info.icon}</div>
                      <div>
                        <p className="font-medium text-gray-900">{info.title}</p>
                        <a 
                          href={info.link}
                          className="text-primary-600 hover:text-primary-700 transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service-specific Contacts */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  서비스별 문의
                </h3>
                <div className="space-y-4">
                  {serviceInquiries.map((service, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <h4 className="font-semibold text-gray-900 mb-1">{service.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                      <a 
                        href={`mailto:${service.contact}`}
                        className="text-primary-600 hover:text-primary-700 text-sm transition-colors"
                      >
                        {service.contact}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">운영 시간</h3>
                <div className="space-y-2">
                  <p><span className="font-medium">평일:</span> 09:00 - 18:00</p>
                  <p><span className="font-medium">토요일:</span> 09:00 - 13:00</p>
                  <p><span className="font-medium">일요일:</span> 휴무</p>
                </div>
                <p className="text-sm text-primary-100 mt-4">
                  * 긴급한 문의사항은 이메일로 연락주시면 빠른 답변을 드리겠습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              자주 묻는 질문
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              고객님들이 자주 문의하시는 내용들을 정리했습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                문의 후 답변은 언제 받을 수 있나요?
              </h3>
              <p className="text-gray-600">
                일반적으로 1-2일 내에 답변을 드리며, 긴급한 문의사항의 경우 
                더 빠른 답변을 제공합니다.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                서비스 도입 문의도 가능한가요?
              </h3>
              <p className="text-gray-600">
                네, 기업 및 기관의 서비스 도입 문의를 환영합니다. 
                맞춤형 솔루션을 제공해드립니다.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                기술 지원은 어떻게 받을 수 있나요?
              </h3>
              <p className="text-gray-600">
                각 서비스별 전용 이메일로 기술 지원을 받으실 수 있으며, 
                필요시 원격 지원도 제공합니다.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                제휴 및 협력 문의는 어디로 해야 하나요?
              </h3>
              <p className="text-gray-600">
                제휴 및 협력 문의는 contact@dreamailab.com으로 보내주시거나 
                문의 양식을 통해 연락주세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 