//道格拉斯函数，以o为原型，创建新对象
function object(o, argsO) {
  //创建临时构造函数
  function F() {}
  //让临时构造函数的prototype指向o
  //这样以来，new F()出来的对象，proto指向了o
  F.prototype = o;
  //一下是补充内容，将新的属性加入到f实例中
  const f = new F();
  for (var key in argsO) {
    f[key] = argsO[key].value;
  }
  //返回f的实例
  return f;
}

var obj1 = {
  a: 23,
  b: 32,
};

var obj2 = object(obj1, {
  title: {
    value: "hahah",
  },
  name: {
    value: "tom",
  },
});
var obj3 = object(obj1, {
  qw: {
    value: "dsafwe",
  },
  fddq: {
    value: "sadfwef",
  },
});
console.log(obj2.a, obj2.b);
console.log(obj2.__proto__);
obj1.a = 12;
obj1.b = 11;
console.log(obj2.__proto__);
console.log(obj2);
console.log(obj3);
