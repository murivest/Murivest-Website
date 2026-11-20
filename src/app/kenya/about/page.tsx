import type { Metadata } from 'next'
import About from '@/components/About'
import {
  professionalServiceSchema,
  breadcrumbSchema,
  faqPageSchema,
  jsonLd,
} from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Murivest Group Ltd - Commercial Real Estate Services Kenya',
  description:
    'Murivest Group Ltd provides commercial real estate brokerage, property and asset management, and investment property services across East Africa, the UK and beyond.',
  keywords:
    'Murivest Group Ltd, independent real estate advisory Kenya, commercial property advisory Nairobi, institutional real estate standards, mandate-based advisory East Africa, real estate consulting Africa, property investment advisory Kenya',
  openGraph: {
    title: 'Murivest Group Ltd - Commercial Real Estate Services Kenya',
    description:
      'Murivest Group Ltd provides commercial real estate brokerage, property and asset management, and investment property services across East Africa, the UK and beyond.',
    images: ['/image.webp'],
  },
}

const aboutSchema = professionalServiceSchema({
  '@id': 'https://murivest.com/#organization',
  name: 'Murivest Group Ltd',
  description:
    'Independent institutional commercial real estate services firm headquartered in Nairobi, providing acquisition advisory, capital markets, and development strategy.',
  foundingDate: '2015',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: '45',
    unitText: 'professionals',
  },
  knowsAbout: [
    'commercial real estate services',
    'Capital Markets',
    'Investment Sales',
    'Tenant Representation',
    'Property Valuation',
    'Due Diligence',
    'Portfolio Strategy',
  ],
})

const aboutFaqs = [
  {
    question: 'What is Murivest Group Ltd\'s investment philosophy?',
    answer:
      'Murivest Group Ltd provides commercial real estate brokerage, property and asset management, and investment property services across East Africa, the UK and beyond.',
  },
  {
    question: 'Which markets does Murivest operate in?',
    answer:
      'Murivest operates across East Africa (Kenya, Uganda, Rwanda, Tanzania), the Middle East (UAE, Saudi Arabia, Qatar), Asia Pacific (Singapore, Hong Kong), and Europe (UK). Each market is covered by local professionals with ground-level relationships.',
  },
  {
    question: 'What is the minimum investment size for advisory engagements?',
    answer:
      'Minimum engagement sizes vary by market and mandate type. For direct property acquisitions in Kenya, typical minimums start at USD 5M equivalent. For portfolio mandates and cross-border allocations, minimums are typically USD 25M+. Contact our team to discuss your specific requirements.',
  },
]

export default function AboutPage() {
  return (
    <>
      {jsonLd(aboutSchema)}
      {jsonLd(breadcrumbSchema([
        { name: 'Home', item: 'https://murivest.com' },
        { name: 'About', item: 'https://murivest.com/about' },
      ]))}
      {jsonLd(faqPageSchema(aboutFaqs))}
      <About />
    </>
  )
}
