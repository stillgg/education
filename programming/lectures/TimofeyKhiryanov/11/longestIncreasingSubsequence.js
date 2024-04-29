const solution = (arr) => {
  const sortedArr = arr.slice().sort((a, b) => a - b);
  const len = arr.length;
  const matrix = new Array(len + 1)
    .fill(0)
    .map(() => new Array(len + 1).fill(0));

  for (let i = 1; i < len + 1; i++) {
    for (let j = 1; j < len + 1; j++) {
      const left = matrix[i][j - 1];
      const top = matrix[i - 1][j];
      const diagonal = matrix[i - 1][j - 1];

      if (arr[j - 1] === sortedArr[i - 1]) {
        matrix[i][j] = Math.max(left, top, diagonal + 1);
      } else {
        matrix[i][j] = Math.max(left, top);
      }
    }
  }

  console.log(matrix);

  return matrix[len][len];
};

const arr = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]; //6
// const arr = [8, 7, 3, 1, 6, 2, 4, 9, 5];
// const arr = [1, 5, 2, 8];

console.log(solution(arr));
