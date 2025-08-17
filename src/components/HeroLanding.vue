<template>
  <v-container class="hero-wrapper" fluid>
  <v-row class="hero-content align-center ga-8" justify="center">
      <v-col cols="12" md="6" class="text-block fade-in">
        <h1>Erin Hall</h1>
        <p class="subheading">Intermediate Software Systems Engineer</p>
        <div class="d-flex flex-wrap ga-2 my-4 fade-in">
          <v-chip
            v-for="skill in aboutPageSkills.slice(0, 5)"
            :key="skill"
            rounded="lg"
            variant="tonal"
            color="secondary"
          >
            {{ skill }}
          </v-chip>
        </div>
        <div class="d-flex align-center ga-6 mt-8 pl-4">
          <a
            href="https://github.com/erinehall"
            target="_blank"
            aria-label="GitHub"
          >
            <v-icon size="24" color="primary">mdi-github</v-icon>
          </a>
          <a
            href="https://www.linkedin.com/in/erinehall1"
            target="_blank"
            aria-label="LinkedIn"
          >
            <v-icon size="24" color="primary">mdi-linkedin</v-icon>
          </a>
          <a href="mailto:erinehall1@gmail.com" aria-label="Email">
            <v-icon size="24" color="primary">mdi-email-outline</v-icon>
          </a>
        </div>
      </v-col>
      <v-col cols="12" md="4" class="image-block fade-in">
        <v-img
          :src="profilePic"
          class="portrait"
          alt="Erin Hall portrait"
          cover
        />
      </v-col>
    </v-row>
    <div class="scroll-indicator">
      <span class="scroll-arrow" aria-hidden="true"></span>
    </div>
  </v-container>
</template>

<script setup>
import profilePic from "../assets/profile-pic.jpg";
import { aboutPageSkills } from "../data/resumeData";
</script>
