// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@pinia/nuxt',
    '@nuxt/image',
    'nuxt-bootstrap-icons',
    'nuxt-swiper',


  ],

  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'animate.css/animate.min.css'
  ],
  imports: {
    dirs: ['stores'],
  },

  runtimeConfig: {
    public: {
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
      supabaseKey: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY
    }
  }
 
  

})