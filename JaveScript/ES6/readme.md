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

### 原生可遍历和非原生可遍历

- 只要有 Symbol.iterator 方法，并且这个方法可以生成可遍历对象，就是可遍历的

- 只要可遍历，就可以使用 for...of 循环来统一遍历

- 原生可遍历的数据类型

  1. Array
  2. String
  3. Set
  4. Map
  5. arguments
  6. NodeList

- 非原生可遍历
  [实例代码](./2-11.js)

### 使用了 Iterator 的场合

1. 数组的展开运算符

2. 数组的解构赋值

3. Set 和 Map 的构造函数

## ES6 新增方法

### 字符串新增方法

1. includes()

   - (Array || String).includes(target, index?)
   - index default 0;
   - [应用](./2-1.js)

2. padStart() padEnd()

   - `padStart(length, str)`, length 字符补全后的长度，str 从头部开始补全的字符
   - `padEnd(length, str)`, length 字符补全后的长度，str 从尾部开始补全的字符
   - 原字符的长度，等于或大于最长长度，不会消减源字符串，字符串补全不生效，返回源字符串
     - `console.log('xxx'.padStart(2,'ab')) // xxx`
   - 用来补全的字符串与源字符串长度之和超过了最大长度，截去超出位数的补全字符串，原字符串不动
     - `console.log('abc',padStart(10,'0123456789')) // 0123456abc`
   - 如果省略第二个参数，默认使用空格补全长度
     - `console.log('x'.padStart(4)) // x`
   - [应用](./2-5.sj)

3. trimStart() trimEnd()

   - 去除头部或者尾部的空格
   - `trimStart()=trimLeft trimEnd()=trimRight()`
   - 前后都去除 trim()
   - 表单提交前后去空格

4. replaceAll() -` replaceAll(searchValue, replacement)`
   - 如果 searchValue 是一个不带/g 的正则表达式，报错
   - 将找到的符合 searchValue 全部提换乘 replacement

### ES6 中数组新增方法

1. includes() 基本同字符串

   - 注意点是对 NaN 的判读，数组 includes 方法中的 NaN 是被判断为相等的

2. Array.from()

   - 将其他类型转换为数组
   - 可转换的类型：
     - 所有可遍历的类型，不如直接[...object]
     - 拥有 length 的任意对象
     ```js
     const obj = {
       0: 1,
       1: 2,
       name: "tom",
       length: 3,
     };
     const arr = Array.from(abj); // [1,2, undefined]
     ```
   - 第二个可选参数：是一个 callback，作用类似于数组的 map 方法

   ```js
   const arr = Array.from("12345", (value) => value * 2);
   //arr = [2,4,6,8,10]
   //作用同
   Array.from("12345").map((value) => value * 2);
   //[2,4,6,8,10]
   ```

   - 第三个可选参数，修改 this 指向

3. find() findIndex

   - find()：找到满足条件的一个立即返回
   - findIndex()：找到满足条件的一个，立即返回其索引
   - `arr.find((value, index, arr) =>{ 遇到满足条件的就返回当前值 }, 指向对象)`
   - `arr.find((value, index, arr) =>{ 遇到满足条件的就返回当前索引 }, 指向对象)`

### 对象的新增方法

1. Object.assign(obj1,obj2...) 将后一个对象合并到前一个对象，返回值是更改后的第一对象。

   - 和{...obj1,...obj2...}这样合并不同，这里的的对象是一个新对象
   - `Object.assign({},obj1 ,obj2...)`，这样可以返回一个新的对象
   - `assign(target,source)`,第一个参数之后的都是源对象
     - 基本数据类型作为源对象，与对象的展开类似，先转换成对象，在合并，**除了字符串外**，其他转换过来都是空对象
   - 同名属性：后面的属性直接覆盖前面的属性
   - [应用](./4-1.js)

2. Object.keys() Object.value() Object.entries()

   - 返回：key 的数组、值的数组、键值对的数组（二维）
   - 与数组类似方法的区别，对象的是构造函数的方法调用，数组是实例调用方法`arr.keys() //返回Iterator... Object.keys(obj) //返回数组`
   - 可以通过使用这三个方法，让对象可以使用 for of 遍历，作用等同于 for in，！！这样遍历不能保证顺序！！！

# Promise

