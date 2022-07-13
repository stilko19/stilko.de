import pkg from './package'

const routerBase = {
        router: {
          base: '/'
        }
      }

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
    title: 'STILKO - Hersteller von Befestigungsdübeln für Fenster und Türen',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'STILKO Monika Fołtyn bietet Dübel für Kunststofffenster, Dübel für Holzfenster - Einbaudübel, Drehdübel und Dübel für Aluminiumfenster an.' },
      { hid: 'og:description', name: 'og:description', content: 'Hersteller von Befestigungsdübeln für Fenster und Türen mit 30 Jahren Erfahrung. Stilko ist eine Gruppe von Enthusiasten, die Wert auf Qualität legen.' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:title', name: 'og:title', content: 'STILKO - UND ALLES AUS METALL' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'STILKO UND ALLES AUS METALL' }
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
