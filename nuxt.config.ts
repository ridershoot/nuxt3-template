// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // ts
  typescript: {
    shim: false
  },
  modules: ["@pinia/nuxt", "@nuxt/ui"]
});
