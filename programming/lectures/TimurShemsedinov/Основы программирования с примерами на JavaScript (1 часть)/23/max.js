const arr = [1, 2, 3, 4];

const { max, min } = Math;

const max2 = (a, b) => {
  console.log("a - ", a);
  console.log("b - ", b);

  return a < b ? b : a;
};

// const max3 = (...args) => {
//   console.log("args - ", args);
//   let max = -Infinity;

//   for (let i = 0; i < args.length; i++) {
//     const value = args[i];

//     if (value > max) max = value;
//   }

//   return max;
// };

const maxValue1 = Math.max(...arr);
const maxValue2 = arr.reduce(max2); // 4
// const maxValue3 = arr.reduce(max3); // 4

console.log("maxValue1 - ", maxValue1);
console.log("maxValue2 - ", maxValue2);
// console.log("maxValue3 - ", maxValue3);
