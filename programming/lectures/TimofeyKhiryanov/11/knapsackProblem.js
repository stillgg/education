// wrong

const EMPTY = { name: "", cost: 0, weight: 0 };

const max = (...objects) => {
  let max = { ...EMPTY };

  for (let i = 0; i < objects.length; i++) {
    const obj = objects[i];
    if (obj.cost > max.cost) max = obj;
  }

  return max;
};

const solution = (elements, maxWeight) => {
  const weights = elements.map((i) => i.weight);
  maxWeight = maxWeight || Math.max(...weights);
  const minWeight = Math.min(...weights);

  const lenEl = elements.length;
  const len = Math.round(maxWeight / minWeight);
  const matrix = new Array(lenEl + 1)
    .fill(0)
    .map((i) => new Array(len + 1).fill(0).map((i) => ({ ...EMPTY })));

  for (let i = 1; i < lenEl + 1; i++) {
    for (let j = 1; j < len + 1; j++) {
      const el = elements[i - 1];
      const left = matrix[i][j - 1];
      const top = matrix[i - 1][j];
      const diagonal = matrix[i - 1][j - 1];

      const weight = j * minWeight;

      if (weight === el.weight) {
        matrix[i][j] = max(el, top, left);
      } else if (weight >= diagonal.weight + el.weight) {
        const obj = {
          name:
            diagonal.name === "" ? el.name : `${diagonal.name} + ${el.name}`,
          cost: diagonal.cost + el.cost,
          weight: diagonal.weight + el.weight,
        };

        matrix[i][j] = max(obj, top, left);
      } else {
        matrix[i][j] = max(top, left);
      }
    }
  }

  console.log(matrix);

  return matrix[elements.length][len];
};

// const elements = [
//   {
//     name: "guitar",
//     cost: 1500,
//     weight: 1,
//   },
//   {
//     name: "radio",
//     cost: 3000,
//     weight: 4,
//   },
//   {
//     name: "laptop",
//     cost: 2000,
//     weight: 3,
//   },
//   {
//     name: "iphone",
//     cost: 2000,
//     weight: 1,
//   },
//   {
//     name: "mp3",
//     cost: 1000,
//     weight: 1,
//   },
//   {
//     name: "Jewelry",
//     weight: 0.5,
//     cost: 1500,
//   },
// ];

const elements = [
  {
    name: "iphone",
    cost: 2000,
    weight: 1,
  },
  {
    name: "laptop",
    cost: 2000,
    weight: 4,
  },
  {
    name: "radio",
    cost: 5000,
    weight: 6,
  },
];

// console.log(solution(elements, 9));
console.log(solution(elements, 7));
