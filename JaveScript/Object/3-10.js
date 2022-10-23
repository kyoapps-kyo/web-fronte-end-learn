"use strict";

const sum = function (b1, b2) {
  console.log(this.c + this.m + this.e + b1 + b2);
};

const xiaoming = {
  c: 100,
  m: 80,
  e: 90,
};

sum.apply(xiaoming, [20, 30]);
sum.call(xiaoming, 20, 30);

function fn1() {
  fn2.apply(this, arguments);
}

function fn2(a, b) {
  console.log(a + b);
}

fn1(33, 44);
