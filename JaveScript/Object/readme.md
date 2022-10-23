# 对象基础

## 认识对象

- object 是 **“键值对”的集合**，表示属性和值的“映射关系”

### 属性名是否加引号

- 如果对象的属性键名不符合 js 标识符命名规范，则这个键名必须用引号包裹

  - 对不符合 js 标识符命名规范的属性，使用方括号的方法来访问
    - object['key-name'];

- 如果属性名一变量形式存储，则必须使用方括号形式

```js
const obj = {
  a: 1,
  b: 2,
  c: 3,
};
let key = "b";
console.log(obj.key); // undefined
console.log(obj[key]); // 2
```

### 属性的创建

- 如果对象本身没有某个属性值，则用点语法赋值时，这个属性会被创建出来

### 属性的删除

- 删除某个对象的属性，需要使用 **delete 操作符**
  - delete obj.a

## 对象的方法

- 值为函数的属性就是方法

# 对象的遍历

## for...in...循环

```js
for (var key in obj) {
  console.log("属性" + k + "的值是" + obj[k]);
}
```

## 对象的深浅克隆

- 对象是引用类型值
  - 不能用 obj1 = obj2，来克隆对象
  - 使用==或者===进行比较时，**比较的是他们是否为内存中的同一个对象**，而不是比较值是否相同

### 浅克隆

```js
for (var key in obj1) {
  obj2[k] = obj1[k];
}
```

### 深克隆

object-deepclone.js

## 上下文

- 函数中可以使用 this 关键字，它表示函数的上下文

- this 具体指代什么 **必须通过调用函数时的“前言后语”来判断**

- 函数的上下文是由函数的调用方式决定，对象直接.调用方法，this 指的是对象，将方法赋值给全局变量再通过全局变量使用函数，this 指的是 window 对象

---

# 永远都不知道函数中的 this 指的是什么，函数只有被调用，它的上下文才能被确定

## 函数的上下文由调用函数的方式决定

- 函数的上下文（this 关键字）由 **调用函数** 的方式决定，function 是 **“运行时上下文”** 策略

- 如果函数不调用，则不能确定函数的上下文

## 上下文规则

1. 规则 1

   - 对象打点调用它的方法函数，则函数上下文时这个打点对象， obj.fn()

2. 规则 2

   - 圆括号直接调用函数，则函数的上下文时 window 对象，function()

3. 规则 3

   - **数组（类数组对象）枚举出函数进行调用，上下文是这个数组（类数组对象）**，array\[idx\]()
     ```js
     var arr = [
       "a",
       "b",
       "c",
       function () {
         console.log(this[0]);
       },
     ];
     // a
     ```

4. 规则 4

   - **IIFE 中的函数，上下文是 window 对象**， (function(){})()

5. 规则 5

   - **定时器、延时器调用函数，上下文是 window 对象**，setInterval(函数，时间);setTimeout(函数，时间);
   - 使用 self = this;备份， 解决上下文对象是 window 的问题，在延时器、定时器中调用 self，使用调用对象

6. 规则 6

   - **事件处理函数的上下文是绑定事件的 DOM 元素**， DOM 元素.onevent = function(){};

## call 和 apply

- call 和 apply 能指定函数的上下文

  - 函数.call(上下文)
  - 函数.apply(上下文)

- call 和 apply 的区别
  - 函数.call(上下文,参数 1,参数 2...)
  - 函数.apply(上下文,[参数数组])

# 构造函数与类

## 用 new 操作符调用函数

- new 函数()　**调用函数四步走**
  1. 函数体内会自动创建出一个空白对象
  2. 函数的上下文(this)会指向这个对象
  3. 函数体内的语句会执行
  4. 函数会自动返回上下文对象，即使函数没有 return 语句

## 构造函数

- 用 new 调用一个函数，这个函数就被称为“构造函数”，任何函数都可以是构造函数，只需要用 new 调用它

- 构造函数用来“构造新对象”，它内部的语句将为新对象添加若干属性和方法，**完成对象的初始化**

- 构造函数必须用 new 关键字调用，否则不能正常工作，正因为如此，开发者约定 **构造函数命名时首写字母要大写**

