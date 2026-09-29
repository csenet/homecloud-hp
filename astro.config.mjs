import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://homecloud.k1h.dev',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
