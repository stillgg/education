const solution = (str, substr) => {
  const arr = new Array(str.length + 1).fill(0);
  for (let i = 1; i < str.length + 1; i++) {
    const index = arr[i - 1];
    const substr1 = str[i - 1];
    const substr2 = substr[index];

    if (substr1 === substr2) {
      const len = arr[i - 1] + 1;
      arr[i] = len;

      if (len === substr.length) {
        return i - index - 1;
      }
    }
  }

  return -1;
};

console.log(solution("abbaafdbccfdabfdc", "abba"));

// console.log(solution("afdbcabbacfdabfdc", "abba"));
