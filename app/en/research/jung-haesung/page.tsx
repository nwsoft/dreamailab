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
    'Official research profile of Jung Haesung, co-founder and CTO of Dream AI Lab and architect of AI Digital Care Log.',
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
    description: 'AI Digital Care Log architecture, research principles, and official technical references.',
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
                dateModified: '2026-07-26',
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
            heading: 'Research focus',
            body: 'AI Digital Care Log, explainable decision support, longitudinal context, consent and auditability, and domain-specific feedback loops across care, education, lifestyle, and finance.',
          },
          {
            heading: 'Public attribution policy',
            body: 'Research credibility is established through technical documentation, precise role attribution, evidence boundaries, and revision history. Sensitive family information is not used as a repeated identity signal.',
          },
        ]}
        links={[
          { label: 'AI Digital Care Log technology', href: '/en/technology' },
          { label: 'Research profile (KO)', href: '/research/jung-haesung' },
        ]}
      />
    </>
  )
}
