import { treeNode } from "../helpers/treeNode.js";

const maxPathSum = (node) => {
  let maxPath = -Infinity;

  const dfs = (node) => {
    if (node === null) return 0;

    const leftSum = Math.max(dfs(node.left), 0);
    const rightSum = Math.max(dfs(node.right), 0);

    const totalSum = leftSum + rightSum + node.val;

    maxPath = Math.max(maxPath, totalSum);

    return Math.max(leftSum, rightSum) + node.val;
  };

  dfs(node);

  return maxPath;
};

const tree1 = treeNode([-1, 10, 2, -20, 5, 3, -4]);

const tree2 = treeNode([-1, -10, -2, -20, 5, -3, -4]);

const tree3 = treeNode([-10, 11, 20, null, null, 15, 7]);

console.log(maxPathSum(tree3));
