<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const onSwiper = (swiper) => {};
const onSlideChange = () => {};
</script>

<template>
  <swiper
    :modules="[Pagination]"
    :slides-per-view="1"
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    loop
  >
    <swiper-slide>
      <a href="javascript:;">
        <img src="@/assets/images/slider/slider_1.jpg" alt="" />
      </a>
    </swiper-slide>
    <swiper-slide>
      <a href="javascript:;">
        <img src="@/assets/images/slider/slider_2.jpg" alt="" />
      </a>
    </swiper-slide>
  </swiper>
</template>
<style scoped>
.swiper-slide {
  width: 100%;
}
.swiper-slide img {
  width: 100%;
}
</style>
