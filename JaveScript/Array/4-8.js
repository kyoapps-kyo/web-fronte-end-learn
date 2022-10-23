var arr = [
  ["慕", "课", "网"],
  ["程", "序", "员"],
  ["梦", "工", "厂"],
];
var strArr = [];
// 补充代码
for (var i = 0; i < arr.length; i++) {
  strArr.push(arr[i].join(""));
}

var str = strArr[0] + "," + strArr[1] + "的" + strArr[2];

console.log(str);
