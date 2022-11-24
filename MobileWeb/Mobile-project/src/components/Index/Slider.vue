<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Loading from "../Loading.vue";
import { getData, getDelayData } from "../../composables/api/axios";

const URL = "https://www.imooc.com/api/mall-wepApp/index/slider";

const imgs = ref([]);
const error = ref(null);
const loading = ref(true);
watchEffect(async () => {
  try {
    const response = await getData(URL);
    imgs.value = response;
    loading.value = false;
  } catch (err) {
    error.value = err;
  }
});

const onSwiper = (swiper) => {};
const onSlideChange = () => {};
</script>

<template>
  <div class="slider-box">
    <div v-if="error !== null">
      {{ error }}
    </div>
    <Loading v-else-if="loading" />
    <swiper
      v-if="imgs"
      :modules="[Pagination]"
      :initialSlide="1"
      :slides-per-view="1"
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      loop
    >
      <swiper-slide v-for="img of imgs">
        <a href="javascript:;">
          <img :src="img.url" />
        </a>
      </swiper-slide>
    </swiper>
  </div>
</template>
<style scoped>
.slider-box {
  width: 100%;
}
.swiper-slide {
  width: 100%;
}
.swiper-slide img {
  width: 100%;
}
</style>
