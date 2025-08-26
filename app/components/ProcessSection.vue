<template>
  <section>
    <div class="container py-5">
      <div class="row align-items-center gy-4">
        <!-- Text Left -->
        <div class="col-6">
          <p class="text-primary fw-bold">Our Strategy</p>
          <h2 class="fw-bold">{{ data.title }}</h2>

          <p>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Etiam porta sem malesuada magna mollis euismod. Nullam
            id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus
            eget urna mollis.
          </p>

          <p>
            Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id
            ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed
            consectetur.
          </p>

          <Button label="Learn More" to="#" variant="btn-primary" />
        </div>

        <!-- Cards Right -->
        <div class="col-6">
          <div 
            class="card shadow-sm mb-3" 
            v-for="(item, index) in data.homepage_items" 
            :key="item.id"
          >
            <div class="card-body">
              <div class="d-flex align-items-center">
                <div
                  class="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-4"
                  style="width: 80px; height: 60px"
                >
                  <span class="fw-bold">{{ index + 1 | twoDigits }}</span>
                </div>

                <div>
                  <h5 class="fw-bold">{{ item.title }}</h5>
                  <p>{{ item.description }}</p>
                </div>
              </div>
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
      link_url?: string
      image_url?: string
    }>
  }
}>()

</script>
