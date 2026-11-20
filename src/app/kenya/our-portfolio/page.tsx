import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { client } from '@/sanity/lib/client'; // adjust to your Sanity client path
import imageUrlBuilder from '@sanity/image-url';

// ─── REVALIDATION ────────────────────────────────────────────────────────────
// Properties refresh every hour. Tighten or loosen as needed.
export const revalidate = 3600;

// ─── SEO METADATA ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Commercial Properties for Sale | Murivest Group Ltd',
  description:
    'Grade A income-producing commercial properties for sale across East Africa, the United Kingdom and international markets. Brokerage, property and asset management, and investment property services. Mandate-based access.',
  keywords: [
    'commercial property for sale Nairobi',
    'Grade A office for sale Kenya',
    'industrial property investment East Africa',
    'UK commercial property brokerage',
    'commercial real estate services',
    'Murivest Group Ltd',
  ].join(', '),
  alternates: { canonical: 'https://murivest.com/our-portfolio' },
  openGraph: {
    title: 'Commercial Properties for Sale | Murivest Group Ltd',
    description:
      'Grade A income-producing commercial properties. Brokerage, asset management and investment property services across East Africa, the UK and international markets.',
    type: 'website',
    url: 'https://murivest.com/our-portfolio',
    siteName: 'Murivest Group Ltd',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Properties for Sale | Murivest Group Ltd',
    description:
      'Grade A commercial properties. Brokerage, asset management and investment property services. Mandate-based access.',
  },
};

// ─── STRUCTURED DATA ─────────────────────────────────────────────────────────
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Commercial Properties for Sale | Murivest Group Ltd',
  description:
    'Verified Grade A income-producing commercial properties available through Murivest Group Ltd across East Africa, the UK and international markets.',
  url: 'https://murivest.com/our-portfolio',
  publisher: {
    '@type': 'Organization',
    name: 'Murivest Group Ltd',
    logo: { '@type': 'ImageObject', url: 'https://murivest.com/logo.webp' },
  },
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Murivest Group Ltd',
  url: 'https://murivest.com',
  description:
    'International commercial real estate services and investment firm. Brokerage, property and asset management, and investment property services across East Africa, the UK and international markets.',
  areaServed: ['East Africa', 'Kenya', 'United Kingdom', 'International Markets'],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://murivest.com' },
    { '@type': 'ListItem', position: 2, name: 'Our Portfolio', item: 'https://murivest.com/our-portfolio' },
  ],
};

// ─── SANITY TYPES ────────────────────────────────────────────────────────────
interface SanityImage {
  asset?: { _ref: string };
  alt?: string;
}

interface SanityProperty {
  _id: string;
  title?: string;
  slug?: { current?: string };
  location?: string;
  address?: string;
  propertyType?: string;
  sector?: string;
  size?: string;
  area?: string;
  price?: string | number;
  askingPrice?: string | number;
  yield?: string | number;
  netYield?: string | number;
  status?: string;
    investment?: {
    monthlyIncome?: string;
  };
  tenants?: string;
  description?: string;
  highlight?: string;
  referenceCode?: string;
  mainImage?: SanityImage;
}

// ─── GROQ QUERY ──────────────────────────────────────────────────────────────
// Adjust field names below to match your Sanity property schema.
const PROPERTIES_QUERY = `*[_type == "property"] | order(_createdAt desc)[0...3]{
  _id,
  title,
  slug,
  location,
  address,
  propertyType,
  sector,
  size,
  area,
  price,
  askingPrice,
  yield,
  netYield,
  status,
  investment,
  tenants,
  description,
  highlight,
  referenceCode,
  mainImage
}`;

// ─── NORMALISER ──────────────────────────────────────────────────────────────
interface DisplayProperty {
  id: string;
  reference: string;
  title: string;
  slug?: string;
  location: string;
  sector: string;
  size: string;
  price: string;
  yield: string;
  status: string;
    investment?: {
    monthlyIncome?: string;
  };
  tenants: string;
  highlight: string;
  image?: SanityImage;
}

function formatValue(value?: string | number): string {
  if (value === undefined || value === null || value === '') return '—';
  return String(value);
}

