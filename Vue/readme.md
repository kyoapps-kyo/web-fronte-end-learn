# Vue

## Vue 应用

```js
// 页面唯一根节点 root
// 创建vue app
const app = Vue.createApp({});
// 挂载后的实例
const vm = app.mount("#root");
// 可以通过vm对app中的数据进行操作
```

## 模版指令

- 动态属性`@[event]='event name'`/`:[name]='variable'`， 这里的 name 是一个 data 中定义的变量，通过不同的值，改变要传入的属性名

- 事件修饰符,`@event.prevent`

## 方法·计算属性·监听器

- 方法：只要页面重新渲染，方法就会执行

- 计算属性：只有依赖的数据发生改变，才会计算

- 监听器：计算属性的底层实现，更多用于异步操作

- 优先级：
  - computed > method
  - computed > watch

## 样式绑定语法

1. 字符串

2. 对象`classObject: {red: true, green: false}`

3. 数组`classArr: ['red', 'text-xs', {bg-red: true}]`

定义行内样式

1. 使用对象 `styleObject: {color: 'red', background: 'yellow'}`

## 列表渲染

- :key 的作用

  - 渲染的时候，为了保证渲染的效率，防止没有变动的 item 被重新渲染，此时给予一个唯一的 key 值，用来给 vue 判断当前的 item 是否能够复用

- for 里面 可以循环一个数字，例如`v-for='item in 10'`

- template 可以仅仅作为占位符使用

## 事件绑定

- 多个参数传递时，如何获取 event 对象，`handleFn(2, $event)`，接收`handleFn(num, event)`

- 绑定多个函数`handle1(), handle2()`

### 事件修饰符

- .stop 停止冒泡
- .self 只有点击自己才执行绑定函数
- .prevent 阻止默认行为
- .capture 将冒泡变成捕获
- .once 绑定事件只执行一次
- .passive 修饰符一般用于触摸事件的监听器，可以用来改善移动端设备的滚屏性能。

### 按键修饰符

- .enter
- .tab
- .delete
- .esc ...

### 鼠标修饰符

- .left
- .right
- .middle

### 精确修饰符

- .exact

## 表单数据双向绑定

- v-model 对 data 进行操作，可以改变 v-model 绑定的值，对 v-model 操作，可以改变 data 中对应的值，这个叫做双向绑定

- checkbox 的特殊用法

  ```js
  data: message:[]
  v-model='message' value='jack'
  v-model='message' value='lee'
  v-model='message' value='dell'
  // 此时每次点击checkbox都会往message数组中添加或删除value
  ```

- true-value, false-value

- 修饰符
  1.  .lazy 失去焦点再同步数据
  2.  .number 转化为数字
  3.  .trim 去除前后空格

## 组件

### 全局组件

- `app.component('name', {})`
- 即使不使用也被挂载在页面上，会对性能有一定的影响，处处可以使用，性能不高，但使用简单

### 局部组件

- `const name = {}`
- ```js
  Vue.createApp({
    components: { name: name },
  });
  ```

### 组件单项传值

- 多个数值传递`v-bind='params'`
- 接收相当于
- 单项数据流

- non-props 的几种方式

  ```js
  //inheritAttrs:false 不继承父组件的属性
  `<Parent style='color:red;'></Parent>``<Child></Child>`;
  //直接在组件上使用全部
  v-bind="$attrs"
  // 取得某一个属性
  `<Child :msg="$attrs.msg"></Child>`
  ```

### 父子组件通过事件进行通信

- 子组件中，通过$emit('事件名')抛出一个事件，在父组件中处理这个抛出事件

- 组合式中，可以通过 defineEmits 来声明抛出的事件，

```html
<script setup>
  const emit = defineEmits(["enlarge-text"]);
  emit("enlarge-text");
</script>
```

### 具名插槽

- `<template #name></template>`
- `<slot name='name'></slot>`

### 作用域插槽

