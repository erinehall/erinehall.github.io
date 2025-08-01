<template>
  <div class="resume-card mb-4 scroll-fade">
    <ResumeHeader v-if="header" v-bind="header" />
    <h4 v-if="heading" class="d-flex align-center mb-2">
      <template v-if="icon">
        <v-icon :icon="icon" start class="mr-2" />
      </template>
      {{ heading }}
    </h4>
    <ul v-if="bullets?.length">
      <li v-for="(bullet, i) in bullets" :key="i">{{ bullet }}</li>
    </ul>
    <slot />
    <div v-if="skills?.length" class="mt-2">
      <v-chip
        v-for="skill in skills"
        :key="skill"
        rounded="pill"
        size="small"
        variant="tonal"
        color="secondary"
        class="ma-1"
      >
        {{ skill }}
      </v-chip>
    </div>
  </div>
</template>

<script setup lang="ts">
import ResumeHeader from "./ResumeHeader.vue";

interface HeaderData {
  title: string;
  company?: string;
  date: string;
  location?: string;
  icon?: string;
}

interface Props {
  header?: HeaderData;
  heading?: string;
  icon?: string;
  bullets?: string[];
  skills?: string[];
}

defineProps<Props>();
</script>
