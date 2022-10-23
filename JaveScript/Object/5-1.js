//prototype
function fn(a, b) {
  console.log(a + b);
  return a + b;
}

console.log(fn.prototype);
console.log(typeof fn.prototype);
console.log(fn.prototype.constructor);
console.log(fn.prototype.constructor === fn);

function People(name) {
  this.name = name;
}

const xixi = new People("xixi");

console.log(xixi.__proto__ === People.prototype);

People.prototype.nationality = "China";

console.log(xixi.nationality);

console.log(xixi.__proto__);

const tom = new People("tom");

tom.nationality = "USA";

console.log(tom);

console.log(xixi.hasOwnProperty("nationality"));
console.log(tom.hasOwnProperty("nationality"));
