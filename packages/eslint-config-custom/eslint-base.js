// @ts-check
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'turbo'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    'no-console': 'error'
  }
})
