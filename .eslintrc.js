module.exports = {
  root: true,
  env: {
    browser: true,
    node: false,
    jest: false
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'import-order-alphabetical',
    'node',
    'jest',
    'vue',
    'prettier'
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:node/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:vue/recommended',
    'prettier',
    'prettier/vue',
    'prettier/@typescript-eslint'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  // add your custom rules here
  rules: {
    // Enforce import order
    'import/order': 2,

    // Imports should come first
    'import/first': 2,

    // Other import rules
    'import/no-mutable-exports': 2,

    // Allow unresolved imports
    'import/no-unresolved': 0,

    // Imports should sort by alphabetical
    'import-order-alphabetical/order': [
      'error',
      { 'newlines-between': 'never' }
    ],

    // Allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,

    // https://typescript-eslint.io/parser
    'no-undef': 'off',
    'no-unused-vars': 'off',

    // https://github.com/typescript-eslint/typescript-eslint/issues/46
    '@typescript-eslint/no-unused-vars': 'error',

    // Using camel case names
    '@typescript-eslint/camelcase': ['error', { properties: 'never' }],

    // Allow ES syntax for configure scripts
    'node/no-unsupported-features/es-syntax': 'off',

    // temporary fix for https://github.com/vuejs/vue-cli/issues/1922
    // very strange as somehow this rule gets different behaviors depending
    // on the presence of @typescript-eslint/parser...
    strict: 'off',
    'prettier/prettier': 'warn'
  },
  settings: {
    'import/resolver': {
      node: { extensions: ['.ts', '.js', '.mjs'] }
    }
  }
}
