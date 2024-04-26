const solution = (n, m) => {
  const arr = new Array(n).fill(0).map(() => new Array(m).fill(0));

  arr[0][0] = 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 && j === 0) continue;

      const top = arr[i - 1 < 0 ? 0 : i - 1][j] || Infinity;
      const left = arr[i][j - 1 < 0 ? 0 : j - 1] || Infinity;

      arr[i][j] = Math.min(top, left) + 1;
    }
  }

  console.log(arr);

  return arr[n - 1][m - 1] - 1;
};

console.log(solution(5, 5));
