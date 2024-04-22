const solution = (n1, n2) => {
  if (n2 > n1) [n1, n2] = [n2, n1];

  const rec = (n1, n2) => {
    if (n2 === 0) return n1;

    const remainder = Math.trunc(n1 / n2);

    total = n1 - remainder * n2;
    return rec(n2, total);
  };

  return rec(n1, n2);
};

console.log(solution(1071, 462));
