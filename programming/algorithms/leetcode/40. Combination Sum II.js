const combinationSum2 = (candidates, target) => {
  candidates = candidates.sort((a, b) => a - b);
  const result = [];

  function rec(startIndex, answer, sum) {
    if (sum > target) return;

    if (sum === target) {
      result.push(answer);
      return;
    }

    for (let i = startIndex; i < candidates.length; i++) {
      if (
        startIndex !== i &&
        (candidates[startIndex] === candidates[i] ||
          candidates[i] === candidates[i - 1])
      )
        continue;

      rec(i + 1, [...answer, candidates[i]], sum + candidates[i]);
    }
  }

  rec(0, [], 0);

  return result;
};

// console.log("i - ", i);
// console.log("startIndex - ", startIndex);
// console.log("sum - ", sum);
// console.log("answer - ", answer);

console.log(combinationSum2([4, 4, 2, 1, 4, 2, 2, 1, 3], 6));

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));

// [1, 1, 2, 5, 6, 7, 10];
console.log(combinationSum2([2, 2, 2, 1], 5));

console.log(combinationSum2([1, 3, 3, 5], 8));
