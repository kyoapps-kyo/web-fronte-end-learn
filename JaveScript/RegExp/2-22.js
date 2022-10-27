//只打印所有数字
const test1 = "110报警120急救119火警114查询";

let result = test1.match(/\d{3}/g);

console.log(result.toString());

//通过replace()方法把字符串"2020.02.02"中所有的点替换成横杆（-）。
result = null;

const test2 = "2020.02.02";

result = test2.replace(/\./g, "-");

console.log(result);
