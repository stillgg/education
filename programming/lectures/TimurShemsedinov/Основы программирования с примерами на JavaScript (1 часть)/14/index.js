// const multiple = (x) => (n) => x * n;

// const multipleByTwo = multiple(2);
// const multipleByThree = multiple(3);

// const multipleByTwo = multiple.bind(null, 2);
// const multipleByThree = multiple.bind(null, 3);

const curry = (f) => {
  return function curriedFn(...args1) {
    if (args1.length === f.length) {
      return f(...args1);
    }
    return (...args2) => {
      return curriedFn(...args1, ...args2);
    };
  };
};

const curry2 =
  (fn) =>
  (...args) => {
    if (fn.length > args.length) {
      const func = fn.bind(null, ...args);

      return curry2(func);
    }
    return fn(...args);
  };

const sum = (a, b, c, d) => a + b + c + d;

const sum2 = (...args) => args.reduce((acc, val) => acc + val);

const f1 = curry2(sum);

console.log(f1(1)(2)(3)(4));

// curry(1,2,3,4) -> curry(1)(2)(3,4)
