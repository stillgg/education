class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const treeNode = (arr) => {
  const result = [];
  const tmp = [];

  let start = 0;
  let end = 1;
  let prev = -1;

  while (arr[start] !== undefined) {
    const nodes = arr.slice(start, end);
    tmp.push(nodes);

    const tmp2 = [];

    let isLeft = true;
    let prevTailIndex = 0;

    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i] !== null ? new TreeNode(nodes[i]) : null;
      tmp2.push(node);

      if (result[prev] === undefined) continue;

      if (isLeft) {
        if (result[prev][prevTailIndex] !== null) {
          result[prev][prevTailIndex].left = node;
        }
        isLeft = false;
      } else {
        if (result[prev][prevTailIndex]) {
          result[prev][prevTailIndex].right = node;
        }

        isLeft = true;
        prevTailIndex++;
      }
    }

    result.push(tmp2);

    start = end;
    end = end * 2 + 1;
    prev++;
  }

  return result[0][0];
};

export { treeNode };
