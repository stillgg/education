class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const sortedArrayToBST = (nums) => {
  if (!nums.length) return null;

  const midIndex = Math.floor(nums.length / 2);

  const tree = new TreeNode(
    nums[midIndex],
    sortedArrayToBST(nums.slice(0, [midIndex])),
    sortedArrayToBST(nums.slice(midIndex + 1))
  );

  return tree;
};

// console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));

console.log(sortedArrayToBST([-10, -3, 0, 5, 9, 10, 11]));
