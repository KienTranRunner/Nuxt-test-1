<script setup lang="ts">
import { useHomepageStore } from '@/stores/useHomepageStore'

const homepageStore = useHomepageStore()

onMounted(() => {
  homepageStore.fetchHomepageSections()
})
</script>

<template>
  <HeroSection v-if="homepageStore.heroData" :data="homepageStore.heroData" />
  <ClientsSection v-if="homepageStore.clientsData" :data="homepageStore.clientsData" />
  <ServicesSection v-if="homepageStore.servicesData" :data="homepageStore.servicesData" />
  <ProcessSection v-if="homepageStore.processData" :data="homepageStore.processData" />
  <SolutionsSection v-if="homepageStore.solutionsData" :data="homepageStore.solutionsData" />
  <TeamSection v-if="homepageStore.teamData" :data="homepageStore.teamData" />
  <ProjectsSection v-if="homepageStore.projectsData" :data="homepageStore.projectsData" />
  <TestimonialsSection v-if="homepageStore.testimonialsData" :data="homepageStore.testimonialsData" />
  <FaqSection v-if="homepageStore.faqData" :data="homepageStore.faqData" />
</template>
