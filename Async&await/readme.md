# Async&Await

## 认识 async 和 await

- 是 ES2017 新增加的关键字

- 类似同 let/const 一样

- async 异步， 可以声明一个 async 函数
  ，表示函数里面有异步操作
  ```js
  async function fn() {}
  ```
- await 异步等待， 等待一个异步操作，表示紧跟在 await 后面的是异步的，需要等待结果

- await 需要和 async 一起使用

  ```js
   async function fn(){
       const result = await 异步操作(Promise 对象)
       ...
   }
  ```

- 可以使异步(Promise)更加简洁方便，使异步代码看起来像同步的，更容易理解

### async await 的用例

- [案例](./index.html)

### async 函数

- async 函数的返回值， 重点！！！

  - 不管你函数体里 return 的是什么，async 函数返回的都是一个 Promise 对象，return 返回的数据在 PromiseResult 中保存，相当于`return Promise.resolve(data)`
  - 如果是 Promise 对象，直接返回该 Promise 对象

- async 函数的各种形式

  1. 函数声明式 `async function fn(){}`
  2. 函数表达式 `const fn = async function(){}`
  3. 箭头函数
     - `const fn = async ()=>{}`
     - `const fn = async param =>{}`
  4. 对象的写法

     - `const obj = { fn:async function(){}}`
     - `const obj = { fn:async ()=>{}}`
     - `const obj = { async fn(){}}`

  5. Class 的写法 `class ClassName{ async fn(){}}`

- async 的注意事项

  - 默认返回的是成功状态的 Promise
  - async 函数可以通过 Promise catch()处理错误，也可以同过 try...catch 处理错误

  ```js
  async function fn() {
    try {
        ...
        throw new Error("出错了")
    } catch(err) {
        console.log(err, "try...catch");
    }
  }
  ```

  - async 函数中可以没有 await

### await 的用法

- await 的机制

  1. async 函数中的代码有先后关系，await 会阻塞该 async 函数中代码的执行，async 函数外的代码不受影响
  2. async 函数内部是同步执行的，它本身是异步的

- await 的值

  1. 如果 await 后面是一个 Promise 对象，await 的值就是该 Promise 对象的结果(PromiseResult)
  2. 如果是普通值，相当于返回的是一个 Promise.resolve(data);

- await 的注意事项

  1. async 函数内部所有 await 后面的 Promise 对象都成功，async 函数返回的 Promise 对象才会成功；只要任何一个 await 后面的 Promise 对象失败，那么 async 函数返回的 Promise 对象就会失败
     - 可以通过 try...catch，也可用 Promise catch，也可以 await fn().catch()来处理错误
  2. await 一般只能用在 async 函数中，async 函数中可以没有 await

### 继发和并发

- 处理异步操作时，如果不存在继发关系，最好让它们并发执行
