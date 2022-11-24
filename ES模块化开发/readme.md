# 模块化开发

## 幻灯片

1. 将幻灯中的所有元素，高宽设置为 100%，再使用 js 计算容器的大小

2. 幻灯片的 module
   - base
   - constants
   - defaults
   - index
     - 继承 base，增加绑定事件
   - keyboard

## 使用 Ajax 获取资源

这里我们尝试使用 axios，不使用自己封装的 Ajax
[axios 文档](https://axios-http.com/zh/docs/intro)

```js
yarn add axios
//全局使用
src/plugins/axiosInstance.js
//axiosInstance.js
//导入axios
import axios from 'axios'

//使用axios下面的create([config])方法创建axios实例，其中config参数为axios最基本的配置信息。
const API = axios.create({
	baseUrl:'http://localhost:8080' //请求后端数据的基本地址，自定义
	timeout: 30000                   //请求超时设置，单位ms
})

//导出我们建立的axios实例模块，ES6 export用法
export default API


//main.js
import axios from "./plugins/axiosInstance.js";

const app = createApp(App);
app.mount("#app");

app.config.globalProperties.$axios = axios;
```

[演示代码](./ajax-data)
