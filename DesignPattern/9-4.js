//假设要设置一个管理员，多次调用也仅设置一次，我们可以使用闭包缓存一个内部变量来实现这个单例

//简单实现

function SetManager(name) {
  this.manager = name;
}

SetManager.prototype.getName = function () {
  console.log(this.manager);
};
/*
var SingletonSetManager = (function () {
  var manager = null;

  return function (name) {
    if (!manager) {
      manager = new SetManager(name);
    }

    return manager;
  };
})();

SingletonSetManager("a").getName(); // a
SingletonSetManager("b").getName(); // a
SingletonSetManager("c").getName(); // a
*/

// 如果要设置新的HR，就需要复制一遍代码，这时改写单例内部，实现通用性
// 提取出通用的单例
function getSingleton(fn) {
  var instance = null;

  return function () {
    if (!instance) {
      instance = fn.apply(this, arguments);
    }

    return instance;
  };
}

// 获取单例
var managerSingleton = getSingleton(function (name) {
  var manager = new SetManager(name);
  return manager;
});

managerSingleton("a").getName(); // a
managerSingleton("b").getName(); // a
managerSingleton("c").getName(); // a
// 这时，我们添加HR时，就不需要更改获取单例内部的实现了，仅需要实现添加HR所需要做的，再调用即可。
function SetHr(name) {
  this.hr = name;
}

SetHr.prototype.getName = function () {
  console.log(this.hr);
};

var hrSingleton = getSingleton(function (name) {
  var hr = new SetHr(name);
  return hr;
});

hrSingleton("aa").getName(); // aa
hrSingleton("bb").getName(); // aa
hrSingleton("cc").getName(); // aa
