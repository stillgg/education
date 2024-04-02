const singleton = (() => {
  const instance = {};

  return () => {
    return instance;
  };
})();

const ex1 = singleton();
const ex2 = singleton();

console.log(ex1 === ex2);
