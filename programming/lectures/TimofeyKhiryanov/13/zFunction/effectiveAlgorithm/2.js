const solution = (s) => {
  const len = s.length;
  const z = new Array(len).fill(0);

  let left = 0;
  let right = 0;
  let i = 1;

  while (i < len) {
    if (i > right) {
      // out of the box
      right = i;

      while (s[right - i] === s[right]) {
        right++;
      }

      z[i] = right - 1 - left;
      left++;
    } else {
      // in the box. We've already calculated all the values

      z[i] = z[i - left];
    }

    i++;
  }

  return z;
};

console.log(solution("aaaa"));
// console.log(solution("abab"));
// console.log(solution("aabxaabxcaabxaabxay"));
