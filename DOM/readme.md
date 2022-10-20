## DOM

- Document Object Model，文档对象模型，是 JS 操作 HTML 文档的接口，使文档操作变得非常优雅、简便。

- DOM 将文档表示为节点树

## nodeType 常用属性值

- 节点的 nodeType 属性可以显示这个节点具体的类型。

## 访问元素节点

- 所谓“访问”元素节点，就是值“得到”、“获取”页面上的元素节点

- 对节点进行操作，第一步是要得到它

- 访问元素节点主要依靠 document 对象

## document 对象

- document 对象是 DOM 中最重要的东西，几乎所有的**DOM 的功能都封装在了 document 对象中**

- document 对象也表示**整个 HTML 文档**，它是 DOM 节点树的根

- document 对象的**nodeType 属性值是 9**

## 常用访问元素节点的方法

```js
//id IE6
//如果页面上有相同id的元素，只能得到第一个
//不管元素位置多深，都可以使用id找到
document.getElementById();

//标签名 元素数组 IE6
//通过标签名获得节点数组
//数组方便遍历，从而可以批量操控元素节点
//即使页面上只有一个指定标签名的节点，也将得到长度为1的数组
//任何一个节点也可以调用getElementsByTagName()方法，从而得到内部的某种类的元素节点
document.getElementsByTagName();

// 类名 元素数组 IE9
// 某个节点元素也可以调用node.getElementsByClassName()方法，从而得到其内部的某类名的元素节点
document.getElementsByClassName();

// 选择器 IE8部分兼容，IE9完全兼容
// 通过选择器得到元素，例如：document.querySelector('#box1 .spec')，获得id=box1下的类名为spec的元素
// 只能得到页面上的一个元素，如果多个元素符合，只能获得第一个元素
// 从IE8开始兼容，但从IE9开始支持CSS3选择器，如:nth-child()、:[src^='dog']等CSS3选择器形式都支持良好
document.querySelector("css选择器");

// 选择器 元素数组 IE8部分兼容，IE9完全兼容
// 即使只有一个符合选择器的节点，也将得到长度为1的数组
document.querySelectorAll();
```

## 延迟运行

- **通常 js 代码一定要写到 html 节点的后面**，否则 js 无法找到相应的 html 节点

- 使用 window.onload = function (){}事件，使页面加载完毕后，再执行指定的代码

## querySelectorAll()、getElementsByClassName()、getElementsByTagName() 区别

- 区别一

  - 参数不同

- 区别二
  - querySelectorAll()不能动态获取元素，页面上增加或删除元素时，获取的元素个数不能改变，而其他两个可以做到

所以在选在是不是要动态获取元素的时候，需要灵活运用各个方法

## 节点

parentNode

firstChild - previousSibling - childNodes - nextSibling - lastChild

### 注意：文本节点也属于节点

**在标准的 w3c 规范中，空白文本节点也应该算作节点**

但是在 IE8 及以前的浏览器中会有一定的兼容问题，它们不把空文本节点当做节点

## 排除文本节点的干扰

从 IE9 开始支持一些“只考虑元素节点”的属性

childNodes -> children

parentNode -> 同

firstChild -> firstElementChild

lastChild -> lastElementChild

previousSibling -> previousElementSibling

nextSibling -> nextElementSibling

## 书写常见的节点关系函数

- 书写 IE6 也能兼容的“寻找所有元素子节点”函数

- 书写 IE6 也能兼容的“寻找前一个元素兄弟节点”函数

- 编写函数，获得某元素的所有的兄弟节点

## 改变元素节点中的内容

改变元素节点中的内容的两个属性：

1.  innerHTML
2.  innerText

innerHTML 属性能**以 HTML 语法**设置节点中的内容

innerText 属性只能**以纯文本的形式**设置节点中的内容

## 改变元素节点的 css 样式

- el.style.css 属性（驼峰式）= ''

## 改变元素节点的 HTML 属性

- 标准的 W3C 属性，如 src、href 等，只需要直接打点更改即可

  - img.src = 'images/2.jpg';

- 不符合 W3C 的属性，要使用 setAttribute（）和 getAttribute（）来设置、读取
  - el.setAttribute('data-n', 10);
  - let n = el.getAttribute('data-n')

## className 属性使用

```js
element.className = "cName";
//注意的点，使用className设置元素样式会有一个特点，通过className设置元素的class属性值时，将替换而不是追加该元素所有原本存在的class属性，原本存在的class值，都会被替换，当需要追加class时，需要自己封装一个函数
var myDiv = document.getElementById("myDiv");
function addClass(element, value) {
  var newClassName = "";
  if (!element.className) {
    element.className = value;
  } else {
    newClassName = element.className;
    newClassName += " "; //这句代码将追加的类名分开
    newClassName += value;
    element.className = newClassName;
  }
}
// 设置class属性值
addClass(myDiv, "fixBox");
```

