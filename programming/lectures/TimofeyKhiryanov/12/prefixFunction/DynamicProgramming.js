const solution = (s) => {
  const arr = new Array(s.length).fill(0);

  for (let i = 1; i < s.length; i++) {
    let j = arr[i - 1];
    while (j > 0 && s[i] !== s[j]) {
      j = arr[j - 1];
    }
    if (s[i] === s[j]) j++;
    arr[i] = j;
  }

  return arr;
};

// let s = "abcabcd";
// let s = "abab";
// let s = "aa";
let s = "aaxaxaaaax";

console.log(solution(s));
