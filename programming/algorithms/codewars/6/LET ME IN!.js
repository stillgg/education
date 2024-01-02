function getInLine(arr) {
  const sortedArray = getSortedArray(arr);
  let time = 0;

  while (sortedArray[0] === 1) {
    sortedArray.splice(0, 1);
    let start = 0;
    let end = sortedArray.length - 1;

    while (start < end) {
      const startValue = sortedArray[start];
      const endValue = sortedArray[end];

      if (
        startValue !== 1 &&
        startValue !== 3 &&
        endValue !== 1 &&
        endValue !== 3
      ) {
        sortedArray[start] = endValue;
        sortedArray[end] = startValue;
      }

      start++;
      end--;
    }
    time++;
  }

  return time + sortedArray.indexOf(0) + 1;
}

function getSortedArray(array) {
  const arr = [...array];
  const tmpArray = [];
  
  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];

    if (number === 1 || number === 2) {
      tmpArray.push(number);
      arr.splice(i, 1);
      i--;
    }
  }

  tmpArray.sort();

  return tmpArray.concat(arr);
}


console.log(getInLine([1, 1, 3, 2, 0]));
console.log(getInLine([0, 8, 2, 1, 4, 2, 12, 3, 2]));
