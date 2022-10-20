//深克隆，递归方法，克隆一样的数值和结构
"use strict";

const array = [12, 23, [123, [4231, 1234, [123, 13, 1], 14], 145], 13, 24];

const deepClone = (array) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result.push(deepClone(array[i]));
    } else {
      result.push(array[i]);
    }
  }
  return result;
};
console.log(deepClone(array));
