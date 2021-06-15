<template>
  <div class="flex items-center justify-between w-full">
    <div class="flex items-center">
      <NuxtLink to="/">
        <img
          :src="require('~/assets/icons/logo-manga.png')"
          class="w-44 mr-10"
        />
      </NuxtLink>
      <div class="flex items-center bg-gray-600 rounded-md overflow-hidden">
        <input
          type="text"
          class="
            focus:outline-none
            py-1.5
            px-4
            bg-gray-600
            text-gray-200
            placeholder-gray-200
          "
          placeholder="Search..."
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 stroke-current mr-4"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
    <div class="flex items-center">
      <div
        class="
          flex
          items-center
          cursor-pointer
          hover:bg-gray-700
          px-3
          py-1
          rounded-md
          transition
          ml-5
        "
      >
        <div class="font-semibold mr-2">New Releases</div>
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
          px-3
          py-1
          rounded-md
          transition
          ml-5
        "
      >
        <div class="font-semibold mr-2">Categories</div>
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
          px-3
          py-1
          rounded-md
          transition
          ml-5
        "
      >
        <div class="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <div
            class="
              w-2
              h-2
              bg-yellow-400
              rounded-full
              absolute
              right-0
              top-0
              ring-2 ring-gray-800
            "
          ></div>
        </div>
        <div class="font-semibold ml-2">Notifications</div>
      </div>
      <div
        class="
          flex
          items-center
          cursor-pointer
          hover:bg-gray-700
          px-3
          py-1
          rounded-md
          transition
          ml-5
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 fill-current text-gray-100"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clip-rule="evenodd"
          />
        </svg>
        <div class="font-semibold ml-2">Guest</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
