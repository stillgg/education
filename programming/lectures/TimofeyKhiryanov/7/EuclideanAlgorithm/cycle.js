const solution = (n1, n2) => {
  if (n2 > n1) [n1, n2] = [n2, n1];

  while (n2 !== 0) {
    const remainder = Math.trunc(n1 / n2);
    const tmp = n2;
    n2 = n1 - n2 * remainder;
    n1 = tmp;
  }

  return n1;
};

console.log(solution(625, 25));
