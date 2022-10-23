"use strict";
//递归“吓得我抱起了抱着抱着抱着我的小鲤鱼的我的我的我”这句话

let str = "吓得我抱起了";

function Fn(n) {
  if (n == 0) return "我的小鲤鱼";
  return "抱着" + Fn(n - 1) + "的我";
}

console.log(str + "\n" + Fn(3));
