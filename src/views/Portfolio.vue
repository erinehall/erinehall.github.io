<template>
  <v-container class="portfolio-page py-8" max-width="700">
    <h1 class="text-center mb-6">Portfolio</h1>
    <v-row align="stretch">
      <v-col
        v-for="(item, i) in portfolio"
        :key="i"
        cols="12"
        md="6"
        class="d-flex"
      >
        <PortfolioCard class="w-100" v-bind="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import PortfolioCard from "../components/portfolio/PortfolioCard.vue";
import portfolio from "../data/portfolioData";
</script>