## Promise 是什么

- Promise 是一部操作的一种解决方案

- Promise 是为了解决层层嵌套的回调函数而出现的(callback hell)

## Promise 的基本用法

- 实例化构造函数生成实例对象

  - `const p = new Promise(()=>{})`

- Promise 的状态

  ```js
  const p = new Promise((resolve, reject) => {
    // 开始的时候，Promise是pending，未完成的状态
    //执行resolve()，变成fulfilled / resolved，成功的状态， pending -> fulfilled
    //执行reject()，变成rejected，失败的状态， pending -> rejected
  });
  ```

  - Promise 的状态一旦发生改变，就不会再改变了

- then()

  ```js
  //resolve()执行后，then中第一个回调函数会执行
  //reject()执行后，then中第二个函数执行
  p.then(
    () => {
      console.log("success");
    },
    () => {
      console.log("error");
    }
  );
  ```

- resolve reject 的参数

  ```js
  const p = new Promise((resolve, reject) => {
    //resolve({ username: "Tom" });
    //reject(new Error("reason"));
  });
  p.then(
    (data) => {
      console.log("success", data);
    },
    (err) => {
      console.log("error", err);
    }
  );
  ```

## then()

- 什么时候执行

  - `pending -> fulfilled 执行then的第一个回调函数 `
  - `pending -> rejected 执行then的第二个回调函数 `

- 执行后的返回值

  - then 方法执行后返回一个新的 Promise 实例对象

- then 方法返回的 Promise 对象的状态改变

  ```js
  then(
    () => {
      //在这个回调函数的末尾，又一个隐藏的return
      //return 会返回一个用Promise包装的值，默认用resolve方法传给下一个then，比如
      return 123;
      //相当于
      return new Promise((resolve, reject) => {
        resolve(123);
      });
      //所以这里如果想改变下一个then的状态，调用reject即可
      return new Promise((resolve, reject) => {
        reject(123);
      });
    },
    () => {}
  ).then(
    (data) => {
      console.log("success2", data); //默认执行
    },
    (err) => {
      console.log("err", err); //如果上一个then return的Promise调用的是reject方法，执行这个
    }
  );
  ```

  - 不管上一个 then 执行的是成功回调还是失败回调，都不会影响像一个 then 要执行哪一个回调函数，都是默认执行成功
  - 默认返回永远都是执行成功状态的 Promise 对象，传递的值默认是 undefined
  - 只有上一个 then 的回调函数中，return 中的 Promise 执行了 reject，下一个 then 的状态才会被改变

- 向后传值

- 使用 Promise 解决回调地狱

  - [练习](./3-4.js)

## catch()

- catch()专门用来处理 reject 状态

- catch 本质是 then 的特例，相当于`then(null, err=>{})`

- then 中的 reject 会一直往下传，知道被捕获才会停止，所以 then 没有处理 reject，reject 会一直传递，直到被 catch()捕获

- catch 可以捕获它前面的错误

- 一般总是建议，Promise 对象后面要跟 catch 方法，这样可以处理 Promise 内部发生的错误

- 抛出错误的两种方法：
  - 在 then 中执行 reject
  - 不执行 reject，执行`throw new Error("err info")`

## finally()

- 不常用方法

- 只需要知道 finally 是干嘛的

- 本质也是个特殊的 then 方法

  ```js
  new Promise((resolve, reject) => {
    //resolve(123);
    reject("reason");
  })
    //这个then就相当于finally方法
    .then(
      (result) => {
        return result;
      },
      (err) => {
        return new Promise((reject) => {
          reject(err);
        });
      }
    )
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
  ```

- 当 Promise 状态发生改变时，不论如何变化都会执行，不变化不执行

- 应用： 使用 Promise 操作数据库，最后关闭数据库的操作

## Promise.resolve() Promise.reject()

