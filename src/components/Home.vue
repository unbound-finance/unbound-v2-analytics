<script lang="ts" setup>
import TransactionsTable from './TransactionsTable.vue'
</script>

<template>
  <div class="w-screen px-8 md:px-20">
    <h4 class="mt-10 text-md font-medium dark:(text-gray-400)">
      Unbound v2 Analytics
    </h4>

    <div class="mt-5 w-full space-y-3 sm:(space-y-0 grid grid-cols-2 gap-5)">
      <div class="flex flex-col space-y-3 justify-between">
        <div class="bg-white dark:bg-dark-500/80 rounded-xl p-5">
          <h4 class="font-medium text-sm dark:(text-gray-400)">
            Collateral Locked
          </h4>
          <h1 class="mt-1">$100,344</h1>
        </div>
        <div class="bg-white dark:bg-dark-500/80 rounded-xl p-5">
          <h4 class="font-medium text-sm dark:(text-gray-400)">
            Total Debt Taken
          </h4>
          <h1 class="mt-1">4000 UNB</h1>
        </div>
        <div class="bg-white dark:bg-dark-500/80 rounded-xl p-5">
          <h4 class="font-medium text-sm dark:(text-gray-400)">
            Total Accounts
          </h4>
          <h1 class="mt-1">2844</h1>
        </div>
      </div>

      <div class="bg-white dark:bg-dark-500/80 min-h-xs rounded-xl p-5">
        <h4 class="font-medium text-sm dark:(text-gray-400)">Borrowing rate</h4>
        <h1>$34.53</h1>
      </div>
    </div>

    <section>
      <h4 class="mt-10 text-md font-medium dark:(text-gray-400)">
        Latest Transactions
      </h4>
      <TransactionsTable />
    </section>
  </div>
</template>
