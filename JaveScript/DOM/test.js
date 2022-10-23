var merge = function (intervals) {
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  const result = [intervals[0]];
  for (let i = 0; i < intervals.length; i++) {
    if (result[result.length - 1][1] >= intervals[i][0]) {
      let newArr = result[result.length - 1].concat(intervals[i]);
      newArr.sort((a, b) => {
        return a - b;
      });
      result[result.length - 1] = [newArr[0], newArr[3]];
    } else result.push(intervals[i]);
  }
  return result;
};

var intervals = [
  [1, 4],
  [2, 3],
  [0, 5],
  [6, 15],
  [18, 20],
  [4, 6],
];
merge(intervals);
console.log(merge(intervals));
