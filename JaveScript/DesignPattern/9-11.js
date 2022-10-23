//对象的遍历，往往不能与数组一样使用统一的遍历代码，封装一下

function each(obj, cb) {
  var value;

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; ++i) {
      value = cb.call(obj[i], i, obj[i]);

      if (value === false) {
        break;
      }
    }
  } else {
    for (var i in obj) {
      value = cb.call(obj[i], i, obj[i]);

      if (value === false) {
        break;
      }
    }
  }
}

each([1, 2, 3], function (index, value) {
  console.log(index, value);
});

each({ a: 1, b: 2 }, function (index, value) {
  console.log(index, value);
});

// 0 1
// 1 2
// 2 3
// a 1
// b 2
