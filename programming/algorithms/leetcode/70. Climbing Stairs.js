const climbStairs = (n) => {
  const memo = {};

  const dfs = (n) => {
    if (n === 1) return 1;
    if (n === 2) return 2;

    if (memo[n] !== undefined) return memo[n];

    const res = dfs(n - 1) + dfs(n - 2);
    memo[n] = res;
    return res;
  };

  return dfs(n);
};

console.log(climbStairs(45));
