const exist = (board, word) => {
  const isValid = (x, y, index, visited) => {
    if (index === word.length) {
      return true;
    }

    if (
      x > board[0].length ||
      y > board.length ||
      !board[y] ||
      word[index] !== board[y][x] ||
      visited.has(x + ":" + y)
    ) {
      return false;
    }

    visited.add(x + ":" + y);

    const isOk =
      isValid(x + 1, y, index + 1, visited) ||
      isValid(x - 1, y, index + 1, visited) ||
      isValid(x, y + 1, index + 1, visited) ||
      isValid(x, y - 1, index + 1, visited);

    visited.delete(x + ":" + y);

    return isOk;
  };

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[0].length; x++) {
      if (isValid(x, y, 0, new Set())) {
        return true;
      }
    }
  }

  return false;
};

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "E", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCESEEEFS"
  )
);

// console.log(
//   exist(
//     [
//       ["A", "B", "C", "E"],
//       ["S", "F", "C", "S"],
//       ["A", "D", "E", "E"],
//     ],
//     "ASAD"
//   )
// );

// exist(
//   [
//     ["A", "B", "C", "E"],
//     ["S", "F", "C", "S"],
//     ["A", "D", "E", "E"],
//   ],
//   "SEECCBASFDA"
// );
