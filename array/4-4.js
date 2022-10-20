//数组去重，使用空数组，如果空数组中没有，就压入
const arr = [1, 2, 3, 4, 32, 4, 4, 2, 2, 1, 14, 2];
const newArr = [];

for (let i = 0; i < arr.length; i++) {
  newArr.includes(arr[i]) ? console.log(newArr) : newArr.push(arr[i]);
}
console.log(arr, newArr);

//随机取三个数出来，取到新值压入result数组数组中，同时删除原数组的对应项，避免重复
const result = [];
for (let i = 0; i < 3; i++) {
  let index = parseInt(Math.random() * newArr.length);
  result.push(newArr[index]);
  newArr.splice(index, 1);
}

console.log(result);
