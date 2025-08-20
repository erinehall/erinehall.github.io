<template>
  <v-container class="resume-page py-16" max-width="700">
    <div class="title-row mb-6">
      <h1 class="resume-title">Resume</h1>
      <v-btn href="/resume.pdf" variant="outlined" size="small" prepend-icon="mdi-download" target="_blank">
        Download
      </v-btn>
    </div>

    <!-- Experience -->
    <ResumeSection title="Experience">
      <div v-for="(job, j) in experience" :key="j" class="mb-10">
        <div class="d-flex flex-column flex-md-row justify-space-between align-start w-100 ga-2 mb-4">
          <div>
            <h3 class="text-h6 text-primary d-flex align-center ga-2 mb-1 wrap">
              <v-icon size="20">mdi-briefcase-outline</v-icon>
              {{ job.title }}
            </h3>
            <div class="text-medium-emphasis d-flex align-center flex-wrap ga-3">
              <span>{{ job.company }}</span>
              <span class="d-flex align-center ga-1">
                <v-icon size="16">mdi-map-marker</v-icon>
                {{ job.location }}
              </span>
            </div>
          </div>
          <v-chip color="secondary" variant="elevated" size="small" class="text-white d-flex align-center ga-1">
            <v-icon size="14" start>mdi-calendar</v-icon>
            {{ job.date }}
          </v-chip>
        </div>

        <v-card v-for="(role, i) in job.roles" :key="i" class="hover-shadow role-card card-pad mb-4" elevation="0">
          <v-card-title class="pb-2 d-flex align-center ga-2 text-primary">
            <v-icon v-if="role.icon" :icon="role.icon" size="18" />
            <span class="text-subtitle-1 wrap">{{ role.heading }}</span>
          </v-card-title>
          <v-card-text>
            <ul class="pl-6">
              <li v-for="(bullet, b) in role.bullets" :key="b" class="mb-2">
                {{ bullet }}
              </li>
            </ul>
            <ChipList :items="role.skills" containerClass="pt-2 d-flex flex-wrap ga-2"
              :chipProps="{ size: 'x-small', variant: 'outlined', color: 'primary' }" />
          </v-card-text>
        </v-card>
      </div>
    </ResumeSection>

    <!-- Skills -->
    <ResumeSection title="Skills">
      <v-card class="hover-shadow card-pad">
        <v-card-text class="pt-8">
          <ChipList :items="skills" containerClass="d-flex flex-wrap justify-center ga-2" containerStyle="row-gap:1rem"
            :chipProps="{ rounded: 'lg', size: 'small', variant: 'outlined', color: 'primary' }" />
        </v-card-text>
      </v-card>
    </ResumeSection>

    <!-- Education -->
    <ResumeSection title="Education">
      <v-card v-for="(ed, e) in education" :key="e" class="hover-shadow border-l-secondary card-pad mb-6" elevation="2">
        <v-card-text>
          <ResumeHeader :title="ed.degree" :subtitle="ed.school" icon="mdi-school" :date="ed.date" :dateChip="true" />

          <div v-if="ed.details?.length || ed.thesis" class="mb-2">
            <ul class="pl-6">
              <li v-for="(detail, d) in ed.details" :key="d">{{ detail }}</li>
              <li v-if="ed.thesis">Thesis: {{ ed.thesis.title }}</li>
            </ul>
          </div>

          <div v-if="ed.thesis" class="mt-2">
            <v-btn variant="outlined" color="primary" size="small" :href="ed.thesis.url" target="_blank">
              <v-icon start>mdi-open-in-new</v-icon>
              View Thesis
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </ResumeSection>

    <!-- Certifications -->
    <ResumeSection title="Certifications">
      <v-row class="align-stretch">
        <v-col v-for="(cert, c) in certifications" :key="c" cols="12" md="6" class="d-flex">
          <v-card class="hover-shadow border-l-primary card-pad d-flex flex-column h-100" elevation="2">
            <v-card-title class="flex-grow-1">
              <div class="d-flex align-start ga-4">
                <v-avatar color="primary-lighten-4" size="48">
                  <v-icon color="primary">mdi-trophy</v-icon>
                </v-avatar>
                <div class="flex-grow-1">
                  <h3 class="text-h6 text-primary mb-1 wrap" style="line-height:1.4">{{ cert.name }}</h3>
                  <p class="text-medium-emphasis wrap">{{ cert.organization }}</p>
                </div>
              </div>
            </v-card-title>
            <v-card-text class="d-flex justify-space-between align-center mt-auto">
              <span class="text-caption">Completed:</span>
              <v-chip color="secondary" class="text-white" size="small">{{ cert.date }}</v-chip>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </ResumeSection>

    <!-- Publications & Presentations -->
    <ResumeSection title="Publications & Presentations">
      <!-- Publications -->
      <h3 class="text-h5 mb-4 text-primary d-flex align-center ga-2">
        <v-icon>mdi-file-document</v-icon>
        Publications
      </h3>
      <div class="space-y-6 mb-8">
        <v-card v-for="(pub, p) in publications" :key="p" class="hover-shadow border-l-primary card-pad" elevation="2">
          <v-card-title>
            <div class="d-flex flex-column flex-md-row justify-space-between align-start ga-4 w-100">
              <div class="flex-grow-1">
                <h4 class="text-h6 text-primary mb-1 wrap" style="line-height:1.4">
                  {{ pub.title }}
                </h4>
                <div class="d-flex align-center ga-2 text-caption text-medium-emphasis">
                  <v-icon size="12">mdi-calendar</v-icon>{{ pub.date }}
                </div>
              </div>
              <v-btn :href="pub.link" target="_blank" size="small" variant="outlined" color="primary">
                <v-icon start>mdi-open-in-new</v-icon>
                View Publication
              </v-btn>
            </div>
          </v-card-title>
          <v-card-text>
            <v-chip variant="outlined" color="primary" size="small">
              DOI: {{ pub.doi }}
            </v-chip>
          </v-card-text>
        </v-card>
      </div>

      <!-- Presentations -->
      <h3 class="text-h5 mb-4 text-primary d-flex align-center ga-2">
        <v-icon>mdi-presentation</v-icon>
        Conference Presentations
      </h3>
      <div class="space-y-6">
        <v-card v-for="(pres, p) in presentations" :key="p" class="hover-shadow border-l-secondary card-pad"
          elevation="2">
          <v-card-title>
            <div class="d-flex flex-column flex-md-row justify-space-between align-start ga-4 w-100">
              <div class="flex-grow-1">
                <h4 class="text-h6 text-primary mb-1 wrap">{{ pres.conference }}</h4>
                <p class="text-medium-emphasis mb-1 wrap">{{ pres.location }}</p>
                <div class="d-flex align-center flex-wrap ga-4 text-caption text-medium-emphasis">
                  <div class="d-flex align-center ga-1">
                    <v-icon size="12">mdi-calendar</v-icon>{{ pres.date }}
                  </div>
                  <v-chip v-if="pres.role" color="secondary" size="small" class="text-white">
                    {{ pres.role }}
                  </v-chip>
                </div>
              </div>
            </div>
          </v-card-title>
        </v-card>
      </div>
    </ResumeSection>

    <!-- Clearances & Memberships -->
    <ResumeSection title="Clearances & Professional Memberships">
      <h3 class="text-h5 mb-4 text-primary d-flex align-center ga-2">
        <v-icon>mdi-shield-check</v-icon>
        Clearances
      </h3>
      <div class="space-y-6 mb-8">
        <v-card class="hover-shadow border-l-primary h-100 card-pad" elevation="2">
          <v-card-text>
            <ChipList :items="clearances" containerClass="d-flex flex-wrap ga-2"
              :chipProps="{ variant: 'outlined', color: 'primary' }" />
          </v-card-text>
        </v-card>
      </div>

      <h3 class="text-h5 mb-4 text-primary d-flex align-center ga-2">
        <v-icon>mdi-account-group</v-icon>
        Professional Memberships
      </h3>
      <div class="space-y-6">
        <v-card class="hover-shadow border-l-secondary h-100 card-pad" elevation="2">
          <v-card-text class="space-y-6">
            <div v-for="(member, m) in memberships" :key="m"
              class="d-flex flex-column flex-sm-row justify-space-between align-sm-center ga-2">
              <span class="text-medium-emphasis wrap">{{ member.name }}</span>
              <v-chip color="secondary" class="text-white" size="small">{{ member.date }}</v-chip>
            </div>
          </v-card-text>
        </v-card>
      </div>
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
  certifications,
  clearances,
  memberships,
  presentations,
} from "../data/resumeData";
import ResumeSection from "../components/resume/ResumeSection.vue";
import ResumeCard from "../components/resume/ResumeCard.vue";
import ResumeHeader from "../components/resume/ResumeHeader.vue";
import ChipList from "../components/ChipList.vue";

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
  document.querySelectorAll(".scroll-fade").forEach((el) => observer.observe(el));
});
</script>
