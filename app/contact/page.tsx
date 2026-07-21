'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useMemo, useState } from 'react'
import { buildMailtoHref, type ContactFormPayload } from '../../lib/contact-form'

const CONTACT_EMAIL = 'contact@dreamailab.com'
const inputClass =
  'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent'

const INQUIRY_TYPES = [
  { value: 'general', label: '일반 문의' },
  { value: 'b2b', label: '사업 제휴·기관 도입' },
  { value: 'ir', label: '투자·IR' },
  { value: 'tech', label: '기술·R&D' },
  { value: 'press', label: '언론·보도' },
  { value: 'other', label: '기타' },
] as const

const SERVICES = [
  { value: 'platform', label: 'DAL 플랫폼·AI디지털케어로그' },
  { value: 'jarame', label: '자람이' },
  { value: 'senior', label: '시니어앤라이프' },
  { value: 'healthcare', label: '토탈케어로그' },
  { value: 'educarelog', label: '에듀케어로그' },
  { value: 'marriage', label: '글로벌커플케어' },
  { value: 'veggie', label: '베지케어' },
  { value: 'research', label: 'Research·Pet AI (연구·R&D)' },
  { value: 'other', label: '기타·복수' },
] as const

type InquiryType = (typeof INQUIRY_TYPES)[number]['value']
type ServiceSlug = (typeof SERVICES)[number]['value']

function mapUrlTypeToInquiry(type: string | null): InquiryType {
  switch (type) {
    case 'ir':
    case 'strategic-partnership':
      return 'ir'
    case 'partner':
    case 'institution':
    case 'b2b':
      return 'b2b'
    case 'tech':
      return 'tech'
    case 'press':
      return 'press'
    case 'veggie':
      return 'general'
    default:
      return 'general'
  }
}

function mapUrlService(service: string | null, type: string | null): ServiceSlug {
  if (type === 'veggie') return 'veggie'
  const allowed = new Set(SERVICES.map((s) => s.value))
  if (service && allowed.has(service as ServiceSlug)) {
    return service as ServiceSlug
  }
  return 'platform'
}

function NoticeBanner({
  children,
  variant = 'success',
}: {
  children: React.ReactNode
  variant?: 'success' | 'info' | 'error'
}) {
  const styles =
    variant === 'info'
      ? 'bg-blue-50 border-blue-200 text-blue-900'
      : variant === 'error'
        ? 'bg-red-50 border-red-200 text-red-800'
        : 'bg-green-50 border-green-200 text-green-800'
  return <div className={`mb-6 p-4 border rounded-lg text-sm ${styles}`}>{children}</div>
}

