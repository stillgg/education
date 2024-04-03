class TimeoutCollection {
  constructor(timeout) {
    this.timeout = timeout;
    this.collection = new Map();
  }

  set(key, value) {
    if (this.collection.has(key)) return;

    this.collection.set(key, value);

    const timer = setTimeout(() => {
      this.collection.delete(key);
      clearTimeout(timer);
    }, this.timeout);
  }

  get() {
    return this.collection.get(key);
  }

  delete(key) {
    this.collection.delete(key);
  }

  toArray() {
    return [...this.collection.entries()];
  }
}

const hash = new TimeoutCollection(1000);
hash.set("uno", 1);
console.dir({ array: hash.toArray() });

hash.set("due", 2);
console.dir({ array: hash.toArray() });

setTimeout(() => {
  hash.set("tre", 3);
  console.dir({ array: hash.toArray() });

  setTimeout(() => {
    hash.set("quattro", 4);
    console.dir({ array: hash.toArray() });
  }, 500);

  setTimeout(() => {
    console.dir({ array: hash.toArray() });
  }, 2000);
}, 1500);
