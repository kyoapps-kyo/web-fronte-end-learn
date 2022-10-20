// 函数防抖，频繁操作中不处理，直到操作完成之后（再过 delay 的时间）才一次性处理
function debounce(fn, delay) {
  delay = delay || 200;

  var timer = null;

  return function () {
    var arg = arguments;

    // 每次操作时，清除上次的定时器
    clearTimeout(timer);
    timer = null;

    // 定义新的定时器，一段时间后进行操作
    timer = setTimeout(function () {
      fn.apply(this, arg);
    }, delay);
  };
}

var count = 0;

// 主体
function scrollHandle(e) {
  console.log(e.type, ++count); // scroll
}

// 代理
var proxyScrollHandle = (function () {
  return debounce(scrollHandle, 500);
})();

window.onscroll = proxyScrollHandle;
// 缓存代理可以为一些开销大的运算结果提供暂时的缓存，提升效率。来个栗子——缓存加法操作：
// 主体
function add() {
  var arg = [].slice.call(arguments);

  return arg.reduce(function (a, b) {
    return a + b;
  });
}

// 代理
var proxyAdd = (function () {
  var cache = [];

  return function () {
    var arg = [].slice.call(arguments).join(",");

    // 如果有，则直接从缓存返回
    if (cache[arg]) {
      return cache[arg];
    } else {
      var ret = add.apply(this, arguments);
      return ret;
    }
  };
})();

console.log(
  add(1, 2, 3, 4),
  add(1, 2, 3, 4),

  proxyAdd(10, 20, 30, 40),
  proxyAdd(10, 20, 30, 40)
); // 10 10 100 100
