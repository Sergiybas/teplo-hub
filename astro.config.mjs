import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://teplo-hub.web.app',
  integrations: [sitemap()],
});
