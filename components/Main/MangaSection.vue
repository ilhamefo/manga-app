<template>
  <div class="flex flex-col justify-center mt-10">
    <div class="flex items-center justify-between">
      <div class="text-2xl my-3 font-semibold">Continue Reading</div>
      <div class="flex items-center">
        <div
          class="
            flex
            items-center
            cursor-pointer
            hover:bg-gray-700
            rounded-md
            transition
            px-3
            py-1
            ml-5
          "
        >
          <div class="text-lg font-semibold mr-2">Order By</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 fill-current"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div
          class="
            flex
            items-center
            cursor-pointer
            hover:bg-gray-700
            rounded-md
            transition
            px-3
            py-1
            ml-5
          "
        >
          <div class="text-lg font-semibold mr-2">View More</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 fill-current"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
    <!-- manga list cards -->
    <div class="grid grid-cols-7 gap-6 mt-5">
      <MangaCard v-for="i in 10" :key="i" />
    </div>
  </div>
</template>

<script>
import MangaCard from "./MangaCard.vue";
export default {
  components: { MangaCard },
};
</script>

<style>
</style>
