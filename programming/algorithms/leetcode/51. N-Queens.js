const solveNQueens = (n) => {
  const arr = createBoard(n);

  const result = [];

  // const result = [];
  // for (let a = 0; a < n; a++) {
  //   const copy = arr.slice();
  //   copy[0] = [".", ".", ".", "."].map((i, index) => (index === a ? "Q" : "."));

  //   for (let b = 0; b < n; b++) {
  //     const copy2 = copy.slice();
  //     copy2[1] = [".", ".", ".", "."].map((i, index) =>
  //       index === b ? "Q" : "."
  //     );

  //     if (!isValid(b, 1, copy2)) continue;

  //     for (let c = 0; c < n; c++) {
  //       const copy3 = copy2.slice();
  //       copy3[2] = [".", ".", ".", "."].map((i, index) =>
  //         index === c ? "Q" : "."
  //       );

  //       if (!isValid(c, 2, copy3)) continue;

  //       for (let d = 0; d < n; d++) {
  //         const copy4 = copy3.slice();
  //         copy4[3] = [".", ".", ".", "."].map((i, index) =>
  //           index === d ? "Q" : "."
  //         );

  //         if (isValid(d, 3, copy4)) {
  //           return copy4;
  //         }
  //       }
  //     }
  //   }
  // }

  function helper(startIndex, tmp) {
    if (startIndex > n || result.length === 1) {
      return;
    }

    for (let i = 0; i < n; i++) {
      const copy = tmp.slice();

      copy[startIndex] = new Array(n)
        .fill(".")
        .map((item, index) => (index === i ? "Q" : "."));

      if (!isValid(i, startIndex, copy)) {
        continue;
      }

      if (startIndex === n - 1) {
        result.push(copy.map((arr) => arr.join("")));
        return;
      }

      helper(startIndex + 1, copy);
    }
  }

  helper(0, arr);

  return result;
};

function createBoard(n) {
  const board = [];

  for (let i = 0; i < n; i++) {
    board.push(new Array(n).fill(".").join());
  }

  return board;
}

function isValid(posX, posY, board) {
  const checkDiagonals = () => {
    const checkTopLeftDiagonal = () => {
      let posX1 = posX - 1;
      let posY1 = posY - 1;

      let start = board[posY1] ? board[posY1][posX1] : null;

      while (start) {
        if (start === "Q") return false;

        posX1 -= 1;
        posY1 -= 1;
        start = board[posY1] ? board[posY1][posX1] : null;
      }

      return true;
    };

    const checkTopRightDiagonal = () => {
      let posX1 = posX + 1;
      let posY1 = posY - 1;

      let start = board[posY1] ? board[posY1][posX1] : null;

      while (start) {
        if (start === "Q") return false;

        posX1 += 1;
        posY1 -= 1;
        start = board[posY1] ? board[posY1][posX1] : null;
      }

      return true;
    };

    const checkBottomLeftDiagonal = () => {
      let posX1 = posX - 1;
      let posY1 = posY + 1;

      let start = board[posY1] ? board[posY1][posX1] : null;

      while (start) {
        if (start === "Q") return false;

        posX1 -= 1;
        posY1 += 1;
        start = board[posY1] ? board[posY1][posX1] : null;
      }

      return true;
    };

    const checkBottomRightDiagonal = () => {
      let posX1 = posX + 1;
      let posY1 = posY + 1;

      let start = board[posY1] ? board[posY1][posX1] : null;

      while (start) {
        if (start === "Q") return false;

        posX1 += 1;
        posY1 += 1;
        start = board[posY1] ? board[posY1][posX1] : null;
      }

      return true;
    };

    return (
      checkTopLeftDiagonal() &&
      checkTopRightDiagonal() &&
      checkBottomLeftDiagonal() &&
      checkBottomRightDiagonal()
    );
  };

  const checkX = () => {
    let posX1 = 0;
    let start = board[posY] ? board[posY][posX1] : null;

    while (start) {
      if (posX1 === posX) {
        posX1 += 1;
        start = board[posY][posX1];
        continue;
      }

      if (start === "Q") return false;

      posX1 += 1;
      start = board[posY] ? board[posY][posX1] : null;
    }

    return true;
  };

  const checkY = () => {
    let posY1 = 0;
    let start = board[posY1] ? board[posY1][posX] : null;

    while (start) {
      if (posY1 === posY) {
        posY1 += 1;
        start = board[posY1] ? board[posY1][posX] : null;
        continue;
      }

      if (start === "Q") return false;

      posY1 += 1;
      start = board[posY1] ? board[posY1][posX] : null;
    }

    return true;
  };

  return checkDiagonals() && checkX() && checkY();
}

// console.log(isValid(2, 1, ["....", "..Q.", "....", "...."]));

console.log(solveNQueens(4));
