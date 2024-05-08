const prefixFunction = (s) => {
  const p = new Array(s.length).fill(0);
  p[0] = 0;

  for (let i = 1; i < s.length - 1; i++) {
    let k = p[i - 1];

    while (k > 0 && s[i] !== s[k]) {
      k = p[k - 1];
    }

    if (s[i] === s[k]) {
      k++;
    }

    p[i] = k;
  }

  return p;
};

console.log(prefixFunction("abcabcd"));
