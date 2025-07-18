<template>
  <section class="page-container resume-page">
    <h1 class="resume-title">Resume</h1>

    <div class="resume-section">
      <h2>Summary</h2>
      <p>
        Full-stack software engineer focused on building user-centered,
        sustainable web applications.
      </p>
    </div>

    <div class="resume-section">
      <h2>Experience</h2>

      <div class="resume-item">
        <div class="resume-item-header">
          <h3>
            The MITRE Corporation — Intermediate Software Systems Engineer
          </h3>
          <span class="date-location text-medium-emphasis text-body-1">McLean, VA | May 2024 – Present</span>
        </div>
        <v-card elevation="2" rounded class="pa-4 mb-4 scroll-fade">
          <h4 class="d-flex align-center mb-2">
            <v-icon icon="mdi-chip" start class="mr-2" /> High-Perfomance
            Computing
          </h4>
          <ul>
            <li>
              Lead frontend developer for a React-based High Performance
              Computing (HPC) analytics dashboard, making design decisions,
              planning and implementing new features, and improving usability
              through user feedback
            </li>
            <li>
              Coordinating HPC engagement for 900+ users by conducting surveys,
              organizing monthly informational sessions and advanced trainings,
              and developing an HPC learning path to strengthen organizational
              expertise
            </li>
            <li>
              Delivered reports and briefings to advise a sponsor on HPC cluster
              setup and operational best practices
            </li>
          </ul>
          <div class="mt-2">
            <v-chip pill small outlined color="brown-darken-2" class="ma-1">React</v-chip>
            <v-chip pill small outlined color="brown-darken-2" class="ma-1">TypeScript</v-chip>
            <v-chip pill small outlined color="brown-darken-2" class="ma-1">Docker</v-chip>
            <v-chip pill small outlined color="brown-darken-2" class="ma-1">Django</v-chip>
          </div>
        </v-card>

        <v-card elevation="2" rounded class="pa-4 mb-4 scroll-fade">
          <h4 class="d-flex align-center mb-2">
            <span class="mr-2">&amp;</span> ATT&amp;CK
          </h4>
          <ul>
            <li>
              Advancing tools, websites, and libraries across the ATT&amp;CK
              ecosystem, collaborating on enhancements to reduce technical debt
              and support growth and sustainability
            </li>
          </ul>
          <div class="mt-2">
            <v-chip pill small outlined color="brown-darken-2" class="ma-1">AngularJS</v-chip>
            <v-chip pill small outlined color="brown-darken-2" class="ma-1">HTML</v-chip>
            <v-chip pill small outlined color="brown-darken-2" class="ma-1">Zod</v-chip>
            <v-chip pill small outlined color="brown-darken-2" class="ma-1">Python</v-chip>
          </div>
        </v-card>

        <v-card elevation="2" rounded class="pa-4 mb-4 scroll-fade">
          <h4 class="d-flex align-center mb-2">
            <v-icon icon="mdi-account-group" start class="mr-2" /> Intern
            Coordinator
          </h4>
          <ul>
            <li>
              Department intern coordinator, overseeing hiring, onboarding,
              mentorship, and performance evaluations
            </li>
          </ul>
          <div class="mt-2">
            <v-chip pill small outlined color="brown-darken-2" class="ma-1">Mentorship</v-chip>
          </div>
        </v-card>
      </div>

      <div class="resume-item">
        <div class="resume-item-header">
          <h3>The MITRE Corporation — Associate Software Systems Engineer</h3>
          <span class="date-location text-medium-emphasis text-body-1">McLean, VA | January 2023 – May 2024</span>
        </div>
        <v-card elevation="2" rounded class="pa-4 mb-4 scroll-fade">
          <h4 class="d-flex align-center mb-2">
            <v-icon icon="mdi-chip" start class="mr-2" /> High-Performance
            Computing
          </h4>
          <ul>
            <li>
              Delivered full-stack upgrades to a HPC cluster analytics
              dashboard, improving sustainability, performance, and user
              experience
            </li>
            <li>
              Built and maintained full-stack web applications for internal
              tools and external-facing platforms
            </li>
          </ul>
          <div class="mt-2">
            <v-chip pill small outlined color="brown-darken-2" class="ma-1">React</v-chip>
            <v-chip pill small outlined color="brown-darken-2" class="ma-1">Django</v-chip>
          </div>
        </v-card>

        <v-card elevation="2" rounded class="pa-4 mb-4 scroll-fade">
          <h4 class="d-flex align-center mb-2">
            <span class="mr-2">&amp;</span> ATT&amp;CK
          </h4>
          <ul>
            <li>
              Developed and maintained tools, websites, and libraries across the
              ATT&amp;CK ecosystem to advance threat-informed defense and
              understanding of adversary tactics and techniques
            </li>
          </ul>
          <div class="mt-2">
            <v-chip pill small outlined color="brown-darken-2" class="ma-1">Python</v-chip>
            <v-chip pill small outlined color="brown-darken-2" class="ma-1">Vue</v-chip>
          </div>
        </v-card>
      </div>

      <div class="resume-item">
        <div class="resume-item-header">
          <h3>The MITRE Corporation — Software Engineer Intern</h3>
          <span class="date-location text-medium-emphasis text-body-1">McLean, VA | June 2020 – January 2023</span>
        </div>
        <v-card elevation="2" rounded class="pa-4 mb-4 scroll-fade">
          <h4 class="d-flex align-center mb-2">
            <v-icon icon="mdi-chip" start class="mr-2" /> High-Performance
            Computing
          </h4>
          <ul>
            <li>
              Maintained and designed interactive UI features in React and
              Python for a web-based dashboard to monitor HPC cluster
              performance and usage statistics
            </li>
          </ul>
          <div class="mt-2">
            <v-chip pill small outlined color="brown-darken-2" class="ma-1">React</v-chip>
            <v-chip pill small outlined color="brown-darken-2" class="ma-1">Python</v-chip>
          </div>
        </v-card>

        <v-card elevation="2" rounded class="pa-4 mb-4 scroll-fade">
          <h4 class="d-flex align-center mb-2">
            <span class="mr-2">&amp;</span> ATT&amp;CK
          </h4>
          <ul>
            <li>
              Provided updates and maintenance in AngularJS for a company-hosted
              platform for concept demonstration and prototyping early web
              applications
            </li>
          </ul>
          <div class="mt-2">
            <v-chip pill small outlined color="brown-darken-2" class="ma-1">AngularJS</v-chip>
          </div>
        </v-card>

        <v-card elevation="2" rounded class="pa-4 mb-4 scroll-fade">
          <h4 class="d-flex align-center mb-2">
            <v-icon icon="mdi-account-group" start class="mr-2" /> EPIC
          </h4>
          <ul>
            <li>
              Prototyped a guided interview for eliciting attorney misconduct in
              Python using Docassemble
            </li>
          </ul>
          <div class="mt-2">
            <v-chip pill small outlined color="brown-darken-2" class="ma-1">YAML</v-chip>
            <v-chip pill small outlined color="brown-darken-2" class="ma-1">Docassemble</v-chip>
          </div>
        </v-card>
      </div>
    </div>

    <div class="resume-section">
      <h2>Education</h2>
      <v-card elevation="2" rounded class="pa-4 mb-4 scroll-fade">
        <div class="resume-item-header">
          <h3 class="d-flex align-center">
            <v-icon icon="mdi-school-outline" start class="mr-2" /> Virginia Tech — M.S. in Computer Science
          </h3>
          <span class="date-location text-medium-emphasis text-body-1">August 2021 – August 2023</span>
        </div>
        <ul>
          Thesis:
          <a href="https://vtechworks.lib.vt.edu/server/api/core/bitstreams/12ad03cd-5041-446e-aee9-097ad1d6c617/content"
            target="_blank" class="resume-link">
            A User-Centered Design Approach to Evaluating the Usability of
            Automated Essay Scoring Systems
          </a>
        </ul>
      </v-card>
      <v-card elevation="2" rounded class="pa-4 mb-4 scroll-fade">
        <div class="resume-item-header">
          <h3 class="d-flex align-center">
            <v-icon icon="mdi-school-outline" start class="mr-2" /> Virginia Tech — B.S. in Computer Science
          </h3>
          <span class="date-location text-medium-emphasis text-body-1">August 2018 – May 2021</span>
        </div>
        <ul>
          Magna cum laude (3.61 GPA), Dean’s List every semester, minors in Science, Technology &amp; Law and Math
        </ul>
      </v-card>
    </div>

    <div class="resume-section">
      <h2>Skills</h2>
      <div class="resume-skill-category">
        <strong>Frontend:</strong>
        <v-chip pill small outlined color="brown-darken-2" class="ma-1">React</v-chip>
        <v-chip pill small outlined color="brown-darken-2" class="ma-1">JavaScript</v-chip>
        <v-chip pill small outlined color="brown-darken-2" class="ma-1">TypeScript</v-chip>
        <v-chip pill small outlined color="brown-darken-2" class="ma-1">AngularJS</v-chip>
        <v-chip pill small outlined color="brown-darken-2" class="ma-1">HTML</v-chip>
        <v-chip pill small outlined color="brown-darken-2" class="ma-1">CSS</v-chip>
        <v-chip pill small outlined color="brown-darken-2" class="ma-1">Vue</v-chip>
      </div>
      <div class="resume-skill-category">
        <strong>Backend:</strong>
        <v-chip pill small outlined color="brown-darken-2" class="ma-1">Python</v-chip>
        <v-chip pill small outlined color="brown-darken-2" class="ma-1">Django</v-chip>
        <v-chip pill small outlined color="brown-darken-2" class="ma-1">REST APIs</v-chip>
        <v-chip pill small outlined color="brown-darken-2" class="ma-1">MySQL</v-chip>
        <v-chip pill small outlined color="brown-darken-2" class="ma-1">Java</v-chip>
        <v-chip pill small outlined color="brown-darken-2" class="ma-1">C</v-chip>
      </div>
      <div class="resume-skill-category">
        <strong>Development Tools:</strong>
        <v-chip pill small outlined color="brown-darken-2" class="ma-1">Docker</v-chip>
        <v-chip pill small outlined color="brown-darken-2" class="ma-1">GitLab CI/CD</v-chip>
        <v-chip pill small outlined color="brown-darken-2" class="ma-1">Git</v-chip>
        <v-chip pill small outlined color="brown-darken-2" class="ma-1">Vite</v-chip>
        <v-chip pill small outlined color="brown-darken-2" class="ma-1">Jest</v-chip>
        <v-chip pill small outlined color="brown-darken-2" class="ma-1">React Testing Library</v-chip>
      </div>
      <div class="resume-skill-category">
        <strong>Other:</strong>
        <v-chip pill small outlined color="brown-darken-2" class="ma-1">High-Performance Computing</v-chip>
        <v-chip pill small outlined color="brown-darken-2" class="ma-1">Survey Analysis</v-chip>
        <v-chip pill small outlined color="brown-darken-2" class="ma-1">Usability Testing</v-chip>
        <v-chip pill small outlined color="brown-darken-2" class="ma-1">User Research</v-chip>
        <v-chip pill small outlined color="brown-darken-2" class="ma-1">AI Usability</v-chip>
        <v-chip pill small outlined color="brown-darken-2" class="ma-1">Figma</v-chip>
      </div>
    </div>

    <div class="resume-section">
      <h2>Publications</h2>
      <v-card elevation="2" rounded class="pa-4 mb-4 scroll-fade">
        <div class="resume-item-header">
          <h3 class="d-flex align-center">
            <v-icon icon="mdi-book-open-page-variant" start class="mr-2" />
            Exploring Explainability and Transparency in Automated Essay Scoring Systems: A User-Centered Evaluation
          </h3>
          <span class="date-location text-medium-emphasis text-body-1">June 2024</span>
        </div>
        <a href="https://doi.org/10.1007/978-3-031-61691-4_18" target="_blank"
          class="resume-publication-link resume-link">10.1007/978-3-031-61691-4_18</a>

      </v-card>
      <v-card elevation="2" rounded class="pa-4 mb-4 scroll-fade">
        <div class="resume-item-header">
          <h3 class="d-flex align-center">
            <v-icon icon="mdi-book-open-page-variant" start class="mr-2" />
            Identifying Usability Challenges in AI-Based Essay Grading Tools
          </h3>
          <span class="date-location text-medium-emphasis text-body-1">June 2023</span>
        </div>
        <a href="https://doi.org/10.1007/978-3-031-36336-8_104" target="_blank"
          class="resume-publication-link">10.1007/978-3-031-36336-8_104</a>
      </v-card>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  document
    .querySelectorAll(".scroll-fade")
    .forEach((el) => observer.observe(el));
});
</script>
