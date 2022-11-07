<script lang="ts" setup>
import Dashboard from "./Dashboard.vue";
import LiquidationsTable from "./LiquidationsTable.vue";
import RedemptionsTable from "./RedemptionsTable.vue";
import TransactionsTable from "./TransactionsTable.vue";
</script>

<template>
  <div class="px-8 md:px-20 pb-10 overflow-auto max-w-screen-2xl mx-auto">
    <!-- <h4 class="mt-10 text-md font-medium dark:(text-gray-400)">
      Unbound v2 Analytics
    </h4> -->

    <header class="mt-15 mb-10 flex justify-between items-center">
      <div>
        <h3 class="font-akira">
          Unbound <span class="font-bold gradient-text">V2</span>
        </h3>
        <h1 class="font-akira">Analytics</h1>
      </div>

      <div class="pr-2">
        <span class="border border-white text-sm p-2 px-4 rounded-full">Goerli</span>
      </div>
    </header>

    <Dashboard class="mt-5" />

    <section>
      <h4 class="mt-10 text-md font-medium dark:(text-gray-400)">
        Latest Transactions
      </h4>
      <TransactionsTable class="mt-5" />

      <h4 class="mt-10 text-md font-medium dark:(text-gray-400)">
        Latest Liquidations
      </h4>
      <LiquidationsTable class="mt-5" />

      <h4 class="mt-10 text-md font-medium dark:(text-gray-400)">
        Latest Redemptions
      </h4>
      <RedemptionsTable class="mt-5" />
    </section>
  </div>
</template>
