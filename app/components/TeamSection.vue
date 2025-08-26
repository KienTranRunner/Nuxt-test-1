<template>
  <div class="container py-5">
    <div class="row align-items-stretch">
      <div class="col-4 d-flex">
        <div class="container py-5 my-auto">
          <p class="text-primary fw-bold">Company Facts</p>
          <h2 class="fw-bold">{{ data.title }}</h2>
          <p>
            Just sit back and relax while we take care of your business needs
            for you.
          </p>
        </div>
      </div>

      <div class="col-8 d-flex">
        <div class="container py-5 my-auto">
          <div class="row text-center">
            <div class="col-md-4">
              <BootstrapIcon name="alarm" class="fs-1 text-primary" />
              <h3 class="fw-bold mt-2">1000+</h3>
              <p>Completed Projects</p>
            </div>

            <div class="col-md-4">
              <BootstrapIcon name="emoji-smile" class="fs-1 text-success" />
              <h3 class="fw-bold mt-2">50K+</h3>
              <p>Happy Customers</p>
            </div>

            <div class="col-md-4">
              <BootstrapIcon name="award" class="fs-1 text-warning" />
              <h3 class="fw-bold mt-2">20+</h3>
              <p>Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Team Members -->
  <div class="container py-5">
    <div class="row row-cols-4 g-4">
      <div
        class="col"
        v-for="member in data.homepage_items"
        :key="member.id"
      >
        <div class="card p-3 shadow-lg">
          <img
            :src="member.image_url"
            class="img-fluid rounded-circle mb-3 w-50"
            :alt="member.title"
          />
          <h5>{{ member.title }}</h5>
          <p class="fw-semibold">{{ member.description }}</p>
          <p class="text-muted">
            Fermentum massa justo sit amet risus morbi leo.
          </p>
          <nav class="nav">
            <a href="#" class="nav-link text-primary"
              ><i class="bi bi-twitter"></i
            ></a>
            <a href="#" class="nav-link text-primary"
              ><i class="bi bi-facebook"></i
            ></a>
          </nav>
        </div>
      </div>
    </div>
  </div>
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
      link_url?: string
      image_url?: string
    }>
  }
}>()
</script>
