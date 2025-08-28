<template>
  <section class="py-5">
    <div class="container">
      <div class="row">
        <!-- Phần tiêu đề FAQ -->
        <div class="col-lg-6">
          <p class="text-primary fw-bold">FAQ</p>
          <h4>{{ my_faq.title }}</h4>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis
            ornare.
          </p>
          <Button label="All FAQ" to="#" variant="btn-primary" />
        </div>

        <!-- Phần danh sách FAQ -->
        <div class="col-lg-6">
          <div id="accordion-3" class="accordion-wrapper">
            <div
              class="card accordion-item shadow-sm"
              v-for="(faq, i) in my_faq.homepage_items"
              :key="faq.id"
            >
              <div class="card-header" :id="`accordion-heading-${i}`">
                <button
                  class="collapsed"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#accordion-collapse-${i}`"
                  aria-expanded="false"
                  :aria-controls="`accordion-collapse-${i}`"
                >
                  {{ faq.title }}
                </button>
              </div>
              <div
                class="collapse"
                :id="`accordion-collapse-${i}`"
                :aria-labelledby="`accordion-heading-${i}`"
                data-bs-parent="#accordion-3"
              >
                <div class="card-body">
                  <p>{{ faq.description }}</p>
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
import Button from './button.vue'

defineProps<{
  my_faq: {
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
