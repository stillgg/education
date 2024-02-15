class Figure {
  #foo() {
    console.log("foo");
  }
  static bar() {
    console.log("bar");
  }
}

class Number extends Figure {
  static baz() {
    console.log("baz");
  }
  test() {
    console.log("test");
  }
}

// Figure.foo(); // error
// Figure.bar();
// Number.bar();
// Number.foo(); // error

const ex = new Number();

// ex.baz(); // error
// ex.test();
