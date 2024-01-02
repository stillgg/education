const longestValidParentheses = function (s) {
  let max = 0;
  const stack = [-1];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      stack.pop();

      if (stack.length === 0) {
        stack.push(i);
      } else {
        max = Math.max(i - stack[stack.length - 1], max);
      }
    }
  }

  return max;
};

console.log(longestValidParentheses(")()()"));
