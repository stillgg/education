const log = (s, i) => {
  console.log(i, s);
  return s;
};

const f1 = (x) => x * 2;
const f2 = (x) => ++x;

const compose =
  (...funcs) =>
  (x) =>
    funcs.reduce((v, f) => f(v), x);

const f3 = compose(f1, f2);

const res1 = [7, 10, 1, 5, 2]
  .map(f3) // [15, 21, 3, 11, 5]
  .reduce((acc, val) => acc + val); // 55

console.log(res1);
