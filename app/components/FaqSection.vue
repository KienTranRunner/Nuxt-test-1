<template>
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <p class="text-primary fw-bold">FAQ</p>
          <h4>
            If you don't see an answer to your question, you can send us an
            email from our contact form.
          </h4>

          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis
            ornare.
          </p>
          <Button label="All FAQ" to="#" variant="btn-primary" />
        </div>

        <div class="col-lg-6">
          <div id="accordion-3" class="accordion-wrapper">
            <div
              class="card accordion-item shadow-sm"
              v-for="(faq, i) in faqs"
              :key="i"
            >
              <div class="card-header" :id="`accordion-heading-${i}`">
                <button
                  class="collapsed"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#accordion-collapse-${i}`"
                  aria-expanded="false"
                  :aria-controls="`accordion-collapse-${i}`"
                >
                  {{ faq.question }}
                </button>
              </div>
              <div
                class="collapse"
                :id="`accordion-collapse-${i}`"
                :aria-labelledby="`accordion-heading-${i}`"
                data-bs-parent="#accordion-3"
              >
                <div class="card-body">
                  <p>{{ faq.answer }}</p>
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
import Button from './button.vue';


const faqs = [
  {
    question: "How do I get my subscription receipt?",
    answer:
      "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
  },
  {
    question: "Are there any discounts for people in need?",
    answer:
      "Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  },
  {
    question: "Do you offer a free trial edit?",
    answer:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    question: "How do I reset my Account password?",
    answer:
      "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
  },
];

</script>