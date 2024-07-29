// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['bootstrap/dist/css/bootstrap.css'],

  modules: ["@nuxtjs/supabase"],
  supabase:{ redirect: false},
});
