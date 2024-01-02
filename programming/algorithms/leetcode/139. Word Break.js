const wordBreak = (s, wordDict) => {
  if (wordDict.length === 1) wordDict.length = 2;

  const check = (s, wordDict) => {
    for (const word of wordDict) {
      if (s === "") return true;

      s = s.replaceAll(word, "#");
    }

    return s === "";
  };

  for (let i = 0; i < wordDict.length; i++) {
    const tmp1 = wordDict.slice();
    [tmp1[0], tmp1[i]] = [tmp1[i], tmp1[0]];

    for (let j = 1; j < wordDict.length; j++) {
      const tmp2 = tmp1.slice();
      [tmp2[1], tmp2[j]] = [tmp2[j], tmp2[1]];

      for (let k = j; k < wordDict.length; k++) {
        const tmp3 = tmp2.slice();
        [tmp3[k], tmp3[j]] = [tmp3[j], tmp3[k]];

        if (check(s, tmp3)) return true;
      }
    }
  }

  return false;
};
