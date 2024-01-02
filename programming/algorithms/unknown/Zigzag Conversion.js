const convert = (s, numRows) => {
  if (numRows === 1) {
    return s;
  }

  let res = "";

  for (let row = 0; row < numRows; row++) {
    const increment = (numRows - 1) * 2;
    for (
      let i = 0;
      s[i + row] !== undefined || s[i + row - 2 * row] !== undefined;
      i += increment
    ) {
      if (row > 0 && row < numRows - 1 && s[i + row - 2 * row] !== undefined) {
        res += s[i + row - 2 * row];
      }

      if (s[i + row] !== undefined) {
        res += s[i + row];
      }
    }
  }

  return res;
};

// console.log(convert("ABCD", 3));

console.log(convert("PAYPALISHIRING", 4));
