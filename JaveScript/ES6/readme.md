# ECMAScript6

- ES6 就是 ES2015 之后的版本

## let const 和 var 的区别

let 和 const 是 es6 之后提出来的，用来声明变量和常量

1. let 和 const 不能变量提升

2. 块级作用域

   - var 没有块级作用域

   ```js
   for (var i = 0; i < 3; i++) {}
   console.log(i); //3 i属于全局变量
   for (let j = 0; i < 3; i++) {}
   console.log(j); //报错
   ```

   - 作用域链

     - 只能由内往外，不能掉转方向
     - 内层作用域 -> 外层作用域 -> ... -> 全局作用域

   - 块级作用域种类

   ```js
   {
   }
   for(){}
   while(){}
   do{}while()
   if(){}
   switch(){}
   //对象的花括号不构成作用域
   //全局、块级作用域、函数作用域
   ```

## let const 的应用

- 主要是块级作用域的应用

```js
let btn = document.querySelectorAll(".btn");
for (let i = 0; i < 3; i++) {
  btn[i].addEventListener(
    "click",
    function () {
      console.log(i);
    },
    false
  );
}
//每次循环都会创建一个块级作用域，所以每个i都有单独的一个值
//使用var时，var定义的是全局变量，不管是不是在for循环里，最终i的值都会是循环结束时的值
//在es6之前，使用闭包解决这个问题
var btn2 = document.querySelectorAll(".btn");
for (var i = 0; i < 3; i++) {
  (function (index) {
    btn[index].addEventListener(
      "click",
      function () {
        console.log(index);
      },
      false
    );
  })(i);
}
//将i作为函数参数传给闭包函数的index，每次调用闭包函数，都会在内存中创建一个单独的index，所以每次调用的index都会不同
```

## 模版字符串

- 在模版字符串中可以使用`${变量名}`调用变量

```js
//输出多行字符串
//模版字符串中，所有的空格、换行或缩进都会保留在输出之中
const info = `line1
line2`;

//输出`和\等特殊字符
// \转义字符， \` \\ => ` \

