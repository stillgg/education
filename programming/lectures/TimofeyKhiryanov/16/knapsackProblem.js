const findMax = (...elements) => {
  let max = {
    name: '',
    weight: 0,
    price: 0,
  };

  for (const element of elements) {
    if (element.price > max.price) max = element;
  }

  return max;
};

const solution = (arr) => {
  
};

const electronics = [
  {
    name: "Iphone",
    weight: 1,
    price: 2000,
  },
  {
    name: "Laptop",
    weight: 4,
    price: 2000,
  },
  {
    name: "Radio",
    weight: 6,
    price: 1500,
  },
  {
    name: "Airpods",
    weight: 0.5,
    price: 200,
  },
  {
    name: "Xiaomi",
    weight: 0.8,
    price: 500,
  },
  {
    name: "Playstation",
    weight: 3,
    price: 800,
  },
];

console.log(solution(electronics));
