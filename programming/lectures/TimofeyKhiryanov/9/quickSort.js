const quickSort = (arr) => {
  const rec = (start, end) => {
    if (start > end) return;

    let l = start;
    let r = end;

    while (l < r) {
      const left = arr[l];
      const right = arr[r];

      if (left > right) {
        const tmp = arr[r - 1];
        arr[l] = tmp;
        arr[r - 1] = right;
        arr[r] = left;
        r--;
      } else {
        l++;
      }
    }

    const middle = l;
    // console.log("l - ", l);
    // console.log("r - ", r);
    console.log("start - ", start);
    console.log("end - ", end);
    console.log("l - ", l);
    console.log("r - ", r);
    console.log(arr);
    rec(middle + 1, end);
    rec(start, middle - 1);

    return arr;
  };

  return rec(0, arr.length - 1);
};
// const arr = [2, 3, 1];
const arr = [3, 7, 8, 5, 2, 1, 9, 5, 4];

console.log(quickSort(arr));