- 解决子组件渲染方式有父组件决定时

```html
<!-- child -->
<slot v-for="item in list" :item="item"></slot>
<!-- parent -->
<child v-slot="{item}">
  <div>{{item}}</div>
</child>
```

## 动态组件和异步组件

```html
<!-- keep-alive 缓存动态组件的数据 -->
<keep-alive>
  <component is="component-name" />
</keep-alive>
```

- 基本用法

```js
import { defineAsyncComponent } from "vue";

const AsyncComp = defineAsyncComponent(() => {
  return new Promise((resolve, reject) => {
    // ...从服务器获取组件
    resolve(/* 获取到的组件 */);
  });
});

// 也可以是异步其他组件
const AsyncComp = defineAsyncComponent(() =>
  import("./components/MyComponent.vue")
);
// ... 像使用其他一般组件一样使用 `AsyncComp`
// 也可以在父组件中直接定义
import { defineAsyncComponent } from 'vue'

const AdminPage = defineAsyncComponent(() =>
  import('./components/AdminPageComponent.vue')
)

<template>
  <AdminPage />
</template>

```

- 加载与错误状态

```js
const AsyncComp = defineAsyncComponent({
  // 加载函数
  loader: () => import("./Foo.vue"),

  // 加载异步组件时使用的组件
  loadingComponent: LoadingComponent,
  // 展示加载组件前的延迟时间，默认为 200ms
  delay: 200,

  // 加载失败后展示的组件
  errorComponent: ErrorComponent,
  // 如果提供了一个 timeout 时间限制，并超时了
  // 也会显示这里配置的报错组件，默认值是：Infinity
  timeout: 3000,
});
```

## 补充知识点

- v-once 只渲染一次，之后不会根据数据的变化反复渲染

- ref 获取 dom 节点 / 组件引用的方法

- provide / inject 不具备相应性

## 过度和动画

- 对需要的标签使用 transition 包裹起来

- 进入 `v-enter-from` `v-enter-to`
- 进入时使用过度还是动画 `v-enter-active`

- 离开 `v-leave-from` `v-leave-to`
- 离开时使用过度还是动画 `v-enter-active`

- v 可以使用 transition 中的 name 替换

- 自己定义的类名：在 transition 中，enter-active-class='hello'

- 在 transition 标签中，设置动画或者过度事件以谁为标准，`type='transition/animation'`

- 给 transition 标签设置 `:duration='1000'` 强制以设定时间为动作持续时间

### 使用 js 控制 transition

1. 关闭 transition 的 css 控制 `:css='false'`
2. 使用 transition 给定的钩子
   ```
      @before-enter="beforeEnterHandler"
      @enter="enterHandler"
      @after-enter="afterEnterHandler"
      @before-leave="beforeLeaveHandler"
      @leave="leaveHandler"
      @leave-after="leaveAfter"
      //el
      //el done
      //el
      //只有done函数执行了，after-enter才会被触发
   ```

### transition 的 mode

- in-out 先进再出

### 出现时过度 appear

### transition-group

列表动画

过度移动 v-move

### 状态动画

通过改变 data 状态引起的动画

## mixin 混入

- 组件 data 优先级高于 mixin data 优先级

- 生命周期函数，先执行 mixin 里面的，在执行组件里面的

- 自定义的属性，组件中的属性优先级高于 mixin 属性的优先级

- vue3 中不建议使用 mixin 了

## vue 自定义指令 directive

``
//如果只有 mounted 和 updated，可以简写为
app.directive('name', (el, binding)=>{
el.style[binding.arg] = binding.value
})

