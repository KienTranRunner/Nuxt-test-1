<template>
  <!-- Phần Hero -->
  <div class="container py-5">
    <div class="row align-items-center py-5">
      <!-- Text -->
      <div class="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
        <h1 class="fw-bold mb-3 display-3">
          A digital agency specializing on
          <span
            :key="animationKey"
            class="d-inline-block animate__animated animate__fadeInDown text-primary"
          >
            {{ currentText }}
          </span>
        </h1>
        <p class="lead text-muted mb-4">
          We are an award-winning design agency that strongly believes in the
          power of creative ideas.
        </p>
        <Button label="Get Started" to="#" variant="btn-primary" />
      </div>

      <!-- Image -->
      <div class="col-lg-6 text-center">
        <img src="/heroHome.png" loading="lazy" class="img-fluid" />
      </div>
    </div>
  </div>

  <!-- Phần icon -->
  <div class="container p-5">
    <p class="text-center p-3">Trusted by over 2K+ clients across the world</p>

    <div class="row row-cols-7 align-items-stretch">
      <div class="col my-auto">
        <img src="/c1.png" loading="lazy" alt="icon-1" class="img-fluid" />
      </div>
      <div class="col">
        <img src="/c2.png" loading="lazy" alt="icon-2" class="img-fluid" />
      </div>
      <div class="col">
        <img src="/c3.png" loading="lazy" alt="icon-3" class="img-fluid" />
      </div>
      <div class="col">
        <img src="/c4.png" loading="lazy" alt="icon-4" class="img-fluid" />
      </div>
      <div class="col">
        <img src="/c5.png" loading="lazy" alt="icon-5" class="img-fluid" />
      </div>
      <div class="col">
        <img src="/c6.png" loading="lazy" alt="icon-6" class="img-fluid" />
      </div>
      <div class="col">
        <img src="/c7.png" loading="lazy" alt="icon-7" class="img-fluid" />
      </div>
    </div>
  </div>

  <!-- Phần giới thiệu service của web -->
  <div class="container py-5">
    <div>
      <p class="text-center text-primary fw-bold mb-2 text-uppercase p-3">
        What We Do?
      </p>

      <h2 class="text-center fw-bold mx-auto w-50">
        The service we offer is specificallydesigned to meet your needs.
      </h2>

      <div class="container py-5">
        <div class="row text-center g-4 align-items-stretch">
          <div class="col-md-4 my-auto">
            <img
              src="/webDesign.png"
              class="img-fluid rounded mb-3"
              loading="lazy"
              alt="service-webDesign"
            />
            <h4 class="fw-bold">Web Design</h4>
            <p class="text-muted">
              Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
              porta gravida at eget. Fusce dapibus tellus.
            </p>
            <button class="btn btn-text">Learn More</button>
          </div>

          <div class="col-md-4 my-auto">
            <img
              src="/GraphicDesign.png"
              class="img-fluid rounded mb-3"
              loading="lazy"
              alt="service-graphicDesign"
            />
            <h4 class="fw-bold">Graphic Design</h4>
            <p class="text-muted">
              Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel
              augue laoreet. Sed posuere consectetur.
            </p>
            <button class="btn btn-text">Learn More</button>
          </div>

          <div class="col-md-4 my-auto">
            <img
              src="/3DAnimation.png"
              class="img-fluid rounded mb-3"
              loading="lazy"
              alt="service-3DAnimation"
            />
            <h4 class="fw-bold">3D Animation</h4>
            <p class="text-muted">
              Cras justo odio, dapibus ac facilisis in, egestas eget quam.
              Praesent commodo cursus magna scelerisque.
            </p>
            <button class="btn btn-text">Learn More</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Chiến lược của chúng tôi -->
    <div class="container py-5 ">
      <div class="row align-items-center gy-4">
        <div class="col-6">
          <p class="text-primary fw-bold">Our Strategy</p>
          <h2 class="fw-bold">
            Here are 3 working steps to organize our projects.
          </h2>

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

          <Button label="Learn More" to="#" variant="btn-primary"></Button>
        </div>
        <div class="col-6">
          <div class="card shadow-sm mb-3">
            <div class="card-body">
              <div class="d-flex align-items-center">
                <div
                  class="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-4"
                  style="width: 80px; height: 60px"
                >
                  <span class="fw-bold">01</span>
                </div>

                <div>
                  <h5 class="fw-bold">Collect Ideas</h5>
                  <p>Nulla vitae elit libero pharetra augue dapibus.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="card shadow-sm ms-5 mb-3">
            <div class="card-body">
              <div class="d-flex align-items-center">
                <div
                  class="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-4"
                  style="width: 80px; height: 60px"
                >
                  <span class="fw-bold">02</span>
                </div>

                <div>
                  <h5 class="fw-bold">Data Analysis</h5>
                  <p>Vivamus sagittis lacus vel augue laoreet.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="card shadow-sm ms-3 mb-3">
            <div class="card-body">
              <div class="d-flex align-items-center">
                <div
                  class="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-4"
                  style="width: 80px; height: 60px"
                >
                  <span class="fw-bold">03</span>
                </div>

                <div>
                  <h5 class="fw-bold">Finalize Product</h5>
                  <p>Cras mattis consectetur purus sit amet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tại sao lại chọn chúng tôi -->
    <div class="container py-5">
      <div class="row align-items-center g-4">
        <div class="col-md-6">
          <img
            src="/i22.png"
            loading="lazy"
            alt="why-choose-us"
            class="img-fluid rounded"
          />
        </div>

        <div class="col-md-6">
          <p class="text-primary fw-bold mb-2">Why Choose Us?</p>
          <h4 class="mb-4">We bring solutions to make life easier.</h4>

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

    <div class="container py-5">
      <div class="row align-items-stretch">
        <div class="col-4 d-flex">
          <div class="container py-5 my-auto">
            <p class="text-primary fw-bold">Company Facts</p>
            <h2 class="fw-bold">We are proud of our design team</h2>
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

    <div class="row row-cols-4 g-4">
      <!-- Team Member 1 -->
      <div class="col">
        <div class="card p-3 shadow-lg">
          <img
            src="/team1.jpg"
            class="img-fluid rounded-circle mb-3 w-50"
            alt="team-1"
          />
          <h5>Coriss Ambady</h5>
          <p class="fw-semibold">Financial Analyst</p>
          <p class="text-muted">
            Fermentum massa justo sit amet risus morbi leo.
          </p>
          <nav class="nav ">
            <a href="#" class="nav-link text-primary"
              ><i class="bi bi-twitter"></i
            ></a>
            <a href="#" class="nav-link text-primary"
              ><i class="bi bi-facebook"></i
            ></a>
          </nav>
        </div>
      </div>

      <!-- Team Member 2 -->
      <div class="col">
        <div class="card p-3 shadow-lg">
          <img
            src="/team2.jpg"
            class="img-fluid rounded-circle mb-3 w-50"
            alt="team-2"
          />
          <h5>Cory Zamora</h5>
          <p class="fw-semibold">Marketing Specialist</p>
          <p class="text-muted">
            Fermentum massa justo sit amet risus morbi leo.
          </p>
          <nav class="nav ">
            <a href="#" class="nav-link text-primary"
              ><i class="bi bi-twitter"></i
            ></a>
            <a href="#" class="nav-link text-primary"
              ><i class="bi bi-facebook"></i
            ></a>
          </nav>
        </div>
      </div>

      <div class="col">
        <div class="card p-3" shadow-lg>
          <img
            src="/team3.jpg"
            class="img-fluid rounded-circle mb-3 w-50"
            alt="team-2"
          />
          <h5>Nikolas Brooten</h5>
          <p class="fw-semibold">Sales Manager</p>
          <p class="text-muted">
            Fermentum massa justo sit amet risus morbi leo.
          </p>
          <nav class="nav ">
            <a href="#" class="nav-link text-primary"
              ><i class="bi bi-twitter"></i
            ></a>
            <a href="#" class="nav-link text-primary"
              ><i class="bi bi-facebook"></i
            ></a>
          </nav>
        </div>
      </div>

      <div class="col">
        <div class="card p-3 shadow-lg ">
          <img
            src="/team4.jpg"
            class="img-fluid rounded-circle mb-3 w-50"
            alt="team-2"
          />
          <h5>Jackie Sanders</h5>
          <p class="fw-semibold">Investment Planner</p>
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

  <!-- Phần Project -->
  <section class="hero py-5">
    <div class="text-center">
      <p class="fw-bold text-primary">Latest Projects</p>
      <h2 class="fw-bold w-50 mx-auto">
        Check out some of our awesome projects with creative ideas and great
        design.
      </h2>
    </div>

    <div class="container mx-auto">
      <Swiper
        :modules="[Navigation, Autoplay]"
        :slides-per-view="1"
        :space-between="30"
        :loop="true"
        :autoplay="{ delay: 3000 }"
        :breakpoints="{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }"
        :pagination="{ clickable: true }"
        navigation
        class="my-12 max-w-6xl mx-auto"
      >
        <SwiperSlide v-for="(item, i) in projects" :key="i" class="p-4">
          <div class="overflow-hidden rounded-2xl  group bg-white">
            <!-- Hình ảnh -->
            <figure class="rounded-t-2xl overflow-hidden">
              <img
                :src="item.image"
                class="hero-swiper-img object-cover transform group-hover:scale-110 transition duration-500"
              />
            </figure>

            <!-- Tiêu đề & category -->
            <div class="p-5 text-left">
              <h2 class="text-xl font-semibold mb-2">
                <a href="#" class="hover:text-blue-600 transition" style="text-decoration: none;">
                  {{ item.title }}
                </a>
              </h2>
              <p class="text-gray-500">{{ item.category }}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>

  <!-- Happy Customers -->

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

  <!-- FAQs -->

  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <p>FAQ</p>
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

