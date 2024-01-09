const a = (b) => (c) => a(b + c);

for (let i = 1; i < 1e35; i++) {
  console.log(a(i));
  if (i === 1e3) {
    console.dir(a(1));
    break;
  }
}
