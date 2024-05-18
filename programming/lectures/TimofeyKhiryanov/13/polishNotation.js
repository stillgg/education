const solution = (numbers, operations) => {
  let result = null;

  const funcs = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };

  for (const operation of operations) {
    const num1 = numbers.shift();
    const num2 = numbers.shift();
    result = funcs[operation](num1, num2);
    numbers.unshift(result);
  }

  return result;
};

console.log(solution([5, 5, 2, 4, 1], ["+", "*", "/", "-"]));
