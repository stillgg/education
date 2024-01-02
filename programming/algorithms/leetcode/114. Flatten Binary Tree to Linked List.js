import { treeNode } from "../helpers/treeNode.js";

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const flatten = (root) => {
  if (root === null) return;

  const treeNode = new TreeNode(
    root.val,
    null,
    flatten(root.left) && flatten(root.right)
  );

  return treeNode;
};

const tree1 = treeNode([1, 2, 5, 3, 4, null, 6]);

consolel.log(flatten(tree1));
