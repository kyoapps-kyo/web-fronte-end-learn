//寻找喇叭花数,abc = a! + b! +c!
"use strict";

function factorial(num) {
  if (num > 1) return num * factorial(num - 1);
  else return 1;
}

function isFlower(num) {
  var ge = num % 10;
  var shi = parseInt(num / 10) % 10;
  var bai = parseInt(num / 100);
  if (num == factorial(ge) + factorial(shi) + factorial(bai)) return true;
  else return false;
}

for (var i = 100; i < 1000; i++) {
  if (isFlower(i)) console.log(i + "是牵牛花数");
}

console.log(factorial(100));
