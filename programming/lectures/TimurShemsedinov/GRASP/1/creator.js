/*
It's GRASP creator because UserFactory with static method createUser
create user
*/

class User {
  constructor(name) {
    this.name = name;
  }
}

class UserFactory {
  static createUser(name) {
    return new User(name);
  }
}

const user1 = UserFactory.createUser("Petruha");

console.log("user1 - ", user1);
