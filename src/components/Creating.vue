<template>
  <div class="container">
    <div class="flex flex-col gap-20 items-center justify-center pt-20">
        <button class="bg-blue-900 hover:bg-blue-950 text-xl text-white font-bold py-4 px-8 rounded">
      {{ $t("create") }}
    </button>
    <img :src="store.temp" style="box-shadow: 0 0 40px 0 rgb(30, 58, 138, .2);" alt="">
    </div>
  </div>
</template>

<script setup>
import { useStore } from "../store";

const store = useStore();

</script>

<style scoped>

</style>
