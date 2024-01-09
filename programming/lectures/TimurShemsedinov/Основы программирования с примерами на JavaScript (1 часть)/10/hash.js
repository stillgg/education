const hash = () => {
  return {
    getGlobalContext: () => {
      return this;
    },
    write(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
      return this;
    },
  };
};

const a = hash().write("Egor", "Rakutov").write("Vasya", "Pupkin");

for (const key in a) console.log(key);

a.getGlobalContext();
