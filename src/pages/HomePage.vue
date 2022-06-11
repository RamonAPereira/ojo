<template>
  <main class="container mx-auto">
    <section>
      <SectionTitle :title="sectionTitles[0]" />
      <PosterCarousel />
    </section>
    <section>
      <SectionTitle :title="sectionTitles[1]" />
      <CharacterCarousel />
    </section>
  </main>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import SectionTitle from "../components/ui/SectionTitle.vue";
import PosterCarousel from "../components/ui/PosterCarousel.vue";
import CharacterCarousel from "../components/ui/CharacterCarousel.vue";
import { useFilms } from "../store/films";

const sectionTitles = ref(["Movies", "Characters"]);
const films = useFilms();

onMounted(() => films.setFilmsInfo());
</script>
