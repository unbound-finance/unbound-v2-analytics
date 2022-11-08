<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import lptByChain from "../config/lptByChain";

// @ts-ignore
import txnsQuery from "../graphql/transactions.gql";
import { useWeb3Store } from "../store";
import DoubleLogo from "./DoubleLogo.vue";

import { getIconUrl } from "../utils";

import dayjs from "dayjs";
import RelativeTimePlugin from "dayjs/plugin/relativeTime";
import { explorerUrls, txnType } from "../constants";
import ChevronUpIcon from "vue-material-design-icons/ChevronUp.vue";
import ChevronDownIcon from "vue-material-design-icons/ChevronDown.vue";
import ShortAddress from "./ShortAddress.vue";
import { ref, watch } from "vue";

dayjs.extend(RelativeTimePlugin);

// Store
const { chainId } = useWeb3Store();

const orderBy = ref("timestamp");
const orderDirection = ref("desc");
const txns = ref([] as any[]);

const columns = [
  {
    label: "Vault",
  },
  {
    label: "Transaction",
  },
  {
    label: "Type",
    value: "type",
    sortable: true,
  },
  {
    label: "Time",
    value: "timestamp",
    sortable: true,
  },
];

// If column names are sorted or not
const sorted = {
  type: false,
  time: false,
} as Record<string, boolean>;

// GraphQL
const { result, loading, variables } = useQuery(
  txnsQuery,
  {
    orderBy: orderBy.value,
    orderDirection: orderDirection.value,
  },
  { clientId: chainId.toString() }
);

watch(result, () => {
  txns.value = result.value.transactions;
});

function sort(column: string, value: string) {
  // Update Query variables. Will trigger a refetch
  variables.value = {
    orderBy: value,
    orderDirection: !sorted[column] ? "asc" : "desc",
  };

  sorted[column] = !sorted[column];

  // Set all others to false
  Object.keys(sorted).forEach((val) => {
    if (val === column) return;
    sorted[val] = false;
  });
}
</script>
<template>
  <table>
    <tr>
      <th v-for="{ label, sortable, value } in columns" :key="label">
        <div
          class="flex"
          :class="sortable ? 'cursor-pointer' : ''"
          @click="sortable && sort(label.toLowerCase(), value ?? '')"
        >
          <span>{{ label }}</span>
          <component
            v-if="sortable"
            :is="sorted[label.toLowerCase()] ? ChevronUpIcon : ChevronDownIcon"
          />
        </div>
      </th>
    </tr>
    <tbody v-if="loading">
      Loading...
    </tbody>
    <tbody v-else>
      <tr v-for="{ id, type, timestamp, vault } in txns" :key="id" class="p-5">
        <td class="min-w-[8rem]">
          <div class="flex items-center space-x-2">
            <DoubleLogo
              :url0="getIconUrl(lptByChain[chainId][vault.id].token0)"
              :url1="getIconUrl(lptByChain[chainId][vault.id].token1)"
              :width="24"
            />
            <div>
              <p class="font-bold text-xs md:text-sm">
                {{ lptByChain[chainId][vault.id].name }}
              </p>
              <p class="text-xs dark:(text-gray-400)">
                {{ lptByChain[chainId][vault.id].exchange }}
              </p>
            </div>
          </div>
        </td>
        <td>
          <a :href="explorerUrls[chainId] + '/tx/' + id" target="_blank">
            <ShortAddress :address="id"
          /></a>
        </td>
        <td>
          <span class="border border-gray-500 text-sm p-2 px-3 rounded-xl">{{
            txnType[type]
          }}</span>
        </td>
        <td>{{ dayjs(timestamp * 1000).from(dayjs()) }}</td>
      </tr>
    </tbody>
  </table>
</template>
