"use strict";

const user = {
  name: "John",
  age: 13,
  country: "United States",
  getInfo: function () {
    console.log(this.name, this.age, this.country);
  },
};

const keyArray = [];
const valueArray = [];
for (var key in user) {
  keyArray.push(key);
  valueArray.push(user[key]);
}

console.log(keyArray);
console.log(valueArray);
