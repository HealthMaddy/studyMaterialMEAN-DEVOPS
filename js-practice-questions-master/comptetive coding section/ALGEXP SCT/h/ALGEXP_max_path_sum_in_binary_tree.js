/*
Max Path Sum In Binary Tree
Write a function that takes in a Binary Tree and returns its max path sum.
A path is a collection of connected nodes in a tree, where no node is connected to more than two
other nodes; a path sum is the sum of the values of the nodes in a particular path.
Each BinaryTree node has an integer value , a left child node, and a right child node.
Children nodes can either be BinaryTree nodes themselves or None / null .
Sample Input
tree = 1
 / \
 2 3
 / \ / \
4 5 6 7
Sample Output
18 // 5 + 2 + 1 + 3 + 7
*/

//SOLUTION 1
//TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(log(n))

function maxPathSum(tree) {
  const [_, maxSum] = findMaxSum(tree);
  return maxSum;
}

function findMaxSum(tree) {
  if (tree === null) return [0, -Infinity];

  const [leftMaxSumAsBranch, leftMaxPathSum] = findMaxSum(tree.left);
  const [rightMaxSumAsBranch, rightMaxPathSum] = findMaxSum(tree.right);
  const maxChildSumAsBranch = Math.max(leftMaxSumAsBranch, rightMaxSumAsBranch);

  const { value } = tree;

  const maxSumAsBranch = Math.max(maxChildSumAsBranch + value, value);
  const maxSumAsRootNode = Math.max(
    leftMaxSumAsBranch + value + rightMaxSumAsBranch,
    maxSumAsBranch
  );
  const maxPathSum = Math.max(
    leftMaxPathSum,
    rightMaxPathSum,
    maxSumAsRootNode
  );

  return [maxSumAsBranch, maxPathSum];
}
