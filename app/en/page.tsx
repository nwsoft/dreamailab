import type { Metadata } from 'next'
import EnLandingPage from '../../components/EnLandingPage'
import { AI_DIGITAL_CARE_LOG_PUBLIC_EN } from '../../lib/ai-digital-care-log-copy'
import { absoluteUrl, buildPageMetadata } from '../../lib/seo'

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: 'Dream AI Lab (DAL) – AI Digital Care Log Platform',
    description: AI_DIGITAL_CARE_LOG_PUBLIC_EN,
    path: '/en',
    ogImageAlt: 'Dream AI Lab',
  }),
  alternates: {
    canonical: absoluteUrl('/en'),
    languages: {
      'ko-KR': absoluteUrl('/'),
      'en-US': absoluteUrl('/en'),
    },
  },
  openGraph: { locale: 'en_US' },
}

export default function EnHomePage() {
  return (
    <EnLandingPage
      title="Dream AI Lab"
      subtitle="AI Digital Care Log · DAL"
      description={AI_DIGITAL_CARE_LOG_PUBLIC_EN}
      koPath="/"
      sections={[
        {
          heading: 'Platform philosophy',
          body: 'AI Digital Care Log is a universal AI data, judgment, and learning-feedback architecture—not a healthcare-only record standard. It connects context across daily life, behavior, care, education, healthcare, finance, investing, consumption, and work.',
        },
        {
          heading: 'Core domains',
          body: 'Jarame · Senior & Life · Total Care Log · Global Couple Care · EduCareLog · VeggieCare—each extends the same middleware and AI engine philosophy.',
        },
      ]}
      links={[
        { label: 'Services', href: '/en/services' },
        { label: 'Technology', href: '/en/technology' },
        { label: 'About', href: '/en/about' },
        { label: 'Latest news', href: '/en/news/77' },
      ]}
    />
  )
}
