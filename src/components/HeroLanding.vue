<template>
  <section class="hero-wrapper">
    <div class="hero-content">
      <div class="text-block">
        <h1>Erin Hall</h1>
        <p class="subheading">Intermediate Software Systems Engineer</p>
        <div class="skills">
          <v-chip class="skill-chip" rounded="full">
            Web Development
          </v-chip>
          <v-chip class="skill-chip" rounded="full">
            UI/UX Design
          </v-chip>
          <v-chip class="skill-chip" rounded="full">
            Usability Engineering
          </v-chip>
          <v-chip class="skill-chip" rounded="full">
            Human-Computer Interaction
          </v-chip>
          <v-chip class="skill-chip" rounded="full">
            High-Performance Computing
          </v-chip>
        </div>
        <div class="icon-links">
          <a
            href="https://github.com/erinehall"
            target="_blank"
            aria-label="GitHub"
          >
            <v-icon size="28">mdi-github</v-icon>
          </a>
          <a
            href="https://www.linkedin.com/in/erinehall"
            target="_blank"
            aria-label="LinkedIn"
          >
            <v-icon size="28">mdi-linkedin</v-icon>
          </a>
          <a href="mailto:erin@example.com" aria-label="Email">
            <v-icon size="28">mdi-email-outline</v-icon>
          </a>
        </div>
      </div>
      <div class="image-block">
        <v-img
          src="/profile-pic.jpg"
          class="portrait"
          alt="Erin Hall portrait"
          cover
        />
      </div>
    </div>
  </section>
</template>
