"use strict";

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const factory = (Class) =>
  class extends Class {
    toString() {
      return `x - ${this.x}, y - ${this.y}`;
    }
  };

const Point2 = factory(Point);
const Point3 = factory(Point);

console.log(new Point(1, 2));
console.log(new Point2(1, 2).toString());
console.log(Point3);
