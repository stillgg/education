//Sieve of Eratosthenes

const solution = (n) => {
  const arr = new Array(n - 1).fill(1).map((i, index) => index + 2);

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num === null) continue;

    for (let j = i + num; j < arr.length; j += num) {
      arr[j] = null;
    }
  }

  return arr.filter(Number);
};

console.log(solution(100));

//2  3 5  7  11    13  17    19    23     29
