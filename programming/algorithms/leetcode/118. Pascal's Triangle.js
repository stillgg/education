const generate = (numRows) => {
  let i = 1;
  let result = [[1]];

  while (i < numRows) {
    const last = result[result.length - 1];
    const arr = [];
    let left = 0;
    let right = 1;

    while (right < result.length) {
      arr.push(last[left] + last[right]);
      left++;
      right++;
    }

    result.push([1, ...arr, 1]);
    i++;
  }

  return result;
};

console.log(generate(100));
