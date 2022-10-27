//[xyz] 创建某一位的字符集合，

const regexp = /^[by]\d{7}$/;

const testStr1 = "jweotu23";
const testStr2 = "b1231231";
const testStr3 = "b12312311";
const testStr4 = "y1231231";

console.log(regexp.test(testStr1));
console.log(regexp.test(testStr2));
console.log(regexp.test(testStr3));
console.log(regexp.test(testStr4));

//验证某字符串是否是5位字母，大小写均可
console.log("1" + /^[A-Za-z]{5}$/.test("asdfe"));
console.log("1" + /^[A-Za-z]{5}$/.test("12345"));
// 验证某字符串是否是5位字母， 且仅有小写字母、点构成
console.log("2" + /^[a-z.]{5}$/.test("a.df."));
console.log("2" + /^[a-z.]{5}$/.test("aAdf."));
// 验证某字符串是否是4位小写字母，且最后一位不能是m字母
// 这里不能写[^m]这样没有约束是小写字母
// 也不能写为[a-z^m]这样等于白写，[]中的字母关系是或
console.log("3" + /^[a-z]{3}[a-ln-z]$/.test("qwem"));
console.log("3" + /^[a-z]{3}[a-ln-z]$/.test("qwed"));
console.log("3" + /^[a-z]{3}[a-ln-z]$/.test("q123f"));
