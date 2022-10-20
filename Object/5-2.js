//在prototype上添加方法
function People(name) {
  this.name = name;
}

People.prototype.sayHello = function () {
  console.log(this.name);
};

const tom = new People("Tom");
const toy = new People("Toy");

tom.sayHello();
toy.sayHello();
