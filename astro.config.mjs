import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lponik.github.io',
  base: '/personal_portfolio',
  integrations: [
    react({
      include: ['**/components/react/**'],
    }),
    preact({
      include: ['**/components/preact/**'],
    }),
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
