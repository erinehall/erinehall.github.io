<template>
  <v-container class="resume-section pa-0 mb-8">
    <h2 class="mb-2">{{ title }}</h2>
    <slot />
  </v-container>
</template>

<script setup lang="ts">
const props = defineProps<{ title: string }>();
</script>
