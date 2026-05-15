import type { Metadata } from 'next'
import EnLandingPage from '../../../components/EnLandingPage'
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
      description="DAL is not a list of separate apps—it is one AI Digital Care Log layer where developmental, senior, medical, education, wellness, and family domains connect and scale."
      koPath="/services"
      sections={[
        {
          heading: 'Jarame',
          body: 'Developmental disability care platform linking home, school, center, and hospital data.',
        },
        {
          heading: 'Senior & Life · Healthcare · EduCareLog',
          body: 'Senior care, total care log, and individualized education—same record standard, same AI engine philosophy.',
        },
        {
          heading: 'Global Couple Care · VeggieCare',
          body: 'Family settlement and lifestyle wellness extensions on the shared middleware stack.',
        },
      ]}
      links={[
        { label: 'Full service hub (KO)', href: '/services' },
        { label: 'Jarame', href: '/services/jarame' },
      ]}
    />
  )
}
