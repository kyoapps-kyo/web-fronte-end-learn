"use strict";
//拔500个萝卜要多少天

let sum = 0;
let n = 1;
while (sum < 500) {
  sum += n++;
}

console.log(n - 1, sum);

console.log("\n");

let i = 0;
while (i < 1000) {
  i++;
  let x = Math.random();
  x == 0 || x == 1 ? console.log(x) : "null";
}

console.log(parseInt(0.6));
