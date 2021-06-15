<template>
  <div
    class="
      flex flex-col
      items-start
      bg-gray-800
      w-full
      min-h-screen
      h-full
      mt-14
    "
  >
    <div class="grid grid-cols-7 gap-4">
      <MainMangaCard v-for="(item, i) in result" :key="i" :item="item" />
    </div>
    <div class="flex justify-center items-center w-full mt-10">
      <button
        type="button"
        v-if="page != 1"
        @click="page--"
        class="
          focus:outline-none
          mx-3
          bg-yellow-500
          hover:bg-yellow-600
          px-2
          py-1
          text-xs
          rounded-lg
          text-gray-800
          font-semibold
          flex
          items-center
          transition
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z"
          />
        </svg>
        <span class="ml-1">Back</span>
      </button>
      <button
        type="button"
        @click="page++"
        class="
          focus:outline-none
          mx-3
          bg-yellow-500
          hover:bg-yellow-600
          px-2
          py-1
          text-xs
          rounded-lg
          text-gray-800
          font-semibold
          flex
          items-center
          transition
        "
      >
        <span class="mr-1">Next</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: [],
      page: 1,
    };
  },
  mounted() {
    const genre = this.$route.params.genre;
    this.$axios
      .get(`https://mangamint.kaedenoki.net/api/genres/${genre}/${this.page}`)
      .then((_) => {
        this.result = _.data.manga_list;
      })
      .catch((_) => {
        console.log(_);
      });
  },
};
</script>

<style>
</style>
