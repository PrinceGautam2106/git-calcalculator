import { getCollection } from 'astro:content';

export const prerender = true;

const SITE = 'https://www.calaifitness.com';

const STATIC_PAGES = [
  '',
  '/calculators',
  '/blog',
  '/about',
  '/faq',
  '/history',
];

const CALCULATOR_PAGES = [
  '/calculator/bmi',
  '/calculator/tdee',
  '/calculator/bmr',
  '/calculator/body-fat',
  '/calculator/calories',
  '/calculator/macros',
  '/calculator/water',
  '/calculator/ideal-weight',
  '/calculator/heart-rate',
  '/calculator/lean-mass',
  '/calculator/protein',
  '/calculator/one-rep-max',
  '/calculator/sleep',
  '/calculator/sleep-debt',
];

const TOOL_PAGES = [
  '/tools/calorie-deficit-planner',
  '/tools/macro-calculator',
  '/tools/fitness-age-calculator',
];

export async function GET() {
  // Fetch all blog posts dynamically
  const blogPosts = await getCollection('blog');
  const blogPaths = blogPosts.map(post => `/blog/${post.slug}`);

  // Combine all paths
  const allPaths = [
    ...STATIC_PAGES,
    ...CALCULATOR_PAGES,
    ...TOOL_PAGES,
    ...blogPaths,
  ];

  // Current date for lastmod field
  const currentDate = new Date().toISOString().split('T')[0];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPaths.map(path => {
    let priority = '0.7';
    let changefreq = 'weekly';

    if (path === '') {
      priority = '1.0';
      changefreq = 'daily';
    } else if (path.startsWith('/calculator/') || path.startsWith('/tools/')) {
      priority = '0.9';
      changefreq = 'weekly';
    } else if (path.startsWith('/blog/')) {
      priority = '0.7';
      changefreq = 'monthly';
    } else if (path === '/calculators' || path === '/blog') {
      priority = '0.8';
      changefreq = 'weekly';
    }

    return `  <url>
    <loc>${SITE}${path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n')}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}
