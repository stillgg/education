const solution = (arr) => {
  const result = [];

  const rec = (arr, k) => {
    if (k === arr.length - 1) {
      result.push(arr);
      return;
    }

    for (let i = k; i < arr.length; i++) {
      const copy = arr.slice();
      [copy[k], copy[i]] = [copy[i], copy[k]];

      rec(copy, k + 1);
    }
  };

  rec(arr, 0);

  return result;
};

// const solution = (arr) => {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     const copy = arr.slice();
//     [copy[0], copy[i]] = [copy[i], copy[0]];

//     for (let j = 1; j < arr.length; j++) {
//       const copy2 = copy.slice();
//       [copy2[j], copy2[1]] = [copy2[1], copy2[j]];

//       for (let k = 2; k < arr.length; k++) {
//         const copy3 = copy2.slice();
//         [copy3[2], copy3[k]] = [copy3[k], copy3[2]];

//         result.push(copy3);
//       }
//     }
//   }

//   return result;
// };

console.log(solution([1, 2, 3]));
