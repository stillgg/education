// brute force O(n**3)
const isPalindrome = (s) => {
  let first = 0;
  let last = s.length - 1;
  let isPalindrome = true;

  while (first <= last) {
    if (s[first] === s[last]) {
      first++;
      last--;
      continue;
    }
    isPalindrome = false;
    break;
  }

  return isPalindrome;
};

const longestPalindrome = (s) => {
  let result = "";

  for (let i = 0; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      const str = s.slice(j, i);

      if (isPalindrome(str) && str.length > result.length) {
        result = str;
      }
    }
  }

  return result;
};

console.log(longestPalindrome("babad"));

//Manacher's algorithm
