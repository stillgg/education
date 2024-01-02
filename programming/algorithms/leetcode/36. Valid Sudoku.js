const maxWidth = 9;
const maxHeight = 9;

const checkXY = (board) => {
  for (let row = 0; row < maxHeight; row++) {
    const horizontalArr = board[row];

    for (let col = 0; col < maxWidth; col++) {
      const val = horizontalArr[col];

      if (val === ".") {
        continue;
      }

      let startIndex = 0;

      while (startIndex < maxWidth) {
        if (startIndex === col) {
          startIndex++;
          continue;
        }

        if (val === horizontalArr[startIndex]) {
          return false;
        }

        startIndex++;
      }

      startIndex = 0;

      while (startIndex < maxHeight) {
        if (startIndex === row) {
          startIndex++;
          continue;
        }

        if (val === board[startIndex][col]) {
          return false;
        }

        startIndex++;
      }
    }
  }

  return true;
};

const checkSubBlocks = (board) => {
  const step = 3;

  let initX = 0;
  let initY = 0;

  while (initY < maxHeight) {
    while (initX < maxWidth) {
      let set = new Set();

      for (let x = initX; x < initX + step; x++) {
        for (let y = initY; y < initY + step; y++) {
          const val = board[y][x];

          if (val === ".") {
            continue;
          }

          if (set.has(val)) {
            return false;
          }

          set.add(val);
        }
      }

      initX += step;
      console.log(set);
    }

    initY += step;
    initX = 0;
  }

  return true;
};

const isValidSudoku = (board) => {
  return checkXY(board) && checkSubBlocks(board);
};

// console.log(
//   isValidSudoku([
//     ["8", "3", ".", ".", "7", ".", ".", ".", "."],
//     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"],
//   ])
// );

// [
//   [".", ".", ".", ".", "5", ".", ".", "1", "."],
//   [".", "4", ".", "3", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", ".", "3", ".", ".", "1"],
//   ["8", ".", ".", ".", ".", ".", ".", "2", "."],
//   [".", ".", "2", ".", "7", ".", ".", ".", "."],
//   [".", "1", "5", ".", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", ".", "2", ".", ".", "."],
//   [".", "2", ".", "9", ".", ".", ".", ".", "."],
//   [".", ".", "4", ".", ".", ".", ".", ".", "."],
// ];

// [
//   ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", "6", ".", ".", ".", ".", "2", "8", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ];
