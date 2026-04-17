import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";

// Human-Centered AI Ecosystem - Spirit Domain Configuration
export default defineConfig({
  output: 'static', // Static-first for the 2028 Acquisition target
  adapter: cloudflare({
    mode: 'directory', // Optimized for Wrangler Pages deployment
  }),
  site: 'https://doctorbambu.com',
});
