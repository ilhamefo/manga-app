<template>
  <button
    type="button"
    class="
      mb-3
      mx-5
      px-8
      py-5
      flex
      items-center
      justify-between
      rounded-lg
      hover:bg-gray-800
      focus:bg-gray-900
      focus:outline-none
      transition
      bg-gray-900
    "
  >
    <div class="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 stroke-current text-blue-500 mr-3"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
      <div class="font-medium text-gray-400 text-sm">
        <slot name="title"></slot>
      </div>
    </div>
    <div class="flex items-center">
      <span class="text-sm mr-4">
        <slot name="chapter"></slot>
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 fill-current text-blue-600"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  </button>
</template>

<script>
export default {};
</script>

<style>
</style>
