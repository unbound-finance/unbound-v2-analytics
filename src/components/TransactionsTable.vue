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
import ShortAddress from "./ShortAddress.vue";

dayjs.extend(RelativeTimePlugin);

// Store
const { chainId } = useWeb3Store();

// GraphQL
const { result, loading } = useQuery(
  txnsQuery,
  {},
  { clientId: chainId.toString() }
);

const columns = [
  {
    label: "Vault",
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
    <tbody v-if="loading">
      Loading...
    </tbody>
    <tbody v-else>
      <tr
        v-for="{ id, type, timestamp, vault } in result.transactions"
        :key="id"
        class="p-5"
      >
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
