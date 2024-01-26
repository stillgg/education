class Observable {
  constructor() {
    this.observer = null;
    setInterval(() => {
      if (!this.observer) return;
      const char = randomChar();
      this.observer(char);
    }, 200);
  }
  subscribe(observer) {
    this.observer = observer;
    return this;
  }
}
