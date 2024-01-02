const insert_sort = (A) => {
  console.log("сортировка списка A вставками");
  N = A.length;

  for (let top = 1; top <= N; top++) {
    k = top;

    while (k > 0 && A[k - 1] > A[k]) {
      [A[k], A[k - 1]] = [A[k - 1], A[k]];
      k -= 1;
    }
  }

  console.log(A);
};

const choise_sort = (A) => {
  console.log("сортировка списка A выбором");
  N = A.length;

  for (pos = 0; pos <= N - 1; pos++) {
    for (k = pos + 1; k <= N; k++) {
      if (A[k] < A[pos]) {
        [A[k], A[pos]] = [A[pos], A[k]];
      }
    }
  }
  console.log(A);
};

const bubble_sort = (A) => {
  console.log("сортировка списка A методом пузырька");

  N = A.length;

  for (let top = N; top >= 1; top--) {
    for (let k = 1; k <= top; k++) {
      if (A[k - 1] > A[k]) {
        [A[k], A[k - 1]] = [A[k - 1], A[k]];
      }
    }
  }

  console.log(A);
};

const test_sort = (sort_algorithm) => {
  console.log("testcase #1:");
  A = [4, 2, 5, 1, 3];

  A_sorted = [1, 2, 3, 4, 5];

  sort_algorithm(A);

  for (let i = 0; i <= A.length; i++) {
    if (A[i] === A_sorted[i]) {
      continue;
    }
    console.log("fail");
    return;
  }

  console.log("success");
  return;
};

test_sort(insert_sort);
test_sort(choise_sort);
test_sort(bubble_sort);
