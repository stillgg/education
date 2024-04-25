// n(fib(n)) too slow
const solution = (n) => {
  if (n <= 1) {
    return 1;
  }

  return solution(n - 1) + solution(n - 2);
};

console.log(solution(5));
