/*
meaning of variables:
listener - calls several times
callback - calls one time 
*/

const iterate = (array, listener) => {
  for (const item of array) {
    listener(item);
  }
};

const cities = ["a", "b", "c"];

const logCity = (city) => {
  console.log("city is", city);
};

iterate(cities, logCity);
