const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("new city", (city) => {
  console.log("emit new city - ", city);
});

emitter.emit("new city", "bogdania");
