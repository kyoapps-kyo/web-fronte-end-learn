# Sass

## 入门

1. 文件类型
   - .scss 类似于 css 的写法，但可以进行嵌套，使用`&:hover \ &:active` ...
   - .sass 需要去掉{}和; 其他和 scss 一样

## 变量

- `$name: value`
- value 可以进行数学运算，可以是字符串、颜色、、、
- 变量定义要位于 css 文件头部

### 函数

- `lighten($name, x%)` 变浅 x%
- `darken($name, x%)` 加深 x%

## 嵌套语法

```css
div
    span
        color: red;
```

## 代码拆分和引用

- 要引用的文件`_variables.sass`,加入

- 引入`@import 'variables'`

## 部分代码抽离 mixin

- `@mixin name ...`配合`@include name`

```css
/* 封装一个单行溢出 */
@mixin single-line-ellipsis($width) {
  width: $width;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.text {
  @include: single-line-ellipsis(500px);
}
.content-text {
  @include: single-line-ellipsis(300px);
}
```

## 媒体查询与 mixin 的配合使用

```css
@mixin name {
  @media screen and (min-width: 768px) {
    @content;
  }
}
.header {
  width: 1000px;
  @include name {
    width: 500px;
  }
}
```

- 类似于 slot 插槽的用法
