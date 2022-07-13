import pkg from './package'

const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/'
        }
      }
    : {}

export default {
  mode: 'universal',
  target: 'static',
  router: {
    base: '/<repository-name>/'
  },

  /*
   ** Headers of the page
   */
  head: {
    title: 'STILKO - Výrobce montážních kotev pro okna a dveře',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Společnost STILKO Monika Fołtyn ve své nabídce má kotvy pro plastová okna, kotvy pro dřevěná okna - zapuštěné kotvy, otočné kotvy a kotvy pro hliníková okna.' },
      { hid: 'og:description', name: 'og:description', content: 'Výrobce montážních kotev pro okna a dveře s třicetiletou zkušeností. Stilko je skupina nadšenců, kteří si cení kvality.' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:title', name: 'og:title', content: 'STILKO - I VŠE Z KOVU' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'STILKO I VŠE Z KOVU' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href:
          'https://fonts.googleapis.com/css?family=Roboto:400,700|Ubuntu:400,700&display=swap',
        rel: 'stylesheet'
      }
    ]
  },

  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-173107191-1'
    }]
  ],

  ...routerBase,

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/assets/main.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/vue-scrollto', mode: 'client' }],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: ['~/assets/_variables.scss']
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
