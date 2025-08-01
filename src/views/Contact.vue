<template>
  <v-container class="contact-page py-8" max-width="960">
    <h1 class="text-center mb-4">Let's Connect!</h1>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-form v-model="valid" @submit.prevent="submit">
          <v-text-field v-model="name" label="Name" required></v-text-field>
          <v-text-field
            v-model="email"
            label="Email"
            type="email"
            :rules="emailRules"
            required
          ></v-text-field>
          <v-textarea
            v-model="message"
            label="Message"
            rows="4"
            required
          ></v-textarea>
          <div class="d-flex justify-center mt-4">
            <v-btn type="submit" color="primary" :disabled="!valid"
              >Submit</v-btn
            >
          </div>
        </v-form>
        <p v-if="submitted" class="confirmation-message">
          Thank you! I'll get back to you soon.
        </p>
      </v-col>
    </v-row>
    <div class="d-flex justify-center align-center ga-6 mt-8">
      <a
        href="https://github.com/erinehall"
        target="_blank"
        aria-label="GitHub"
      >
        <v-icon size="32" color="primary">mdi-github</v-icon>
      </a>
      <a
        href="https://www.linkedin.com/in/erinehall1"
        target="_blank"
        aria-label="LinkedIn"
      >
        <v-icon size="32" color="primary">mdi-linkedin</v-icon>
      </a>
      <a href="mailto:erinehall1@gmail.com" aria-label="Email">
        <v-icon size="32" color="primary">mdi-email-outline</v-icon>
      </a>
    </div>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { navigate } from "../router";

const name = ref("");
const email = ref("");
const message = ref("");
const submitted = ref(false);
const valid = ref(false);

const emailRules = [(v) => !v || /.+@.+\..+/.test(v) || "E-mail must be valid"];

async function submit() {
  const formData = new FormData();
  formData.append("name", name.value);
  formData.append("email", email.value);
  formData.append("message", message.value);

  try {
    const response = await fetch("https://formspree.io/f/xanbbkwg", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      name.value = "";
      email.value = "";
      message.value = "";
      submitted.value = false;
      navigate("/contact/success");
    } else {
      alert(
        "There was a problem submitting your form. Please try again later."
      );
    }
  } catch (error) {
    alert("An error occurred. Please try again.");
  }
}
</script>
