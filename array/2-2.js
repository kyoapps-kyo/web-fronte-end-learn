"use strict";

const arr = new Array(
  { name: 10, value: 20 },
  { name: 321, value: 214 },
  { name: 1234, value: 213 },
  { name: 2, value: 123 },
  { name: 124213, value: 123 }
);

arr.forEach((item, index) => {
  console.log(
    index,
    (item.name = item.name * 2),
    (item.value = item.value * 2)
  );
});

console.log(arr);

console.log(Array.isArray(arr));

arr.push(
  { name: 10, value: 10 },
  { name: 10, value: 10 },
  { name: 10, value: 10 }
);

console.log(arr.pop());
console.log(arr);

arr.unshift({ name: 20, value: 20 });

console.log(arr);

console.log(arr.shift());
