import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://fitnesscalculator.com',
  integrations: [tailwind()],
});
