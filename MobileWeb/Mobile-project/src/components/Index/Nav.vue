<script setup>
import { ref, watchEffect } from "vue";
import { getData } from "@/composables/api/axios";
import Loading from "../Loading.vue";

const URL = "https://www.imooc.com/api/mall-wepApp/index/nav";
const data = ref([]);
const loading = ref(true);

watchEffect(async () => {
  const response = await getData(URL);
  data.value = response;
  loading.value = false;
});
</script>

<template>
  <div>
    <Loading v-if="loading"></Loading>
    <ul v-if="data" class="nav">
      <li v-for="item of data" class="nav-item">
        <a class="nav-link" href="javascript:;">
          <img class="nav-img" :src="item.url" alt="" />
          <span>{{ item.text }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.nav {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 20.5px;
}
.nav-item {
  width: 25%;
  margin-bottom: 20.5px;
}
.nav-link {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #999;
  font-size: 12px;
}
.nav-img {
  width: 46.933333%;
  margin-bottom: 5.5px;
}
</style>
