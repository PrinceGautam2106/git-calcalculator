import { defineCollection, z } from 'astro:content';

/* ─────────────────────────────────────────────
   Calculators Collection
   Markdown/MDX files in /src/content/calculators/
   Each file = one calculator's rich article content.
───────────────────────────────────────────── */
const calculators = defineCollection({
  type: 'content',
  schema: z.object({
    /** Page <title> (without site suffix) */
    title: z.string(),
    /** Meta description — will be truncated to 155 chars by SEO util */
    description: z.string(),
    /** SEO keywords for the page */
    keywords: z.array(z.string()).default([]),
    /** Primary formula used (for schema markup) */
    formula: z.string().optional(),
    /** Default output unit, e.g. "BMI", "kcal/day", "%" */
    unit: z.string().optional(),
    /** ISO date string for schema dateModified */
    lastModified: z.coerce.date().default(() => new Date()),
    /** Canonical URL path, e.g. /calculator/bmi */
    canonicalPath: z.string(),
    /** Registry slug used by calculatorRegistry, e.g. "bmi", "bodyfat" */
    registrySlug: z.string(),
    /** Display icon (emoji or path to SVG) */
    icon: z.string().optional(),
    /** Whether to show in the main calculators index */
    featured: z.boolean().default(true),
    /** Display order on /calculators page */
    order: z.number().default(99),
    /** Related calculator slugs (canonical paths) */
    related: z.array(z.string()).default([]),
    /** FAQ items for FAQ schema injection */
    faqs: z.array(z.object({
      q: z.string(),
      a: z.string(),
    })).optional(),
  }),
});

/* ─────────────────────────────────────────────
   Blog Collection
   Markdown/MDX files in /src/content/blog/
───────────────────────────────────────────── */
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    /** Article headline */
    title: z.string(),
    /** Meta description */
    description: z.string(),
    /** ISO publish date */
    publishDate: z.coerce.date(),
    /** Last modified date (defaults to publishDate if absent) */
    updatedDate: z.coerce.date().optional(),
    /** Author display name */
    author: z.string().default('CalaiFitness Team'),
    /** Author URL or profile path */
    authorUrl: z.string().optional(),
    /** Taxonomy tags */
    tags: z.array(z.string()).default([]),
    /** Primary category for grouping */
    category: z.enum([
      'nutrition',
      'training',
      'fat-loss',
      'muscle-building',
      'recovery',
      'mindset',
      'general',
    ]).default('general'),
    /** Whether to feature on homepage / blog index */
    featured: z.boolean().default(false),
    /** Cover image path (relative to /public) */
    image: z.string().optional(),
    /** Image alt text */
    imageAlt: z.string().optional(),
    /** Estimated read time in minutes (auto-calculated if absent) */
    readTime: z.number().optional(),
    /** Hero display emoji */
    heroEmoji: z.string().default('📝'),
    /** Whether to noindex this post */
    noindex: z.boolean().default(false),
    /** Related calculator canonical paths */
    relatedCalculators: z.array(z.string()).default([]),
  }),
});

export const collections = { calculators, blog };
