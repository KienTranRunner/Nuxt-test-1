<template>
  <!-- Phần Hero -->
  <div class="container">
    <div class="row">
      <div class="col-5">
        <h1>A digital agency specializing on</h1>
        <span
          :key="animationKey"
          class="animate__animated animate__fadeInDown rotator-fade text-primary"
          style="display: inline-block"
        >
          {{ currentText }}
        </span>

        <p class="">
          We are an award winning design agency that strongly believes in the
          power of creative ideas.
        </p>

        <Button label="Get Started" to="#" variant="btn-primary" />
      </div>

      <div class="col-7">
        <img src="/heroHome.png" loading="lazy" class="img-hero-home" />
      </div>
    </div>
  </div>

  <!-- Phần icon -->
  <div class="container">
    <p class="text-center">Trusted by over 2K+ clients across the world</p>

    <div class="row row-cols-7">
      <div class="col">
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
  <div class="container">
    <div>
      <p class="text-center text-uppercase">What We Do?</p>

      <h3 class="text-center">
        The service we offer is specifically designed to meet your needs.
      </h3>

      <div class="container py-5">
        <div class="row text-center g-4">
          <div class="col-md-4">
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

          <div class="col-md-4">
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

          <div class="col-md-4">
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

      <!-- Chiến lược của chúng tôi -->
      <div class="container">
        <div class="row">
          <div class="col-6">
            <p>Our Strategy</p>
            <h4>Here are 3 working steps to organize our projects.</h4>

            <p>
              Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
              vestibulum. Etiam porta sem malesuada magna mollis euismod. Nullam
              id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus
              eget urna mollis.
            </p>

            <p>
              Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum
              id ligula porta felis euismod semper. Aenean lacinia bibendum
              nulla sed consectetur.
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
    </div>
  </div>
</template>

<script setup>
import Button from "~/components/button.vue";

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
</style>
