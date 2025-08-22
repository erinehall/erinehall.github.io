<template>
  <v-container class="portfolio-preview py-8 mb-4" max-width="900">
    <h2 class="text-center mb-6">Recent Work</h2>
    <v-row class="justify-center">
      <v-col
        v-for="(item, i) in items"
        :key="i"
        cols="12"
        md="4"
        class="d-flex justify-center"
      >
        <PortfolioCard class="compact-card" v-bind="item" />
      </v-col>
    </v-row>
    <div class="d-flex justify-center mt-6">
      <v-btn color="primary" @click="goToPortfolio">See More</v-btn>
    </div>
  </v-container>
</template>

<script setup>
import PortfolioCard from "./portfolio/PortfolioCard.vue";
import portfolio from "../data/portfolioData";
import { navigate } from "../router";

const items = portfolio.slice(0, 3);

function goToPortfolio() {
  navigate("/portfolio");
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<style scoped lang="scss">
.compact-card {
  max-width: 300px;
}

.compact-card .v-img {
  height: 150px;
}
</style>
