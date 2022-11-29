<script setup lang="ts">
import { ref } from "vue";
import Header from "../components/Header.vue";
import SearchBox from "../components/SearchBox.vue";
import Slider from "../components/Index/Slider.vue";
import Nav from "../components/Index/Nav.vue";
import Product from "../components/Index/Product.vue";
import BackTop from "../components/BackTop.vue";
import { useScrollState } from "../composables/scrollHandler/scrollChange";
const container = ref<HTMLElement | null>(null);
//把改变状态函数封装起来，即使改变了page组件，之后提供滑动的容器，可以接着复用
const { change } = useScrollState(container);
</script>

<template>
  <div ref="container" id="index-page" class="layout">
    <Header :state="change">
      <div class="header-layout">
        <SearchBox></SearchBox>
      </div>
    </Header>
    <Slider class="slider-layout" />
    <Nav class="nav-layout" />
    <Product class="product-layout" />
  </div>
  <BackTop v-if="container" class="backtop-layout" :el="container" />
</template>
<style scoped>
.layout {
  overflow-y: auto;
  height: 100%;
  padding-bottom: 48px;
}
.header-layout {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-layout .searchbox {
  width: 89.333333%;
}

.slider-layout,
.nav-layout,
.product-layout {
  background-color: #fff;
}
.nav-layout {
  margin-bottom: 10px;
}
</style>
<style>
.slider-layout .loader,
.nav-layout .loader,
.product-layout .loader {
  padding: 60px 0;
}
</style>
