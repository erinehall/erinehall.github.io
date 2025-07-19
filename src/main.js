import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "@mdi/font/css/materialdesignicons.css";
import "./styles/main.scss";

createApp(App).use(vuetify).mount("#app");
