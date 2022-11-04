<script setup lang="ts">
import Home from "./components/Home.vue";
import Navbar from "./components/Navbar.vue";

import { ApolloClients } from "@vue/apollo-composable";
import { provide } from "vue";
import { goerliClient } from "./graphql";

provide(ApolloClients, {
  default: goerliClient,
});
</script>

<template>
  <div class="w-full font-inter dark">
    <div
      class="w-full min-h-screen bg-true-gray-100 dark:(text-white bg-blue-500/50 bg-gradient-to-b from-light-blue-800 via-dark-100 to-dark-500)"
    >
      <Navbar />
      <Home />
    </div>
  </div>
</template>

<style scoped></style>
