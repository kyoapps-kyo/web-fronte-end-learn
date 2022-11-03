# 本地储存

## Cookie

- HTTP Cookie，简称 Cookie
- 一种浏览器存储数据的方式
- 因为存储在用户本地，而不是存储在服务器上，是本地存储
- 一般会自动随着浏览器每次请求发送到服务器端

### 作用

- 利用 Cookie 跟踪统计用户访问网站的习惯，什么时间访问，访问了那些页面，在每个页面的停留时间等

### 在浏览器中操作 Cookie

- 获取 `document.cookie`

- 不要在 cookie 中保存敏感信息

### 设置 Cookie

- 只能一个个的设置
  - `document.cookie = "username=tom"`

### 读取 Cookie

- 原生的只能读取全部的 Cookie，"user=1; name=tom; age=18"

### Cookie 的属性

1. Cookie 的名称 Name 和值 Value
   - name 或者 value 如果包含非英文字母，写入时使用`encodeURIComponent()`编码，读取是使用`decodeURIComponent()`解码
   - 一般只有值包含非英文字符
2. 失效时间
   - 对于失效的 Cookie，会被浏览器清除
   - 如果没有设置失效时间，这样的 Cookie 被称为会话 Cookie
   - 存在于内存中，当会话结束，也就是浏览器关闭时，Cookie 消失
   - 这种 Cookie 就是 Session
   - 需要长时间存在，设置 expires 或者 Max-Age
   ```js
   //expires
   document.cookie = `username=tom; expires=${new Date("2100-1-01 00:00:00")}`;
   //max-age
   //值为数字，表示当前时间 + 多少秒后过期，单位是秒
   document.cookie = `username=tom; max-age=5;`;
   //如果max-age的值是0或者负数，则Cookie会被删除
   ```
3. domain

   - 限定域名可访问的 Cookie
   - .domainName.com 跨域名可访问
   - 添加方式同上
   - js 只能读取当前域或者父域的 Cookie，无法读写其他域的 Cookie

4. path

   - 路径，目录
   - 下层目录可以访问到上层目录的 Cookie
   - 当 Name、Domain、Path 这 3 个字段都相同的时候，才是同一个 Cookie

5. httpOnly

   - 设置了 HttpOnly 属性的 Cookie 不能通过 JS 去访问

6. Secure 安全标志

   - 限定了只有在使用了 https 而不是 http 的情况下才可以发送给服务器端

- Domain、Path、Secure 都要满足条件，还不能过期的 Cookie 才能随着请求发送到服务器端

### Cookie 的封装

- [文件](./Cookie.js)

### Cookie 的注意事项

- 前后端都可以写入和获取 Cookie

- Cookie 有数量限制

  - 每个域名下的 Cookie 数量有限，20-50 个
  - 超过单个域名限制之后，在设置 Cookie，浏览器就会清除以前的 Cookie

- Cookie 有大小限制

  - 每个 Cookie 的容量很小，最多只有 4KB 左右

## localStorage

- localStorage 也是一种浏览器存储数据的方式(本地存储)，它只能存储在本地，不会发送到服务器端

- 单个域名下的 localStorage 的总大小有限制

### 基本用法

- `localStorage.setItem(name,value);`

- `localStorage.getItem(name);` 获取不存在的会返回 null

- `localStorage.removeItem(name);` 删除不存在的 key 不会报错

- `localStorage.clear();`

### 使用 localStorage 实现自动填充

### localStorage 注意事项

- 存储期限

  - 持久化的本地储存，除非手动清除，js 删除，或者浏览器清除缓存，否则永远不会过期

- localStorage 键值类型

  - 只能是字符串类型
  - 不是字符串类型，也会先转化成字符串类型再存储进去

- 不同域名下能否共用 localStorage

  - 不能使用

- localStorage 的兼容性

  - IE7 及以下不支持，IE8 开始可以支持

- [兼容性查询网址](https://canIuse.com)

### sessionStorage

- 用法同 localStorage
- 浏览器关闭，sessionStorage 清除
