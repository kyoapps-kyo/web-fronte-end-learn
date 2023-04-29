<script setup lang="ts">
import { RouterView } from "vue-router";
import MainDocker from "./components/MainDocker.vue";
</script>

<template>
  <div class="wrapper">
    <RouterView />
  </div>
  <MainDocker></MainDocker>
</template>

<style scoped lang="scss">
.wrapper {
  position: absolute;
  top: 0;
  bottom: 0.5rem;
  left: 0;
  right: 0;
}
</style>
