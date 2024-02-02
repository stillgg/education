import { readFileSync } from "node:fs";

const getDataset = (file) => {
  const lines = readFileSync(file, "utf8").split("\n");
  lines.shift();

  return lines.map((line) => line.replace("\r", "").split(","));
};

const getCitiesMap = () => {
  const map = new Map();

  const cities = getDataset("./cities.csv");

  for (const [city, population, area] of cities) {
    map.set(city, [population, area]);
  }

  return map;
};

console.log(getCitiesMap());
