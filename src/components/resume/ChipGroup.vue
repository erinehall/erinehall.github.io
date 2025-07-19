<template>
  <div class="resume-skill-category">
    <strong>{{ category }}:</strong>
    <v-chip
      v-for="skill in skills"
      :key="skill"
      pill
      small
      outlined
      color="brown-darken-2"
      class="ma-1"
    >
      {{ skill }}
    </v-chip>
  </div>
</template>

<script setup lang="ts">
interface Props {
  category: string;
  skills: string[];
}
const props = defineProps<Props>();
</script>
