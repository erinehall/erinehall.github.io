<template>
  <Transition name="page" :css="!reduced">
    <slot />
  </Transition>
</template>

<script setup>
import { prefersReducedMotion } from '../utils/motion.js';
const reduced = prefersReducedMotion();
</script>
