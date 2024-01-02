import { treeNode } from "../helpers/treeNode.js";

const kthSmallest = (root, k) => {
  const arr = [];

  const dfs = (root) => {
    if (root === null) return;

    dfs(root.left);

    arr.push(root.val);

    dfs(root.right);
  };

  dfs(root);

  return arr[k - 1];
};

const tree1 = treeNode([1, 2, 3, null, 5, 2, 4]);
const tree2 = treeNode([1, 2]);
const tree3 = treeNode([1, 2, 3, null, null, 4, null]);
const tree4 = treeNode([1, null, 3]);
const tree5 = treeNode([1, 2, 3, 4]);

console.log(kthSmallest(tree1));
