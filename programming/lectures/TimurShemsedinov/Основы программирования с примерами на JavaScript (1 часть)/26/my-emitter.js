functionalEmitter: {
  const eventEmitter = () => {
    const events = {};

    eventEmitter.emit = (event, ...args) => events[event](...args);

    eventEmitter.on = (event, callback) => (events[event] = callback);

    return eventEmitter;
  };

  const emitter1 = eventEmitter();

  emitter1.on("event1", (number) => console.log("call first event - ", number));

  emitter1.emit("event1", 1);
}

classesEmitter: {
  class MyEmitter {
    constructor() {
      this.events = {};
    }
    emit(event, ...args) {
      this.events[event](...args);
    }
    on(event, callback) {
      this.events[event] = callback;
    }
  }

  const emitter1 = new MyEmitter();

  emitter1.on("event1", (number) =>
    console.log("class event emitter works pretty well - ", number)
  );

  emitter1.emit("event1", 1);
}

prototypeEmitter: {
  function MyEmitter() {
    this.events = {};
  }

  MyEmitter.prototype.on = function (eventName, callback) {
    this.events[eventName] = callback;
  };
  MyEmitter.prototype.emit = function (eventName, ...args) {
    this.events[eventName](...args);
  };

  const emitter1 = new MyEmitter();

  emitter1.on("event1", (number) =>
    console.log("emitter on prototypes work really well - ", number)
  );

  emitter1.emit("event1", 1);
}
