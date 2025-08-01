<template>
  <v-app>
    <Header />
    <v-main>
      <component :is="currentComponent" />
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup>
import { computed } from "vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { getCurrentComponent, currentRoute } from "./router";
const currentComponent = computed(() => getCurrentComponent());
</script>
