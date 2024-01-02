class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const buildTree = (preorder, inorder) => {
  if (!preorder.length || !inorder.length) return null;

  const val = preorder[0];

  const midIndex = inorder.findIndex((v) => val === v);

  if (midIndex === -1) return null;

  const tree = new TreeNode(
    val,
    buildTree(preorder.slice(1), inorder.slice(0, midIndex)),
    buildTree(preorder.slice(midIndex + 1), inorder.slice(midIndex + 1))
  );

  return tree;
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
