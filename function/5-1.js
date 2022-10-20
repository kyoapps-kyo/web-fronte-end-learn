"use strict";

var a = 10;
console.log(a);
function fun() {
  //函数内部的a变量提升，此时的a时undefined，a++为NaN
  console.log(a);
  a++;
  console.log(a);
  var a = 5;
  console.log(a);
}
fun();
console.log(a);
