import type { Metadata } from 'next'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import { COMPANY_TAGLINE } from '../../../lib/company-copy'
import {
  AI_DIGITAL_CARE_LOG_CANONICAL_KO,
  AI_DIGITAL_CARE_LOG_FLOW_KO,
  AI_DIGITAL_CARE_LOG_PUBLIC_KO,
  AI_DIGITAL_CARE_LOG_REGULATED_BOUNDARY_KO,
  AI_DIGITAL_CARE_LOG_STATUS_KO,
} from '../../../lib/ai-digital-care-log-copy'
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildPageMetadata,
  SITE_URL,
} from '../../../lib/seo'

const pagePath = '/technology/platform'
const pageDescription = AI_DIGITAL_CARE_LOG_PUBLIC_KO

export const metadata: Metadata = buildPageMetadata({
  title: 'AI디지털케어로그 플랫폼 기술 개요 | 드림에이아이랩',
  description: pageDescription,
  path: pagePath,
  ogTitle: 'DAL 플랫폼 기술 개요 — AI디지털케어로그',
  type: 'article',
})

const breadcrumbLd = buildBreadcrumbJsonLd([
  { name: '홈', url: `${SITE_URL}/` },
  { name: '기술', url: absoluteUrl('/technology') },
  { name: '플랫폼 기술 개요', url: absoluteUrl(pagePath) },
])

const techLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'AI디지털케어로그 플랫폼 기술 개요',
  description: AI_DIGITAL_CARE_LOG_CANONICAL_KO,
  author: { '@type': 'Organization', name: 'Dream AI Lab' },
  publisher: { '@type': 'Organization', name: 'Dream AI Lab', url: SITE_URL },
  inLanguage: 'ko-KR',
  dateModified: '2026-08-04',
}

const pipeline = [
  {
    step: '01',
    title: '기록 연결',
    body: '동의·권한 기반으로 일상·행동·습관·기관·앱·디바이스 기록을 개인과 상황 중심의 시간축에 연결합니다.',
  },
  {
    step: '02',
    title: '맥락 이해',
    body: 'FHIR·HL7·Ed-Fi·xAPI 등 도메인 표준과 멀티모달 모델로 과거 변화, 현재 상태와 상황 맥락을 함께 해석합니다.',
  },
  {
    step: '03',
    title: 'AI 분석·판단',
    body: 'AI 판단 레이어가 상태·패턴·위험·기회를 분석하고 적합한 판단, 권고와 다음 행동을 도출합니다.',
  },
  {
    step: '04',
    title: '설명 가능한 실행',
    body: 'XAI로 판단 근거를 설명하고 워크플로·알림·콘텐츠·파트너 API를 통해 도메인에 맞는 실행으로 연결합니다.',
  },
  {
    step: '05',
    title: '결과 기록',
    body: '실행 이후의 반응·성과·변화와 예외를 다시 같은 시간축에 기록해 판단과 결과의 관계를 남깁니다.',
  },
  {
    step: '06',
    title: '학습·환류',
    body: '결과 데이터를 다음 판단과 개인화 모델에 환류해 사용할수록 도메인별 판단 품질을 지속적으로 고도화합니다.',
  },
]

const domains = [
  { name: '시니어앤라이프', status: 'Commercial Beta', href: '/services/senior' },
  { name: '토탈케어로그', status: 'Alpha', href: '/services/healthcare' },
  { name: '글로벌커플케어', status: 'Commercial', href: '/services/marriage' },
  { name: '에듀케어로그', status: 'Pilot', href: '/services/educarelog' },
  { name: '베지케어', status: 'Beta', href: '/services/veggie' },
]

