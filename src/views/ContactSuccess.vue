<template>
  <v-container class="py-12 text-center">
    <h1 class="text-h4 font-weight-bold mb-4">Thank you!</h1>
    <p class="text-subtitle-1 mb-6">I'll get back to you soon.</p>
    <v-btn color="primary" @click="goBack">Send another message</v-btn>
  </v-container>
</template>

<script setup>
import { navigate } from "../router";

function goBack() {
  navigate("/contact");
}
</script>
