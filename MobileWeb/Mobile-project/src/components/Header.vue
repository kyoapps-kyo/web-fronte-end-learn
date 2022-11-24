<script setup lang="ts">
import { ref, computed } from "vue";

const CHANGED_CLASS_NAME = "header-transition";

const props = defineProps(["state"]);
const headerStyle = computed(() => (props.state ? CHANGED_CLASS_NAME : ""));
</script>

<template>
  <div class="header" :class="headerStyle">
    <slot></slot>
  </div>
</template>
<style scoped>
.header {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  width: 100%;
  height: 54px;
  transition: all 0.3s ease-in-out;
}
.header-transition {
  background-color: rgba(25, 196, 138, 0.9);
}
</style>
