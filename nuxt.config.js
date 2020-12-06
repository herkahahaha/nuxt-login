import colors from "vuetify/es5/util/colors";

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",
  head: {
    titleTemplate: "%s - app-login-nuxt",
    title: "app-login-nuxt",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  css: [
    {
      src: "~/node_modules/vuetify/dist/vuetify.css"
    }
  ],
  plugins: [
    {
      src: "~/plugins/vuetify"
    },
    {
      src: "~/plugins/axios"
    },
    {
      src: "~/plugins/api"
    }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify"
  ],
  modules: ["@nuxtjs/axios"],
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
