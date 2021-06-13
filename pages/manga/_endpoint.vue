<template>
  <div class="flex flex-col items-start bg-gray-800 w-full min-h-screen h-full">
    <!-- Ahoy {{ thumb }} -->
    <div class="w-8/12 flex flex-col mt-14">
      <div class="flex">
        <div
          class="w-80 h-96 rounded-xl overflow-hidden mr-10"
          :class="[thumb !== null ? '' : 'bg-gray-600 animate-pulse']"
        >
          <img
            v-if="thumb !== null"
            :src="thumb"
            :alt="`${details.title} Thumbnail`"
            class="object-cover w-full"
          />
        </div>
        <div class="flex-1 flex flex-col">
          <div class="text-4xl font-semibold">{{ details.title }}</div>
          <div class="flex items-center mt-3">
            <div class="text-gray-500 font-medium capitalize">
              Alternative Title :
            </div>
            <div class="ml-2 font-semibold capitalize">{{ details.title }}</div>
          </div>
          <div class="flex items-center mt-1">
            <div class="text-gray-500 font-medium capitalize">Type :</div>
            <div class="ml-2 font-semibold capitalize">{{ details.type }}</div>
          </div>
          <div class="flex items-center mt-1">
            <div class="text-gray-500 font-medium capitalize">Author :</div>
            <div class="ml-2 font-semibold capitalize">
              {{ details.author }}
            </div>
          </div>
          <div class="flex items-center mt-1">
            <div class="text-gray-500 font-medium capitalize">Status :</div>
            <div class="ml-2 font-semibold capitalize">
              {{ details.status }}
            </div>
          </div>
          <div class="flex items-center mt-1">
            <div class="text-gray-500 font-medium capitalize">Genre :</div>
            <div class="ml-2 font-semibold capitalize">
              <span
                v-for="(item, i) in details.genre_list"
                :key="i"
                class="mx-1"
              >
                {{ item.genre_name }}
              </span>
            </div>
          </div>
          <div class="flex items-start mt-1">
            <div class="text-gray-500 font-medium capitalize">Sinopsis</div>
            <div class="ml-2 font-semibold capitalize">
              {{ details.synopsis }}
            </div>
          </div>
        </div>
      </div>
      <div class="flex-col flex mt-14 bg-gray-700 rounded-lg">
        <div
          class="
            w-full
            flex
            items-center
            justify-between
            bg-gray-900
            px-8
            py-3
            rounded-t-lg
          "
        >
          <div class="font-semibold">Chapters</div>
          <div class="flex items-center">
            <button
              type="button"
              class="
                flex
                items-center
                bg-yellow-300
                px-2
                py-1
                rounded-lg
                text-gray-900
                focus:outline-none
                focus:bg-yellow-400
                hover:bg-yellow-200
                transition
              "
            >
              <span class="mr-1 font-semibold">Urutkan</span>
              <span class=""
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 fill-current text-gray-900"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z"
                  /></svg
              ></span>
            </button>
          </div>
        </div>

        <!-- chapters start -->
        <button
          type="button"
          class="
            my-2
            mx-5
            px-8
            py-3
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
              Tokyo卍Revengers
            </div>
          </div>
          <div class="flex items-center">
            <span class="text-sm mr-4"> Tokyo卍Revengers Chapter 182 </span>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      details: [],
      thumb: null,
    };
  },
  mounted() {
    this.$axios
      .get(
        `https://mangamint.kaedenoki.net/api/manga/detail/${this.$route.params.endpoint}`
      )
      .then((_) => {
        this.details = _.data;
        this.thumb = _.data.thumb.split("?")[0];
      });
  },
};
</script>

<style>
</style>
