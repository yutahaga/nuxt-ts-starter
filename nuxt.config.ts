import { Http2ServerResponse } from 'http2'
import { Context } from '@nuxt/vue-app'
/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const tailwindConfig = require('./tailwind.js')

class TailwindExtractor {
  public static extract(content: string): string[] {
    return content.match(/[A-z0-9-:/]+/g) || []
  }
}

export default {
  srcDir: 'src/',
  mode: 'universal',
  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost'
  },

  /*
   * Headers of the page
   */
  head: {
    titleTemplate: '%s | NuxtApp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      {
        property: 'og:image',
        content:
          'https://user-images.githubusercontent.com/904724/26879447-689b56a8-4b91-11e7-968f-5eea1d6c71b4.png'
      },
      {
        property: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        property: 'twitter:site',
        content: '@nuxt_js'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  manifest: {
    name: 'Nuxt Typescript',
    short_name: 'Nuxt TS',
    description: 'Application built with Nuxt.js & Typescript',
    theme_color: '#188269'
  },

  /*
   * Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   * Global CSS
   */
  css: ['~/assets/css/tailwind'],

  /*
   * Plugins to load before mounting the App
   */
  plugins: [],

  /*
   * Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', 'nuxt-purgecss'],

  render: {
    http2: {
      push: true
    },
    static: {
      maxAge: '1y',
      setHeaders(res: Http2ServerResponse, path: string) {
        if (path.includes('sw.js')) {
          res.setHeader('Cache-Control', `public, max-age=900`)
        }
      }
    }
  },

  /*
   * Build configuration
   */
  build: {
    extractCSS: process.env.NODE_ENV === 'production',
    postcss: {
      order: [
        'postcss-nested',
        'postcss-preset-env',
        'postcss-import',
        'postcss-url',
        'tailwindcss',
        'postcss-calc',
        'postcss-object-fit-images',
        'css-mqpacker',
        'cssnano'
      ],
      plugins: {
        'postcss-nested': {},
        tailwindcss: tailwindConfig,
        'postcss-flexbugs-fixes': {},
        'postcss-preset-env': {
          // postcss-nesting does'nt work 😭
          features: { 'nesting-rules': false },
          autoprefixer: { grid: true }
        },
        'postcss-calc': { mediaQueries: true },
        'postcss-object-fit-images': {},
        'css-mqpacker': {
          sort(a: string, b: string) {
            return a.localeCompare(b)
          }
        }
      }
    },
    /*
     * You can extend webpack config here
     */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    extend(config: any, ctx: Context) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  purgeCSS: {
    paths: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.ts'
    ],
    extractors: [
      {
        extractor: TailwindExtractor,
        extensions: ['vue', 'ts']
      }
    ],
    whitelistPatterns: [
      new RegExp(`\S+(?!:(${Object.keys(tailwindConfig.screens).join('|')}))$`)
    ]
  }
}
