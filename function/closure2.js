//闭包模拟私有变量
//定义一个变量a，要求是能保证这个a只能被进行指定操作（如加1、乘2），而不能进行其他操作

function fn() {
  let a = 0;

  return {
    get: () => {
      return a;
    },
    set: (n) => {
      a = n;
    },
    add: () => {
      a++;
    },
  };
}

const obj = fn();
obj.set(10);
obj.add();
console.log(obj.get());
