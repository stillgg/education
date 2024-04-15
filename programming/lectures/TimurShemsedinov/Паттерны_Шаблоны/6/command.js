class CookBreakfast {
  static execute() {
    console.log("cook");
  }
}

class Kitchener {
  cookBreakfast() {
    CookBreakfast.execute();
  }
}
