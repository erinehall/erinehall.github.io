// src/plugins/vuetify.js
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { md3 } from "vuetify/blueprints";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { aliases, mdi } from "vuetify/iconsets/mdi";

export default createVuetify({
  blueprint: md3,
  components,
  directives,
  theme: {
    defaultTheme: "coffeeLight",
    themes: {
      coffeeLight: {
        dark: false,
        colors: {
          background: "#FFFFFF",
          surface: "#FFFFFF",
          primary: "#6F4E37",
          secondary: "#A67C52",
          info: "#8B5A3C",
          warning: "#D4A574",
          error: "#d4183d",
          success: "#4CAF50",
          onPrimary: "#FFFFFF",
          onSecondary: "#FFFFFF",
          onBackground: "#1F1F1F",
          "primary-lighten-4": "#F3EDE8",
          "secondary-lighten-4": "#F7EFE6",
        },
      },
      coffeeDark: {
        dark: true,
        colors: {
          background: "#1F1F1F",
          surface: "#1F1F1F",
          primary: "#A67C52",
          secondary: "#6F4E37",
          info: "#8B5A3C",
          warning: "#D4A574",
          error: "#dc2626",
          success: "#4CAF50",
          onPrimary: "#FFFFFF",
          onSecondary: "#FFFFFF",
          onBackground: "#FFFFFF",
        },
      },
    },
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});
