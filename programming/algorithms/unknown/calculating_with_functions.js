const n = (digit) => (f) => f ? f(digit) : digit;

const zero = n(0);
const one = n(1);
const two = n(2);
const three = n(3);
const four = n(4);
const five = n(5);
const six = n(6);
const seven = n(7);
const eight = n(8);
const nine = n(9);

const plus = (r) => (l) => l + r;
const minus = (r) => (l) => l - r;
const times = (r) => (l) => l * r;
const dividedBy = (r) => (l) => Math.floor(l / r);

console.log(seven(times(five()))); // 35
console.log(four(plus(nine()))); // 13
console.log(eight(minus(three()))); // 5
console.log(six(dividedBy(two()))); // 3
