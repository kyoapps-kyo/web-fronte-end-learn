<script setup></script>

<template>
  <div class="loader">
    <h4>加载中...</h4>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<style scoped>
.loader {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
}
.loader h4 {
  color: rgb(105, 105, 105);
  margin-bottom: 1rem;
}

.loader span {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  left: 50%;
  margin-left: -10px;
  animation: 3s infinite linear;
}

.loader span:nth-child(2) {
  background: #e84c3d;
  animation: kiri 1.2s infinite linear;
}

.loader span:nth-child(3) {
  background: #f1c40f;
  z-index: 100;
}

.loader span:nth-child(4) {
  background: #2fcc71;
  animation: kanan 1.2s infinite linear;
}

@keyframes kanan {
  0% {
    transform: translateX(20px);
  }

  50% {
    transform: translateX(-20px);
  }

  100% {
    transform: translateX(20px);
    z-index: 200;
  }
}

@keyframes kiri {
  0% {
    transform: translateX(-20px);
    z-index: 200;
  }

  50% {
    transform: translateX(20px);
  }

  100% {
    transform: translateX(-20px);
  }
}

.font-style {
  color: #fff;
  filter: drop-shadow(1px 1px 1px rgb(0 0 0 / 1));
}

.big-font {
  font-size: 3rem;
}
</style>
