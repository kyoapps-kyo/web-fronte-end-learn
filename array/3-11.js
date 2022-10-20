"use strict";

const arr = ["赵", "钱", "孙", "李"];

const result = (arr) => {
  1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "钱") return arr[i];
  }
  2;
  return arr.slice(1, 2).toString();
  3;
  return arr.splice(1, 1).toString();
};

console.log(result(arr));
