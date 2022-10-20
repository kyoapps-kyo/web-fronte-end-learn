"use strict";

const obj = {
  a: 1,
  b: 2,
  c: 2,
  d: [
    1,
    2,
    {
      m: 2,
      n: 5,
      p: [1, 2, 3],
    },
  ],
};

function deepClone(o) {
  if (Array.isArray(o)) {
    var result = [];
    o.forEach((item) => {
      result.push(deepClone(item));
    });
  } else if (typeof o == "object") {
    var result = {};
    for (var key in o) {
      result[key] = deepClone(o[key]);
    }
  } else {
    var result = o;
  }
  return result;
}

const obj2 = deepClone(obj);

console.log(obj2);
console.log(obj2 == obj, obj2 === obj);
