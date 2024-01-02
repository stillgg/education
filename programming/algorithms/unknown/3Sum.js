// function threeSum(nums) {
//   const results = [];

//   if (nums.length < 3) return results;

//   nums = nums.sort((a, b) => a - b);

//   let target = 0;

//   for (let i = 0; i < nums.length - 2; i++) {
//     if (nums[i] > target) break;

//     if (i > 0 && nums[i] === nums[i - 1]) continue;

//     let j = i + 1;

//     let k = nums.length - 1;

//     while (j < k) {
//       let sum = nums[i] + nums[j] + nums[k];

//       if (sum === target) {
//         results.push([nums[i], nums[j], nums[k]]);

//         while (nums[j] === nums[j + 1]) j++;
//         while (nums[k] === nums[k - 1]) k--;

//         j++;
//         k--;
//       } else if (sum < target) {
//         j++;
//       } else {
//         k--;
//       }
//     }
//   }

//   return results;
// }

const threeSum = function (nums) {
  const result = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let target = 0 - nums[i];
    let j = i + 1;
    let k = nums.length - 1;

    // console.log("target", target);

    while (j < k) {
      const expression = nums[j] + nums[k];
      //   console.log("j", j);
      //   console.log("k", k);
      //   console.log("expression", expression);

      if (target < expression) {
        k--;
      }

      if (target > expression) {
        j++;
      }

      if (target === expression) {
        const a = nums[i];
        const b = nums[j];
        const c = nums[k];

        result.push([a, b, c]);

        j++;
      }
    }
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 0, 0, 0]));
