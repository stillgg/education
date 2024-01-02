function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

// const addTwoNumbers = (l1, l2) => {
//   let sum = 0;
//   let current = new ListNode(0);
//   let result = current;

//   while (l1 || l2) {
//     console.log("current", current);
//     if (l1) {
//       sum += l1.val;
//       l1 = l1.next;
//     }

//     if (l2) {
//       sum += l2.val;
//       l2 = l2.next;
//     }

//     current.next = new ListNode(sum % 10);
//     current = current.next;

//     sum = sum > 9 ? 1 : 0;
//   }

//   if (sum) {
//     current.next = new ListNode(sum);
//   }

//   return result.next;
// };

const compareObj = (obj1, obj2) => {
  if (typeof obj1 === "object" && typeof obj2 === "object") {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }
  return null;
};

// const convertLinkedArrToArr = (linkedArr) => {
//   const res = [];
//   link = linkedArr;

//   while (true) {
//     res.push(link.val);

//     if (link.next === null) {
//       break;
//     }

//     link = link.next;
//   }

//   return res;
// };

const convertArrToLinkedArr = (arr) => {
  const list = new ListNode(arr[0]);
  let link = list;

  for (let i = 1; i < arr.length; i++) {
    link.next = new ListNode(arr[i]);
    link = link.next;
  }

  return list;
};

// const addTwoNumbers = function (l1, l2) {
//   const normolizeL1 = convertLinkedArrToArr(l1);
//   const normolizeL2 = convertLinkedArrToArr(l2);

//   const n1 = Number(normolizeL1.toString().split(",").join(""));
//   const n2 = Number(normolizeL2.toString().split(",").join(""));
//   const arr = (n1 + n2).toString().split("").reverse();

//   return convertArrToLinkedArr(arr.map(Number));
// };

const addTwoNumbers = (l1, l2) => {
  let result = new ListNode();
  let link = result;
  let curry = 0;

  while (l1 || l2 || curry === 1) {
    let sum = (l1?.val || 0) + (l2?.val || 0);

    link.next = new ListNode((sum + curry) % 10);
    link = link.next;

    if (sum + curry >= 10) {
      curry = 1;
    } else {
      curry = 0;
    }

    l1 = l1 !== null ? l1.next : null;
    l2 = l2 !== null ? l2.next : null;
  }

  return result.next;
};

const linkedArr1 = convertArrToLinkedArr([2, 4, 3]);
const linkedArr2 = convertArrToLinkedArr([5, 6, 4]);

const linkedArr3 = convertArrToLinkedArr([2, 4, 9]);
const linkedArr4 = convertArrToLinkedArr([5, 6, 4, 9]);

// console.log(addTwoNumbers(linkedArr1, linkedArr2));
console.log(addTwoNumbers(linkedArr3, linkedArr4));
