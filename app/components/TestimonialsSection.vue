<template>
     <section class="py-5 testimonials">
    <div class="container py-5">
      <div class="text-center py-5">
        <p class="fw-bold text-primary"> Happy Customers</p>
        <h2 class="mx-auto fw-bold w-50">
          Don't take our word for it. See what customers are saying about us.
        </h2>
      </div>
      <div class="row g-4">
        <div
          class="col-md-6 col-xl-4"
          v-for="(item, i) in testimonials"
          :key="i"
        >
          <div class="card shadow-lg h-100">
            <div class="card-body">
              <span class="ratings five mb-2 d-block"></span>

              <blockquote class="border-0 mb-0">
                <p class="mb-4">“{{ item.text }}”</p>
                <div class="d-flex align-items-center">
                  <img
                    :src="item.image"
                    class="rounded-circle me-3"
                    width="48"
                    height="48"
                    :alt="item.name"
                  />
                  <div>
                    <h5 class="mb-1">{{ item.name }}</h5>
                    <p class="mb-0 text-muted">{{ item.role }}</p>
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

<script setup>

const testimonials = [
  {
    text: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.`,
    image: "/happy1.jpg",
    name: "Coriss Ambady",
    role: "Financial Analyst",
  },
  {
    text: `Fusce dapibus, tellus ac cursus tortor mauris condimentum fermentum massa justo sit amet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed.`,
    image: "/happy2.jpg",
    name: "Cory Zamora",
    role: "Marketing Specialist",
  },
  {
    text: `Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget porta ac consectetur vestibulum. Donec sed odio dui consectetur adipiscing elit.`,
    image: "/happy3.jpg",
    name: "Nikolas Brooten",
    role: "Sales Manager",
  },
  {
    text: `Etiam adipiscing tincidunt elit convallis felis suscipit ut. Phasellus rhoncus tincidunt auctor. Nullam eu sagittis mauris. Donec non dolor ac elit aliquam tincidunt at at sapien. Aenean tortor libero condimentum ac laoreet vitae.`,
    image: "/happy4.jpg",
    name: "Coriss Ambady",
    role: "Financial Analyst",
  },
  {
    text: `Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
    image: "/happy5.jpg",
    name: "Jackie Sanders",
    role: "Investment Planner",
  },
  {
    text: `Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus magnis dis montes, 
    nascetur ridiculus mus. Donec sed odio dui. Nulla vitae elit libero.`,
    image: "/happy6.jpg",
    name: "Laura Widerski",
    role: "Sales Specialist",
  },
];
</script>