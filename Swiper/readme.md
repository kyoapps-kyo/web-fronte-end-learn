# Swiper

## Swiper 使用流程

1. 加载 Swiper 文件

   - swiper-bundle.min.js
   - swiper-bundle.min.css

2. 完成 Swiper 的 Html 结构和样式

3. 初始化 Swiper

4. 版本升级一切以官网为准

   - [github](https://github.com/nolimits4web/swiper)
   - [swiper-cn](https://www.swiper.com.cn/index.html)

## Swiper 常用 api

1. Swiper 初始化

2. 基础配置

3. 事件

   - init 初始化后执行
   - slideChangeTransitionStart 从当前 slide 开始过渡到另一个 slide 时执行
   - slideChangeTransitionEnd 从一个 slide 过渡到另一个 slide 结束时执行

4. 属性

   - this.activeIndex
   - this.previousIndex
   - this.width / this.height

5. 方法

   - slideNext() / slidePrev() 切换上下滑块
   - slideTo() 控制 Swiper 切换到指定 slide

6. 控制

   - autoplay 自动切换
   - pagination 使用分页器导航
   - navigation 使用前进后退按钮来控制 Swiper 切换
   - scrollbar 为 Swiper 增加滚动条
   - keyboard 开启键盘来控制 Swiper 切换
   - mousewheel 开启鼠标滚轮控制 Swiper 切换

[swiper-api](./swiper-api.html)

## webpack 项目中通过 npm 安装和使用 Swiper

1. `yarn add swiper -D `

2. 入口文件中

   -

   ```js
   // import Swiper JS
   import Swiper from "swiper";
   // import Swiper styles
   import "swiper/swiper-bundle.css";
   ```

3. 如果需要使用分页器等功能，需要修改导入 Swiper 的代码

   -

   ```js
   import Swiper from 'swiper' (修改为)=>  import Swiper, { Navigation, Pagination } from 'swiper'
   ```

4. 初始化

   -

   ```js
   Swiper.use([Navigation, Pagination]); // 使用需要的功能
   const mySwiper = new Swiper("#swiper", {
     loop: true,
     pagination: {
       el: ".swiper-pagination", // 分页器
     },
     navigation: {
       nextEl: ".swiper-button-next", //切换箭头
       prevEl: ".swiper-button-prev",
     },
   });
   ```

```

```
