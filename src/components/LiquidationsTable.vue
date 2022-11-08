<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import lptByChain from "../config/lptByChain";

// @ts-ignore
import liquidationsQuery from "../graphql/liquidations.gql";
import { useWeb3Store } from "../store";
import DoubleLogo from "./DoubleLogo.vue";

import { getIconUrl } from "../utils";

import dayjs from "dayjs";
import RelativeTimePlugin from "dayjs/plugin/relativeTime";
import { explorerUrls } from "../constants";
import ShortAddress from "./ShortAddress.vue";

dayjs.extend(RelativeTimePlugin);

// Store
const { chainId } = useWeb3Store();

// GraphQL
const { result, loading } = useQuery(
  liquidationsQuery,
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
    label: "Liquidator",
  },
  {
    label: "Debt",
  },
  {
    label: "Collateral",
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
        v-for="{
          id,
          timestamp,
          vault,
          debt,
          collateral,
          liquidator,
        } in result.liquidations"
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
            <ShortAddress :address="id" />
          </a>
        </td>
        <td>
          <div class="flex space-x-2 items-center">
            <jazzicon :diameter="20" :address="liquidator" />
            <a
              class="mb-0.5"
              :href="explorerUrls[chainId] + '/address/' + liquidator"
              target="_blank"
            >
              <ShortAddress :address="liquidator" />
            </a>
          </div>
        </td>
        <td>
          <div class="flex space-x-1.5 items-center">
            <img
              src="../assets/und.webp"
              alt="UND"
              class="rotate-90"
              width="16"
            />
            <span>{{ debt / 1e18 }}</span>
          </div>
        </td>
        <td>
          <div class="flex space-x-1.5 items-center">
            <DoubleLogo
              :url0="getIconUrl(lptByChain[chainId][vault.id].token0)"
              :url1="getIconUrl(lptByChain[chainId][vault.id].token1)"
              :width="18"
            />
            <span>{{ collateral / 1e18 }}</span>
          </div>
        </td>
        <td>{{ dayjs(timestamp * 1000).from(dayjs()) }}</td>
      </tr>
    </tbody>
  </table>
</template>
