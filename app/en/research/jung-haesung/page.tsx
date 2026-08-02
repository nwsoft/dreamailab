import type { Metadata } from 'next'
import EnLandingPage from '../../../../components/EnLandingPage'
import {
  AI_DIGITAL_CARE_LOG_ID,
  JUNG_HAESUNG_PERSON_ID,
  JUNG_HAESUNG_URL,
  jungHaesungPersonSchema,
} from '../../../../lib/entities'
import { absoluteUrl } from '../../../../lib/seo'

const englishUrl = absoluteUrl('/en/research/jung-haesung')

export const metadata: Metadata = {
  title: 'Jung Haesung – AI Researcher and AI Digital Care Log Architect',
  description:
    'Official research profile of Jung Haesung, co-founder and CTO of Dream AI Lab, with selected publications, books, and public technical references.',
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
      'AI Digital Care Log architecture, selected publications, books, and official technical references.',
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
                dateModified: '2026-08-03',
                mainEntity: { '@id': JUNG_HAESUNG_PERSON_ID },
                about: { '@id': AI_DIGITAL_CARE_LOG_ID },
              },
            ],
          }),
        }}
      />
      <EnLandingPage
        title="Jung Haesung"
        subtitle="AI Researcher · Co-founder & CTO · AI Digital Care Log Architect"
        description="Jung Haesung researches accountable AI data architectures that connect decisions, logs, human review, and learning while preserving human responsibility."
        koPath="/research/jung-haesung"
        sections={[
          {
            heading: 'Roles',
            body: 'Co-founder & CTO of Dream AI Lab; architect of AI Digital Care Log; design lead across Dream AI Lab services including Jarame, Senior & Life, Global Couple Care, and VeggieCare; founder of NoahAI Labs and architect of NoahAI.',
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
            body: 'AI Digital Care Log, explainable decision support, longitudinal context, consent and auditability, and domain-specific feedback loops across care, education, lifestyle, and finance.',
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