## 节点的创建、移除、和克隆

### 创建

```js
document.createElement("HTML元素");
//创建一个指定tagName的HTML元素
const oDiv = document.createElement("div");
//此时创建出来的是孤儿节点，意味着它并没有被挂载到DOM树上，我们无法看见它
//必需继续使用 appendChild() / insertBefore() 将孤儿节点插入到DOM树上
//任何已经在DOM树上的节点，都可以调用appendChild方法，将孤儿节点挂载到它的内部，成为它的最后一个字节点
parent.appendChild(oDiv);
// 任何已经在DOM树上的节点，都可以调用 insertBefore() 方法，将孤儿节点挂载到它的内部，成为它的“标杆字节点”之前的节点
parent.insertBefore(oDiv, 标杆节点);
```

## 移动节点

如果将已经挂载到 DOM 树上的节点成为 appendChild()或者 insertBefore(),这个节点将会被移动

```js
新父节点.appendChild(已经有父亲的节点);
新父节点.insertBefore(已经有父亲的节点，标杆字节点)
```

这意味着一个节点不能同时位于 DOM 树的两个位置

## 节点的删除

```js
父节点.removeChild(要删除的字节点);
```

节点不能主动删除自己，必需要由父节点删除它

## 克隆节点

克隆出来的节点是孤儿节点，需要挂载到父节点上才会显示

```js
孤儿节点 = 老节点.cloneNode();
//参数是一个布尔值，表示是否采用深度克隆：如果为true，则该节点的所有后代节点也都会被克隆，如果为false，则只克隆该节点本身
孤儿节点 = 老节点.cloneNode(true);
```

## 拓展 - 自定义属性 data

直接给 html 元素写，data-\*

```html
<h2 data-weather-today="rain">今天下雨</h2>
```

使用 js 设置

```js
const h2 = document.querySelector("h2");
h2.dataset.weatherToday = "rain";
console.log(h2.dataset.weatherToday);
```

```css
h2[data-weather-today="rain"] {
  color: gray;
}
```

## 事件监听

设置事件监听的方法主要有**onxxx 和 addEventListener()两种**

最简单的给元素添加事件监听的方法：

```js
oBox.onclick = function () {
  // 点击盒子时，执行这里的语句
};
```

## 事件传播

### 当盒子嵌套时，事件监听的执行顺序

**先从外到内，然后再从内到外**

捕获阶段(Capturing phase) -> 冒泡阶段(Bubbling phase)

### onxxx 写法只能监听冒泡阶段

## addEventListener()方法

- onxxx：DOM0 级事件监听：只能监听冒泡阶段

- addEventListener('事件名', function(){}, true)

- 最内层的盒子按照书写顺序，选择是否先冒泡还是先捕获

## 注意事项

- 最**内部的元素不再区分捕获和冒泡阶段**，会先执行写在前面的监听，然后执行后写的监听

- 如果给元素设置相同的两个或多个同名事件，则 DOM0 级写法**后面写的会覆盖先写的；DOM2 级会按顺序执行**

## 事件对象

- 事件处理函数提供一个形式参数，它是一个对象，**封装了本次事件的细节**

- 用 **event** 或 **e** 来表示

- event、e 可以显示的信息：
  - 鼠标位置

## e.charCode 和 e.keyCode 属性

- e.charCode 属性通常用于 onkeypress 事件中，表示用户输入的字符的“字符码”

- e.keyCode 属性通常用于 onkeydown 事件和 onkeyup 中，表示用户按下的按键的“键码”

## e.preventDefault()

- 用来**阻止事件产生的“默认动作”**

## e.stopPropagation()

- e.stopPropagation()方法用来阻止事件继续传播

- **在一些场合，非常有必要切断是事件继续传播**，否则会造成页面特效显示出 bug

## 事件委托

- 批量添加事件监听的性能问题

  - 每一个事件监听注册都会消耗一定的系统内存，而批量添加事件会导致**监听数量太多，内存消耗会非常大**
  - 每个事件处理函数都是不同的函数，这些**函数本身也会占用内存**

- 动态绑定事件的性能问题

  - 新增元素必须分别添加事件监听，**不能自动获得事件监听**
  - 大量事件监听、大量事件处理函数都会**产生大量消耗内存**

- 解决办法 - 事件委托

  - 利用**事件冒泡**的机制，将**后代元素**事件委托给祖先元素
    - 比如多 ul 列表监听，不管点击哪个 li 元素，事件都会通过事件冒泡传给祖先数组。
  - e.target 和 e.currentTarget
    - e.target 触发此事件的最早元素，即“事件源元素”
    - e.currentTarget 事件处理程序附加到的元素

