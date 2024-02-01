import { hrtime } from "node:process";

const start = hrtime.bigint();

const getDiff = () => (hrtime.bigint() - start) / 1000000n;

setTimeout(() => {
  console.log("timer 1");
}, 0);

setTimeout(() => {
  console.log("timer 2");
}, 0);

setTimeout(() => {
  console.log("timer 3");
}, 1);

setTimeout(() => {
  console.log("timer 4");
}, 1);

const interval1 = setInterval(() => {
  clearInterval(interval1);
  console.log("interval 1");
}, 0);

const interval2 = setInterval(() => {
  clearInterval(interval2);
  console.log("interval 2");
  console.log(getDiff());
}, 1000);

setImmediate(() => {
  console.log("immediate");
});

process.nextTick(() => {
  console.log("next tick");
}); // this next tick influences on setImmediate
