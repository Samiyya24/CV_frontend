<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const progressBarWidth = ref("w-0");
let timeoutId = null;

const handleClick = () => {
  // Clear any existing timeout to ensure smooth transition
  clearTimeout(timeoutId);

  // Start the animation by setting the width to a value larger than expected
  progressBarWidth.value = "w-[110%] duration-700";

  // Use setTimeout to transition back to w-0 after a short delay
  timeoutId = setTimeout(() => {
    progressBarWidth.value = "w-0";
  }, 500); // Adjust the timeout duration to match the animation speed
};

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  // const changeLocale = (selectedLocale) => {
  //   locale.value = selectedLocale;
  // };
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div id="backColor" class="fixed z-10 top-0 left-0 w-full">
    <div
      :class="isScrolled ? 'backdrop-blur-lg bg-white/30' : 'bg-black/5'"
      id="backBlur"
      class="flex justify-center"
    >
      <div class="container">
        <!-- Progress bar -->
        <div
          style="border-radius: 0 50% 50% 0"
          class="h-1.5 bg-blue-950 absolute top-0 left-0"
          :class="progressBarWidth"
        ></div>
        <div class="flex justify-between items-center py-1">
          <!-- Logo -->
          <img
            @click="handleClick"
            src="/logo.png"
            class="w-[7%] rounded-full cursor-pointer transition-transform duration-300 hover:animate-wiggle"
            alt="logo"
          />
          <!-- Navigation links -->
          <div class="flex items-center gap-10">
            <a
              @click="handleClick"
              class="text-lg text-blue-950 transition duration-700 hover:animate-bounce"
              href="#"
              >{{ $t("cv") }}</a
            >
            <a
              @click="handleClick"
              class="text-lg text-blue-950 transition duration-700 hover:animate-bounce"
              href="#"
              >{{ $t("template") }}</a
            >
            <a
              @click="handleClick"
              class="text-lg text-blue-950 transition duration-700 hover:animate-bounce"
              href="#"
            >
              {{ $t("contact") }}</a
            >
          </div>
          <!-- Login button -->
          <div class="flex gap-10 items-center">
            <button
              id="contact"
              @click="handleClick"
              class="px-8 py-1.5 text-xl text-white rounded-full transition-colors duration-300 hover:animate-wiggle"
            >
              {{ $t("login") }}
            </button>
            <select
              id="lang"
              class="outline-none p-2 px-5 text-blue-950 border-none rounded-full"
              v-model="$i18n.locale"
              name=""
            >
              <option class="text-blue-950 border-none" value="en">en</option>
              <option class="text-blue-950 border-none" value="uz">uz</option>
              <option class="text-blue-950 border-none" value="ru">ru</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#contact {
  box-shadow: 0 0 5px 0 rgba(225, 255, 255, 0.9);
  text-shadow: 0 0px 10px rgb(255, 255, 255, 0.2);
}
#contact:hover {
  box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.9);
}
a {
  text-shadow: 0 0px 10px rgb(23, 37, 84, 0.2);
}
#backColor {
  background: linear-gradient(
    -45deg,
    rgba(23, 37, 84, 0.9) 0%,
    rgba(23, 37, 84, 0.9) 30%,
    rgba(255, 255, 255, 0) 30%,
    rgba(255, 255, 255, 0) 100%
  );
}

#lang {
  box-shadow: 0 0 5px 0 rgba(225, 255, 255, 0.9);
  text-shadow: 0 0px 10px rgb(23, 37, 84, 0.2);
}
#lang:hover {
  box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.9);
}

#backBlur {
  /* Rotate the gradient by 45 degrees */

  @supports ((-webkit-backdrop-filter: initial) or (backdrop-filter: initial)) {
    #globalnav.globalnav-scrim.globalnav-dark,
    .globalnav-scrim.globalheader-dark #globalnav,
    .globalnav-scrim #globalnav.globalnav-dark,
    .globalheader-dark #globalnav.globalnav-scrim {
      --globalnav-background: rgba(22, 22, 23, 0.8);
    }
  }
}
</style>
