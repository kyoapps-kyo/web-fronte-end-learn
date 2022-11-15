# 移动 Web 开发

- 重点
  1.  布局
  2.  移动端事件
  3.  性能优化

## 移动端概念

1. 分辨率

2. 物理像素

   - 设备本身具有的像素，实际的物理点
   - physical pixel / dp: device pixel

3. CSS 像素

   - 逻辑像素 / 设备独立像素
   - logical pixel / dip: device independent pixel

4. 设备像素比（dpr）

   - dpr: device pixel ratio
   - dpr = (在一个方向上) 设备像素 / CSS 像素(没有缩放时)

5. 标清屏和高清屏

   - dpr = 1 标清屏
   - dpr > 1 高清屏

6. 缩放

   - 用户通过手指，缩放改变 CSS 像素的大小
   - 分为放大和缩小

7. PPI/DPI

   - 每英寸的物理像素点
   - PPI : pixels per inch
   - DPI : dots per inch
     ![ppi](./imgs/ppi.png)

## 视口 viewport

- 布局视口

- 视觉视口

- 理想视口： 布局视口 = 视觉视口

### 设置视口

- `<meta name="viewport" content="width=device-width">`
- 大抵等价写法
- `<meta name="viewport" content="initial-scale=1">`
- 各自会有各自的兼容性问题，所以每次都一起写上
- `<meta name="viewport" content="width=device-width,initial-scale=1">`

- initial-scale 的值，表示的是 设备像素缩放比 = 手机逻辑像素/CSS 逻辑像素，所以比值小，css 逻辑像素高

- 禁止放大
- `<meta name="viewport" content="user-scalable=no">`
- `<meta name="viewport" content="initial-scale=1,maximum-scale=1,minimum-scale=1">`

### 获取视口宽度

- 布局视口
  - `document.documentElement.clientWidth`
  - `document.documentElement.getBoundingClientRect().width`

## 常用单位

- px 绝对单位， 设定固定宽高，也可用于设置字体

- % 可以用来布局，相对单位，设置宽度，流体布局中使用

- em

  - 相对单位，设置字体大小时， 1em = 父元素字体大小
  - 设置其他，比如宽高时，1em = 自身字体的大小
  - 一般用来控制首行缩进，不用来布局
  - `font-size:12px; text-indent: 2em;`
  - 缩进两个字符

- rem (root element => html ) 可以用来的布局

  - 相对于 html 跟元素的字体大小， 1rem = 跟元素的字体大小

- vw/vh/vmax/vmin

  - vmax：当前 vw 和 vh 中较大的一个值
  - vmin：当前 vw 和 vh 中较小的一个值

## 流体布局

- 百分比布局
