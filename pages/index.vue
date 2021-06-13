<template>
  <div class="flex flex-col items-start bg-gray-800 w-full min-h-screen h-full">
    <!-- header router -->
    <HeaderRouter />

    <!-- manga list section -->
    <MangaSection>
      <template #name>{{ "Recommended" }}</template>
      <template #cards v-if="manga.recommended.length > 0">
        <VueSlickCarousel v-bind="settings">
          <div v-for="(item, i) in manga.recommended" :key="i" class="px-5">
            <MainMangaCard :item="manga.recommended[i]" />
          </div>
        </VueSlickCarousel>
      </template>
    </MangaSection>

    <MangaSection>
      <template #name>{{ "Latest Update" }}</template>
      <template #cards v-if="manga.latest.length > 0">
        <VueSlickCarousel v-bind="settings">
          <div v-for="(item, i) in manga.latest" :key="i" class="px-5">
            <MangaCard :item="manga.latest[i]">
              <template>{{ item.chapter }}</template>
            </MangaCard>
          </div>
        </VueSlickCarousel>
      </template>
    </MangaSection>
  </div>
</template>

<script>
import { mapState } from "vuex";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import MangaSection from "~/components/Main/MangaSection.vue";
import MangaCard from "~/components/Main/MangaCard.vue";
export default {
  components: { MangaSection, VueSlickCarousel, MangaCard },
  computed: {
    ...mapState(["manga"]),
  },
  data() {
    return {
      settings: {
        dots: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 3,
        touchThreshold: 5,
      },
    };
  },
  mounted() {
    this.$store.dispatch("manga/getRecommended");
    this.$store.dispatch("manga/getLatest");
  },
};
</script>

<style>
</style>
