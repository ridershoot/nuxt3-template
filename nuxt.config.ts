// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // ts
  typescript: {
    shim: false,
  },
  modules: ["@pinia/nuxt"],
  runtimeConfig: {
    apiSecret: "",
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL,
    },
  },
});
