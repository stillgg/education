const tag = (strings, ...values) => {
  console.dir({ strings, values });
};

const greeting = "Hello";
const person = { name: "Marcus Aurelius" };

const text = tag`${greeting} ${person.name}!`;

console.dir(text);
