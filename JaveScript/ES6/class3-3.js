/*
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.say = function() {
             console.log(this.name, this.age)
        }
    }
    Person.prototype.run = function() {
        console.log("run")
    }
    Person.intro = "this is a Person class"
    Person.show = function() {
        console.log('show')
    }
*/
//改写成class

class Person {
  name = "";
  age = 0;
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.say = function () {
      console.log(this.name, this.age);
    };
  }
  run() {
    console.log("run");
  }
  static intro() {
    return "this is a Person class";
  }
  static show() {
    console.log("show");
  }
}

console.log(Person.intro());
Person.show();

const tom = new Person("Tom", 18);

tom.say();
