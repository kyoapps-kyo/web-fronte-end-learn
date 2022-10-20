"use strict";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let str = "123456789";

const spliceArr = [12, 13, 14, 16];

const spliceStr = "qwe";

// arr.splice(3, 4, spliceArr);

str = spliceStr + str.slice(1);

console.log(str);

arr.splice(1, 1, spliceArr);

console.log(arr);
