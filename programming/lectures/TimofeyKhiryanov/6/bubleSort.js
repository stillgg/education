// buble sort

const arr = [1, 5, 3, 2, 4, 5, 6, 8, 12, 3];
// const arr = [4, 5, 1];

const solution = (arr) => {
  let n = arr.length;

  while (n > 0) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }

    n -= 1;
  }
  return arr;
};

console.log(solution(arr));
