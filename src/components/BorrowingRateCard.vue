<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import { ApexOptions } from "apexcharts";
import { onMounted, reactive, ref, watch } from "vue";
import { BORROWING_FEE_FLOOR } from "../constants";

// @ts-ignore
import baseRatesQuery from "../graphql/baseRates.gql";
import { useWeb3Store } from "../store";
import { BaseRate } from "../types";

const { chainId } = useWeb3Store();

const { result, loading } = useQuery(
  baseRatesQuery,
  {},
  { clientId: chainId.toString() }
);

const currentBaseRate = ref("0");

watch(result, () => {
  const baseRates = (result.value.baseRates as BaseRate[])
    .slice()
    .sort((a, b) => +a.timestamp - +b.timestamp);

  console.log({ baseRates });
  currentBaseRate.value = (
    +baseRates[baseRates.length - 1].rate / 1e18 +
    BORROWING_FEE_FLOOR
  ).toFixed(2);

  // Set chart values
  (options as any).xaxis.categories = baseRates.map((val) =>
    new Date(+val.timestamp * 1000).toLocaleDateString()
  );
  series.value[0].data = baseRates.map(
    (val) => +val.rate / 1e18 + BORROWING_FEE_FLOOR
  );
});

// Chart related data
let options: ApexOptions = reactive({
  theme: {
    mode: "dark",
    palette: "palette1",
  },
  legend: {
    show: false,
  },
  chart: {
    id: "borrowing-rate-chart",
    background: "transparent",
    toolbar: {
      show: false,
    },
  },
  grid: {
    show: false,
  },
  xaxis: {
    categories: [] as string[],
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
});

const series = ref([
  {
    name: "Borrowing Rate",
    data: [] as number[],
  },
]);
</script>

<template>
  <div class="bg-white dark:bg-dark-800/90 min-h-xs rounded-xl p-5">
    <template v-if="loading">Loading...</template>
    <template v-else>
      <h4 class="font-medium text-sm dark:(text-gray-400)">Borrowing rate</h4>
      <h1>{{ currentBaseRate }}%</h1>

      <apexchart height="250" type="line" :options="options" :series="series"></apexchart>
    </template>
  </div>
</template>
