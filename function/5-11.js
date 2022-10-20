"use strict";

var numadd;

function fn1() {
  var num1 = 1;
  var num2 = 100;
  numadd = () => {
    num2 += 10;
    console.log(num2);
  };
  function fn2() {
    num1 += 1;
    console.log(num1);
  }
  return fn2;
}

var result = fn1();
result(); // 闭包，调用的是fn2(),结果是2
numadd(); // 全局函数，结果是110
result(); // 再一次调用fn2，结果是3