- 本质

  - Promise.resolve()是成功状态的一种简写形式

  ```js
  new Promise((resolve) => resolve("foo"));
  //简写
  Promise().resolve("foo");
  //参数
  /**
   * 一般参数
   */
  Promise.resolve("foo").then((data) => console.log(data));
  /**
   * Promise对象作为参数
   */
  const p1 = new Promise((resolve) => {
    setTimeout(resolve, 1000, "我执行了");
  });
  Promise.resolve(p1).then((data) => console.log(data));
  //等价于
  //当Promise.resolve()接收的是Promise对象时，直接返回这个Promise对象，什么都不做
  p1.then((data) => {
    console.log(data);
  });
  Promise.resolve(p1) === p1; // true
  //当一般的resolve函数接收的是Promise对象时，后面的then会根据传递的Promise对象的状态变化决定执行哪一个回调
  new Promise((resolve) => resolve(p1)).then((data) => {
    console.log(data);
  });
  /**
   *  具有then方法的对象
   */
  const thenable = {
    then() {
      console.log("then");
    },
  };
  Promise.resolve(thenable).then(
    (data) => console.log(data),
    (err) => console.log(err)
  );
  //此时会执行thenable中的then方法，Promise之后的then方法不会执行，因为没有resolve或者reject改变状态，想要执行后面的then方法中的回调函数，如下改写
  const thenable2 = {
    then(resolve, reject) {
      resolve("success");
      //失败
      reject("reason");
    },
  };
  Promise.resolve(thenable2).then(
    (data) => console.log(data),
    (err) => console.log(err)
  );
  //此时就会根据状态选择接下来的要执行的回调函数
  ```

  - Promise.reject()

  ```js
  //是Promise失败状态的一种简写：
  new Promise((resolve, reject) => {
    reject("reason");
  });
  //等价于
  Promise.reject("reason");
  //参数
  //不管是什么参数，都会原封不动的向后传递，作为后续方法的参数
  ```

- 在 then 方法中的应用
  ```js
  then((data) => {
    return Promise.reject("reason");
  });
  ```

## Promise.all()

- 作用： 关注多个 Promise 对象的状态变化，传入多个 Promise 实例，包装成一个新的 Promise 实例返回

- 基本用法

  ```js
  const delay = (ms) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };
  const p1 = delay(1000).then(() => {
    console.log("p1完成了");
    return "p1";
  });
  const p2 = delay(2000).then(() => {
    console.log("p2完成了");
    return "p2";
  });
  const p = Promise.all([p1, p2]);
  p.then(
    (data) => {
      console.log(data);
    },
    (err) => {
      console.log(err);
    }
  );
  // 成功情况下，打印输出：
  // p1 完成了
  // p2 完成了
  // 等待前面的p1,p2完成后，p才会开始执行，data接收p1,p2返回的值组成的数组["p1", "p2"]
  // ["p1", "p2"]
  ```

  - Promise.all() 的状态变化于所有传入的 Promise 实例对象状态有关
  - 所有状态都变成 resolved / fulfilled，最终的状态才会变成 resolved
  - 只要一个变成 rejected，最终状态就会变成 rejected
  - 作用
    - 请求多少数据，只有全部数据请求成功，才会执行之后的操作

## Promise.race() Promise.allSettled()

- 作用

  - Promise.race([Promise Array])的状态取决于第一个完成的 Promise 实例对象，如果第一个完成的成功了，那最终的就成功，如果第一个失败了，最终的就失败
  - Promise.race([Promise Array])返回第一个 Promise 实例的返回值

  - Promise.allSettled([Promise Array])，状态与传入的 Promise 状态无关，永远都是成功的，它只会忠实记录下各个 Promise 的表现

- 用法

## Promise.any()

- Promise.any()与 Promise.race()非常相似。

- 参数中的 Promise 都失败最终才会失败

- 只返回参数中的第一个成功的 Promise 实例，终止之后的实例。

- 实际应用：一次性加载多张图片时，哪一张先加载出来就显示哪一张，此时就可以使用 Promise.any()方法

## Promise 的注意事项

- resolve 和 reject 执行后的代码

  - 推荐在调用 resolve 和 reject 函数的时候加上 return，不再执行它们后面的代码
  - `return resolve() / reject()`

- Promise.all/race/allSettled/any 的参数问题

  - 参数如果不是 Promise 数组，会将不是 Promise 的数组元素变成 Promise 对象

  - Iterator 对象，Array、String、Set、Map、NodeList、arguments

  - 写了 Symbol.iterator 方法的非原生可遍历对象

- Promise.all/race/allSettled/any 的错误处理

  - 可以单独的在 Promise 实例中捕获错误

  - 也可以统一由 Promise 构造函数的方法处理

- Promise 的应用

