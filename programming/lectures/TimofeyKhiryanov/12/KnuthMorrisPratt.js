const prefixFunction = (s) => {
  const p = new Array(s.length).fill(0);

  for (let i = 1; i < s.length; i++) {
    let j = p[i - 1];

    while (j > 0 && s[i] !== s[j]) {
      j = p[j - 1];
    }

    if (s[i] === s[j]) j++;

    p[i] = j;
  }

  return p;
};

const kmp = (s1, s2) => {
  const n1 = s1.length;

  const p = prefixFunction(s1 + "#" + s2);

  let count = 0;

  for (let i = n1; i < p.length; i++) {
    if (p[i] === n1) count++;
  }

  return count;
};

console.log(kmp("aba", "bababa"));

// aba babac
