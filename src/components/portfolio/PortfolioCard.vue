<template>
  <v-card class="portfolio-card" elevation="2" rounded>
    <v-img v-if="image" :src="image" height="200" cover class="mb-2" />
    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle v-if="subtitle">{{ subtitle }}</v-card-subtitle>
    <v-card-text>
      <p>{{ description }}</p>
      <div v-if="links?.length" class="d-flex flex-wrap ga-2 mt-2">
        <v-btn
          v-for="(link, i) in links"
          :key="i"
          :href="link.url"
          target="_blank"
          color="primary"
          variant="outlined"
          size="small"
        >
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
