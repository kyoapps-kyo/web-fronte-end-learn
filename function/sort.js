"use strict";

var arr = [1, 2, 3, 4, 5, 6];

arr.sort((a, b) => {
  return b - a;
});

console.log(arr);