- 构造函数中的 this 不是函数本身

## 类与实例

- JAVA、C++ 是 object-oriented 语言，oo

- JS 是 基于对象 object-based 语言， ob

- JS 中没有类，只有构造函数

# prototype 和原型链查找

## prototype

- 任何函数都有 **prototype 属性**，prototype 是“原型”的意思

- prototype 属性值是个对象，它默认拥有**constructor 属性指回函数**

- 普通函数来说的 prototype 属性没有任何作用，而 **构造函数的 prototype 属性非常有用**

- **构造函数的 prototype 属性是它的实例的原型**

### prototype 的作用 - 原型链查找

- js 规定：**实例可以打点访问它的原型的属性和方法，这称之为“原型链查找”**

### hasOwnProperty

- 实例.hasOwnProperty('属性名/方法名') 方法可以检查对象是否真正“自己拥有”某属性或者方法

### in

- in 运算符只能 **检查某个属性或方法是否可以被对象访问，不能检查是否是自己的属性或方法**

- "属性名/方法名" in 对象实例

## 在 prototype 上添加方法

- 将方法直接写到构造函数上时，每实例一个新的对象，都会在内存创建一个新的函数地址，造成内存浪费

- 将方法写在 prototype 上，解决内存浪费问题

## 原型链的终点

- Object -> prototype -> Object.prototype <- People.prototype <- tom

## 关于数组的原型链

- 数组是构造函数 Array 的实例，遵循原型链的使用规则

## 继承

- x is a kind of y ，x 是一种 y

- 使用原型链实现继承，是 js 普遍的做法

- 子类的 prototype 指向，父类的一个实例，将子类的方法定义在这个指向的实例上，从而实现 js 的继承

- 子类.prototype = new 父类()

- 子类.prototype.父类方法 = 新方法，实现子类重写父类方法

# 面向对象

- 前端中常用到的面向对象的场合： **需要封装和复用性的场合（组件思维）**

## 红绿灯切换问题

- TrafficLight 类
  - 属性： 自己当前的颜色 color、自己的 DOM 元素 dom
  - 方法： 初始化 init（）、切换颜色 changeColor（）、绑定事件 bindEvent（）

## 炫彩小球

- Ball 类
  - 属性： 圆心坐标 x、y，圆半径 r，透明度 opacity，颜色 color，DOM 元素 dom
  - 方法： 初始化 init，更新 update
  - 思路：实现多个小球动画
    - 把每一小球实例放到同一个数组中
    - 使用一个定时器，在每一帧遍历每一个小球，调用它们的 update 方法

# 内置对象

## 包装类

- Number() String() Boolean() 分别是数字、字符串、布尔值的 **“包装类”**

- **包装类的目的是为了让基本类型值可以从它们的构造函数的 prototype 上获得方法**

```js
var a = new Number(123);
var b = new String("Tom");
var c = new Boolean(true);
// a b c 是不是基本类型值？ 它们与普通的变量有什么区别？
// 它们都是object
// 虽然它们都是object，但是可以参与普通运算
```

### 包装类知识总结

- Number(),String()和 Boolean()的实例都是 object 类型，它们的 PrimitiveValue 属性储存它们的本身值

- new 出来的基本类型值可以正常参与运算

- 包装类的目的就是为了让基本类型值可以从它们的构造函数的 prototype 上获得方法

## Math 对象

- 幂和开方：Math.pow() Math.sqrt()

- 向上取整和向下取整：Math.ceil() Math.floor()

- 四舍五入：Math.round()

  - 四舍五入到小数点后 n 位
    - 先乘以 10 的 n 次幂，对结果四舍五入，在除以 10 的 n 次幂得到最终结果

- 参数列表的最大值、最小值：Math.max() Math.min()

  - 利用 Math.max()或 Math.min() 求数组对大值和最小值
    - 使用 apply，将数组打散传入到 Math.max/min 中
    - ES6 中，对...array 可以将数组拆散

- 0~1 之间的随机数 Math.random()
  - \[a,b\]区间内的整数, parseInt(Math.random()\*(b-a + 1))+a

