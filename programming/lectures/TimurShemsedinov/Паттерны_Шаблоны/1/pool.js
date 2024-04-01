class Pool {
  constructor(max = 5) {
    this.max = max;
    this.items = new Map();
    this.removedItems = new Map();
  }

  add(item) {
    const items = this.items;
    const removedItems = this.removedItems;

    if (item === undefined) {
      const key = this.firstKey(removedItems);
      const value = removedItems.get(key);

      if (value !== undefined) {
        this.items.set(key, value);
        this.removedItems.delete(key);
      }

      return;
    }

    const size = items.size;

    if (size < this.max) {
      if (!items.has(size)) items.set(size, item);
    }
  }

  firstKey(map) {
    return map.keys().next().value;
  }

  remove() {
    const key = this.firstKey(this.items);

    const item = this.items.get(key);

    if (this.removedItems.size < this.max) {
      this.removedItems.set(key, item);
      this.items.delete(key);
    }
  }
}

const pool = new Pool();
const user1 = { id: 1 };
const user2 = { id: 2 };
const user3 = { id: 3 };
const user4 = { id: 4 };
const user5 = { id: 5 };

pool.add(user1);
pool.add(user2);
pool.add(user3);
pool.add(user4);
pool.add(user5);

pool.remove();
pool.remove();
pool.remove();
pool.remove();

pool.add();
pool.add();
pool.add();
pool.add();

console.log(pool);
