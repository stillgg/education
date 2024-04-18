// selection

// const arr = [1, 5, 3, 2, 4, 5, 6, 8, 12, 3];
// const arr = [4, 5, 1];

const solution = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (let j = i; j < arr.length; j++) {
      const num1 = arr[j];
      const num2 = arr[min];

      if (num1 < num2) min = j;
    }

    [arr[min], arr[i]] = [arr[i], arr[min]];
  }

  return arr;
};

console.log(solution(arr));
