"use strict";
//1～100中那个数字除3余1，除4余2，除5余3？

let numbers = [];

for (let i = 1; i < 101; i++) {
  if (i % 3 == 1 && i % 4 == 2 && i % 5 == 3) numbers.push(i);
}

console.log(numbers);
