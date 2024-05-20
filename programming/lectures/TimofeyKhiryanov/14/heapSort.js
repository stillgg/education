const max = (arr, index) => {
  const rec = (i) => {
    if (i > arr.length) return 0;

    const child1 = rec(i * 2 + 1);
    const child2 = rec(i * 2 + 2);
    if (arr[child1] > arr[i]) [arr[child1], arr[i]] = [arr[i], arr[child1]];
    if (arr[child2] > arr[i]) [arr[child2], arr[i]] = [arr[i], arr[child2]];


    
    return 
  };

  rec(0);
  return arr;
};

const solution = (arr) => {
  const res = [];
  const len = arr.length;
  while (arr.length !== 0) {
    for (let i = 0; i < arr.length; i * 2 + 1) {
      const left = i * 2 + 1;
      const right = i * 2 + 2;

      if (arr[left] > arr[i]) [arr[left], arr[i]] = [arr[i], arr[left]];
      if (arr[right] > arr[i]) [arr[right], arr[i]] = [arr[i], arr[right]];
    }

    [arr[0], arr[length - 1]] = [arr[length - 1], arr[0]];
    res.push(arr.pop());
  }
};

// console.log(solution([4, 10, 3, 5, 1]));

console.log(max([4, 10, 3, 5, 1]));
