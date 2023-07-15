// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    'nuxt-icon',
  ],
  nitro: {
    preset: 'vercel-edge'
  },
   extends: [
    'nuxt-seo-kit',
  ],
  routeRules: {
    '/blog/**': { ssr: false },
    '/': { prerender: true },
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.SITE_URL || 'https://example.com',
      siteName: 'Aurydo',
      siteDescription: 'Aurydo - Ensuring Quality First Time, Every Time - Because We Believe in Creating Right, Not Twice',
      language: 'en-US',
    },
  },
})
