<script setup>
import Tab from "./Tab.vue";
import Content from "./Content.vue";
import { ref } from "vue";
const tabId = ref(1);

function setTabId(n) {
  tabId.value = n;
}
</script>

<template>
  <div class="tab-layout">
    <Tab @get-tab-id="setTabId"></Tab>
  </div>

  <div id="destination-content" class="content-layout">
    <Content :contentId="tabId"></Content>
  </div>
</template>

<style scoped>
.tab-layout {
  width: 76px;
  background-color: #fafafa;
}
.content-layout {
  overflow-y: auto;
  flex: 1;
}
</style>
