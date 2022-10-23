"use strict";

var arr = [2, 1, 4, 11, 3];
var count = 0;
//如果小，我就交换位置，保证大循环里的数时最大的，小循环用来交换位置
for (var i = arr.length - 1; i >= 0; i--)
  for (var j = i - 1; j >= 0; j--) {
    var temp = 0;
    if (arr[i] < arr[j]) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    count++;
  }
console.log(arr);
console.log(count);

count = 0;
//
for (var i = 0; i < arr.length; i++)
  for (var j = arr.length - 1; j > i; j--) {
    var temp = 0;
    if (arr[j] < arr[j - 1]) {
      temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
    }
    count++;
  }

console.log(arr);
console.log(count);

arr.reverse();
console.log(arr);
