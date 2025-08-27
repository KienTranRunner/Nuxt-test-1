<template>
  <section class="py-5 testimonials">
    <div class="container py-5">
      <div class="text-center py-5">
        <p class="fw-bold text-primary">Happy Customers</p>
        <h2 class="mx-auto fw-bold w-50">
          {{ data.title }}
        </h2>
      </div>

      <div class="row g-4">
        <div
          class="col-md-6 col-xl-4"
          v-for="item in data.homepage_items"
          :key="item.id"
        >
          <div class="card shadow-lg h-100">
            <div class="card-body">
              <span class="ratings five mb-2 d-block"></span>

              <blockquote class="border-0 mb-0">
                <p class="mb-4">“{{ item.description }}”</p>
                <div class="d-flex align-items-center">
                  <img
                    :src="item.image_url || '/fallback.jpg'"
                    class="rounded-circle me-3"
                    width="48"
                    height="48"
                    :alt="item.title"
                  />
                  <div>
                    <h5 class="mb-1">{{ item.title }}</h5>
                    <p class="mb-0 text-muted">{{ item.position }}</p>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  data: {
    title: string
    subtitle?: string
    homepage_items: Array<{
      id: number
      title: string
      description: string
      position?: string
      link_url?: string
      image_url?: string
    }>
  }
}>()
</script>
