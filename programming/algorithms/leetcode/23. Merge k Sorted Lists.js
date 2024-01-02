import {
  ListNode,
  arrToLinkedList,
  fromLinkedListToArr,
} from "./helpers/linkedList.js";

var mergeTwoLists = function (list1, list2) {
  const result = new ListNode();
  let head = result;

  console.log("list1 - ", list1);
  console.log("list2 - ", list2);

  while (list1 !== null || list2 !== null) {
    const val1 = list1 !== null ? list1.val : Infinity;
    const val2 = list2 !== null ? list2.val : Infinity;

    if (list1 !== null && val1 <= val2) {
      head.next = new ListNode(val1);
      list1 = list1.next;
      head = head.next;
    }

    if (list2 !== null && val2 <= val1) {
      list2 = list2.next;
      head.next = new ListNode(val2);
      head = head.next;
    }
  }

  return result.next;
};

var mergeKLists = function (lists) {
  let result = new ListNode(-Infinity);

  for (let i = 0; i < lists.length; i++) {
    let list1 = lists[i];
    let list2 = result;

    const tmp = mergeTwoLists(list1, list2);
    console.log(tmp);
    result = tmp;
  }

  return result.next;
};

// const list1 = arrToLinkedList([1, 2, 3, 6]);
// const list2 = arrToLinkedList([1, 2, 3, 8]);
// const list3 = arrToLinkedList([1, 2, 3, 4, 5]);

const list1 = arrToLinkedList([2]);
const list2 = arrToLinkedList([]);
const list3 = arrToLinkedList([-1]);

// mergeKLists([list1, list2, list3]);

console.log(fromLinkedListToArr(mergeKLists([list1, list2, list3])));
