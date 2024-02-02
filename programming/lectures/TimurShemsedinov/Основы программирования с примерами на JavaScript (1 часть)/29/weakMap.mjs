{
  const weakMap = new WeakMap();

  let obj = {};

  weakMap.set(obj, 1);
  console.log(weakMap.get(obj));

  obj = {};

  console.log(weakMap.has(obj));
  console.log(Object.keys(weakMap))
}

{
  const map = new Map();

  let obj = {};

  map.set(obj, 1);
  console.log(map.get(obj));

  obj = {};

  console.log(map.has(obj));
  console.log(Object.keys(map))
}
