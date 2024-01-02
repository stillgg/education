function add(a, b) {
  let result = "";
  const firstNumber = a.length >= b.length ? a : b;
  const secondNumber = a.length >= b.length ? b : a;

  let lengthLessNumber = secondNumber.length;

  let ten = 0;

  for (let i = firstNumber.length - 1; i >= 0; i--) {
    const expression =
      Number(firstNumber[i]) +
      Number(secondNumber[lengthLessNumber - 1] || 0) +
      ten;

    lengthLessNumber--;

    const str = expression.toString();

    if (expression >= 10) {
      ten = 1;
    } else {
      ten = 0;
    }

    result += str[str.length - 1];
  }

  if (ten === 1) {
    result += "1";
  }

  return result.split("").reverse().join("");
}

function add2(a, b) {
  return (BigInt(a) + BigInt(b)).toString();
}

console.log(
  add("1873274838721847", "48372174378218743721478930000073271473281784")
);
