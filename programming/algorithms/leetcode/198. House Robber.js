const rob = (nums) => {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const max = Math.max(
      nums[i],
      result[i - 1] || 0,
      nums[i] + (result[i - 2] || 0),
      nums[i] + (result[i - 3] || 0)
    );

    result.push(max);
  }

  return result[result.length - 1];
};

console.log(rob([2, 2, 2, 4, 2, 2, 4]));
console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
