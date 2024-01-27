{
  // Maybe is a recursive closure
  // if x and f are defined this will calculate f(x)
  // and return new instance of functional object
  const m = (x) => (f) => m(x && f ? f(x) : null);

  // so we can define a chain of value transformations
  m(5)((x) => x * 2)((x) => ++x)(console.log);
}


