// Реализовать стек, очередь и дэк на прототипах и замыканиях
stack: {
  const stack = () => {
    const fn = () => {
      return fn.start;
    };

    fn.push = (value) => {
      const start = fn.start;

      fn.start = {
        prev: start,
        value,
      };
    };

    fn.pop = () => {
      const res = fn.start;

      fn.start = fn.start?.prev || null;

      return res;
    };

    fn.start = null;

    return fn;
  };

  const s1 = stack();

  s1.push(1);
  s1.push(2);

  console.log("pop - ", s1.pop());

  console.log("stack - ", s1());
}

queue: {
  const queue = () => {
    let start = null;

    const fn = () => {
      return {
        start,
      };
    };

    fn.put = (value) => {
      const obj = {
        value,
        next: null,
      };

      if (start === null) start = obj;

      start = Object.assign(start, {
        next: obj,
      });
    };

    fn.pick = () => {
      const res = start;

      start = start?.next || null;

      return res;
    };

    return fn;
  };

  const q1 = queue();

  q1.put(1);
  q1.put(2);
  console.log("pick - ", q1.pick());
  console.log("queue - ", q1());
}

deque: {
  const deque = () => {
    let start = null;
    let end = null;

    const fn = () => {
      return start;
    };

    fn.push = (value) => {
      const node = {
        prev: end,
        value,
        next: null,
      };

      if (start === null) start = node;

      if (end !== null) Object.assign(end, { prev: node });

      end = node;

      return node;
    };

    fn.pop = () => {
      const res = end;

      if (end?.prev) end.prev.next = null;

      return res;
    };

    fn.shift = () => {
      const res = start;

      if (start !== null) start = start.next;

      return res;
    };

    fn.unshift = (value) => {
      const node = {
        prev: null,
        next: start,
        value,
      };

      start = node;

      return node;
    };

    return fn;
  };

  const deq1 = deque();

  deq1.push(1);
  deq1.push(2);
  console.log("deque pop - ", deq1.pop());
  deq1.unshift(0);
  console.log("deque shift - ", deq1.shift());
  console.log("deque - ", deq1());
}
