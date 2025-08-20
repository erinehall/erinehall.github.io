<template>
  <v-card class="portfolio-card app-card hover-shadow card-pad" elevation="0">
    <v-img v-if="image" :src="image" height="160" cover class="mb-2" contain />
    <v-card-title class="mb-1">{{ title }}</v-card-title>
    <v-card-subtitle v-if="subtitle" class="pt-0 mb-2">{{ subtitle }}</v-card-subtitle>
    <v-card-text class="pt-0">
      <p>{{ description }}</p>
      <div v-if="links?.length" class="d-flex flex-wrap ga-2 mt-2">
        <v-btn v-for="(link, i) in links" :key="i" :href="link.url" target="_blank" color="primary" variant="outlined"
          size="small">
          {{ link.label }}
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
interface Link {
  label: string;
  url: string;
}
interface Props {
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  links?: Link[];
}

defineProps<Props>();
</script>
