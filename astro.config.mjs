import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.loganponik.com',
  server: {
    port: 3001,
  },
  integrations: [sitemap()],
});
