// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    host: "0.0.0.0",
    port: 80
  },
  css: [
    "~/node_modules/bootstrap/dist/css/bootstrap.min.css",
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  plugins: [
    { src: "~/plugins/bootstrap.js", mode: 'client' }
  ],
})
