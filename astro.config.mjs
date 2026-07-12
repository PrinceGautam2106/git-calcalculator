import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

const SITE = 'https://www.calaifitness.com';

// All canonical calculator slugs (new URL architecture)
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
];

// Static pages
const STATIC_PAGES = [
  '/',
  '/calculators',
  '/blog',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
  '/faq',
];

export default defineConfig({
  site: SITE,
  trailingSlash: 'never',

  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        ...STATIC_PAGES.map(p => `${SITE}${p}`),
        ...CALCULATOR_PAGES.map(p => `${SITE}${p}`),
      ],
      serialize(item) {
        // Home page gets highest priority
        if (item.url === `${SITE}/`) return { ...item, priority: 1.0 };
        // Calculator pages get high priority
        if (item.url.includes('/calculator/')) return { ...item, priority: 0.9 };
        // Blog gets medium-high
        if (item.url.includes('/blog')) return { ...item, priority: 0.8 };
        return item;
      },
    }),
  ],

  // Tailwind v4 via Vite plugin
  vite: {
    plugins: [tailwindcss()],
  },

  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true },
    isr: {
      expiration: 60 * 60 * 24, // 24h stale-while-revalidate
    },
  }),

  image: {
    domains: ['www.calaifitness.com', 'calaifitness.com'],
    remotePatterns: [{ protocol: 'https' }],
  },

  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },

  build: {
    inlineStylesheets: 'auto',
  },

  server: {
    port: 4321,
    host: true,
  },
});
