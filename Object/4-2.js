//构造函数的定义和使用
"use strict";

function People(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.sayHello = function () {
    console.log(`我是${this.name}，${this.age}岁，${this.sex}生`);
  };
}

const xiaoHong = new People("小红", 12, "女");
const xiaoMing = new People("小明", 19, "男");
const xiaoZhang = new People("小张", 12, "男");

xiaoHong.sayHello();
xiaoMing.sayHello();
xiaoZhang.sayHello();
