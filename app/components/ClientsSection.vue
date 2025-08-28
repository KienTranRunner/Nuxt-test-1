<template>
  <!-- Phần icon -->
  <div class="container p-5">
    <p class="text-center p-3">
      {{ my_client.title }}
    </p>

    <div class="row row-cols-7 align-items-stretch">
      <div
        class="col my-auto mx-auto"
        v-for="(icon, index) in icons"
        :key="index"
      >
        <img
          :src="icon.src"
          :alt="icon.alt"
          loading="lazy"
          class="img-fluid w-75"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  my_client: {
    title: string;
    subtitle: string;
    homepage_items: Array<{
      title: string;
      link_url: string;
      image_url: string;
    }>;
  };
}>();

const icons = [
  { src: "/c1.png", alt: "icon-1" },
  { src: "/c2.png", alt: "icon-2" },
  { src: "/c3.png", alt: "icon-3" },
  { src: "/c4.png", alt: "icon-4" },
  { src: "/c5.png", alt: "icon-5" },
  { src: "/c6.png", alt: "icon-6" },
  { src: "/c7.png", alt: "icon-7" },
];
</script>
