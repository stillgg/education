// n**3

const solution = (s) => {
  const arr = new Array(s.length).fill(0);

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < i + 1; j++) {
      const substr1 = s.slice(i + 1 - j, i + 1);
      const substr2 = s.slice(0, j);

      if (substr1 === substr2) {
        arr[i] = j;
      }
    }
  }

  return arr;
};

// let s = "abcabcd";
let s = "aaxaxaaaax";
// let s = "aa";
console.log(solution(s));

// console.log(solution("abcabcd"));
// console.log(solution("aaaa"));
// console.log(prefix_function("aaaa"));
