Node: {
  //   class Node {
  //     constructor(prev, value) {
  //       const last = {
  //         value,
  //         prev,
  //         next: null,
  //       };
  //       this.prev = last.prev;
  //       this.next = last.next;
  //       this.value = last.value;
  //       if (this.prev !== null) {
  //         Object.assign(this.prev, {
  //           next: last,
  //         });
  //       }
  //     }
  //   }
  //   const n1 = new Node(null, "first");
  //   const n2 = new Node(n1, "second");
}

LinkedList: {
  class LinkedList {
    constructor() {
      this.tail = null;
    }

    push(value) {
      const lastNode = {
        prev: this.tail || null,
        value,
        next: null,
      };

      this.tail = lastNode;

      if (this.tail.prev !== null) {
        Object.assign(this.tail.prev, {
          next: lastNode,
        });
      }

      return lastNode;
    }
  }

  const linkedList = new LinkedList();

  linkedList.push({ foo: "1" });
  linkedList.push({ bar: "2" });
  linkedList.push({ baz: "3" });

  console.dir(linkedList.tail, { depth: 5 });
}
