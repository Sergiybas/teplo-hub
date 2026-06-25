import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://termo-hub.com.ua',
  integrations: [sitemap()],
});
