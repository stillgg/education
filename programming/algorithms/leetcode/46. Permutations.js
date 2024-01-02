const permute = (nums) => {
  const result = [];

  // for (let a = 0; a < nums.length; a++) {
  //   const copy = nums.slice();

  //   [copy[a], copy[0]] = [copy[0], copy[a]];

  //   if (a === 1) break;

  //   for (let b = 1; b < nums.length; b++) {
  //     const copy2 = copy.slice();

  //     [copy2[b], copy2[1]] = [copy2[1], copy2[b]];

  //     for (let c = 2; c < nums.length; c++) {
  //       const copy3 = copy2.slice();

  //       [copy3[c], copy3[2]] = [copy3[2], copy3[c]];

  //       for (let d = 3; d < nums.length; d++) {
  //         result.push(copy3);
  //       }
  //     }
  //   }
  // }

  // for (let i = 0; i < nums.length; i++) {
  //   const tmp = nums.slice();

  //   [tmp[i], tmp[0]] = [tmp[0], tmp[i]];

  //   helper(1, tmp, [tmp[0]]);
  // }

  function helper(startIndex, tmp, answer) {
    if (answer.length === nums.length) {
      result.push(answer);
      return;
    }

    for (let i = startIndex; i < nums.length; i++) {
      const copy = tmp.slice();

      [copy[startIndex], copy[i]] = [copy[i], copy[startIndex]];

      helper(startIndex + 1, copy, [...answer, copy[startIndex]]);
    }
  }

  helper(0, nums, []);

  return result;
};

console.log(permute([1, 2, 3, 4]));
