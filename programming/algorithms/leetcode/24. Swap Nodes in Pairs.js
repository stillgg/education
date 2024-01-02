import {
  ListNode,
  arrToLinkedList,
  fromLinkedListToArr,
} from "./helpers/linkedList.js";

var swapPairs = function (list) {
  let result = new ListNode();
  let headResult = result;
  let head = list;
  let isStartPair = true;

  while (head !== null) {
    const val1 = head.val;
    const val2 = head?.next?.val;

    if (isStartPair) {
      if (val2 === undefined) {
        headResult.next = new ListNode(val1);
      } else {
        headResult.next = new ListNode(val2);
        headResult.next.next = new ListNode(val1);
      }

      headResult = headResult.next?.next || null;
    }

    head = head.next;

    if (isStartPair) {
      isStartPair = false;
    } else {
      isStartPair = true;
    }
  }

  return result.next;
};

// const list1 = arrToLinkedList([1, 2, 3, 6, 8]);
const list1 = arrToLinkedList([4, 0, 6, 2, 8]);

console.log(fromLinkedListToArr(swapPairs(list1)));
