<template>
  <v-container class="resume-page py-8" max-width="900">
    <div class="d-flex align-start justify-space-between mb-6">
      <h1 class="resume-title">Resume</h1>
      <v-btn
        href="/resume.pdf"
        variant="outlined"
        size="small"
        prepend-icon="mdi-download"
        class="download-btn"
        target="_blank"
      >
        Download
      </v-btn>
    </div>

    <ResumeSection title="Summary">
      <p>
        Full-stack software engineer focused on building user-centered,
        sustainable web applications.
      </p>
    </ResumeSection>

    <ResumeSection title="Experience">
      <div v-for="(job, j) in experience" :key="j" class="resume-item">
        <ResumeHeader
          :title="job.title"
          :company="job.company"
          :location="job.location"
          :date="job.date"
        />
        <ResumeCard
          v-for="(role, i) in job.roles"
          :key="i"
          :heading="role.heading"
          :icon="role.icon"
          :bullets="role.bullets"
          :skills="role.skills"
        />
      </div>
    </ResumeSection>

    <ResumeSection title="Education">
      <ResumeCard
        v-for="(ed, e) in education"
        :key="e"
        :header="{
          title: `${ed.school} — ${ed.degree}`,
          icon: 'mdi-school-outline',
          date: ed.date,
        }"
      >
        <ul>
          <li v-if="ed.thesis">
            Thesis:
            <a :href="ed.thesis.url" target="_blank" class="resume-link">
              {{ ed.thesis.title }}
            </a>
          </li>
          <li v-for="(detail, d) in ed.details" :key="d">{{ detail }}</li>
        </ul>
      </ResumeCard>
    </ResumeSection>

    <ResumeSection title="Skills">
      <div class="d-flex flex-wrap ga-2 mb-2" style="row-gap: 1rem">
        <v-chip
          v-for="skill in skills"
          :key="skill"
          rounded="lg"
          size="small"
          variant="tonal"
          color="secondary"
        >
          {{ skill }}
        </v-chip>
      </div>
    </ResumeSection>

    <ResumeSection title="Publications">
      <ResumeCard
        v-for="(pub, p) in publications"
        :key="p"
        :header="{
          title: pub.title,
          date: pub.date,
        }"
      >
        <a
          :href="pub.link"
          target="_blank"
          class="resume-publication-link resume-link"
        >
          {{ pub.link }}
        </a>
      </ResumeCard>
    </ResumeSection>
  </v-container>
</template>

<script setup>
import { onMounted } from "vue";
import {
  experience,
  education,
  skills,
  publications,
} from "../data/resumeData";
import ResumeSection from "../components/resume/ResumeSection.vue";
import ResumeCard from "../components/resume/ResumeCard.vue";
import ResumeHeader from "../components/resume/ResumeHeader.vue";

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
