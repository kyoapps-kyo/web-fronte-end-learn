const obj = {
  0: "xm",
  sex: "male",
  length: 2,
};

obj[Symbol.iterator] = () => {
  let index = 0;
  return {
    next() {
      let value, done;
      if (index < 3) {
        if (index === 0) {
          value = obj[index];
          done = false;
        } else if (index === 1) {
          value = "male";
          done = false;
        } else if (index === 2) {
          value = "2";
          done = false;
        }
      } else {
        value = undefined;
        done = true;
      }
      index++;
      return {
        value,
        done,
      };
    },
  };
};

for (const item of obj) {
  console.log(item);
}
