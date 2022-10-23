//寄生组合式继承

//两个参数，接收子类和父类的构造函数
function inheritPrototype(subType, superType) {
  const prototype = Object.create(superType.prototype);
  subType.prototype = prototype;
}

function People(name, age) {
  this.name = name;
  this.age = age;
}
People.prototype.sayHello = function () {
  console.log("hi im " + this.name);
};

function Student(name, age, school) {
  People.call(this, name, age);
  this.school = school;
}
inheritPrototype(Student, People);

Student.prototype.getSchool = function () {
  console.log(this.school);
};

var tom = new Student("tom", 14, "aaa school");

console.log(tom);
tom.sayHello();

tom.getSchool();

console.log(tom instanceof Student);
console.log(tom instanceof People);
console.log(tom instanceof Object);
