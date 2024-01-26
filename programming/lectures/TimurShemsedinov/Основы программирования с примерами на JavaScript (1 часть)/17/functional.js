const view = (lens, obj) => lens.get(obj);
const set = (lens, val, obj) => lens.set(val, obj);
const over = (lens, map, obj) => lens.set(map(lens.get(obj)), obj);
const remove = (lens, obj) => lens.delete(obj);

const lens = (source, destination = source) => ({
  get: (obj) => obj[source],
  set: (val, obj) => ({ ...obj, [destination]: val }),
  delete: (obj) => {
    const { [destination]: forgot, ...other } = obj;
    return other;
  },
});
