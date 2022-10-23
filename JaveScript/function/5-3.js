"use strict";
//作用链域

var a = 10;
var b = 20;

function fun() {
  var c = 30;
  function inner() {
    var a = 40;
    var d = 50;
    console.log(a, b, c, d);
  }
  inner();
}
fun();
var d = 60;
