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
    defaultTheme: "customTheme",
    themes: {
      customTheme: {
        dark: false,
        colors: {
          primary: "#1B4332",
          secondary: "#C97B63",
          background: "#FAF3E0",
          surface: "#FFFFFF",
          error: "#B00020",
          onPrimary: "#FFFFFF",
          onSecondary: "#FFFFFF",
          onBackground: "#1F1F1F",
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
