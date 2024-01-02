//brute force
//n**3
// const isUnique = (substr) => {
//   const set = new Set();

//   for (let s of substr) {
//     if (set.has(s)) {
//       return false;
//     }

//     set.add(s);
//   }

//   return true;
// };

// const lengthOfLongestSubstring = function (s) {
//   let max = 0;

//   for (let i = 0; i < s.length; i++) {
//     for (let j = i; j < s.length; j++) {
//       const substr = s.substring(i, j + 1);

//       if (isUnique(substr)) {
//         max = Math.max(max, substr.length);
//         console.log(substr);
//       }
//     }
//   }

//   return max;
// };

// const lengthOfLongestSubstring = (s) => {
//   let hash = {};
//   let max = 0;
//   let start = 0;

//   for (let i = 0; i < s.length; i++) {
//     const substr = s[i];

//     if (hash[substr] !== undefined && hash[substr] >= start) {
//       start = hash[substr] + 1;
//     }

//     hash[substr] = i;
//     max = Math.max(max, i - start + 1);
//     console.log("start", start);
//     console.log("i", i);
//     // console.log(max);
//   }

//   return max;
// };

const lengthOfLongestSubstring = (s) => {
  const cache = {};
  let max = 0;
  let begin = 0;

  for (let i = 0; i < s.length; i++) {
    const substr = s[i];

    if (cache[substr] !== undefined && cache[substr] >= begin) {
      begin = cache[substr] + 1;
    }

    cache[substr] = i;
    max = Math.max(max, i - begin + 1);
  }

  return max;
};

// console.log(lengthOfLongestSubstring("aabccd"));
// console.log(lengthOfLongestSubstring("dvdf"));
console.log(lengthOfLongestSubstring("abba"));
