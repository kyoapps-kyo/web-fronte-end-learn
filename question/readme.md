# 问题集合

## 图像相关

img 与包裹他的 div 下面有间隙

- `vertical-align:top`

图片只需要设置高或者宽，保持等比例缩放，不需要两个都同时设置

第二种方式是将 img `display: block`

## reset CSS 相关

- 移动 web 中不需要 outline
- 触摸高亮取消

  - `-webkit-tap-highlight-color:transparent`

## 多行文字的省略

```css
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2; /*控制行数*/
-webkit-box-orient: vertical;
white-space: normal !important;
word-wrap: break-word;
```

## 浏览器锚点跳转

scrollIntoView()

```js
var element = document.getElementById("box");

element.scrollIntoView();
element.scrollIntoView(false);
element.scrollIntoView({ block: "end" });
element.scrollIntoView({
  behavior: "instant",
  block: "end",
  inline: "nearest",
});
```

alignToTop [可选]，目前之前这个参数得到了良好的支持
true 元素的顶部将对齐到可滚动祖先的可见区域的顶部。对应于 scrollIntoViewOptions: {block: "start", inline: "nearest"}。这是默认值
false 元素的底部将与可滚动祖先的可见区域的底部对齐。对应于 scrollIntoViewOptions: {block: "end", inline: "nearest"}。
scrollIntoViewOptions [可选]，目前这个参数浏览器对它的支持并不好，可以查看下文兼容性详情
behavior [可选]定义过渡动画。"auto","instant"或"smooth"。默认为"auto"。
block [可选] "start"，"center"，"end"或"nearest"。默认为"center"。
inline [可选] "start"，"center"，"end"或"nearest"。默认为"nearest"。

## 移动端点击时的蓝色遮罩

取消

```css
* {
  -webkit-tap-highlight-color: transparent;
}
a {
  -webkit-tap-highlight-color: transparent;
}
```

## safari 开启移动端模拟

1. 打开浏览器的开发模式：
   Safari->偏好设置－>高级，在这一页的底部，将“在菜单中显示［开发］菜单”打勾；

2. 在浏览器中打开做好的页面；

3. 在菜单［开发］中，选择［进入响应式设计模式］或者按快捷键 Alt+Command+R，这样就可以看到页面在手机中的样子了。

只能模拟 iPhone

## 浏览器系统颜色的媒体查询

`@media (prefers-color-scheme: light)`

```css
@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}
```

## 多行文字省略

```css
.box {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal !important;
  word-wrap: break-word;
}
```

## route-view 组件的 ref

```js
//vue 2
<router-view ref="order" > </router-view>
//vue3
<RouterView v-slot="{ Component }">
    <component ref="container" :is="Component"></component>
</RouterView>
```

## axios 取消重复请求

- 执行取消后，对控制器变量赋值为空，取消请求中断

- signal 为只读，无法改变，存在 signal 时，请求无法在此发送，这就是取消后无法再发送请求的原因

```js
let controller = null;
function async fn(){
  if (controller) {
    controller.abort();
    controller = null;
  }
  controller = new AbortController();
  data.value = await getDelayData(`${BASE}/${props.contentId}`, {
    signal: controller.signal,
  });
}
```

## mac 安装 nodejs

### 安装

<!-- 1. `brew search nodejs`
2. `brew install node@xx` -->

### 升级

- `brew upgrade nodebrew`

- `nodebrew ls-remote`

- `nodebrew install-binary vxx.xx.x`

- `nodebrew list`

- `nodebrew use vxx.xx.x`

- `nodebrew ls`

- `node -v`

### 可能的错误

1. ` -bash: node: command not found`

   - .zsh ` export PATH=$HOME/.nodebrew/current/bin:$PATH`
     `source ~/.bash_profile`

2. 版本没有切换

   - `which node` 删除对应的文件夹

### 升级 npm

- `npm cache clean -f`

- `npm install npm@latest -g`

### 安装 ts 环境

- `brew typescript`
