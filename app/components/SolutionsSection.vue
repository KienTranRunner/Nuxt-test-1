<template>
  <section>
    <div class="container py-5">
      <div class="row align-items-center g-4">
        <div class="col-md-6">
          <img
            :src="data.homepage_items[0].image_url"
            loading="lazy"
            alt="why-choose-us"
            class="img-fluid rounded"
          />
        </div>

        <div class="col-md-6">
          <p class="text-primary fw-bold mb-2">Why Choose Us?</p>
          <h4 class="mb-4">{{data.title}}</h4>

          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                >
                  Professional Design
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh...
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                >
                  Top-Notch Support
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh...
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                >
                  Header and Slider Options
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh...
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