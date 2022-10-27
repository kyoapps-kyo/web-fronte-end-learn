//exec()逐条遍历
let str = "abc123def456ghi789";

const re = /\d+/g;

let result;
//赋值表达式，会返回结果，结果是左边表达式的值
while ((result = re.exec(str))) {
  console.log(result);
}

//匹配其中的lar exp
const testStr = "regular expression = regexp";

const re1 = /lar exp/;

const re2 = new RegExp("lar exp");

//这里不写g的原因，有全局查找的时候，正则表达式拥有状态，每次使用test或者exec都会将lastIndex往后移一位
//如果一定要使用全局查找，那么每次调用test后，要将re.lastIndex归零
//这样之后在使用exec才不会有问题
console.log(
  re1.test(testStr) +
    "/" +
    re2.test(testStr) +
    "/" +
    re1.exec(testStr)[0] +
    "/" +
    re2.exec(testStr)[0] +
    "/"
);

// 匹配 "普通字符"

const testStr2 = '一个"普通字符"在匹配字符串的时候，匹配与它相同的一个字符';

const re3 = /\"普通字符\"/;

console.log(re3.test(testStr2) + "/" + re3.exec(testStr2));

//匹配'JavaScript_RegExp_5@gmail.com'中的‘_RegExp_5@gm’

const testStr3 = "JavaScript_RegExp_5@gmail.com";

const re4 = /_regexp_5@gm/i;

console.log(re4.test(testStr3) + "/" + re4.exec(testStr3));
