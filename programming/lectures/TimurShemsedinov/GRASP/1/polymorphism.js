class Person {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }

  info() {
    return {
      name: this.name,
      health: this.health,
    };
  }
}

class Zombie extends Person {}

class Soldier extends Person {}

const zombic = new Person("zob", 50);
const soldier = new Soldier("Petya", 100);

console.log("zombic info - ", zombic.info());
console.log("soldier info - ", soldier.info());
