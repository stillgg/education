import { treeNode } from "../helpers/treeNode.js";

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */

const pathSum = (root, targetSum) => {
  const answer = 0;

  const dfs = (root, total) => {
    if (root === null) return 0;

    if (total === targetSum) {
      answer++;
    }

    dfs(root.left, root.val + total);

    dfs(root.right, root.val + total);
  };

  const queue = [root];

  while (queue.length) {
    const subtree = queue.pop();

    dfs(subtree, 0);

    const left = subtree.left;
    const right = subtree.right;

    if (left !== null) queue.push(left);
    if (right !== null) queue.push(right);
  }

  return answer;
};
