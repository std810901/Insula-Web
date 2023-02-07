console.log('讀取nuxt config')

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  head: {
    title: 'Insula',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://resource.talfin.in/image/insula-web/favicon.png' },
      { rel: 'stylesheet',  href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css', integrity: 'sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6', crossorigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap' },
      { rel: 'stylesheet', href: 'https://unpkg.com/swiper@7/swiper-bundle.min.css' }
    ],
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js",
        type: "text/javascript",
        integrity: "sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf",
        crossorigin: "anonymous",
        body: true,
      },
      {
        src: "https://unpkg.com/swiper@7/swiper-bundle.min.js",
        type: "text/javascript",
        body: true,
      },
      {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js",
        type: "text/javascript",
        body: true,
      }
    ],
  },

  static: {
    prefix: false
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/styles/index.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '~/plugins/i18n.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    ['@nuxtjs/dotenv', { filename: `.env.${process.env.BASE}` }]
  ],
  styleResources: {
    scss: [
      '@/assets/scss/resources/index.scss'
    ]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    // '@nuxtjs/axios',
    '@nuxtjs/google-gtag',
    '@nuxtjs/gtm',
    '@nuxtjs/i18n'
  ],
  i18n: {
    strategy: 'no_prefix',
    locales: ['zh', 'en'],
    defaultLocale: 'zh',
    detectBrowserLanguage: false,
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: require('./locales/en.json'),
        zh: require('./locales/zh.json')
      }
    }
  },
  gtm: {
    id: 'GTM-M8Q4ZSS'
  },
  // 開始加入GA code
 'google-gtag':{
    id: 'G-Q96BCQMRF6', // 必填，請填寫剛申請到的追蹤碼ID
    config:{
      // 這裡是填寫對gtag的需求選項
      anonymize_ip: true,
      send_page_view: false, // 避免頁面刷新時後的重複追蹤
      linker:{ // 跨域追蹤，追蹤兩個相關但不同網域的頁面
        domains:['insula.ai']
      }
    },
    debug: true, // 允許在開發中進行追蹤
    disableAutoPageTrack: false // 關閉追蹤每個頁面路由
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  env: {
    ...process.env
  },
  router: {}
}
