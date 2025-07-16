<template>
  <v-app-bar app color="white" elevation="0">
    <v-toolbar-title
      style="flex: none; overflow: visible; max-width: none; padding-right: 8px"
    >
      <img
        src="/signature.png"
        alt="Erin Hall signature"
        style="height: 48px; object-fit: contain"
      />
    </v-toolbar-title>
    <v-spacer />
    <div class="nav-links">
      <v-btn text to="#about">About</v-btn>
      <v-btn text to="#resume">Resume</v-btn>
      <v-btn text to="#portfolio">Portfolio</v-btn>
      <v-btn text to="#contact">Contact</v-btn>
    </div>
  </v-app-bar>
</template>

<style scoped>
.nav-links .v-btn {
  text-transform: none;
  font-family: "Inter", Helvetica, Arial, sans-serif;
  color: #1f1f1f;
  transition: color 0.2s ease, opacity 0.2s ease;
}
.nav-links .v-btn:hover {
  color: #3b82f6;
  opacity: 0.8;
}
</style>
