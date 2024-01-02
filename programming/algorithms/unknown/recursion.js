const matryoshka = (n) => {
  if (n === 1) {
    console.log("Матрешечка");
  } else {
    console.log("Верх матрешки", n);
    matryoshka(n - 1);
    console.log("Низ матрешки", n);
  }
};

matryoshka(5);
