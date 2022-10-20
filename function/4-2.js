"use strict";
//递归求和
function sum(a) {
  if (a == 1) return 1;
  return a + sum(a - 1);
}

console.log(sum(100));
