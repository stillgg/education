import { treeNode } from "../helpers/treeNode.js";

// bfs

const rightSideView = (root) => {
  if (root === null) return [];

  const result = [];

  const queue = [root];

  while (queue.length) {
    const size = queue.length;

    result.push(queue[size - 1].val);

    for (let i = 0; i < size; i++) {
      const subtree = queue.shift();

      if (subtree === null) continue;

      if (subtree.left !== null) queue.push(subtree.left);

      if (subtree.right !== null) queue.push(subtree.right);
    }
  }

  return result;
};

const tree1 = treeNode([1, 2, 3, null, 5, 2, 4]);
const tree2 = treeNode([1, 2]);
const tree3 = treeNode([1, 2, 3, null, null, 4, null]);
const tree4 = treeNode([1, null, 3]);
const tree5 = treeNode([1, 2, 3, 4]);

console.log(rightSideView(tree5));
