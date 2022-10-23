## BOM

- BOM Browser Object Model，浏览器对象模型 是 JS 与浏览器窗口交互的接口

- 浏览器改变尺寸、滚动条滚动相关特效，都需要使用 BOM 接口

## window 对象

- window 对象是**当前 JS 脚本运行所处的窗口**，而这个窗口中包含 DOM 结构，**window.document 属性就是 document 对象**

- 在有标签页功能的浏览器中，每个标签都拥有自己的 window 对象；同一个窗口的标签页之间不会共享一个 window 对象

## 全局变量是 window 的属性

- **全局变量会成为 window 对象的属性**

```js
var a = 10;
console.log(window.a == a); // true
```

- 这就意味着，**多个 js 文件之间是共享全局作用域的**，即 js 文件没有作用域隔离功能

## 内置函数普遍是 window 的方法

- 如 setInterval()、alert()等

## 窗口尺寸相关属性

- innerHeight

- innerWidth

- outerHeight

- outerWidth

- 获得不包含滚动条的窗口宽度，要用 document.documentElement.clientWidth

## resize 事件

- 在窗口大小改变之后，会触发 resize 事件，可以使用 widow.onresize 或者 window.addEventListener('resize')来绑定事件处理函数

## 已卷动高度

- window.scrollY 属性表示在垂直方向已滚动的像素值

## 已动高度

- document.documentElement.scrollTop 属性表示窗口卷动高度

```js
//为了浏览器更好的兼容性，想要获取滚动高度使用以下语句
var scrollTop = window.scrollY || document.documentElement.scrollTop;
```

- document.documentElement.scrollTop 不是只读，而 window.scrollY 是只读的

## scroll 事件

- 在窗口被卷动之后，触发 scroll 事件，可以使用 window.onscroll 或者 window.addEventListener('scroll') 绑定事件处理函数

## Navigator 对象

- window.navigator 属性可以检索 navigator 对象，它内部含有用户此次活动的**浏览器的相关属性和知识**

  - appName
  - appVersion
  - userAgent \* 常用
  - platform

## History 对象

- window.history 对象提供了操作浏览器绘画历史的接口

- 常用操作就是模拟浏览器回退按钮

```javascript
history.back(); //点击浏览器的回退按钮
history.go(-1); //等同于history.back();
```

```html
<a href="javascript:history.back();">回退</a>
```

## Location 对象

- window.location 标识当前所在网址，**通过给这个属性赋值命令浏览器进行页面跳转**

```javascript
window.location = "https://baidu.com";
window.location.href = "https://baidu.com";
```

- 刷新加载当前页面
  - 调用 location 的 reload 方法 **重新加载当前页面**，参数 true 表示强制从服务器强制加载
  ```js
  window.location.reload(true);
  ```

## GET 请求查询参数

- window.location.search 属性为当前浏览器的 GET 请求查询参数
  - 比如网址https://www.baidu.com/?a=1&b=2
  - window.location.search => ?a=1&b=2

## BOM 特效开发

### 返回顶部按钮

2-14-1.html

## 楼层导航小效果

2-14-2.html

- DOM 元素都有**offsetTop 属性**，表示**此元素到定位祖先元素的垂直距离**

- 定位祖先元素：在祖先中，离自己最近的且拥有定位属性的元素

- 使用 offsetTop 属性时，所有的祖先元素不能有定位，有定位就计算不出元素到页面顶端的距离了

```js
const list = document.querySelector("#list");
const lis = document.querySelectorAll("#list li");
const contents = document.querySelectorAll(".content-part");
const root = document.documentElement || document.body;
let nowFloor = -1;
const offsetTopArray = [];
//事件委托，点击li元素，移动到对应的section元素上
list.onclick = function (e) {
  if (e.target.tagName.toLowerCase() == "li") {
    let n = e.target.getAttribute("data-n");
    let target = document.querySelector(`.content-part[data-n=${n}]`);
    root.scrollTop = target.offsetTop;
  }
};
//将每个section的offsetTop压入数组，之后只需要比较滑动值在不在idx和idx+1之间，数组比section多一位，多的一位设置为Infinity
contents.forEach((item) => {
  offsetTopArray.push(item.offsetTop);
});
offsetTopArray.push(Infinity);
//进行滑动监听，滑动到idx和idx+1之间时，将li的class设置为current
window.onscroll = function () {
  let i = 0; //i作为节流器使用
  offsetTopArray.forEach((item, index) => {
    if (root.scrollTop >= item) {
      i = index;
      return;
    }
  });
  /*
  for (i = 0; i < arr.length; i++) {
    if (scrollTop >= arr[i] && scrollTop < arr[i + 1]) break;
  }
  */
  //节流
  if (nowFloor != i) {
    nowFloor = i;
    //当前section对应的li设置为current，其他不需要current
    lis.forEach((item, index) => {
      if (index == nowFloor) {
        item.classList.add("current");
      } else {
        item.classList.remove("current");
      }
    });
  }
};
```
