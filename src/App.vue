<script setup lang="ts">
import Home from "./components/Home.vue";
import Navbar from "./components/Navbar.vue";

import { ApolloClients } from "@vue/apollo-composable";
import { provide } from "vue";
import { getApolloClient } from "./graphql";
import { chainIdMapping } from "./constants";

const apolloOptions = {
  default: getApolloClient(5),
} as Record<string, any>;

Object.keys(chainIdMapping).forEach((key) => {
  apolloOptions[+key] = getApolloClient(+key);
});

provide(ApolloClients, apolloOptions);
</script>

<template>
  <div class="w-full font-inter dark overflow-hidden">
    <div
      class="radial-gradient w-full min-h-screen bg-true-gray-100 dark:(text-white)"
    >
      <!-- <Navbar /> -->
      <Home />
    </div>
  </div>
</template>

<style scoped></style>
