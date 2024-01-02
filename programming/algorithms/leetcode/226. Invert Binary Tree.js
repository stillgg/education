import { treeNode } from "../helpers/treeNode.js";

const invertTree = function (root) {
  if (root === null) return null;

  const left = root.left;
  root.left = root.right;
  root.right = left;

  invertTree(root.left);

  invertTree(root.right);

  return root;
};

const tree1 = treeNode([1, 2, 3, null, 5, 2, 4]);
const tree2 = treeNode([1, 2]);
const tree3 = treeNode([1, 2, 3, null, null, 4, null]);
const tree4 = treeNode([1, null, 3]);
const tree5 = treeNode([1, 2, 3, 4]);

console.log(invertTree(tree1));
