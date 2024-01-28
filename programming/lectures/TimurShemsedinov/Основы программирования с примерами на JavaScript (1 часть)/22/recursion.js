const rec = (i) => {
  try {
    return rec(++i);
  } catch (err) {
    return i;
  }
};

console.log(rec(0));
