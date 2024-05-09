// wrong

const solution = (s) => {
  const z = new Array(s.length).fill(0);

  for (let i = 1; i < s.length; i++) {
    let left = z[i - 1];
    let right = i;
    let count = 0;

    let substr1 = s[left];
    let substr2 = s[right];

    while (substr1 === substr2 && left < right) {
      count++;
      left++;
      right++;
      substr1 = s[left];
      substr2 = s[right];
    }

    z[i] = count;
  }

  return z;
};

console.log(solution("aaxaxaaaax"));
