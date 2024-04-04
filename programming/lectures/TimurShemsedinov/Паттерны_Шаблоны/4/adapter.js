class Adapter extends Obj {
  clear() {
    this.delete();
  }

  add() {
    this.push();
  }
}

class Obj {
  delete() {}

  push() {}
}
