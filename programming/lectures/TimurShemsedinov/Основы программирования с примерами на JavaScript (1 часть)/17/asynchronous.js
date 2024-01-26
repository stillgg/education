Promise.resolve()
  .then(readConfig.bind(null, "myConfig"))
  .then(query.bind(null, "select * from cities"))
  .then(httpGet.bind(null, "http://kpi.ua"))
  .catch((err) => console.log(err.message))
  .then(readFile.bind(null, "README.md"))
  .catch((err) => console.log(err.message))
  .then((data) => {
    console.dir({ data });
  });
