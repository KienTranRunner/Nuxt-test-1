<script setup lang="ts">
import Navbar from "~/components/default/Navbar.vue";
import Footer from "~/components/default/Footer.vue";
</script>

<template>
  <Navbar />

  <main>
    <slot />
  </main>

  <Footer />
</template>
