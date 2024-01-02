const longestCommonPrefix = function (strs) {
  strs = strs.map((i) => i.toLowerCase());
  let i = 0;
  let prefix = "";

  if (strs === undefined || strs.length >= 200) return "";

  if (strs.length === 1) {
    return strs[0];
  }

  while (true) {
    let comparedStr = null;

    for (let j = 0; j < strs.length; j++) {
      const str = strs[j];
      const subStr = str[i];

      if (subStr === undefined) {
        return prefix;
      }

      if (comparedStr === null) {
        comparedStr = subStr;
      } else {
        if (j === strs.length - 1) {
          if (subStr === comparedStr) {
            prefix += subStr;
          } else {
            return prefix;
          }
        }

        if (subStr !== comparedStr) {
          return prefix;
        }

        if (subStr === comparedStr) {
          continue;
        }
      }
    }

    i++;
  }
};

console.log(
  longestCommonPrefix(["flower", "flower", "flower", "flower", "flower"])
);
