<template>
  <div class="w-full flex pt-[7rem] h-[600px] dark:bg-blue-950 justify-center">
    <div class="container flex items-center justify-between">
      <swiper
        spaceBetween="30"
        :centeredSlides="true"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          <img class="w-[20%] h-[10%]" src="/resume.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img class="w-[20%] h-[10%]" src="/resume2.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img class="w-[20%] h-[10%]" src="/resume3.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img class="w-[20%] h-[10%]" src="/resume4.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img class="w-[20%] h-[10%]" src="/resume5.png" alt="" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/navigation";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Import Swiper pagination styles
import { Autoplay, Pagination, Navigation } from "swiper/modules"; // Import Swiper pagination module

const modules = [Autoplay, Pagination, Navigation];
</script>

<style scoped>
/* Container styles */
.container {
  position: relative;
  width: 100%;
  height: 550px;
  overflow: hidden;
}

/* Swiper styles */
.swiper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: grab;
}
.swiper:active {
  cursor: grabbing;
}

/* Swiper slide styles */
.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 700px;
}

/* Ensure images fill the slide completely */
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
