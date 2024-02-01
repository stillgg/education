const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("timeout");
      resolve();
    }, 1000);
  });
};

const f = async () => {
  console.log(1);
  await sleep();
  console.log(2);
};

f();
