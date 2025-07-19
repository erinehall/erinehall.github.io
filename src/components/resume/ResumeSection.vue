<template>
  <div class="resume-section">
    <h2>{{ title }}</h2>
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ title: string }>();
</script>
