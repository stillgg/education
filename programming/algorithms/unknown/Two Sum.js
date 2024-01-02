//1 solution

// const twoSum = function (nums, target) {
//   const obj = {};

//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     const diff = target - num;

//     if (obj[num] === undefined) {
//       obj[num] = i;
//     }

//     if (obj[diff] !== undefined && obj[diff] !== i) {
//       return [obj[diff], i];
//     }
//   }

//   return null;
// };

//2 solution
// const twoSum = (nums, target) => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j <= nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return null;
// };

console.log(twoSum([2, 7, 11, 15], 9));
