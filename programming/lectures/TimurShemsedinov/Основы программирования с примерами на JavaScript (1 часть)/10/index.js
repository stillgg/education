"use strict";

console.dir({
  a: "foo",
  b: "baz",
});

const test = (callback) => {
  return callback.name;
};

const test2 = (...args) => args;

const arr = [1, 23];
console.log(test2.apply(null, arr));


