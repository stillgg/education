function josephusSurvivor(n, k) {
  k--;
  const persons = [];

  for (let i = 0; i < n; i++) {
    persons.push(i + 1);
  }

  let result = persons.slice(0);
  let stepIndex = 0; // следим на каком шаге сейчас находимся
  let pointerIndex = 0; // на каком индексе результирующего массива

  while (result.length !== 1) {
    const item = result[pointerIndex];

    if (stepIndex === k) {
      result.splice(pointerIndex, 1); // удаляем один элемент
      stepIndex = 0;
    } else if (pointerIndex === result.length - 1) {
      pointerIndex = 0;
      stepIndex++;
    } else if (item === undefined) {
      pointerIndex = 0;
      stepIndex = 0;
    } else {
      pointerIndex++;
      stepIndex++;
    }
  }

  return result[0];
}

console.log(josephusSurvivor(7, 3)); //, 4);
console.log(josephusSurvivor(11, 19)); //, 10);
console.log(josephusSurvivor(1, 300)); //, 1);
console.log(josephusSurvivor(14, 2)); //, 13);
console.log(josephusSurvivor(100, 1)); //, 100);
