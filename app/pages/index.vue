<template>
  

  
  <HeroSection />

  <ClientsSection />

  <ServicesSection />
  <ProcessSection />
  <SolutionsSection />

  <TeamSection />
  <ProjectsSection />
  <TestimonialsSection />
  <FaqSection />

  
</template>

<script setup lang="ts">
import Button from "~/components/button.vue";
import { ref, onMounted } from "vue";
import HeroSection from '~/components/HeroSection.vue'
import ClientsSection from '~/components/ClientsSection.vue'
import ServicesSection from '~/components/ServicesSection.vue'
import ProcessSection from '~/components/ProcessSection.vue'
import SolutionsSection from '~/components/SolutionsSection.vue'
import TeamSection from '~/components/TeamSection.vue'

import ProjectsSection from '~/components/ProjectsSection.vue'
import TestimonialsSection from '~/components/TestimonialsSection.vue'
import FaqSection from '~/components/FaqSection.vue'





</script>

<style>
/* .rotator-fade {
  transition: all 0.5s ease;
} */

.img-hero-home {
  width: 618px;
  height: 432px;
}

.btn-text {
  background: none;
  border: none;
  color: inherit;
  padding: 0;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  overflow: hidden;
}

.btn-text::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: currentColor;
  transition: width 0.3s ease-in-out;
}

.btn-text:hover::after {
  width: 100%;
}
.swiper-pagination-bullet {
  background: #93c5fd !important;
  opacity: 1 !important;
}
.swiper-pagination-bullet-active {
  background: #2563eb !important;
}

.hero-swiper-img {
  width: 630px;
  height: 410px;
}

.testimonials .testimonial-card {
  border-radius: 1rem;
  transition: all 0.3s ease;
  background: #fff;
}

.testimonials .testimonial-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}

.testimonials blockquote p {
  font-size: 0.95rem;
  line-height: 1.6;
}

.testimonials img {
  object-fit: cover;
}

.testimonials .ratings.five::before {
  content: "★★★★★";
  font-size: 1rem;
  color: #f5b942; /* vàng gold */
  letter-spacing: 2px;
}

.accordion-wrapper .card {
  border: none;
  border-radius: 0.75rem;
  margin-bottom: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
}

.accordion-wrapper .card:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

.accordion-wrapper .card-header {
  background: #fff;
  padding: 0;
}

.accordion-wrapper .card-header button {
  width: 100%;
  text-align: left;
  padding: 1rem 1.25rem;
  font-weight: 500;
  font-size: 1rem;
  background: none;
  border: none;
  outline: none;
}

.accordion-wrapper .card-header button:focus {
  box-shadow: none;
}

.accordion-wrapper .card-body {
  padding: 1rem 1.25rem;
  font-size: 0.95rem;
  color: #555;
}
</style>
