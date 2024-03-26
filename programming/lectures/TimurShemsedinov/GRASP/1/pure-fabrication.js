/*
 using third class Geometry we manupulating other objects
*/

class Square {
  constructor() {
    this.name = "Square";
  }
}

class Triangle {
  constructor() {
    this.name = "Triangle";
  }
}

class Geometry {
  static rotate(shape, deg) {
    console.log(`rotate ${shape.name} on ${deg} degrees`);
  }
}

const square1 = new Square();
const triangle1 = new Triangle();

Geometry.rotate(square1, 25);
Geometry.rotate(triangle1, 90);
