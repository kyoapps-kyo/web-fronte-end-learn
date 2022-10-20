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
