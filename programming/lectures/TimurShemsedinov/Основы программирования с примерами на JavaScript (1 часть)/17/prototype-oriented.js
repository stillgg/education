function Triangle(width, height) {
  this.width = width;
  this.height = height;
}

Object.defineProperties(Triangle.prototype, {
  area: {
    get: function () {
      return (this.width / 2) * this.height;
    },
  },
});

const triangle1 = new Triangle(3, 5);

console.log(triangle1.area);
