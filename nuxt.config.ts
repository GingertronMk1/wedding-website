// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      mapsApiKey: process.env.GOOGLE_MAPS_API_KEY
    }
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Izzy and Jack's Wedding",
    },
  },
  devtools: { enabled: true },
  devServer: {
    host: "0.0.0.0",
    port: 80,
  },
  css: [
    "~/node_modules/bootstrap/dist/css/bootstrap.min.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
    "~/assets/app.scss",
  ],
  modules: ["@nuxt/content", "@nuxtjs/eslint-module"],
  typescript: {
    typeCheck: true,
  },
});
