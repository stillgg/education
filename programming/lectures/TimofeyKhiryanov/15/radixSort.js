const solution = (arr) => {
  const max = Math.max(...arr);

  for (let exp = 1; exp <= max; exp *= 10) {
    const count = new Array(10).fill(0);
    const output = new Array(arr.length);

    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      count[Math.floor(num / exp) % 10]++;
    }

    for (let i = 1; i < count.length; i++) {
      count[i] += count[i - 1];
    }

    for (let i = arr.length - 1; i >= 0; i--) {
      const index = Math.floor(arr[i] / exp) % 10;
      output[count[index] - 1] = arr[i];
      count[index]--;
    }
    arr = output;
  }

  return arr;
};

const arr1 = [170, 10000000, 45, 75, 1000, 90, 802, 24, 2, 66];

console.log(solution(arr1));
// 170 90 802 2 24 45 75 66
