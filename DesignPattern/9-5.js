// 使用现有对象来提供创建的对象__proto__

const prototype = {
  name: "Tom",
  getName: function () {
    return this.name;
  },
};

const obj = Object.create(prototype, {
  job: {
    value: "IT",
  },
});

console.log(obj.getName());
console.log(obj.job);
console.log(obj.__proto__ === prototype);