# Class

## Class 基础

- 声明 class

  - 关键字

  ```js
  class ClassName {
    //实例化时执行构造方法，所以必须有构造方法，但可以不写
    constructor(name, age, ...) {
      console.log("实例化时，会自动执行构造方法里面的语句");
      this.name = name;
      this.age = age;
      ...
      // 一般在构造方法中，只定义属性，方法不在构造方法中定义
    }
    //方法构造在构造函数外
    //各个实例会共享方法，同原型链方法的用法
    speak(){}
  }
  ```

- class 对比构造函数

## class 两种定义形式

- 声明形式

- 表达式形式
  - `const Person = class{}`
  - `new (class{construct(){}})()` 立即执行类

## 实例属性、静态方法和静态属性

- 实例属性

  - 构造方法中声明的属性，就是实例属性，直接可以通过实例打点调用
  - 在构造方法外直接添加 `class Person{ age = 18;}`不需要写任何关键字
  - 将上面的值换成 function(){}就变成了实例方法，不推荐这种方法，会造成每个实例都重复构建一个新的函数，造成内存浪费

- 静态方法（类的方法）

  - 关键字 `static functionName (){}`
  - 使用类名调用，Person.speak()
  - 静态方法中 this 指向的是类本身
  - 在类内部使用`static functionName (){}`等同与在类外面使用`className.functionName = function(){}`

- 静态属性（类的属性）

  - 使用 static 关键字修饰属性名，目前只是提案，有兼容性的问题
  - 解决办法是，用静态方法直接返回需要的值`static getVersion (){return 1.1;}`

- [练习](./class3-3.js)

## 私有属性和方法

- 为什么需要私有属性和方法

- 模拟私有属性和方法

  1.  \_开头表示私有，约定，不是强制， `_name, _functionName`
  2.  将私有属性和方法移出类，使用 IIFE 构成块级作用域

  ```js
  (function(){
    let name;//没有通过window暴露出去，IIFE外面不会被找到
    class Person(){
      constructor(username){
        //this.name = name;
        name = username;
      }
      speak(){
        console.log("speak")
      }
      getName(){
        return name;
      }
    }
    window.Person = Person;
  })()
  ```

## extends

- 子类继承父类

  ```js
  class Programmer extends Person {
    constructor(name, sex) {
      super(name, sex); //要调用父类的构造方法
    }
  }
  ```

- 改写继承的属性或方法

  - 子类直接写父类的同名方法，发生同名覆盖
  - 直接可以添加新的方法属性

## super

- 作为函数使用

  - 作为父类的构造方法，只能用在子类的构造方法中，用在其他地方会报错
  - super 虽然代表了父类的构造方法，但是内部的 this 指向子类的实例

- 作为对象使用

  - 在构造方法或一般方法中使用
    - 代表父类的原型对象 Parent.prototype
    - 定义在父类实例上的方法或属性，无法通过 super 调用
    - 通过 super 调用父类方法时，方法内部的 this 指向当前的子类实例
  - 在静态方法中使用
    - 指向父类，而不是父类的原型对象
    - 通过 super 调用父类的方法时，方法内部的 this 指向当前的子类，而不是子类的实例

- 注意事项

  - 使用 super 的时候，必须显式指定是作为函数还是作为对象使用，否则会报错
  - 子类不写 super 的情况 - 没有写 constructor 时可以不写 super 函数

## class 的应用

- [练习](./ClassLianxi)

# 模块化

## Module

- 在没有模块化之前，使用 IIFE 模拟私有化，使用块级限定变量的作用域，再通过 window 暴露需要的变量

- 模块系统主要用来解决的问题
  1.  模块化的问题
  2.  消除全局变量
  3.  管理加载顺序

## Module 的基本用法

- 导出：`export default class`;

- 引入：`import class from "path"`;

- 引入 script 文件，`<script src="./index.js" type="module"></script>`

## Module 的两种导入导出

- 一个模块没有导出，也可以将其导入

- 被导入的代码都会执行一遍，也仅将执行一遍

- export default 导出和对应的 import 导入

  - 导出的变量/常量/对象/数值/class 可以随便取名

  - 一个模块只能有一个 export default

