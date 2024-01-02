const uniquePaths = function (m, n) {
  let count = 0;
  const helper = (x, y) => {
    if (y > m || x > n) return;
    count++;
    helper(x + 1, y);
    helper(x, y + 1);
  };

  helper(0, 0);

  return count;
};

uniquePaths(3, 7);
