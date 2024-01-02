import { treeNode } from "../helpers/treeNode.js";

const lowestCommonAncestor = (root, p, q) => {
  const dfs = (root, pathP, pathQ) => {
    if (root === null) return [];

    if (pathP[pathP.length - 1] !== p.val) {
      pathP.push(root);
    }

    if (pathQ[pathQ.length - 1] !== q.val) {
      pathQ.push(root);
    }

    dfs(root.left, pathP, pathQ);

    dfs(root.right, pathP, pathQ);

    if (pathP[pathP.length - 1]?.val !== p.val) {
      pathP.pop();
    }

    if (pathQ[pathQ.length - 1]?.val !== q.val) {
      pathQ.pop();
    }

    return [pathP, pathQ];
  };

  const [pathP, pathQ] = dfs(root, [], []);

  for (let i = pathP.length - 1; i >= 0; i--) {
    for (let j = pathQ.length - 1; j >= 0; j--) {
      if (pathP[i].val === pathQ[j].val) {
        return pathP[i];
      }
    }
  }
};

// console.log(pathP);
// console.log(pathQ);

const tree1 = treeNode([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);

const tree2 = treeNode([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);

const tree3 = treeNode([3, 5, 1, 6, 2, 0, 8, 10, null, 7, 4]);

const tree4 = treeNode([3, 5, 1, 6, 2, 0, 8, 10, null, 7, 4]);

const tree5 = treeNode([3, 5, 1, 6, 2, 0, 8, 10, null, 7, 4]);

// console.log(lowestCommonAncestor(tree1, 5, 1));
console.log(lowestCommonAncestor(tree5, treeNode([5]), treeNode([1])));
