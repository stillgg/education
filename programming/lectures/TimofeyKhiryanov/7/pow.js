const solution = (n, degree) => {
  if (degree === 0) return 1;
  return solution(n, degree - 1) * n;
};

console.log(solution(5, 5));
