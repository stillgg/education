const compose = (...fns) => {
    return (...args) => {
      return fns.reduceRight((acc, fn) => {
        if (Array.isArray(acc)) return fn(...acc);
        return fn(acc);
      }, args);
    };
  };
  
  const projection = (md) => {
    const keys = Object.keys(md);
  
    const wrapper = (obj) => {
      const hash = {};
  
      // console.log("keys - ", keys);
  
      for (const key of keys) {
        const [field, ...expressions] = md[key];
  
        const fns = expressions.filter((v) => typeof v === "function");
  
        const metadata = expressions.find((v) => typeof v === "object");
  
        const value = obj[field];
  
        if (!value) continue;
      }
  
      return hash;
    };
  
    wrapper.join = (key, projection) => {
      keys.push(key);
      md[key] = [key, (arr) => arr.map(projection)];
      return wrapper;
    };
  
    return wrapper;
  };
  
  const persons = [
    {
      name: "Marcus Aurelius",
      city: "Rome",
      born: 121,
      places: [
        { name: "Shanghai", population: 24256800, country: "China" },
        { name: "Beijing", population: 21516000, country: "China" },
        { name: "Delhi", population: 16787941, country: "India" },
      ],
    },
    {
      name: "Victor Glushkov",
      city: "Rostov on Don",
      born: 1923,
      places: [
        { name: "Lagos", population: 16060303, country: "Nigeria" },
        { name: "Delhi", population: 16787941, country: "India" },
        { name: "Tianjin", population: 15200000, country: "China" },
      ],
    },
    {
      name: "Ibn Arabi",
      city: "Murcia",
      born: 1165,
      places: [{ name: "Beijing" }],
    },
    { name: "Mao Zedong", city: "Shaoshan", born: 1893 },
    {
      name: "Rene Descartes",
      city: "La Haye en Touraine",
      born: 1596,
      places: [
        { name: "Karachi", population: 14910352, country: "Pakistan" },
        { name: "Istanbul", population: 14160467, country: "Turkey" },
        { name: "Tianjin", population: 15200000, country: "China" },
      ],
    },
  ];
  
  const md1 = {
    name: ["name"],
    place: ["city", (s) => `<${s.toUpperCase()}>`],
    born: ["born"],
    age: [
      "born",
      (year) =>
        new Date().getFullYear() - new Date(year.toString()).getFullYear(),
    ],
  };
  
  const md2 = {
    address: ["name", (s) => s.toUpperCase()],
    population: ["population"],
  };
  
  const md3 = {
    name: ["name"],
    place: ["city", (s) => `<${s.toUpperCase()}>`],
    born: ["born"],
    age: [
      "born",
      (year) =>
        new Date().getFullYear() - new Date(year.toString()).getFullYear(),
    ],
    places: ["places", md2],
  };
  
  const p1 = projection(md1);
  const p2 = projection(md2);
  const p3 = p1.join("places", p2);
  const p4 = projection(md3);
  
  // const data = persons.map(p3);
  // const data = persons.map(p1);
  const data = persons.map(p4);
  console.dir(data, { depth: 5 });
  