// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@pinia/nuxt',
    '@nuxt/image',
    'nuxt-bootstrap-icons',
    'nuxt-swiper',
    // '@nuxtjs/supabase'
  ],
  // runtimeConfig: {
  //   public: {
  //     SUPABASE_URL: process.env.NUXT_PUBLIC_SUPABASE_URL,
  //     SUPABASE_KEY: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY
  //   }
  // },
  
  
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'animate.css/animate.min.css'
  ],
  imports: {
    dirs: ['stores'],
  },
 
  

})