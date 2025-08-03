<template>
  <HeroLanding />
  <div
    ref="secondHeroRef"
    class="hero-hidden"
    :class="{ visible: isSecondHeroVisible }"
  >
    <PortfolioPreview />
  </div>
</template>

<script setup>
import HeroLanding from "../components/HeroLanding.vue";
import { ref, onMounted } from "vue";
import PortfolioPreview from "../components/PortfolioPreview.vue";

const secondHeroRef = ref(null);
const isSecondHeroVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      if (entries[0].isIntersecting) {
        isSecondHeroVisible.value = true;
        observer.unobserve(entries[0].target);
      }
    },
    { threshold: 0.2 }
  );

  if (secondHeroRef.value) {
    observer.observe(secondHeroRef.value);
  }
});
</script>