function normaliseProperty(p: SanityProperty): DisplayProperty {
  return {
    id: p._id,
    reference: p.referenceCode ?? p._id.slice(-6).toUpperCase(),
    title: p.title ?? 'Commercial Property',
    slug: p.slug?.current,
    location: p.location ?? p.address ?? '—',
    sector: p.propertyType ?? p.sector ?? 'Commercial',
    size: formatValue(p.size ?? p.area),
    price: formatValue(p.price ?? p.askingPrice),
    yield: formatValue(p.yield ?? p.netYield),
    status: p.status ?? 'Available',
    investment: p.investment ? { monthlyIncome: formatValue(p.investment.monthlyIncome) } : undefined,
    tenants: formatValue(p.tenants),
    highlight: p.highlight ?? p.description ?? '',
    image: p.mainImage,
  };
}

// ─── STATUS BADGES ───────────────────────────────────────────────────────────
const statusBadge: Record<string, { bg: string; color: string }> = {
  Available: { bg: 'rgba(139,115,85,0.15)', color: '#8B7355' },
  'For Sale': { bg: 'rgba(139,115,85,0.15)', color: '#8B7355' },
  'New Listing': { bg: 'rgba(245,158,11,0.18)', color: '#B45309' },
  'Under Offer': { bg: 'rgba(44,44,44,0.08)', color: '#2C2C2C' },
  'Under Negotiation': { bg: 'rgba(139,115,85,0.15)', color: '#8B7355' },
  'Off-Market': { bg: 'rgba(44,44,44,0.08)', color: '#2C2C2C' },
  Sold: { bg: 'rgba(90,90,90,0.08)', color: '#5A5A5A' },
};

// ─── STATS (editorial positioning) ───────────────────────────────────────────
const stats = [
  { value: 'Grade A', label: 'Asset Standard', note: 'Income-producing commercial only' },
  { value: '8.5–13%', label: 'USD Yield Range', note: 'Across office, industrial & mixed-use' },
  { value: 'Mandate-Only', label: 'Access Model', note: 'Non-pooled, KYC/AML verified' },
  { value: 'East Africa · UK', label: 'Core Markets', note: 'Plus international mandates' },
];

