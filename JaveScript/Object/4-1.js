//new 函数
"use strict";

function fn() {
  this.a = arguments[0] || 3;
  this.b = arguments[1] || 5;
}

var obj = new fn(1, 2);

console.log(obj);
