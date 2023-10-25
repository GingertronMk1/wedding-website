export default {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "standard",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
  ],
  // overrides: [
  //   {
  //     env: {
  //       node: true,
  //     },
  //     files: [".eslintrc.{js,cjs}"],
  //     parserOptions: {
  //       sourceType: "script",
  //     },
  //   },
  // ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  files: ["./**/*.{js,cjs,vue}"],
  plugins: ["vue"],
  rules: {
    'vue/multi-word-component-names': 'off',
  },
};
