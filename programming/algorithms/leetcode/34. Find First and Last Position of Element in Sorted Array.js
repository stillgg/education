const searchRange = (nums, target) => {
  let startIndex = -1;
  let endIndex = -1;

  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    const num = nums[middleIndex];

    if (
      num === target &&
      nums[leftIndex] === num &&
      nums[rightIndex] === num &&
      nums[leftIndex - 1] !== num &&
      nums[rightIndex + 1] !== num
    ) {
      startIndex = leftIndex;
      endIndex = rightIndex;
      break;
    }

    if (num < target) {
      leftIndex = middleIndex + 1;
    }

    if (num > target) {
      rightIndex = middleIndex - 1;
    }

    if (num === target) {
      if (nums[leftIndex] !== target) {
        leftIndex++;
      }

      if (nums[rightIndex] !== target) {
        rightIndex--;
      }
    }
  }

  return [startIndex, endIndex];
};

// console.log(searchRange([1], 1));

console.log(searchRange([5, 7, 7, 8, 8, 8, 8, 8, 8, 10], 8));
