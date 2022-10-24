var reorderSpaces = function (text) {
  const wordArr = text.split(" ").filter((e) => e !== ""); // 所有的单词数组
  const spaceCount = text.length - wordArr.join("").length; // 所有的空格数
  const strLength = text.length;
  const wordLength = text.replaceAll(" ", " ");

  // 如果单词长度=1，直接将空格拼接到单词末尾
  if (wordArr.length === 1)
    return spaceCount > 0 ? wordArr[0] + " ".repeat(spaceCount) : text;

  // 单词之间的空格数
  const spaceBetween = (spaceCount / (wordArr.length - 1)) | 0;

  // 字符串末尾应该添加的空格数，
  // 注意不能用const tailSpace = spaceCount % spaceBetween，
  // 因为spaceBetween=1时，得到的结果永远为0
  const tailSpace = spaceCount - spaceBetween * (wordArr.length - 1);

  // 拼接我们需要返回的字符串主体
  let ans = wordArr.join(" ".repeat(spaceBetween));

  // 判断字符串末尾是否需要添加空格
  return tailSpace > 0 ? (ans += " ".repeat(tailSpace)) : ans;
};
