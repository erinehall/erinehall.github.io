<template>
  <div>
    <v-card class="portfolio-card app-card hover-shadow card-pad" elevation="0" @click="dialog = true">
      <v-img v-if="image" :src="image" height="160" cover class="mb-2" contain />
      <v-card-title class="mb-1">{{ title }}</v-card-title>
      <v-card-subtitle v-if="subtitle" class="pt-0 mb-2">{{ subtitle }}</v-card-subtitle>
      <v-card-text v-if="links?.length" class="pt-0">
        <div class="d-flex flex-wrap ga-2 mt-2">
          <v-btn
            v-for="(link, i) in links"
            :key="i"
            :href="link.url"
            target="_blank"
            color="primary"
            variant="outlined"
            size="small"
            @click.stop
          >
            {{ link.label }}
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title>{{ title }}</v-card-title>
        <v-card-text>{{ description }}</v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

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

const dialog = ref(false);
</script>

<style scoped>
.v-card-title,
.v-card-subtitle,
.v-card-text {
  white-space: normal;
}
</style>
