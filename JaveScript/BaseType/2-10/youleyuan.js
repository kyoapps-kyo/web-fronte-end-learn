"use strict";
//判断游乐园门票
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let age, weekday;
let next, weekNext;
console.log("请输入年龄");

rl.prompt();
rl.on("line", (line) => {
  if (!next) {
    age = parseInt(line.trim());
    if (isNaN(age) || age < 0 || age > 150) {
      console.log("请重新输入年龄");
      rl.prompt();
    } else {
      next = true;
      rl.prompt();
    }
  }
  if (next && !weekNext) {
    console.log("请输入星期几");
    weekNext = true;
    rl.prompt();
  } else if (next) {
    weekday = parseInt(line.trim());
    if (isNaN(weekday) || weekday < 0 || weekday > 6) {
      console.log("请重新输入星期几");
      weekNext = true;
      rl.prompt();
    } else {
      console.log(`年龄:${age}, 星期:${weekday + 1}`);
      console.log(`\n票价为:${menpiao(age, weekday)}元`);
      rl.close();
    }
  }
});

const menpiao = (age, weekday) => {
  if (weekday < 6 && weekday > 0)
    if (age > 10) return 300;
    else return 140;
  else if (age > 10) return 500;
  else return 210;
};
