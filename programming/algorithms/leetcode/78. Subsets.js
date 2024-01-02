const subsets = (nums) => {
  const answer = [];

  const tmp = [];

  const dfs = (i) => {
    if (i > nums.length - 1) {
      answer.push(tmp.slice());
      return;
    }

    tmp.push(nums[i]);

    dfs(i + 1);

    tmp.pop();

    dfs(i + 1);
  };

  dfs(0);

  return answer;
};

console.log(subsets([1, 2, 3]));
