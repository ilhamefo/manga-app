<template>
  <div class="flex items-start bg-gray-800 w-full min-h-screen h-full">
    <div class="w-9/12 flex flex-col mt-14">
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
        <div class="flex-1 flex flex-col" v-if="isEmpty(details)">
          <div
            class="h-10 w-1/3 bg-gray-600 rounded-full animate-pulse mb-5"
          ></div>
          <div
            class="h-4 w-1/2 bg-gray-600 rounded-full animate-pulse mb-3"
          ></div>
          <div
            class="h-4 w-1/3 bg-gray-600 rounded-full animate-pulse mb-3"
          ></div>
          <div
            class="h-4 w-1/4 bg-gray-600 rounded-full animate-pulse mb-3"
          ></div>
          <div
            class="h-4 w-2/3 bg-gray-600 rounded-full animate-pulse mb-3"
          ></div>
          <div
            class="h-4 w-2/3 bg-gray-600 rounded-full animate-pulse mb-3"
          ></div>
        </div>
        <div class="flex-1 flex flex-col" v-else>
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
            <div class="ml-2 font-semibold capitalize flex items-center">
              <NuxtLink
                :to="`/genre/${item.genre_name
                  .replace(' ', '-')
                  .toLowerCase()}`"
                v-for="(item, i) in details.genre_list"
                :key="i"
                class="
                  mx-1
                  bg-yellow-600
                  px-2
                  py-1
                  text-xs
                  rounded-lg
                  w-max
                  line-clamp-1
                  cursor-pointer
                  hover:bg-yellow-700
                  transition
                "
              >
                {{ item.genre_name }}
              </NuxtLink>
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
      <div
        v-if="isEmpty(details)"
        class="mt-14 w-full flex h-12 bg-gray-600 animate-pulse rounded-lg"
      ></div>
      <div
        v-else
        class="
          flex-col flex
          mt-14
          bg-gray-700
          rounded-lg
          max-h-96
          overflow-y-auto
        "
      >
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
            mb-3
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
        <chapter-button v-for="(item, i) in details.chapter" :key="i">
          <template #title>{{ details.title }}</template>
          <template #chapter>{{ item.chapter_title }}</template>
        </chapter-button>
      </div>
    </div>
    <div class="w-3/12 mt-14 pl-10">
      <div
        v-if="!related.length > 0"
        class="
          flex flex-col
          bg-gray-900
          px-5
          py-4
          h-72
          rounded-xl
          animate-pulse
          mb-5
        "
      >
        <!--  -->
      </div>
      <div v-else class="flex flex-col bg-gray-900 px-5 py-4 rounded-xl">
        <div class="mb-5">Related</div>
        <RelatedCard v-for="i in 10" :key="i" :item="related[i]" />
      </div>
    </div>
  </div>
</template>

<script>
import ChapterButton from "~/components/Main/ChapterButton.vue";
import RelatedCard from "~/components/Main/RelatedCard.vue";
export default {
  components: { ChapterButton, RelatedCard },
  data() {
    return {
      details: {},
      thumb: null,
      genres: null,
      related: [],
    };
  },
  methods: {
    isEmpty(obj) {
      return Object.keys(obj).length === 0;
    },

    getDetails() {
      this.$axios
        .get(
          `https://mangamint.kaedenoki.net/api/manga/detail/${this.$route.params.endpoint}/`
        )
        .then((_) => {
          this.details = _.data;
          this.thumb = _.data.thumb.split("?")[0];
          this.genres = _.data.genre_list[0].genre_name
            .toLowerCase()
            .replace(" ", "-");

          this.getGenresManga(this.genres);
        });
    },

    getGenresManga(genre) {
      this.$axios
        .get(`https://mangamint.kaedenoki.net/api/genres/${genre}/1`)
        .then((_) => {
          this.related = _.data.manga_list;
        });
    },
  },
  mounted() {
    this.getDetails();
  },
};
</script>

<style>
</style>
