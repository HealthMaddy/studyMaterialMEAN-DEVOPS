/*
 Branch Sums
Write a function that takes in a Binary Tree
and returns a list of its branch sums ordered
from leftmost branch sum to rightmost
branch sum.
A branch sum is the sum of all values in a
Binary Tree branch. A Binary Tree branch is a
path of nodes in a tree that starts at the root
node and ends at any leaf node.
Each BinaryTree node has an integer
value , a left child node, and a right
child node. Children nodes can either be
BinaryTree nodes themselves or None /
null .
Sample Input
tree = 1
 / \
 2 3
 / \ / \
 4 5 6 7
 / \ /
 8 9 10
Sample Output
[15, 16, 18, 10, 11]
// 15 == 1 + 2 + 4 + 8
// 16 == 1 + 2 + 4 + 9
// 18 == 1 + 2 + 5 + 10
// 10 == 1 + 3 + 6
// 11 == 1 + 3 + 7
*/
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSum(root) {
  let sumsArr = [];
  traversAndSum(root, 0, sumsArr);
  return sumsArr;
}

//SOLUTION 1 :Recursive
// TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(n) - wherte n is no. of nodes in a binary tree

function traversAndSum(node, sumValue, sumsArr) {
  if (!node) return;
  const currentSum = node.value + sumValue;
  if (!node.left && !node.rigth) {
    sumsArr.push(currentSum);
    return;
  }

  traversAndSum(node.left, currentSum, sumsArr);
  traversAndSum(node.right, currentSum, sumsArr);
}
