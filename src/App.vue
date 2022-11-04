<script setup lang="ts">
import Home from "./components/Home.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="w-full font-inter dark">
    <div class="w-full min-h-screen bg-true-gray-100 dark:(text-white bg-blue-500/50 bg-gradient-to-b from-cyan-700 via-dark-100 to-black)">
      <Navbar />
      <Home />
    </div>
  </div>
</template>

<style scoped></style>
