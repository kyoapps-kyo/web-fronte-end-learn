"use strict";

//随机生成两个变量dx和dy，它们均在-4～4区间随机取值，但要求dx和dy不能同时为0

const a = -4,
  b = 4;
let dx, dy;

do {
  dx = parseInt(Math.random() * 9) - 4;
  dy = parseInt(Math.random() * 9) - 4;
  console.log(`dx: ${dx}, dy: ${dy}`);
} while (dx != 0 || dy != 0);
