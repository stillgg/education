//first solution

const getNextBrackets = (brackets, n) => {
  const OPENED_BRACKET = "(";
  const CLOSED_BRACKET = ")";
  const result = [];
  const maxBrakets = n * 2;
  const isLast = brackets.length - 1 === maxBrakets;

  if (isLast) {
    return [CLOSED_BRACKET];
  }

  const totalOpenedBrackets = brackets.reduce(
    (acc, currentVal) => (currentVal === OPENED_BRACKET ? ++acc : acc),
    0
  );
  const totalClosedBrackets = brackets.reduce(
    (acc, currentVal) => (currentVal === CLOSED_BRACKET ? ++acc : acc),
    0
  );
  const totalBrackets = totalOpenedBrackets + totalClosedBrackets;

  if (totalBrackets === maxBrakets) {
    return result;
  }

  if (totalOpenedBrackets + 1 <= n) {
    if (totalClosedBrackets + 1 <= totalOpenedBrackets) {
      result.push(CLOSED_BRACKET);
    }
    result.push(OPENED_BRACKET);
  } else if (totalOpenedBrackets === n) {
    result.push(CLOSED_BRACKET);
  }

  return result;
};

const balancedParens = (n) => {
  if (n === 0) {
    return [""];
  }
  const result = [["("]];
  const maxBrakets = n * 2;

  for (let i = 0; i < result.length; i++) {
    const brackets = result[i];

    const possibleNextBrackets = getNextBrackets(brackets, n);

    if (possibleNextBrackets.length === 2) {
      const newBrakets1 = brackets.slice();
      const newBrakets2 = brackets.slice();

      newBrakets1.push(possibleNextBrackets[0]);
      newBrakets2.push(possibleNextBrackets[1]);
      result.push(newBrakets1);
      result.push(newBrakets2);
    } else if (possibleNextBrackets.length === 1) {
      const newBrakets = brackets.slice();
      newBrakets.push(possibleNextBrackets[0]);
      result.push(newBrakets);
    }
  }

  const filtered = result.filter((arr) => arr.length === maxBrakets);

  return filtered.map((arr) => arr.join(""));
};

console.log(balancedParens(13));


//second recursion
