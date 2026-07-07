import type { Metadata } from 'next'
import EnLandingPage from '../../components/EnLandingPage'
import { absoluteUrl, buildPageMetadata } from '../../lib/seo'

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: 'Dream AI Lab (DAL) – AI Digital Care Log Platform',
    description:
      'Dream AI Lab standardizes care, health, and education data with AI Digital Care Log technology—connecting developmental disability, senior care, healthcare, education, and wellness on one platform.',
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
      description="We build one data infrastructure for care innovation—linking Jarame (developmental disabilities), senior care, healthcare, education, global couple care, and wellness."
      koPath="/"
      sections={[
        {
          heading: 'Platform philosophy',
          body: 'Rather than isolated apps, DAL connects domains through a shared AI Digital Care Log standard—enabling personalized care, institutional efficiency, and long-term data flywheels.',
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
