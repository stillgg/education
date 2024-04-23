const solution = (arr) => {
  const merge = (left, right) => {
    const res = [];
    for (let i = 0; i < left.length; i++) {
        
    }

    for (let k = 0; k < right.length; k++) {}
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
  };

  rec(arr);
};

const arr = [2, 3, 1];

solution(arr);

console.log(arr);
