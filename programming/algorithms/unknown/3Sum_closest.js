const threeSumClosest = (nums, target) => {
  const sortedArr = nums.sort((a, b) => a - b);
  let best_sum = Infinity;

  for (let a = 0; a < sortedArr.length - 2; a++) {
    let b = a + 1;
    let c = sortedArr.length - 1;

    while (b < c) {
      const sum = sortedArr[a] + sortedArr[b] + sortedArr[c];

      if (sum === target) {
        return sum;
      }

      if (Math.abs(target - sum) < Math.abs(target - best_sum)) {
        best_sum = sum;
      }

      if (sum < target) {
        b++;
      } else {
        c--;
      }
    }
  }

  return best_sum;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1)); //2
console.log(threeSumClosest([1, 1, 1, 0], -100)); //2
console.log(threeSumClosest([1, 1, 1, 0], 100)); //3

console.log(threeSumClosest([4, 0, 5, -5, 3, 3, 0, -4, -5], -2)); // -2
