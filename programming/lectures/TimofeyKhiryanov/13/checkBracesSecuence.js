const solution = (s) => {
  const stack = [];

  const brackets = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (const bracket of s) {
    if (brackets[bracket]) stack.push(bracket);
    else if (brackets[stack.pop()] !== bracket) return false;
  }

  return stack.length === 0;
};

console.log(solution(")("));
console.log(solution("()"));
console.log(solution("()([[]])("));
console.log(solution("()([[]])"));
console.log(solution("([)]"));
