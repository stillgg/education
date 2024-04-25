const solution = (arr, n) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const middle = Math.floor((right + left) / 2);

    const value = arr[middle];

    if (value === n) {
      return middle;
    } else if (value > n) {
      right = middle - 1;
    } else if (value < n) {
      left = middle + 1;
    }
  }

  return n === arr[left] ? left : undefined;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 8];

console.log(solution(arr, 8));
