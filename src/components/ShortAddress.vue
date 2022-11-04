<script setup lang="ts">
defineProps<{
  address: string;
}>();
</script>
<template>
  {{ address.substring(0, 5) + "..." + address.substring(address.length - 5) }}
</template>
