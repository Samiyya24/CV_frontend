<script setup>
</script>

<template>
  <transition name="fade" mode="out-in" appear>
    <router-view />
  </transition>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 300ms;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
