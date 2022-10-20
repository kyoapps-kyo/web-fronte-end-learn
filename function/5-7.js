//闭包
//什么是闭包closure？闭包是函数本身和该函数声明时所处的环境状态的组合
"use strict";
function fun() {
  var name = "hello";
  return () => {
    console.log(name);
  };
}

const inn = fun();

inn();