function ContactForm() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: 'general' as InquiryType,
    service: 'platform' as ServiceSlug,
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      inquiryType: mapUrlTypeToInquiry(searchParams.get('type')),
      service: mapUrlService(searchParams.get('service'), searchParams.get('type')),
    }))
  }, [searchParams])

  const inquiryLabel = useMemo(
    () => INQUIRY_TYPES.find((t) => t.value === formData.inquiryType)?.label ?? '',
    [formData.inquiryType]
  )
  const serviceLabel = useMemo(
    () => SERVICES.find((s) => s.value === formData.service)?.label ?? '',
    [formData.service]
  )

  const buildPayload = (): ContactFormPayload => ({
    name: formData.name,
    email: formData.email,
    company: formData.company,
    inquiryType: formData.inquiryType,
    inquiryLabel,
    service: formData.service,
    serviceLabel,
    message: formData.message,
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    const payload = buildPayload()
    window.location.href = buildMailtoHref(payload, CONTACT_EMAIL)

    setIsSubmitting(false)
    setSubmitStatus('success')
    setSubmitMessage(
      '메일 앱이 열립니다. 받는 사람·내용을 확인한 뒤 보내기를 눌러 주셔야 문의가 전달됩니다.'
    )
    setTimeout(() => setSubmitStatus('idle'), 10000)
  }

  return (
    <>
      {submitStatus === 'success' && <NoticeBanner>{submitMessage}</NoticeBanner>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <NoticeBanner variant="info">
          문의는 <strong>{CONTACT_EMAIL}</strong>로 전달됩니다. 아래에서 제출하면 메일 앱에 제목·본문이 채워지며,{' '}
          <strong>보내기</strong>를 눌러야 최종 전송됩니다.
        </NoticeBanner>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block">
            <span className="block text-sm font-medium text-gray-700 mb-2">이름 *</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
              className={inputClass}
            />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-gray-700 mb-2">이메일 *</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
              className={inputClass}
            />
          </label>
        </div>

        <label className="block">
          <span className="block text-sm font-medium text-gray-700 mb-2">회사/기관</span>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            disabled={isSubmitting}
            className={inputClass}
          />
        </label>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block">
            <span className="block text-sm font-medium text-gray-700 mb-2">문의 유형 *</span>
            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
              className={inputClass}
            >
              {INQUIRY_TYPES.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-gray-700 mb-2">관심 서비스 *</span>
            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
              className={inputClass}
            >
              {SERVICES.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="block">
          <span className="block text-sm font-medium text-gray-700 mb-2">문의 내용 *</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={6}
            disabled={isSubmitting}
            className={inputClass}
          />
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting ? '메일 앱 여는 중…' : '메일 앱으로 문의 보내기'}
        </button>
      </form>
    </>
  )
}

export default function Contact() {
  const contactInfo = [
    { title: '이메일', value: CONTACT_EMAIL, icon: '📧', link: `mailto:${CONTACT_EMAIL}` },
    { title: '주소', value: '서울시 마포구 방울내로', icon: '📍', link: '#' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">문의하기</h1>
          <p className="text-xl max-w-3xl mx-auto">
            투자·제휴·서비스 도입 문의를 환영합니다. 관심 분야를 선택해 주세요.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">문의 양식</h2>
              <Suspense fallback={<p className="text-gray-500 text-sm">양식 불러오는 중…</p>}>
                <ContactForm />
              </Suspense>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">연락처</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center">
                      <div className="text-2xl mr-4">{info.icon}</div>
                      <div>
                        <p className="font-medium text-gray-900">{info.title}</p>
                        <a href={info.link} className="text-primary-600 hover:text-primary-700 transition-colors">
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">관련 링크</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li>
                    <Link href="/technology/platform" className="text-primary-600 hover:underline">
                      플랫폼 기술 개요
                    </Link>
                  </li>
                  <li>
                    <Link href="/ir" className="text-primary-600 hover:underline">
                      투자·IR
                    </Link>
                  </li>
                  <li>
                    <Link href="/business" className="text-primary-600 hover:underline">
                      비즈니스·파트너십
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://noahailabs.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:underline"
                    >
                      Noah AI Labs
                    </a>
                    <span className="text-gray-500"> (노아AI·분리 법인)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">운영 시간</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-medium">평일:</span> 09:00 – 18:00
                  </p>
                  <p>
                    <span className="font-medium">토요일:</span> 09:00 – 13:00
                  </p>
                  <p>
                    <span className="font-medium">일요일:</span> 휴무
                  </p>
                </div>
                <p className="text-sm text-primary-100 mt-4">
                  보도·뉴스 아카이브는 당시 홍보 문맥이며, 현재 사업·제품 현황은 IR·각 서비스 페이지를 기준으로
                  합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">자주 묻는 질문</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">투자·IR 문의는 어디로 하나요?</h3>
              <p className="text-gray-600 text-sm">
                투자 검토·IR 자료는{' '}
                <Link href="/ir" className="text-primary-600 underline">
                  투자·IR 페이지
                </Link>
                를 참고하시고, 문의 양식에서 「투자·IR」 유형을 선택해 주세요.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">모두의창업과 DAL의 관계는?</h3>
              <p className="text-gray-600 text-sm">
                출전·신청은 <strong>정해성</strong> 개인·<strong>자람이</strong> 제품 기준입니다. DAL 회사 소개는
                본 사이트를, 자람이 상세는 jarame.or.kr을 참고해 주세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
