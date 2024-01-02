//brute force

// const lengthOfLIS = (nums) => {
//   let maxLength = 0;

//   const set = new Set();

//   function helper(index, arr) {
//     maxLength = Math.max(maxLength, arr.length);

//     if (index === nums.length) return;

//     for (let i = index; i < nums.length; i++) {
//       const num = nums[i];

//       if (set.has(num)) continue;

//       if (num === nums[index - 1] || num <= arr[arr.length - 1]) {
//         helper(index + 1, arr);
//         set.add(num);
//       } else {
//         helper(i + 1, [...arr, nums[i]]);
//       }
//     }
//   }

//   helper(0, []);

//   return maxLength;
// };

// dp

const lengthOfLIS = (nums) => {
  const arr = new Array(nums.length).fill(1);
  let max = 1;

  for (let j = 1; j < nums.length; j++) {
    for (let i = 0; i < j; i++) {
      if (nums[i] < nums[j]) {
        arr[j] = Math.max(arr[i] + 1, arr[j]);
        max = Math.max(arr[j], max);
      }
    }
  }

  return max;
};

// console.log(lengthOfLIS([4, 10, 4, 3, 8, 9]));
// console.log(lengthOfLIS([3, 4, -1, 0, 6, 2, 3]));
// console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));
// console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
// console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]));

console.log(lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]));
