<script setup lang="ts">
defineProps<{
  url0: string;
  url1: string;
  width?: number;
}>();

const defaultWidth = 22;

function onImageError(event: any) {
  event.target.src = "/ban.svg";
}
</script>

<template>
  <div className="flex items-center -space-x-3">
    <img
      :src="url0"
      @error="
        {
          onImageError;
        }
      "
      :width="width || defaultWidth"
    />
    <img
      :src="url1"
      @error="
        {
          onImageError;
        }
      "
      :width="width || defaultWidth"
    />
  </div>
</template>
