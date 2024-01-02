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

      if (isValid(str)) {
        set.add(str);
      }
    }
  }

  return set;
};

const generateParenthesis = (n) => {
  const arr = [];

  for (let i = 0; i < n * 2; i++) {
    if (i < n) {
      arr.push("(");
    } else {
      arr.push(")");
    }
  }

  const tmp = getAllCombinations(arr);

  const result = new Set();

  for (const i of tmp) {
    const arr = i.split("");
    const solution = getSolution(arr);

    // for (let j of solution) {
    //   if (!tmp.includes(j)) {
    //     tmp.push(j);
    //   }

    //   result.add(j);
    // }
  }

  return Array.from(result);
};
