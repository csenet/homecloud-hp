import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://homecloud-lab.com',
  output: 'static',
  integrations: [sitemap()],
});
