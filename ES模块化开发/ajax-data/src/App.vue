<script setup>
import { IMG_URL } from "./api/axios/config";
import { getData, getDelayData } from "./api/axios/getData";
import Loading from "./components/Loading.vue";
import ImgList from "./components/ImgList.vue";
import { ref } from "vue";

const show = ref(true);
const data = ref(null);
getData(IMG_URL)
  .then((response) => {
    data.value = response;
    show.value = false;
  })
  .catch();
</script>

<template>
  <Loading v-if="show"></Loading>
  <ImgList v-if="data && data.length > 0" :imgs="data"></ImgList>
</template>

<style scoped></style>
