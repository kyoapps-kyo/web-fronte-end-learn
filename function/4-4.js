//小慕入职新公司，月薪一万元。工资每年涨幅5%。补充代码，计算出小慕工作20年后，月薪为多少？

function salary(year) {
  if (year == 1) return 10000;
  return salary(year - 1) * 1.05;
}

console.log(salary(20));
