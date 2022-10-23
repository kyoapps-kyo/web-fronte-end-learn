//求34.1398保留两位小数的四舍五入的结果

function getRoundNum(num, n) {
  //先乘以 10 的 n 次幂，对结果四舍五入，在除以 10 的 n 次幂得到最终结果
  return Math.round(num * Math.pow(10, n)) / Math.pow(10, n);
}

let num = 34.1398;

num = getRoundNum(num, 2);

console.log(num);

//求数组最大值或最小值

function getArrayMax(arr) {
  return Math.max.apply(null, arr);
}

function getArrayMin(arr) {
  return Math.min.apply(null, arr);
}

const arr = [12, 3, 43, 2, 5, 2, 41, 4, 1, 31];

console.log(getArrayMax(arr));
console.log(getArrayMin(arr));

console.log(arr.sort((a, b) => b - a));
