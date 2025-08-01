<template>
  <v-footer color="white" class="border-t">
    <v-container class="text-center py-6">
      <div class="d-flex justify-center ga-4 mb-4">
        <a
          href="https://github.com/erinehall"
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
        >
          <v-icon size="24" color="primary">mdi-github</v-icon>
        </a>
        <a
          href="https://www.linkedin.com/in/erinehall1"
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
        >
          <v-icon size="24" color="primary">mdi-linkedin</v-icon>
        </a>
        <a href="mailto:erinehall1@gmail.com" aria-label="Email">
          <v-icon size="24" color="primary">mdi-email-outline</v-icon>
        </a>
      </div>
      <div class="text-caption">© 2025 Erin Hall</div>
    </v-container>
  </v-footer>
</template>

<script setup>
import { navigate } from "../router";

function go(path) {
  navigate(path);
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>
