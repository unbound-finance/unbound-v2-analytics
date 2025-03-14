<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import { useMemoize } from "@vueuse/core";
import { useWeb3Store } from "../store";

// @ts-ignore
import vaultsQuery from "../graphql/vaults.gql";
import { ref, watch } from "vue";
import BorrowingRateCard from "./BorrowingRateCard.vue";
import { getCollateralPrice } from "../utils";
import lptByChain from "../config/lptByChain";

// Store
const { chainId } = useWeb3Store();

// GraphQL
const { result, loading } = useQuery(
  vaultsQuery,
  {},
  { clientId: chainId.toString() }
);

const totalCollateral = ref(0);
const totalDebt = ref(0);
const totalVaults = ref(0);

const getPrice = useMemoize(async (lpAddress: string) => {
  return await getCollateralPrice(
    lptByChain[chainId][lpAddress].borrowOperations
  );
});

watch(result, () => {
  const length = result.value.vaults.length;

  // Considering only one factory
  totalVaults.value = result.value.factories[0].count;

  if (length === 0) return;

  result.value.vaults.forEach(async (vault: any) => {
    totalCollateral.value +=
      (vault.totalCollateral / 1e18) * (await getPrice(vault.id));
    totalDebt.value += vault.totalDebt / 1e18;
  });
});
</script>

<template>
  <div v-if="loading">Loading...</div>
  <div v-else class="w-full space-y-3 sm:(space-y-0 grid grid-cols-2 gap-5)">
    <div
      class="bg-white dark:bg-dark-800/90 rounded-xl p-6 flex flex-col justify-between"
    >
      <div>
        <h4 class="font-medium text-sm dark:(text-gray-400)">
          Collateral Locked
        </h4>
        <h1 class="mt-1 text-4xl">${{ totalCollateral.toFixed(2) }}</h1>
      </div>
      <div>
        <h4 class="font-medium text-sm dark:(text-gray-400)">
          Total Debt Taken
        </h4>
        <h1 class="mt-1 text-4xl">
          <div class="flex space-x-2.5 items-center">
            <img
              src="../assets/und.webp"
              alt="UND"
              class="rotate-90"
              width="26"
            />
            <span>{{ parseFloat(totalDebt.toFixed(4)) }}</span>
          </div>
        </h1>
      </div>
      <div>
        <h4 class="font-medium text-sm dark:(text-gray-400)">Total Vaults</h4>
        <h1 class="mt-1 text-4xl">{{ totalVaults }}</h1>
      </div>
    </div>

    <BorrowingRateCard />
  </div>
</template>
