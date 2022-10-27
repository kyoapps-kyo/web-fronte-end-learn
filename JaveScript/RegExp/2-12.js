// 验证字符串是否符合手机号码的规则：11位数字，并且肯定以1开头
// 以字母开头，中间是任意位数字（最少一位）构成，并以字母结尾
// 网址规则：以www.开头，中间是最少一位的字符（字母数字下划线），最后以.com结尾，也可以是.com.cn结尾
const test = [
  "11111111111",
  "2sd22222313",
  "1233213123412",
  "fjoweiajfowijg",
  "a123123f",
  "a",
  "www.baidu.com",
  "www.baidu.com.cn",
  "www.baidu.cn",
];

const regexp = [/^1\d{10}$/, /^[A-Za-z]\d+[A-Za-z]$/, /^www\.\w+\.com(\.cn)?$/];

let i = (j = 0);

for (i; i < test.length; i++) {
  console.log(
    test[i].padEnd(18, " ") +
      " => " +
      String(regexp[j]).padEnd(30, " ") +
      " => " +
      regexp[j].test(test[i])
  );
  if (i == 2 || i == 5) j++;
}
