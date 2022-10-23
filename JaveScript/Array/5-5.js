"use strict";

var a = { name: "xm" },
  b = [4];
b.push(a);
a = b.splice(0, 1);
b = b[0];

console.log(a, b);
