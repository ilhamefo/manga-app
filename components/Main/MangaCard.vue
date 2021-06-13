<template>
  <NuxtLink
    :to="`/manga/${item.endpoint}`"
    class="
      cursor-pointer
      bg-cover bg-center
      h-80
      w-60
      rounded-md
      flex flex-col
      justify-between
      overflow-hidden
      mr-3
    "
    :style="{
      'background-image': `url(${item.thumb})`,
    }"
  >
    <div
      class="
        px-2
        py-3
        flex
        items-center
        justify-between
        w-full
        bg-gradient-to-b
        from-black
      "
    >
      <div class="rounded-md bg-gray-700 px-2 py-1 text-xs">Manga</div>
      <div class="flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 fill-current text-red-400"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </div>
    </div>
    <div
      class="
        flex flex-col
        justify-between
        w-full
        bg-gradient-to-t
        from-black
        px-2
        py-3
      "
    >
      <div class="px-2 text-base font-semibold line-clamp-2">
        {{ item.title }}
      </div>

      <div class="px-2 text-sm text-gray-300">
        <slot></slot>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: ["item"],
  methods: {},
};
</script>

<style>
</style>
