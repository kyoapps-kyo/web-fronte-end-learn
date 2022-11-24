<script setup>
import { ref, onMounted, watch } from "vue";
import { delay } from "../utils/tools";
const props = defineProps(["imgs"]);
const data = ref([...props.imgs]);
const urls = ref([]);
console.log(data.value);
const delayLoad = async () => {
  if (!data || data.length === 0) throw new Error("没有传入数据");
  for (const item of data.value) {
    urls.value.push(item.url);
    await delay(100);
  }
};

console.log(urls.value);
onMounted(() => {
  delayLoad();
});
</script>

<template>
  <TransitionGroup name="list" tag="ul" class="box">
    <li v-for="url of urls" :key="url" class="item">
      <img :src="url" class="img" />
    </li>
  </TransitionGroup>
</template>

<style scoped>
ul,
li {
  list-style: none;
}
.item {
  width: 20%;
}
.box {
  display: flex;
  margin: 0 auto;
}
.img {
  width: 100%;
  display: block;
}
.list-move, /* 对移动中的元素应用的过渡 */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.list-leave-active {
  position: absolute;
}
</style>
