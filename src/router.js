import { ref } from "vue";
import About from "./views/About.vue";
import Resume from "./views/Resume.vue";
import Portfolio from "./views/Portfolio.vue";
import Contact from "./views/Contact.vue";
import ContactSuccess from "./views/ContactSuccess.vue";

const routes = {
  "/": About,
  "/resume": Resume,
  "/portfolio": Portfolio,
  "/contact": Contact,
  "/contact/success": ContactSuccess,
};

export const currentRoute = ref(window.location.pathname);

export function navigate(path) {
  if (currentRoute.value === path) return;
  history.pushState({}, "", path);
  currentRoute.value = path;
}

window.addEventListener("popstate", () => {
  currentRoute.value = window.location.pathname;
});

export function getCurrentComponent() {
  return routes[currentRoute.value] || About;
}
