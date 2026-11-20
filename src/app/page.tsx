import type { Metadata } from 'next'
import GlobalHomePage from '@/components/Globalhomepage'

export const metadata: Metadata = {
  title: 'Murivest Group Ltd | Global Commercial Real Estate Services',
  description:
    'Murivest Group Ltd — international commercial real estate services and investment firm across East Africa, the UK and global markets. Brokerage, asset management, investment property services.',
  keywords: [
    'commercial real estate services Kenya',
    'Nairobi commercial property',
    'office space Nairobi',
    'industrial property Kenya',
    'investment advisory Kenya',
    'East Africa real estate',
    'Murivest Group Ltd',
    'Mark Muriithi',
    'commercial property underwriting',
    'exit strategy advisory',
  ],
  authors: [{ name: 'Murivest Group Ltd' }],
  creator: 'Murivest Group Ltd',
  publisher: 'Murivest Group Ltd',

  openGraph: {
    title: 'Murivest Group Ltd | Global Commercial Real Estate Services',
    description:
      'Murivest Group Ltd provides commercial real estate brokerage, property and asset management, and investment property services across East Africa, the UK and beyond.',
    url: 'https://murivest.com',
    siteName: 'Murivest Group Ltd',
    images: [
      {
        url: 'https://murivest.com/image.webp',
        width: 1200,
        height: 630,
        alt: 'Murivest Group Ltd – commercial real estate services Kenya',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Murivest Group Ltd | Global Commercial Real Estate Services',
    description:
      'Murivest Group is the global leader in commercial real estate services and investment advisory specializing in institutional-grade opportunities.',
    images: ['https://murivest.com/image.webp'],
  },

  alternates: {
    canonical: 'https://murivest.com',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function Page() {
  return <GlobalHomePage />
}