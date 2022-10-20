"use strict";

var arr = [4, 3, [2, 5], 1, 4, [12, 3, [132, [1, 2, 3]]], 1];

var result = [];

for (var i = 0; i < arr.length; i++) {
  result[i] = arr[i];
}

console.log(result);

//递归拆解数组
result = [];

getResult(arr, result);

function getResult(arr, result) {
  for (var i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      result.push(arr[i]);
    } else getResult(arr[i], result);
  }
}