<div v-name:arg='distance'>
```

## Teleport 传送门功能

> <Teleport> 是一个内置组件，它可以将一个组件内部的一部分模板“传送”到该组件的 DOM 结构外层的位置去。

- 通过 `to` 的 prop 将包裹标签挂载到目标标签上,
- 条件：目标标签必须在包裹标签前先渲染
- 使用 Teleport 不会影响组件之间的逻辑关系
- 禁用：`:disabled='Boolean'`
- 一个可重用的模态框组件可能同时存在多个实例。对于此类场景，多个 <Teleport> 组件可以将其内容挂载在同一个目标元素上，而顺序就是简单的顺次追加，后挂载的将排在目标元素下更后面的位置上。

## render 函数

> 虚拟 DOM，将目标所需的 UI 通过数据结构“虚拟”地表示出来，保存在内存中，然后将真实的 DOM 与之保持同步。

```js
const vnode = {
  type: "div",
  props: {
    id: "hello",
  },
  children: [
    /* 更多 vnode */
  ],
};
```

- vnode 是一个纯 JavaScript 的对象 (一个“虚拟节点”)，它代表着一个 <div> 元素。它包含我们创建实际元素所需的所有信息。它还包含更多的子节点，这使它成为虚拟 DOM 树的根节点。

- 一个运行时渲染器将会遍历整个虚拟 DOM 树，并据此构建真实的 DOM 树。这个过程被称为挂载 (mount)。

- 如果我们有两份虚拟 DOM 树，渲染器将会有比较地遍历它们，找出它们之间的区别，并应用这其中的变化到真实的 DOM 上。这个过程被称为更新 (patch)，又被称为“比对”(diffing) 或“协调”(reconciliation)。

- 虚拟 DOM 带来的主要收益是它让开发者能够灵活、声明式地创建、检查和组合所需 UI 的结构，同时只需把具体的 DOM 操作留给渲染器去处理。

### 模板 vs 渲染函数

> 在处理高度动态的逻辑时，渲染函数相比于模板更加灵活，因为你可以完全地使用 JavaScript 来构造你想要的 vnode。

为什么 Vue 默认推荐使用模板呢？有以下几点原因：

1. 模板更贴近实际的 HTML。这使得我们能够更方便地重用一些已有的 HTML 代码片段，能够带来更好的可访问性体验、能更方便地使用 CSS 应用样式，并且更容易使设计师理解和修改。

2. 由于其确定的语法，更容易对模板做静态分析。这使得 Vue 的模板编译器能够应用许多编译时优化来提升虚拟 DOM 的性能表现 (下面我们将展开讨论)。

在实践中，模板对大多数的应用场景都是够用且高效的。渲染函数一般只会在需要处理高度动态渲染逻辑的可重用组件中使用。

### h() 函数

- `h(tagName, { attributes }, )`

```js
const vnode = h("div", { id: "foo" }, []);

vnode.type; // 'div'
vnode.props; // { id: 'foo' }
vnode.children; // []
vnode.key; // null
```

```vue
<script setup>
//在vue3中使用
import { ref, h } from "vue";

const msg = ref("Hello World!");

const myDiv = h(
  "div",
  { style: [{ color: "red", "font-size": "100px" }] },
  "aa"
);
</script>

<template>
  <my-div />
