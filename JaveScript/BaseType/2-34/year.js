"use strict";

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("请输入年份", (year) => {
  isRunNian(year);
  rl.close();
});

const isRunNian = (year) => {
  if (
    (year % 4 == 0 && year % 100 != 0) ||
    (year % 100 == 0 && year % 400 == 0)
  )
    console.log("是闰年");
  else console.log("不是闰年");
};
