<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";

// @ts-ignore
import txnsQuery from "../graphql/transactions.gql";

const { result } = useQuery(txnsQuery);

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
  {
    label: "Time",
  },
];
</script>
<template>
  <table>
    <tr>
      <th v-for="{ label } in columns" :key="label">{{ label }}</th>
    </tr>
    <tr>
      {{
        result
      }}
    </tr>
  </table>
</template>

<style>
table {
  @apply p-5 bg-dark-500/80 w-full rounded-xl;
}
table tr {
  @apply text-left;
}
table th {
  @apply text-base font-medium;
}
</style>
/
