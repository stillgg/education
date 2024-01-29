const range = {
  from: 1,
  to: 5,
  [Symbol.asyncIterator]() {
    return {
      next: () =>
        new Promise((resolve, reject) => {
          if (this.from === 1) {
            resolve({
              done: false,
              value: this.from++,
            });
          } else if (this.from > this.to) {
            resolve({
              done: true,
            });
          } else {
            setTimeout(() => {
              resolve({
                done: false,
                value: this.from++,
              });
            }, 1000);
          }
        }),
    };
  },
};

(async () => {
  for await (const i of range) {
    console.log(i);
  }
})();
