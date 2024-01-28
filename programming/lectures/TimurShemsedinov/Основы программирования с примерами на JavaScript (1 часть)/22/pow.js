const pow = (v, degree) => {
  if (degree === 1) return v;

  return pow(v, degree - 1) * v;
};

console.log(pow(3, 3));