export default function PlatformTechnologyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techLd) }} />
      <Header />

      <section className="bg-gradient-to-br from-slate-800 to-primary-700 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-white/80 mb-4 tracking-wide">플랫폼 기술 개요 · R&D·기관 도입</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">AI디지털케어로그 플랫폼</h1>
          <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
            {COMPANY_TAGLINE} 본 문서는 IR·R&D·기관 도입 검토용 <strong>기술 SSOT 요약</strong>입니다.
          </p>
          <p className="text-xs text-white/70 mt-6 max-w-2xl mx-auto">
            ※ 등록·연계 규모(기관·사업자 수)는 서비스 풀 규모이며, 전원 상용·MAU를 의미하지 않습니다. 상세는{' '}
            <Link href="/ir" className="underline hover:text-white">
              IR
            </Link>
            을 참고하세요.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">6단 학습·환류 아키텍처</h2>
          <p className="text-sm font-semibold text-primary-700 mb-6">{AI_DIGITAL_CARE_LOG_FLOW_KO}</p>
          <div className="space-y-4">
            {pipeline.map((p) => (
              <div key={p.step} className="flex gap-4 rounded-xl border border-gray-200 p-5 bg-gray-50/50">
                <span className="text-2xl font-bold text-primary-600 shrink-0">{p.step}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{p.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">DAL 관리 도메인 (자람이 제외)</h2>
          <p className="text-gray-600 text-sm mb-6">
            발달장애 축(자람이)은 별도 제품·사이트(jarame.or.kr)에서 상용 운영합니다. 아래는 DAL 플랫폼에서 직접
            전개하는 도메인입니다.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50 text-left text-gray-600">
                <tr>
                  <th className="px-4 py-3 font-semibold">도메인</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                  <th className="px-4 py-3 font-semibold">상세</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {domains.map((d) => (
                  <tr key={d.name}>
                    <td className="px-4 py-3 font-medium text-gray-900">{d.name}</td>
                    <td className="px-4 py-3 text-gray-700">{d.status}</td>
                    <td className="px-4 py-3">
                      <Link href={d.href} className="text-primary-600 hover:underline">
                        서비스 페이지
                      </Link>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">노아AI</td>
                  <td className="px-4 py-3 text-gray-700">Migrated</td>
                  <td className="px-4 py-3">
                    <Link href="/services/finance" className="text-primary-600 hover:underline">
                      Noah AI Labs 안내
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">표준·보안·RWE</h2>
          <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
            <li>
              <strong>표준:</strong> FHIR·HL7·Ed-Fi·xAPI 등 도메인 표준 스키마로 상호운용성을 확보합니다.
            </li>
            <li>
              <strong>보안:</strong> 동의(Consent)·RBAC·감사로그·가명처리·암호화를 전제로 설계합니다.
            </li>
            <li>
              <strong>RWD·RWE:</strong> 실제 생활·운영에서 생성되는 실사용데이터(RWD)와 실행 결과를 재기록하고,
              도메인에 맞는 실제사용근거(RWE)를 도출해 연구·정책·신약·PoC 협력에 활용할 수 있도록 설계합니다.
            </li>
            <li>
              <strong>확장:</strong> 플랫폼 IP·다도메인 확장·B2B SaaS·데이터/라이선스 구조를 지향합니다.
            </li>
          </ul>
          <div className="mt-8 rounded-xl border border-blue-200 bg-blue-50 p-5">
            <p className="text-sm font-semibold text-blue-950 mb-2">현재 기술 상태</p>
            <p className="text-sm text-blue-900 leading-relaxed">{AI_DIGITAL_CARE_LOG_STATUS_KO}</p>
          </div>
          <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-semibold text-amber-950 mb-2">규제 영역의 실행 권한</p>
            <p className="text-sm text-amber-900 leading-relaxed">{AI_DIGITAL_CARE_LOG_REGULATED_BOUNDARY_KO}</p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-violet-50 border-t border-violet-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex px-3 py-1 rounded-full bg-violet-100 text-violet-800 text-xs font-semibold mb-4">
            Research · Future Vision
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">도메인 확장 연구 — Pet AI</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            AI Digital Care Log의 동일 파이프라인을 반려동물(Animal) 도메인으로 확장하는 연구입니다.
            Human → Animal → Plant → Robot 비전 아래, 현재는 <strong>기술 개발 초기</strong> 단계이며
            상용 서비스·출시 예정이 아닙니다.
          </p>
          <ul className="space-y-2 text-sm text-gray-700 mb-6">
            <li>• Vision AI · Behavior Translation · Digital Care Log 누적</li>
            <li>• 자람이·시니어앤라이프·베지케어 기술의 Pet 재사용 가설</li>
            <li>• 장기: Robot Integration (돌봄 로봇 AI Brain)</li>
          </ul>
          <Link
            href="/research/pet-ai"
            className="inline-flex text-violet-700 font-semibold hover:underline text-sm"
          >
            Pet AI Digital Care Log 연구 페이지 →
          </Link>
        </div>
      </section>

      <section className="py-14 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-6">관련 문서</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/technology"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 bg-white text-gray-800 font-semibold hover:bg-gray-50 transition-colors"
            >
              핵심 기술 전체
            </Link>
            <Link
              href="/technology/educarelog"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 bg-white text-gray-800 font-semibold hover:bg-gray-50 transition-colors"
            >
              에듀케어로그 기술백서
            </Link>
            <Link
              href="/research"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-violet-300 bg-white text-violet-800 font-semibold hover:bg-violet-50 transition-colors"
            >
              Research
            </Link>
            <Link
              href="/contact?type=tech&service=platform"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
            >
              기술·R&D 문의
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
