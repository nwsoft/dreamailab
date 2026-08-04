import type { Metadata } from 'next'
import EnLandingPage from '../../../components/EnLandingPage'
import { AI_DIGITAL_CARE_LOG_PUBLIC_EN } from '../../../lib/ai-digital-care-log-copy'
import { absoluteUrl, buildPageMetadata } from '../../../lib/seo'

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: 'About Dream AI Lab',
    description: AI_DIGITAL_CARE_LOG_PUBLIC_EN,
    path: '/en/about',
    ogImageAlt: 'About Dream AI Lab',
  }),
  alternates: {
    canonical: absoluteUrl('/en/about'),
    languages: {
      'ko-KR': absoluteUrl('/about'),
      'en-US': absoluteUrl('/en/about'),
    },
  },
  openGraph: { locale: 'en_US' },
}

export default function EnAboutPage() {
  return (
    <EnLandingPage
      title="About Dream AI Lab"
      subtitle="Company"
      description="Dream AI Lab develops and commercializes AI Digital Care Log as a universal AI data, judgment, action, and learning-feedback platform across human life."
      koPath="/about"
      sections={[
        {
          heading: 'Mission',
          body: 'Connect records from real life over time so AI can derive explainable judgments and next actions, learn from outcomes, and continuously improve personalized models.',
        },
        {
          heading: 'Leadership',
          body: 'AI researcher and CTO Jung Haesung first conceived and developed AI Digital Care Log. He first applied it to Jarame, then directly designed, developed, and commercialized NoahAI as a financial and investing infrastructure OS, and extended the architecture to Senior & Life, VeggieCare, and other real-world domains.',
        },
      ]}
      links={[
        { label: 'Jung Haesung – Official Profile', href: '/en/research/jung-haesung' },
        { label: 'AI Digital Care Log Technology', href: '/en/technology' },
        { label: 'Services', href: '/en/services' },
        { label: 'Contact', href: '/contact' },
      ]}
    />
  )
}
