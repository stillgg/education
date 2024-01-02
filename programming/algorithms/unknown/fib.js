//bottom up
const fib = (n) => {
  if (n === 1 || n === 2) {
    return 1;
  }
  const bottomUp = [];
  bottomUp[0] = 1;
  bottomUp[1] = 1;

  for (let i = 2; i <= n; i++) {
    bottomUp[i] = bottomUp[i - 1] + bottomUp[i - 2];
  }

  return bottomUp[n - 1];
};

console.log(fib(6));
