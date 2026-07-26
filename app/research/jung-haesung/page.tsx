import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
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
    'AI 연구자이자 드림에이아이랩 공동창업자·CTO 정해성의 AI 디지털케어로그 설계 철학, 연구 분야와 공개 기술 자료를 안내합니다.',
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
    description: 'AI 디지털케어로그 설계 철학과 공개 기술 자료',
    url: JUNG_HAESUNG_URL,
    type: 'profile',
    images: ['/og-image.png'],
  },
}

const profilePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${JUNG_HAESUNG_URL}#profile-page`,
  url: JUNG_HAESUNG_URL,
  name: 'AI 연구자 정해성',
  inLanguage: 'ko-KR',
  dateModified: '2026-07-26',
  mainEntity: { '@id': JUNG_HAESUNG_PERSON_ID },
  about: { '@id': AI_DIGITAL_CARE_LOG_ID },
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
            '@graph': [jungHaesungPersonSchema, profilePageSchema],
          }),
        }}
      />
      <main>
        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold tracking-wide text-cyan-300">AI Researcher · Architecture</p>
            <h1 className="mt-4 text-4xl font-bold sm:text-5xl">AI 연구자 정해성</h1>
            <p className="mt-4 text-xl text-slate-200">드림에이아이랩 공동창업자·CTO · AI 디지털케어로그 설계·고안자</p>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
              기록이 다음 판단과 학습으로 이어지도록 Decision–Log–Review–Learning 구조를 설계하고,
              사람의 최종 판단과 책임을 보존하는 AI 데이터 아키텍처를 연구합니다.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto grid max-w-5xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <article className="rounded-2xl border border-slate-200 bg-white p-8">
              <h2 className="text-2xl font-bold text-slate-900">연구·설계 분야</h2>
              <ul className="mt-5 space-y-3 text-slate-700">
                <li>• AI 디지털케어로그와 장기 맥락 기록</li>
                <li>• 설명 가능한 의사결정 보조와 사람 검토</li>
                <li>• 케어·교육·생활·금융 도메인의 기록 환류</li>
                <li>• 동의·권한·감사로그를 포함한 데이터 거버넌스</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-8">
              <h2 className="text-2xl font-bold text-slate-900">공개 원칙</h2>
              <p className="mt-5 leading-7 text-slate-700">
                연구자 신뢰는 반복적인 개인 서사가 아니라 공개 기술 문서, 정확한 역할 표기,
                검증 경계와 수정 이력으로 쌓습니다. 가족의 민감한 개인정보는 연구자 엔터티와 분리합니다.
              </p>
            </article>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-white py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900">정본 기술·적용 자료</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/technology" className="rounded-lg bg-primary-600 px-5 py-3 font-semibold text-white">
                AI 디지털케어로그 기술
              </Link>
              <Link href="/news?category=tech" className="rounded-lg border border-slate-300 px-5 py-3 font-semibold text-slate-700">
                기술 블로그
              </Link>
              <a href="https://jarame.or.kr/tech-docs" className="rounded-lg border border-slate-300 px-5 py-3 font-semibold text-slate-700">
                자람이 적용 기술
              </a>
              <a href="https://noahailabs.com/ko/about/founder-origin" className="rounded-lg border border-slate-300 px-5 py-3 font-semibold text-slate-700">
                NoahAI 기술 전이
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
