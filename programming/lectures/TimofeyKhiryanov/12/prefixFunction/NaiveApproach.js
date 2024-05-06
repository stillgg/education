// n**3

// const solution = (s) => {
//   const arr = new Array(s.length).fill(0);
//   const n = s.length;

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j <= i; j++) {
//       const substr1 = s.slice(0, j);
//       const substr2 = s.slice(i - j, i);

//       if (substr1 === substr2) {
//         arr[i] = j;
//       }
//     }
//   }
//   return arr;
// };

// const prefix_function = (s) => {
//   const n = s.length;
//   const pi = new Array(n).fill(0);

//   for (let i = 0; i < n; i++) {
//     for (let k = 0; k <= i; k++) {
//       const substr1 = s.slice(0, k);
//       const substr2 = s.slice(i - k, k);

//       if (substr1 === substr2) {
//         pi[i] = k;
//       }
//     }
//   }

//   return pi;
// };
function prefixFunction(s) {
  let n = s.length;
  let prefix = Array(n).fill(0);

  for (let i = 1; i < n; i++) {
    let j = prefix[i - 1];

    while (j > 0 && s[i] !== s[j]) {
      j = prefix[j - 1];
    }

    if (s[i] === s[j]) {
      j++;
    }

    prefix[i] = j;
  }

  return prefix;
}

let s = "abcabcd";
console.log(prefixFunction(s));

// console.log(solution("abcabcd"));
// console.log(solution("aaaa"));
// console.log(prefix_function("aaaa"));
