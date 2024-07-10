<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);

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

const lang = ref("EN");

const changeLang = (lan) => {
  lang.value = lang;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div
    class="dark:bg-gradient-backColor_two bg-gradient-backColors fixed z-10 top-0 left-0 w-full"
  >
    <div
      :class="
        isScrolled
          ? 'backdrop-blur-lg bg-white/30'
          : ' dark:bg-gradient-backColor bg-black/5 shadow-gradient-shadow'
      "
      id="backBlur"
      class="flex justify-center"
    >
      <div class="container">
        <!-- Progress bar -->
        <div
          style="border-radius: 0 50% 50% 0"
          class="h-1.5 bg-blue-950 dark:bg-white/70 absolute top-0 left-0"
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
              class="text-lg text-blue-950 dark:text-white transition duration-700 hover:animate-bounce"
              href="#"
              >{{ $t("cv") }}</a
            >
            <a
              @click="handleClick"
              class="text-lg text-blue-950 dark:text-white transition duration-700 hover:animate-bounce"
              href="#"
              >{{ $t("template") }}</a
            >
            <a
              @click="handleClick"
              class="text-lg text-blue-950 dark:text-white transition duration-700 hover:animate-bounce"
              href="#"
            >
              {{ $t("contact") }}</a
            >
          </div>
          <!-- Login button -->
          <div class="flex gap-10 items-center">
            <button
              @click="handleClick"
              :class="isScrolled ? 'dark:bg-blue-950/30' : ' '"
              class="px-8 contactshad py-1.5 text-xl text-white dark:text-blue-950 rounded-full transition-colors duration-300 hover:animate-wiggle"
            >
              {{ $t("login") }}
            </button>
            <select
              :class="
                isScrolled ? 'dark:bg-blue-950/30' : 'dark:bg-transparent'
              "
              class="outline-none contactshad p-2 px-5 text-blue-950 border-none rounded-full"
              v-model="$i18n.locale"
              name=""
            >
              <option class="rounded-full text-blue-950 border-none" value="EN">
                EN
              </option>
              <option class="rounded-full text-blue-950 border-none" value="UZ">
                UZ
              </option>
              <option class="rounded-full text-blue-950 border-none" value="RU">
                RU
              </option>
            </select>
            <div
              :class="
                isScrolled ? 'dark:bg-blue-950/30' : 'dark:bg-transparent'
              "
              :value="lang"
              class="outline-none contactshad p-2 px-5 text-blue-950 border-none rounded-full"
            >
              EN
              <p
                @click="changeLang('EN')"
                class="rounded-full text-blue-950 border-none"
                :class="false ? 'scale-100 h-full' : 'h-0 scale-0'"
              >
                EN
              </p>
              <p
                @click="changeLang('UZ')"
                class="rounded-full text-blue-950 border-none"
                :class="false ? 'scale-100 h-full' : 'h-0 scale-0'"
              >
                UZ
              </p>
              <p
                @click="changeLang('RU')"
                class="rounded-full text-blue-950 border-none"
                :class="false ? 'scale-100 h-full' : 'h-0 scale-0'"
              >
                RU
              </p>
            </div>
            <transition name="fade" mode="out-in" appear>
              <button @click="toggleDark(), handleClick()">
                <img
                  class="ml-2 rounded-full dark:text-blue-950 text-white text-2xl"
                  :src="isDark ? '/light.svg' : 'dark.svg'"
                />
              </button>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.contactshad {
  box-shadow: 0 0 5px 0 rgba(225, 255, 255, 0.9);
  text-shadow: 0 0px 10px rgb(255, 255, 255, 0.2);
}
.contactshad:hover {
  box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.9);
}
a {
  text-shadow: 0 0px 10px rgb(23, 37, 84, 0.2);
}
/* .backColors {
  background: linear-gradient(
    -45deg,
    rgba(23, 37, 84, 0.9) 0%,
    rgba(23, 37, 84, 0.9) 38%,
    rgba(255, 255, 255, 0) 38%,
    rgba(255, 255, 255, 0) 100%
  );
} */

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
