import type { Metadata } from 'next'
import EnLandingPage from '../../../components/EnLandingPage'
import { AI_DIGITAL_CARE_LOG_FLOW_EN } from '../../../lib/ai-digital-care-log-copy'
import { absoluteUrl, buildPageMetadata } from '../../../lib/seo'

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: 'Services – Dream AI Lab Platform Hub',
    description:
      'Explore how Dream AI Lab connects six care domains on one AI Digital Care Log infrastructure: Jarame, Senior & Life, healthcare, education, global couple care, and VeggieCare.',
    path: '/en/services',
    ogImageAlt: 'Dream AI Lab Services',
  }),
  alternates: {
    canonical: absoluteUrl('/en/services'),
    languages: {
      'ko-KR': absoluteUrl('/services'),
      'en-US': absoluteUrl('/en/services'),
    },
  },
  openGraph: { locale: 'en_US' },
}

export default function EnServicesPage() {
  return (
    <EnLandingPage
      title="Service ecosystem hub"
      subtitle="Platform infrastructure"
      description="DAL applies one universal AI Digital Care Log architecture across developmental care, senior life, healthcare, education, finance, nutrition, lifestyle, and other domains."
      koPath="/services"
      sections={[
        {
          heading: 'Shared architecture',
          body: AI_DIGITAL_CARE_LOG_FLOW_EN,
        },
        {
          heading: 'Jarame · Senior & Life · Healthcare · EduCareLog',
          body: 'The same data, judgment, action, and learning-feedback architecture is applied to developmental care, senior life, healthcare, and individualized education, with each service clearly labeled by operating maturity.',
        },
        {
          heading: 'NoahAI · VeggieCare · domain expansion',
          body: 'NoahAI commercialized the architecture as a financial and investing infrastructure OS; VeggieCare applies it to food, nutrition, and lifestyle. Global Couple Care currently operates primarily as a community and matching service and is distinguished from direct Care Log deployment.',
        },
      ]}
      links={[
        { label: 'Full service hub (KO)', href: '/services' },
        { label: 'Jarame', href: '/services/jarame' },
      ]}
    />
  )
}
