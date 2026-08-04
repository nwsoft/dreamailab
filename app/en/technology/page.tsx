import type { Metadata } from 'next'
import EnLandingPage from '../../../components/EnLandingPage'
import {
  AI_DIGITAL_CARE_LOG_CANONICAL_EN,
  AI_DIGITAL_CARE_LOG_FLOW_EN,
  AI_DIGITAL_CARE_LOG_PUBLIC_EN,
  AI_DIGITAL_CARE_LOG_REGULATED_BOUNDARY_EN,
} from '../../../lib/ai-digital-care-log-copy'
import { absoluteUrl, buildPageMetadata } from '../../../lib/seo'

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: 'Technology – AI Digital Care Log | Dream AI Lab',
    description: AI_DIGITAL_CARE_LOG_PUBLIC_EN,
    path: '/en/technology',
    ogImageAlt: 'Dream AI Lab Technology',
  }),
  alternates: {
    canonical: absoluteUrl('/en/technology'),
    languages: {
      'ko-KR': absoluteUrl('/technology'),
      'en-US': absoluteUrl('/en/technology'),
    },
  },
  openGraph: { locale: 'en_US' },
}

export default function EnTechnologyPage() {
  return (
    <EnLandingPage
      title="AI Digital Care Log"
      subtitle="Universal AI data, judgment, and learning-feedback architecture"
      description={AI_DIGITAL_CARE_LOG_PUBLIC_EN}
      koPath="/technology"
      sections={[
        {
          heading: 'What is AI Digital Care Log?',
            body: AI_DIGITAL_CARE_LOG_CANONICAL_EN,
        },
        {
            heading: 'How it works',
            body: AI_DIGITAL_CARE_LOG_FLOW_EN,
          },
          {
            heading: 'Cross-domain implementation',
            body: 'The same architecture has been designed and applied across developmental care through Jarame, financial and investing infrastructure through NoahAI, senior life through Senior & Life, and food, nutrition, and lifestyle through VeggieCare. Each domain advances its own data, judgment, execution, and feedback layers according to its operational maturity.',
          },
          {
            heading: 'Regulated execution boundary',
            body: AI_DIGITAL_CARE_LOG_REGULATED_BOUNDARY_EN,
        },
      ]}
      links={[
        { label: 'Originator and Developer – Jung Haesung', href: '/en/research/jung-haesung' },
        { label: 'Technology (KO)', href: '/technology' },
        { label: 'EduCareLog', href: '/technology/educarelog' },
      ]}
    />
  )
}