// ─── SERVICES ────────────────────────────────────────────────────────────────
const services = [
  {
    title: 'Brokerage',
    body:
      'Introduction of purchasers, vendors, lessors and lessees of commercial real property, and negotiation and facilitation of acquisitions, disposals and leasehold transactions in Grade A income-producing commercial assets.',
  },
  {
    title: 'Property & Asset Management',
    body:
      'Operational, administrative and financial management of commercial real estate assets on behalf of owners and investors, including lease administration, reporting and performance oversight.',
  },
  {
    title: 'Investment Property Services',
    body:
      'Counsel, analysis and transaction support in connection with the acquisition, holding, management and disposal of income-producing commercial property, including market intelligence, asset selection and investment structuring support.',
  },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────
export default async function OurPortfolioPage() {
  let rawProperties: SanityProperty[] = [];

  try {
    rawProperties = await client.fetch<SanityProperty[]>(PROPERTIES_QUERY, {}, { next: { revalidate: 3600 } });
  } catch (error) {
    console.error('Failed to fetch properties from Sanity:', error);
  }

  const properties = rawProperties.map(normaliseProperty);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen" style={{ backgroundColor: '#F8F7F4', color: '#2C2C2C' }}>

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: '#1B4332' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 70% at 65% 40%, rgba(217,119,6,0.05), transparent 65%)' }} />
          <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-32">
            <Link href="/" className="inline-flex items-center gap-2 mb-10 text-[11px] font-medium tracking-[0.4em] uppercase transition-opacity hover:opacity-70" style={{ color: '#8B7355' }}>
              <ArrowLeft className="h-3 w-3" /> Home
            </Link>
            <nav aria-label="breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-[11px] font-medium tracking-[0.3em] uppercase" style={{ color: '#475569' }}>
                <li><Link href="/" style={{ color: '#475569' }}>Home</Link></li>
                <li style={{ color: '#334155' }}>/</li>
                <li style={{ color: '#8B7355' }}>Our Portfolio</li>
              </ol>
            </nav>
            <div className="max-w-3xl">
              <p className="text-[10px] font-bold tracking-[0.45em] uppercase mb-5" style={{ color: '#F59E0B' }}>
                Properties for Sale · Current Mandate Window
              </p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] text-white mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Available{' '}
                <em className="not-italic" style={{ color: 'rgba(253,230,138,0.9)' }}>Commercial</em>{' '}
                Properties
              </h1>
              <p className="text-base md:text-lg font-light leading-[1.8] mb-8" style={{ color: '#94A3B8' }}>
                Murivest Group Ltd provides brokerage, property and asset management, and investment property services across East Africa, the United Kingdom and international markets. Every asset presented on this page has been verified for title integrity, occupancy covenant and yield authenticity before reaching qualified investors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-block px-8 py-3 text-[12px] font-medium tracking-[0.2em] uppercase text-white transition-opacity hover:opacity-80" style={{ backgroundColor: '#8B7355' }}>
                  Request Property Access
                </Link>
                <Link href="/contact" className="inline-block px-8 py-3 text-[12px] font-medium tracking-[0.2em] uppercase transition-opacity hover:opacity-80" style={{ border: '1px solid #475569', color: '#94A3B8' }}>
                  View Fee Schedule
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-px" style={{ backgroundColor: '#1E293B' }} />
        </section>

        {/* ── STATS ────────────────────────────────────────────────────────── */}
        <section className="relative py-20 md:py-28 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="absolute top-0 left-0 w-full h-px" style={{ backgroundColor: '#E5E2DC' }} />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E2DC]">
            {stats.map(({ value, label, note }) => (
              <div key={label} className="p-8 md:p-10" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="font-serif text-3xl md:text-4xl font-normal mb-2" style={{ color: '#2C2C2C', fontFamily: 'Georgia, serif' }}>{value}</div>
                <div className="text-sm font-medium mb-1" style={{ color: '#2C2C2C' }}>{label}</div>
                <div className="text-[13px] font-light" style={{ color: '#5A5A5A' }}>{note}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FEATURED PROPERTIES (from Sanity) ────────────────────────────── */}
        <section className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pb-12">
          <div className="absolute top-0 left-0 w-full h-px" style={{ backgroundColor: '#E5E2DC' }} />

          <div className="pt-20">
            <p className="text-[11px] font-medium tracking-[0.4em] uppercase mb-3" style={{ color: '#8B7355' }}>Current Availability</p>
            <h2 className="font-serif text-3xl md:text-4xl font-normal mb-4" style={{ color: '#2C2C2C', fontFamily: 'Georgia, serif' }}>
              Featured{' '}
              <em className="not-italic" style={{ color: '#8B7355' }}>Properties</em>
            </h2>
            <p className="text-[15px] font-light leading-[1.8] max-w-2xl mb-12" style={{ color: '#5A5A5A' }}>
              A selection of Grade A income-producing commercial properties currently available through Murivest. Full particulars are provided to qualified investors under mandate and executed NDA.
            </p>
          </div>

          {properties.length === 0 ? (
            <div className="p-10 mb-4" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E2DC' }}>
              <p className="text-[14px] font-light" style={{ color: '#5A5A5A' }}>
                No properties are currently listed publicly. Qualified investors may{' '}
                <Link href="/contact" style={{ color: '#8B7355', textDecoration: 'underline' }}>contact us</Link>{' '}
                for current off-market availability under mandate.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E2DC]">
              {properties.map((p) => {
                const badge = statusBadge[p.status] ?? { bg: 'rgba(90,90,90,0.08)', color: '#5A5A5A' };
                const detailHref = p.slug ? `/kenya/properties/${p.slug}` : '/contact';
                const detailLabel = p.slug ? 'View Property →' : 'Request Information Memorandum →';

                function urlFor(image: SanityImage) {
                  return imageUrlBuilder(client).image(image);
                }

                return (
                  <article key={p.id} className="flex flex-col" style={{ backgroundColor: '#FFFFFF' }}>
                    {/* Image */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden" style={{ backgroundColor: '#E5E2DC' }}>
                      {p.image ? (
                        <Image
                          src={urlFor(p.image).width(800).height(500).url()}
                          alt={p.image.alt ?? p.title}
                          width={800}
                          height={500}
                          className="object-cover w-full h-full"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center" style={{ color: '#8B7355' }}>
                          <span className="text-[10px] tracking-[0.3em] uppercase">Image Unavailable</span>
                        </div>
                      )}
                    </div>

                    <div className="p-8 md:p-10 flex flex-col flex-1">
                      <div className="flex items-start justify-between gap-4 mb-5">
                        <div>
                          <div className="text-[10px] font-medium tracking-[0.3em] uppercase mb-1" style={{ color: '#8B7355' }}>
                            {p.reference} — {p.sector}
                          </div>
                          <h3 className="font-serif text-xl font-normal" style={{ color: '#2C2C2C', fontFamily: 'Georgia, serif' }}>
                            {p.title}
                          </h3>
                          <div className="text-[13px] font-light mt-1" style={{ color: '#5A5A5A' }}>{p.location}</div>
                        </div>
                        <span
                          className="flex-shrink-0 text-[10px] font-medium tracking-[0.2em] uppercase px-3 py-1.5"
                          style={{ backgroundColor: badge.bg, color: badge.color }}
                        >
                          {p.status}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-5">
                        {[
                          { label: 'Yield', val: p.yield },
                          { label: 'Price / Budget', val: p.price },
                          { label: 'Income', val: p.investment?.monthlyIncome },
                        ].map(({ label, val }) => (
                          <div key={label}>
                            <div className="text-[10px] font-medium tracking-[0.25em] uppercase mb-0.5" style={{ color: '#8B7355' }}>{label}</div>
                            <div className="text-[13px] font-light" style={{ color: '#2C2C2C' }}>{val}</div>
                          </div>
                        ))}
                      </div>

                    </div>
                  </article>
                );
              })}
            </div>
          )}

          <div className="mt-4 p-6" style={{ backgroundColor: '#F8F7F4', border: '1px solid #E5E2DC' }}>
            <p className="text-[12px] font-light" style={{ color: '#8B7355' }}>
              Property particulars are indicative and subject to verification. Pricing and yield figures are based on current market conditions and are not guaranteed. All transactions are subject to due diligence, legal review and formal sale agreement. Murivest Group Ltd provides brokerage and transaction services and does not act as principal in any transaction listed. This information does not constitute an offer or solicitation, and is provided for informational purposes only. It does not constitute investment advice.
            </p>
          </div>
        </section>

        {/* ── HOW WE SOURCE & VERIFY ──────────────────────────────────────── */}
        <section className="relative py-20 md:py-28" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="absolute top-0 left-0 w-full h-px" style={{ backgroundColor: '#E5E2DC' }} />
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
            <div className="max-w-3xl mb-12">
              <p className="text-[11px] font-medium tracking-[0.4em] uppercase mb-3" style={{ color: '#8B7355' }}>Brokerage Standards</p>
              <h2 className="font-serif text-3xl md:text-4xl font-normal mb-6" style={{ color: '#2C2C2C', fontFamily: 'Georgia, serif' }}>
                How Murivest Sources and{' '}
                <em className="not-italic" style={{ color: '#8B7355' }}>Verifies</em>{' '}
                Assets
              </h2>
              <div className="space-y-5 text-[15px] font-light leading-[1.8]" style={{ color: '#5A5A5A' }}>
                <p>
                  Most commercial real estate deal flow in East Africa is unstructured, unverified and presented to multiple buyers simultaneously. The information asymmetry between well-connected local operators and institutional investors approaching the market from outside is significant. Murivest&apos;s brokerage practice was built to resolve that asymmetry.
                </p>
                <p>
                  Every asset in our portfolio passes through a four-stage verification process before it reaches an investor&apos;s desk. Stage one is title verification — a full chain-of-title search through the relevant lands registry, cross-referenced against active audit lists and encumbrance registers. Stage two is occupancy validation — confirmation of tenant existence, lease terms, rent payment history and covenant strength. Stage three is yield authentication — independent verification that the stated yield is achievable given the actual rent roll, operating cost structure and current vacancy. Stage four is legal readiness — confirmation that the vendor holds authority to sell, that there are no encumbrances or charges outstanding, and that the transaction can proceed to completion within a defined timeline.
                </p>
                <p>
                  Assets that do not pass all four stages are not presented. This eliminates the majority of what circulates in the regional market as &ldquo;deal flow.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES ────────────────────────────────────────────────────── */}
        <section className="relative py-20 md:py-28" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="absolute top-0 left-0 w-full h-px" style={{ backgroundColor: '#E5E2DC' }} />
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
            <p className="text-[11px] font-medium tracking-[0.4em] uppercase mb-3" style={{ color: '#8B7355' }}>Commercial Real Estate Services</p>
            <h2 className="font-serif text-3xl md:text-4xl font-normal mb-12" style={{ color: '#2C2C2C', fontFamily: 'Georgia, serif' }}>
              What{' '}
              <em className="not-italic" style={{ color: '#8B7355' }}>Murivest</em>{' '}
              Provides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E2DC]">
              {services.map(({ title, body }) => (
                <div key={title} className="p-8 md:p-10" style={{ backgroundColor: '#F8F7F4' }}>
                  <h3 className="font-serif text-xl font-normal mb-4" style={{ color: '#2C2C2C', fontFamily: 'Georgia, serif' }}>{title}</h3>
                  <p className="text-[14px] font-light leading-[1.8]" style={{ color: '#5A5A5A' }}>{body}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-[13px] font-light" style={{ color: '#5A5A5A' }}>
              All engagements are by mandate only and subject to KYC/AML verification. Murivest does not pool capital, operate collective investment schemes, or offer unlicensed financial products.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-px" style={{ backgroundColor: '#E5E2DC' }} />
        </section>

        {/* ── PROCESS ──────────────────────────────────────────────────────── */}
        <section className="relative py-20 md:py-28" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="absolute top-0 left-0 w-full h-px" style={{ backgroundColor: '#E5E2DC' }} />
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
            <p className="text-[11px] font-medium tracking-[0.4em] uppercase mb-3" style={{ color: '#8B7355' }}>Engagement Model</p>
            <h2 className="font-serif text-3xl md:text-4xl font-normal mb-12" style={{ color: '#2C2C2C', fontFamily: 'Georgia, serif' }}>
              How Murivest{' '}
              <em className="not-italic" style={{ color: '#8B7355' }}>Works</em>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E2DC]">
              {[
                { step: '01', title: 'Mandate Submission', body: 'Investors submit a mandate specifying target sector, submarket, ticket size, yield requirement and hold period. No mandate, no access to deal flow.' },
                { step: '02', title: 'Property Matching', body: 'Murivest matches the mandate against the verified portfolio. Non-matching assets are not presented. Investors see only directly relevant opportunities.' },
                { step: '03', title: 'IM and Due Diligence', body: 'Qualified mandates receive an Information Memorandum. Murivest coordinates the due diligence process, including title verification, financial review and legal coordination.' },
                { step: '04', title: 'Negotiation and Completion', body: 'Murivest facilitates negotiation as brokerage. All transactions proceed under formal documentation reviewed by qualified legal counsel. Murivest&apos;s fee is contingent on successful completion.' },
              ].map(({ step, title, body }) => (
                <div key={step} className="p-8 md:p-10" style={{ backgroundColor: '#F8F7F4' }}>
                  <div className="font-serif text-3xl font-normal mb-4" style={{ color: '#8B7355', fontFamily: 'Georgia, serif' }}>{step}</div>
                  <h3 className="font-serif text-lg font-normal mb-3" style={{ color: '#2C2C2C', fontFamily: 'Georgia, serif' }}>{title}</h3>
                  <p className="text-[14px] font-light leading-[1.8]" style={{ color: '#5A5A5A' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-px" style={{ backgroundColor: '#E5E2DC' }} />
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="relative py-20 md:py-28" style={{ backgroundColor: '#1B4332' }}>
          <div className="absolute top-0 left-0 w-full h-px" style={{ backgroundColor: '#3F3F3F' }} />
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 text-center">
            <p className="text-[11px] font-medium tracking-[0.4em] uppercase mb-4" style={{ color: '#8B7355' }}>Controlled Access</p>
            <h2 className="font-serif text-3xl md:text-4xl font-normal text-white mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Submit a{' '}
              <em className="not-italic" style={{ color: '#8B7355' }}>Transaction Mandate</em>
            </h2>
            <p className="text-base font-light mb-10 max-w-xl mx-auto" style={{ color: '#94A3B8' }}>
              Murivest operates on a mandate basis. Investors who submit a qualified mandate receive access to off-market deal flow not available through any public channel. Engagements are confidential and subject to KYC/AML verification.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-block px-8 py-3 text-[12px] font-medium tracking-[0.2em] uppercase text-white transition-opacity hover:opacity-80" style={{ backgroundColor: '#8B7355' }}>
                Submit Mandate
              </Link>
              <Link href="/contact" className="inline-block px-8 py-3 text-[12px] font-medium tracking-[0.2em] uppercase text-white transition-opacity hover:opacity-80" style={{ backgroundColor: '#8B7355' }}>
                Submit Mandate as Broker
              </Link>
              <Link href="/contact" className="inline-block px-8 py-3 text-[12px] font-medium tracking-[0.2em] uppercase transition-opacity hover:opacity-80" style={{ border: '1px solid #8B7355', color: '#8B7355' }}>
                Fee Schedule
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}