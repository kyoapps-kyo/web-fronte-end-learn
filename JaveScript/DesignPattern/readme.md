# 什么是设计模式

- 在开发过程中面临的一般问题的解决方案。

## 设计模式的 5 大原则

1. 单一职责原则：一个类，应该仅有一个引起它变化的原因，换而言之，就是功能要单一

2. 开放封闭原则： 对拓展开放，对修改关闭

3. 里氏替换原则： 基类出现的地方，子类一定出现

4. 接口隔离原则： 一个接口应该是一种角色，不该干的事情不干，该干的都要干。简而言之就是降低耦合，减低依赖

5. 依赖反转原则： 针对接口编程，依赖抽象而不依赖具体

JS 中常用的是单一功能和开放封闭原则

## 工厂模式

- 工厂模式是由一个方法来决定到底要创建哪个的实例，而这些实例经常都拥有相同的接口。这种模式主要是用在实例化的类型在编译器并不能确定，而是在执行期决定的情况。

- 分类：简单工厂，工厂方法

- 区别：

  - 简单工厂：将创建对象的步骤放在父类进行
  - 工厂方法：延迟到子类中进行
  - 总结为：根据传入的字符串来选择对应的类

- 实现：
  - 简单工厂：9-1-1.js
  - 工厂方法：9-1-2.js

## 构造器模式

- 构造器是一个类中用来初始化新对象的特殊方法。并且可以接受参数用来设定实例对象的属性的方法

- 实现：9-3.js

## 单例模式

- 保证一个类仅有一个实例，并提供一个访问它的全局访问点。单例模式是一种常用模式，有一些对象我们往往只需要一个，比如全局缓存、浏览器中的 window 对象等。在 js 开发中，单例模式的用途非常广泛。例如，每次单击登陆按钮时，页面中会出现一个登陆浮窗，而这个登陆浮窗是唯一的，无论单机多少次登陆按钮，这个浮窗都只被创建一次，那么这个登陆浮窗就适合单粒模式来创建。

- 实现：假设要设置一个管理员，多次调用也仅设置一次，我们可以使用闭包缓存一个内部变量来实现这个单例：9-4.js

## 原型模式

- 用原型实例指定创建对象的种类，并且通过拷贝这些原型创建新的对象，在 js 中，实现原型模式是在 es5 中提出的 Object.create 方法，使用现在有的独享来提供新创建的对象\_\_proto\_\_

- 核心思想：用原型实例指定创建对象的种类，并且通过拷贝这些原型创建新的对象。

- 实现：使用现有对象来提供创建的对象\_\_proto\_\_ 9-5.js

## 发布-订阅模式（观察者模式）

- 定义了一个对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖与它的对象都将得到通知，在 JS 中，我们一般用事件模型来代替传统的发布-订阅模式。

- 核心思想：取代对象之间硬编码的通知机制，一个对象不用再显式地调用另一个对象的某个接口，在 js 中通常使用注册回调函数的形式来订阅。

- 实现：

```js
//订阅
document.body.addEventListener("click", callback1, false);
document.body.addEventListener("click", callback2, false);
//发布
document.body.click();
```

- 例子 2 9-6.js

## 适配器模式

- 适配器模式的作用是解决两个软件实体间的接口不兼容的问题。使用适配器模式之后，原本由于接口不兼容而不能工作的两个软件实体可以一起工作。

- 适配器的别名是包装器（wrapper），这是一个相对简单的模式。在程序开发中有许多这样的场景：当我们试图调用模块或者对象的某个接口时，却发现这个接口的格式并不符合目前的需求。这时候有两种解决办法，第一种是修改原来的接口实现，但如果原来的模块很复杂，或者我们拿到的模块是一段别人编写的经过压缩的代码，修改原接口就显得太不现实了，第二种办法是创建一个适配器，将原接口转换为客户希望的另一个接口，客户只需要和适配器打交道。

- 核心思想：解决两个已有接口之间不匹配的问题

- 实现：一个简单的数据格式转换的适配器 9-7.js

## 装饰器模式

- 以动态地给某个对象添加一些额外的职责，而不会影响从这个类中派生的其他对象。

- 是一种“即用即付”的方式，能够在不改变对象自身的基础上，在程序运行期间给对象动态地添加职责。

- 核心思想：是为对象动态加入行为，经过多重包装，可以形成一条装饰链

- 实现：最简单的装饰者，就是重写对象的属性 9-8.js

## 代理模式

- 当客户不方便直接访问一个对象或者不满足需要的时候，提供一个替身对象来控制对这个对象的访问，客户实际上访问的是替身对象。替身对象对请求作出一些处理之后，再把请求转交给本体对象代理和本体的接口具有一致性，本体定义了关键功能，而代理是提供或拒绝对它的访问，或者在访问本体之前做一些额外的事情。
- 核心思想: 为一个对象提供一个代用品或占位符，以便控制对它的访问

- 实现：代理模式主要有三种：保护代理、虚拟代理、缓存代理

  - 保护代理主要实现了访问主体的限制行为，以过滤字符作为简单的例子：9-9-1.js
    - 有消息的时候对敏感字符进行了处理，这属于虚拟代理的模式。虚拟代理在控制对主体的访问时，加入了一些额外的操作，如在滚动事件触发的时候，也许不需要频繁触发，我们可以引入函数节流，这是一种虚拟代理的实现: 9-9-2.js

## 外观模式

- 为子系统中的一组接口提供一个一致的界面，定义一个高层接口，这个接口使子系统更加容易使用

- 核心思想：可以通过请求外观接口来达到访问子系统，也可以选择越过外观来直接访问子系统

- 实现：外观模式在 JS 中，可以认为是一组函数的集合 9-10.js

## 迭代器模式

- 迭代器模式是指提供一种方法顺序访问一个聚合对象中的各个元素，而又不需要暴露该对象的内部表示。迭代器模式可以把迭代的过程从业务逻辑中分离出来，在使用迭代器模式之后，即使不关心对象的内部构造，也可以按顺序访问其中的每个元素。

- 核心思想：在使用迭代器模式之后，即使不关心对象的内部构造，也可以按顺序访问其中的每个元素

- 实现：JS 中数组的 map forEach 已经内置了迭代器

```js
[1, 2, 3].forEach(function (item, index, arr) {
  console.log(item, index, arr);
});
```