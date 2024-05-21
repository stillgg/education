const heapify = (arr, i, len) => {
  const left = i * 2 + 1;
  const right = i * 2 + 2;
  let largest = i;

  if (len > left && arr[left] > arr[largest]) largest = left;
  if (len > right && arr[right] > arr[largest]) largest = right;

  if (i !== largest) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];

    heapify(arr, largest, len);
  }
};

const sort = (arr) => {
  const len = arr.length;

  for (let i = Math.floor(len / 2); i >= 0; i--) {
    heapify(arr, i, len);
  }

  for (let i = len - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];

    heapify(arr, 0, i);
  }
};

const arr1 = [4, 10, 3, 5, 1];
const arr2 = [4, 10, 3, 5, 1, 8, 11, 12];
sort(arr1);
console.log(arr1);
