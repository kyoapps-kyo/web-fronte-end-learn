//尝试用三种方式对数组去重
const arr = [1, 1, "1", 17, true, true, false, false, "true", "a", {}, {}];

let newArr = [...new Set(arr)];

console.log("Set去重");
console.log(newArr);

newArr = [];
console.log("重置数组");
console.log(newArr);

newArr = arr.reduce((prev, current) => {
  if (prev.includes(current)) return prev;
  else prev.push(current);
  return prev;
}, []);
console.log("reduce去重");
console.log(newArr);

newArr = [];
console.log("重置数组");
console.log(newArr);

const m = new Map();
for (let index = 0; index < arr.length; index++) {
  m.set(arr[index], 0);
}
m.forEach((value, key) => newArr.push(key));

console.log("Map去重");
console.log(newArr);
