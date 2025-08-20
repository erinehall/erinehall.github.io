<template>
  <div v-if="items?.length" :class="containerClass" :style="containerStyle">
    <v-chip v-for="(item, i) in items" :key="i" :class="chipClass" v-bind="mergedChipProps">
      {{ item }}
    </v-chip>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
interface Props {
  items: string[];
  containerClass?: string | string[];
  containerStyle?: string | Record<string, string>;
  chipClass?: string | string[];
  chipProps?: Record<string, any>;
}
const props = withDefaults(defineProps<Props>(), {
  containerClass: "",
  containerStyle: undefined,
  chipClass: "",
  chipProps: () => ({}),
});

const mergedChipProps = computed(() => ({
  variant: "tonal",
  color: "primary",
  size: "small",
  rounded: "pill",
  ...props.chipProps,
}));
</script>
