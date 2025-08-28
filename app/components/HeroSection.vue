<script setup lang="ts">
import { ref, onMounted } from "vue";
import Button from "~/components/button.vue";

defineProps<{
  my_hero: {
    title: string
    subtitle: string
    homepage_items: Array<{
      title: string
      link_url: string
      image_url: string
    }>
  }
}>()

// Animation text
const texts = ["3D animation", "Mobile design", "Web design"];
const currentText = ref(texts[0]);
const animationKey = ref(0);

let index = 0;
onMounted(() => {
  setInterval(() => {
    index = (index + 1) % texts.length;
    currentText.value = texts[index];
    animationKey.value++;
  }, 2000);
});
</script>

<template>
  <section class="py-5">
    <div class="container">
      <div class="row align-items-center py-5">
        <div class="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
          <h1 class="fw-bold mb-3 display-2">
            {{ my_hero.title }}
            <span :key="animationKey" class="d-inline-block text-primary animate__animated animate__fadeInDown">
              {{ currentText }}
            </span>
          </h1>
          <p class="lead text-muted mb-4">{{ my_hero.subtitle }}</p>
          <Button
            v-if="my_hero.homepage_items.length"
            :label="my_hero.homepage_items[0].title"
            :to="my_hero.homepage_items[0].link_url"
            variant="btn-primary"
          />
        </div>

        <!-- Right column: hero image -->
        <div class="col-lg-6 text-center">
          <img
            v-if="my_hero.homepage_items.length"
            :src="my_hero.homepage_items[0].image_url"
            class="img-fluid"
            alt="Hero Image"
          />
        </div>
      </div>
    </div>
  </section>
</template>
