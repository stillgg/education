const linkedList = () => {
  const node = (value) => {
    const last = {
      value,
      prev: node.tail || null,
      next: null,
    };

    node.tail = last;

    if (node.tail.prev !== null) {
      Object.assign(node.tail.prev, {
        next: last,
      });
    }

    return node;
  };

  node.tail = null;

  return node;
};

const list = linkedList();

console.dir(list(1)(2)(3).tail, { depth: 3 });
