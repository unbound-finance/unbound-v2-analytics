<script lang="ts" setup></script>

<template>
  <div class="w-screen px-20">
    <!-- <div
      class="pt-10 bg-blue-600 px-5 pb-30 md:(flex items-center justify-between)"
    >
      <div class="font-mont font-light rounded p-5">
        <h1>
          <span class="text-lg md:text-2xl text-true-gray-300">Unbound v2</span><br />
          <span class="gradient-text text-5xl md:text-7xl font-bold">Analytics</span>
        </h1>
      </div>
      <div class="pr-10 text-right">Dark mode</div>
    </div> -->

    <h4 class="mt-10 text-md font-medium dark:(text-gray-400)">
      Unbound v2 Analytics
    </h4>
    <div class="mt-5 w-full space-y-3 sm:(space-y-0 grid grid-cols-2 gap-5)">
      <div class="bg-white dark:bg-dark-500/80 min-h-xs rounded-xl p-5">
        <h4 class="font-medium text-sm dark:(text-gray-400)">
          Collateral Locked
        </h4>
        <h1 class="mt-1">$100,344</h1>
      </div>
      <div class="bg-white dark:bg-dark-500/80 min-h-xs rounded-xl p-5">
        <h4 class="font-medium text-sm dark:(text-gray-400)">
          Borrowing rate
        </h4>
        <h1>$34.53</h1>
      </div>
    </div>
  </div>
</template>
