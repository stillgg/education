function solution(list) {
  let result = "";
  let prevVal = -Infinity;
  let combo = [];

  for (let i = 0; i < list.length; i++) {
    const currentVal = list[i];

    if (prevVal === -Infinity) {
      prevVal = currentVal;
      combo.push(currentVal);
      continue;
    }

    if (currentVal - 1 !== prevVal) {
      if (combo.length === 1) {
        result += `${combo[0]},`;
      } else if (combo.length === 2) {
        result += `${combo[0]},${combo[1]},`;
      } else {
        result += `${combo[0]}-${combo[combo.length - 1]},`;
      }
      combo = [];
    }

    combo.push(currentVal);

    prevVal = currentVal;
  }

  if (combo.length) {
    if (combo.length === 1) {
      result += `${combo[0]},`;
    } else if (combo.length === 2) {
      result += `${combo[0]},${combo[1]},`;
    } else {
      result += `${combo[0]}-${combo[combo.length - 1]},`;
    }
  }

  return result.slice(0, -1);
}

console.log(
  solution([
    -10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18,
    19, 20,
  ])
);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
