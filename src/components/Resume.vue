<template>
  <div class="dark:bg-blue-950">
    <div class="container">
      <div class="py-20">
        <h3
          class="text-blue-950 dark:text-white text-center dark: text-5xl font-semibold my-20"
          style="text-shadow: 0 0px 10px rgb(23, 37, 84, 0.4)"
        >
          {{ $t("template") }}
        </h3>
        <swiper
          :effect="'coverflow'"
          :grabCursor="true"
          :centeredSlides="true"
          :slidesPerView="'auto'"
          :loop="true"
          :coverflowEffect="{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide>
            <img class="shadow-gradient-shadow" @click="store.temp = '/template.png'" src="/template.png" />
          </swiper-slide>
          <swiper-slide>
            <img class="shadow-gradient-shadow"
              @click="store.temp = '/template2.webp'"
              src="/template2.webp"
            />
          </swiper-slide>
          <swiper-slide>
            <img class="shadow-gradient-shadow"
              @click="store.temp = '/template3.webp'"
              src="/template3.webp"
            />
          </swiper-slide>
          <swiper-slide>
            <img class="shadow-gradient-shadow" @click="store.temp = '/template4.png'" src="/template4.png" />
          </swiper-slide>
          <swiper-slide>
            <img class="shadow-gradient-shadow"
              @click="store.temp = '/template5.webp'"
              src="/template5.webp"
            />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css"; // Import Swiper styles
import "swiper/css/effect-coverflow"; // Import Swiper coverflow effect styles
import "swiper/css/pagination"; // Import Swiper pagination styles
import { Autoplay, EffectCoverflow } from "swiper/modules"; // Import Swiper modules
import { useStore } from "../store";

const store = useStore();

const modules = [Autoplay, EffectCoverflow];
</script>

<style scoped>
/* Add your scoped styles here */
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  cursor: grab;
}
.swiper:active {
  cursor: grabbing;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 100%;
}


.swiper-slide img {
  display: block;
  width: 100%;
}
</style>
