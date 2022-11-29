<script setup lang="ts">
import { ref } from "vue";
import Header from "../components/Destination/Header.vue";
import Main from "../components/Destination/Main.vue";
</script>

<template>
  <div ref="container" id="destination-page" class="destination-layout">
    <header class="header-layout">
      <Header></Header>
    </header>
    <div class="main-layout">
      <Main></Main>
    </div>
  </div>
</template>
<style scoped>
.header-layout {
  width: 100%;
  height: 149px;
}
.main-layout {
  display: flex;
  position: absolute;
  top: 149px;
  right: 0;
  left: 0;
  bottom: 48px;
  background-color: #fff;
}
</style>
