const searchMatrix = (matrix, target) => {
  const findRowIndex = () => {
    let start = 0;
    let end = matrix.length - 1;

    while (start <= end) {
      const rowIndex = Math.floor((start + end) / 2);
      const arr = matrix[rowIndex];

      if (arr[0] <= target && arr[arr.length - 1] >= target) {
        return rowIndex;
      } else if (arr[arr.length - 1] > target) {
        end = rowIndex - 1;
      } else {
        start = rowIndex + 1;
      }
    }

    return -1;
  };

  const findColIndex = (rowIndex) => {
    if (rowIndex === -1) return -1;

    const arr = matrix[rowIndex];

    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
      const colIndex = Math.floor((start + end) / 2);

      if (arr[colIndex] === target) return colIndex;
      else if (arr[colIndex] > target) {
        end = colIndex - 1;
      } else {
        start = colIndex + 1;
      }
    }

    return -1;
  };

  const rowIndex = findRowIndex();

  return findColIndex(rowIndex) !== -1;
};

console.log(searchMatrix([[1]], 2));

// console.log(
//   searchMatrix(
//     [
//       [1, 3, 5, 7],
//       [10, 11, 16, 20],
//       [23, 30, 34, 60],
//     ],
//     2
//   )
// );
