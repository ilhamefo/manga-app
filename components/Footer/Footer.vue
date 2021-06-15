<template>
  <div class="flex flex-col w-full mt-10 bg-gray-900 px-10 py-4 rounded-lg">
    <div class="flex items-center justify-between">
      <SocialMedia></SocialMedia>
      <div class="flex items-center">
        <div class="font-semibold text-lg ml-10 text-gray-200">Support Us</div>
        <div class="font-semibold text-lg ml-10 text-gray-200">About Us</div>
        <div class="font-semibold text-lg ml-10 text-gray-200">Contact</div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialMedia from "./SocialMedia.vue";
export default {
  components: { SocialMedia },
};
</script>

<style>
</style>
