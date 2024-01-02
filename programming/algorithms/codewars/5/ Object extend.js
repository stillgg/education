var extend = function (...objects) {
  const result = {};
  for (const object of objects) {
    for (const key in object) {
      if (Object.isObject) 
      if (result[key] === undefined) {
        result[key] = object[key];
      }
    }
  }
  return result;
};
console.log(extend({ a: false, b: null }, { a: true, b: 2, c: 3 }));
