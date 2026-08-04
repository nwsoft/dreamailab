import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import {
  AI_DIGITAL_CARE_LOG_FLOW_KO,
  AI_DIGITAL_CARE_LOG_PUBLIC_KO,
  JUNG_HAESUNG_DAL_ATTRIBUTION_KO,
} from '../../../lib/ai-digital-care-log-copy'
import {
  AI_DIGITAL_CARE_LOG_ID,
  JUNG_HAESUNG_PERSON_ID,
  JUNG_HAESUNG_URL,
  jungHaesungPersonSchema,
} from '../../../lib/entities'
import { absoluteUrl } from '../../../lib/seo'

export const metadata: Metadata = {
  title: 'AI 연구자 정해성 | AI 디지털케어로그 설계·연구',
  description:
    'AI디지털케어로그 최초 고안·개발자이자 드림에이아이랩 공동창업자·CTO 정해성의 연구, 현장 실증, 논문·저서와 기술 자료를 안내합니다.',
  authors: [{ name: '정해성', url: JUNG_HAESUNG_URL }],
  alternates: {
    canonical: JUNG_HAESUNG_URL,
    languages: {
      'ko-KR': JUNG_HAESUNG_URL,
      'en-US': absoluteUrl('/en/research/jung-haesung'),
      'x-default': JUNG_HAESUNG_URL,
    },
  },
  openGraph: {
    title: 'AI 연구자 정해성 | Dream AI Lab',
    description: 'AI디지털케어로그 최초 고안·개발, 현장 실증과 공개 논문·저서·기술 자료',
    url: JUNG_HAESUNG_URL,
    type: 'profile',
    images: ['/og-image.png'],
  },
}

const publications = [
  {
    title:
      'AI Digital Care Log: A Feedback-based Decision Architecture for Developmental Disability Intervention',
    status: 'Preprint draft · 2026',
    note: '발달장애 개입을 위한 피드백 기반 의사결정 아키텍처',
    href: '/technology',
    hrefLabel: '관련 기술 정본',
  },
  {
    title:
      'NoahAI-DAL: A Governable Financial Decision Architecture with XAI and Risk Governance',
    status: 'Preprint draft · 2026',
    note: '설명 가능성과 리스크 거버넌스를 갖춘 금융 의사결정 아키텍처',
    href: '/blog/noahai-technical-whitepaper',
    hrefLabel: '관련 기술백서',
  },
] as const

const books = [
  {
    title: 'AI 시대의 진짜 기술',
    status: 'Amazon',
    href: 'https://www.amazon.com/s?k=AI+%EC%8B%9C%EB%8C%80%EC%9D%98+%EC%A7%84%EC%A7%9C+%EA%B8%B0%EC%88%A0+%EC%A0%95%ED%95%B4%EC%84%B1',
    hrefLabel: 'Amazon에서 보기',
  },
  {
    title: '인공지능 시대의 발달장애의 현재와 미래',
    status: 'Amazon',
    href: 'https://www.amazon.com/s?k=%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5+%EC%8B%9C%EB%8C%80%EC%9D%98+%EB%B0%9C%EB%8B%AC%EC%9E%A5%EC%95%A0%EC%9D%98+%ED%98%84%EC%9E%AC%EC%99%80+%EB%AF%B8%EB%9E%98+%EC%A0%95%ED%95%B4%EC%84%B1',
    hrefLabel: 'Amazon에서 보기',
  },
] as const

const publicPdfs = [
  {
    title: '노아AI가 바꾸는 금융 AI의 미래',
    status: 'Public PDF · NoahAI Labs 공식 배포',
    href: 'https://noahailabs.com/ko/service/financial-ai-future',
    hrefLabel: '공식 페이지',
  },
] as const

const roles = [
  '드림에이아이랩 공동창업자·CTO',
  'AI디지털케어로그 최초 고안·개발자',
  '세계 최초 발달장애 맞춤형 치료·학습 플랫폼 자람이 설계·개발',
  'NoahAI Labs 창업자 · NoahAI 금융·재테크 인프라 OS 설계·개발·사업화',
  '시니어앤라이프 · Global Couple Care · VeggieCare 등 DAL 서비스 기술·제품 설계 총괄',
] as const

const publicMaterials = [
  { href: '/technology', label: 'AI 디지털케어로그 기술', external: false },
  { href: '/news?category=tech', label: '기술 블로그', external: false },
  { href: 'https://jarame.or.kr/tech-docs', label: '자람이 적용 기술', external: true },
  {
    href: 'https://noahailabs.com/ko/about/founder-origin',
    label: 'NoahAI 기술 전이',
    external: true,
  },
  {
    href: '/blog/noahai-technical-whitepaper',
    label: 'NoahAI 기술백서',
    external: false,
  },
] as const

const profilePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${JUNG_HAESUNG_URL}#profile-page`,
  url: JUNG_HAESUNG_URL,
  name: 'AI 연구자 정해성',
  inLanguage: 'ko-KR',
  dateModified: '2026-08-04',
  mainEntity: { '@id': JUNG_HAESUNG_PERSON_ID },
  about: { '@id': AI_DIGITAL_CARE_LOG_ID },
}

