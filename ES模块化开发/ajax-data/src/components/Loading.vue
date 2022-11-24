<script setup></script>

<template>
  <div class="loader">
    <h4>loading...</h4>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<style scoped>
.loader h4 {
  color: #fff;
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
  -webkit-animation: 3s infinite linear;
  -moz-animation: 3s infinite linear;
  -o-animation: 3s infinite linear;
}

.loader span:nth-child(2) {
  background: #e84c3d;
  -webkit-animation: kiri 1.2s infinite linear;
  -moz-animation: kiri 1.2s infinite linear;
  -o-animation: kiri 1.2s infinite linear;
}

.loader span:nth-child(3) {
  background: #f1c40f;
  z-index: 100;
}

.loader span:nth-child(4) {
  background: #2fcc71;
  -webkit-animation: kanan 1.2s infinite linear;
  -moz-animation: kanan 1.2s infinite linear;
  -o-animation: kanan 1.2s infinite linear;
}

@-webkit-keyframes kanan {
  0% {
    -webkit-transform: translateX(20px);
  }

  50% {
    -webkit-transform: translateX(-20px);
  }

  100% {
    -webkit-transform: translateX(20px);
    z-index: 200;
  }
}

@-moz-keyframes kanan {
  0% {
    -moz-transform: translateX(20px);
  }

  50% {
    -moz-transform: translateX(-20px);
  }

  100% {
    -moz-transform: translateX(20px);
    z-index: 200;
  }
}

@-o-keyframes kanan {
  0% {
    -o-transform: translateX(20px);
  }

  50% {
    -o-transform: translateX(-20px);
  }

  100% {
    -o-transform: translateX(20px);
    z-index: 200;
  }
}

@-webkit-keyframes kiri {
  0% {
    -webkit-transform: translateX(-20px);
    z-index: 200;
  }

  50% {
    -webkit-transform: translateX(20px);
  }

  100% {
    -webkit-transform: translateX(-20px);
  }
}

@-moz-keyframes kiri {
  0% {
    -moz-transform: translateX(-20px);
    z-index: 200;
  }

  50% {
    -moz-transform: translateX(20px);
  }

  100% {
    -moz-transform: translateX(-20px);
  }
}

@-o-keyframes kiri {
  0% {
    -o-transform: translateX(-20px);
    z-index: 200;
  }

  50% {
    -o-transform: translateX(20px);
  }

  100% {
    -o-transform: translateX(-20px);
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
