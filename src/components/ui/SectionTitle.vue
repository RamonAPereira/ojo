<template>
  <h2 class="capitalize text-center font-bold">{{ props.title }}</h2>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
