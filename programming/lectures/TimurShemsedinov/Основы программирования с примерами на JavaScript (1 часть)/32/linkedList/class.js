class LinkedList {
  constructor() {
    this.tail = null;
    this.head = null;
  }

  insert(index, data) {
    const node = this.findNode((item, i) => index === i);

    const prev = node.prev;
    const next = node;

    const insertElement = {
      next,
      prev,
      value: data,
    };

    if (index === 0) this.head = insertElement;
    if (prev !== null) prev.next = insertElement;
    if (next !== null) next.prev = insertElement;
  }

  findNode(callback) {
    let tail = this.head;

    let index = 0;

    while (callback(tail.value, index) === false) {
      tail = tail.next;
      index++;
    }

    return tail;
  }

  find(callback) {
    const node = this.findNode(callback);
    return node?.value;
  }

  delete(index, count) {
    const start = this.findNode((item, i) => index === i);
    const end = this.findNode((item, i) => index + count === i);

    const isFirstDeleted = start.prev === null;
    const isLastDeleted = end.next === null;

    if (isFirstDeleted && isLastDeleted) {
      this.head = null;
      this.tail = null;

      return null;
    } else if (isFirstDeleted) {
      end.prev = this.tail;
      this.tail.next = end;
    } else if (isLastDeleted) {
      start.next = this.tail;
      this.tail.prev = start;
    }

    return this.head;
  }

  push(value) {
    const lastNode = {
      prev: this.tail || null,
      value,
      next: null,
    };

    if (this.tail === null) this.head = lastNode;

    this.tail = lastNode;

    if (this.tail.prev !== null) {
      Object.assign(this.tail.prev, {
        next: lastNode,
      });
    }

    return lastNode;
  }

  [Symbol.iterator]() {
    let tail = this.head;
    return {
      next() {
        if (tail === null) return { done: true };

        const value = tail.value;
        tail = tail.next;

        return { done: false, value };
      },
    };
  }
}

const linkedList = new LinkedList();

linkedList.push({ foo: "1" });
linkedList.push({ bar: "2" });
linkedList.push({ baz: "4" });

linkedList.insert(2, { baz: "3" });
linkedList.insert(0, { foo: "0" });

// console.log(linkedList.find((item, index) => index === 0));

console.log(linkedList.delete(1, 1));

// console.dir(linkedList.tail, { depth: 5 });

// for (const item of linkedList) {
//   console.log("item - ", item);
// }
