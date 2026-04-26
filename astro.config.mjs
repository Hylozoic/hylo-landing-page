import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import netlify from '@astrojs/netlify';
import keystatic from '@keystatic/astro';

export default defineConfig({
  site: 'https://hylo.com',
  // Hybrid: pages are static-prerendered by default; the /keystatic admin and
  // its API routes opt out via `export const prerender = false` (set by the
  // keystatic integration).
  output: 'static',
  adapter: netlify(),
  integrations: [react(), mdx(), keystatic()],
});
