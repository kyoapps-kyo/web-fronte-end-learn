// 渲染数据，格式限制为数组了
function renderData(data) {
  data.forEach(function (item) {
    console.log(item);
  });
}

// 对非数组的进行转换适配
function arrayAdapter(data) {
  if (typeof data !== "object") {
    return [];
  }

  if (Object.prototype.toString.call(data) === "[object Array]") {
    return data;
  }

  var temp = [];

  for (var item in data) {
    if (data.hasOwnProperty(item)) {
      temp.push(data[item]);
    }
  }

  return temp;
}

var data = {
  0: "A",
  1: "B",
  2: "C",
};

var data3 = [1, 2, 3];
var data2 = "123";

// renderData(arrayAdapter(data)); // A B C
// renderData(arrayAdapter(data3));
renderData(arrayAdapter(data2));
console.log(Object.prototype.toString.call(data3));
