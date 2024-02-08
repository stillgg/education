const linkedList = () => {
  const node = (value) => {
    const last = {
      value,
      prev: node.tail || null,
      next: null,
    };

    if (node.tail === null) node.head = last;

    node.tail = last;

    if (node.tail.prev !== null) {
      Object.assign(node.tail.prev, {
        next: last,
      });
    }

    return node;
  };

  node.tail = null;
  node.head = null;

  node[Symbol.iterator] = () => {
    let tail = node.head;

    return {
      next() {
        if (tail === null) return { done: true };

        const value = tail.value;
        tail = tail.next;

        return { done: false, value };
      },
    };
  };

  return node;
};

const list = linkedList();

list(1)(2)(3);

for (const item of list) {
  console.log("item - ", item);
}
