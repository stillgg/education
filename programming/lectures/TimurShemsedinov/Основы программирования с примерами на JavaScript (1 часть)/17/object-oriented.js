class Triangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return Math.floor((this.width / 2) * this.height);
  }
}
