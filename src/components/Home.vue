<script lang="ts" setup>
import Dashboard from "./Dashboard.vue";
import LiquidationsTable from "./LiquidationsTable.vue";
import RedemptionsTable from "./RedemptionsTable.vue";
import TransactionsTable from "./TransactionsTable.vue";
</script>

<template>
  <div class="px-8 md:px-20 pb-10 overflow-auto">
    <h4 class="mt-10 text-md font-medium dark:(text-gray-400)">
      Unbound v2 Analytics
    </h4>

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
