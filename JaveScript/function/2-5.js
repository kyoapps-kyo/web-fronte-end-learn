"use strict";

console.log(fun);

var fun = function () {
  console.log("A");
};

function fun() {
  console.log("B");
}

fun();
