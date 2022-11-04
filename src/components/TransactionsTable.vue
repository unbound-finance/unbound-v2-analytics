<script setup lang="ts">
const columns = [
  {
    label: "Pool Token",
  },
  {
    label: "Transaction",
  },
  {
    label: "Type",
  },
];
</script>
<template>
  <table>
    <tr>
      <th v-for="{ label } in columns" :key="label">{{ label }}</th>
    </tr>
  </table>
</template>

<style>
table{
    @apply p-5 bg-dark-500/80 w-full rounded-xl;
}
table tr{
    @apply text-left;
}
table th{
    @apply text-base font-medium;
}
</style>/
