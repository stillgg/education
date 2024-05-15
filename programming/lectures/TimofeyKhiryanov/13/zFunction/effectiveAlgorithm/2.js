const solution = (s) => {
  const len = s.length;
  const z = new Array(len).fill(0);

  let left = 0;
  let right = 1;
  let i = 1;

  while (i < len) {
    const substr1 = s[left];
    const substr2 = s[right];

    while (s[right - left - 1] === s[right]) {
      right++;
    }
    z[i] = right - left;
    i++;
  }

  return z;
};

console.log(solution("aaaa"));
// console.log(solution("aabxaabxcaabxaabxay"));
