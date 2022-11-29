<script setup>
import { ref, onMounted } from "vue";
import {
  setActiveItem,
  isTargetElement,
} from "../../composables/utils/classHandler";
const emit = defineEmits(["getTabId"]);
const $tabList = ref(null);
onMounted(() => {
  const $listItems = $tabList.value.children;
  setActiveItem(0, $listItems, "tab-item-active");
  $tabList.value.addEventListener(
    "pointerdown",
    (evt) => {
      const targetEl = evt.target;
      const index = targetEl.dataset.id;
      if (isTargetElement(targetEl, "tab-item")) {
        setActiveItem(index - 1, $listItems, "tab-item-active");
        return emit("getTabId", index);
      }
    },
    false
  );
});
</script>

<template>
  <ul ref="$tabList" class="tab">
    <li class="tab-item" data-id="1">亚洲</li>
    <li class="tab-item" data-id="2">欧洲</li>
    <li class="tab-item" data-id="3">非洲</li>
    <li class="tab-item" data-id="4">北美</li>
    <li class="tab-item" data-id="5">大洋洲</li>
    <li class="tab-item" data-id="6">南美</li>
    <li class="tab-item" data-id="7">南极洲</li>
  </ul>
</template>
<style scoped>
.tab-item {
  height: 40px;
  background-color: #fafafa;
  color: #333;
  font-size: 14px;
  text-align: center;
  line-height: 40px;
}

.tab-item-active {
  background-color: #fff;
  border-left: 2px solid #bf2a2f;
  color: #bf2a2f;
}
</style>
