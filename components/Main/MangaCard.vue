<template>
  <div
    class="
      cursor-pointer
      bg-cover bg-center
      h-80
      w-60
      rounded-md
      flex flex-col
      justify-between
      overflow-hidden
    "
    :style="{
      'background-image':
        'url(https://cover.komiku.id/wp-content/uploads/2020/09/Manga-Tokyo-Revengers.jpg?w=225&quality=60)',
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
      <div class="px-2 text-base">Tokyo卍Revengers</div>
      <div class="px-2 text-sm text-gray-300">Chapter 180</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
