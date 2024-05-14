const solution = (s) => {
  const z = new Array(s.length).fill(0);

  for (let i = 1; i < s.length; i++) {
    let left = 0;
    let right = i;
    let count = 0;

    while (s[left] === s[right]) {
      left++;
      right++;
      count++;
    }

    let start = right - count + 1;
    let end = 1;

    while (right > start) {
      if (z[start] + start > right) {
        // we need to update z box
        let count = z[end];
        const tmp = end;
        let end2 = end;

        let end = z[start] + start;

        while (s[end] === s[end2]) {
          count++;
          end++;
          end2++;
        }

        z[tmp] = count;

        right++;
      } else {
        z[start] = z[end];
        end++;
        start++;
        i = right;
      }
      i = right - 1;
    }

    z[i] = count;
  }

  return z;
};

// console.log(solution("aaxaxaaaax"));
// console.log(solution("aaxaxaaaax"));
console.log(solution("aabxaabxcaabxaabxay"));
