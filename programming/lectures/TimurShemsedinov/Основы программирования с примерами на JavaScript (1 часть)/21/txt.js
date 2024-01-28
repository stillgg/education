console.log("Prototype implementation");
{
  function Text(text) {
    this.value = text;
  }

  Text.prototype.line = function (text) {
    this.value += "\n" + text;
    return this;
  };

  const text = new Text("line1").line("line2").line("line3");
  console.log(text.value);
}

console.log("Classes implementation");
{
  class Text {
    constructor(text) {
      this.value = text;
    }
    line(text) {
      this.value += "\n" + text;
      return this;
    }
  }

  const text = new Text("line1").line("line2").line("line3");

  console.log(text.value);
}

console.log("closure with this");
{
  const text = (s) => ({
    value: s,
    line(s) {
      this.value += "\n" + s;
      return this;
    },
  });

  const foo = text("line1").line("line2").line("line3");
  console.log(foo.value);
}

console.log("Functor implementation");
{
  const text = (baseStr) => ({
    value: baseStr,
    line: (str) => text(baseStr + "\n" + str),
  });

  const foo = text("line1").line("line2").line("line3");
  console.log(foo.value);
}