- 事件委托的使用场景

  - **当有大量类似元素需要批量添加事件监听时**，使用事件委托可以减少内存开销
  - **当有动态元素节点上树时**，使用事件委托可以让新上树的元素具有事件监听

- 事件委托时需要注意的事项
  - onmouseenter 和 onmouseover 都表示“鼠标进入”，他们之间的区别
    - onmouseenter **不冒泡**
      - 监听的就是对象的本身，对象的子对象因为不会冒泡，所以事件无效
    - onmouseover **冒泡**
  - 使用事件委托的时候要注意：**不能委托不冒泡的事件给祖先元素**
  - 最内层的元素**不能再有额外的内层元素**，比如：
    - ul > li > span + text ，此时用户点击，监听的 e.target 是 span 标签，text 的文字不会发生变化

## 定时器和延时器

- setInterval()可以 **重复的调用一个函数，在每次调用之间具有固定的时间间隔**

  - setInterval()可以接收第 3、4、5...无穷多个参数，它们将按顺序传入函数内
  - 清处定时器
    - clearInterval(引用定时器的变量名)
    - 启动定时器时，为了防止用户不当操作造成定时器叠加，我们应该在设置定时器之前，先清处定时器

- setTimeout() 设置一个延时器，当指定的时间到了，执行函数一次，不在重复执行
  - clearTimeout()清除延时器，和 clearInterval()类似

## 认识异步

## js 和 css3 结合实现动画

- 函数节流
  - 一个函数执行之后，**只有大于设定的执行周期后才允许执行第二次**
    - 借助 setTimeout()延时器实现简单的节流功能

## 节流锁写法

6-1.html

```js
//节流锁
//全局变量 lock
let lock = true; //true 表示开锁状态
function fn() {
  if (!lock) return; //判断所得状态，false时表示关闭，直接退出函数的执行

  //函数核心语句

  lock = false; //函数执行起来，先关锁，防止用户过度点击
  //设置解锁延迟，一般延迟的时间刚好等于动画持续时间
  setTimeout(callback, time);
  //完成
}
```

## 无缝连续滚动特效写法

6-2.html

```js
//基本结构，一个overflow：hidden的div#box
//div#box下面时ul#list>li
//对ul进行复制操作
list.innerHTML += list.innerHTML;
//设置一个全局变量left，用来设置ul的移动步长
let left = 0；
//设置一个timer变量用于接收setInterval()的方法
//执行一次move()启动滚动动画
//move用来移动ul
//使用到setInterval()时，要注意多次设置叠加的情况，所以一开始需要清除定时器
        function move() {
            clearInterval(timer);
            timer = setInterval(() => {
                left -= 4;
                if (left <= -500)
                    left = 0;
                oList.style.left = left + "px"
            }, 50)
        }
//为鼠标的移入移除添加监听，移入时清除延时器，移出时设置延时器

        list.onmouseenter = function () {
            clearInterval(timer);
        }
        list.onmouseleave = function () {
            moveList()；
        }
```

## 跑马灯特效

6-3.html

```js
//实现思路
//1、设置移动位置的变量idx，idx * li宽度等于单次要移动的距离
//2、list.firstElementChild.cloneNode(true)，克隆第一个到节点，挂载到ul最后，即子节点的顺序为0,1,2,3,4,5...0
//3、右按钮的处理，点击一次对idx++，之后更新list的left值为 -idx * li宽度 + "px"
//当idx > length-1时，设置一个延时器，事件为移动动画的持续时间，此时对动画的transition设置为none，目的是为了让用户无感知的将最后的0号节点替换为第一个的0号节点，完成loop循环，将idx归0，list的left归0，下次调用时在函数最前方添加transition属性，恢复过渡动画
//为右按钮添加节流锁
//4、左按钮的处理思路，首先进行节流锁设置，对idx进行判断，当idx为0时，取消list的过渡属性，在将idx移动到最后一位list.length-1的位置，设置left值为 -idx * li宽度 + "px"，之后将idx从最后一位，通过延迟函数，设置过渡动画，然后立马将list拉到复制的0号位的前一位，idx为length-2，left为 -idx * li宽度 + "px"，
//idx != 0时，idx-- ，left = 。。。设置节流锁
```

## 呼吸轮播特效

6-4.html

```js
//思路：向右切换时，只需要判断，最后一个位置，idx > length - 1时，将idx归0，即可切换到第一个节点
//向左切换时，判断第一个位置，idx < 0，将idx设置成最后一个节点 length - 1，即可切换到最后一个节点
//呼吸轮播，不需要浮动，也不需要克隆
```
