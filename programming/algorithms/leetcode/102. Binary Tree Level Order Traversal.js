import { treeNode } from "../helpers/treeNode.js";

const levelOrder = (root) => {
  const result = [];

  const dfs = (root, deep) => {
    if (root === null) return;

    if (result[deep] === undefined) result.push([root.val]);
    else result[deep].push(root.val);

    dfs(root.left, deep + 1);

    dfs(root.right, deep + 1);
  };

  dfs(root, 0);

  return result;
};

const treeNode1 = treeNode([1, 2, 2, 3, 4, 4, 3]);

console.log(levelOrder(treeNode1));
