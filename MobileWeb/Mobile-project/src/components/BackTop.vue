<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { useScrollState } from "../composables/scrollHandler/scrollChange";
const CHANGED_CLASS_NAME = "backtop-hidden";

const props = defineProps(["el"]);
const { change, scrollTo } = useScrollState(props.el, {
  setWindowHeight: true,
  scroll: true,
});
const style = ref<string>(CHANGED_CLASS_NAME);
watch(change, (newChange) => {
  style.value = newChange ? "" : CHANGED_CLASS_NAME;
});
</script>

<template>
  <div>
    <a
      ref="backTop"
      href="javascript:;"
      class="backtop"
      :class="style"
      @click="scrollTo()"
    >
      <i class="iconfont icon-up"></i>
    </a>
  </div>
</template>
<style scoped>
.backtop {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 9px;
  border-radius: 50%;
  background-color: rgba(25, 196, 138, 0.7);
}
.backtop .iconfont {
  font-size: 30px;
  color: #fff;
}

.backtop-hidden {
  display: none;
}
</style>
