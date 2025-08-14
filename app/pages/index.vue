<template>
  <div class="container">
    <div class="row">
      <div class="col-4">
        <h1>A digital agency specializing on</h1>
        <span
          :key="animationKey"
          class="animate__animated animate__fadeInDown rotator-fade text-primary"
          style="display: inline-block"
        >
          {{ currentText }}
        </span>
      </div>

      <div class="col-8"></div>
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
        index = (index + 1 ) % texts.length;
        currentText.value = texts[index];
        animationKey.value++;
    }, 2000);
})

</script>

<style>
/* .rotator-fade {
  transition: all 0.5s ease;
} */
</style>
