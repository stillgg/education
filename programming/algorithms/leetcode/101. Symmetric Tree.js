import { treeNode } from "../helpers/treeNode.js";

const isSymmetric = (root) => {
  const dfs = (left, right) => {
    if (left === null && right === null) return true;

    if (left === null || right === null) return false;

    return (
      left === right &&
      dfs(left.left, right.right) &&
      dfs(left.right, right.left)
    );
  };

  return dfs(root.left, root.right);
};

const treeNode1 = treeNode([1, 2, 2, 3, 4, 4, 3]);

console.log(isSymmetric(treeNode1));
