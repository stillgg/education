const findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (right > left) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[left] && nums[mid] > nums[right]) {
      left = mid + 1;
      continue;
    }

    if (nums[right] > nums[left]) {
      right = mid - 1;
    }
  }
};

console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
