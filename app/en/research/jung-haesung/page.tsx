import type { Metadata } from 'next'
import EnLandingPage from '../../../../components/EnLandingPage'
import {
  AI_DIGITAL_CARE_LOG_CANONICAL_EN,
  AI_DIGITAL_CARE_LOG_FLOW_EN,
  AI_DIGITAL_CARE_LOG_PUBLIC_EN,
} from '../../../../lib/ai-digital-care-log-copy'
import {
  AI_DIGITAL_CARE_LOG_ID,
  JUNG_HAESUNG_PERSON_ID,
  JUNG_HAESUNG_URL,
  jungHaesungPersonSchema,
} from '../../../../lib/entities'
import { absoluteUrl } from '../../../../lib/seo'

const englishUrl = absoluteUrl('/en/research/jung-haesung')

export const metadata: Metadata = {
  title: 'Jung Haesung – Originator and Developer of AI Digital Care Log',
  description:
    'Official profile of Jung Haesung, the researcher who first conceived and developed AI Digital Care Log, co-founder and CTO of Dream AI Lab.',
  authors: [{ name: 'Jung Haesung', url: englishUrl }],
  alternates: {
    canonical: englishUrl,
    languages: {
      'ko-KR': JUNG_HAESUNG_URL,
      'en-US': englishUrl,
      'x-default': JUNG_HAESUNG_URL,
    },
  },
  openGraph: {
    title: 'Jung Haesung – AI Researcher | Dream AI Lab',
    description:
      'Origin, cross-domain implementation, selected publications, books, and official technical references for AI Digital Care Log.',
    url: englishUrl,
    locale: 'en_US',
    type: 'profile',
    images: ['/og-image.png'],
  },
}

export default function JungHaesungEnglishProfilePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              jungHaesungPersonSchema,
              {
                '@type': 'ProfilePage',
                '@id': `${englishUrl}#profile-page`,
                url: englishUrl,
                name: 'Jung Haesung – AI Researcher',
                inLanguage: 'en-US',
                dateModified: '2026-08-04',
                mainEntity: { '@id': JUNG_HAESUNG_PERSON_ID },
                about: { '@id': AI_DIGITAL_CARE_LOG_ID },
              },
            ],
          }),
        }}
      />
      <EnLandingPage
        title="Jung Haesung"
        subtitle="AI Researcher · Co-founder & CTO · Originator and Developer of AI Digital Care Log"
        description={AI_DIGITAL_CARE_LOG_PUBLIC_EN}
        koPath="/research/jung-haesung"
        sections={[
          {
            heading: 'Roles',
            body: 'Jung Haesung first conceived and developed AI Digital Care Log. He designed and developed Jarame, the world’s first personalized treatment and learning platform for developmental disabilities; founded NoahAI Labs and designed, developed, and commercialized the NoahAI financial and investing infrastructure OS; and led the technology and product design of Senior & Life, Global Couple Care, VeggieCare, and other DAL services.',
          },
          {
            heading: 'AI Digital Care Log',
            body: AI_DIGITAL_CARE_LOG_CANONICAL_EN,
          },
          {
            heading: 'Architecture flow',
            body: AI_DIGITAL_CARE_LOG_FLOW_EN,
          },
          {
            heading: 'Selected publications',
            body: 'Preprint draft (2026): “AI Digital Care Log: A Feedback-based Decision Architecture for Developmental Disability Intervention.” Preprint draft (2026): “NoahAI-DAL: A Governable Financial Decision Architecture with XAI and Risk Governance.” These are not labeled as peer-reviewed publications.',
          },
          {
            heading: 'Books & public writing',
            body: 'Amazon books: “AI 시대의 진짜 기술” and “인공지능 시대의 발달장애의 현재와 미래.” Public PDF (NoahAI Labs distribution, not a bookstore edition): “노아AI가 바꾸는 금융 AI의 미래.”',
          },
          {
            heading: 'Research focus',
            body: 'Longitudinal context across human life, AI judgment layers, explainable AI, judgment–recommendation–action pipelines, outcome logging, learning feedback, personalization, consent, authority, and auditability across care, education, healthcare, lifestyle, and finance.',
          },
          {
            heading: 'Public attribution policy',
            body: 'Research credibility is established through technical documentation, precise role attribution, evidence boundaries, and revision history. Sensitive family information is not used as a repeated identity signal.',
          },
        ]}
        links={[
          { label: 'Full profile (KO)', href: '/research/jung-haesung' },
          { label: 'AI Digital Care Log technology', href: '/en/technology' },
          { label: 'NoahAI technical whitepaper', href: '/blog/noahai-technical-whitepaper' },
          {
            label: 'NoahAI public PDF landing',
            href: 'https://noahailabs.com/ko/service/financial-ai-future',
          },
        ]}
      />
    </>
  )
}
