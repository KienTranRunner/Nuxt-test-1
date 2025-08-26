// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@pinia/nuxt',
    '@nuxt/image',
    'nuxt-bootstrap-icons',
    'nuxt-swiper',
    '@nuxtjs/supabase'
  ],
  supabase: {
    url: process.env.NUXT_PUBLIC_SUPABASE_URL,
    key: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY,
    redirect: false
  },

    
  
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'animate.css/animate.min.css'
  ],
  imports: {
    dirs: ['stores'],
  },
 
  

})