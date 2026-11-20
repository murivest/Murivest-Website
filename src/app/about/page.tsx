import type { Metadata } from "next";
import AboutClient from "./Aboutclient";

export const metadata: Metadata = {
  title: "Murivest Group | Commercial real estate services",
  description:
    "Murivest Group Ltd provides commercial real estate brokerage, property and asset management, and investment property services across East Africa, the UK and beyond.",
  alternates: { canonical: "https://murivest.com/about" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Murivest Group | Institutional commercial real estate services",
    description:
      "Murivest Group Ltd — international commercial real estate services and investment firm across East Africa, the UK and global markets. Brokerage, asset management, investment property services.",
    url: "https://murivest.com/about",
    siteName: "Murivest",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Murivest",
    description:
      "Murivest Group Ltd provides commercial real estate brokerage, property and asset management, and investment property services across East Africa, the UK and beyond.",
  },
};

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Murivest Group",
    url: "https://murivest.com/about",
    description:
      "Murivest Group Ltd provides commercial real estate brokerage, property and asset management, and investment property services across East Africa, the UK and beyond.",
    mainEntity: {
      "@type": "Organization",
      name: "Murivest Group Ltd",
      url: "https://murivest.com",
      foundingDate: "2025",
      founders: [
        {
          "@type": "Person",
          name: "Mark Muriithi",
          jobTitle: "Founder & Principal",
        },
      ],
      areaServed: ["Kenya", "United Arab Emirates", "United Kingdom", "Singapore"],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://murivest.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://murivest.com/about",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutClient />
    </>
  );
}