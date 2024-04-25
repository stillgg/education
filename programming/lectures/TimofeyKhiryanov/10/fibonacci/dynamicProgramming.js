const solution = (n) => {
  const arr = new Array(n + 2).fill(0);
  arr[1] = 1;

  for (let i = 2; i < arr.length; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr[arr.length - 1];
};

console.log(solution(19));
