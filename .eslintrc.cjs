module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "standard",
    "plugin:vue/vue3-recommended",
    "plugin:nuxt/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint"],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "vue/multi-word-component-names": "off",
  },
  globals: {
    defineNuxtPlugin: "readonly",
    defineNuxtConfig: "readonly",
    defineNuxtRouteMiddleware: "readonly",
    abortNavigation: "readonly",
    queryContent: "readonly",
    createError: "readonly",
    useRuntimeConfig: "readonly",
    google: "readonly",
    useRoute: "readonly"
  },
};
