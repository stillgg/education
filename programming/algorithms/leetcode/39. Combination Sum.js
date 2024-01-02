const combinationSum = (candidates, target) => {
  const result = [];

  helper(candidates, [], 0, 0, target);

  function helper(arr, answer, startIndex, total, target) {
    if (total === target) {
      result.push(answer);
      return;
    }

    if (total > target || arr[startIndex] === undefined) {
      return;
    }

    const num = arr[startIndex];
    const sum = total + num;

    helper(arr, [...answer, num], startIndex, sum, target);

    helper(arr, answer, startIndex + 1, total, target);
  }

  return result;
};

console.log(combinationSum([2, 3, 6, 7], 7));

// console.log("------------");
// console.log("arr - ", arr);
// console.log("result - ", result);
// console.log("startIndex - ", startIndex);
// console.log("total - ", total);
// console.log("target - ", target);
// console.log("------------");

// console.log(combinationSum([2, 3, 5], 8));

console.log(combinationSum([3, 5, 8], 11));
