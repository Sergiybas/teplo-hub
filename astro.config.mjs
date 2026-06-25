import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://termo-hub.web.app',
  integrations: [sitemap()],
});
