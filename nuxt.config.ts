// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Web3学生トーク',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Web3やメタバースについて語り合うコミュニティ' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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

  // ルートパスからのリクエストも処理できるようにする
  // これによりVercel Analyticsスクリプトのリクエストがエラーにならない
  routeRules: {
    '/_vercel/**': { proxy: '/_vercel/**' }
  },

  // 本番環境のみでVercelAnalyticsを有効化
  experimental: {
    payloadExtraction: false
  },

  // 環境変数でGoogleAnalyticsの測定IDを設定できるようにする
  runtimeConfig: {
    public: {
      googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID || '',
      microcmsServiceDomain: process.env.MICROCMS_SERVICE_DOMAIN || '',
      microcmsApiKey: process.env.MICROCMS_API_KEY || '',
    }
  },
  
  compatibilityDate: '2025-02-25'
})