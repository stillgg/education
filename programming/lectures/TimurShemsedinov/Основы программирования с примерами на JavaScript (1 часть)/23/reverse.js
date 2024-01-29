const arr = ["a", "b", "c", "d", "e"];

Array.prototype[Symbol.iterator] = function () {
  let index = this.length;

  return {
    next: () => {
      index--;

      return {
        done: index === -1,
        value: this[index],
      };
    },
  };
};

for (const i of arr) {
  console.log(i);
}