- export 导出和对应的 import 导入

  - 基本用法

    - export 后面接声明或者语句
      1.  第一种方式：`export const age = 18;`
      2.  第二种方式：`const age = 18; export {age};`
    - 导入`import {age} from "path"`，导入名字要与导出名对应

  - 多个导出

    - 单个单个声明导出
    - 先完之后，用对象的形式一次导出`export {a,b,c,...}`

  - 导入导出时起的别名

    - `export {fna as fnb,b}`
    - `import {fnb, b as fnc} from "path"`

  - 整体导入

    - `import * as obj from "path"`
    - - 可以包括 export default
    - export default 可以和 export 同时使用

  - 同时导入

    - `import fromDefault, {fromExport} from "path"`
    - 分开写也可以，写在一起的时候需要先写 default 导出来的

## Module 的注意事项

- 模块顶层的 this 指向

  - 指向 undefine，可以作为检测模块是不是按模块加载
  - 模块文件中

    ```js
    if (typeof this !== undefined) {
      throw new Error("请使用模块的方式加载");
    }
    ```

- import 关键字和 import()函数

  - import 具有提升效果，会提升到整个模块的头部，率先执行
  - import export 命令只能在模块的顶层，不能在代码块中执行
  - 如果要按条件/按需导入，使用 import()函数
  - import()函数返回一个 Promise 对象，可以通过 then/catch 处理导入后的结果

- 导入导出的复合写法
  - `export { age } from "path"`
  - 等价于
  ```js
  import { age } from "path";
  export { age } from "path";
  ```
  - 两种写法不同在于，第一种当前文件访问不到 age，只起一个中转作用
  - 第二种方法当前文件可以访问到 age

## Module 的应用

- [模块化拆分](./ClassLianxi/)

# Babel 和 Webpack

## Babel

- Babel 是什么

  - Babel js 编译器，将最新的 js 版本转化成兼容性版本

  - Babel 本身可以编译 ES6 的大部分语法，比如 let、const、箭头函数、类等

  - 但是对于 ES6 新增的 API，比如 SET、Map、Promise 等全局对象，以及一些定义在全局对象上的方法（比如 Object.assign/Array.from）都不能直接编译，需要借助其他的模块

  - Babel 一般需要配合 Webpack 来编译模块语法

- Babel 的使用方式

  - 使用环境 nodejs，工具 npm

    - `yarn add -D @babel/core @babel/cli`

  - 编译命令

    - `"build":"babel src -d dist"` -d --out-dir 的缩写

  - Babel 的配置文件

    - .babelrc

      - `"presets": ["@babel/preset-env"]`

## Webpack

- Webpack

  - 静态模块打包器，当 webpack 处理应用程序时，会将所有这些模块打包成一个或多个文件

  - 模块：处理 js/css/图片、图标字体文件

  - 静态：开发过程中存放在本地的 js/css/图片/图标字体等文件，就是静态的

  - 动态内容，webpack 没办法处理，只能处理静态的内容

- 理解 webpack

- 启动 webpack

  - 初始化：

  - 安装 webpack 需要的包：

    - `yarn add -D webpack-cli webpack`

  - 配置 webpack：

    - `webpack.config.js`

  - 打包并测试：

    - `"webpack": "webpack --config webpack.config.js"`
    - --config 后面指定配置文件名
    - 如果使用的是默认配置文件，直接使用`webpack`即可
    - `"webpack": "webpack"`

### Webpack 的核心概念

- entry

  - 指定入口文件

    ```js
    //两种写法
    entry : "./src/index.js",
    //
    entry : {
      main: "./src/index.js",
      search: "./src/search.js"
    }
    ```

- output

  - 出口文件
    ```js
    //单入口对应的出口写法
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
    }
    //多入口对应的出口写法
    //[name]对应的是多入口中的main、search等等，将对应的名字替换
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js",
    }
    ```

