// ─── lib/schema/generateBreadcrumbSchema.ts ──────────────────────────────────
import type { Property } from '@/types/property';

const BASE_URL = 'https://murivest.com';

export function generateBreadcrumbSchema(property: Property): Record<string, unknown> {
  const categorySegment = property.propertyType?.toLowerCase() ?? 'commercial';
  const pageUrl =
    property.seo?.canonicalUrl ??
    `${BASE_URL}/kenya/properties/${property.slug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BASE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Properties',
        item: `${BASE_URL}/kenya/properties`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: property.propertyType ?? 'Commercial',
        item: `${BASE_URL}/kenya/properties?type=${categorySegment}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: property.title,
        item: pageUrl,
      },
    ],
  };
}