class Strategy1 {
  do() {
    console.log("do first strategy");
  }
}

class Strategy2 {
  do() {
    console.log("do second strategy");
  }
}

class Strategy3 {
  do() {
    console.log("do third strategy");
  }
}

class Main {
  constructor(Strategy) {
    this.strategy = new Strategy();
  }
  do() {
    this.strategy.do();
  }
}

const firstStrategy = new Main(Strategy1);
const secondStrategy = new Main(Strategy2);
const thirdStrategy = new Main(Strategy3);

firstStrategy.do();
secondStrategy.do();
thirdStrategy.do();
