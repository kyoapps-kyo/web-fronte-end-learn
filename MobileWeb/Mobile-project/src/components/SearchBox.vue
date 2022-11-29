<script setup>
import { ref } from "vue";
const props = defineProps(["placeholder"]);
</script>

<template>
  <div class="searchbox">
    <i class="iconfont icon-search"></i>
    <form class="searchbox-form">
      <input
        type="text"
        class="searchbox-input"
        name="words"
        autocomplete="off"
        :placeholder="placeholder ? placeholder : '搜索目的地/折扣/关键字'"
      />
    </form>
  </div>
</template>
<style scoped>
.searchbox {
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 27.5px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
  padding: 0 20px;
}

.searchbox .icon-search {
  color: #fff;
  font-size: 20px;
}
.searchbox-form {
  flex: 1;
  margin-left: 6px;
}
.searchbox-input {
  width: 100%;
  font-size: 14px;
  background: none;
  color: #fff;
}
.searchbox-input::-webkit-input-placeholder {
  color: #fff;
}
.searchbox-input::-moz-placeholder {
  color: #fff;
}
.searchbox-input::-ms-input-placeholder {
  color: #fff;
}
</style>
