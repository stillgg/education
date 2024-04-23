const solution = (n, degree) => {
  if (degree === 1) return n;
  if (degree % 2 !== 0) return solution(n, degree - 1) * n;
  return solution(n * n, degree / 2);
};

console.log(solution(2, 11));
