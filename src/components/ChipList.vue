<template>
  <div v-if="items?.length" :class="containerClass" :style="containerStyle">
    <v-chip v-for="(item, i) in items" :key="i" :class="chipClass" v-bind="chipProps">
      {{ item }}
    </v-chip>
  </div>
</template>

<script setup lang="ts">
interface Props {
  items: string[];
  containerClass?: string | string[];
  containerStyle?: string | Record<string, string>;
  chipClass?: string | string[];
  chipProps?: Record<string, any>;
}

withDefaults(defineProps<Props>(), {
  containerClass: "",
  containerStyle: undefined,
  chipClass: "",
  chipProps: () => ({
    variant: "outlined",
    color: "primary",
    size: "small",
    rounded: "lg",
  }),
});
</script>
