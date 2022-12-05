# 微信小程序开发

## 前置任务

- 模拟后台数据 fastmock

- 配置小程序后台服务器

  - 开发设置 - 服务器域名 直接收 https 协议的域名

## 小程序的开发以及上线流程

1. 添加成员，提供共同开发权限

2. 代码代发得差不多后，上传，选择发布为体验版，需要将体验者设置为运营等角色才可以体验

3. 提交代码审核完成小程序上架

## 小程序结构

- .json 配置项
- .js 程序逻辑
- .wxml 页面架构
- .wxss 页面样式

- app.js 存放全局逻辑
- app.json 全局配置
- app.wxss 全局样式

- 页面优先级高于全局

## 使用全局配置制作 tabbar

## App 的生命周期

- `onLaunch`　启动时执行的函数 `onLaunch(option){}` `option:{scene,path,query}`

- `onShow` 小程序重新展示的时候，自动执行

- `onHide` 取消展示的时候，自动执行

- `onError(msg)` 出现错误时候,自动执行

- app.js 文件中编写的是整个小程序都可以用到的方法
  - 可以在这里编写多个页面通用的数据，和方法
  - pages 下通过 `const app = getApp()` 获得 app 实例

## page 的生命周期

- `onLoad`

- `onReady` 页面第一次加载，并且被渲染之后执行

- `onShow`

- `onShow`

- `onHide`

- `onPullDownRefresh` 每次下拉刷新时执行

- `onReachBottom` 页面到最底部时自动执行

- `onPageScroll` 当页面滚动

## 页面与逻辑文件的串联

- 数据要定义在 data 中

- 可以视图层绑定函数

- 函数中不能直接改变 data 的数据，需要通过 this.setData({})来操作

## 逻辑层 api

- 在浏览器中，可以通过 window 操作浏览器提供的接口，以及全局变量

- 在微信中是 wx

## 视图层代码拆分

1. 第一种使用`<include src="path" />`

2. 第二种 template

## 组件和样式相关

- 微信的宽度单位可以用 rpx，不关你是什么机型，默认总宽度都是 750rpx
