// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Web3学生トーク',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Web3やメタバースについて語り合うコミュニティ' },
        { name: 'google-site-verification', content: 'chLtV5snUNUbS8oaftJI38hWeIP0OuYBm_k-Dhm_RcA' },
        
        // デフォルトのOGP設定
        { property: 'og:title', content: 'Web3学生トーク' },
        { property: 'og:description', content: 'Web3やメタバースについて語り合うコミュニティ' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/images/ogp/default.png' },
        { property: 'og:site_name', content: 'Web3学生トーク' },
        
        // Twitter Card設定
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@Web3studenttalk' },
      ],
      link: [
        { rel: 'icon', type: 'image/jpeg', href: '/favicon.jpg' }
      ],
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt'
  ],

  css: [
    '~/assets/css/main.css'
  ],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  routeRules: {
    '/_vercel/**': { proxy: '/_vercel/**' }
  },

  experimental: {
    payloadExtraction: false
  },

  runtimeConfig: {
    public: {
      googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID || '',
      microcmsServiceDomain: process.env.MICROCMS_SERVICE_DOMAIN || '',
      microcmsApiKey: process.env.MICROCMS_API_KEY || '',
      siteUrl: process.env.SITE_URL || 'https://www.web3student-talk.com',
    }
  },
  
  compatibilityDate: '2025-02-25'
})