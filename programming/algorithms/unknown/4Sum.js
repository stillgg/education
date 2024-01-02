//solution 1 O(n**3 * logn)

// const fourSum = (nums, target) => {
//   const sortedArr = nums.sort((a, b) => a - b);

//   const result = [];

//   for (let a = 0; a < nums.length - 3; a++) {
//     for (let b = a + 1; b < nums.length - 2; b++) {
//       c = b + 1;
//       d = nums.length - 1;
//       while (c < d) {
//         const total = sortedArr[a] + sortedArr[b] + sortedArr[c] + sortedArr[d];

//         if (total > target) {
//           d--;
//         } else if (total < target) {
//           c++;
//         } else {
//           result.push([sortedArr[a], sortedArr[b], sortedArr[c], sortedArr[d]]);
//           while (sortedArr[c] === sortedArr[c + 1]) c++;
//           while (sortedArr[d] === sortedArr[d + 1]) d--;
//           c++;
//           d--;
//         }
//       }
//       while (sortedArr[b] === sortedArr[b + 1]) b++;
//     }
//     while (sortedArr[a] === sortedArr[a + 1]) a++;
//   }

//   return result;
// };

//solution 2 brute force O(n**4)

//test

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));

console.log(fourSum([2, 2, 2, 2, 2], 8));

console.log(fourSum([0, 0, 0, 0], 0));
