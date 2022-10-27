//元字符的使用
const reg1 = /^\d{3}-\d{4}-\d{3}$/;
const reg2 = /^\w{3}-\w{4}-\w{3}$/;
const reg3 = /^\d{3}\.\d\d\^\d\d\#\d\d$/;

let str = "123-4567-890";
let str2 = "xxx-13_3-a23";
let str3 = "123.42^23#62";
let str4 = "123342^23#62";

console.log(reg1.test(str));
console.log(reg1.test(str2));
console.log(reg2.test(str));
console.log(reg2.test(str2));
console.log(reg3.test(str3));
console.log(reg3.test(str4));
