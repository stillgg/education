const inorderTraversal = (root) => {
  const result = [];

  const helper = (root) => {
    if (root === null) {
      return null;
    }
    helper(root.left);

    if (root.val !== null) {
      result.push(root.val);
    }

    helper(root.right);
  };

  helper(root);

  return result;
};
