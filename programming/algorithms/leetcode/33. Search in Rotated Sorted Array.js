const search = (nums, target) => {
  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((rightIndex + leftIndex) / 2);
    let left = nums[leftIndex];
    let right = nums[rightIndex];
    let middle = nums[middleIndex];

    if (target === middle) {
      return middleIndex;
    }

    if (left <= middle) {
      if (target > middle || target < left) {
        leftIndex = middleIndex + 1;
      } else {
        rightIndex = middleIndex - 1;
      }
    } else {
      if (target < middle || target > right) {
        rightIndex = middleIndex - 1;
      } else {
        leftIndex = middleIndex + 1;
      }
    }
  }

  return -1;
};

// console.log(search([0, 1, 2, 3, 4, 5, 6, 7], 100));

// console.log(search([4, 5, 6, 7, 0, 1, 2], 5));

// console.log(search([8, 9, 2, 3, 4], 9));

// console.log(search([4, 5, 6, 7, 8, 1, 2, 3], 8));
