//生成斐波那契数列
"use strict";

function fib(n) {
  if (n == 1 || n == 0) return 1;
  return fib(n - 1) + fib(n - 2);
}

var array = [];
for (var i = 0; i < 15; i++) {
  array.push(fib(i));
}
console.log(array);
