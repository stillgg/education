const matryoshka = (n) => {
  if (n === 1) {
    console.log("Small matryoshka");

    return {};
  } else {
    console.log("matryoshka top part - ", n);
    const m = matryoshka(n - 1);
    console.log("matryoshka bottom part - ", n);
    console.log(m);
  }
};

matryoshka(8);
