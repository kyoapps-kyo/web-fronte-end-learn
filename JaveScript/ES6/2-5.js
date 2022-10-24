//显示日期格式
//假如要显示的是2022-10-10 这样格式的日期
//这时我们获得的是2022-10-1 这样的日期数据，这时候我们要对其进行补全，2022-10-01

const dateCompletion = (date) => {
  date = date.split("-");
  date[1] = date[1].padStart(2, "0");
  date[2] = date[2].padStart(2, "0");
  return date.join("-");
};

console.log(dateCompletion("2022-1-1"));

//已知：有一个map对象，在浏览器控制台打印对象中的内容时，为了方便看到效果，希望内容对齐显示
//apple ---------- Count: 010
//strawberry ----- Count: 005

const m = new Map([
  ["apple", "10"],
  ["strawberry", "5"],
  ["Banana", "0"],
]);

m.forEach((value, key) => {
  console.log(
    `${(key + "  ").padEnd(20, "- ")}  Count: ${value.padStart(3, "0")}`
  );
});
