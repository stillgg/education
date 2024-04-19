// insertionSort
const arr = [1, 5, 3, 2, 4, 5, 6, 8, 12, 3];
// const arr = [4, 5, 1];

const solution = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; arr[j] < arr[j - 1]; j--) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
  }

  return arr;
};

console.log(solution(arr));
