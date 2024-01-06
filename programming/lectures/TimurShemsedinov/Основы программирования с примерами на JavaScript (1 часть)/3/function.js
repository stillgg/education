const capitalized = (name) => name.charAt(0).toUpperCase() + name.slice(1);

const welcome = ({ name }) => `Welcome, ${capitalized(name)}!`;

console.log(
  welcome({
    name: "Marcus",
  })
);
