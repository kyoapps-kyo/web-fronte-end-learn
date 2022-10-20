"use strict";

//猜数字游戏，2～99之间的数字，猜对的话退出

const readline = require("readline");

const rl = readline.createInterface({
  output: process.stdout,
  input: process.stdin,
});

let min = 2,
  max = 99;

const target = parseInt(Math.random() * 98 + 2);

console.log(
  `小游戏，猜猜${min - 1}～${max + 1}之间的随机数，猜对了才能退出～ `,
  target
);

rl.prompt();

rl.on("line", function (line) {
  let guess = parseInt(line.trim());
  if (guess < min || guess > max) {
    console.log(`请输入${min - 1}～${max + 1}内的值`);
    rl.prompt();
  } else if (guess > target) {
    max = guess;
    console.log(`太大了，请重新输入${min - 1}～${max + 1}`);
    rl.prompt();
  } else if (guess < target) {
    min = guess;
    console.log(`太小了，请重新输入${min - 1}～${max + 1}`);
    rl.prompt();
  } else if (guess == target) {
    console.log("恭喜，猜对了！");
    rl.close();
  }
});
