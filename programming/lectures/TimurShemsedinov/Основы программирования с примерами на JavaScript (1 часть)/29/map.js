implimentation: {
  class Map {
    constructor() {
      this.map = new Object(null);
    }
    set(key, value) {
      this.map[key] = value;
    }
    get(key) {
      return this.map[key];
    }
    has(key) {
      return this.keys().includes(key);
    }
    clear() {
      this.map = new Object(null);
    }
    keys() {
      return Object.keys(this.map);
    }
    delete(key) {
      delete this.map[key];
    }
    get size() {
      return this.keys().length;
    }
  }

  const map = new Map();

  console.log(map.size);
  map.set("test", 1);
  console.log(map.get("test"));
  console.log(map.has("test"));
  console.log(map.keys());
  console.log(map.size);
  console.log(map.delete("test"));
  console.log(map.size);
}

{
  const map = new Map();
  map.set("key", 1);

  for (const item of map) {
    console.log(item);
  }
}
