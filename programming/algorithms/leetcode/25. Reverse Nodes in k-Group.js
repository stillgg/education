import {
  ListNode,
  arrToLinkedList,
  fromLinkedListToArr,
} from "./helpers/linkedList.js";

const copyList = (list) => {
  const result = new ListNode();
  let resultHead = result;
  let head = list;

  while (head !== null) {
    const val = head.val;
    resultHead.next = new ListNode(val);
    resultHead = resultHead.next;
    head = head.next;
  }

  return result.next;
};

const reverseList = (list, k) => {
  const arr = [];

  let head = list;
  let counter = 0;

  while (head !== null && counter <= k) {
    arr.push(head.val);
    head = head.next;
    counter++;
  }

  const reversedArr = arr.reverse();

  head = list;

  if (reversedArr.length !== k + 1) {
    return list;
  }

  for (let i = 0; i < reversedArr.length; i++) {
    const num = reversedArr[i];
    head.val = num;
    head = head.next;
  }

  return list;
};

var reverseKGroup = function (list, k) {
  k--;
  const copy = copyList(list);
  let head = copy;
  let counter = 0;

  while (head !== null) {
    if (counter === 0) {
      // console.log(head.val);
      reverseList(head, k);
    }

    head = head.next;

    if (counter === k) {
      counter = 0;
    } else {
      counter++;
    }
  }

  return copy;
};

// const list1 = arrToLinkedList([1, 2, 3, 6, 8]);
const list1 = arrToLinkedList([1, 2, 3, 4, 5]);

console.log(fromLinkedListToArr(reverseKGroup(list1, 2)));
// console.log(fromLinkedListToArr(reverseList(list1, 2)));
