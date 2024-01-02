const randomPermutation = (m, prefix = "") => {
  if (m === 0) {
    console.log(prefix);
    return;
  }
  //   randomPermutation(m - 1, prefix + "0");
  randomPermutation(m - 1, prefix + "1");
};

randomPermutation(4);
