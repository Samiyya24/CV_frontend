<template>
  <div class="fixed w-full bottom-5 right-5">
    <div class="relative container">
      <button
        @click="scrollToTop"
        :class="{ 'scale-0': isNearTop, 'scale-100': !isNearTop }"
        class="duration-500 rounded-full w-[50px] h-[50px] z-20 backdrop-blur-lg bg-blue-950/50 hover:bg-blue-950 absolute text-4xl flex items-center justify-center bottom-0 right-0 -translate-y-1/2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="#fff"
            d="M572.235 205.282v600.365a30.118 30.118 0 1 1-60.235 0V205.282L292.382 438.633a28.913 28.913 0 0 1-42.646 0a33.43 33.43 0 0 1 0-45.236l271.058-288.045a28.913 28.913 0 0 1 42.647 0L834.5 393.397a33.43 33.43 0 0 1 0 45.176a28.913 28.913 0 0 1-42.647 0l-219.618-233.23z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";

const scrollTop = ref(0);
const threshold = 200; // Adjust this value based on how far from the top the button should scale

const handleScroll = () => {
  scrollTop.value = window.scrollY || document.documentElement.scrollTop;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const isNearTop = computed(() => scrollTop.value <= threshold);

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Initialize scrollTop on mount
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
