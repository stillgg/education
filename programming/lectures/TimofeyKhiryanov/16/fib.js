// recursion with memoization

const fib = (n, arr = new Array(n + 1).fill(null)) => {
  if (arr[n] === null) {
    if (n <= 2) {
      arr[n] = 1;
      return arr[n];
    }

    arr[n] = fib(n - 1, arr) + fib(n - 2, arr);
  }

  return arr[n];
};

console.log(fib(40));
