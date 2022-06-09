<template>
  <header class="bg-black">
    <div
      class="container mx-auto flex flex-col items-center justify-between gap-2 pt-7 pb-6 md:flex-row"
    >
      <h1 class="text-white font-semibold text-3xl">Star Wars Universe</h1>
      <SearchBar />
    </div>
  </header>
</template>

<script lang="ts" setup>
import SearchBar from "../../components/header/SearchBar.vue";
</script>
