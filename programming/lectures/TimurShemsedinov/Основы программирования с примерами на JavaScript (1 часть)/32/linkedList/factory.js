const linkedList = () => {
  let tail = null;
  let start = null;

  return {
    push(value) {
      const lastNode = {
        prev: tail || null,
        next: null,
        value,
      };

      if (tail === null) {
        start = lastNode;
      }

      tail = lastNode;

      if (lastNode.prev !== null) {
        Object.assign(tail.prev, {
          next: lastNode,
        });
      }

      return lastNode;
    },
    [Symbol.iterator]() {
      let link = start;

      return {
        next() {
          if (link === null) return { done: true };

          const value = link.value;
          link = link.next;

          return { done: false, value };
        },
      };
    },
  };
};

const list = linkedList();

list.push(1);
list.push(2);
list.push(3);

for (const item of list) {
  console.log(item);
}