</template>
```

## 插件的定义和使用

> 把通用型的功能封装起来

插件没有严格定义的使用范围，但是插件发挥作用的常见场景主要包括以下几种：

1. 通过 app.component() 和 app.directive() 注册一到多个全局组件或自定义指令。

2. 通过 app.provide() 使一个资源可被注入进整个应用。

3. 向 app.config.globalProperties 中添加一些全局实例属性或方法

4. 一个可能上述三种都包含了的功能库 (例如 vue-router)。

## setup 方法

- created 实例被完全初始化之前

- setup 接收两个参数，props，context

### ref 和 reactive

- ref 处理基础类型的数据
- 底层原理

  - 通过 proxy 对数据进行封装，当数据变化时，触发模版等内容的更新
  - name = ref('Tom') -> proxy({value : 'Tom'})
  - 调用时要用 name.value

- reactive 处理非基础类型的数据
- 底层原理

  - 同样是通过 proxy 对数据进行封装，当数据变化时，触发模版等内容更新
  - nameObj = reactive({name: 'Tom'}) -> proxy({name : 'Tom'})
  - 调用时使用 nameObj.name
  - 解构 reactive 值，如果结构对象时复杂数据时，保有其相应性，如果是简单数据，失去相应性

- 常用方法 `const { readonly, toRefs } = Vue`

  - readonly -> `const name2 = readonly(name1)` name2 只读，不可改变其值
  - toRefs -> `const {name} = toRefs(nameObj)` -> `toRefs proxy({name : 'Tom'}) -> {name: proxy({value : 'Tom'})}`

- toRef 与 setup 中的 context 参数

  - toRef 不确定解构对象中有没有该属性时，使用 toRef `const data = reactive({name: 'Tom'})` `const {age} = toRef(data, 'age')`
  - context: `const { attrs, slots, emit } = context`
  - attrs None-props 属性
  - slots 插槽
  - emit

## watch & watchEffect

- watch

  - 具备一定的惰性 lazy
  - 参数可以拿到原始和当前值
  - 可以侦听多个数据的变化，用一个侦听器承载

- watchEffect

  - 立即执行，没有惰性 immediate
  - 不需要传递要侦听的内容，自动会感知代码依赖，不需要传递很多参数，只要传递一个回调函数
  - 不能获取变化之前的数据

- 取消 watch / watchEffect

  - const stop = watch() / watchEffect
  - stop()

- 通过 watch 的第二个参数，可以将 watch 编程非惰性的，{ immediate : true }

## vue3 中生命周期的新写法

```js
const {
  onBeforeMount,
  onRenderTracked, // 每次选然后重新收集响应式依赖
  onMounted,
  onRenderTriggered, // 每次触发页面渲染时自动执行
  onBeforeUpdate,
  onUpdated,
} = Vue;
```

## Provide, Inject 和模版 ref

- 父：provide(key, value), 子: const keyName = inject(key)

- 为了符合单项数据流原则，父传来的数据在父修改，provide(key, value) ->变为 provide(key, readonly(value))

- 使用父定义的方法去改变父传来的数据 父：provide(functionName, ()=>{}), 子: const functionName = inject(functionName), 子组件中调用父组件定义的方式操作数据

## Vue 脚手架工具

1. 前置工作

- 在国内使用 npm 包管理工具切换镜像源 `npm install -g nrm`
- 查看镜像源 nrm ls
- 切换镜像源 nrm use sourceName

## Router

> 哈希路由：根据 url 的不同，展示不同的内容

- router 文件： src - router - index.js

- routes 数组下，对象： { path: '', name: 'Home', component: Home}

- 使用 router-link 做跳转， 使用 router-view 展示内容

- `component: () => import('path')` 异步加载路由，通过异步加载可以降低首屏加载代码的数量

- `component: Home` 同步加载，增加首屏加载代码量

## VueX

> 可以被认为是一个数据管理框架，创建一个全局唯一的仓库，用来存放全局的数据

- vue2 中，获取数据`this.$store.state.key`

- VueX 修改数据的流程

1. dispatch 方法，派发一个 action，名字叫做 change
2. 感知到 change 这个 action，执行 store 中 actions 中的 chang 方法
3. commit 提交一个叫做 change 的数据改变
4. mutation 感知到提交的 change 改变，执行 mutations 中的 change 方法改变数据

- mutation 中只能有同步代码，不能有异步操作

- actions 中存放异步代码

- dispatch 和 actions 是一对, actions 中的方法第一个参数是 store，第二个是接收的传值

- commit 和 mutations 是一对，mutations 中的方法第一个是 state，第二个是接收的传值

### 在 composition api 中使用 VueX

- 使用 useStore，`const store = useStore()`
- 使用 toRefs()解构 VueX 中的数据，`const { name } = toRefs(store.state)`

## 使用 axios 发送 ajax 请求
