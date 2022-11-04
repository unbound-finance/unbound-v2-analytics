<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import { useWeb3Store } from "../store";

// @ts-ignore
import vaultsQuery from "../graphql/vaults.gql";
import { ref, watch } from "vue";

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
const totalAccounts = ref(0);

watch(result, () => {
  const length = result.value.vaults.length;
  totalAccounts.value = length;
  if (length === 0) return;

  result.value.vaults.forEach((vault: any) => {
    totalCollateral.value += vault.totalCollateral / 1e18;
    totalDebt.value += vault.totalDebt / 1e18;
  });
});
</script>

<template>
  <div v-if="loading">Loading...</div>
  <div v-else class="w-full space-y-3 sm:(space-y-0 grid grid-cols-2 gap-5)">
    <div class="flex flex-col space-y-3 justify-between">
      <div class="bg-white dark:bg-dark-500/80 rounded-xl p-5">
        <h4 class="font-medium text-sm dark:(text-gray-400)">
          Collateral Locked
        </h4>
        <h1 class="mt-1">{{ totalCollateral }}</h1>
      </div>
      <div class="bg-white dark:bg-dark-500/80 rounded-xl p-5">
        <h4 class="font-medium text-sm dark:(text-gray-400)">
          Total Debt Taken
        </h4>
        <h1 class="mt-1">{{ totalDebt }}</h1>
      </div>
      <div class="bg-white dark:bg-dark-500/80 rounded-xl p-5">
        <h4 class="font-medium text-sm dark:(text-gray-400)">Total Accounts</h4>
        <h1 class="mt-1">{{ totalAccounts }}</h1>
      </div>
    </div>

    <div class="bg-white dark:bg-dark-500/80 min-h-xs rounded-xl p-5">
      <h4 class="font-medium text-sm dark:(text-gray-400)">Borrowing rate</h4>
      <h1>$34.53</h1>
    </div>
  </div>
</template>
