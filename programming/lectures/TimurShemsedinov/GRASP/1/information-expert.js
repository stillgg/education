/*
It's information expert because in animal incapsulate logic of animal class
Animal knows everything about name and age and methods of animal
*/

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  run() {
    console.log(`${this.name} is running`);
  }

  jump() {
    console.log(`${this.name} is jumping`);
  }

  swim() {
    console.log(`${this.name} is swimming`);
  }
}

const dog = new Animal("popi", 2);
const frog = new Animal("tropi", 0.2);