- loader

  - loader 概念 : 加载器

    - loader 让 webpack 能够去处理那些非 JS 文件的模块

  - babel-loader

    - 使用 babel-loader 后，通过 webpack 调用 babel 进行编译，此时不需要安装 babel-cli 了
    - `yarn add -D @babel/preset-env @babel/core babel-loader`

  - 配置 babel-loader

  ```js

  module: { // 模块，接一个对象
    rules: [  //有很多规则，用数组
      {
        test: /\.js$/,  //命令，编译.js结尾的所有文件
        exclude: /node_modules/,   // 排除node_modules文件夹里面的内容
        loader: "babel-loader",   //连通babel，通过babel编译
      },
    ],
  },
  ```

  - 让 babel 可以编译 ES6 新的 API

    - `@babel/polyfill` - 安装 `yarn add -D core-js`
    - 在源码中引用 `import "core-js/stable";`

  - [官方 loader 配置文档](https://webpack.docschina.org/loaders/)

- plugins

  - plugins 插件

    - loader 用于帮助 webpack 处理各种模块，插件用于执行范围更广的任务

    - [官方插件列表](https://webpack.docschina.org/plugins/)

  - html-webpack-plugin

    - `yarn add -D html-webpack-plugin`

    - `const HtmlWebpackPlugin = require("html-webpack-plugin");`

    ```js
    plugins: [
      new HtmlWebpackPlugin({
          template: "./index.html",
        }),
      ],
    ```

  - 多入口插件配置文件写法
    ```js
    //有几个文件就实例化几个，指明生成的对应的文件名，再使用chunks指定对应的js文件
    plugins: [
      new HtmlWebpackPlugin({
          template: "./index.html",
          filename: "index.html",
          chunks:["index"]
          minify:{
            //删除index.html中的注释
            removeComments: true,
            //删除index.html的空格
            collapseWhitespace: true,
            //删除各种html标签属性值的双引号
            removeAttributeQuotes: true
          }
        }),
      new HtmlWebpackPlugin({
          template: "./search.html",
          filename: "search.html"
          chunks:["search"]
        }),
      new HtmlWebpackPlugin({
          template: "./about.html",
          filename: "about.html"
          chunks:["about"]
        }),
      ],
    ```

### webpack 的应用 - 处理 css 文件

- 使用 webpack 可以在 js 文件中导入 css 文件

  - 使用 css-loader 加载 css 文件

    - `yarn add -D css-loader`
    - `yarn add -D style-loader`

    ```js
    {
        test: /\.css$/,
        // loader: "css-loader",
        //配置多个loader处理同一个类型的文件时，使用use
        //这里需要注意的是，使用顺讯是从右到左
        //先加载css，在交给style处理css文件
        use: ["style-loader", "css-loader"],
    }
    ```

    - 成功引入后，会在 head 标签内，以 style 的形式写入
    - 使用 link 标签引入方法：

      - `yarn add -D mini-css-extract-plugin`

      ```js
      const MiniCssExtractPlugin = require("mini-css-extract-plugin");
      {
        test: /\.css$/,
        // loader: "css-loader",
        //配置多个loader处理同一个类型的文件时，使用use
        //这里需要注意的是，使用顺讯是从右到左
        //先加载css，在交给style处理css文件
        // use: ["style-loader", "css-loader"],
        // 不使用style-loader，通过提取css到link加载
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      new MiniCssExtractPlugin({
        filename: "./css/[name].css",
      }),
      ```

### webpack 处理 CSS 文件中的图片

- file-loader

  - 外部资源，如从网络上引入的图片，不需要考虑 webpack，只有本地图片才需要被 webpack 处理
  - `yarn add -D file-loader`

  [x] webpack5 中有问题，解决办法，不需要 file-loader,直接在 output 下写入静态文件地址，不需要给 MiniCss 插件写 publicPath 也可以直接引用到文件

  ```js
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[name][ext]'
    //或者
    assetModuleFilename: 'images/[hash][ext]'
  }
  ```

### webpack 处理 html 文件中的图片

- 因为定义了入口文件是 index.js，webpack 只会处理 index.js 中引入的资源，对于 html 中引入的资源不会处理，所以需要使用特定的 html-withimg-loader 来处理 html 中引用的资源

- `yarn add -D html-loader`

```js
{
  test: /\.(html|html)$/i,
  loader: "html-loader",
},
```

### webpack 处理 js 文件中的图片

- js 文件中： `import img from './images/bg.jpg'`

- 加入规则，将静态资源输出到指定的目录

```js
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        type: "asset/resource",
      },
```

### webpack 的内部资源 inline

---

### 搭建开发环境

- `yarn add -D webpack-dev-server`

- scripts: `"dev" : "webpack-dev-server --open"`

<a href="#ecmascript6">返回顶部</a>
