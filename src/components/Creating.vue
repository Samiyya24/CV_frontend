<template>
  <div class="dark:bg-blue-950">
  <div class="container">
    <div class="flex flex-col gap-20 items-center justify-center pt-20 ">
        <button class="bg-blue-900 dark:bg-white/70 dark:hover:bg-white/90 duration-300 hover:bg-blue-950 text-xl dark:text-blue-950 text-white font-bold py-4 px-8 rounded">
      {{ $t("create") }}
    </button>

    <img :src="store.temp" class=" shadow-gradient-shadow" alt="">
    </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "../store";

const store = useStore();

</script>

<style scoped>

</style>