## Date(日期)对象

- new Date() 得到当前时间的日期对象

- new Date(2022,10,20)得到指定日期的日期对象，月份参数从 0 开始，到 11 结束

- 也可以使用 new Date('2022-12-01')

### 日期对象的常见方法

- getDate() 1~31
- getDay() 0~6
- getMonth() 0~11
- getFullYear() year
- getHours() 0~23
- getMinutes() 0~59
- getSeconds() 0~59

### 时间戳

- 表示 1970 年 1 月 1 日 0 点整距离某时刻的毫秒数

- 通过 getTime()方法或者 Date.parse()函数将日期对象变成时间戳

- 通过 new Date(timestamp) 将时间戳转换成时间

# 继承拓展

- 通过原型链实现的继承，如果父类的属性中有引用类型值，则这个属性会被所有子类的实例共享
- 子类的构造函数中，往往需要重复定义很多超类定义过的属性。

## 借用构造函数

- 为了解决上面的两个问题，通常使用一种叫做“借助构造函数”的技术，也被称为“伪造对象”或“经典继承”

- 在子类构造函数的内部，调用超类的构造函数，使用 call()绑定上下文

```js
function People(name) {
  this.name = name;
}
function Student(name, school) {
  People.call(this, name);
  this.school = school;
}
```

## 组合继承

- 借用原型链和借用构造函数的技术组合到一起，叫做组合继承，也叫做伪经典继承

- 组合继承是 JS 中最 **常用的** 继承模式

### 组合继承的缺点

- 组合继承无论什么情况下，都会调用两次超类的构造函数：一次是在创建子类原型的时候，另一次是在子类构造函数的内部

## 原型式继承

### Object.create()

- IE9+开始支持 Object.create()方法，可以 **根据指定的对象为原型，创建出新的对象**

```js
var obj2 = Object.create(obj1); //or
var obj3 = Object.create(obj1, {
  newKey: {
    value: 123,
  },
});
```

- 在没有必要创建构造函数，而只是对新对象与现有对象“类似”的情况下，使用 Object.create()即可，称之为 **原型式继承**

## Object.create()的兼容性写法

- 如何在低版本浏览器实现 Object.create()

- 道格拉斯函数，以 o 为原型，创建新对象

## 寄生式继承

- 编写一个函数，它接收一个参数 o，返回以 o 为原型的新对象 p，同时给 p 上添加预置的新方法

- 寄生式继承，它可以“增强对象”，只要把对象传入这个函数，这个函数将以此对象为“基础”创建出新对象，并为新对象赋予新的预置方法

- 意义类似于原型式继承

### 寄生式继承的缺点

- 使用寄生式继承来为对象添加函数，会由于不能做到函数复用而降低效率，即“方法没有写到 prototype 上”

## 寄生组合式继承

- 组合式继承的缺点

- 通过借用构造函数来继承属性，通过原型链的混成形式来继承方法

- 思路：不必为了指定子类型的原型而调用超类型的构造函数，**我们所需要的无非就是超类型原型的一个副本。** 本质上，**使用寄生式继承来继承超类型的原型，然后再将结果指定给子类型的原型。**

## instanceof 运算符

- instanceof 运算符用来检测“某对象是不是某个累的实例”

```js
tom instanceof Student; //当前类和父类以及Object都为真
```

- 底层机理：**检查 Student.prototype 属性是否在 tom 的原型链上**，多少层都行，只要在就行

## 内置构造函数

- Array Object Function ...

- 内置构造函数，**所有该类型的方法都定义在它们的内置构造函数的 prototype 上**，我们可以对这个对象添加新的方法，从而拓展某类型的功能

- 对内置构造函数的 prototype 增加方法

```js
//增加一个数组求和的方法
Array.prototype.sum = function () {
  //创建一个数组备份，数组调用方法的this指向数组本身
  const arr = this;
  let sum = 0;
  arr.forEach((item) => (sum += item));
  return sum;
};
let arr = [1, 2, 3, 4];
let result = arr.sum();
console.log(result);
```

## 内置构造函数的关系

### Object.prototype 是万物原型链的终点
