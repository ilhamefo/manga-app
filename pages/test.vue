<template>
  <div class="left-52 m-7 w-11/12 bg-red-200">
    <VueSlickCarousel v-bind="settings">
      <div v-for="i in 8" :key="i" class="px-5"></div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "MyComponent",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: "20px",
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 6,
        speed: 500,
      },
    };
  },
};
</script>

<style>
</style>
