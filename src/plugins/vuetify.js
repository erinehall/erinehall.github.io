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
    defaultTheme: "monoLight",
    themes: {
      monoLight: {
        dark: false,
        colors: {
          background: "#FFFFFF",
          surface: "#FFFFFF",
          primary: "#000000",
          secondary: "#666666",
          info: "#999999",
          warning: "#CCCCCC",
          error: "#d4183d",
          success: "#4CAF50",
          onPrimary: "#FFFFFF",
          onSecondary: "#FFFFFF",
          onBackground: "#1F1F1F",
          "primary-lighten-4": "#F5F5F5",
          "secondary-lighten-4": "#E0E0E0",
        },
      },
      monoDark: {
        dark: true,
        colors: {
          background: "#000000",
          surface: "#000000",
          primary: "#FFFFFF",
          secondary: "#CCCCCC",
          info: "#999999",
          warning: "#666666",
          error: "#dc2626",
          success: "#4CAF50",
          onPrimary: "#000000",
          onSecondary: "#000000",
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
