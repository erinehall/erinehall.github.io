<template>
  <v-app>
    <Header />
    <v-main>
      <PageTransition>
        <component :is="currentComponent" :key="currentRoute" />
      </PageTransition>
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup>
import { computed } from "vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import PageTransition from "./components/PageTransition.vue";
import { getCurrentComponent, currentRoute } from "./router";
const currentComponent = computed(() => getCurrentComponent());
</script>
