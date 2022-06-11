<template>
  <div class="flex justify-center flex-wrap items-center gap-16">
    <BasePoster
      v-for="(film, id) in films.getFilms"
      :key="id"
      :title="film?.title"
    />
.</template>
<script lang="ts" setup>
import { useFilms } from "../../store/films";
import BasePoster from "../base/BasePoster.vue";
import { film } from "../../types/types";

const films = useFilms();
</script>
