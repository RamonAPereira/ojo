<template>
  <main>
    <section class="container mx-auto">
      <SectionTitle :title="'movie'" />
      <div class="flex">
        <div class="flex-1">
          <h3>Descrição</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
            impedit odio molestiae debitis voluptate adipisci tempore ea,
            dignissimos quibusdam iusto ipsum doloribus dolores vel? Perferendis
            deserunt ipsam officia reprehenderit ex.
          </p>
          <div>
            <ul>
              <li>Data de Lançamento</li>
              <li>Diretor</li>
              <li>Alan walker</li>
            </ul>
            <ul>
              <li>20/01/2022</li>
              <li>Produtor</li>
              <li>Alan Walker</li>
            </ul>
          </div>
        </div>
        <div class="flex-1">
          <img src="../assets/posters/episode_1.jpg" alt="" />
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import SectionTitle from "../components/ui/SectionTitle.vue";
</script>
