const arr = [2, 3, 6, 7];

const rec = (total, num) => {
  if (total <= 0) {
    return;
  }
  console.log("before - ", total);
  rec(total - num, num);

  console.log("after - ", total);
  rec(total - num + 1, num);
};

rec(8, 2);
