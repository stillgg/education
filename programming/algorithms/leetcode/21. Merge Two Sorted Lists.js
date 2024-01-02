var mergeTwoLists = function (list1, list2) {
  const result = new ListNode();
  let head = result;

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
