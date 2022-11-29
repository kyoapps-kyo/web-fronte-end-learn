<script setup lang="ts">
import { ref } from "vue";
import SearchBox from "../SearchBox.vue";
</script>

<template>
  <div class="header">
    <h1 class="header-title">目的地</h1>
    <SearchBox placeholder="搜索你想去的国家"></SearchBox>
  </div>
</template>
<style scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding-top: 57px;
  background: url("@/assets/images/destination/header_bg.png") no-repeat center
    center / cover;
}

.header .searchbox {
  width: 89.33333%;
}

.header .header-title {
  margin-bottom: 17px;
  color: #fff;
  font-size: 18px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
