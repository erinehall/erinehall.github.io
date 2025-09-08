<template>
  <v-container class="hero-wrapper px-4" fluid>
    <div class="bubble-layer" aria-hidden="true">
      <span v-for="n in bubbleCount" :key="n" />
    </div>
    <v-row class="hero-content h-100">
      <v-col
        cols="12"
        md="6"
        class="hero-column d-flex align-center justify-center fade-in"
      >
        <v-img
          :src="profilePic"
          class="portrait"
          alt="Erin Hall portrait"
          cover
        />
      </v-col>
      <v-col
        cols="12"
        md="6"
        class="hero-column d-flex align-center justify-center fade-in"
      >
        <div class="text-block">
          <h1>Erin Hall</h1>
          <p class="subheading">Intermediate Software Systems Engineer</p>

          <div class="d-flex flex-wrap ga-2 my-4 fade-in hero-skills">
            <v-chip
              v-for="skill in aboutPageSkills.slice(0, 5)"
              :key="skill"
              rounded="pill"
              variant="outlined"
              class="chip-black"
            >
              {{ skill }}
            </v-chip>
          </div>

          <div class="d-flex align-center ga-6 mt-8 hero-links links-black">
            <a
              href="https://github.com/erinehall"
              target="_blank"
              aria-label="GitHub"
            >
              <v-icon size="24">mdi-github</v-icon>
            </a>
            <a
              href="https://www.linkedin.com/in/erinehall1"
              target="_blank"
              aria-label="LinkedIn"
            >
              <v-icon size="24">mdi-linkedin</v-icon>
            </a>
            <a href="mailto:erinehall1@gmail.com" aria-label="Email">
              <v-icon size="24">mdi-email-outline</v-icon>
            </a>
          </div>
        </div>
      </v-col>
    </v-row>

    <div v-if="showArrow" class="scroll-indicator">
      <v-icon class="scroll-arrow" aria-hidden="true">mdi-arrow-down</v-icon>
    </div>
  </v-container>
</template>

<script setup>
import profilePic from "../assets/profile-pic.jpg";
import { aboutPageSkills } from "../data/resumeData";
import { ref, onMounted, onBeforeUnmount } from "vue";

const showArrow = ref(true);
const bubbleCount = 12;

const handleScroll = () => {
  if (window.scrollY > 0) {
    showArrow.value = false;
    window.removeEventListener("scroll", handleScroll);
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
