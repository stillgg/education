// count
const arr = [1, 5, 3, 2, 4, 5, 6, 8, 12, 3];
// const arr = [4, 5, 1, 4];
// const arr = [2, 5, 3, 0, 2, 3, 0, 3];

const solution = (arr) => {
  const max = Math.max(...arr);
  const count = new Array(max + 1).fill(0);
  const output = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] += 1;
  }

  for (let i = 0; i < count.length; i++) {
    const prev = count[i - 1] || 0;
    count[i] = count[i] + prev;
  }

  for (let i = 0; i < arr.length; i++) {
    output[count[arr[i]] - 1] = arr[i];
    count[arr[i]] -= 1;
  }

  return output;
};

console.log(solution(arr));
