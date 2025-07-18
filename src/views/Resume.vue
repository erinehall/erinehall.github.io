<template>
  <section class="page-container resume-page">
    <h1 class="resume-title">Resume</h1>

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
      <ChipGroup
        v-for="(group, s) in skills"
        :key="s"
        :category="group.category"
        :skills="group.items"
      />
    </ResumeSection>

    <ResumeSection title="Publications">
      <ResumeCard
        v-for="(pub, p) in publications"
        :key="p"
        :header="{
          title: pub.title,
          icon: 'mdi-book-open-page-variant',
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
  </section>
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
import ChipGroup from "../components/resume/ChipGroup.vue";

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
