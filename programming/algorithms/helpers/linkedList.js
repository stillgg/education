export function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

export function arrToLinkedList(arr) {
  const result = new ListNode();
  let head = result;

  for (const i of arr) {
    head.next = new ListNode(i);
    head = head.next;
  }

  return result.next;
}

export function fromLinkedListToArr(linkedList) {
  const arr = [];
  let tail = linkedList;

  while (tail !== null) {
    arr.push(tail.val);
    tail = tail.next;
  }

  return arr;
}

export function iterate(linkedList) {
  let next = linkedList;

  while (next !== null) {
    console.log("val ", next.val);
    next = next.next;
  }
}
