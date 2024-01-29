const range = {
  from: 1,
  to: 10,
  [Symbol.iterator]() {
    return {
      next: () => {
        return {
          value: this.from,
          done: this.from++ > this.to,
        };
      },
    };
  },
};

for (const i of range) {
  console.log(i);
}
