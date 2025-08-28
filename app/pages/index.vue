<script setup lang="ts">
import { useHomepageStore } from '@/stores/useHomepageStore'

const homepageStore = useHomepageStore()

onMounted(() => {
  homepageStore.fetchHomepageSections()
})
</script>

<template>
  <HeroSection v-if="homepageStore.heroData" :my_hero="homepageStore.heroData" />
  <ClientsSection v-if="homepageStore.clientsData" :my_client="homepageStore.clientsData" />
  <ServicesSection v-if="homepageStore.servicesData" :my_services="homepageStore.servicesData" />
  <ProcessSection v-if="homepageStore.processData" :my_process="homepageStore.processData" />
  <SolutionsSection v-if="homepageStore.solutionsData" :my_solution="homepageStore.solutionsData" />
  <TeamSection v-if="homepageStore.teamData" :my_team="homepageStore.teamData" />
  <ProjectsSection v-if="homepageStore.projectsData" :my_project="homepageStore.projectsData" />
  <TestimonialsSection v-if="homepageStore.testimonialsData" :my_testimonials="homepageStore.testimonialsData" />
  <FaqSection v-if="homepageStore.faqData" :my_faq="homepageStore.faqData" />
</template>
