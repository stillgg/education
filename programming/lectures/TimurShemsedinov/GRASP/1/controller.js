class Controller {
  static order() {
    console.log("do logic");
    console.log("order");
  }
}

class Btn {
  click(callback) {
    callback();
  }
}

const redBtn = new Btn();

redBtn.click(Controller.order);
