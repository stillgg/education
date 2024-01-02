const col = {
  "(": ")",
  "{": "}",
  "[": "]",
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

// console.log(isValid("([)]"));
console.log(isValid("(()())"));
