"use strict";

console.time("time1");

const obj = {};

Object.defineProperty(obj, "childCount", {
  enumerable: false,
  writable: false,
  value: 13,
});

console.log({ obj });

console.dir({ obj });
console.dir({ obj }, { showHidden: true, depth: 20, colors: true });

console.timeEnd("time1");

console.trace("Trace here");

