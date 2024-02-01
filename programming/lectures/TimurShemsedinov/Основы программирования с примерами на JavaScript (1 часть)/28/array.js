{
  const arr = [1, 2];

  arr[5] = 3;

  for (const el of arr) {
    console.log(el);
  }
}

{
  const arr = [1, 2, [2, [3]]];

  console.log(arr.flat());
  console.log(arr.flat(Infinity));
}