//模版字符串的注入
// ${里面可以放什么}
// 只要最终可以得到一个值的就可以通过${}注入到模版字符串中
```

- 练习[2-7](./2-7.html)

## 箭头函数

- 箭头函数的注意事项

  1. 单个参数可以省略圆括号(无参数和多个参数不能省略圆括号)
  2. 如果函数体只有单行函数，可以同时去掉{}和 return（多行函数体就不能省略了）单行函数体省略了{}后，return 关键字也必须省略
  3. 如果函数返回的是一个对象{name：'Tim'}，可以使用圆括号包裹对象（{name：'Tim'}）,（）让其成为对象。

  ```js
  const add = (x, y) => ({ value: x + y }); //此时返回的是一个对象
  ```

### 箭头函数中的 this 指向问题

- 箭头函数没有 this

  - 按照 ES6 中的作用域链来对 this 进行查找

  - 箭头函数没有 this ，在箭头函数里面使用的 this 都是外层拥有 this 的作用域里的 this

  - 浏览器中，直接引用箭头函数，this 指向的是 window

  - 箭头函数没有自己的 this，无法实例化对象，也无法使用 call 方法等改变 this 指向，但可以沿着作用域链向外查找 this

- 在**严格模式**下，**本身指向 window 对象的 this 会变成 undefined**

```js
function foo() {
  return () => {
    return () => {
      return () => {
        console.log("id", this.id);
      };
    };
  };
}
var f = foo.call({ id: 1 });
var t1 = f.call({ id: 2 })()();
var t2 = f().call({ id: 3 })();
var t3 = f()().call({ id: 4 });
//这里面只有function foo有this，其余的所有的箭头函数都没有自己的this
//所以最终输出的结果都是id 1
```

## 不适用箭头函数的场景

1. 作为构造函数

2. 需要 this 指向调用函数的时候

3. 需要使用 arguments 的时候

- 在之前定时器中调用的函数的 this 指向的是 window，解决办法是在它的外层备份一个 self 或者 that，然后在定时器使用 self/that 调用对象的 this，现在我们可以尝试使用箭头函数没有 this 的特点，通过作用域链向外找 this 的特性，为定时器指定 this

- [3-12.html](./3-12.html)
- [3-14.html](./3-14.html)

# 解构赋值

## 数组的解构赋值

- const [a,b,c...] = [1,2,3...]

- 解析某一数据的解构，将我们想要的东西提取出来，赋值给变量或常量

### 解构赋值的原理

- 模式（结构）匹配

- 索引值相同的完成赋值

- 不取值的用“，”跳过

### 数组解构值的默认值

```js
// 当数组成员严格===undefined时，对应的默认值才会生效
const [a = 1, b = 2] = []; // 1，2
// 如果默认值是表达式，默认值表达式是惰性求值的
const fn = () => {
  console.log("我被执行了");
  return 1;
};
const [a = fn()] = [2]; // 2
//当右边不是undefined，左边的表达式不会执行，只有符合默认值条件是，表达式才会被执行
```

### 数组解构赋值的应用场景

1. arguments 类数组

2. NodeList 节点列表

3. 函数参数的解构赋值

4. 交换变量值，[x,y] = [y,x]; 因为等号左边是变量或常量，右边是值，所以这个等式可以完成变量交换运算

## 对象解构赋值

### 对象解构赋值原理

1. 模式（结构）匹配

2. 属性名相同的完成赋值

```js
//普通写法
const user = { name: "Tom", age: 18 };
//正常解构
const { name, age } = user; // name = user.name age = user.age
//对应的解构
const { name: name, age: age } = user;
//通过上面这种形式，我们可以看出，：左边获得解构对象里面的值，：右边是解构使用的变量名，所以我们可以这么做
//取别名
//将：右边的变量名修改，就可以与解构对象的属性名不一样，来使用解构出来的变量了
let { name: varName, age: varAge } = user; //varName = Tom varAge = 18
```

### 对象解构赋值的注意事项

1. 对象解构赋值的默认值，同数组解构

2. 将一个已经声明的变量用于解构赋值

```js
let x = 2;
//{x} = {x:1} 错误
//{x}被当作是作用域块，不会被当作对象
//处理办法和箭头函数处理单返回值对象的情况一样
//如果将一个已经声明的变量用于对象的解构赋值，整个赋值在圆括号中进行
({ x } = { x: 1 });
```

3. 可以取到继承的属性

```js
const { toString } = {}; // 取出Object的toString方法
```

### 对象解构赋值的应用

1. 函数参数的解构赋值

2. 复杂嵌套

## 其他数据类型的解构赋值

1. 字符串的解构赋值

- 同对象或者数组

2. 数值和布尔值的解构赋值

- 会将数值或者布尔值用包装类转换成对象，但因为转换后的对象内没有任何属性值，解构出来的变量值都是 undefined

3. undefined 和 null 的解构赋值

- 因为 undefined 和 null 没有对应的包装类，无法通过对它们转换成相应对象，所以程序会报错

# 对象字面量增强和函数参数的默认值

## 属性和方法的简洁表示法

- 对象字面量

```js
const obj = {
  name: "Tom",
  age: 18,
};
```

- 属性的简洁表示法

```js
const age = 18;
const name = "Tom";
//当键名和常量名或变量名一样的时候，可以只写一个
const obj = {
  name,
  age,
};
```

- 方法的简洁表示法

```js
const obj = {
  //通常方法
  //getName: function () {},
  //简洁方法
  //方法可以省略冒号和function关键字
  getName() {},
};
```

## 方括号语法

- 方括号语法的用法

  ```js
  //es6之前，需要对person对象进行声明才可以使用方括号语法
  const prop = "age";
  const person = {};
  person[prop] = 18;
  //现在方括号语法可以直接写在对象字面量中
  const uer = {
    [prop]: 18,
  };
  ```

- 方括号中间有什么

  - **\[值或者通过计算可以得到值的(表达式)\]**

- 方括号语法和点语法的区别

  - 点语法是方括号语法的特殊形式

  - 使用点语法的情况：**属性名是由数字、字母、下划线以及$构成，并且数字还不能打头的时候可以使用点语法**

## 函数参数的默认值

1. 认识函数参数的默认值

2. 函数参数默认值的基本用法

```js
// y 默认值是1
// 直接给参数赋值就是给参数设置默认值的方式
const multiply = (x, y = 1) => {
  return x * y;
};
```

- 关于函数参数默认值

  - 不传参或者明确的传递 undefined 作为参数，只有这两种情况下，默认值才会生效

  - 如果默认值是表达式、默认值表达式是惰性求值的

  - 设置默认值的小技巧

    - 函数参数的默认值，最好从参数列表的右边开始设置

## 函数参数默认值在实际中的应用情况

- 接收很多参数的时候，可能因为参数太多，造成函数难以使用，这个时候可以接受一个对象作为参数，再到函数参数位置，对对象解构，并设置默认值，这样就可以解决参数过多的问题

```JS
//传参设置默认值，并对传参对象设置默认值
const logUser = ({username="Tom", age=18, sex="male" } = {}) => {
  console.log(username,age,sex);
}
logUser();
logUser({username:"joy",age:19});
```

## 剩余参数和展开运算符

### 剩余参数

1. 剩余参数

- `const add = (x,y,z,...args) => {}` ...args 就是剩余参数，args 用法同 arguments，但 args 是一个数组，args 的变量名可以是任意符合有效命名规则的名称，只是大家习惯使用 args 来命名

2. 剩余参数的注意事项

- 箭头函数的剩余参数
  - `const add = ...args => {}`错误
  - `const add = (...args ) = > {}` 只有剩余参数时，不能省略括号
- 使用剩余参数代替 arguments 获取实际参数

- 剩余参数的位置
  - 剩余参数只能是在最后面，剩余参数的后面不能有其他的参数

3. 剩余参数的应用

- 与解构赋值结合使用 `const [num, ...args] = [1, 2, 3, 4];` 解构数组 args 是数组，解构对象 args 是对象

### 数组的展开运算符

- ...arr

- 区分剩余参数和展开运算符

  - 根本区别
    - 在函数的参数中与解构赋值结合使用时表示剩余元素；直接作为函数参数使用时表示剩余参数；展开数组中的所有元素，表示展开运算符。

### 数组展开运算符的应用

- 展开数组

- 合并数组

- 字符串转数组 `strArr = [...str]`

- 常见的类数组转换成数组
  - arguments -> `[...arguments]`
  - NodeList -> `[...NodeList]`

### 对象的展开运算符

- 必须在{}括号中展开

- 对象的展开： 把属性罗列出来，用逗号分隔，放到一个{}中，构成新对象

- 合并对象`const obj1; const obj2; {...boj1,...obj2}`

  - 这里合并对象，重复的属性会覆盖，后面的覆盖前面的

### 对象展开运算符的注意事项

- 空对象的展开
  - 无任何效果
- 非对象的展开
  - 如果展开的不是一个对象，则会自动将其转为对象，再将其属性罗列出来
- 对象中对象属性的展开
  - 对象中的对象属性并不会继续展开

### 对象展开运算符的应用

1. 复制对象 `const obj1; const obj2 = {...obj1 }` 这里的 obj2 是新的对象

2. 展开对象的函数默认参数设置

```js
const logUser = (userParam) => {
  const defaultParam = {
    username: "guest",
    age: 20,
    sex: "robot",
  };
  const { username, age, sex } = { ...defaultParam, ...userParam };
  console.log(username, age, sex);
};
logUser({ username: "kyo", age: 18, sex: "male" });
```

## Set 和 Map 数据结构

### Set

- 是一系列无序、没有重复值的数据集合

- Set 没有下标，不能像数组那样通过下标访问 Set 的成员

- Set 实例的方法

```js
const s = new Set();
s.add(1).add(2).add(3);
s.has(3);
s.delete(4); // 删除不存在的成员时，什么都不会发生
s.clear(); // 删除全部
```

- 访问 set 中的成员，需要使用 forEach 遍历所有成员

```js
s.forEach((value, key, set) => {
  // Set中的value == key
  // set == s
});
//回调的是function而不是箭头函数时，可以通过设置第二个参数指定指向对象
s.forEach(function (value, key, set) {
  // Set中的value == key
  // set == s
}, document);
```

- 按集合添加的先后顺序遍历

- Set 实例的属性 s.size()

- Set 构造函数的参数

  1. 数组作为参数，返回一个将数组去重复的 set 集合

  2. 字符串、arguments、NodeList、Set 等

- 注意事项

  1. 判断重复值

  - Set 对重复值的判断基本遵循严格相等===
  - 但是对于 Nan 的判断与===不同，Set 中 NaN 等于 Nan

  2. 使用 Set 的情况

  - 对一个数组或字符串去重的时候
  - 不需要通过下标访问，只需要遍历的时候
  - 为了使用 Set 提供的属性和方法的时候（add delete clear has forEach size 等）

- Set 的应用

  1. 数组去重与 Set 还原为数组 `s = new Set(arr); arr = [...s];`
  2. 字符串去重与 Set 还原为字符串 `s = new Set(str); str = [...s].join("")`
  3. 存放 DOM 标签

### Map

- 和对象类似，是键值对的集合

- 和对象的区别

  - 对象的 key 只能是 string 类型

  - Map 对象的 key 可以是
    - 基本数据类型：数字、字符串、布尔值、undefined、null
    - 引用数据类型：对象([],{},function,Set,Map...)
    - 以上都可以作为 Map 的键

- Map 实例的方法和属性

```js
//方法
const m = new Map();
m.set("age", 18).set(true, "true").set(null, undefined); // set添加新成员，键如果已经存在，后添加的键值对覆盖已有的
m.get("age"); //18
m.has(true); //true
m.delete(true); // 删除不存在的成员不会报错
m.clear(); //全删除

