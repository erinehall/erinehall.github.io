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