<script setup>
import Button from "~/components/button.vue";
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";

// import CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// text rotation
const texts = ["3D animation", "mobile design", "web design"];
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

const projects = [
  { image: "/sp1.jpg", title: "Cras Fermentum Sem", category: "Mobile Design" },
  {
    image: "/sp2.jpg",
    title: "Venenatis Euismod Vehicula",
    category: "Web Design",
  },
  { image: "/sp3.jpg", title: "Tortor Tellus Cursus", category: "Stationary" },
  {
    image: "/sp4.jpg",
    title: "Ridiculus Sem Parturient",
    category: "Web Application",
  },
  {
    image: "/sp5.jpg",
    title: "Cursus Sollicitudin Adipiscing",
    category: "Web Design",
  },
  {
    image: "/sp6.jpg",
    title: "Fringilla Quam Vulputate",
    category: "Stationary",
  },
];

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

<style>
/* .rotator-fade {
  transition: all 0.5s ease;
} */

.img-hero-home {
  width: 618px;
  height: 432px;
}

.btn-text {
  background: none;
  border: none;
  color: inherit;
  padding: 0;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  overflow: hidden;
}

.btn-text::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: currentColor;
  transition: width 0.3s ease-in-out;
}

.btn-text:hover::after {
  width: 100%;
}
.swiper-pagination-bullet {
  background: #93c5fd !important;
  opacity: 1 !important;
}
.swiper-pagination-bullet-active {
  background: #2563eb !important;
}

.hero-swiper-img {
  width: 630px;
  height: 410px;
}

.testimonials .testimonial-card {
  border-radius: 1rem;
  transition: all 0.3s ease;
  background: #fff;
}

.testimonials .testimonial-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}

.testimonials blockquote p {
  font-size: 0.95rem;
  line-height: 1.6;
}

.testimonials img {
  object-fit: cover;
}

.testimonials .ratings.five::before {
  content: "★★★★★";
  font-size: 1rem;
  color: #f5b942; /* vàng gold */
  letter-spacing: 2px;
}

.accordion-wrapper .card {
  border: none;
  border-radius: 0.75rem;
  margin-bottom: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
}

.accordion-wrapper .card:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

.accordion-wrapper .card-header {
  background: #fff;
  padding: 0;
}

.accordion-wrapper .card-header button {
  width: 100%;
  text-align: left;
  padding: 1rem 1.25rem;
  font-weight: 500;
  font-size: 1rem;
  background: none;
  border: none;
  outline: none;
}

.accordion-wrapper .card-header button:focus {
  box-shadow: none;
}

.accordion-wrapper .card-body {
  padding: 1rem 1.25rem;
  font-size: 0.95rem;
  color: #555;
}
</style>
