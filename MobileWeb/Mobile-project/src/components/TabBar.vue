<script setup>
import { ref } from "vue";
</script>

<template>
  <div>
    <div class="tabbar">
      <RouterLink to="/" class="tabbar-item">
        <i class="iconfont icon-home"></i>
        <span>首页</span>
      </RouterLink>
      <RouterLink to="/destination" class="tabbar-item">
        <i class="iconfont icon-dest"></i>
        <span>目的地</span>
      </RouterLink>
      <RouterLink to="/personal" class="tabbar-item">
        <i class="iconfont icon-personal"></i>
        <span>我的</span>
      </RouterLink>
    </div>
  </div>
</template>
<style scoped>
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 12px;
}
.tabbar-item {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #666;
  font-size: 12px;
}
.router-link-exact-active {
  color: #df2a2f;
}
.tabbar-item .iconfont {
  margin-bottom: 1px;
  font-size: 20px;
}
</style>
