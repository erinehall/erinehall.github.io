<template>
  <section class="hero-wrapper">
    <div class="hero-content">
      <div class="text-block">
        <h1>Erin Hall</h1>
        <p class="subheading">Intermediate Software Systems Engineer</p>
        <div class="skills">
          <v-chip
            class="skill-chip"
            color="#4a3f36"
            rounded="full"
          >
            Web Development
          </v-chip>
          <v-chip
            class="skill-chip"
            color="#4a3f36"
            rounded="full"
          >
            UI/UX Design
          </v-chip>
          <v-chip
            class="skill-chip"
            color="#4a3f36"
            rounded="full"
          >
            Usability Engineering
          </v-chip>
          <v-chip
            class="skill-chip"
            color="#4a3f36"
            rounded="full"
          >
            Human-Computer Interaction
          </v-chip>
          <v-chip
            class="skill-chip"
            color="#4a3f36"
            rounded="full"
          >
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

<style scoped>
.hero-wrapper {
  display: flex;
  justify-content: center;
  background-color: #dcd1c5;
}

.hero-content {
  display: flex;
  max-width: 1280px;
  width: 100%;
  align-items: stretch; /* match heights */
  justify-content: center;
  padding: 0 2rem;
  gap: 48px;
  height: 80vh;
}

.text-block {
  padding-top: 30px;
  flex: 1;
  max-width: 500px;
}

.text-block h1 {
  font-size: 3.2em;
  line-height: 1.1;
  margin-bottom: 16px;
}

.text-block .subheading {
  font-size: 1.25em;
  margin-bottom: 16px;
}

.skills {
  margin-bottom: 16px;
}

.skill-chip {
  margin: 4px 4px 4px 0;
}

.icon-links a {
  margin-right: 12px;
  color: inherit;
  transition: color 0.2s ease, opacity 0.2s ease;
}
.icon-links a:hover {
  color: #3b82f6;
  opacity: 0.8;
}

.image-block {
  flex-shrink: 0;
  display: flex;
  align-items: stretch;
}

.portrait {
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

@media (max-width: 960px) {
  .hero-content {
    flex-direction: column;
    gap: 32px;
  }
  .image-block {
    align-items: center;
  }
  .portrait {
    width: 100%;
  }
}
</style>
