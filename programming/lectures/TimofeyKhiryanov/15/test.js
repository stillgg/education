// Radix sort JavaScript implementation

"use strict";

// A utility function to get maximum value in arr[]
function getMax(arr) {
  const length = arr.length;
  let mx = arr[0];
  for (let i = 1; i < length; i++) {
    if (arr[i] > mx) mx = arr[i];
  }
  return mx;
}

// A function to do counting sort of arr[] according to
// the digit represented by exp.
function countSort(arr, exp) {
  const length = arr.length;
  let output = Array(length); // output array
  let count = Array(10).fill(0, 0);

  // Store count of occurrences in count[]
  for (let i = 0; i < length; i++) {
    const digit = Math.floor(arr[i] / exp) % 10;
    count[digit]++;
  }

  // Change count[i] so that count[i] now contains
  // actual position of this digit in output[]
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  // Build the output array
  for (let i = length - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / exp) % 10;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }

  return output;
}

// The main function to that sorts arr[] using Radix Sort
function radixSort(arr) {
  // Find the maximum number to know number of digits
  const maxNumber = getMax(arr);
  // Create a shallow copy where the sorted values will be kept
  let sortedArr = [...arr];

  // Do counting sort for every digit. Note that
  // instead of passing digit number, exp is passed.
  // exp is 10^i where i is current digit number
  for (let exp = 1; Math.floor(maxNumber / exp) > 0; exp *= 10) {
    // Get the Count sort iteration
    const sortedIteration = countSort(sortedArr, exp);
    sortedArr = sortedIteration;
  }

  return sortedArr;
}

/*Driver Code*/
const arr = [170, 45, 75, 90, 802, 24, 2, 66];

// Function Call
const sortedArr = radixSort(arr);

console.log(sortedArr.join(" "));
