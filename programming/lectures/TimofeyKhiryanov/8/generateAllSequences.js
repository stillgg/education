const solution = (arr) => {
  const result = [];

  const rec = (prefix = [], j = 0) => {
    if (prefix.length === arr.length) {
      result.push(prefix);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      const copy = prefix.slice();
      copy.push(arr[i]);

      rec(copy, j + 1);
    }
  };

  rec();
  return result;
};

const arr = [1, 2, 3];

console.log(solution(arr));
