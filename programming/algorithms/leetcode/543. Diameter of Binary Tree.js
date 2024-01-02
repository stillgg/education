import { treeNode } from "../helpers/treeNode.js";

const diameterOfBinaryTree = (root) => {
  const dfs = (root, deep) => {
    if (root === null) return 0;

    dfs(root.left, deep + 1);
    dfs(root.right, deep + 1);

    return deep;
  };

  const leftDeep = dfs(root.left, 0);
  const rightDeep = dfs(root.right, 0);

  return leftDeep + rightDeep;
};

const tree1 = treeNode([
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  null,
  null,
  null,
  null,
  null,
  null,
  2,
  9,
  null,
  null,
  10,
]);

diameterOfBinaryTree(tree1);
