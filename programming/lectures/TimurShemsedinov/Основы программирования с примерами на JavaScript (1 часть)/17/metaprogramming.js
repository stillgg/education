const socket = new WebSocket("ws://127.0.0.1:8000/");

const buildAPI = (methods) => {
  const api = {};

  for (const method of methods) {
    api[method] = (...args) =>
      new Promise((resolve) => {
        socket.send(JSON.stringify({ method, args }));
        socket.onmessage = (event) => {
          const data = JSON.parse(event.data);
          resolve(data);
        };
      });
  }
  
  return api;
};
