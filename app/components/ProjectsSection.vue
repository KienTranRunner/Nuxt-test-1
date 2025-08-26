<template>

  <!-- Phần Project -->
  <section class="hero py-5">
    <div class="text-center">
      <p class="fw-bold text-primary">Latest Projects</p>
      <h2 class="fw-bold w-50 mx-auto">
        Check out some of our awesome projects with creative ideas and great
        design.
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
        <SwiperSlide v-for="(item, i) in projects" :key="i" class="p-4">
          <div class="overflow-hidden rounded-2xl  group bg-white">
            <!-- Hình ảnh -->
            <figure class="rounded-t-2xl overflow-hidden">
              <img
                :src="item.image"
                class="hero-swiper-img object-cover transform group-hover:scale-110 transition duration-500"
              />
            </figure>

            <!-- Tiêu đề & category -->
            <div class="p-5 text-left">
              <h2 class="text-xl font-semibold mb-2">
                <a href="#" class="hover:text-blue-600 transition" style="text-decoration: none;">
                  {{ item.title }}
                </a>
              </h2>
              <p class="text-gray-500">{{ item.category }}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";

// import CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  { image: "/sp1.jpg", title: "Cras Fermentum Sem", category: "Mobile Design" },
  {
    image: "/sp2.jpg",
    title: "Venenatis Euismod Vehicula",
    category: "Web Design",
  },
  { image: "/sp3.jpg", title: "Tortor Tellus Cursus", category: "Stationary" },
  {
    image: "/sp4.jpg",
    title: "Ridiculus Sem Parturient",
    category: "Web Application",
  },
  {
    image: "/sp5.jpg",
    title: "Cursus Sollicitudin Adipiscing",
    category: "Web Design",
  },
  {
    image: "/sp6.jpg",
    title: "Fringilla Quam Vulputate",
    category: "Stationary",
  },
];

</script>