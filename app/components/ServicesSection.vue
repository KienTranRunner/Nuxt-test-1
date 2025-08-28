<template>
  <div class="container py-5">
    <p class="text-center text-primary fw-bold mb-2 text-uppercase p-3">
      What We Do?
    </p>

    <h2 class="text-center fw-bold mx-auto w-50">
      {{ my_services.title }}
    </h2>

    <div class="container ">
      <div class="row text-center g-4 align-items-stretch py-5">
      <div 
        class="col-md-4 my-auto" 
        v-for="(item, index) in my_services.homepage_items" 
        :key="index"
      >
        <img
          :src="item.image_url"
          class="img-fluid rounded mb-3"
          loading="lazy"
          :alt="item.title"
        />
        <h4 class="fw-bold">{{ item.title }}</h4>
        <p class="text-muted">{{ item.description }}</p>
        <button class="btn btn-text">Learn More</button>
      </div>
    </div>
    </div>
    
  </div>
</template>

<script setup lang="ts">
defineProps<{
  my_services: {
    title: string;
    subtitle?: string;
    homepage_items: Array<{
      title: string;
      description?: string;
      link_url?: string;
      image_url: string;
    }>;
  };
}>();
</script>
