<script setup>
import { watch, ref, watchEffect } from "vue";
import Loading from "../Loading.vue";
import { getData, getDelayData } from "../../composables/api/axios";
import { set, get } from "../../composables/utils/sessionStorage";

const BASE = "https://www.imooc.com/api/mall-wepApp/destination/content";
const props = defineProps(["contentId"]);
const data = ref(null);
const loading = ref(true);
let controller = null;

watchEffect(async () => {
  //
  const id = props.contentId;
  const url = `${BASE}/${id}`;
  const storageContent = getSessionSto(id);
  loading.value = true;
  if (storageContent) {
    data.value = storageContent;
  } else {
    await netRequest(url);
    setSessionSto(id, data.value);
  }
  loading.value = false;
});

async function netRequest(url) {
  if (controller) {
    controller.abort();
    controller = null;
  }
  controller = new AbortController();
  data.value = await getDelayData(url, {
    signal: controller.signal,
  });
}

function getSessionSto(index) {
  const storageName = `destination_content_${index}`;
  return get(storageName);
}
function setSessionSto(index, data) {
  set(`destination_content_${index}`, data);
}
</script>

<template>
  <div class="content-container">
    <Loading v-if="loading" class="content-loading"></Loading>
    <ul v-if="!loading" class="content">
      <li v-for="item of data" class="content-item">
        <a href="javascript:;">
          <img :src="item.url" alt="item.text" class="content-img" />
          <span class="content-text">{{ item.text }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.content-container {
  position: relative;
}
.content-loading {
  padding-top: 100px;
}
.content {
  display: flex;
  flex-wrap: wrap;
  padding: 20px 20px 0 0;
}
.content-item {
  padding: 0 0 20px 20px;
  width: 50%;
  position: relative;
}

.content-img {
  width: 100%;
}
.content-text {
  position: absolute;
  top: 0;
  right: 0px;
  bottom: 20px;
  left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
  font-size: 16px;
}
</style>