m.forEach(function (value, key, map) {}, document);

m.size();
```

- Map 构造函数的参数

  1. 二维数组，必须体现出键和值的数组

  ```js
  new Map([
    ["name", "Tom"],
    ["age", "18"],
    ["sex", "male"],
  ]);
  ```

  2. Set Map 等

- Map 的注意事项

1. 判断键名是否相同的方式
   - 同 Set 一样，遵循严格相等，但是 NaN 是例外
2. 什么时候使用 Map
   - 只需要键值对的结构，或者需要字符串以外的值做键，使用 Map 更合适

## Iterator 和 for of

### Iterator 的作用

- 遍历器（迭代器）

- 可遍历对象（可迭代对象），有一个 next 方法，通过 next 方法可以得到一个对象，对象里面包含一个 value 和一个 done 属性

- Symbol.iterator：可遍历对象的生成方法的键

```javascript
const it = [1, 2, 3, 4][Symbol.iterator]();
console.log(it.next()); // value: 1, done: false;
console.log(it.next()); // value: 2, done: false;
console.log(it.next()); // value: 3, done: false;
console.log(it.next()); // value: 4, done: false;
console.log(it.next()); // value: undefined, done: true;
```

- Iterator 表示的是一个过程：Symbol.iterator（可遍历对象的生成方法）->it（可遍历对象）->it.next() -> it.next()->...（直到 done 为 true）

```js
//在对象中使用Symbol
const b = Symbol("symbol-name");
const obj = {
  name: "name",
  [b]: "value",
};
```

### 为什么需要 Iterator 遍历器

- Iterator 遍历器是一个统一的遍历方式，适合任何拥有[Symbol.iterator] 属性的对象： Array、Set、Map

- 为了方便使用 Iterator 遍历器，制定了 for of 循环，将 Iterator 底层逻辑封装在了 for of 里面

### for...of 的基本能用法

- `for(const item of arr){ console.log(item) }`

- 如何在 for of 中取得数组的索引

```js
arr.keys(); // 获得数组键的可遍历对象
for (const key of arr.keys()) {
  console.log(key); // 这里打印出的就是数组的索引值
}
arr.values(); // 获得数组值的可遍历对象
for (const value of arr.values()) {
  console.log(value); // 这里打印出的就是数组的值
}
arr.entries(); // 获得的是索引值+数组值组成的数组的可遍历对象
for (const [index, value] of arr.entries()) {
  console.log(index, value); // 这里打印出的就是数组的index和value
}
```

[返回最上部](#ecmascript6)
