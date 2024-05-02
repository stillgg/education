const solution = (s1, s2) => {
  const len1 = s1.length;
  const len2 = s2.length;

  const matrix = new Array(len2 + 1).fill(0).map((item1, index1) =>
    new Array(len1 + 1).fill(0).map((item2, index2) => {
      if (index1 === 0) return index2;
      if (index2 === 0) return index1;
      return 0;
    })
  );

  for (let i = 1; i < len2 + 1; i++) {
    for (let j = 1; j < len1 + 1; j++) {
      const left = matrix[i][j - 1];
      const top = matrix[i - 1][j];
      const diagonal = matrix[i - 1][j - 1];

      const substr1 = s1[j - 1];
      const substr2 = s2[i - 1];

      if (substr1 === substr2) {
        matrix[i][j] = diagonal;
      } else {
        matrix[i][j] = Math.min(left, diagonal, top) + 1;
      }
    }
  }

  console.log(matrix);

  return matrix[len2][len1];
};

console.log(solution("колокол", "молоко"));
// console.log(solution("kitten", "sitting"));
// console.log(solution("Saturday", "Sunday"));
// console.log(solution("Sunday", "Saturday"));
