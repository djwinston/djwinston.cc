import { defineConfig } from 'astro/config'
import robotsTxt from 'astro-robots-txt'
import AstroPWA from '@vite-pwa/astro'

// https://astro.build/config
export default defineConfig({
  site: 'https://djwinston.cc',
  integrations: [
    robotsTxt({
      sitemap: false,
    }),
    AstroPWA(),
  ],
})
