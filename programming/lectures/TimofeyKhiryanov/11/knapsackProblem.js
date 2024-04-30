const solution = (elements) => {
  const weights = elements.map((i) => i.weight);
  const maxWeight = Math.max(...weights);
  const minWeight = Math.min(...weights);

  const lenEl = elements.length;
  const len = Math.round(maxWeight / minWeight);
  const matrix = new Array(lenEl + 1)
    .fill(0)
    .map((i) => new Array(len + 1).fill(0));

  for (let i = 1; i < lenEl + 1; i++) {
    let n = 0;
    for (let j = 1; j < len + 1; j++) {
      const el = elements[i - 1];
      const left = matrix[i][j - 1];
      const top = matrix[i - 1][j];
      const diagonal = matrix[i - 1][j - 1];

      const weight = (j - n) * minWeight;

      if (weight === el.weight) {
        matrix[i][j] = Math.max(el.cost, top, left);
      } else if (weight > el.weight) {
        matrix[i][j] = Math.max(diagonal + el.cost, top, left);
        n = j;
      } else {
        matrix[i][j] = Math.max(top, left);
      }
    }
  }

  console.log(matrix);

  return matrix[elements.length][len];
};

const elements = [
  {
    name: "guitar",
    cost: 1500,
    weight: 1,
  },
  {
    name: "laptop",
    cost: 2000,
    weight: 3,
  },
  {
    name: "radio",
    cost: 3000,
    weight: 4,
  },
  {
    name: "iphone",
    cost: 2000,
    weight: 1,
  },
  {
    name: "mp3",
    cost: 1000,
    weight: 1,
  },
  {
    name: "Jewelry",
    weight: 0.5,
    cost: 1500,
  },
];

console.log(solution(elements));
