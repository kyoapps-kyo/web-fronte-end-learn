"use strict";
const { platform } = require("os");
// 水仙花数
const readline = require("readline");

const rl = readline.createInterface({
  output: process.stdout,
  input: process.stdin,
});

console.log("请输入一个三位数，查询是不是水仙数，范围100～999:\n");
rl.prompt();

rl.on("line", function (line) {
  const testNumber = parseInt(line.trim());
  if (!isNaN(testNumber) && testNumber > 99 && testNumber < 1000) {
    isNarcissus(testNumber);
    rl.close();
  } else {
    console.log("请重新输入有效数字，100～999中的三位数:\n");
    rl.prompt();
  }
});

// 方法一 数学方法
// const isNarcissus = (number) => {
//   const gewei = number % 10;
//   const shiwei = parseInt(number / 10) % 10;
//   const baiwei = parseInt(number / 100);
//   if (number == Math.pow(gewei, 3) + Math.pow(shiwei, 3) + Math.pow(baiwei, 3))
//     console.log("是水仙花数", gewei, shiwei, baiwei);
//   else console.log("不是水仙花数", gewei, shiwei, baiwei);
// };

// 方法二 字符串charAt方法

const isNarcissus = (number) => {
  const str = number.toString();
  const g = str.charAt(2);
  const s = str.charAt(1);
  const b = str.charAt(0);
  if (
    number ==
    Math.pow(parseInt(g), 3) +
      Math.pow(parseInt(s), 3) +
      Math.pow(parseInt(b), 3)
  )
    console.log("是水仙花数");
  else console.log("不是水仙花数");
};
