function People(name, age) {
  this.name = name;
  this.age = age;
}

const tom = new People("Tom", 20);

console.log(tom.__proto__.__proto__ === Object.prototype);

console.log(Object.prototype.__proto__);

let char = tom.toString();
console.log(char);

const arr = [1, 2, 3, 4];

console.log(arr.__proto__ === Array.prototype);
console.log(Array.prototype.__proto__ === Object.prototype);
console.log(Array.prototype.hasOwnProperty("push"));
console.log(Array.prototype.hasOwnProperty("slice"));
console.log(Array.prototype.hasOwnProperty("split"));
console.log(Array.prototype.hasOwnProperty("join"));
