<template>
  <section class="hero py-5">
    <div class="text-center">
      <p class="fw-bold text-primary">Latest Projects</p>
      <h2 class="fw-bold w-50 mx-auto">
        {{ data.title }}
      </h2>
    </div>
  </section>

  <div class="container mx-auto">
    <Swiper
      :modules="[Navigation, Autoplay]"
      :slides-per-view="1"
      :space-between="30"
      :loop="true"
      :autoplay="{ delay: 3000 }"
      :breakpoints="{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
      }"
      :pagination="{ clickable: true }"
      navigation
      class="my-12 max-w-6xl mx-auto"
    >
      <SwiperSlide
        v-for="(item, i) in data.homepage_items"
        :key="item.id || i"
        class="p-4"
      >
        <div class="overflow-hidden rounded-2xl group bg-white">
          <!-- Hình ảnh -->
          <figure class="rounded-t-2xl overflow-hidden">
            <img
              :src="item.image_url || '/fallback.jpg'"
              class="hero-swiper-img object-cover transform group-hover:scale-110 transition duration-500"
              :alt="item.title"
            />
          </figure>

          <div class="p-5 text-left">
            <h2 class="text-xl font-semibold mb-2">
              <a
                :href="item.link_url || '#'"
                class="hover:text-blue-600 transition"
                style="text-decoration: none;"
              >
                {{ item.title }}
              </a>
            </h2>
            <p class="text-gray-500">{{ item.description }}</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

defineProps<{
  data: {
    title: string
    subtitle?: string
    homepage_items: Array<{
      id: number
      title: string
      description: string
      link_url?: string
      image_url?: string
    }>
  }
}>()
</script>
