<script setup lang="ts"></script>

<template>
  <div class="docker">
    <div class="docker__item docker__item--active">
      <div class="iconfont">&#xe613;</div>
      <div class="title">首页</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe698;</div>
      <div class="title">购物车</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe713;</div>
      <div class="title">订单</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe616;</div>
      <div class="title">我的</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.docker {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.49rem;
  border-top: 0.01rem solid #f1f1f1;
  box-sizing: border-box;
  padding: 0 0.18rem;

  &__item {
    flex: 1;
    text-align: center;

    &--active {
      color: #1fa4fc;
    }

    .title {
      font-size: 0.2rem;
      transform: scale(0.5, 0.5);
      transform-origin: center top;
    }

    .iconfont {
      font-size: 0.18rem;
      margin: 0.07rem 0 0.02rem;
    }
  }
}
</style>
