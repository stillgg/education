function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function createList(totalEl) {
  const head = new ListNode(1);
  next = head;

  for (let i = 2; i <= totalEl; i++) {
    const el = new ListNode(i);
    next.next = el;
    next = el;
  }

  return head;
}

function iterate(linkedList) {
  let next = linkedList;

  while (next !== null) {
    console.log("val ", next.val);
    next = next.next;
  }
}

//first solution

// const removeNthFromEnd = (head, n) => {
//   const length = getLength(head);

//   const deleteIndex = length - n;

//   let currentEl = head;
//   let prevEl = null;

//   let i = 0;

//   while (currentEl !== null) {
//     const nextEl = currentEl.next || null;

//     if (deleteIndex - 1 < 0 && length === 1) {
//       return head.next;
//     }

//     if (i === deleteIndex || deleteIndex - 1 < 0) {
//       if (prevEl !== null) {
//         prevEl.next = nextEl;
//       } else {
//         currentEl.val = nextEl.val;
//         currentEl.next = nextEl.next;
//       }
//       break;
//     }

//     prevEl = currentEl;
//     currentEl = currentEl.next;
//     i++;
//   }

//   return head;
// };

// function getLength(linkedList) {
//   let length = 0;

//   let next = linkedList;

//   while (next !== null) {
//     length++;
//     next = next.next;
//   }

//   return length;
// }

//second solution
const removeNthFromEnd = (head, n) => {
  const start = new ListNode(0, head);
  let l = start;
  let r = start;

  while (n > 0 && r.next !== null) {
    r = r.next;
    n--;
  }

  while (r.next !== null) {
    l = l.next;
    r = r.next;
  }

  l.next = l.next.next;

  return start.next;
};

const l = createList(5);

const l2 = createList(1);

const l3 = createList(2);

// removeNthFromEnd(l, 2);

// removeNthFromEnd(l2, 1);

// removeNthFromEnd(l3, 2);
