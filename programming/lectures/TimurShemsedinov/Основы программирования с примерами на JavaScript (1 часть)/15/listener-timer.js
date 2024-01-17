// wrong implimentation
const killByTimer = (names, listener) => {
  for (const name of names) {
    const timer = setInterval(() => {
      if (names.length === 0) {
        console.log("you kill everyone, good boy");
        return clearTimeout(timer);
      }
      listener(names);
      console.log("death note - ", names);
    }, 1500);
  }
  console.log(names);
};

const kill = (names) => {
  const name = names.shift();
  console.log(`killed ${name} and removed`);
};

const deathNote = ["rykiBazuki", "Mongol", "Stas Boretski"];

killByTimer(deathNote, kill);
