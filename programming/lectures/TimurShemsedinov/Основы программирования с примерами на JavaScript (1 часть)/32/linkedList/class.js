// .compare(list):Boolean

// .find(item => expression:Boolean):data
// .filter(item => expression:Boolean):list
// .indexOf(data):Number
// .includes(data):Boolean
// .map(item => f(item)):list
// .reduce
// concat
// copyWithin
// entries
// every
// fill
// sort

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

    while (tail !== null && callback(tail.value, index) === false) {
      tail = tail.next;
      index++;
    }

    return tail;
  }

  findNodeByIndex(index) {
    return this.findNode((item, i) => index === i);
  }

  find(callback) {
    const node = this.findNode(callback);
    return node?.value;
  }

  filter(callback) {
    const list = this.clone();
    let tail = list.head;

    while (tail) {
      const isDeleted = Boolean(callback(tail.value));
      const prev = tail.prev;
      const next = tail.next;

      if (isDeleted) {
        if (prev !== null) prev.next = next;
        else list.head = next;

        if (next) next.prev = prev;
      }

      tail = tail.next;
    }

    return list;
  }

  indexOf(data) {
    let tail = this.head;
    let isExist = false;

    let i = -1;

    while (tail && isExist === false) {
      if (tail.value === data) {
        isExist = true;
      }
      i++;
      tail = tail.next;
    }

    return isExist ? i : -1;
  }

  findFirst() {
    return this.findNodeByIndex(0);
  }

  delete(index, count) {
    const startDeletedList = this.findNodeByIndex(index);
    const endDeletedList = this.findNodeByIndex(index + count - 1);

    const startNewList = startDeletedList?.prev || null;
    const endNewList = endDeletedList?.next || null;

    if (startNewList) startNewList.next = end;
    if (endNewList) endNewList.prev = startNewList;

    this.head = startNewList || endNewList;

    if (startDeletedList) startDeletedList.prev = null;
    if (endDeletedList) endDeletedList.next = null;

    return startDeletedList;
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

  append(data) {
    return this.push(data);
  }

  prepend(data) {
    return this.insert(0, data);
  }

  clone() {
    const cloneLinkedList = new LinkedList();

    let tail = this.head;

    while (tail) {
      cloneLinkedList.push(tail.value);
      tail = tail.next;
    }

    return cloneLinkedList;
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

linkedList.prepend({ foo: "-1" });

// console.log(linkedList.find((item, index) => index === 0));

// console.log("delete - ", linkedList.delete(0, 2));

console.dir(linkedList.head, { depth: 5 });

for (const item of linkedList) {
  console.log("item - ", item);
}

const cloneLinkedList = linkedList.clone();

for (const item of cloneLinkedList) {
  console.log("clone item - ", item);
}

// console.log(cloneLinkedList.tail === linkedList.tail);

const filteredList = cloneLinkedList.filter((item) => item.foo);
// console.dir({ depth: 5 });

console.log("filter: ");
console.dir(filteredList, { depth: 5 });

console.log("indexOf - ", filteredList.indexOf(filteredList.tail?.value));