const creativeWorksSchema = [
  ...publications.map((item) => ({
    '@type': 'ScholarlyArticle',
    name: item.title,
    author: { '@id': JUNG_HAESUNG_PERSON_ID },
    creativeWorkStatus: 'Preprint draft',
    datePublished: '2026',
    url: absoluteUrl(item.href),
  })),
  ...books.map((item) => ({
    '@type': 'Book',
    name: item.title,
    author: { '@id': JUNG_HAESUNG_PERSON_ID },
    bookFormat: 'https://schema.org/EBook',
    url: item.href,
  })),
  ...publicPdfs.map((item) => ({
    '@type': 'DigitalDocument',
    name: item.title,
    author: { '@id': JUNG_HAESUNG_PERSON_ID },
    encodingFormat: 'application/pdf',
    url: item.href,
  })),
]

function ExternalLink({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-primary-700 underline underline-offset-4"
    >
      {children}
    </a>
  )
}

export default function JungHaesungProfilePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [jungHaesungPersonSchema, profilePageSchema, ...creativeWorksSchema],
          }),
        }}
      />
      <main>
        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold tracking-wide text-cyan-300">AI Researcher · Architecture</p>
            <h1 className="mt-4 text-4xl font-bold sm:text-5xl">AI 연구자 정해성</h1>
            <p className="mt-4 text-xl text-slate-200">드림에이아이랩 공동창업자·CTO · AI디지털케어로그 최초 고안·개발자</p>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
              {AI_DIGITAL_CARE_LOG_PUBLIC_KO}
            </p>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-400">
              {JUNG_HAESUNG_DAL_ATTRIBUTION_KO}
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto grid max-w-5xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <article className="rounded-2xl border border-slate-200 bg-white p-8">
              <h2 className="text-2xl font-bold text-slate-900">연구·설계 분야</h2>
              <ul className="mt-5 space-y-3 text-slate-700">
                <li>• 인간 삶 전반의 시간축 맥락 데이터</li>
                <li>• AI 판단 레이어와 설명 가능한 AI(XAI)</li>
                <li>• 판단·권고·실행 결과의 학습·환류</li>
                <li>• 돌봄·교육·생활·의료·금융 도메인의 개인화 모델</li>
                <li>• 동의·권한·감사로그를 포함한 데이터 거버넌스</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-8">
              <h2 className="text-2xl font-bold text-slate-900">역할</h2>
              <ul className="mt-5 space-y-3 text-slate-700">
                {roles.map((role) => (
                  <li key={role}>• {role}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-950 py-10 text-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="text-center text-lg font-semibold text-cyan-200">
              {AI_DIGITAL_CARE_LOG_FLOW_KO}
            </p>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-white py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900">Selected Publications</h2>
            <p className="mt-3 text-sm text-slate-600">
              상태는 공개 가능한 범위만 표기합니다. 프리프린트·초안은 peer-reviewed 출판물로 표기하지 않습니다.
            </p>
            <ul className="mt-6 space-y-4">
              {publications.map((item) => (
                <li key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-cyan-800">{item.status}</p>
                  <h3 className="mt-2 text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.note}</p>
                  <p className="mt-3">
                    <Link href={item.href} className="font-semibold text-primary-700 underline underline-offset-4">
                      {item.hrefLabel}
                    </Link>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-slate-200 py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900">Books & Public Writing</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {books.map((item) => (
                <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-amber-800">{item.status}</p>
                  <h3 className="mt-2 text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-3">
                    <ExternalLink href={item.href}>{item.hrefLabel}</ExternalLink>
                  </p>
                </article>
              ))}
              {publicPdfs.map((item) => (
                <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 md:col-span-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-teal-800">{item.status}</p>
                  <h3 className="mt-2 text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    출판사 없는 PDF 공개 배포본입니다. 정식 서점으로 표기하지 않습니다.
                  </p>
                  <p className="mt-3">
                    <ExternalLink href={item.href}>{item.hrefLabel}</ExternalLink>
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-white py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900">공개 원칙</h2>
            <p className="mt-5 max-w-3xl leading-7 text-slate-700">
              연구자 신뢰는 반복적인 개인 서사가 아니라 공개 기술 문서, 정확한 역할 표기,
              검증 경계와 수정 이력으로 쌓습니다. 가족의 민감한 개인정보는 연구자 엔터티와 분리합니다.
            </p>
            <h3 className="mt-10 text-xl font-bold text-slate-900">정본 기술·적용 자료</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {publicMaterials.map((item) =>
                item.external ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-slate-300 px-5 py-3 font-semibold text-slate-700"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={
                      item.href === '/technology'
                        ? 'rounded-lg bg-primary-600 px-5 py-3 font-semibold text-white'
                        : 'rounded-lg border border-slate-300 px-5 py-3 font-semibold text-slate-700'
                    }
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
