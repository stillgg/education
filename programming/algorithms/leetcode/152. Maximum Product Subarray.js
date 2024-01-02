const maxProduct = (nums) => {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2)
    return Math.max(
      nums[0],
      nums[nums.length - 1],
      nums[0] * nums[nums.length - 1]
    );

  let totalLeft = 1;
  let totalRight = 1;

  let max = -Infinity;

  for (let startIndex = 0; startIndex < nums.length; startIndex++) {
    const endIndex = nums.length - startIndex - 1;

    totalLeft *= nums[startIndex];
    totalRight *= nums[endIndex];

    max = Math.max(
      max,
      totalLeft,
      totalRight,
      nums[startIndex],
      nums[endIndex]
    );

    if (totalLeft === 0) totalLeft = 1;
    if (totalRight === 0) totalRight = 1;
  }

  return max;
};

// console.log(maxProduct([2, 3, -2, 4, 3, 5]));
// console.log(maxProduct([2, 3, -2, 4]));
// console.log(maxProduct([-2]));
// console.log(maxProduct([-3, -1, 4]));
// console.log(maxProduct([-2, 0, -1]));
// console.log(maxProduct([5, 2, -10, -5, -2, 2, 8]));
// console.log(maxProduct([-2, 0, -1]));
// console.log(maxProduct([2, -5, -2, -4, 3]));
// console.log(maxProduct([2, 3, -2, 4]));
// console.log(maxProduct([-2, 3, -4]));
console.log(maxProduct([-2, 0, -1]));
