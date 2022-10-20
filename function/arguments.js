"use strict";

function add() {
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(add(1, 2, 3, 4, 5, 6, 7, 1));

var arr = [
  1,
  null,
  false,
  true,
  "string",
  undefined,
  NaN,
  ["array"],
  { name: "object" },
];

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i] + " : " + isNaN(arr[i]));
}
