class Adder {
  constructor(value = 0) {
    this.value = value;
    this.steps = [value];
  }

  add(value = 0) {
    this.value += value;
    this.steps.push(value);
    return this;
  }
}

const instance = new Adder().add(5);

console.log(instance);
