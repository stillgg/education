// Antipattern: Fool proof code
// Assumption: idiots will pass anything to my function
{
  const max = (...args) => {
    if (args.length !== 2) {
      throw new Error("Function expects two arguments");
    }

    const a = args.shift();

    if (typeof a !== "number") {
      throw new Error("Unexpected type of first argument");
    }

    const b = args.shift();

    if (typeof b !== "number") {
      throw new Error("Unexpected type of second argument");
    }

    return a > b ? a : b;
  };
}
