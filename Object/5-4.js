//继承

function People(name) {
  this.name = name;
}

People.prototype.sayHello = function () {
  console.log(`Im ${this.name}`);
};

function Student(name, id) {
  this.name = name;
  this.id = id;
}

tom.sayHello();

Student.prototype = new People();

const joy = new Student("joy");

console.log(joy);
