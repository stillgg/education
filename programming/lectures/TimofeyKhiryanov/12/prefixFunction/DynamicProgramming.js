const solution = (s) => {
  const p = new Array(s.length).fill(0);

  for (let i = 1; i < s.length; i++) {
    let j = p[i - 1];

    while (j > 0 && s[j] !== s[i]) {
      j = p[j - 1];
    }

    if (s[i] === s[j]) j++;

    p[i] = j;
  }

  return p;
};

// let s = "abcabcd";
// let s = "abab";
// let s = "aa";
// let s = "aaxaxaaaax";

console.log(solution(s));
