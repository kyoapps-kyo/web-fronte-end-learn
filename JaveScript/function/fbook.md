# 函数手册

## Array 类

### arr.reduce

[参考链接](https://blog.csdn.net/qq_38970408/article/details/121018660)

```js
arr.reduce(function(prev,cur,index,arr){
...
}, init);
```

reduce() 方法对数组中的每个元素执行一个由您提供的 reduce 函数(升序执行)，将其结果汇总为单个返回值。reduce 方法可做的事情特别多，就是循环遍历能做的，reduce 都可以做，比如数组求和、数组求积、数组中元素出现的次数、数组去重等等。

参数：

- prev 必需。累计器累计回调的返回值; 表示上一次调用回调时的返回值，或者初始值 init;
- cur 必需。表示当前正在处理的数组元素；
- index 可选。表示当前正在处理的数组元素的索引，若提供 init 值，则起始索引为- 0，否则起始索引为 1；
- arr 可选。表示原数组；
- init 可选。表示初始值。

reduce 的应用:

- 数组求和

- 计算数组中每个元素出现的次数

- 去除数组中重复的元素

- 按属性对 Object 分类

- 对对象的属性求和
