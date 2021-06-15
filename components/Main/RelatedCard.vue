<template>
  <NuxtLink
    :to="`/manga/${item.endpoint}`"
    class="
      mb-4
      bg-gray-800
      hover:bg-gray-700
      rounded-md
      overflow-hidden
      flex
      justify-between
      items-start
      cursor-pointer
      transition-colors
    "
  >
    <div class="flex items-center">
      <div class="relative h-16 w-max flex-shrink-0">
        <img :src="item.thumb" :alt="item.title" class="h-16 z-0" />
      </div>
      <div class="flex flex-col justify-center ml-3 h-16">
        <div class="font-medium text-gray-200 line-clamp-1">
          {{ item.title }}
        </div>
        <div class="text-gray-500 text-sm">{{ item.type }}</div>
      </div>
    </div>
    <div class="flex items-center h-16 mr-3">
      <div class="text-xs font-medium">View</div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style>
</style>
