const solution = (s) => {
  const z = new Array(s.length).fill(0);

  for (let i = 1; i < s.length; i++) {
    let k = 0;
    let j = i;

    while (s[k] === s[j]) {
      j++;
      k++;
    }

    z[i] = k;
  }

  return z;
};

console.log(solution("aaxaxaaaax"));
// console.log(solution("abacaba"));
// console.log(solution("abcabcd"));
// console.log(solution('abcdabc'))

// console.log(solution("aabaa"));
// console.log(solution("aabxaayaab"));
