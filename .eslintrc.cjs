module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "standard",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
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
  },
};
