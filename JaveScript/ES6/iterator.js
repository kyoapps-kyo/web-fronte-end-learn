//自己定一个迭代器next方法，用于使for...of可以循环对象

const obj = new Object({
  name: "Tom",
  age: 18,
  school: "x school",
});

obj[Symbol.iterator] = () => {
  let index = -1;
  return {
    next() {
      index++;
      if (index === 0) {
        return {
          value: obj.name,
          done: false,
        };
      } else if (index === 1) {
        return {
          value: obj.age,
          done: false,
        };
      } else if (index === 2) {
        return {
          value: obj.school,
          done: false,
        };
      } else {
        return {
          value: undefined,
          done: true,
        };
      }
    },
  };
};
for (const item of obj) {
  console.log(item);
}

// 如果对象的属性名是有序的数字,并且有长度

const user = {
  0: "tom",
  1: "jerry",
  2: "marry",
  3: "joy",
  4: "alice",
  5: "tomas",
  length: 6,
};

user[Symbol.iterator] = () => {
  let index = 0;
  return {
    next() {
      let value, done;
      if (index < user.length) {
        value = user[index];
        done = false;
      } else {
        value = undefined;
        done = true;
      }
      index++;
      return {
        value,
        done,
      };
    },
  };
};

for (const item of user) {
  console.log(item);
}
