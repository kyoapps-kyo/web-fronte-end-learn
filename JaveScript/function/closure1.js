//闭包的记忆性
//创建体温检测函数checkTemp(n)，可以检查体温n是否正常，函数返回布尔值
//但是不同的小区有不同的体温检测标准，比如A小区体温合格线是37.1度，而B小区体温合格线是37.3度，应该怎么做呢？
"use strict";

function createCheckTemp(standardTemp) {
  const checkTemp = (n) => {
    return n > standardTemp ? false : true;
  };
  return checkTemp;
}

//调用时，createCheckTemp传的是standardTemp的值，checkTemp传的是检查温度的值，当处于闭包环境中，之前设置的standardTemp = 37.1不会消失，在之后的比较中，会一直存在在内存中。

const checkTemp_A = createCheckTemp(37.1);

const checkTemp_B = createCheckTemp(37.5);

console.log(checkTemp_A(37.2) ? "体温合适" : "体温偏高");

console.log(checkTemp_B(37.2) ? "体温合适" : "体温偏高");
