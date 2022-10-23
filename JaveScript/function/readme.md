## 变量作用域

JavaScript 是**函数级作用域**变成语言:

**变量只在其定义时所在的 function 内部有意义**

## 全局变量

如果不将变量定义在任何函数的内部，此时这个变量就是**全局变量**，他在任何函数内部都可以被访问和更改

## 遮蔽效应

如果函数中也定义了和全局同名的变量，则函数内的变量会将全局的变量“**遮蔽**”

## 注意考虑变量声明提升的情况

```js
var a = 10;
function fun() {
  //函数内部的a变量提升，此时的a时undefined，a++为NaN
  a++;
  var a = 5;
  console.log(a);
}
fun();
console.log(a);
```

## 形参也是局部变量

## 作用域链

一个函数内部也可以定义一个函数。
和局部变量类似，定义在一个函数内部的函数时局部函数。

在函数嵌套中，变量会从内到外逐层寻找它的含义

## 不加 var 将定义全局变量

```js
function fun() {
  a = 3;
}
fun(); //调用一次函数后全局变量a生效
console.log(a); // 3
```

## 什么是闭包 closure？

闭包是

**函数本身和该函数声明时所处的环境状态**

的组合

**函数能够过“记忆住”其定义时所处的环境**，

即使函数不在其定义的环境中被调用，也能访问定义时所处环境的变量

## 闭包现象

在 js 中，**每次创建函数时都会创建闭包**。

但是，闭包特性往往需要将函数“换一个地方”执行，才能被观察出来。

## 闭包的实用性

**它允许我们将数据与操作该数据的函数关联起来**

这与“面向对象编程”有少许相似之处

闭包的功能：

**记忆性、模拟私有变量**

## 闭包用途 1 - 记忆性

当闭包产生时，函数所处环境的状态
**会始终保持在内存中，不会在外层函数调用后被自动清除**。
这就是闭包的记忆性。

例子参考

```
.closure1.js
.closure2.js
```

## 使用闭包的注意点

**不能滥用闭包**，否则会造成网页的性能问题，严重时可能导致**内存泄漏**。所谓内存泄漏是指内存中动态分配的内存由于某种原因未释放或无法释放。

## 闭包的经典面试题

```js
function addCount() {
  var count = 0;
  return function () {
    count = count + 1;
    console.log(count);
  };
}
var fun1 = addCount();
var fun2 = addCount();
fun1(); // 1
fun2(); // 1
fun2(); // 2
fun1(); // 2
```

## 什么是 IIFE

IIFE（Immediately Invoked Function Expression，**立即调用函数表达式**）是一种特殊的 js 函数写法，**一旦被定义，就会被立即调用**

```js
//外层的括号将行数变成表达式，后面的圆括号运行函数
(function () {
  statements;
})();
//形成iife的方法
//函数不能直接加圆括号被调用，下面为错误的写法
function(){
    statement;
}();
//函数体必需被转为“函数表达式”才能被调用
//1
(function(){
    console.log("hello");
})();
//2
+function(){
    console.log("world");
}();
//3
-function(){
    console.log("!");
}();
```

## IIFE 的作用 1 - 为变量赋值

当给变量赋值需要一些较为复杂的计算时（如 if 语句），**使用 IIFE 显得语法更加紧凑**。

```js
var age = 12;
var sex = "men";
var title = (function () {
  if (age < 18) {
    return "Guy";
  } else {
    if (sex == "men") return "Sir";
    else return "Lady";
  }
})();
```

## IIFE 的作用 2 - 将全局变量变成局部变量

```js
var arr = [];
for (var i = 0; i < 5; i++) {
  arr.push(function () {
    console.log(i);
  });
}
arr[2](); // 5
```

IIFE 可以在一些场合（如 for 循环中）将全局变量变成局部变量，语法显得紧凑

```js
var arr = [];
for (var i = 0; i < 5; i++) {
  (function (i) {
    arr.push(function () {
      console.log(i);
    });
  })(i);
}
arr[2](); // 2
```
