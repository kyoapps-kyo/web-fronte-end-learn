//快速排序
"use strict";

const array = [1, 42, 2, 424, 213, 42, 4, 5, 2, 4];

function quickSort(arr) {
  if (arr.length < 2) return arr;
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr.splice(pivotIndex, 1)[0];
  let left = [],
    right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort(array));
