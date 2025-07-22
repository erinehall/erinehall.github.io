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
    <div class="nav-links">
      <v-btn text rounded="lg" @click="go('/')">About</v-btn>
      <v-btn text rounded="lg" @click="go('/resume')">Resume</v-btn>
      <v-btn text rounded="lg" @click="go('/portfolio')">Portfolio</v-btn>
      <v-btn text rounded="lg" @click="go('/contact')">Contact</v-btn>
    </div>
  </v-app-bar>
</template>

<script setup>
import { navigate } from "../router";
import signature from "../assets/signature.png";

function go(path) {
  navigate(path);
}
</script>
