const solution = (s1, s2) => {
  const n = s1.length;
  const m = s2.length;

  const arr = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      const substr1 = s1[i - 1];
      const substr2 = s2[j - 1];

      const diagonal = arr[i - 1][j - 1];
      const left = arr[i][j - 1];
      const top = arr[i - 1][j];

      if (substr1 === substr2) {
        arr[i][j] = diagonal + 1;
      } else {
        arr[i][j] = Math.max(left, top);
      }
    }
  }

  console.log(arr);

  return arr[n][m];
};

console.log(solution("afdfh", "jafh"));
// console.log(
//   solution("vjosdiajf", "asfddsabjkldsafdsachdsf=bajsiodfdsabjabcvcas")
// );
// console.log(solution("afdsahg", "afdsafdsabac"));
// console.log(solution("afd", "afdsafdsabac"));
