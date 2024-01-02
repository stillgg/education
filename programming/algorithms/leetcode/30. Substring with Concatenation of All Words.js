// Approach 1: Check All Indices Using a Hash Table

// const isValid = (string, wordLength, map) => {
//   const copyMap = new Map(map);

//   for (let i = 0; i < string.length; i += wordLength) {
//     const word = string.slice(i, i + wordLength);
//     const value = copyMap.get(word);

//     if (copyMap.has(word) === false || value === 0) return false;

//     copyMap.set(word, value - 1);
//   }

//   return true;
// };

// const findSubstring = function (s, words) {
//   const map = new Map();
//   const wordLength = words[0].length;
//   const totalWords = words.length;
//   const result = [];

//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];
//     const value = map.get(word);
//     if (value !== undefined) map.set(word, value + 1);
//     else {
//       map.set(word, 1);
//     }
//   }

//   for (let i = 0; i < s.length; i++) {
//     const endIndex = wordLength * totalWords + i;

//     if (s[endIndex - 1] === undefined) continue;

//     const substring = s.slice(i, endIndex);

//     if (isValid(substring, wordLength, map)) {
//       result.push(i);
//     }
//   }

//   return result;
// };

// second solution

const isValid = (string, wordLength, map) => {
  const copyMap = new Map(map);

  for (let i = 0; i < string.length; i += wordLength) {
    const word = string.slice(i, i + wordLength);
    const value = copyMap.get(word);

    if (copyMap.has(word) === false || value === 0) return false;

    copyMap.set(word, value - 1);
  }

  return true;
};

const findSubstring = (s, words) => {
  const map = new Map();
  const wordLength = words[0].length;
  const totalWords = words.length;
  const result = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const value = map.get(word);
    if (value !== undefined) map.set(word, value + 1);
    else {
      map.set(word, 1);
    }
  }

  let left = 0;
  let right = wordLength * totalWords;

  while (s[right - 1] !== undefined) {
    const word = s.slice(left, left + wordLength);

    if (!map.has(word)) {
      left++;
      right++;
      continue;
    }

    const substring = s.slice(left, right);

    if (isValid(substring, wordLength, map)) {
      result.push(left);
    }

    left += 1;
    right += 1;
  }

  return result;
};

let str = "";
for (let i = 0; i < 50000; i++) {
  str += "a";
}

const words = [];

for (let i = 0; i < 5000; i++) {
  words.push("a");
}

// console.log(findSubstring("ababaab", ["ab", "ba", "ba"]));

// console.log(findSubstring("barfoothebarfoothe", ["bar", "foo", "the"]));
// console.log(
//   findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "good"])
// );
console.log(
  findSubstring("lingmindraboofooowingdingbarrwingmonkeypoundcake", [
    "fooo",
    "barr",
    "wing",
    "ding",
    "wing",
  ])
);
// findSubstring(str, words);
