import { treeNode } from "../helpers/treeNode.js";

const isValidBST = (root) => {
  const isValid = (root, left, right) => {
    if (root === null) return true;

    if (root.val <= left || root.val >= right) return false;

    return (
      isValid(root.left, left, root.val) && isValid(root.right, root.val, right)
    );
  };

  return isValid(root, -Infinity, Infinity);
};

const treeNode1 = treeNode([2, 1, 3]);
const treeNode2 = treeNode([5, 4, 6, null, null, 3, 7]);
const treeNode3 = treeNode([20, 15, null, 10, 16]);

console.log(isValidBST(treeNode1));
