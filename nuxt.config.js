export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Galerie Atiss Dakar - Viewing Room',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Dakar, Senegal - GALERIE ATISS DAKAR is pleased to announce its participation in the upcoming 2023 edition of the 1-54 Contemporary African Art Fair, set to take place in New York. Following its particpation at the 1-54 fair in London in 2021, GALERIE ATISS DAKAR present a curated selection of artworks by African artists.' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: "og:title", content: "Galerie Atiss Dakar - Viewing Room" },
      { property: "og:description", content: "Dakar, Senegal - GALERIE ATISS DAKAR is pleased to announce its participation in the upcoming 2023 edition of the 1-54 Contemporary African Art Fair, set to take place in New York. Following its particpation at the 1-54 fair in London in 2021, GALERIE ATISS DAKAR present a curated selection of artworks by African artists." },
      { property: "og:image", content: "https://galerieatissdakar.com/og-image.jpg" },
      { property: "og:url", content: "https://viewinggalerieatissdakar.com" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Galerie Atiss Dakar - Viewing Room" },
      { property: "og:locale", content: "en_US" },


    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],
      script: [{
        hid: "jquery",
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        type: "text/javascript",
        defer: true,
      }
   
    ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],
    server: {
        port: 3000 // default: 3000
      }, 

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
/*     extend(config) {
      for (const rule of config.module.rules) {
        if (rule.use) {
          for (const use of rule.use) {
            if (use.loader === "sass-loader") {
              use.options = use.options || {};
              use.options.includePaths = ["node_modules/foundation-sites/scss"];
            }
          }
        }
      }
    }, */
  },
}
