<template>
  <div
    class="
      flex flex-col
      items-start
      bg-gray-800
      w-full
      h-screen
      px-20
      py-5
      text-gray-100
    "
  >
    <!-- header section -->
    <Header />

    <!-- header router -->
    <HeaderRouter />

    <!-- manga list section -->
    <MangaSection />
  </div>
</template>

<script>
import MangaSection from "~/components/Main/MangaSection.vue";
export default {
  components: { MangaSection },
};
</script>

<style>
</style>
