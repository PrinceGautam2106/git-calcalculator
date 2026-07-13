import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

const SITE = 'https://www.calaifitness.com';

export default defineConfig({
  site: SITE,
  trailingSlash: 'never',

  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        // Home page gets daily updates, highest priority
        if (item.url === `${SITE}` || item.url === `${SITE}/`) {
          return {
            ...item,
            changefreq: 'daily',
            priority: 1.0,
          };
        }
        // Calculator pages get weekly updates, high priority
        if (item.url.includes('/calculator/')) {
          return {
            ...item,
            changefreq: 'weekly',
            priority: 0.9,
          };
        }
        // Blog posts get monthly updates, medium priority
        if (item.url.includes('/blog/') && item.url !== `${SITE}/blog`) {
          return {
            ...item,
            changefreq: 'monthly',
            priority: 0.7,
          };
        }
        // General index pages get weekly updates, medium-high priority
        if (item.url === `${SITE}/calculators` || item.url === `${SITE}/blog`) {
          return {
            ...item,
            changefreq: 'weekly',
            priority: 0.8,
          };
        }
        return item;
      },
    }),
  ],

  // Prefetching settings: intent-based (hover/tap)
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },

  // Tailwind v4 via Vite plugin
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
    },
  },

  output: 'server',
  adapter: cloudflare({
    mode: 'directory',
  }),

  // Image Optimization settings
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
