import timers from "timers";

const { _unrefActive, active } = timers;
// console.log(Object.keys(timers));

setInterval(function () {
  clearInterval(this.ref());
  //   console.log("ref - ");
  console.log("keys - ", Object.keys(this));
}, 500);
