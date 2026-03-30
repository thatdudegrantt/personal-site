import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  integrations: [
    react(),
    tailwind(),
  ],
  // Comment out the adapter line below during local dev with `astro dev`
  // Uncomment before deploying to Cloudflare Pages
  // adapter: cloudflare(),
  output: 'static', // Use 'server' if you add dynamic routes later
});
