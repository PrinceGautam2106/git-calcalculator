/**
 * /src/utils/seo.ts
 * SEO helper functions for CalaiFitness.
 * Used across all pages, calculators, and blog posts.
 */

const SITE_NAME = 'CalaiFitness';
const SITE_URL  = 'https://www.calaifitness.com';
const TITLE_SUFFIX = `| ${SITE_NAME}`;

/* ─────────────────────────────────────────────
   Title Generator
   e.g. "BMI Calculator | CalaiFitness"
───────────────────────────────────────────── */
export function generateTitle(pageTitle: string): string {
  if (!pageTitle) return SITE_NAME;
  // Avoid double-appending site name
  if (pageTitle.includes(SITE_NAME)) return pageTitle;
  return `${pageTitle} ${TITLE_SUFFIX}`;
}

/* ─────────────────────────────────────────────
   Description Generator
   Truncates to 155 chars, preserving word boundaries.
───────────────────────────────────────────── */
export function generateDescription(text: string, maxLength = 155): string {
  if (!text) return '';
  const cleaned = text.replace(/\s+/g, ' ').trim();
  if (cleaned.length <= maxLength) return cleaned;
  const truncated = cleaned.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  return lastSpace > 100 ? truncated.slice(0, lastSpace) + '…' : truncated + '…';
}

/* ─────────────────────────────────────────────
   Canonical URL Generator
   Always returns full absolute URL, no trailing slash.
───────────────────────────────────────────── */
export function generateCanonical(path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  const noTrailing = clean.endsWith('/') && clean.length > 1
    ? clean.slice(0, -1)
    : clean;
  return `${SITE_URL}${noTrailing}`;
}

/* ─────────────────────────────────────────────
   OG Image Generator
   Returns the full URL for the OG image.
───────────────────────────────────────────── */
export function generateOGImage(path?: string): string {
  return path
    ? `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`
    : `${SITE_URL}/og-image.jpg`;
}

/* ─────────────────────────────────────────────
   Schema: WebApplication (for calculator pages)
───────────────────────────────────────────── */
export interface CalculatorSchemaInput {
  name: string;
  description: string;
  url: string;
  category?: string;
  keywords?: string[];
}

export function generateCalculatorSchema(input: CalculatorSchemaInput): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: input.name,
    description: input.description,
    url: input.url,
    applicationCategory: input.category ?? 'HealthApplication',
    applicationSubCategory: 'FitnessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    keywords: input.keywords?.join(', '),
  };
}

/* ─────────────────────────────────────────────
   Schema: FAQPage
───────────────────────────────────────────── */
export interface FAQItem {
  q: string;
  a: string;
}

export function generateFAQSchema(faqs: FAQItem[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

/* ─────────────────────────────────────────────
   Schema: Article (for blog posts)
───────────────────────────────────────────── */
export interface ArticleSchemaInput {
  title: string;
  description: string;
  publishDate: Date | string;
  modifiedDate?: Date | string;
  url: string;
  authorName?: string;
  authorUrl?: string;
  imageUrl?: string;
  tags?: string[];
}

export function generateArticleSchema(input: ArticleSchemaInput): object {
  const publishDateISO = new Date(input.publishDate).toISOString();
  const modifiedDateISO = input.modifiedDate
    ? new Date(input.modifiedDate).toISOString()
    : publishDateISO;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.title,
    description: input.description,
    url: input.url,
    datePublished: publishDateISO,
    dateModified: modifiedDateISO,
    author: {
      '@type': 'Person',
      name: input.authorName ?? 'CalaiFitness Team',
      url: input.authorUrl ?? SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.svg`,
      },
    },
    image: input.imageUrl
      ? {
          '@type': 'ImageObject',
          url: input.imageUrl,
          width: 1200,
          height: 630,
        }
      : `${SITE_URL}/og-image.jpg`,
    keywords: input.tags?.join(', '),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': input.url,
    },
  };
}

/* ─────────────────────────────────────────────
   Schema: BreadcrumbList
───────────────────────────────────────────── */
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

/* ─────────────────────────────────────────────
   Schema: WebSite (for homepage)
───────────────────────────────────────────── */
export function generateWebSiteSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: 'Free, science-backed fitness calculators for BMI, TDEE, body fat, macros, calories, and more.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/calculators?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/* ─────────────────────────────────────────────
   Schema: HowTo (for calculator pages with steps)
───────────────────────────────────────────── */
export interface HowToStep {
  name: string;
  text: string;
}

export function generateHowToSchema(
  name: string,
  description: string,
  steps: HowToStep[],
  url: string
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    url,
    step: steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

/* ─────────────────────────────────────────────
   Utility: Combine multiple schemas into @graph
───────────────────────────────────────────── */
export function combineSchemas(...schemas: object[]): object {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas.map(s => {
      // Strip individual @context from each schema in the graph
      const { '@context': _, ...rest } = s as Record<string, unknown>;
      return rest;
    }),
  };
}
