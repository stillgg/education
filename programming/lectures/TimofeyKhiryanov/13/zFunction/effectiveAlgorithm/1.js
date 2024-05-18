const solution = (s) => {
  const z = new Array(s.length).fill(0);
  const len = s.length;
  let left = 0;
  let right = 0;

  for (let i = 1; i < len; i++) {
    if (i > right) {
      left = right = i;
      while (right < len && s[right] === s[right - left]) {
        right++;
      }
      z[i] = right - left;
      right--;
    } else {
      let i1 = i - left;

      if (z[i1] < right - i + 1) {
        z[i] = z[i1];
      } else {
        left = i;
        while (right < len && s[right] === s[right - left]) {
          right++;
        }
        z[i] = right - left;
        right--;
      }
    }
  }

  return z;
};

// console.log(solution("aaxaxaaaax"));
// console.log(solution("aaxaxaaaax"));
console.log(solution("aabxaabxcaabxaabxay"));
