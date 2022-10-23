//增加一个数组求和的方法，任意数组都可直接调用求和
Array.prototype.sum = function () {
  //创建一个数组备份，数组调用方法的this指向数组本身
  const arr = this;
  let sum = 0;
  arr.forEach((item) => (sum += item));
  return sum;
};

let arr = [1, 2, 3, 4];
let result = arr.sum();
console.log(result);
