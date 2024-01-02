const countAndSay = (n) => {
  let x = 1;
  let result = "1";

  while (n > x) {
    let counter = 1;
    let tmpStr = "";

    for (let i = 0; i < result.length; i++) {
      const current = result[i];

      const next = result[i + 1];

      if (current !== next) {
        tmpStr += `${counter}${current}`;
        counter = 1;
      } else {
        counter++;
      }
    }

    result = tmpStr;
    x++;
  }

  return result;
};

console.log(countAndSay(5));
