"use strict";

const user = {
  name: "John",
  age: 13,
  country: "United States",
  getInfo: function () {
    console.log(this.name, this.age, this.country);
  },
};

user.getInfo();
