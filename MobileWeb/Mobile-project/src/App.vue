<script setup>
import TabBar from "./components/TabBar.vue";
import BackTop from "./components/BackTop.vue";
</script>

<template>
  <RouterView />
  <TabBar class="tabbar-layout" />
  <BackTop class="backtop-layout" />
</template>

<style scoped></style>
