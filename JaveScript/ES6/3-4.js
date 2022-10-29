// Promise方法
const change = (data, { x = 0, y = 0 } = {}, end = () => {}) => {
  setTimeout(() => {
    data.x = x;
    data.y = y;
    console.log(data);
    end();
  }, 1000);
};
const data = { x: 0, y: 0 };
const data2 = { x: 0, y: 0 };

//回调地狱方法

// change(data, { x: 10 }, () => {
//   change(data, { x: 10, y: 10 }, () => {
//     change(data, { y: 10 }, () => {
//       change(data, {});
//     });
//   });
// });

//用Promise解决回调地狱

const changePromise = (data, changeData) => {
  return new Promise((resolve) => {
    change(data2, changeData, resolve);
  });
};

changePromise(data2, { x: 20 })
  .then(() => {
    return changePromise(data2, { x: 20, y: 20 });
  })
  .then(() => {
    return changePromise(data2, { y: 20 });
  })
  .then(() => {
    return changePromise(data2);
  });
