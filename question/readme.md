# 问题集合

## 图像相关

img 与包裹他的 div 下面有间隙

- `vertical-align:top`

图片只需要设置高或者宽，保持等比例缩放，不需要两个都同时设置

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
