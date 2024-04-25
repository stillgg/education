const solution = (arr) => {
  const merge = (left, right) => {
    const res = [];
    let l = 0;
    let r = 0;

    while (l < left.length || r < right.length) {
      const leftNum = left[l] === undefined ? Infinity : left[l];
      const rightNum = right[r] === undefined ? Infinity : right[r];

      if (leftNum > rightNum) {
        res.push(rightNum);
        r++;
      } else {
        res.push(leftNum);
        l++;
      }
    }

    return res;
  };

  const rec = (arr) => {
    if (arr.length === 1) {
      return arr;
    }

    if (arr.length === 2) {
      if (arr[0] > arr[1]) {
        return [arr[1], arr[0]];
      }
      return [arr[0], arr[1]];
    }

    const middle = Math.trunc(arr.length / 2);

    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    const l = rec(left);
    const r = rec(right);

    return merge(l, r);
  };

  return rec(arr);
};

const arr = [0, 1, -100, 1, 5, 4, 19230, 598, -89];

console.log(solution(arr));
