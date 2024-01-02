//solution 1 brute force
// const getOrderArrays = (nums1, nums2) => {
//   const firstArr = nums1.length >= nums2.length ? nums1 : nums2;
//   const secondArr = nums1.length >= nums2.length ? nums2 : nums1;

//   return [firstArr, secondArr];
// };

// const merge = (nums1, nums2) => {
//   const [firstArr, secondArr] = getOrderArrays(nums1, nums2);
//   const result = [];

//   let i = 0;
//   let j = 0;

//   while (i < firstArr.length || j < secondArr.length) {
//     if (firstArr[i] === undefined && secondArr[j] !== undefined) {
//       result.push(secondArr[j]);
//       j++;
//     }
//     if (secondArr[j] !== undefined) {
//       if (firstArr[i] > secondArr[j]) {
//         result.push(secondArr[j]);
//         j++;
//         continue;
//       }
//       if (firstArr[i] < secondArr[j]) {
//         result.push(firstArr[i]);
//         i++;
//         continue;
//       }
//       if (firstArr[i] === secondArr[j]) {
//         result.push(firstArr[i]);
//         result.push(secondArr[j]);
//         i++;
//         j++;
//         continue;
//       }
//     } else {
//       if (firstArr[i] !== undefined) {
//         result.push(firstArr[i]);
//       }
//       i++;
//     }
//   }

//   return result;
// };

// const findMedianSortedArrays = (nums1, nums2) => {
//   const [firstArr, secondArr] = getOrderArrays(nums1, nums2);

//   const length = firstArr.length + secondArr.length;
//   const median = (firstArr.length + secondArr.length) / 2;

//   const result = merge(nums1, nums2);

//   if (length % 2 === 0) {
//     return (result[median] + result[median - 1]) / 2;
//   }

//   return result[Math.floor(median)];
// };

//solution 2 binary search
const findMedianSortedArrays = (nums1, nums2) => {
    
};

// console.log(findMedianSortedArrays([1, 3], [2]));
// console.log(findMedianSortedArrays([1, 3, 3, 5], [2, 2]));
// console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([0, 15, 128, 131], [5, 16, 20, 30]));
