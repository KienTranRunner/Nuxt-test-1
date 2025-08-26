<template>
    
  <div class="container py-5">
    <div class="row align-items-center py-5">
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

      <div class="col-lg-6 text-center">
        <img src="/heroHome.png" loading="lazy" class="img-fluid" />
      </div>
    </div>
  </div>



</template>
  
<script setup>
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