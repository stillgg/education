const partition = (s) => {
  const answer = [];

  const isPalindrom = (s) => {
    return s === s.split("").reverse().join("");
  };

  const helper = (startIndex, arr) => {
    if (startIndex >= s.length) {
      answer.push(arr);
      return;
    }

    for (let i = startIndex; i < s.length; i++) {
      const subStr = s.slice(startIndex, i + 1);

      if (isPalindrom(subStr)) {
        arr.push(subStr);

        helper(i + 1, arr.slice());

        arr.pop();
      }
    }
  };

  helper(0, []);

  return answer;
};

console.log(partition("aaab"));
// [["a","a","a","b"],["a","aa","b"],["aa","a","b"],["aaa","b"]]

// console.log(partition("aab"));
// [["a","a","b"],["aa","b"]]
