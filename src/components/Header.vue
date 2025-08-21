<template>
  <v-app-bar app color="white" elevation="0" class="sticky-bar">
    <v-toolbar-title
      style="flex: none; overflow: visible; max-width: none; padding-right: 8px"
    >
      <img
        :src="signature"
        alt="Erin Hall signature"
        style="height: 48px; object-fit: contain"
      />
    </v-toolbar-title>
    <v-spacer />
    <v-app-bar-nav-icon
      class="d-md-none"
      aria-label="Toggle navigation menu"
      @click="drawer = !drawer"
    />
    <div class="nav-links d-none d-md-flex">
      <v-btn text rounded="lg" @click="go('/')">About</v-btn>
      <v-btn text rounded="lg" @click="go('/resume')">Resume</v-btn>
      <v-btn text rounded="lg" @click="go('/portfolio')">Portfolio</v-btn>
      <v-btn text rounded="lg" @click="go('/contact')">Contact</v-btn>
    </div>
  </v-app-bar>
  <v-navigation-drawer
    v-model="drawer"
    temporary
    location="right"
    class="d-md-none"
    aria-label="Mobile navigation"
  >
    <v-list>
      <v-list-item @click="nav('/')" title="About" />
      <v-list-item @click="nav('/resume')" title="Resume" />
      <v-list-item @click="nav('/portfolio')" title="Portfolio" />
      <v-list-item @click="nav('/contact')" title="Contact" />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { navigate } from "../router";
import signature from "../assets/signature.png";
import { ref } from "vue";

const drawer = ref(false);

function go(path) {
  navigate(path);
}

function nav(path) {
  drawer.value = false;
  go(path);
}
</script>
