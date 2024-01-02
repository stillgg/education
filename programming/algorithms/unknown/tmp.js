const col = {
  "(": ")",
};

const isValid = (s) => {
  let res = "";

  const collArr = Object.keys(col);
  const arr1 = s.split("").filter((str) => collArr.includes(str));
  const arr2 = s.split("").filter((str) => !collArr.includes(str));

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    const substr = s[i];

    if (col[substr]) {
      res += substr;
    } else if (substr === col[res[res.length - 1]]) {
      res = res.slice(0, -1);
    } else {
      return false;
    }
  }

  return true;
};

const cache = new Set();

const getAllCombinations = (arr) => {
  const set = new Set();

  for (let a = 0; a < arr.length; a++) {
    const copy = arr.slice();
    const tmp1 = copy[0];
    const tmp2 = copy[a];
    copy[0] = tmp2;
    copy[a] = tmp1;

    for (let b = 1; b < arr.length; b++) {
      const copy2 = copy.slice();
      const tmp3 = copy2[1];
      const tmp4 = copy2[b];
      copy2[1] = tmp4;
      copy2[b] = tmp3;

      const str = copy2.join("");

      if (a > 0 && cache.has(str)) {
        continue;
      }

      if (isValid(str)) {
        set.add(str);
      }

      cache.add(str);
    }
  }

  return set;
};

const tmpCache = new Set();

const balancedParens = (n) => {
  if (n === 0) {
    return [""];
  }

  const brackets = [];

  for (let i = 0; i < n * 2; i++) {
    if (i < n) {
      brackets.push("(");
    } else {
      brackets.push(")");
    }
  }

  const firstCombination = getAllCombinations(brackets);

  const firstCombinationArr = Array.from(firstCombination);
  const result = new Set();

  for (let i = 0; i < firstCombination.size; i++) {
    const firstCombinationStr = firstCombinationArr[i];

    const secondCombination = getAllCombinations(firstCombinationStr.split(""));

    const secondCombinationArr = Array.from(secondCombination);

    for (let k = 0; k < secondCombination.size; k++) {
      const secondCombinationStr = secondCombinationArr[k];

      if (!firstCombination.has(secondCombinationStr)) {
        firstCombination.add(secondCombinationStr);
        firstCombinationArr.push(secondCombinationStr);
      }

      result.add(secondCombinationStr);
    }
  }

  return Array.from(result);
};

console.log(balancedParens(12));
