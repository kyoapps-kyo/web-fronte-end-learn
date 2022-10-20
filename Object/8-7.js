//寄生式继承
const o1 = {
  name: "Tom",
  age: 12,
};

function f(o) {
  const p = Object.create(o);
  p.sayHello = function () {
    console.log("I'm " + this.name);
  };
  return p;
}

var o2 = f(o1);

o2.sayHello();
