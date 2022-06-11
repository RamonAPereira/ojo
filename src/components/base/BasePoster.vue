<template>
  <article class="border rounded-2xl w-64">
    <img
      class="h-96 rounded-t-2xl w-64"
      src="../../assets/posters/episode_1.jpg"
      alt=""
    />
    <h3 class="text-white bg-yellow-400 font-medium text-sm px-4 pt-1">
      {{ props.filmName }}
    </h3>
    <ul class="font-light text-zinc-700 px-4 pt-1">
      <li>Data de lançamento</li>
      <li>{{ props.release }}</li>
      <li>Diretor</li>
      <li>{{ props.director }}</li>
    </ul>
  </article>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  release: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
});
</script>
