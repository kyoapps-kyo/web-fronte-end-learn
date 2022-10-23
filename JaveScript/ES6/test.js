const arr = ["i", "m", "o", "o", "c"];
//    在此补充代码
for (const [index, value] of arr.entries()) {
  if (value == "o") {
    arr[index] = value.toUpperCase();
  }
}
console.log(arr);
