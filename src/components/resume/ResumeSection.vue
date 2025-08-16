<template>
  <v-container class="resume-section pa-0">
    <h2 class="mb-8 text-center">{{ title }}</h2>
    <slot />
  </v-container>
</template>

<script setup lang="ts">
const props = defineProps<{ title: string }>();
</script>
