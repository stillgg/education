class Foo {
  static smt() {
    throw new Error(`smt method isn't implimented`);
  }
}

class Bar extends Foo {
  constructor() {
    super();
  }
}

class Baz extends Foo {
  constructor() {
    super();
  }

  static smt() {
    console.log("works well");
  }
}

Baz.smt();
Bar.smt();
