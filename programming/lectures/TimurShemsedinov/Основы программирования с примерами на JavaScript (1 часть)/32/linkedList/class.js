// .clone():list
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
    const head = this.head;
    if (!head) return null;

    const cloneLinkedList = new LinkedList();

    let tailCloneList = cloneLinkedList;
    let tailOriginalList = head;

    while (tailOriginalList) {
      tailOriginalList = tailOriginalList.next;

      if (tailOriginalList === null) break;

      Object.assign(tailCloneList, {
        next: {
          prev: tailCloneList,
          value: tailOriginalList.value,
          next: null,
        },
      });

      tailCloneList = tailCloneList.next;
    }

    console.log("clone - ", cloneLinkedList);

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
